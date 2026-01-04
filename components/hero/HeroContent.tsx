// components/hero/HeroContent.tsx
"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "../useSmoothScroll";

export default function HeroContent() {
  return (
    <div
      className="
        relative z-10 flex h-full items-center
        px-6
        pt-[env(safe-area-inset-top)]
      "
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl text-white"
        >
          {/* Eyebrow */}
          <span className="mb-5 block text-sm uppercase tracking-widest text-white/70">
            Онлайн та офлайн тренування
          </span>

          {/* H1 — єдиний на сторінці */}
          <h1
            className="
              hero-title mb-6 font-serif font-light leading-tight
              text-3xl
              sm:text-4xl
              md:text-5xl
            "
          >
            Transform your body.
            <br />
            Build confidence.
          </h1>

          {/* Description */}
          <p className="mb-12 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Персональний фітнес-коучинг для жінок, який допомагає
            досягти стійких результатів, підвищити впевненість у собі
            та сформувати здорові звички — без крайнощів і виснажливих дієт.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-4 sm:flex-row">
            {/* Primary CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="
                border border-white bg-white
                px-10 py-4
                text-sm uppercase tracking-widest text-black
                transition hover:bg-white/90
              "
            >
              Записатись на консультацію
            </button>

            {/* Secondary CTA */}
            <button
              onClick={() => scrollToSection("about")}
              className="
                border border-white/50
                px-10 py-4
                text-sm uppercase tracking-widest text-white
                transition hover:border-white hover:bg-white hover:text-black
              "
            >
              Про мене
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
