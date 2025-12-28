export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-yellow-100 via-amber-50 to-white py-20 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="mb-8 inline-block bg-white px-6 py-3 rounded text-xs font-bold text-black shadow-sm">
              50% ЗНИЖКА — Обмежена пропозиція
            </div>
            <h1 className="heading text-6xl md:text-7xl font-bold mb-6 text-black leading-tight">
              ФОРМУЛА<br/>— НАКАЧАНА<br/>ЖОПА
            </h1>
            <p className="text-gray-700 mb-10 max-w-lg text-lg leading-relaxed">
              14-денний інтенсив: робота з глибокими мʼязами, диханням і відновленням — прості дії, помітний результат.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn btn-primary px-8 py-4 text-base font-bold">
                ПОЧАТИ ЗАРАЗ
              </button>
              <button className="btn btn-secondary px-8 py-4 text-base font-bold">
                ДІЗНАТИСЯ БІЛЬШЕ
              </button>
            </div>
          </div>
          <div className="relative h-96 md:h-full min-h-96">
            <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-500 rounded-lg shadow-2xl flex items-center justify-center text-gray-300 text-lg">
              [Фітнес-модель фото]
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
