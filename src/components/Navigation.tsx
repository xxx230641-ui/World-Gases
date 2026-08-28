import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navigation() {
  const { t } = useLanguage();

  return (
    <nav className="bg-[#0B1B3D] hidden md:block relative z-30">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-8 h-14">
        {/* Links */}
        <div className="flex items-center gap-6 font-bold text-gray-200 text-sm">
          <Link to="/" className="hover:text-[#f97316] transition-colors">{t('home')}</Link>
        </div>
      </div>
    </nav>
  );
}
