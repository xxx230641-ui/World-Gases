import fs from 'fs';

let c = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

if (!c.includes("'special_discount':")) {
  c = c.replace(/('no_products': 'عذراً، لا توجد منتجات في هذا القسم حالياً.',)/, "$1\n    'special_discount': 'خصم خاص',\n    'new_offer': 'عرض جديد',\n    'mega_sale': 'تخفيضات الكبرى',");
  c = c.replace(/('no_products': 'Sorry, there are no products in this category at the moment.',)/, "$1\n    'special_discount': 'Special Discount',\n    'new_offer': 'New Offer',\n    'mega_sale': 'Mega Sale',");
}

fs.writeFileSync('src/context/LanguageContext.tsx', c);
