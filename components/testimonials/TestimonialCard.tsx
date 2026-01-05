// components/testimonials/TestimonialCard.tsx
type Props = {
  name: string;
  result: string;
  text: string;
};

export default function TestimonialCard({ name, result, text }: Props) {
  return (
    <div className="h-full bg-white p-8 shadow-sm flex flex-col">
      {/* Text */}
      <p className="mb-6 flex-1 text-gray-600 leading-relaxed">
        “{text}”
      </p>

      {/* Footer */}
      <div className="border-t pt-4">
        <p className="text-sm font-medium text-gray-900">{name}</p>
        <p className="text-xs uppercase tracking-widest text-gray-500">
          {result}
        </p>
      </div>
    </div>
  );
}
