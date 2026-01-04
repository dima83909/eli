// components/programs/ProgramCard.tsx
type Props = {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export default function ProgramCard({
  title,
  subtitle,
  description,
  features,
  cta,
  highlighted,
}: Props) {
  return (
    <div
      className={`flex h-full flex-col border p-10 transition
        ${highlighted ? "border-black" : "border-gray-200"}
      `}
    >
      <span className="mb-2 text-xs uppercase tracking-widest text-gray-500">
        {subtitle}
      </span>

      <h3 className="mb-4 text-xl font-light text-gray-900">
        {title}
      </h3>

      <p className="mb-6 text-gray-600 leading-relaxed">
        {description}
      </p>

      <ul className="mb-10 space-y-2 text-sm text-gray-700">
        {features.map((feature, index) => (
          <li key={index}>• {feature}</li>
        ))}
      </ul>

      <button
        className={`mt-auto border px-6 py-3 text-sm uppercase tracking-widest transition
          ${
            highlighted
              ? "border-black bg-black text-white hover:bg-black/90"
              : "border-black hover:bg-black hover:text-white"
          }
        `}
      >
        {cta}
      </button>
    </div>
  );
}
