import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({});
async function run() {
  const res = await ai.models.list();
  for await (const m of res) {
    if (m.name.includes('flash')) console.log(m.name);
  }
}
run();
