import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const files = fs.readdirSync('public/images/cooktops').slice(0, 5).map(f => `public/images/cooktops/${f}`);
    const parts = files.map(file => ({
      inlineData: {
        data: Buffer.from(fs.readFileSync(file)).toString("base64"),
        mimeType: "image/jpeg"
      }
    }));
    
    parts.push({ text: "For each image in order, extract the product title, price, size, and description in Arabic as written in the image. Return a JSON array of objects. Make sure the order matches the images." });

    console.log(`Testing batch of ${files.length}...`);
    const response = await ai.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: [{ role: 'user', parts }],
      config: {
        responseMimeType: "application/json"
      }
    });
    console.log(response.text);
  } catch(e) {
    console.error(`Failed:`, e.status, e.message, e);
  }
}
run();
