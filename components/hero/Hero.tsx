// components/hero/Hero.tsx
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative w-full overflow-hidden
        min-h-[100svh]
      "
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/hero-video.mov"
        autoPlay
        loop
        muted
        playsInline
        preload="none"
        poster="/images/hero-poster.jpg"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div className="relative z-10 h-[100svh] pt-[env(safe-area-inset-top)]">
        <HeroContent />
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 pb-[env(safe-area-inset-bottom)]">
        <ScrollIndicator />
      </div>
    </section>
  );
}
