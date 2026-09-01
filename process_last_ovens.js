import { GoogleGenAI } from '@google/genai';
import fs from 'fs';
import path from 'path';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const files = [
  'public/images/ovens/IMG-20260901-WA0067.jpg',
  'public/images/ovens/IMG-20260901-WA0069.jpg',
  'public/images/ovens/IMG-20260901-WA0071.jpg'
];

async function run() {
  const parts = files.map(file => ({
    inlineData: {
      data: Buffer.from(fs.readFileSync(file)).toString("base64"),
      mimeType: "image/jpeg"
    }
  }));

  const prompt = `You are a data extraction assistant. Extract title, titleEn, description, descriptionEn, size, price from these 3 ovens. Return a JSON array of 3 objects.`;
  parts.push({ text: prompt });

  const response = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: [{ role: 'user', parts }],
    config: { responseMimeType: "application/json" }
  });

  const res = JSON.parse(response.text);
  
  let productsContent = fs.readFileSync('src/data/products.ts', 'utf8');
  let newProducts = [];
  
  let idCounter = 100;
  for (let i = 0; i < 3; i++) {
    const item = res[i];
    newProducts.push(`  {
    "id": "ovens-${idCounter++}",
    "title": "${item.title || 'فرن غاز بلت ان'}",
    "titleEn": "${item.titleEn || 'Built-in Gas Oven'}",
    "category": "افران بلت ان Built-in غاز وكهرباء",
    "categoryEn": "Built-in Gas & Electric Ovens",
    "image": "/images/ovens/${path.basename(files[i])}",
    "description": "${item.description || ''}",
    "descriptionEn": "${item.descriptionEn || ''}",
    "size": "${item.size || ''}",
    "price": "${item.price || ''}"
  }`);
  }
  
  const toInject = newProducts.join(',\n') + ',\n  {';
  productsContent = productsContent.replace('  {', toInject);
  
  fs.writeFileSync('src/data/products.ts', productsContent);
  console.log("Injected the last 3 ovens!");
}
run();
