export default function AboutCoachContent() {
  const stats = [
    { value: "100+", label: "клієнток" },
    { value: "3+", label: "роки досвіду" },
    { value: "Онлайн", label: "та офлайн" },
  ];

  return (
    <div className="relative">
      <span className="mb-5 block text-xs font-black uppercase tracking-[0.22em] text-[#ffdcf7]">
        Про мене
      </span>

      <h2 className="mb-8 max-w-3xl font-serif text-[clamp(3rem,7vw,6.8rem)] font-black uppercase leading-[0.86] tracking-normal">
        Тренування,
        <br />
        які підлашто
        <span className="italic text-[#ffdcf7]">вуються</span>
        <br />
        під ваше життя
      </h2>

      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-[#071441]/78 sm:text-lg">
        <p>
          Я — персональний тренер і працюю з жінками різного рівня підготовки: від початківців до
          тих, хто вже має досвід у тренуваннях.
        </p>

        <p>
          Проводжу <strong>офлайн тренування у Камʼянці-Подільському</strong>, а також працюю{" "}
          <strong>онлайн по всій Україні</strong>, підбираючи програму з урахуванням вашого ритму
          життя, цілей та самопочуття.
        </p>

        <p>
          Мій підхід — це регулярність, безпека та довгостроковий результат. Без жорстких дієт,
          заборон і постійного тиску на себе.
        </p>
      </div>

      <ul className="mt-8 grid gap-3 text-sm font-bold uppercase tracking-[0.08em] text-[#071441] sm:grid-cols-3">
        <li className="border-t border-[#071441]/25 pt-4">
          Індивідуальний підхід до кожної клієнтки
        </li>
        <li className="border-t border-[#071441]/25 pt-4">Онлайн та офлайн формат тренувань</li>
        <li className="border-t border-[#071441]/25 pt-4">
          Фокус на здоровʼя, силу та впевненість
        </li>
      </ul>

      <div className="mt-10 grid border-y border-[#071441] sm:grid-cols-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="border-[#071441]/30 py-6 sm:border-r sm:px-6 last:sm:border-r-0"
          >
            <div className="font-serif text-5xl font-black italic leading-none text-[#ffdcf7]">
              {stat.value}
            </div>
            <div className="mt-2 text-xs font-black uppercase tracking-[0.18em]">{stat.label}</div>
          </div>
        ))}
      </div>

      <a
        href="#contact"
        className="mt-10 inline-flex rounded-full bg-[#071441] px-8 py-4 text-sm font-black uppercase tracking-[0.1em] text-white transition hover:bg-[#ffdcf7]"
      >
        Почати співпрацю
      </a>
    </div>
  );
}
