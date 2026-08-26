import { useLanguage } from '../context/LanguageContext';

export default function HeroBanners() {
  const { t } = useLanguage();
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-4 h-auto md:h-[400px]">
        {/* Secondary Banner */}
        <div className="flex-[1] bg-[#f8f9fa] border border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden group min-h-[200px]">
          <div className="text-center p-6">
             <div className="bg-[#f2c94c] text-[#1f2e3f] font-bold px-4 py-2 inline-block mb-4 transform -rotate-2 rounded shadow-sm">
                {t('special_offer')}
             </div>
             <p className="text-gray-400 text-lg font-bold">{t('ad_placeholder_1')}</p>
          </div>
        </div>

        {/* Main Banner */}
        <div className="flex-[2] bg-[#f2f7fa] border border-gray-200 rounded-xl flex items-center justify-center relative overflow-hidden group min-h-[250px]">
           <div className="text-center p-8">
             <p className="text-gray-400 text-xl font-bold">{t('ad_placeholder_2')}</p>
           </div>
        </div>
      </div>
      
      {/* Slider dots indicator */}
      <div className="flex justify-center gap-2 mt-4">
        <div className="w-6 h-2 bg-[#0a5595] rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
