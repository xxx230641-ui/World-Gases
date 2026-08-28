import fs from 'fs';

let file = fs.readFileSync('src/components/Categories.tsx', 'utf8');

file = file.replace(/fullName: 'افران بلت ان Built-in غاز وكهرباء'/g, "fullName: 'افران بلت ان Built-in غاز وكهرباء', fullNameEn: 'Built-in Gas & Electric Ovens'");
file = file.replace(/shortName: 'افران'/g, "shortName: 'افران', shortNameEn: 'Ovens'");

file = file.replace(/fullName: 'طباخات غاز وكهرباء بلت ان Built-in'/g, "fullName: 'طباخات غاز وكهرباء بلت ان Built-in', fullNameEn: 'Built-in Gas & Electric Cooktops'");
file = file.replace(/shortName: 'طباخات'/g, "shortName: 'طباخات', shortNameEn: 'Cooktops'");

file = file.replace(/fullName: 'شفاطات مطبخ وشفاطات جزيرة'/g, "fullName: 'شفاطات مطبخ وشفاطات جزيرة', fullNameEn: 'Kitchen & Island Hoods'");
file = file.replace(/shortName: 'شفاطات'/g, "shortName: 'شفاطات', shortNameEn: 'Hoods'");

file = file.replace(/fullName: 'مايكرويفات بلت ان Built-in'/g, "fullName: 'مايكرويفات بلت ان Built-in', fullNameEn: 'Built-in Microwaves'");
file = file.replace(/shortName: 'مايكرويفات'/g, "shortName: 'مايكرويفات', shortNameEn: 'Microwaves'");

file = file.replace(/fullName: 'كولرات بلت ان Built-in'/g, "fullName: 'كولرات بلت ان Built-in', fullNameEn: 'Built-in Coolers'");
file = file.replace(/shortName: 'كولرات'/g, "shortName: 'كولرات', shortNameEn: 'Coolers'");

file = file.replace(/fullName: 'جلايات بلت ان Built-in'/g, "fullName: 'جلايات بلت ان Built-in', fullNameEn: 'Built-in Dishwashers'");
file = file.replace(/shortName: 'جلايات'/g, "shortName: 'جلايات', shortNameEn: 'Dishwashers'");

file = file.replace(/fullName: 'غسالات بلت ان Built-in'/g, "fullName: 'غسالات بلت ان Built-in', fullNameEn: 'Built-in Washing Machines'");
file = file.replace(/shortName: 'غسالات'/g, "shortName: 'غسالات', shortNameEn: 'Washing Machines'");

file = file.replace(/fullName: 'ثلاجات بلت ان Built-in'/g, "fullName: 'ثلاجات بلت ان Built-in', fullNameEn: 'Built-in Refrigerators'");
file = file.replace(/shortName: 'ثلاجات'/g, "shortName: 'ثلاجات', shortNameEn: 'Refrigerators'");

// careful with replacement, we only want to change the displayed strings, not the lottieData keys or routing
file = file.replace(/<span className="text-sm font-bold text-center text-\[#666e77\] group-hover:text-\[#f97316\] transition-colors">{cat\.shortName}<\/span>/g, '<span className="text-sm font-bold text-center text-[#666e77] group-hover:text-[#f97316] transition-colors">{language === \\\'en\\\' ? cat.shortNameEn : cat.shortName}</span>');

file = file.replace(/{cat\.fullName}/g, "{language === 'en' ? cat.fullNameEn : cat.fullName}");
// But wait, the link: <Link to={`/category/${encodeURIComponent(cat.fullName)}`} ...>
// We should use the english category name in the route if english is active, or we can just stick to `cat.fullName` for the route and let CategoryPage handle it.
// Actually, let's keep the route based on the current language:
file = file.replace(/to={`\/category\/\$\{encodeURIComponent\(cat\.fullName\)\}`}/g, "to={`/category/${encodeURIComponent(language === 'en' ? cat.fullNameEn : cat.fullName)}`}");

fs.writeFileSync('src/components/Categories.tsx', file);
