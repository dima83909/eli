// components/footer/Footer.tsx

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
            <a href="#hero" className="transition hover:text-white">
              Головна
            </a>
            <a href="#about" className="transition hover:text-white">
              Про мене
            </a>
            <a href="#programs" className="transition hover:text-white">
              Програми
            </a>
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
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm10 2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-5 3.5A3.5 3.5 0 1 1 8.5 12 3.5 3.5 0 0 1 12 8.5zm0 2A1.5 1.5 0 1 0 13.5 12 1.5 1.5 0 0 0 12 10.5zm4.25-2.75a.75.75 0 1 1-.75-.75.75.75 0 0 1 .75.75z" />
              </svg>
            </a>

            <a
              href="https://www.tiktok.com/@eli.danylenko"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="text-white/60 transition hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M15 3c.3 2.2 1.9 3.9 4 4.2V10c-1.7-.1-3.3-.7-4.6-1.8v5.8a6 6 0 1 1-5.2-5.9v3.1a2.9 2.9 0 1 0 2.2 2.8V3h3.6z" />
              </svg>
            </a>

            <a
              href="https://t.me/lisdanile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="text-white/60 transition hover:text-white"
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.7 4.3a1.5 1.5 0 0 0-1.6-.3L3.6 9.6a1.5 1.5 0 0 0 .1 2.8l4.2 1.3 1.6 4.9a1.5 1.5 0 0 0 2.4.7l2.4-2.3 4.6 3.4a1.5 1.5 0 0 0 2.4-.9l2.2-12.9a1.5 1.5 0 0 0-.8-1.6zM9.4 13.1l7.9-5-6.1 6.6-.2 3.2-1.4-4.3z" />
              </svg>
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
