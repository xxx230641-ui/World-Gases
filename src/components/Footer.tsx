import { Phone, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
          
          {/* Logo & Contact Details */}
          <div className="md:col-span-2 flex flex-col gap-8">
            {/* Logo Placeholder */}
            <Link to="/" className="text-3xl font-bold text-[#0a5595] tracking-tight">
              عالم الغازات <span className="text-[#f2c94c]">والأفران</span>
            </Link>
            
            <div className="flex flex-col gap-4 text-[#666e77] font-medium">
              <div className="flex items-center gap-4 hover:text-[#0a5595] transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#f2f7fa] flex items-center justify-center text-[#0a5595]">
                  <Phone size={18} />
                </div>
                <span dir="ltr" className="text-lg">+962 6 000 0000</span>
              </div>
              <div className="flex items-center gap-4 hover:text-[#0a5595] transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#f2f7fa] flex items-center justify-center text-[#0a5595]">
                  <Mail size={18} />
                </div>
                <span className="text-lg">info@example.com</span>
              </div>
              <div className="flex items-center gap-4 hover:text-[#25d366] transition-colors cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[#e8fbf0] flex items-center justify-center text-[#25d366]">
                  <MessageCircle size={18} />
                </div>
                <span className="text-lg font-bold">الدردشة على الواتس اب</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-2">
              <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-gray-500 hover:bg-[#0a5595] hover:text-white transition-all cursor-pointer">FB</div>
              <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-gray-500 hover:bg-[#0a5595] hover:text-white transition-all cursor-pointer">IN</div>
              <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-gray-500 hover:bg-[#0a5595] hover:text-white transition-all cursor-pointer">LI</div>
              <div className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center text-gray-500 hover:bg-[#0a5595] hover:text-white transition-all cursor-pointer">YT</div>
            </div>
          </div>

          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-[#1f2e3f] mb-2">{t('who_we_are')}</h3>
            <a href="#" className="text-[#666e77] hover:text-[#0a5595] transition-colors font-medium">{t('who_we_are')}</a>
            <a href="#" className="text-[#666e77] hover:text-[#0a5595] transition-colors font-medium">{t('blog')}</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-[#1f2e3f] mb-2">{t('footer_my_account')}</h3>
            <a href="#" className="text-[#666e77] hover:text-[#0a5595] transition-colors font-medium">{t('maintenance')}</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg text-[#1f2e3f] mb-2">{t('footer_help')}</h3>
            <a href="#" className="text-[#666e77] hover:text-[#0a5595] transition-colors font-medium">{t('return_policy')}</a>
            <a href="#" className="text-[#666e77] hover:text-[#0a5595] transition-colors font-medium">{t('terms')}</a>
            <a href="#" className="text-[#666e77] hover:text-[#0a5595] transition-colors font-medium">{t('privacy')}</a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-center items-center gap-6">
          <p className="text-[#666e77] text-sm font-medium">{t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
