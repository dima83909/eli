"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <motion.div
      className="relative z-10 flex items-center px-5 pb-24 pt-14 sm:px-8 lg:min-h-screen lg:px-12 lg:pb-20"
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-2xl">
        <span className="mb-6 block text-xs font-black uppercase tracking-[0.22em] text-[#fdffff]/70">
          Онлайн та офлайн тренування
        </span>

        <h1 className="mb-7 font-serif text-[clamp(3.4rem,12vw,8.6rem)] font-black uppercase leading-[0.78] tracking-normal">
          Твоє
          <br />
          <span className="text-[#fdffff]">ті</span>
          <span className="italic text-[#ffdcf7]">ло</span>
          <br />
          <span className="text-[0.56em] italic normal-case text-[#ffdcf7]">твоя сила.</span>
        </h1>

        <p className="mb-10 max-w-xl text-base leading-relaxed text-[#fdffff]/82 sm:text-lg">
          Персональний фітнес-коучинг для жінок, який допомагає досягти стійких результатів,
          підвищити впевненість у собі та сформувати здорові звички — без крайнощів і виснажливих
          дієт.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#ffdcf7] px-9 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#fdffff] hover:text-[#071441]"
          >
            Записатись на консультацію
          </a>

          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-full border border-[#fdffff]/40 px-9 py-4 text-sm font-black uppercase tracking-[0.1em] text-[#fdffff] transition hover:border-[#fdffff] hover:bg-[#fdffff] hover:text-[#071441]"
          >
            Про мене
          </a>
        </div>
      </div>
    </motion.div>
  );
}
