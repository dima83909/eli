// components/about/AboutCoach.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AboutCoachContent from "./AboutCoachContent";

export default function AboutCoach() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 md:grid-cols-2">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[520px] w-full"
        >
          <Image
            src="/images/about-coach.jpg"
            alt="Personal fitness coach portrait"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <AboutCoachContent />
        </motion.div>
      </div>
    </section>
  );
}
