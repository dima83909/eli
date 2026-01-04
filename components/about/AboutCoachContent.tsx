// components/about/AboutCoachContent.tsx
"use client";

import { motion } from "framer-motion";
import { scrollToSection } from "@/components/useSmoothScroll";

export default function AboutCoachContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
    >
      {/* Eyebrow */}
      <span className="mb-4 block text-sm uppercase tracking-widest text-gray-500">
        Про мене
      </span>

      {/* Heading */}
      <h2 className="mb-6 text-3xl font-light text-gray-900 sm:text-4xl">
        Тренування, які підлаштовуються під ваше життя
      </h2>

      {/* Text */}
      <p className="mb-6 leading-relaxed text-gray-600">
        Я — персональний тренер і працюю з жінками різного рівня підготовки:
        від початківців до тих, хто вже має досвід у тренуваннях.
      </p>

      <p className="mb-6 leading-relaxed text-gray-600">
        Проводжу <strong>офлайн тренування у Камʼянці-Подільському</strong>,
        а також працюю <strong>онлайн по всій Україні</strong>, підбираючи
        програму з урахуванням вашого ритму життя, цілей та самопочуття.
      </p>

      <p className="mb-10 leading-relaxed text-gray-600">
        Мій підхід — це регулярність, безпека та довгостроковий результат.
        Без жорстких дієт, заборон і постійного тиску на себе.
      </p>

      {/* List */}
      <ul className="mb-10 space-y-3 text-sm text-gray-700">
        <li>• Індивідуальний підхід до кожної клієнтки</li>
        <li>• Онлайн та офлайн формат тренувань</li>
        <li>• Фокус на здоровʼя, силу та впевненість</li>
      </ul>

      {/* CTA */}
      <button
        onClick={() => scrollToSection("contact")}
        className="border border-black px-8 py-3 text-sm uppercase tracking-widest transition hover:bg-black hover:text-white"
      >
        Почати співпрацю
      </button>
    </motion.div>
  );
}
