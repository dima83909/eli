// components/hero/ScrollIndicator.tsx
export default function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
      <div className="flex flex-col items-center text-white/70">
        <span className="mb-2 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="h-10 w-px bg-white/50 animate-pulse" />
      </div>
    </div>
  );
}
