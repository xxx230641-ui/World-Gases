import { Refrigerator, WashingMachine, Droplets, Microwave, Fan, Utensils, Flame, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useRef, useState, MouseEvent, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import Lottie from 'react-lottie-player';
import { motion } from 'framer-motion';

const categories = [
  { fullName: 'افران بلت ان Built-in غاز وكهرباء', fullNameEn: 'Built-in Gas & Electric Ovens', shortName: 'افران', shortNameEn: 'Ovens', icon: Flame, lottieUrl: '/animations/oven.json' },
  { fullName: 'طباخات غاز وكهرباء بلت ان Built-in', fullNameEn: 'Built-in Gas & Electric Cooktops', shortName: 'طباخات', shortNameEn: 'Cooktops', icon: Utensils, lottieUrl: '/animations/cooker.json' },
  { fullName: 'شفاطات مطبخ وشفاطات جزيرة', fullNameEn: 'Kitchen & Island Hoods', shortName: 'شفاطات', shortNameEn: 'Hoods', icon: Fan, lottieUrl: '/animations/hood.json' },
  { fullName: 'مايكرويفات بلت ان Built-in', fullNameEn: 'Built-in Microwaves', shortName: 'مايكرويفات', shortNameEn: 'Microwaves', icon: Microwave, lottieUrl: '/animations/microwave.json' },
  { fullName: 'كولرات بلت ان Built-in', fullNameEn: 'Built-in Coolers', shortName: 'كولرات', shortNameEn: 'Coolers', icon: Droplets, lottieUrl: '/animations/cooler.json' },
  { fullName: 'جلايات بلت ان Built-in', fullNameEn: 'Built-in Dishwashers', shortName: 'جلايات', shortNameEn: 'Dishwashers', icon: WashingMachine, lottieUrl: '/animations/dishwasher.json' },
  { fullName: 'غسالات بلت ان Built-in', fullNameEn: 'Built-in Washing Machines', shortName: 'غسالات', shortNameEn: 'Washing Machines', icon: WashingMachine, lottieUrl: '/animations/washing.json' },
  { fullName: 'ثلاجات بلت ان Built-in', fullNameEn: 'Built-in Refrigerators', shortName: 'ثلاجات', shortNameEn: 'Refrigerators', icon: Refrigerator, lottieUrl: '/animations/fridge.json' },
];

export default function Categories() {
  const { t, language } = useLanguage();
  const sliderRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showCat, setShowCat] = useState(false);
  
  // State to hold fetched lottie animation data (if they exist)
  const [lottieData, setLottieData] = useState<Record<string, any>>({});

  useEffect(() => {
    // Attempt to load lottie JSON files if the user uploads them
    categories.forEach(async (cat) => {
      try {
        const response = await fetch(cat.lottieUrl);
        if (response.ok) {
          const json = await response.json();
          setLottieData(prev => ({ ...prev, [cat.shortName]: json }));
        }
      } catch (e) {
        // Fallback to lucide icon if lottie json is not found
      }
    });

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
        className="flex overflow-x-auto gap-4 md:gap-6 pb-4 pt-2 hide-scrollbar cursor-grab"
      >
        {categories.map((cat, idx) => (
          <Link to={`/category/${encodeURIComponent(language === 'en' ? cat.fullNameEn : cat.fullName)}`} key={idx} className="flex flex-col items-center gap-4 min-w-[130px] md:min-w-[160px] cursor-pointer group pointer-events-auto">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#f8f9fa] flex items-center justify-center group-hover:bg-[#fff7ed] transition-colors border-2 border-transparent group-hover:border-[#f97316] shadow-sm relative overflow-hidden">
              {(cat as any).bgImage && <img src={(cat as any).bgImage} alt={cat.shortName} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply group-hover:opacity-40 transition-opacity z-0" />}
              <div className="z-10 relative">

              {lottieData[cat.shortName] ? (
                <Lottie 
                  animationData={lottieData[cat.shortName]} 
                  loop={true} play={true} 
                  className="w-16 h-16 md:w-20 md:h-20"
                />
              ) : (
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <cat.icon size={48} className="text-[#f97316] opacity-80" strokeWidth={1.5} />
                </motion.div>
              )}
            
              </div>
            </div>
            <span className="text-sm font-bold text-center text-[#666e77] group-hover:text-[#f97316] transition-colors">{language === 'en' ? cat.shortNameEn : cat.shortName}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
