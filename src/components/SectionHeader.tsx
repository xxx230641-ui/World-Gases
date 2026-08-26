export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-3 h-3 bg-transparent border-[3px] border-[#f2c94c] rounded-[2px]"></div>
      <h2 className="text-xl md:text-2xl font-bold text-[#1f2e3f]">{title}</h2>
    </div>
  );
}
