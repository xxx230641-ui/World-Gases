const fs = require('fs');

let c = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

c = c.replace(/'categories': 'الفئات'/g, "'categories': 'الأقسام'");
c = c.replace(/'shop_by_category': 'تسوق حسب الفئات'/g, "'shop_by_category': 'تسوق حسب الأقسام'");
c = c.replace(/'categories': 'Categories'/g, "'categories': 'Departments'");
c = c.replace(/'shop_by_category': 'Shop by Categories'/g, "'shop_by_category': 'Shop by Departments'");
c = c.replace(/'shop_by_category': 'Shop by Category'/g, "'shop_by_category': 'Shop by Departments'");

fs.writeFileSync('src/context/LanguageContext.tsx', c);
console.log("Updated LanguageContext.tsx");
