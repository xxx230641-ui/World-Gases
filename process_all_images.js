import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const categoriesConfig = {
  cooktops: {
    category: 'طباخات غاز وكهرباء بلت ان Built-in',
    categoryEn: 'Built-in Gas & Electric Cooktops'
  },
  microwaves: {
    category: 'مايكرويفات بلت ان Built-in',
    categoryEn: 'Built-in Microwaves'
  },
  ovens: {
    category: 'افران بلت ان Built-in غاز وكهرباء',
    categoryEn: 'Built-in Gas & Electric Ovens'
  }
};

async function processChunk(files, categoryKey) {
  const parts = files.map(file => ({
    inlineData: {
      data: Buffer.from(fs.readFileSync(file)).toString("base64"),
      mimeType: "image/jpeg"
    }
  }));

  const prompt = `You are a data extraction assistant. I will provide you with ${files.length} images of appliances. For EACH image in the exact order, extract the following information from the text inside the image:
  - title (Arabic product title)
  - titleEn (English translation of the title)
  - description (Arabic description, specs, features listed)
  - descriptionEn (English translation of the description)
  - size (Size in Arabic, e.g. "90 سم" or "30 لتر")
  - price (Price in Arabic/English, e.g. "240 دينار" or "240 JD". If no price, return empty string)
  
  Return a JSON array of exactly ${files.length} objects. Each object must have keys: title, titleEn, description, descriptionEn, size, price.
  Make sure the order perfectly matches the images.`;

  parts.push({ text: prompt });

  let retries = 3;
  while (retries > 0) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: [{ role: 'user', parts }],
        config: {
          responseMimeType: "application/json"
        }
      });
      return JSON.parse(response.text);
    } catch (e) {
      if (e.status === 429) {
        console.log("Rate limited, sleeping 20s...");
        await new Promise(r => setTimeout(r, 20000));
        retries--;
      } else {
        console.error("Error calling Gemini:", e.message);
        throw e;
      }
    }
  }
  throw new Error("Failed after retries");
}

async function run() {
  let allProducts = [];
  let idCounter = 1;

  for (const catKey of Object.keys(categoriesConfig)) {
    const dir = `public/images/${catKey}`;
    if (!fs.existsSync(dir)) continue;
    
    let files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png')).map(f => path.join(dir, f));
    
    const chunkSize = 15;
    for (let i = 0; i < files.length; i += chunkSize) {
      const chunk = files.slice(i, i + chunkSize);
      console.log(`Processing ${catKey} chunk ${Math.floor(i/chunkSize) + 1}/${Math.ceil(files.length/chunkSize)}... (${chunk.length} images)`);
      
      try {
        const results = await processChunk(chunk, catKey);
        
        for (let j = 0; j < chunk.length; j++) {
          const res = results[j] || {};
          allProducts.push({
            id: `${catKey}-${idCounter++}`,
            title: res.title || 'منتج غير معروف',
            titleEn: res.titleEn || 'Unknown Product',
            category: categoriesConfig[catKey].category,
            categoryEn: categoriesConfig[catKey].categoryEn,
            image: '/' + chunk[j].replace(/\\/g, '/'),
            description: res.description || '',
            descriptionEn: res.descriptionEn || '',
            size: res.size || '',
            price: res.price || ''
          });
        }
        // Small delay to prevent rate limit
        await new Promise(r => setTimeout(r, 2000));
      } catch (e) {
        console.error(`Failed to process chunk in ${catKey}`, e);
      }
    }
  }

  const content = `export interface Product {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  image: string;
  description?: string;
  descriptionEn?: string;
  size?: string;
  price?: string;
}

export const allProducts: Product[] = ${JSON.stringify(allProducts, null, 2)};

export const productsDatabase = allProducts;
export const getProductsByCategory = (category: string) => productsDatabase.filter(p => p.category === category || p.categoryEn === category);
`;

  fs.writeFileSync('src/data/products.ts', content);
  console.log('Successfully wrote src/data/products.ts with', allProducts.length, 'products.');
}

run();
