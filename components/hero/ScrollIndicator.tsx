export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-7 left-1/2 z-20 hidden -translate-x-1/2 lg:block">
      <div className="flex flex-col items-center text-[#fdffff]/70">
        <span className="mb-3 text-[10px] font-black uppercase tracking-[0.28em]">Скрол</span>
        <div className="h-12 w-px origin-top animate-pulse bg-[#F5B8CC]" />
      </div>
    </div>
  );
}
