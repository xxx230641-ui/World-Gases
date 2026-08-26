import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function ProductCard({ title, category, viewMode = 'grid' }: { title: string, category: string, viewMode?: 'grid' | 'list' | 'large' }) {
  const isList = viewMode === 'list';
  const isLarge = viewMode === 'large';
  const { t } = useLanguage();
  
  return (
    <Link to={`/category/${encodeURIComponent(category)}`} className="block w-full h-full">
      <motion.div 
        whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.2 }}
        className={`bg-white rounded-2xl p-4 flex border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] relative cursor-pointer h-full ${isLarge ? 'w-full md:items-center min-w-full flex-col md:flex-row gap-4' : isList ? 'w-full flex-col sm:flex-row items-center gap-4 md:gap-8' : 'flex-col gap-3 w-full'}`}
      >
        
        {/* Product Image Placeholder */}
        <div className={`bg-[#f8f9fa] rounded-xl flex items-center justify-center transition-transform duration-300 ${isLarge ? 'w-full md:w-1/2 aspect-[4/3] mt-2 mb-2' : isList ? 'w-full sm:w-[220px] md:w-[280px] aspect-[4/3] flex-shrink-0' : 'w-full aspect-square mt-2 mb-2'}`}>
          <span className="text-gray-400 text-xs md:text-sm font-medium text-center px-2">{t('product_image_placeholder')}</span>
        </div>

        {/* Product Info */}
        <div className={`flex flex-col gap-1.5 flex-1 justify-center ${isLarge ? 'md:px-8' : isList ? 'py-4' : ''}`}>
          <span className="text-xs text-[#0a5595] font-bold">{category}</span>
          <h3 className={`font-bold text-[#1f2e3f] leading-snug ${isList ? 'text-lg md:text-xl' : 'text-[15px] md:text-lg'}`}>
            {title}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
}
