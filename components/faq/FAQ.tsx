// components/faq/FAQ.tsx
"use client";

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
    answer:
      "Так, я працюю як онлайн по всій Україні, так і офлайн у Камʼянці-Подільському.",
  },
  {
    question: "Чи потрібен досвід занять у залі?",
    answer:
      "Ні. Програма підбирається індивідуально, з урахуванням вашого рівня та самопочуття.",
  },
  {
    question: "Як проходить перша консультація?",
    answer:
      "Ми обговорюємо ваші цілі, досвід, спосіб життя та підбираємо оптимальний формат тренувань.",
  },
  {
    question: "Чи допомагаєте з харчуванням?",
    answer:
      "Так, я надаю рекомендації з харчування без жорстких дієт і заборон.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-neutral-100 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 text-center"
        >
          <span className="block text-sm uppercase tracking-widest text-gray-500">
            Питання та відповіді
          </span>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
