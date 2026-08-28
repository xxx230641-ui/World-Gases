import fs from 'fs';

let c = fs.readFileSync('src/components/Footer.tsx', 'utf8');

c = c.replace(/<span className="text-lg text-white">شارع عباد بن بشر 3، عمّان، الأردن<\/span>/,
`<span className="text-lg text-white">{language === 'en' ? '3 Abbad Bin Bishr St., Amman, Jordan' : 'شارع عباد بن بشر 3، عمّان، الأردن'}</span>`);

c = c.replace(/<span className="text-lg font-bold text-white">الدردشة على الواتس اب<\/span>/,
`<span className="text-lg font-bold text-white">{language === 'en' ? 'Chat on WhatsApp' : 'الدردشة على الواتس اب'}</span>`);

c = c.replace(/export default function Footer\(\) \{/g, `export default function Footer() {\n  const { t, language } = useLanguage();`);
c = c.replace(/  const \{ t \} = useLanguage\(\);/g, ''); // cleanup if there were 2

fs.writeFileSync('src/components/Footer.tsx', c);
