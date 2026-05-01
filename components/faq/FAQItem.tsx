"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
};

export default function FAQItem({ question, answer, open, onToggle }: Props) {
  return (
    <div className="border-t border-white/18 last:border-b">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-6 py-7 text-left"
      >
        <span className="font-serif text-3xl font-black leading-tight text-white sm:text-4xl">
          {question}
        </span>
        <span className="shrink-0 text-4xl font-light leading-none text-[#F5B8CC]">
          {open ? "−" : "+"}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-8 text-base leading-relaxed text-white/68 sm:text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
