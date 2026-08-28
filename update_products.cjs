const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

const additionalPlaceholders = `
  ...Array.from({ length: 54 }).map((_, i) => ({
    id: \`cooktop-placeholder-\${i + 1}\`,
    title: \`قالب طباخ غاز وكهرباء \${i + 1}\`,
    category: 'طباخات غاز وكهرباء بلت ان Built-in',
    image: 'قالب صورة'
  })),
`;

content = content.replace(
  "  { id: '8', title: 'موقد غاز زجاجي أسود أنيق', category: 'طباخات غاز وكهرباء بلت ان Built-in', image: 'قالب صورة' },",
  "  { id: '8', title: 'موقد غاز زجاجي أسود أنيق', category: 'طباخات غاز وكهرباء بلت ان Built-in', image: 'قالب صورة' },\n" + additionalPlaceholders
);

fs.writeFileSync('src/data/products.ts', content);
