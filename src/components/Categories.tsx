import { Refrigerator, WashingMachine, Coffee, Wind, Utensils, Tv, Flame, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useRef, useState, MouseEvent } from 'react';

const categories = [
  { name: 'الثلاجات و الفريزرات', icon: Refrigerator },
  { name: 'الغسالات و النشافات', icon: WashingMachine },
  { name: 'الأجهزة المنزلية الصغيرة', icon: Coffee },
  { name: 'أجهزة التبريد', icon: Wind },
  { name: 'الجلايات', icon: WashingMachine },
  { name: 'أجهزة الطبخ', icon: Utensils },
  { name: 'التلفزيونات', icon: Tv },
  { name: 'المدافئ', icon: Flame },
  { name: 'أجهزة الحدائق', icon: TreePine },
];

import { useLanguage } from '../context/LanguageContext';

export default function Categories() {
  const { t } = useLanguage();
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

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 overflow-hidden">
      <SectionHeader title={t('shop_by_category')} />
      <div 
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex overflow-x-auto gap-4 md:gap-6 pb-4 pt-2 hide-scrollbar cursor-grab"
      >
        {categories.map((cat, idx) => (
          <Link to={`/category/${encodeURIComponent(cat.name)}`} key={idx} className="flex flex-col items-center gap-4 min-w-[130px] md:min-w-[160px] cursor-pointer group pointer-events-auto">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#f8f9fa] flex items-center justify-center group-hover:bg-[#f2f7fa] transition-colors border-2 border-transparent group-hover:border-[#0a5595] shadow-sm">
              <cat.icon size={48} className="text-[#0a5595] opacity-80" strokeWidth={1.5} />
            </div>
            <span className="text-sm font-bold text-center text-[#666e77] group-hover:text-[#0a5595] transition-colors">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
