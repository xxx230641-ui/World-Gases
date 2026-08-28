import fs from 'fs';

let p = fs.readFileSync('src/pages/CategoryPage.tsx', 'utf8');
p = p.replace(/<ProductCard key=\{product\.id\} \{\.\.\.product\} \/>/g, 
`<ProductCard key={product.id} {...product} titleEn={product.titleEn} categoryEn={product.categoryEn} descriptionEn={product.descriptionEn} />`);

p = p.replace(/<ProductCard key=\{product\.id\} \{\.\.\.product\} isList=\{true\} \/>/g,
`<ProductCard key={product.id} {...product} titleEn={product.titleEn} categoryEn={product.categoryEn} descriptionEn={product.descriptionEn} isList={true} />`);

fs.writeFileSync('src/pages/CategoryPage.tsx', p);
