// components/footer/Footer.tsx
"use client";

import { scrollToSection } from "@/components/useSmoothScroll";
import { FaInstagram, FaTelegramPlane, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-lg font-light">
              Персональні тренування
            </p>
            <p className="mt-2 text-sm text-white/60">
              Онлайн та офлайн · Камʼянець-Подільський
            </p>
          </div>

          {/* Navigation */}
          <nav
            role="navigation"
            aria-label="Footer navigation"
            className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest text-white/70"
          >
            <button onClick={() => scrollToSection("hero")} className="transition hover:text-white">
              Головна
            </button>
            <button onClick={() => scrollToSection("about")} className="transition hover:text-white">
              Про мене
            </button>
            <button onClick={() => scrollToSection("programs")} className="transition hover:text-white">
              Програми
            </button>
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/eli.danylenko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/60 transition hover:text-white"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@eli.danylenko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/60 transition hover:text-white"
            >
              <FaTiktok size={20} />
            </a>

            <a
              href="https://t.me/lisdanile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-white/60 transition hover:text-white"
            >
              <FaTelegramPlane size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/20" />

        {/* Legal */}
        <p className="mx-auto max-w-3xl text-center text-xs leading-relaxed text-white/50">
          © {new Date().getFullYear()} Персональний тренер.  
          Інформація на сайті має ознайомчий характер та не є медичною рекомендацією.  
          Результати індивідуальні та залежать від регулярності, способу життя
          та особистих особливостей.
        </p>
      </div>
    </footer>
  );
}
