import { useState, TouchEvent, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroBanners() {
  const { t, language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const slides = [
    {
      id: 1,
      content: (
        <div className="w-full h-full bg-[#0B1B3D] flex flex-col items-center justify-center relative overflow-hidden group">
          <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Banner 1" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/60 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      id: 2,
      content: (
        <div className="w-full h-full bg-[#0B1B3D] flex flex-col items-center justify-center relative overflow-hidden group">
           <img src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?auto=format&fit=crop&q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Banner 2" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/60 via-transparent to-transparent"></div>
        </div>
      )
    },
    {
      id: 3,
      content: (
        <div className="w-full h-full bg-[#0B1B3D] flex flex-col items-center justify-center relative overflow-hidden group">
           <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=2070" className="absolute inset-0 w-full h-full object-cover opacity-90" alt="Banner 3" />
           <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/60 via-transparent to-transparent"></div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
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
    <div className="relative bg-[#0B1B3D] pt-2 md:pt-6 pb-16 md:pb-28 overflow-hidden flex flex-col">
      <section className="w-full max-w-7xl mx-auto px-4 relative z-10 h-[220px] sm:h-[300px] md:h-[450px]">
        <div 
          className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 bg-white/5"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
           <AnimatePresence mode="wait">
             <motion.div
               key={currentIndex}
               initial={{ opacity: 0, x: language === 'ar' ? -20 : 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
               transition={{ duration: 0.3 }}
               className="absolute inset-0 w-full h-full"
             >
                {slides[currentIndex].content}
             </motion.div>
           </AnimatePresence>

           {/* Navigation Arrows */}
           <button 
             onClick={prevSlide}
             className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-20 border border-white/20 shadow-lg"
           >
             <ChevronLeft size={20} className="md:w-6 md:h-6" />
           </button>
           <button 
             onClick={nextSlide}
             className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-white/10 hover:bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all z-20 border border-white/20 shadow-lg"
           >
             <ChevronRight size={20} className="md:w-6 md:h-6" />
           </button>

           {/* Slider dots indicator */}
           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center gap-2 z-20">
             {slides.map((_, idx) => (
               <button
                 key={idx}
                 onClick={() => setCurrentIndex(idx)}
                 className={`h-2 rounded-full transition-all duration-300 ${currentIndex === idx ? 'w-8 bg-[#f97316]' : 'w-2 bg-white/50 hover:bg-white'}`}
               />
             ))}
           </div>
        </div>
      </section>
      
      {/* SVG Curved Wave Divider (Overlapping) */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 translate-y-[2px] pointer-events-none drop-shadow-sm">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[220px]">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L80,149.3C160,171,320,213,480,213.3C640,213,800,171,960,144C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
}
