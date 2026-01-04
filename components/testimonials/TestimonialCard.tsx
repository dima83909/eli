// components/testimonials/TestimonialCard.tsx
type Props = {
  name: string;
  result: string;
  text: string;
};

export default function TestimonialCard({ name, result, text }: Props) {
  return (
    <div className="bg-white p-8 shadow-sm">
      <p className="mb-6 text-gray-600 leading-relaxed">“{text}”</p>

      <div className="border-t pt-4">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs uppercase tracking-widest text-gray-500">
          {result}
        </p>
      </div>
    </div>
  );
}
