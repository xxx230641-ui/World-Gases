import SectionHeader from './SectionHeader';
import { useLanguage } from '../context/LanguageContext';

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <SectionHeader title={t('about')} />
      <div className={`text-[15px] text-[#666e77] leading-[1.8] space-y-4 max-w-5xl font-medium ${t('language') === 'English' ? 'text-justify' : 'text-left'}`}>
        <p>{t('about_text_1')}</p>
        <p>{t('about_text_2')}</p>
        <p>
          <span className="font-bold text-[#1f2e3f]">{t('about_li_1_b')}</span>{t('about_li_1_t')}
        </p>
        <p>
          <span className="font-bold text-[#1f2e3f]">{t('about_li_2_b')}</span>{t('about_li_2_t')}
        </p>
        <p>
          <span className="font-bold text-[#1f2e3f]">{t('about_li_3_b')}</span>{t('about_li_3_t')}
        </p>
        <p>
          <span className="font-bold text-[#1f2e3f]">{t('about_li_4_b')}</span>{t('about_li_4_t')}
        </p>
      </div>
    </section>
  );
}
