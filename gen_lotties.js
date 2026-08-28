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
        contents: prompt
      });
      let text = res.text.trim();
      if (text.startsWith('```json')) text = text.substring(7);
      if (text.startsWith('```')) text = text.substring(3);
      if (text.endsWith('```')) text = text.substring(0, text.length - 3);
      text = text.trim();
      
      JSON.parse(text); // validate
      fs.writeFileSync(`public/animations/${cat}.json`, text);
      console.log('Done', cat);
    } catch (e) {
      console.error('Failed', cat, e.message);
      fs.writeFileSync(`public/animations/${cat}.json`, `{"v":"5.5.2","fr":60,"ip":0,"op":60,"w":100,"h":100,"nm":"${cat}","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Square","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[50,50,0],"to":[0,-10,0],"ti":[0,10,0]},{"t":30,"s":[50,20,0]}],"ix":2,"l":2},"a":{"a":0,"k":[0,0,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[50,50],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"fl","c":{"a":0,"k":[0.9,0.5,0.1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":60,"st":0,"bm":0}]}`);
    }
  }
}
run();
