import { Search, Globe } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { productsDatabase } from '../data/products';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredResults = productsDatabase.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="bg-white py-4 md:py-6 border-b border-gray-100 shadow-sm sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12">
        
        {/* Top Section for Mobile (Logo + Lang) */}
        <div className="flex w-full md:w-auto justify-between items-center">
          {/* Logo Placeholder */}
          <Link to="/" className="flex-shrink-0 cursor-pointer block">
            <div className="text-xl md:text-3xl font-bold text-[#0a5595] tracking-tight">
              عالم الغازات <span className="text-[#f2c94c]">والأفران</span>
            </div>
          </Link>
          
          {/* Language Toggle (Mobile + Desktop) */}
          <button 
            onClick={toggleLanguage}
            className="md:hidden flex items-center gap-1.5 text-sm font-medium text-[#1f2e3f] hover:text-[#0a5595] transition-colors"
          >
            <Globe size={16} />
            {t('language')}
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex-1 w-full relative" ref={searchRef}>
          <div className="relative flex items-center w-full h-12 md:h-14 rounded-full bg-[#f2f7fa] px-4 border border-transparent focus-within:border-[#0a5595] transition-colors overflow-hidden">
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
              className={`flex-1 bg-transparent border-none outline-none px-4 text-[#1f2e3f] placeholder-gray-400 h-full w-full font-medium ${language === 'en' ? 'text-left' : 'text-right'}`}
            />
          </div>
          
          {/* Live Search Dropdown */}
          {showDropdown && searchQuery.trim() !== '' && (
            <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50 max-h-80 overflow-y-auto">
              {filteredResults.length > 0 ? (
                <ul className="py-2">
                  {filteredResults.map(item => (
                    <li key={item.id} className={`hover:bg-[#f2f7fa] transition-colors cursor-pointer px-4 py-3 flex items-center gap-4 border-b border-gray-50 last:border-0`} onClick={() => { setShowDropdown(false); navigate(`/category/${encodeURIComponent(item.category)}`); }}>
                      <div className="w-12 h-12 bg-[#f8f9fa] rounded flex items-center justify-center text-[10px] text-gray-500 font-bold flex-shrink-0 border border-gray-100">
                        {item.image}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-[#1f2e3f]">{item.title}</span>
                        <span className="text-xs text-[#0a5595] font-medium mt-1">{item.category}</span>
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
          className="hidden md:flex items-center gap-1.5 font-medium text-[#1f2e3f] hover:text-[#0a5595] transition-colors whitespace-nowrap"
        >
          <Globe size={18} />
          {t('language')}
        </button>
      </div>
    </header>
  );
}
