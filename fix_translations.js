import fs from 'fs';

let p = fs.readFileSync('src/data/products.ts', 'utf8');

// Basic dictionary replacements for descriptionEn
p = p.replace(/descriptionEn: "([^"]+)\(Translated\)"/g, (match, p1) => {
  let en = p1;
  en = en.replace(/موقد طهي بلت ان/g, 'Built-in Cooktop');
  en = en.replace(/موقد طهي بلت ان زجاج/g, 'Built-in Glass Cooktop');
  en = en.replace(/موقد طهي بلت ان ستيل اسود/g, 'Built-in Black Steel Cooktop');
  en = en.replace(/موقد طهي بلت ان ستيل اسود تيفال/g, 'Built-in Black Tefal Steel Cooktop');
  en = en.replace(/5 عيون/g, '5 burners');
  en = en.replace(/أمان كامل/g, 'full safety');
  en = en.replace(/اشعال ذاتي|إشعال ذاتي/g, 'auto-ignition');
  en = en.replace(/مناصب سكب/g, 'cast iron pan supports');
  en = en.replace(/مناصب رفيعة/g, 'slim pan supports');
  en = en.replace(/كفالة الوكيل/g, 'agent warranty');
  en = en.replace(/صناعة إيطالية/g, 'Italian made');
  en = en.replace(/إيطالي/g, 'Italian');
  en = en.replace(/،/g, ',');
  
  return `descriptionEn: "${en.trim()}"`;
});

fs.writeFileSync('src/data/products.ts', p);
