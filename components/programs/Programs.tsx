// components/programs/Programs.tsx
"use client";

import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-gray-400">
            Програми
          </span>
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Формат тренувань під ваші цілі
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          <ProgramCard
            title="Онлайн супровід"
            subtitle="Зручний формат"
            description="Індивідуальна програма тренувань та рекомендації з харчування з постійним зворотним звʼязком."
            features={[
              "Персональний план тренувань",
              "Рекомендації з харчування",
              "Регулярний контроль",
              "Підтримка онлайн",
            ]}
            cta="Дізнатись деталі"
          />

          <ProgramCard
            title="Офлайн тренування"
            subtitle="Індивідуально"
            description="Персональні заняття у залі з фокусом на техніку, силу та безпечне навантаження."
            features={[
              "Індивідуальні заняття",
              "Контроль техніки",
              "Підтримка та мотивація",
              "Камʼянець-Подільський",
            ]}
            cta="Записатись"
            highlighted
          />

          <ProgramCard
            title="Комплексна трансформація"
            subtitle="8–12 тижнів"
            description="Поступова робота з тілом та звичками для стабільного та довготривалого результату."
            features={[
              "Чітка структура",
              "Відстеження прогресу",
              "Формування звичок",
              "Повний супровід",
            ]}
            cta="Почати програму"
          />
        </div>
      </div>
    </section>
  );
}
