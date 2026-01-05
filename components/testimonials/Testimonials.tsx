// components/testimonials/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Анна",
    result: "Онлайн супровід",
    text: "Я вперше відчула, що тренування можуть бути підтримкою, а не покаранням.",
  },
  {
    name: "Марія",
    result: "Індивідуальні тренування",
    text: "Тренування легко вписались у мій ритм життя, без стресу.",
  },
  {
    name: "Олена",
    result: "Онлайн формат",
    text: "Навіть онлайн я постійно відчувала підтримку та зворотний звʼязок.",
  },
  {
    name: "Ірина",
    result: "Онлайн супровід",
    text: "Зʼявилась стабільність і впевненість у собі без виснаження.",
  },
  {
    name: "Катерина",
    result: "Комплексна програма",
    text: "Без жорстких дієт і крайнощів. Все дуже спокійно і зрозуміло.",
  },
  {
    name: "Юлія",
    result: "Онлайн формат",
    text: "Регулярність стала легкою, без тиску і зривів.",
  },
  {
    name: "Наталія",
    result: "Індивідуальні тренування",
    text: "Програма підлаштовувалась під моє життя, а не навпаки.",
  },
  {
    name: "Вікторія",
    result: "Онлайн супровід",
    text: "Тренування перестали бути стресом, зʼявилось задоволення.",
  },
  {
    name: "Аліна",
    result: "Онлайн формат",
    text: "Постійна підтримка дала відчуття впевненості.",
  },
  {
    name: "Оксана",
    result: "Комплексна програма",
    text: "Я змогла втримати регулярність без вигорання.",
  },
];

// подвоюємо для безшовного loop
const loopedTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-neutral-100 py-20 md:py-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 mb-16">
        <span className="mb-4 block text-sm uppercase tracking-widest text-gray-400">
          Відгуки
        </span>
        <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
          Досвід жінок, які тренуються зі мною
        </h2>
      </div>

      {/* Horizontal strip */}
      <div className="relative">
        <motion.div
          className="flex gap-8"
          animate={{ x: ["15%", "-50%"] }}
          transition={{
            duration: 20, // дуже повільно = premium
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopedTestimonials.map((item, index) => (
            <div key={index} className="min-w-[300px] min-h-[200px]">
              <TestimonialCard
                name={item.name}
                result={item.result}
                text={item.text}
              />
            </div>
          ))}
        </motion.div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  );
}
