import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useRef, useState, MouseEvent, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const WashingMachineIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="10" width="36" height="44" rx="4" />
    <line x1="14" y1="22" x2="50" y2="22" />
    <rect x="20" y="14" width="8" height="4" rx="1" />
    <circle cx="42" cy="16" r="1.5" fill="currentColor" />
    <circle cx="46" cy="16" r="1.5" fill="currentColor" />
    <circle cx="32" cy="38" r="10" />
    <path d="M 24 38 A 8 8 0 0 0 40 38 Z" fill="#fed7aa" stroke="none" />
  </svg>
);

const DishwasherIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 52 h44" />
    <path d="M14 52 v4 h36 v-4" />
    <rect x="16" y="12" width="32" height="36" rx="2" />
    <line x1="16" y1="20" x2="48" y2="20" />
    <line x1="22" y1="16" x2="28" y2="16" />
    <circle cx="40" cy="16" r="1.5" fill="currentColor" />
    <circle cx="44" cy="16" r="1.5" fill="currentColor" />
    <circle cx="26" cy="36" r="8" fill="#fed7aa" />
    <circle cx="34" cy="36" r="6" fill="#fed7aa" />
    <rect x="38" y="30" width="6" height="14" rx="1" />
    <line x1="41" y1="30" x2="41" y2="24" />
  </svg>
);

const CoolerIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="24" y="32" width="16" height="26" rx="2" />
    <rect x="26" y="16" width="12" height="16" fill="#fed7aa" stroke="none" />
    <path d="M26 32 V 18 C 26 16 28 14 29 14 V 10 H 35 V 14 C 36 14 38 16 38 18 V 32 Z" />
    <line x1="26" y1="20" x2="38" y2="20" />
    <line x1="26" y1="26" x2="38" y2="26" />
    <path d="M29 38 v4 M35 38 v4" />
    <rect x="28" y="48" width="8" height="4" />
  </svg>
);

const MicrowaveIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 48 v4 M48 48 v4" />
    <rect x="8" y="20" width="48" height="28" rx="3" />
    <rect x="14" y="26" width="24" height="16" rx="2" fill="#fed7aa" />
    <line x1="44" y1="20" x2="44" y2="48" />
    <rect x="47" y="24" width="6" height="4" />
    <line x1="47" y1="32" x2="51" y2="32" />
    <line x1="47" y1="36" x2="51" y2="36" />
    <line x1="47" y1="40" x2="51" y2="40" />
  </svg>
);

const FridgeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="18" y="6" width="28" height="52" rx="4" />
    <line x1="18" y1="24" x2="46" y2="24" />
    <rect x="22" y="12" width="4" height="8" rx="2" fill="#fed7aa" stroke="currentColor" />
    <rect x="22" y="28" width="4" height="16" rx="2" fill="#fed7aa" stroke="currentColor" />
  </svg>
);

const OvenIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="14" y="12" width="36" height="44" rx="4" />
    <line x1="14" y1="24" x2="50" y2="24" />
    <circle cx="22" cy="18" r="2.5" />
    <circle cx="42" cy="18" r="2.5" />
    <line x1="30" y1="18" x2="34" y2="18" />
    <rect x="20" y="30" width="24" height="18" rx="2" fill="#fed7aa" />
    <line x1="26" y1="40" x2="38" y2="40" />
  </svg>
);

const CooktopIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="10" y="34" width="44" height="14" rx="2" />
    <circle cx="22" cy="41" r="2.5" />
    <circle cx="32" cy="41" r="2.5" />
    <circle cx="42" cy="41" r="2.5" />
    <path d="M 16 34 V 28 C 16 26 28 26 28 28 V 34" fill="#fed7aa" />
    <path d="M 36 34 V 24 C 36 22 48 22 48 24 V 34" fill="#fed7aa" />
  </svg>
);

const HoodIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="24" y="12" width="16" height="24" />
    <path d="M 12 44 L 24 36 H 40 L 52 44 V 50 H 12 Z" fill="#fed7aa" />
    <line x1="18" y1="46" x2="46" y2="46" />
    <line x1="28" y1="18" x2="36" y2="18" />
    <line x1="28" y1="24" x2="36" y2="24" />
    <line x1="28" y1="30" x2="36" y2="30" />
  </svg>
);

const categories = [
  { fullName: 'افران بلت ان Built-in غاز وكهرباء', fullNameEn: 'Built-in Gas & Electric Ovens', shortName: 'افران', shortNameEn: 'Ovens', icon: OvenIcon, animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } },
  { fullName: 'طباخات غاز وكهرباء بلت ان Built-in', fullNameEn: 'Built-in Gas & Electric Cooktops', shortName: 'طباخات', shortNameEn: 'Cooktops', icon: CooktopIcon, animation: { y: [0, -3, 0], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } },
  { fullName: 'شفاطات مطبخ وشفاطات جزيرة', fullNameEn: 'Kitchen & Island Hoods', shortName: 'شفاطات', shortNameEn: 'Hoods', icon: HoodIcon, animation: { opacity: [0.8, 1, 0.8], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } },
  { fullName: 'مايكرويفات بلت ان Built-in', fullNameEn: 'Built-in Microwaves', shortName: 'مايكرويفات', shortNameEn: 'Microwaves', icon: MicrowaveIcon, animation: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } } },
  { fullName: 'كولرات بلت ان Built-in', fullNameEn: 'Built-in Coolers', shortName: 'كولرات', shortNameEn: 'Coolers', icon: CoolerIcon, animation: { y: [0, -4, 0], transition: { repeat: Infinity, duration: 3, ease: "easeInOut" } } },
  { fullName: 'جلايات بلت ان Built-in', fullNameEn: 'Built-in Dishwashers', shortName: 'جلايات', shortNameEn: 'Dishwashers', icon: DishwasherIcon, animation: { rotate: [0, -2, 2, 0], transition: { repeat: Infinity, duration: 2, ease: "easeInOut" } } },
  { fullName: 'غسالات بلت ان Built-in', fullNameEn: 'Built-in Washing Machines', shortName: 'غسالات', shortNameEn: 'Washing Machines', icon: WashingMachineIcon, animation: { x: [0, -2, 2, -2, 2, 0], transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" } } },
  { fullName: 'ثلاجات بلت ان Built-in', fullNameEn: 'Built-in Refrigerators', shortName: 'ثلاجات', shortNameEn: 'Refrigerators', icon: FridgeIcon, animation: { scaleY: [1, 1.03, 1], originY: 1, transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } } },
];

export default function Categories() {
  const { t, language } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showCat, setShowCat] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | globalThis.MouseEvent) {
      if (catRef.current && !catRef.current.contains(event.target as Node)) {
        setShowCat(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseDown = (e: MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    sliderRef.current.classList.add('cursor-grabbing');
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
    if (sliderRef.current) sliderRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseUp = () => {
    setIsDown(false);
    if (sliderRef.current) sliderRef.current.classList.remove('cursor-grabbing');
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 overflow-hidden">
      
      {/* Top Header & Dropdown Area */}
      <div className="flex justify-between items-center mb-6 [&>div]:mb-0">
        <SectionHeader title={t('shop_by_category')} />
        
        {/* Categories Dropdown */}
        <div className="relative" ref={catRef}>
          <button 
            onClick={() => setShowCat(!showCat)}
            className="bg-[#f97316] hover:bg-[#ea580c] transition-colors text-white px-4 md:px-6 h-10 rounded-md flex items-center gap-2 font-medium shadow-sm"
          >
            <span>{t('categories') || 'الأقسام'}</span>
            <ChevronDown size={16} className={`transition-transform ${showCat ? 'rotate-180' : ''}`} />
          </button>
          
          {showCat && (
            <div className={`absolute top-full mt-2 ${language === 'en' ? 'right-0' : 'left-0'} w-64 bg-white border border-gray-100 shadow-xl rounded-xl overflow-hidden py-2 z-50`}>
              <ul className="flex flex-col">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`/category/${encodeURIComponent(language === 'en' ? cat.fullNameEn : cat.fullName)}`}
                      onClick={() => setShowCat(false)}
                      className="block px-6 py-3 hover:bg-[#fff7ed] hover:text-[#f97316] text-[#1f2e3f] transition-colors font-medium text-sm border-b border-gray-50 last:border-0"
                    >
                      {language === 'en' ? cat.fullNameEn : cat.fullName}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto gap-5 md:gap-8 pb-4 pt-2 hide-scrollbar cursor-grab px-2"
      >
        {categories.map((cat, idx) => (
          <Link to={`/category/${encodeURIComponent(language === 'en' ? cat.fullNameEn : cat.fullName)}`} key={idx} className="flex flex-col items-center gap-4 min-w-[120px] md:min-w-[140px] cursor-pointer group pointer-events-auto">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-[24px] bg-white border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-[#fed7aa] shadow-sm relative overflow-hidden">
              <div className="z-10 relative">
                <motion.div
                  animate={cat.animation}
                  whileHover={{ scale: 1.15 }}
                >
                  <cat.icon className="w-16 h-16 md:w-18 md:h-18 text-[#c25e3a]" />
                </motion.div>
              </div>
            </div>
            <span className="text-sm font-bold text-center text-[#1f2e3f] group-hover:text-[#c25e3a] transition-colors">{language === 'en' ? cat.shortNameEn : cat.shortName}</span>
          </Link>
        ))}
      </div>

    </section>
  );
}
