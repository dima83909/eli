// components/testimonials/Testimonials.tsx
"use client";

import { motion } from "framer-motion";
import TestimonialCard from './TestimonialCard';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-neutral-100 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-gray-500">
            Testimonials
          </span>
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Real women. Real results.
          </h2>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-3">
          <TestimonialCard
            name="Anna"
            result="Lost 8 kg in 4 months"
            text="I finally stopped hating workouts. Everything was clear, supportive, and sustainable."
          />
          <TestimonialCard
            name="Maria"
            result="Stronger & more confident"
            text="This was the first time training felt empowering instead of exhausting."
          />
          <TestimonialCard
            name="Elena"
            result="Online coaching success"
            text="Even online, I felt fully supported and motivated every step of the way."
          />
        </div>
      </div>
    </section>
  );
}
