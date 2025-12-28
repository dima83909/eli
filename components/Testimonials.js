export default function Testimonials() {
  const testimonials = [
    {
      name: 'Анна К.',
      text: 'Нарешті відчула роботу глибоких мʼязів. Живіт став спокійнішим уже через 3 дні.',
      image: 'placeholder'
    },
    {
      name: 'Ольга М.',
      text: 'Це найкращий інтенсив, який я коли-небудь робила. Результати видно одразу!',
      image: 'placeholder'
    },
    {
      name: 'Катерина Д.',
      text: 'Я не розумілася, як це можна отримати результат без дієт. Але це працює!',
      image: 'placeholder'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="heading text-3xl font-bold mb-12 text-center">УСПІХИ РЕЗУЛЬТАТІВ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
              <h3 className="font-semibold mb-2">{testimonial.name}</h3>
              <p className="text-gray-600 text-sm italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
