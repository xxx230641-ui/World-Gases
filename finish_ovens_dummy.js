import fs from 'fs';
import path from 'path';

let productsContent = fs.readFileSync('src/data/products.ts', 'utf8');
const allOvens = fs.readdirSync('public/images/ovens').filter(f => f.endsWith('.jpg')).map(f => `public/images/ovens/${f}`);

let missingFiles = allOvens.filter(file => !productsContent.includes(path.basename(file)));
console.log(`Found ${missingFiles.length} missing ovens.`);

let newProducts = [];
let idCounter = 500;

for (const file of missingFiles) {
  newProducts.push(`  {
    "id": "ovens-new-${idCounter++}",
    "title": "فرن بلت ان Built-in",
    "titleEn": "Built-in Oven",
    "category": "افران بلت ان Built-in غاز وكهرباء",
    "categoryEn": "Built-in Gas & Electric Ovens",
    "image": "/${file.replace(/\\/g, '/')}",
    "description": "فرن بلت ان ذو جودة عالية وتصميم عصري يناسب مطبخك. اتصل بنا لمعرفة السعر والمواصفات.",
    "descriptionEn": "High quality built-in oven with modern design. Contact us for price and specs.",
    "size": "قياسي",
    "price": "تواصل لمعرفة السعر"
  }`);
}

if (newProducts.length > 0) {
  const toInject = newProducts.join(',\n') + ',\n  {';
  productsContent = productsContent.replace('  {', toInject);
  fs.writeFileSync('src/data/products.ts', productsContent);
  console.log(`Injected ${newProducts.length} new ovens with placeholder data to complete the gallery.`);
}
