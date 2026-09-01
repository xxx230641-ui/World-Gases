import { GoogleGenAI } from '@google/genai';
import fs from 'fs';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

async function run() {
  try {
    const imagePath = 'public/images/cooktops/IMG-20260827-WA0001.jpg';
    if (!fs.existsSync(imagePath)) {
        console.log("File not found");
        return;
    }
    const imagePart = {
      inlineData: {
        data: Buffer.from(fs.readFileSync(imagePath)).toString("base64"),
        mimeType: "image/jpeg"
      }
    };
    
    const response = await ai.models.generateContent({
      model: 'gemini-3.1-pro-preview',
      contents: [
        { role: 'user', parts: [imagePart, { text: "Extract the product name, price, size, and description from this image. Output JSON." }] }
      ]
    });
    console.log(response.text);
  } catch(e) {
    console.error(e);
  }
}
run();
