import { Info, MapPin, Wrench, MessageSquare } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Features() {
  const { t } = useLanguage();

  const featuresList = [
    { name: t('who_we_are'), icon: Info },
    { name: t('our_locations'), icon: MapPin },
    { name: t('maintenance'), icon: Wrench },
    { name: t('contact_us'), icon: MessageSquare },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {featuresList.map((feat, idx) => (
          <div key={idx} className="bg-[#f8f9fa] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 hover:bg-[#e6f0f9] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#0a5595] shadow-sm hover:shadow-md group">
            <div className="w-16 h-16 rounded-full bg-[#0a5595] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
              <feat.icon size={28} strokeWidth={2} />
            </div>
            <span className="font-bold text-[#1f2e3f] text-base group-hover:text-[#0a5595] transition-colors">{feat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
