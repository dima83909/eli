"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#about", label: "Про мене" },
  { href: "#programs", label: "Програми" },
  { href: "#testimonials", label: "Відгуки" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition duration-300 ${
        scrolled
          ? "bg-[#071441]/90 shadow-[0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 text-white sm:px-8 lg:px-12">
        <a
          href="#hero"
          className="font-serif text-xl font-black uppercase leading-none tracking-[0.04em] sm:text-2xl"
          aria-label="На початок сторінки"
        >
          Eli
          <span className="text-[#F5B8CC]">.</span>
        </a>

        <nav aria-label="Головна навігація" className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-black uppercase tracking-[0.1em] text-white/78 transition hover:text-[#F5B8CC]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-[#F5B8CC] px-5 py-3 text-xs font-black uppercase tracking-[0.1em] text-white transition hover:bg-white hover:text-[#071441] sm:px-7"
        >
          Записатись
        </a>
      </div>
    </header>
  );
}
