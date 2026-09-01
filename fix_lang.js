import fs from 'fs';

let c = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

if (!c.includes("'back':")) {
  c = c.replace(/('special_offer': 'العرض القوي',)/, "$1\n    'back': 'رجوع',\n    'no_products': 'عذراً، لا توجد منتجات في هذا القسم حالياً.',");
  c = c.replace(/('special_offer': 'Special Offer',)/, "$1\n    'back': 'Back',\n    'no_products': 'Sorry, there are no products in this category at the moment.',");
}

fs.writeFileSync('src/context/LanguageContext.tsx', c);
