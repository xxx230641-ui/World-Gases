import Header from '../components/Header';
import Navigation from '../components/Navigation';
import HeroBanners from '../components/HeroBanners';
import Categories from '../components/Categories';
import ProductSlider from '../components/ProductSlider';
import LatestOffers from '../components/LatestOffers';
import PromoBanner from '../components/PromoBanner';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Home() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Navigation />

      <motion.main 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        exit={{ opacity: 0 }} 
        transition={{ duration: 0.3 }} 
        className="flex-1"
      >
        <HeroBanners />
        <Categories />
        <ProductSlider title={t('bestseller')} isBestSeller={true} autoScrollInterval={5000} />
        <ProductSlider title={t('new_arrivals')} autoScrollInterval={4000} />
        <PromoBanner />
        <LatestOffers />
        <AboutSection />
        <Features />
      </motion.main>
      <Footer />
    </div>
  );
}
