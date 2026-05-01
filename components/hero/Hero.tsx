import Image from "next/image";
import HeroContent from "./HeroContent";
import ScrollIndicator from "./ScrollIndicator";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-[#071441] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(232,96,58,0.28),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.06)_0,transparent_32%)]" />
      <div className="grain-overlay" />

      <div className="grid min-h-screen lg:grid-cols-[0.96fr_1.04fr]">
        <HeroContent />

        <div className="relative order-first min-h-[52vh] overflow-hidden lg:order-none lg:min-h-screen">
          <video
            className="absolute inset-0 hidden h-full w-full object-cover md:block"
            src="/videos/hero-video.mov"
            autoPlay
            loop
            muted
            playsInline
          />
          <Image
            src="/images/IMG_82AE7B2DBE7E-1.jpeg"
            alt="Personal fitness coach portrait"
            fill
            priority
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover object-[50%_18%] md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071441]/58 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#071441]/18 lg:to-transparent" />
          <span className="absolute -bottom-12 -left-8 font-serif text-[32vw] font-black uppercase leading-none text-[#ffdcf7]/18 lg:-left-16 lg:text-[20vw]">
            F
          </span>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
