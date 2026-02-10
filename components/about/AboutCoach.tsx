// components/about/AboutCoach.tsx
import Image from "next/image";
import AboutCoachContent from "./AboutCoachContent";

export default function AboutCoach() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 md:grid-cols-2">
        
        {/* Image */}
        <div className="reveal relative h-[520px] w-full">
          <Image
            src="/images/IMG_82AE7B2DBE7E-1.jpeg"
            alt="Personal fitness coach portrait"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="reveal delay-150">
          <AboutCoachContent />
        </div>
      </div>
    </section>
  );
}
