import SectionHeader from './SectionHeader';
import ProductCard from './ProductCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useState, MouseEvent } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { productsDatabase } from '../data/products';

export default function ProductSlider({ title, isBestSeller = false }: { title: string, isBestSeller?: boolean }) {
  const { language } = useLanguage();
  
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);


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
    const walk = (x - startX) * 2; // Scroll-fast
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollLeftBy = (amount: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 overflow-hidden relative">
      <div className="flex items-center justify-between border-b border-gray-100 pb-2 mb-6">
        <SectionHeader title={title} />
        <div className="flex gap-2">
          <button 
            onClick={() => scrollLeftBy(language === 'en' ? -300 : 300)}
            className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100"
          >
            {language === 'en' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
          <button 
            onClick={() => scrollLeftBy(language === 'en' ? 300 : -300)}
            className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100"
          >
            {language === 'en' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
        </div>
      </div>
      
      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex overflow-x-auto gap-4 md:gap-6 pb-6 pt-2 hide-scrollbar cursor-grab ${isBestSeller ? 'snap-x snap-mandatory' : ''}`}
      >
        {productsDatabase.slice(isBestSeller ? 0 : 15, isBestSeller ? 4 : 25).map((item, idx) => (
          <div key={item.id} className={isBestSeller ? 'snap-center min-w-full flex-shrink-0' : 'w-[220px] sm:w-[260px] md:w-[280px] flex-shrink-0'}>
            <ProductCard title={item.title} category={item.category} viewMode={isBestSeller ? 'large' : 'grid'} />
          </div>
        ))}
      </div>
    </section>
  );
}
