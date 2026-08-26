import Header from '../components/Header';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getProductsByCategory } from '../data/products';
import { motion } from 'framer-motion';

export default function CategoryPage() {
  const { categoryId } = useParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { t } = useLanguage();
  
  // Decoded category title
  const decodedTitle = categoryId ? decodeURIComponent(categoryId) : t('categories');
  const categoryProducts = getProductsByCategory(decodedTitle);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />
      
      <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full">
        <div className="text-sm text-gray-500 mb-6 flex gap-2">
           <a href="/" className="hover:text-[#0a5595]">{t('home')}</a>
           <span>/</span>
           <span className="text-[#1f2e3f] font-bold">{t('categories')}</span>
           <span>/</span>
           <span className="text-[#1f2e3f] font-bold">{decodedTitle}</span>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Grid */}
          <div className="flex-1">
             <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col sm:flex-row justify-between sm:items-center gap-4">
                <h1 className="text-xl md:text-2xl font-bold text-[#0a5595]">{decodedTitle}</h1>
                <div className="flex items-center gap-4 justify-between sm:justify-end">
                  <div className="text-sm text-gray-500">
                    {t('showing')} 1 - {categoryProducts.length} {t('results_of')}
                  </div>
                  <div className="flex items-center bg-gray-50 rounded-lg p-1 border border-gray-200">
                    <button 
                      onClick={() => setViewMode('grid')} 
                      className={`p-1.5 rounded transition-colors ${viewMode === 'grid' ? 'bg-white shadow-sm text-[#0a5595]' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <LayoutGrid size={20} />
                    </button>
                    <button 
                      onClick={() => setViewMode('list')} 
                      className={`p-1.5 rounded transition-colors ${viewMode === 'list' ? 'bg-white shadow-sm text-[#0a5595]' : 'text-gray-400 hover:text-gray-600'}`}
                    >
                      <List size={20} />
                    </button>
                  </div>
                </div>
             </div>
             
             <motion.div layout className={viewMode === 'grid' ? "grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 w-full" : "flex flex-col gap-4 w-full"}>
                {categoryProducts.length > 0 ? categoryProducts.map((item, idx) => (
                  <motion.div layout key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.05 }}>
                    <ProductCard title={item.title} category={item.category} viewMode={viewMode} />
                  </motion.div>
                )) : (
                  <div className="text-center py-12 text-gray-500 font-medium col-span-full">
                    عذراً، لا توجد منتجات في هذا القسم حالياً.
                  </div>
                )}
             </motion.div>
          </div>
        </div>
      </motion.main>

      <Footer />
    </div>
  );
}
