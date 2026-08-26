export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
}

export const productsDatabase: Product[] = [
  // Refrigerators & Freezers
  { id: '1', title: 'ثلاجة عائلية بسعة ضخمة 600 لتر', category: 'الثلاجات و الفريزرات', image: 'قالب صورة' },
  { id: '2', title: 'فريزر أفقي 400 لتر لتخزين طويل الأمد', category: 'الثلاجات و الفريزرات', image: 'قالب صورة' },
  { id: '17', title: 'ثلاجة بابين بتصميم عصري 450 لتر', category: 'الثلاجات و الفريزرات', image: 'قالب صورة' },
  { id: '18', title: 'ثلاجة صغيرة للمكاتب 90 لتر', category: 'الثلاجات و الفريزرات', image: 'قالب صورة' },
  { id: '19', title: 'فريزر عمودي 7 أدراج', category: 'الثلاجات و الفريزرات', image: 'قالب صورة' },
  
  // Washing Machines
  { id: '3', title: 'غسالة ملابس أوتوماتيكية 10 كغ', category: 'غسالات و نشافات', image: 'قالب صورة' },
  { id: '4', title: 'نشافة ملابس بفتحة أمامية 8 كغ', category: 'غسالات و نشافات', image: 'قالب صورة' },
  { id: '20', title: 'غسالة ملابس تحميل علوي 12 كغ', category: 'غسالات و نشافات', image: 'قالب صورة' },
  { id: '21', title: 'غسالة ونشافة 2 في 1 بتكنولوجيا البخار', category: 'غسالات و نشافات', image: 'قالب صورة' },
  
  // Ovens
  { id: '5', title: 'فرن غاز مدمج 90 سم', category: 'أفران مدمجة', image: 'قالب صورة' },
  { id: '6', title: 'فرن كهربائي مدمج متعدد الوظائف', category: 'أفران مدمجة', image: 'قالب صورة' },
  { id: '22', title: 'فرن كهربائي بشاشة لمس 60 سم', category: 'أفران مدمجة', image: 'قالب صورة' },
  { id: '23', title: 'فرن غاز تقليدي بمروحة توزيع حرارة', category: 'أفران مدمجة', image: 'قالب صورة' },

  // Cooktops
  { id: '7', title: 'موقد غاز مسطح 5 شعلات', category: 'مواقد مسطحة', image: 'قالب صورة' },
  { id: '8', title: 'موقد كهربائي سيراميك 4 شعلات', category: 'مواقد مسطحة', image: 'قالب صورة' },
  { id: '24', title: 'موقد حثي (Induction) سريع التسخين', category: 'مواقد مسطحة', image: 'قالب صورة' },
  { id: '25', title: 'موقد غاز زجاجي أسود أنيق', category: 'مواقد مسطحة', image: 'قالب صورة' },

  // Hoods
  { id: '9', title: 'شفاط مطبخ جداري 90 سم بتصميم عصري', category: 'أجهزة الشفط', image: 'قالب صورة' },
  { id: '10', title: 'شفاط مطبخ جزيرة 120 سم قوة شفط عالية', category: 'أجهزة الشفط', image: 'قالب صورة' },
  { id: '26', title: 'شفاط مطبخ مخفي 60 سم', category: 'أجهزة الشفط', image: 'قالب صورة' },
  { id: '27', title: 'شفاط هرمي كلاسيكي 90 سم', category: 'أجهزة الشفط', image: 'قالب صورة' },

  // ACs
  { id: '11', title: 'مكيف هواء سبليت 1.5 طن تبريد وتدفئة', category: 'مكيفات', image: 'قالب صورة' },
  { id: '28', title: 'مكيف شباك 2 طن قوة تبريد عالية', category: 'مكيفات', image: 'قالب صورة' },
  { id: '29', title: 'مكيف هواء سبليت انفرتر موفر للطاقة', category: 'مكيفات', image: 'قالب صورة' },
  { id: '30', title: 'مكيف صحراوي متنقل سعة 50 لتر', category: 'مكيفات', image: 'قالب صورة' },

  // TVs
  { id: '12', title: 'شاشة تلفزيون ذكية 65 بوصة 4K UHD', category: 'شاشات', image: 'قالب صورة' },
  { id: '31', title: 'شاشة تلفزيون 55 بوصة OLED بتقنية HDR', category: 'شاشات', image: 'قالب صورة' },
  { id: '32', title: 'شاشة تلفزيون ذكية 75 بوصة نظام أندرويد', category: 'شاشات', image: 'قالب صورة' },
  
  // Small Appliances
  { id: '13', title: 'ميكروويف 30 لتر مع شواية', category: 'أجهزة صغيرة', image: 'قالب صورة' },
  { id: '14', title: 'خلاط كهربائي متعدد الوظائف', category: 'أجهزة صغيرة', image: 'قالب صورة' },
  { id: '15', title: 'ماكينة تحضير قهوة اسبريسو', category: 'أجهزة صغيرة', image: 'قالب صورة' },
  { id: '16', title: 'محضرة طعام احترافية', category: 'أجهزة صغيرة', image: 'قالب صورة' },
  { id: '33', title: 'قلاية هوائية بدون زيت 6 لتر', category: 'أجهزة صغيرة', image: 'قالب صورة' },
  { id: '34', title: 'غلاية ماء كهربائية زجاجية 1.7 لتر', category: 'أجهزة صغيرة', image: 'قالب صورة' },
  { id: '35', title: 'مكواة بخار عمودية للملابس', category: 'أجهزة صغيرة', image: 'قالب صورة' },
  { id: '36', title: 'مكنسة كهربائية ذكية روبوت', category: 'أجهزة صغيرة', image: 'قالب صورة' },
];

export const getProductsByCategory = (category: string) => {
  if (!category || category === 'الكل') return productsDatabase;
  return productsDatabase.filter(p => p.category === category);
};
