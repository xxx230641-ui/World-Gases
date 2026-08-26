import { useLanguage } from '../context/LanguageContext';

export default function PromoBanner() {
  const { t } = useLanguage();
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="w-full aspect-[3/1] md:aspect-[4/1] bg-[#f8f9fa] border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm relative overflow-hidden">
        <div className="text-center z-10 p-6">
          <p className="text-gray-400 text-xl md:text-2xl font-bold">{t('promo_placeholder')}</p>
        </div>
      </div>
    </section>
  );
}
