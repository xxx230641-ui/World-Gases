const fs = require('fs');

let c = fs.readFileSync('src/components/Header.tsx', 'utf8');

const regex = /const filteredResults = productsDatabase.filter\(item =>\s*item.title.toLowerCase\(\).includes\(searchQuery.toLowerCase\(\)\) \|\| \s*item.category.toLowerCase\(\).includes\(searchQuery.toLowerCase\(\)\)\s*\);/g;

c = c.replace(regex, `const filteredResults = productsDatabase.filter(item => {
    const q = searchQuery.toLowerCase();
    return (
      (item.title && item.title.toLowerCase().includes(q)) || 
      (item.category && item.category.toLowerCase().includes(q)) ||
      (item.titleEn && item.titleEn.toLowerCase().includes(q)) ||
      (item.categoryEn && item.categoryEn.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.descriptionEn && item.descriptionEn.toLowerCase().includes(q))
    );
  });`);

fs.writeFileSync('src/components/Header.tsx', c);
