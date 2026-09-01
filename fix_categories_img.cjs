const fs = require('fs');

let c = fs.readFileSync('src/components/Categories.tsx', 'utf8');

// Undo the partial replace I might have done
// I will just use regex to replace it exactly.

c = c.replace(
  /<div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-\[#f8f9fa\] flex items-center justify-center group-hover:bg-\[#fff7ed\] transition-colors border-2 border-transparent group-hover:border-\[#f97316\] shadow-sm relative overflow-hidden">([\s\S]*?)<\/div>\s*<span className="text-sm font-bold/g,
  `<div className="w-24 h-24 md:w-32 md:h-32 rounded-3xl bg-[#f8f9fa] flex items-center justify-center group-hover:bg-[#fff7ed] transition-colors border-2 border-transparent group-hover:border-[#f97316] shadow-sm relative overflow-hidden">
              {(cat as any).bgImage && <img src={(cat as any).bgImage} alt={cat.shortName} className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-multiply group-hover:opacity-40 transition-opacity z-0" />}
              <div className="z-10 relative">
$1
              </div>
            </div>
            <span className="text-sm font-bold`
);

fs.writeFileSync('src/components/Categories.tsx', c);
