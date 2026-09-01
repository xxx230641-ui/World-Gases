const fs = require('fs');
const path = require('path');

const cooktopsDir = 'public/images/cooktops';
const microwavesDir = 'public/images/microwaves';
const ovensDir = 'public/images/ovens';

const getFiles = (dir) => fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png')) : [];

const cooktopFiles = getFiles(cooktopsDir);
const microwaveFiles = getFiles(microwavesDir);
const ovenFiles = getFiles(ovensDir);

const cooktopBrands = ['مييل Miele', 'بوش Bosch', 'سيمنز Siemens', 'أريستون Ariston', 'بيكو Beko', 'إل جي LG', 'سامسونج Samsung', 'تيكا Teka', 'سميج Smeg', 'غورينيه Gorenje', 'زانوسي Zanussi', 'إنديست Indesit'];
const sizes = ['60 سم', '75 سم', '90 سم'];
const microwaveSizes = ['20 لتر', '25 لتر', '30 لتر', '40 لتر'];
const ovenSizes = ['60 سم', '90 سم'];

const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
const randomPrice = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let products = [];
let idCounter = 1;

cooktopFiles.forEach(file => {
    const brand = randomItem(cooktopBrands);
    const size = randomItem(sizes);
    const price = randomPrice(100, 350);
    const burners = size === '90 سم' ? '5 عيون' : '4 عيون';
    const type = Math.random() > 0.5 ? 'غاز' : 'كهرباء';
    const typeEn = type === 'غاز' ? 'Gas' : 'Electric';
    
    products.push(`  {
    id: 'cooktop-${idCounter++}',
    title: 'طباخ ${type} بلت ان ${brand}',
    titleEn: '${brand} Built-in ${typeEn} Cooktop',
    category: 'طباخات غاز وكهرباء بلت ان Built-in',
    categoryEn: 'Built-in Gas & Electric Cooktops',
    image: '/images/cooktops/${file}',
    description: "موقد طهي بلت ان ${brand}، عرض ${size}، ${burners}، أمان كامل، إشعال ذاتي، تصميم عصري.",
    descriptionEn: "${brand} Built-in Cooktop, ${size} width, ${burners.replace('عيون', 'burners')}, full safety, auto-ignition, modern design.",
    size: "${size}",
    price: "${price} دينار"
  }`);
});

microwaveFiles.forEach(file => {
    const brand = randomItem(cooktopBrands);
    const size = randomItem(microwaveSizes);
    const price = randomPrice(80, 200);
    const power = randomPrice(7, 12) * 100;
    
    products.push(`  {
    id: 'microwave-${idCounter++}',
    title: 'مايكروويف بلت ان ${brand}',
    titleEn: '${brand} Built-in Microwave',
    category: 'مايكرويفات بلت ان Built-in',
    categoryEn: 'Built-in Microwaves',
    image: '/images/microwaves/${file}',
    description: "مايكروويف بلت ان ${brand}، سعة ${size}، قوة ${power} واط، شاشة ديجيتال، برامج طهي متعددة.",
    descriptionEn: "${brand} Built-in Microwave, ${size.replace('لتر', 'Liters')} capacity, ${power}W power, digital display, multiple cooking programs.",
    size: "${size}",
    price: "${price} دينار"
  }`);
});

ovenFiles.forEach(file => {
    const brand = randomItem(cooktopBrands);
    const size = randomItem(ovenSizes);
    const price = randomPrice(150, 450);
    const type = Math.random() > 0.5 ? 'غاز' : 'كهرباء';
    const typeEn = type === 'غاز' ? 'Gas' : 'Electric';
    
    products.push(`  {
    id: 'oven-${idCounter++}',
    title: 'فرن ${type} بلت ان ${brand}',
    titleEn: '${brand} Built-in ${typeEn} Oven',
    category: 'افران بلت ان Built-in غاز وكهرباء',
    categoryEn: 'Built-in Gas & Electric Ovens',
    image: '/images/ovens/${file}',
    description: "فرن بلت ان ${brand}، عرض ${size}، شواية، مروحة توزيع حرارة، أمان كامل، سهل التنظيف.",
    descriptionEn: "${brand} Built-in Oven, ${size} width, grill, convection fan, full safety, easy to clean.",
    size: "${size}",
    price: "${price} دينار"
  }`);
});

// Also preserve some products for other categories that might be in public/images/products/ or if we want placeholders
const otherCategories = [
  { name: 'ثلاجات بلت ان Built-in', nameEn: 'Built-in Refrigerators', prefix: 'fridge' },
  { name: 'جلايات بلت ان Built-in', nameEn: 'Built-in Dishwashers', prefix: 'dishwasher' },
  { name: 'شفاطات مطبخ وشفاطات جزيرة', nameEn: 'Kitchen & Island Hoods', prefix: 'hood' },
  { name: 'غسالات بلت ان Built-in', nameEn: 'Built-in Washing Machines', prefix: 'washing' },
  { name: 'كولرات بلت ان Built-in', nameEn: 'Built-in Water Coolers', prefix: 'cooler' }
];

otherCategories.forEach(cat => {
    for(let i = 1; i <= 3; i++) {
        products.push(`  {
    id: '${cat.prefix}-${idCounter++}',
    title: 'منتج من ${cat.name} ${i}',
    titleEn: 'Product from ${cat.nameEn} ${i}',
    category: '${cat.name}',
    categoryEn: '${cat.nameEn}',
    image: 'قالب صورة',
    description: "وصف منتج ${cat.name} ${i}، يتميز بجودة عالية وتصميم عصري وأداء ممتاز.",
    descriptionEn: "${cat.nameEn} ${i} description, features high quality, modern design, and excellent performance.",
    size: "قياسي",
    price: "${randomPrice(100, 500)} دينار"
  }`);
    }
});

const content = `export interface Product {
  id: string;
  title: string;
  titleEn?: string;
  category: string;
  categoryEn?: string;
  image: string;
  description?: string;
  descriptionEn?: string;
  size?: string;
  price?: string;
}

export const allProducts: Product[] = [
${products.join(',\n')}
];
`;

fs.writeFileSync('src/data/products.ts', content);
console.log('Updated src/data/products.ts with ' + products.length + ' products');
