const fs = require('fs');

let c = fs.readFileSync('src/components/Header.tsx', 'utf8');

c = c.replace(/<span className="text-sm font-bold text-gray-800">\{item.title\}<\/span>/g, '<span className="text-sm font-bold text-gray-800">{language === \'en\' && item.titleEn ? item.titleEn : item.title}</span>');
c = c.replace(/<span className="text-\[10px\] text-gray-400 truncate">\{item.category\}<\/span>/g, '<span className="text-[10px] text-gray-400 truncate">{language === \'en\' && item.categoryEn ? item.categoryEn : item.category}</span>');

fs.writeFileSync('src/components/Header.tsx', c);
