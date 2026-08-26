import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const categories = [
  'الثلاجات و الفريزرات',
  'الغسالات و النشافات',
  'الأجهزة المنزلية الصغيرة',
  'أجهزة التبريد',
  'الجلايات',
  'أجهزة الطبخ',
  'التلفزيونات',
  'المدافئ',
  'أجهزة الحدائق'
];

export default function Navigation() {
  const [showCat, setShowCat] = useState(false);
  const catRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (catRef.current && !catRef.current.contains(event.target as Node)) {
        setShowCat(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white border-b border-gray-200 hidden md:block relative z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 h-14">
        {/* Categories Dropdown */}
        <div className="relative h-full flex items-center" ref={catRef}>
          <button 
            onClick={() => setShowCat(!showCat)}
            className="bg-[#0a5595] hover:bg-blue-800 transition-colors text-white px-6 h-10 rounded-md flex items-center gap-2 font-medium"
          >
            <span>{t('categories')}</span>
            <ChevronDown size={16} className={`transition-transform ${showCat ? 'rotate-180' : ''}`} />
          </button>

          {showCat && (
            <div className={`absolute top-full ${language === 'en' ? 'left-0' : 'right-0'} w-64 bg-white border border-gray-100 shadow-lg rounded-b-xl overflow-hidden py-2 z-50`}>
              <ul className="flex flex-col">
                {categories.map((cat, idx) => (
                  <li key={idx}>
                    <Link 
                      to={`/category/${encodeURIComponent(cat)}`}
                      onClick={() => setShowCat(false)}
                      className="block px-6 py-3 hover:bg-[#f2f7fa] hover:text-[#0a5595] text-[#1f2e3f] transition-colors font-medium text-sm border-b border-gray-50 last:border-0"
                    >
                      {cat}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 font-bold text-[#1f2e3f] text-sm">
          <Link to="/" className="hover:text-[#0a5595] transition-colors">{t('home')}</Link>
        </div>
      </div>
    </nav>
  );
}
