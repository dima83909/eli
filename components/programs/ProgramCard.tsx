type Props = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export default function ProgramCard({
  index,
  title,
  subtitle,
  description,
  features,
  cta,
  highlighted,
}: Props) {
  return (
    <article
      className={`group relative flex min-h-[520px] flex-col overflow-hidden border border-white/18 p-7 transition duration-300 hover:border-[#F5B8CC] hover:bg-[#F5B8CC] sm:p-9 ${
        highlighted ? "bg-white/[0.06]" : "bg-transparent"
      }`}
    >
      <span className="pointer-events-none absolute -right-3 top-1 font-serif text-[11rem] font-black leading-none text-white/[0.055] transition group-hover:text-white/12">
        {index}
      </span>

      <span className="relative z-10 mb-6 text-xs font-black uppercase tracking-[0.22em] text-[#F5B8CC] transition group-hover:text-white/70">
        {subtitle}
      </span>

      <h3 className="relative z-10 mb-6 font-serif text-4xl font-black leading-[0.95] text-white sm:text-5xl">
        {title}
      </h3>

      <p className="relative z-10 mb-8 leading-relaxed text-white/72 transition group-hover:text-white">
        {description}
      </p>

      <ul className="relative z-10 mb-10 space-y-3 text-sm text-white/68 transition group-hover:text-white/86">
        {features.map((feature, index) => (
          <li key={index} className="border-t border-white/14 pt-3">
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        className="relative z-10 mt-auto inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.1em] text-[#F5B8CC] transition group-hover:text-white"
      >
        {cta}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}
