import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  const { language } = useLanguage();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
          <button onClick={() => navigate(-1)} className="mb-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f2e3f] hover:text-[#f97316] transition-colors bg-gray-50 hover:bg-orange-50 px-3 py-1.5 rounded-full border border-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>{language === 'en' ? 'Back' : 'رجوع'}</span>
          </button>
          <h1 className="text-3xl font-bold text-[#1f2e3f] mb-6 text-center">
            {language === 'ar' ? 'من نحن' : 'About Us'}
          </h1>
          <div className={`space-y-6 text-gray-600 leading-relaxed ${language === 'en' ? 'text-left' : 'text-right'}`}>
            <p className="text-lg">
              {language === 'ar' 
                ? 'مرحباً بكم في عالم الغازات والأفران (World Gases and Ovens). نحن متجر متخصص ورائد في تقديم أفضل الأجهزة المنزلية، وتحديداً الغازات والأفران بجميع أنواعها وماركاتها العالمية.' 
                : 'Welcome to World Gases and Ovens. We are a specialized and leading store in providing the best home appliances, specifically all types and international brands of gases and ovens.'}
            </p>
            <p className="text-lg">
              {language === 'ar'
                ? 'نتميز في السوق الأردني بخبرتنا الطويلة التي تمتد لسنوات في تلبية احتياجات العائلة، حيث نحرص دائماً على توفير أجهزة ذات كفاءة عالية وجودة مضمونة تدوم طويلاً، لتكون المطبخ المثالي لكل منزل.'
                : 'We stand out in the Jordanian market with our long experience spanning years in meeting family needs. We always strive to provide highly efficient and guaranteed quality appliances that last long, making the perfect kitchen for every home.'}
            </p>
            <p className="text-lg">
              {language === 'ar'
                ? 'كما نفخر بتقديم خدمات ما بعد البيع من صيانة وقطع غيار أصلية عبر فريقنا الفني المتخصص، لضمان راحة بال عملائنا واستمرار عمل أجهزتهم بأفضل أداء.'
                : 'We are also proud to offer after-sales services, including maintenance and original spare parts through our specialized technical team, ensuring our customers\' peace of mind and the continuous optimal performance of their appliances.'}
            </p>
            <p className="text-lg font-bold text-[#f97316] text-center mt-8">
              {language === 'ar' 
                ? 'رؤيتنا: الجودة، الأمان، وثقة العملاء.' 
                : 'Our Vision: Quality, Safety, and Customer Trust.'}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
