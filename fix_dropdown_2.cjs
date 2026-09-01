const fs = require('fs');
let c = fs.readFileSync('src/components/Header.tsx', 'utf8');

c = c.replace(/<span className="text-xs text-\[#f97316\] font-medium mt-1">\{item.category\}<\/span>/g, '<span className="text-xs text-[#f97316] font-medium mt-1">{language === \'en\' && item.categoryEn ? item.categoryEn : item.category}</span>');

fs.writeFileSync('src/components/Header.tsx', c);
