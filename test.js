import { GoogleGenAI } from '@google/genai';
const ai = new GoogleGenAI({});
ai.models.generateContent({
    model: 'gemini-1.5-flash',
    contents: 'hello'
}).then(console.log).catch(console.error);
