import SectionHeader from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export default function LatestOffers() {
  const { t } = useLanguage();
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative">
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
        <SectionHeader title={t('latest_offers')} />
        <div className="flex gap-2">
          <button className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
          </button>
        </div>
      </div>
      
      <div className="w-full max-w-4xl mx-auto aspect-[2/1] md:aspect-[2.5/1] bg-[#f8f9fa] border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm">
        <div className="text-center">
            <span className="bg-[#f2c94c] px-4 py-2 rounded font-bold inline-block mb-4">{t('special_offer')}</span>
            <p className="text-gray-400 text-xl font-medium">{t('latest_offer_placeholder')}</p>
        </div>
      </div>
      
      {/* Slider dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        <div className="w-6 h-2 bg-[#0a5595] rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
}
