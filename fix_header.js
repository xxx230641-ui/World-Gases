import fs from 'fs';

let c = fs.readFileSync('src/components/Header.tsx', 'utf8');
c = c.replace(/const categories = Array\.from\(new Set\(productsDatabase\.map\(item => item\.category\)\)\);/g, 
`const categories = Array.from(new Set(productsDatabase.map(item => language === 'en' && item.categoryEn ? item.categoryEn : item.category)));`);

c = c.replace(/to={`\/category\/\$\{encodeURIComponent\(cat\)\}`}/g, "to={`/category/${encodeURIComponent(cat)}`}");

fs.writeFileSync('src/components/Header.tsx', c);
