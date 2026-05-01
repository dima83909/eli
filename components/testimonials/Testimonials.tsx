"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, [paused]);

  const visible = [
    testimonials[active],
    testimonials[(active + 1) % testimonials.length],
    testimonials[(active + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#fdffff] py-24 text-[#071441] md:py-32"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="pointer-events-none absolute left-4 top-4 font-serif text-[28vw] font-black leading-none text-[#F5B8CC]/12 md:left-10 md:text-[18vw]">
        “
      </span>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <motion.div
          className="relative z-10 mb-12 max-w-5xl"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 block text-xs font-black uppercase tracking-[0.22em] text-[#F5B8CC]">
            Відгуки
          </span>
          <h2 className="font-serif text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[0.86] tracking-normal">
            Досвід жінок,
            <br />
            <span className="italic text-[#F5B8CC]">які тренуються зі мною</span>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid gap-5 md:grid-cols-3"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            {visible.map((item, index) => (
              <TestimonialCard
                key={`${item?.name}-${active}-${index}`}
                name={item?.name ?? ""}
                result={item?.result ?? ""}
                text={item?.text ?? ""}
                active={index === 0}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex justify-center gap-3">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Показати відгук ${index + 1}`}
              onClick={() => setActive(index)}
              className={`h-3 rounded-full transition ${
                active === index ? "w-10 bg-[#F5B8CC]" : "w-3 bg-[#071441]/22 hover:bg-[#071441]/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
