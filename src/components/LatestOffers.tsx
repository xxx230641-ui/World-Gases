import SectionHeader from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';
import { useState, useEffect, TouchEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function LatestOffers() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const offers = [
    {
      id: 1,
      label: 'خصم خاص'
    },
    {
      id: 2,
      label: 'عرض جديد'
    },
    {
      id: 3,
      label: 'تخفيضات الكبرى'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [offers.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === offers.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? offers.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const handleTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      language === 'ar' ? prevSlide() : nextSlide();
    }
    if (isRightSwipe) {
      language === 'ar' ? nextSlide() : prevSlide();
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 relative">
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-2">
        <SectionHeader title={t('latest_offers') || 'أحدث العروض'} />
        <div className="flex gap-2">
          <button onClick={() => language === 'ar' ? nextSlide() : prevSlide()} className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100">
            {language === 'ar' ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
          </button>
          <button onClick={() => language === 'ar' ? prevSlide() : nextSlide()} className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-[#e6f0f9] text-[#1f2e3f] transition-colors border border-gray-100">
            {language === 'ar' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
      </div>
      
      <div 
        className="w-full max-w-4xl mx-auto aspect-[2/1] md:aspect-[2.5/1] bg-[#f8f9fa] border border-gray-200 rounded-2xl flex items-center justify-center shadow-sm relative overflow-hidden group"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            <span className="text-gray-400 font-medium text-lg">قالب عرض</span>
            
            <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10 text-white">
              <span className="bg-[#eab308] text-[#1f2e3f] px-3 py-1 rounded text-sm md:text-base font-bold inline-block mb-2 md:mb-3">{offers[currentIndex].label}</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Slider dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {offers.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-6 bg-[#f97316]' : 'w-2 bg-gray-300 hover:bg-gray-400'}`}
          />
        ))}
      </div>
    </section>
  );
}
