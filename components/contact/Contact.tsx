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
            Get started
          </span>

          <h2 className="mb-6 text-3xl font-light sm:text-4xl">
            Ready to start your journey?
          </h2>

          <p className="mx-auto mb-12 max-w-xl text-white/70 leading-relaxed">
            Book a free consultation and let’s talk about your goals, lifestyle,
            and the best way to move forward together.
          </p>

          {/* Buttons */}
          <div className="mb-16 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#"
              className="border border-white px-10 py-3 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              Free consultation
            </a>

            <a
              href="#"
              className="border border-white/40 px-10 py-3 text-sm uppercase tracking-widest text-white/80 transition hover:border-white hover:text-white"
            >
              Instagram
            </a>
          </div>

          {/* Minimal form */}
          <form className="mx-auto grid max-w-md gap-6 text-left">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-white/40 bg-transparent pb-2 text-sm outline-none placeholder:text-white/40 focus:border-white"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full border-b border-white/40 bg-transparent pb-2 text-sm outline-none placeholder:text-white/40 focus:border-white"
            />
            <textarea
              placeholder="Your message"
              rows={3}
              className="w-full resize-none border-b border-white/40 bg-transparent pb-2 text-sm outline-none placeholder:text-white/40 focus:border-white"
            />

            <button
              type="submit"
              className="mt-6 border border-white px-8 py-3 text-sm uppercase tracking-widest transition hover:bg-white hover:text-black"
            >
              Send message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
