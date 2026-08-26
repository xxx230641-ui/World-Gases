import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    'language': 'English',
    'search_placeholder': 'ما الذي تبحث عنه؟',
    'no_results': 'لا توجد نتائج مطابقة',
    'categories': 'الفئات',
    'home': 'الصفحة الرئيسية',
    'shop_by_category': 'تسوق حسب الفئات',
    'bestseller': 'الأكثر مبيعا',
    'new_arrivals': 'وصل حديثاً',
    'latest_offers': 'أحدث العروض',
    'about': 'نبذة',
    'about_text_1': 'في عالم الغازات والأفران، ندرك أهمية تجهيز مطبخك بأفضل وأحدث الأجهزة التي تلبي كافة احتياجاتك اليومية بكفاءة عالية. نحن نلتزم بتقديم أجهزة تمتاز بالمتانة والأمان بتصاميم عصرية تناسب كل الأذواق.',
    'about_text_2': 'استكشفوا مجموعتنا المميزة من الأجهزة:',
    'about_li_1_b': 'أفران الغاز والكهرباء:',
    'about_li_1_t': ' تصاميم مبتكرة توفر توزيعاً مثالياً للحرارة لضمان طهي احترافي في كل مرة.',
    'about_li_2_b': 'أجهزة الطبخ المدمجة (Built-in):',
    'about_li_2_t': ' أفران ومواقد مدمجة بتصاميم أنيقة توفر مساحة في مطبخك وتضفي لمسة من الفخامة.',
    'about_li_3_b': 'أجهزة الشفط (Hoods):',
    'about_li_3_t': ' شفاطات قوية بآليات متطورة للحفاظ على هواء مطبخك نقياً وخالياً من الروائح والدخان.',
    'about_li_4_b': 'المواقد السطحية:',
    'about_li_4_t': ' تشكيلة واسعة من المواقد التي تعمل بالغاز والكهرباء لسهولة الاستخدام وسرعة التحضير.',
    'contact_us': 'اتصل بنا',
    'maintenance': 'طلب صيانة',
    'our_locations': 'مواقعنا',
    'who_we_are': 'من نحن',
    'footer_contact': 'اتصل بنا',
    'footer_links': 'روابط سريعة',
    'footer_my_account': 'حسابي',
    'footer_help': 'مساعدة',
    'blog': 'المدونة',
    'return_policy': 'سياسة الاسترجاع',
    'terms': 'الشروط و الأحكام',
    'privacy': 'سياسة الخصوصية',
    'copyright': 'حقوق النشر © 2026 لعالم الغازات والأفران. كل الحقوق محفوظة.',
    'showing': 'إظهار',
    'results_of': 'من 30 نتيجة',
    'compare': 'مقارنة',
    'product_image_placeholder': 'قالب صورة المنتج',
    'special_offer': 'العرض القوي',
    'ad_placeholder_1': 'قالب صورة إعلانية 1',
    'ad_placeholder_2': 'قالب صورة إعلانية 2',
    'latest_offer_placeholder': 'قالب صورة العرض (أحدث العروض)',
    'promo_placeholder': 'قالب الصورة الإعلانية',
  },
  en: {
    'language': 'العربية',
    'search_placeholder': 'What are you looking for?',
    'no_results': 'No matching results',
    'categories': 'Categories',
    'home': 'Home',
    'shop_by_category': 'Shop by Categories',
    'bestseller': 'Best Sellers',
    'new_arrivals': 'New Arrivals',
    'latest_offers': 'Latest Offers',
    'about': 'About Us',
    'about_text_1': 'At World of Gas and Ovens, we understand the importance of equipping your kitchen with the best appliances. We are committed to providing durable, safe devices with modern designs that suit all tastes.',
    'about_text_2': 'Explore our premium collection of appliances:',
    'about_li_1_b': 'Gas and Electric Ovens:',
    'about_li_1_t': ' Innovative designs that offer ideal heat distribution for professional cooking every time.',
    'about_li_2_b': 'Built-in Appliances:',
    'about_li_2_t': ' Elegant built-in ovens and stoves that save space and add a touch of luxury to your kitchen.',
    'about_li_3_b': 'Hoods:',
    'about_li_3_t': ' Powerful hoods with advanced mechanisms to keep your kitchen air pure and free of odors and smoke.',
    'about_li_4_b': 'Cooktops:',
    'about_li_4_t': ' A wide range of gas and electric cooktops for ease of use and quick preparation.',
    'contact_us': 'Contact Us',
    'maintenance': 'Request Maintenance',
    'our_locations': 'Our Locations',
    'who_we_are': 'Who We Are',
    'footer_contact': 'Contact Us',
    'footer_links': 'Quick Links',
    'footer_my_account': 'My Account',
    'footer_help': 'Help',
    'blog': 'Blog',
    'return_policy': 'Return Policy',
    'terms': 'Terms & Conditions',
    'privacy': 'Privacy Policy',
    'copyright': 'Copyright © 2026 World of Gas and Ovens. All rights reserved.',
    'showing': 'Showing',
    'results_of': 'of 30 results',
    'compare': 'Compare',
    'product_image_placeholder': 'Product Image Placeholder',
    'special_offer': 'Special Offer',
    'ad_placeholder_1': 'Ad Image Placeholder 1',
    'ad_placeholder_2': 'Ad Image Placeholder 2',
    'latest_offer_placeholder': 'Offer Image Placeholder (Latest Offers)',
    'promo_placeholder': 'Promo Image Placeholder',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['ar']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
