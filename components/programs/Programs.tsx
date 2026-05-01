import FadeIn from "@/components/motion/FadeIn";
import ProgramCard from "./ProgramCard";

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative overflow-hidden bg-[#071441] py-24 text-white md:py-32"
    >
      <span className="pointer-events-none absolute -left-10 top-8 font-serif text-[30vw] font-black leading-none text-white/[0.04]">
        P
      </span>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <FadeIn className="mb-14 max-w-5xl">
          <span className="mb-5 block text-xs font-black uppercase tracking-[0.22em] text-[#F5B8CC]">
            Програми
          </span>
          <h2 className="font-serif text-[clamp(3rem,8vw,7.4rem)] font-black uppercase leading-[0.86] tracking-normal">
            Формат тренувань
            <br />
            <span className="italic text-[#F5B8CC]">під ваші цілі</span>
          </h2>
        </FadeIn>

        <div className="grid gap-5 md:grid-cols-3">
          <ProgramCard
            index="01"
            title="Онлайн супровід"
            subtitle="Зручний формат"
            description="Індивідуальна програма тренувань та рекомендації з харчування з постійним зворотним звʼязком."
            features={[
              "Персональний план тренувань",
              "Рекомендації з харчування",
              "Регулярний контроль",
              "Підтримка онлайн",
            ]}
            cta="Дізнатись деталі"
          />

          <ProgramCard
            index="02"
            title="Офлайн тренування"
            subtitle="Індивідуально"
            description="Персональні заняття у залі з фокусом на техніку, силу та безпечне навантаження."
            features={[
              "Індивідуальні заняття",
              "Контроль техніки",
              "Підтримка та мотивація",
              "Камʼянець-Подільський",
            ]}
            cta="Записатись"
            highlighted
          />

          <ProgramCard
            index="03"
            title="Комплексна трансформація"
            subtitle="8–12 тижнів"
            description="Поступова робота з тілом та звичками для стабільного та довготривалого результату."
            features={[
              "Чітка структура",
              "Відстеження прогресу",
              "Формування звичок",
              "Повний супровід",
            ]}
            cta="Почати програму"
          />
        </div>
      </div>
    </section>
  );
}
