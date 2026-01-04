"use client";

import { scrollToSection } from "@/components/useSmoothScroll";

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          
          <div>
            <p className="text-lg font-light">Personal Coaching</p>
            <p className="text-sm text-white/60">
              Online & Offline Training
            </p>
          </div>

          <nav className="flex gap-8 text-sm uppercase tracking-widest text-white/70">
            <button onClick={() => scrollToSection("hero")}>Main</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("programs")}>Programs</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          <div className="flex gap-6 text-sm uppercase tracking-widest text-white/70">
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
