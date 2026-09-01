import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function processSingle(file) {
  const parts = [{
    inlineData: {
      data: Buffer.from(fs.readFileSync(file)).toString("base64"),
      mimeType: "image/jpeg"
    }
  }, { 
    text: `Extract the following from this oven image:
- title (Arabic product title)
- titleEn (English translation)
- description (Arabic description/specs)
- descriptionEn (English description)
- size (Size in Arabic)
- price (Price in Arabic/English. If no price, return empty string)
Return a single JSON object with these keys.`
  }];

  let retries = 3;
  while (retries > 0) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: [{ role: 'user', parts }],
        config: { responseMimeType: "application/json" }
      });
      return JSON.parse(response.text);
    } catch (e) {
      if (e.status === 429 || e.status === 503) {
        console.log("Rate limited / 503, waiting 10s...");
        await new Promise(r => setTimeout(r, 10000));
        retries--;
      } else {
        throw e;
      }
    }
  }
  return null;
}

async function run() {
  let content = fs.readFileSync('src/data/products.ts', 'utf8');
  
  const regex = /\{\s*"id":\s*"([^"]+)",\s*"title":\s*"فرن بلت ان Built-in",\s*"titleEn":\s*"Built-in Oven",\s*"category":\s*"افران بلت ان Built-in غاز وكهرباء",\s*"categoryEn":\s*"Built-in Gas & Electric Ovens",\s*"image":\s*"\/images\/ovens\/([^"]+)",\s*"description":\s*"فرن بلت ان ذو جودة عالية وتصميم عصري يناسب مطبخك\. اتصل بنا لمعرفة السعر والمواصفات\.",\s*"descriptionEn":\s*"High quality built-in oven with modern design\. Contact us for price and specs\.",\s*"size":\s*"قياسي",\s*"price":\s*"تواصل لمعرفة السعر"\s*\}/g;
  
  let matches = [];
  let match;
  while ((match = regex.exec(content)) !== null) {
    matches.push({
      fullMatch: match[0],
      id: match[1],
      imageName: match[2]
    });
  }
  
  console.log(`Found ${matches.length} placeholder ovens to process.`);
  
  let updatedCount = 0;
  for (const m of matches) {
    const filePath = path.join('public/images/ovens', m.imageName);
    console.log(`Processing ${filePath}...`);
    
    if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        continue;
    }
    
    const res = await processSingle(filePath);
    if (res) {
      const replacement = [
        '{',
        `    "id": "${m.id}",`,
        `    "title": "${res.title || 'فرن بلت ان'}",`,
        `    "titleEn": "${res.titleEn || 'Built-in Oven'}",`,
        `    "category": "افران بلت ان Built-in غاز وكهرباء",`,
        `    "categoryEn": "Built-in Gas & Electric Ovens",`,
        `    "image": "/images/ovens/${m.imageName}",`,
        `    "description": "${(res.description || '').replace(/"/g, '\\"')}",`,
        `    "descriptionEn": "${(res.descriptionEn || '').replace(/"/g, '\\"')}",`,
        `    "size": "${res.size || ''}",`,
        `    "price": "${res.price || ''}"`,
        '  }'
      ].join('\n');
      
      content = content.replace(m.fullMatch, replacement);
      fs.writeFileSync('src/data/products.ts', content);
      updatedCount++;
      console.log(`Updated ${m.imageName}`);
    } else {
      console.log(`Failed to process ${m.imageName}`);
    }
    await new Promise(r => setTimeout(r, 2000));
  }
  console.log(`Successfully updated ${updatedCount} products.`);
}

run();
