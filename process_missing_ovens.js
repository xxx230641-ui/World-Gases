import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function processChunk(files) {
  const parts = files.map(file => ({
    inlineData: {
      data: Buffer.from(fs.readFileSync(file)).toString("base64"),
      mimeType: "image/jpeg"
    }
  }));

  const prompt = `You are a data extraction assistant. I will provide you with ${files.length} images of ovens. For EACH image in the exact order, extract the following information from the text inside the image:
  - title (Arabic product title)
  - titleEn (English translation of the title)
  - description (Arabic description, specs, features listed)
  - descriptionEn (English translation of the description)
  - size (Size in Arabic, e.g. "90 سم")
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
      if (e.status === 429 || e.status === 503) {
        console.log("Rate limited / 503, sleeping 20s...");
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
  let productsContent = fs.readFileSync('src/data/products.ts', 'utf8');
  const allOvens = fs.readdirSync('public/images/ovens').filter(f => f.endsWith('.jpg')).map(f => `public/images/ovens/${f}`);
  
  let missingFiles = [];
  for (const file of allOvens) {
    if (!productsContent.includes(path.basename(file))) {
      missingFiles.push(file);
    }
  }
  
  console.log(`Found ${missingFiles.length} missing ovens.`);
  
  let newProducts = [];
  let idCounter = 300;
  
  const chunkSize = 15;
  for (let i = 0; i < missingFiles.length; i += chunkSize) {
    const chunk = missingFiles.slice(i, i + chunkSize);
    console.log(`Processing chunk ${Math.floor(i/chunkSize) + 1}... (${chunk.length} images)`);
    try {
      const results = await processChunk(chunk);
      for (let j = 0; j < chunk.length; j++) {
        const res = results[j] || {};
        newProducts.push(`  {
    "id": "ovens-new-${idCounter++}",
    "title": "${res.title || 'فرن بلت ان'}",
    "titleEn": "${res.titleEn || 'Built-in Oven'}",
    "category": "افران بلت ان Built-in غاز وكهرباء",
    "categoryEn": "Built-in Gas & Electric Ovens",
    "image": "/${chunk[j].replace(/\\/g, '/')}",
    "description": "${(res.description || '').replace(/"/g, '\\"')}",
    "descriptionEn": "${(res.descriptionEn || '').replace(/"/g, '\\"')}",
    "size": "${res.size || ''}",
    "price": "${res.price || ''}"
  }`);
      }
      await new Promise(r => setTimeout(r, 2000));
    } catch (e) {
      console.error("Chunk failed", e);
    }
  }

  if (newProducts.length > 0) {
    const toInject = newProducts.join(',\n') + ',\n  {';
    productsContent = productsContent.replace('  {', toInject);
    fs.writeFileSync('src/data/products.ts', productsContent);
    console.log(`Injected ${newProducts.length} new ovens.`);
  }
}

run();
