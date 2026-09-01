import fs from 'fs';

let c = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

if (!c.includes("'world_of_gas':")) {
  c = c.replace(/('mega_sale': 'تخفيضات الكبرى',)/, "$1\n    'world_of_gas': 'عالم الغازات',\n    'contact_us_now': 'تواصل معنا',\n    'whatsapp': 'واتساب',\n    'facebook': 'فيسبوك',");
  c = c.replace(/('mega_sale': 'Mega Sale',)/, "$1\n    'world_of_gas': 'World of Gases',\n    'contact_us_now': 'Contact Us',\n    'whatsapp': 'WhatsApp',\n    'facebook': 'Facebook',");
}

fs.writeFileSync('src/context/LanguageContext.tsx', c);
