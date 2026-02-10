// components/faq/FAQItem.tsx

type Props = {
  question: string;
  answer: string;
};

export default function FAQItem({ question, answer }: Props) {
  return (
    <details className="faq-item rounded-lg border border-gray-200 bg-white shadow-sm">
      <summary className="flex w-full list-none items-center justify-between px-6 py-4 text-left">
        <span className="text-base font-medium text-gray-900">
          {question}
        </span>
        <span className="faq-icon ml-4 text-xl text-gray-400" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="faq-panel px-6 pb-5 text-sm leading-relaxed text-gray-600">
        {answer}
      </div>
    </details>
  );
}
