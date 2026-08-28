import fs from 'fs';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});

async function run() {
  const code = fs.readFileSync('src/data/products.ts', 'utf-8');
  
  const prompt = `
I have a TypeScript file containing an array of products.
Please output the same file but with English translations added to each product object.
Update the Product interface to include:
  titleEn?: string;
  categoryEn?: string;
  descriptionEn?: string;

For every product in productsDatabase, add the translated fields.
The original Arabic fields MUST remain intact.
Here is the code:

\`\`\`typescript
${code}
\`\`\`

Return ONLY the updated TypeScript code, wrapped in \`\`\`typescript ... \`\`\`. Do NOT cut off the code, return the full file.
  `;

  const res = await ai.models.generateContent({
    model: 'gemini-3.6-flash',
    contents: prompt
  });

  let text = res.text.trim();
  if (text.startsWith('```typescript')) text = text.substring(13);
  if (text.startsWith('```')) text = text.substring(3);
  if (text.endsWith('```')) text = text.substring(0, text.length - 3);
  text = text.trim();

  fs.writeFileSync('src/data/products.ts', text);
  console.log('Translated products.ts');
}
run();
