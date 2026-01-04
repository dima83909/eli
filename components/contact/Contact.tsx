// components/contact/Contact.tsx
"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-black py-28 text-white">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-white/60">
            Контакти
          </span>

          <h2 className="mb-6 text-3xl font-light sm:text-4xl">
            Готові почати?
          </h2>

          <p className="mx-auto mb-14 max-w-xl text-white/70 leading-relaxed">
            Напишіть мені в Instagram — ми обговоримо ваші цілі,
            формат тренувань та підберемо зручний варіант співпраці.
          </p>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/eli.danylenko"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Написати тренеру в Instagram"
            className="inline-block border border-white px-12 py-4 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
          >
            Написати в Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
