import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Footer() {
  const { t, language } = useLanguage();


  return (
    <footer className="bg-[#0B1B3D] border-t border-[#0B1B3D] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Logo & Contact Details */}
          <div className="md:col-span-2 flex flex-col gap-8">
            <Link to="/" className="flex-shrink-0 cursor-pointer flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-sm border border-white/10 w-fit">
              <img 
                src="/images/logos/1787822948877.jpg" 
                alt="عالم الغازات والأفران" 
                className="h-12 w-12 md:h-14 md:w-14 rounded-full object-cover"
              />
              <img 
                src="/images/logos/1787842289894.jpg" 
                alt="عالم الغازات والأفران - نص" 
                className="h-6 md:h-8 w-auto object-contain"
              />
            </Link>

            <div className="flex flex-col gap-4 text-gray-300 font-medium">
              
              <a href="https://wa.me/962795155953" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#25D366] transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <span dir="ltr" className="text-lg text-white">+962 79 515 5953</span>
              </a>

              <a href="https://www.google.com/maps/place/%D8%B9%D8%A7%D9%84%D9%85+%D8%A7%D9%84%D8%BA%D8%A7%D8%B0%D8%A7%D8%B3%D8%A7%D8%AA+%D9%88%D8%A7%D9%84%D8%A7%D9%81%D8%B1%D8%A7%D9%86+%D8%A8%D9%84%D8%AA+%D8%A7%D9%84%D9%86+world+Gases+and+Ovens%E2%80%AD/@31.9118273,35.9407232,17z/data=!3m1!4b1!4m6!3m5!1s0x151b5ff3e79bec77:0x77cef119a4e3c1ce!8m2!3d31.9118273!4d35.9381483!16s%2Fg%2F11h2mdp1h3?entry=ttu&g_ep=EgoyMDI2MDgyNC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#f97316] transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#f97316] group-hover:scale-110 transition-transform">
                  <MapPin size={18} />
                </div>
                <span className="text-lg text-white">{language === 'en' ? '3 Abbad Bin Bishr St., Amman, Jordan' : 'شارع عباد بن بشر 3، عمّان، الأردن'}</span>
              </a>

              <a href="https://wa.me/962795155953" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:text-[#25D366] transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform">
                  <WhatsAppIcon />
                </div>
                <span className="text-lg font-bold text-white">{language === 'en' ? 'Chat on WhatsApp' : 'الدردشة على الواتس اب'}</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <a href="https://www.facebook.com/kitchensjo/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#1877F2] transition-all cursor-pointer shadow-sm">
                <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-white mb-2">{t('who_we_are')}</h3>
            <a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors font-medium">{t('who_we_are')}</a>
            <a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors font-medium">{t('blog')}</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-white mb-2">{t('footer_my_account')}</h3>
            <a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors font-medium">{t('maintenance')}</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-white mb-2">{t('footer_help')}</h3>
            <a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors font-medium">{t('return_policy')}</a>
            <a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors font-medium">{t('terms')}</a>
            <a href="#" className="text-gray-400 hover:text-[#f97316] transition-colors font-medium">{t('privacy')}</a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-gray-400 text-sm font-medium">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
