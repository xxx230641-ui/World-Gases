import fs from 'fs';
import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({});
const categories = ['oven', 'cooker', 'hood', 'microwave', 'cooler', 'dishwasher', 'washing', 'fridge'];

async function run() {
  if (!fs.existsSync('public/animations')) fs.mkdirSync('public/animations', { recursive: true });
  for (const cat of categories) {
    console.log('Generating', cat);
    try {
      const prompt = `Generate a valid, VERY MINIMAL, and tiny Lottie JSON animation (using SVG) representing a ${cat} appliance. 
      It must be a valid JSON object. Do NOT wrap it in markdown blockquotes like \`\`\`json. ONLY output the raw JSON starting with { and ending with }.`;
      const res = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: "application/json"
        }
      });
      let text = res.text.trim();
      JSON.parse(text); // validate
      fs.writeFileSync(`public/animations/${cat}.json`, text);
      console.log('Done', cat);
    } catch (e) {
      console.error('Failed', cat, e.message);
    }
    // Wait 5 seconds to avoid rate limits
    await new Promise(r => setTimeout(r, 5000));
  }
}
run();
