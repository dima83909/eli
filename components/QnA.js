export default function Faq() {
  const faqs = [
    {
      q: "Як швидко я помічу результати?",
      a: "Більшість учасників помічають зменшення здуття протягом 3-5 днів. Видимі результати з'являються через 1-2 тижні."
    },
    {
      q: "Це буде ефективно, якщо я вже тренуюся?",
      a: "Так! Наш метод сфокусований на роботі з глибокими мʼязами, які часто упускаються в звичайних тренуваннях."
    },
    {
      q: "Можна буде їсти звичайну їжу?",
      a: "Да, ніяких дієт! Ми не обмежуємо їжу, а навчаємо правильно працювати з глибокими мʼязами."
    },
    {
      q: "Як довго триватиме інтенсив?",
      a: "14 днів. Кожна тренування займає 15-20 хвилин. Можна займатися в будь-яких час та в будь-якому місці."
    },
    {
      q: "Які результати я отримаю?",
      a: "Плаский живіт, отримання впевненості, покращення постури, зменшення здуття та болю у спині."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="heading text-4xl font-bold mb-16 text-center text-black">ЧАСТО ЗАДАВАЛЬНІСТЬ ІНТЕНСИВУ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="border-b border-gray-200 py-4 cursor-pointer group">
              <summary className="font-bold text-lg text-black flex justify-between items-center py-2">
                <span className="text-left">{faq.q}</span>
                <span className="text-blue-900 text-2xl group-open:rotate-180 transition ml-4 flex-shrink-0">+</span>
              </summary>
              <p className="text-gray-600 text-base mt-4 pb-2 leading-relaxed">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

