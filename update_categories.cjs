const fs = require('fs');

let c = fs.readFileSync('src/components/Categories.tsx', 'utf8');

c = c.replace(
  "{ fullName: 'افران بلت ان Built-in غاز وكهرباء', fullNameEn: 'Built-in Gas & Electric Ovens', shortName: 'افران', shortNameEn: 'Ovens', icon: Flame, lottieUrl: '/animations/oven.json' }",
  "{ fullName: 'افران بلت ان Built-in غاز وكهرباء', fullNameEn: 'Built-in Gas & Electric Ovens', shortName: 'افران', shortNameEn: 'Ovens', icon: Flame, lottieUrl: '/animations/oven.json', bgImage: '/images/ovens/IMG-20260901-WA0000.jpg' }"
);
c = c.replace(
  "{ fullName: 'طباخات غاز وكهرباء بلت ان Built-in', fullNameEn: 'Built-in Gas & Electric Cooktops', shortName: 'طباخات', shortNameEn: 'Cooktops', icon: Utensils, lottieUrl: '/animations/cooker.json' }",
  "{ fullName: 'طباخات غاز وكهرباء بلت ان Built-in', fullNameEn: 'Built-in Gas & Electric Cooktops', shortName: 'طباخات', shortNameEn: 'Cooktops', icon: Utensils, lottieUrl: '/animations/cooker.json', bgImage: '/images/cooktops/IMG-20260827-WA0001.jpg' }"
);
c = c.replace(
  "{ fullName: 'مايكرويفات بلت ان Built-in', fullNameEn: 'Built-in Microwaves', shortName: 'مايكرويفات', shortNameEn: 'Microwaves', icon: Microwave, lottieUrl: '/animations/microwave.json' }",
  "{ fullName: 'مايكرويفات بلت ان Built-in', fullNameEn: 'Built-in Microwaves', shortName: 'مايكرويفات', shortNameEn: 'Microwaves', icon: Microwave, lottieUrl: '/animations/microwave.json', bgImage: '/images/microwaves/IMG-20260901-WA0026.jpg' }"
);

// update the rendering logic
c = c.replace(
  /<div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-\[#f8f9fa\] flex items-center justify-center group-hover:bg-\[#fff7ed\] transition-colors border-2 border-transparent group-hover:border-\[#f97316\] shadow-sm relative overflow-hidden">/g,
  `{cat.bgImage && <img src={cat.bgImage} alt={cat.shortName} className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity" />}\n            <div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#f8f9fa] flex items-center justify-center group-hover:bg-[#fff7ed] transition-colors border-2 border-transparent group-hover:border-[#f97316] shadow-sm relative overflow-hidden z-10">`
);

// Wait, the rendering logic I replaced might not work because I added the img sibling to the div. Wait, it should be INSIDE the div.
// Let's replace the whole card body.
