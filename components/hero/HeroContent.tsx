// components/hero/HeroContent.tsx
"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-10 flex h-full items-center px-6">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-white/70">
            Online & Offline Coaching
          </span>

          <h1 className="hero-title mb-6 leading-tight">
            Transform your body.
            <br />
            Build confidence.
          </h1>

          <p className="mb-10 text-base leading-relaxed text-white/80 sm:text-lg">
            Personalized training programs and nutrition guidance designed
            to help you get stronger, leaner, and more confident — both
            physically and mentally.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <button className="border border-white px-10 py-3 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black">
              Start training
            </button>

            <button className="border border-transparent bg-white px-10 py-3 text-sm uppercase tracking-widest text-black transition hover:bg-white/80">
              Free consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
