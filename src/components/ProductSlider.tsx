import SectionHeader from './SectionHeader';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, MouseEvent, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsDatabase } from '../data/products';

export default function ProductSlider({ title, isBestSeller = false, autoScrollInterval = 3500 }: { title: string, isBestSeller?: boolean, autoScrollInterval?: number }) {
  const { language } = useLanguage();
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || isDown) return;
    const timer = setInterval(() => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        
        if (language === 'ar') {
          if (Math.abs(slider.scrollLeft) >= maxScroll - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            slider.scrollBy({ left: -200, behavior: 'smooth' });
          }
        } else {
          if (slider.scrollLeft >= maxScroll - 10) {
            slider.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            slider.scrollBy({ left: 200, behavior: 'smooth' });
          }
        }
      }
    }, autoScrollInterval);
    return () => clearInterval(timer);
  }, [language, isHovered, isDown, autoScrollInterval]);

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

  const scrollLeftBy = (amount: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="max-w-7xl mx-auto px-4 py-8 overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-6">
        <SectionHeader title={title} />
        <div className="flex gap-2">
          <button 
            onClick={() => scrollLeftBy(language === 'en' ? -200 : 200)}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100"
          >
            {language === 'en' ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
          </button>
          <button 
            onClick={() => scrollLeftBy(language === 'en' ? 200 : -200)}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100"
          >
            {language === 'en' ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto gap-3 md:gap-4 pb-4 pt-2 hide-scrollbar cursor-grab"
      >
        {productsDatabase.slice(isBestSeller ? 0 : 15, isBestSeller ? 12 : 30).map((item) => (
          <div key={item.id} className="w-[140px] sm:w-[160px] md:w-[200px] flex-shrink-0">
            <ProductCard 
              title={item.title} titleEn={item.titleEn} 
              category={item.category} categoryEn={item.categoryEn} 
              image={item.image}
              description={item.description} descriptionEn={item.descriptionEn}
              size={item.size}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
