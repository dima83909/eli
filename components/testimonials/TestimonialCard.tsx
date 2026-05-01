type Props = {
  name: string;
  result: string;
  text: string;
  active?: boolean;
};

export default function TestimonialCard({ name, result, text, active }: Props) {
  return (
    <article
      className={`flex min-h-[340px] flex-col justify-between border border-[#071441]/18 p-7 transition duration-300 sm:p-9 ${
        active ? "bg-[#071441] text-white" : "bg-transparent text-[#071441]"
      }`}
    >
      <p
        className={`font-serif text-3xl font-black leading-[1.05] sm:text-4xl ${
          active ? "text-white" : "text-[#071441]"
        }`}
      >
        “{text}”
      </p>

      <div className={`mt-10 border-t pt-5 ${active ? "border-white/22" : "border-[#071441]/20"}`}>
        <p className="text-sm font-black uppercase tracking-[0.14em]">{name}</p>
        <p
          className={`mt-2 text-xs uppercase tracking-[0.16em] ${
            active ? "text-white/62" : "text-[#071441]/55"
          }`}
        >
          {result}
        </p>
      </div>
    </article>
  );
}
