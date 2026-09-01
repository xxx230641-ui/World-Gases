import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run(modelName) {
  try {
    const imagePath = 'public/images/cooktops/IMG-20260827-WA0001.jpg';
    const imagePart = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
        mimeType: "image/jpeg"
      }
    };
    
    console.log(`Testing ${modelName}...`);
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [
        { role: 'user', parts: [imagePart, { text: "What is the price and size in this image?" }] }
      ]
    });
    console.log(`${modelName} success:`, response.text);
  } catch(e) {
    console.error(`${modelName} failed:`, e.status, e.message);
  }
}

async function main() {
  await run('gemini-1.5-flash');
  await run('gemini-2.0-flash-exp');
  await run('gemini-2.5-flash');
}
main();
