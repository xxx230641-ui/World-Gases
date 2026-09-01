import { Search, Globe, Menu, X, Home, LayoutGrid, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { productsDatabase } from '../data/products';
import { AnimatePresence, motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();

  const categories = Array.from(new Set(productsDatabase.map(item => language === 'en' && item.categoryEn ? item.categoryEn : item.category)));

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = productsDatabase.filter(item => {
    const q = searchQuery.toLowerCase();
    return (
      (item.title && item.title.toLowerCase().includes(q)) || 
      (item.category && item.category.toLowerCase().includes(q)) ||
      (item.titleEn && item.titleEn.toLowerCase().includes(q)) ||
      (item.categoryEn && item.categoryEn.toLowerCase().includes(q)) ||
      (item.description && item.description.toLowerCase().includes(q)) ||
      (item.descriptionEn && item.descriptionEn.toLowerCase().includes(q))
    );
  });

  return (
    <>
      <header className="bg-white py-3 md:py-4 sticky top-0 z-40 transition-all shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12">
          
          {/* Top Section for Mobile (Menu + Logo) */}
          <div className="flex w-full md:w-auto justify-between items-center">
            
            {/* Hamburger Menu (Mobile & Desktop) */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-700 hover:text-[#f97316] transition-colors p-1"
            >
              <Menu size={28} />
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 cursor-pointer flex items-center gap-2 mx-auto md:mx-0 md:ml-4 rtl:md:mr-4 rtl:md:ml-0">
              <img 
                src="/images/logos/1787822948877.jpg" 
                alt="عالم الغازات والأفران" 
                className="h-10 w-10 md:h-12 md:w-12 rounded-full shadow-sm border border-gray-100 object-cover"
              />
              <img 
                src="/images/logos/1787842289894.jpg" 
                alt="عالم الغازات والأفران - نص" 
                className="h-5 md:h-7 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex-1 w-full relative" ref={searchRef}>
            <div className="relative flex items-center w-full h-10 md:h-12 rounded-full bg-gray-100 px-4 border border-gray-200 focus-within:border-[#f97316] focus-within:bg-white transition-colors overflow-hidden shadow-inner">
              <Search className="text-gray-400 flex-shrink-0" size={20} />
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowDropdown(true);
                }}
                onFocus={() => setShowDropdown(true)}
                placeholder={t('search_placeholder')} 
                className={`flex-1 bg-transparent border-none outline-none px-4 text-gray-800 placeholder-gray-500 h-full w-full font-medium ${language === 'en' ? 'text-left' : 'text-right'}`}
              />
            </div>
            
            {/* Live Search Dropdown */}
            {showDropdown && searchQuery.trim() !== '' && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50 max-h-80 overflow-y-auto">
                {filteredResults.length > 0 ? (
                  <ul className="py-2">
                    {filteredResults.map(item => (
                      <li key={item.id} className={`hover:bg-gray-50 transition-colors cursor-pointer px-4 py-3 flex items-center gap-4 border-b border-gray-50 last:border-0`} onClick={() => { setShowDropdown(false); navigate(`/category/${encodeURIComponent(item.category)}`); }}>
                        <div className="w-12 h-12 bg-gray-50 rounded flex items-center justify-center text-[10px] text-gray-400 font-bold flex-shrink-0 border border-gray-100 overflow-hidden">
                          {item.image !== 'قالب صورة' ? (
                            <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                          ) : (
                            item.image
                          )}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-gray-800">{language === 'en' && item.titleEn ? item.titleEn : item.title}</span>
                          <span className="text-xs text-[#f97316] font-medium mt-1">{language === 'en' && item.categoryEn ? item.categoryEn : item.category}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-4 text-center text-gray-500 font-medium">{t('no_results')}</div>
                )}
              </div>
            )}
          </div>

          {/* Language Toggle (Desktop) */}
          <button 
            onClick={toggleLanguage}
            className="hidden md:flex items-center gap-1.5 font-medium text-gray-600 hover:text-[#f97316] transition-colors whitespace-nowrap"
          >
            <Globe size={18} />
            {t('language')}
          </button>
        </div>
      </header>

      {/* Sidebar Overlay & Drawer */}
      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ x: language === 'ar' ? '100%' : '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: language === 'ar' ? '100%' : '-100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className={`fixed top-0 bottom-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-72 bg-white z-50 shadow-2xl flex flex-col`}
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-[#1e293b] text-white">
                <span className="font-bold text-lg">{t('world_of_gas') || 'عالم الغازات'}</span>
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Sidebar Content */}
              <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-2">
                <Link 
                  to="/" 
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#fff7ed] hover:text-[#f97316] text-[#1f2e3f] font-medium transition-colors"
                >
                  <Home size={20} />
                  <span>{t('home') || 'الصفحة الرئيسية'}</span>
                </Link>

                <div className="flex flex-col">
                  <div 
                    onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-[#fff7ed] hover:text-[#f97316] text-[#1f2e3f] font-medium transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <LayoutGrid size={20} />
                      <span>{t('categories') || 'الأقسام'}</span>
                    </div>
                    {isCategoriesOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                  
                  <AnimatePresence>
                    {isCategoriesOpen && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden flex flex-col gap-1 px-4 mt-1"
                      >
                        {categories.map((category, idx) => (
                          <Link 
                            key={idx}
                            to={`/category/${encodeURIComponent(category)}`}
                            onClick={() => setIsSidebarOpen(false)}
                            className="py-2 px-8 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-600 hover:text-[#f97316] transition-colors block"
                          >
                            {category}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsSidebarOpen(false);
                  }}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#fff7ed] hover:text-[#f97316] text-[#1f2e3f] font-medium transition-colors w-full text-start"
                >
                  <Globe size={20} />
                  <span>{t('language') || 'تغيير اللغة'}</span>
                </button>
                
                <div className="mt-8 border-t border-gray-100 pt-8 flex flex-col gap-4 px-4">
                  <p className="text-sm font-bold text-gray-500 mb-2">{t('contact_us_now') || 'تواصل معنا'}</p>
                  
                  <a 
                    href="https://wa.me/962795155953" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#25D366] hover:opacity-80 transition-opacity font-bold"
                  >
                    <WhatsAppIcon />
                    <span>{t('whatsapp') || 'واتساب'}</span>
                  </a>
                  
                  <a 
                    href="https://www.facebook.com/kitchensjo/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-[#1877F2] hover:opacity-80 transition-opacity font-bold"
                  >
                    <FacebookIcon />
                    <span>{t('facebook') || 'فيسبوك'}</span>
                  </a>
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-gray-50 text-center">
                <p className="text-xs text-gray-400 font-medium">{t('copyright') || '© 2026 عالم الغازات والأفران'}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
