// components/programs/Programs.tsx
"use client";

import { motion } from "framer-motion";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  return (
    <section id="programs" className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <span className="mb-4 block text-sm uppercase tracking-widest text-gray-500">
            Programs
          </span>
          <h2 className="text-3xl font-light text-gray-900 sm:text-4xl">
            Coaching designed around you
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          <ProgramCard
            title="Online Coaching"
            subtitle="Train from anywhere"
            description="Personalized workouts, nutrition guidance, and weekly check-ins — fully online."
            features={[
              "Custom training plan",
              "Nutrition guidance",
              "Weekly feedback",
              "Chat support",
            ]}
            cta="Start online"
          />

          <ProgramCard
            title="Offline Training"
            subtitle="1-on-1 sessions"
            description="Personal in-person training sessions focused on technique, strength, and confidence."
            features={[
              "Individual sessions",
              "Correct technique",
              "Personal motivation",
              "Flexible schedule",
            ]}
            cta="Book a session"
            highlighted
          />

          <ProgramCard
            title="Transformation Program"
            subtitle="12-week journey"
            description="A complete body & mindset transformation with full guidance and accountability."
            features={[
              "Structured 12-week plan",
              "Progress tracking",
              "Lifestyle habits",
              "Full support",
            ]}
            cta="Join program"
          />
        </div>
      </div>
    </section>
  );
}
