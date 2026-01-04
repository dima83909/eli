// components/hero/Hero.tsx
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden"
    >
      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/fcb5f9dd3ad94a2e90c7b77dab58cc6d.mov"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <HeroContent />

      {/* SCROLL */}
      <ScrollIndicator />
    </section>
  );
}
