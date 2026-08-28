import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function ProductCard({ 
  title, 
  category, 
  image,
  description,
  size,
  price,
}: { 
  title: string, 
  category: string, 
  image?: string,
  description?: string,
  size?: string,
  price?: string,
  viewMode?: string 
}) {
  const { t, language } = useLanguage();
  
  return (
    <Link to={`/category/${encodeURIComponent(category)}`} className="block w-full h-full">
      <motion.div 
        whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl p-2 sm:p-3 flex flex-col gap-2.5 border border-gray-100 shadow-sm hover:shadow-md cursor-pointer h-full"
      >
        {/* Product Image */}
        <div className="w-full aspect-[4/3] bg-white rounded-lg flex items-center justify-center overflow-hidden border border-gray-50 flex-shrink-0 relative">
          {image && image !== 'قالب صورة' ? (
            <img src={image} alt={title} className="w-full h-full object-contain hover:scale-105 transition-transform duration-500" />
          ) : (
            <div className="w-full h-full bg-gray-50 flex items-center justify-center">
              <span className="text-gray-400 text-[10px] sm:text-xs font-medium text-center px-2">{t('product_image_placeholder') || 'قالب صورة'}</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="flex flex-col flex-1 px-1">
          <span className="text-[9px] sm:text-[10px] text-[#f97316] font-bold truncate mb-0.5">{category}</span>
          <h3 className="font-bold text-[#1f2e3f] text-xs sm:text-sm leading-snug line-clamp-1 mb-1.5">
            {title}
          </h3>
          
          {description && (
            <p className={`text-gray-500 text-[10px] sm:text-[11px] leading-relaxed mb-2 line-clamp-2 ${language === 'en' ? 'text-left' : 'text-right'}`}>
              {description}
            </p>
          )}
          
          {(size || price) && (
            <div className="mt-auto pt-2 flex flex-wrap items-center justify-between border-t border-gray-100 gap-1">
              {size && (
                <span className="text-[9px] sm:text-[10px] font-bold text-gray-600 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100 whitespace-nowrap">
                  {size}
                </span>
              )}
              {price && (
                <span className="text-[11px] sm:text-[13px] font-black text-[#f97316] whitespace-nowrap">
                  {price}
                </span>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </Link>
  );
}
