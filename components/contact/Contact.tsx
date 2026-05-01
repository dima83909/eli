import FadeIn from "@/components/motion/FadeIn";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#071441] py-24 text-white sm:py-32"
    >
      <div className="grain-overlay opacity-35" />
      <span className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[38vw] font-black leading-none text-white/[0.035]">
        C
      </span>

      <FadeIn className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-8">
        <span className="mb-6 block text-xs font-black uppercase tracking-[0.22em] text-[#ffdcf7]">
          Контакти
        </span>

        <h2 className="mb-7 font-serif text-[clamp(4rem,12vw,10rem)] font-black italic leading-[0.82] tracking-normal text-[#fdffff]">
          Готова почати?
        </h2>

        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-white/72 sm:text-lg">
          Напишіть мені в Instagram — ми обговоримо ваші цілі, формат тренувань та підберемо зручний
          варіант співпраці.
        </p>

        <a
          href="https://www.instagram.com/eli.danylenko"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написати тренеру в Instagram"
          className="inline-flex rounded-full bg-[#ffdcf7] px-10 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#fdffff] hover:text-[#071441]"
        >
          Написати в Instagram
        </a>
      </FadeIn>
    </section>
  );
}
