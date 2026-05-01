"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "Кому підходять тренування?",
    answer:
      "Я працюю з жінками різного рівня підготовки — від початківців до тих, хто вже має досвід у тренуваннях.",
  },
  {
    question: "Чи можна тренуватись онлайн?",
    answer: "Так, я працюю як онлайн по всій Україні, так і офлайн у Камʼянці-Подільському.",
  },
  {
    question: "Чи потрібен досвід занять у залі?",
    answer: "Ні. Програма підбирається індивідуально, з урахуванням вашого рівня та самопочуття.",
  },
  {
    question: "Як проходить перша консультація?",
    answer:
      "Ми обговорюємо ваші цілі, досвід, спосіб життя та підбираємо оптимальний формат тренувань.",
  },
  {
    question: "Чи допомагаєте з харчуванням?",
    answer: "Так, я надаю рекомендації з харчування без жорстких дієт і заборон.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#071441] py-24 text-white md:py-32">
      <span className="pointer-events-none absolute -right-8 top-10 font-serif text-[28vw] font-black leading-none text-white/[0.045]">
        ?
      </span>

      <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 block text-xs font-black uppercase tracking-[0.22em] text-[#ffdcf7]">
            Питання та відповіді
          </span>
          <h2 className="font-serif text-[clamp(3.2rem,9vw,7.6rem)] font-black uppercase leading-[0.8] tracking-normal">
            F<span className="italic text-[#ffdcf7]">A</span>Q
          </h2>
        </motion.div>

        <div>
          {faqs.map((item, index) => (
            <FAQItem
              key={item.question}
              question={item.question}
              answer={item.answer}
              open={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
