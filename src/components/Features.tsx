import { Info, MapPin, Wrench, MessageSquare, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Features() {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    device: '',
    problem: ''
  });

  const featuresList = [
    { 
      name: t('who_we_are'), 
      icon: Info,
      action: () => navigate('/about')
    },
    { 
      name: t('our_locations'), 
      icon: MapPin,
      action: () => window.open('https://www.google.com/maps/place/%D8%B9%D8%A7%D9%84%D9%85+%D8%A7%D9%84%D8%BA%D8%A7%D8%B2%D8%A7%D8%AA+%D9%88%D8%A7%D9%84%D8%A7%D9%81%D8%B1%D8%A7%D9%86+%D8%A8%D9%84%D8%AA+%D8%A7%D9%84%D9%86+world+Gases+and+Ovens/@31.9118273,35.9407232,17z/data=!3m1!4b1!4m6!3m5!1s0x151b5ff3e79bec77:0x77cef119a4e3c1ce!8m2!3d31.9118273!4d35.9381483!16s%2Fg%2F11h2mdp1h3?entry=ttu', '_blank')
    },
    { 
      name: t('maintenance'), 
      icon: Wrench,
      action: () => setIsModalOpen(true)
    },
    { 
      name: t('contact_us'), 
      icon: MessageSquare,
      action: () => window.location.href = 'tel:+962795155953'
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `طلب صيانة\nالاسم: ${formData.name}\nرقم الهاتف: ${formData.phone}\nالجهاز: ${formData.device}\nالمشكلة: ${formData.problem}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/962795155953?text=${encodedText}`, '_blank');
    setIsModalOpen(false);
    setFormData({ name: '', phone: '', device: '', problem: '' });
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuresList.map((feat, idx) => (
            <div 
              key={idx} 
              onClick={feat.action}
              className="bg-[#f8f9fa] rounded-3xl p-8 flex flex-col items-center justify-center gap-5 hover:bg-[#fff7ed] transition-all duration-300 cursor-pointer border border-transparent hover:border-[#f97316] shadow-sm hover:shadow-md group"
            >
              <div className="w-16 h-16 rounded-full bg-[#f97316] flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                <feat.icon size={28} strokeWidth={2} />
              </div>
              <span className="font-bold text-[#1f2e3f] text-base group-hover:text-[#f97316] transition-colors">{feat.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Maintenance Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-3xl shadow-2xl z-50 overflow-hidden"
              dir={language === 'en' ? 'ltr' : 'rtl'}
            >
              <div className="bg-[#1e293b] p-6 flex justify-between items-center text-white">
                <h3 className="text-xl font-bold">{language === 'ar' ? 'طلب صيانة' : 'Maintenance Request'}</h3>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {language === 'ar' ? 'الاسم' : 'Name'}
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-gray-50 transition-colors"
                    placeholder={language === 'ar' ? 'الاسم الكريم' : 'Your Name'}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input 
                    type="tel" 
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-gray-50 transition-colors"
                    placeholder={language === 'ar' ? 'رقم الهاتف للتواصل' : 'Phone Number'}
                    dir="ltr"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {language === 'ar' ? 'اسم الجهاز' : 'Device Name'}
                  </label>
                  <input 
                    type="text" 
                    required
                    value={formData.device}
                    onChange={(e) => setFormData({...formData, device: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-gray-50 transition-colors"
                    placeholder={language === 'ar' ? 'نوع الفرن أو الغاز' : 'Oven or Gas type'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {language === 'ar' ? 'المشكلة' : 'The Problem'}
                  </label>
                  <textarea 
                    required
                    rows={3}
                    value={formData.problem}
                    onChange={(e) => setFormData({...formData, problem: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#f97316] focus:ring-1 focus:ring-[#f97316] bg-gray-50 transition-colors resize-none"
                    placeholder={language === 'ar' ? 'وصف مختصر للمشكلة...' : 'Brief description of the problem...'}
                  />
                </div>

                <button 
                  type="submit"
                  className="mt-2 w-full bg-[#f97316] hover:bg-[#ea580c] text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  <Wrench size={20} />
                  {language === 'ar' ? 'إرسال طلب الصيانة' : 'Send Request'}
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
