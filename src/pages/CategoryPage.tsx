import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProductsByCategory } from '../data/products';
import { motion, AnimatePresence } from 'framer-motion';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [visibleCount, setVisibleCount] = useState(12);
  const { t } = useLanguage();
  
  // Decoded category title
  const decodedTitle = categoryId ? decodeURIComponent(categoryId) : t('categories');
  const categoryProducts = getProductsByCategory(decodedTitle);
  const visibleProducts = categoryProducts.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 12);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="mb-4">
          <button onClick={() => navigate(-1)} className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1f2e3f] hover:text-[#f97316] transition-colors bg-gray-50 hover:bg-orange-50 px-3 py-1.5 rounded-full border border-gray-100">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rtl:rotate-180">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>{t('back') || 'رجوع'}</span>
          </button>
        </div>
        <div className="text-sm text-gray-500 mb-6 flex gap-2">
           <a href="/" className="hover:text-[#1e293b]">{t('home') || 'الصفحة الرئيسية'}</a>
           <span>/</span>
           <span className="text-[#1f2e3f] font-bold">{t('categories') || 'الأقسام'}</span>
           <span>/</span>
           <span className="text-[#1f2e3f] font-bold">{decodedTitle}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Grid */}
          <div className="flex-1">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-xl md:text-2xl font-bold text-[#1e293b]">{decodedTitle}</h1>
                <div className="flex items-center gap-4 justify-between sm:justify-end">
                  <div className="text-sm text-gray-500">
                    {t('showing')} 1 - {visibleProducts.length} {t('results_of')} {categoryProducts.length}
                  </div>
                  <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                    <button 
                       onClick={() => setViewMode('grid')} 
                       className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#1e293b]' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <LayoutGrid size={20} />
                    </button>
                    <button 
                       onClick={() => setViewMode('list')} 
                       className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-[#1e293b]' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
             </div>
             
             <motion.div layout className={viewMode === 'grid' ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full" : "flex flex-col gap-4 w-full"}>
                <AnimatePresence>
                  {visibleProducts.length > 0 ? visibleProducts.map((item, idx) => (
                    <motion.div layout key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: (idx % 12) * 0.05 }}>
                      <ProductCard 
                        title={item.title} titleEn={item.titleEn}
                        category={item.category} categoryEn={item.categoryEn}
                        image={item.image}
                        description={item.description} descriptionEn={item.descriptionEn}
                        size={item.size}
                        price={item.price}
                        viewMode={viewMode} 
                      />
                    </motion.div>
                  )) : (
                    <div className="text-center py-12 text-gray-500 font-medium col-span-full">
                      {t('no_products') || 'عذراً، لا توجد منتجات في هذا القسم حالياً.'}
                    </div>
                  )}
                </AnimatePresence>
             </motion.div>

             {/* Load More Button */}
             {visibleCount < categoryProducts.length && (
               <div className="flex justify-center mt-12 mb-8">
                 <button 
                   onClick={handleLoadMore}
                   className="bg-white border-2 border-[#1e293b] text-[#1e293b] hover:bg-[#1e293b] hover:text-white px-10 py-3 rounded-full font-bold shadow-sm transition-colors text-sm md:text-base flex items-center gap-2"
                 >
                   {t('load_more') || 'عرض المزيد'}
                 </button>
               </div>
             )}

          </div>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
}
