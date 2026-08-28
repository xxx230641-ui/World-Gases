import fs from 'fs';

// Update products.ts
let p = fs.readFileSync('src/data/products.ts', 'utf8');
p = p.replace(/export const getProductsByCategory = \(category: string\) => {/, `export const getProductsByCategory = (category: string) => {
  if (!category || category === 'الكل' || category === 'All') return productsDatabase;
  return productsDatabase.filter(p => p.category === category || p.categoryEn === category);`);
fs.writeFileSync('src/data/products.ts', p);

// Update ProductCard.tsx
let c = fs.readFileSync('src/components/ProductCard.tsx', 'utf8');
c = c.replace(/export default function ProductCard\(\{ title, category, image, description, size, price \}: ProductCardProps\) {/, 
`import { useLanguage } from '../context/LanguageContext';
export default function ProductCard({ title, category, image, description, size, price, titleEn, categoryEn, descriptionEn }: ProductCardProps & { titleEn?: string; categoryEn?: string; descriptionEn?: string; }) {
  const { language } = useLanguage();
`);
c = c.replace(/<h3 className="font-bold text-\[#1f2e3f\] text-lg mb-1">{title}<\/h3>/, '<h3 className="font-bold text-[#1f2e3f] text-lg mb-1">{language === "en" && titleEn ? titleEn : title}</h3>');
c = c.replace(/<span className="text-sm text-gray-500">{category}<\/span>/, '<span className="text-sm text-gray-500">{language === "en" && categoryEn ? categoryEn : category}</span>');
c = c.replace(/<p className="text-gray-600 text-sm mb-4 line-clamp-2">{description}<\/p>/, '<p className="text-gray-600 text-sm mb-4 line-clamp-2">{language === "en" && descriptionEn ? descriptionEn : description}</p>');
fs.writeFileSync('src/components/ProductCard.tsx', c);

// Update ProductSlider.tsx
let s = fs.readFileSync('src/components/ProductSlider.tsx', 'utf8');
s = s.replace(/title=\{item\.title\}/, 'title={item.title} titleEn={item.titleEn}');
s = s.replace(/category=\{item\.category\}/, 'category={item.category} categoryEn={item.categoryEn}');
s = s.replace(/description=\{item\.description\}/, 'description={item.description} descriptionEn={item.descriptionEn}');
fs.writeFileSync('src/components/ProductSlider.tsx', s);
