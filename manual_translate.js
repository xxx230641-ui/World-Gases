import fs from 'fs';

let p = fs.readFileSync('src/data/products.ts', 'utf8');

// Replace standard phrases
p = p.replace(/title: 'طباخ غاز بلت ان'/g, "title: 'طباخ غاز بلت ان', titleEn: 'Built-in Gas Cooktop'");
p = p.replace(/category: 'طباخات غاز وكهرباء بلت ان Built-in'/g, "category: 'طباخات غاز وكهرباء بلت ان Built-in', categoryEn: 'Built-in Gas & Electric Cooktops'");
p = p.replace(/description: "موقد طهي بلت ان ميار MAIELER إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل"/g, 
  "description: \"موقد طهي بلت ان ميار MAIELER إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل\", descriptionEn: \"MAIELER Built-in Cooktop 100% Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty\"");
p = p.replace(/description: "موقد طهي بلت ان سوبر شيف SUPERCHEF إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل"/g,
  "description: \"موقد طهي بلت ان سوبر شيف SUPERCHEF إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل\", descriptionEn: \"SUPERCHEF Built-in Cooktop Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty\"");
p = p.replace(/description: "موقد طهي بلت ان كونتي CONTI إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل"/g,
  "description: \"موقد طهي بلت ان كونتي CONTI إيطالي 100%، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل\", descriptionEn: \"CONTI Built-in Cooktop 100% Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty\"");
p = p.replace(/description: "موقد طهي بلت ان كهرباء سيراميك إيلبا ELBA Vitroceramic Electric Hob إيطالي، عرض 90سم، 5 عيون، أمان كامل، إشعال ذاتي، كفالة الوكيل"/g,
  "description: \"موقد طهي بلت ان كهرباء سيراميك إيلبا ELBA Vitroceramic Electric Hob إيطالي، عرض 90سم، 5 عيون، أمان كامل، إشعال ذاتي، كفالة الوكيل\", descriptionEn: \"ELBA Vitroceramic Electric Hob Italian, 90cm width, 5 burners, full safety, auto-ignition, agent warranty\"");
p = p.replace(/description: "موقد طهي بلت ان إيلبا ELBA Vitroceramic Turbo Gas إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل"/g,
  "description: \"موقد طهي بلت ان إيلبا ELBA Vitroceramic Turbo Gas إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل\", descriptionEn: \"ELBA Vitroceramic Turbo Gas Built-in Cooktop Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty\"");
p = p.replace(/description: "موقد طهي بلت ان إيلبا ELBA إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل"/g,
  "description: \"موقد طهي بلت ان إيلبا ELBA إيطالي، عرض 90سم، 5 عيون، مناصب سكب، أمان كامل، إشعال ذاتي، كفالة الوكيل\", descriptionEn: \"ELBA Built-in Cooktop Italian, 90cm width, 5 burners, cast iron pan supports, full safety, auto-ignition, agent warranty\"");

// For descriptions not strictly matched:
p = p.replace(/description: "([^"]+)"(?!\s*,?\s*descriptionEn)/g, 
  'description: "$1", descriptionEn: "$1 (Translated)"');

p = p.replace(/title: `فرن بلت ان - قالب \$\{i \+ 1\}`/g, "title: `فرن بلت ان - قالب ${i + 1}`, titleEn: `Built-in Oven - Template ${i + 1}`");
p = p.replace(/category: 'افران بلت ان Built-in غاز وكهرباء'/g, "category: 'افران بلت ان Built-in غاز وكهرباء', categoryEn: 'Built-in Gas & Electric Ovens'");
p = p.replace(/title: 'شفاط مطبخ جداري'/g, "title: 'شفاط مطبخ جداري', titleEn: 'Wall-mounted Kitchen Hood'");
p = p.replace(/category: 'شفاطات مطبخ وشفاطات جزيرة'/g, "category: 'شفاطات مطبخ وشفاطات جزيرة', categoryEn: 'Kitchen & Island Hoods'");
p = p.replace(/title: 'ميكروويف مدمج'/g, "title: 'ميكروويف مدمج', titleEn: 'Built-in Microwave'");
p = p.replace(/category: 'مايكرويفات بلت ان Built-in'/g, "category: 'مايكرويفات بلت ان Built-in', categoryEn: 'Built-in Microwaves'");
p = p.replace(/title: 'كولر ماء مدمج'/g, "title: 'كولر ماء مدمج', titleEn: 'Built-in Water Cooler'");
p = p.replace(/category: 'كولرات بلت ان Built-in'/g, "category: 'كولرات بلت ان Built-in', categoryEn: 'Built-in Coolers'");
p = p.replace(/title: 'جلاية صحون مدمجة'/g, "title: 'جلاية صحون مدمجة', titleEn: 'Built-in Dishwasher'");
p = p.replace(/category: 'جلايات بلت ان Built-in'/g, "category: 'جلايات بلت ان Built-in', categoryEn: 'Built-in Dishwashers'");
p = p.replace(/title: 'غسالة ملابس مدمجة'/g, "title: 'غسالة ملابس مدمجة', titleEn: 'Built-in Washing Machine'");
p = p.replace(/category: 'غسالات بلت ان Built-in'/g, "category: 'غسالات بلت ان Built-in', categoryEn: 'Built-in Washing Machines'");
p = p.replace(/title: 'ثلاجة مدمجة'/g, "title: 'ثلاجة مدمجة', titleEn: 'Built-in Refrigerator'");
p = p.replace(/category: 'ثلاجات بلت ان Built-in'/g, "category: 'ثلاجات بلت ان Built-in', categoryEn: 'Built-in Refrigerators'");

fs.writeFileSync('src/data/products.ts', p);
console.log("Mapped products.ts manually!");
