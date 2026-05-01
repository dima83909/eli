import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import AboutCoachContent from "./AboutCoachContent";

export default function AboutCoach() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#fdffff] py-24 text-[#071441] sm:py-32"
    >
      <span className="pointer-events-none absolute -right-8 top-8 font-serif text-[34vw] font-black leading-none text-[#ffdcf7]/10 md:-right-16 md:text-[22vw]">
        “
      </span>

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 sm:px-8 md:grid-cols-[0.92fr_1.08fr] lg:gap-20 lg:px-12">
        <FadeIn className="relative -ml-5 h-[68vh] min-h-[480px] w-[calc(100%+2.5rem)] sm:-ml-8 sm:w-[calc(100%+4rem)] md:-ml-12 md:h-[760px] md:min-h-0 md:w-[calc(100%+3rem)]">
          <Image
            src="/images/IMG_82AE7B2DBE7E-1.jpeg"
            alt="Personal fitness coach portrait"
            fill
            sizes="(min-width: 768px) 48vw, 100vw"
            className="object-cover object-[50%_12%]"
          />
          <div className="absolute bottom-0 right-0 bg-[#ffdcf7] px-5 py-4 font-serif text-4xl font-black italic text-white sm:px-8 sm:text-6xl">
            100+
          </div>
        </FadeIn>

        <FadeIn delay={0.12} className="relative z-10">
          <AboutCoachContent />
        </FadeIn>
      </div>
    </section>
  );
}
