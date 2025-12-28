export default function Intro() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="heading text-4xl font-bold mb-6 text-center text-black">ЦЕЙ ІНТЕНСИВ СТВОРЕНИЙ ДЛЯ ТЕБЕ, ЯКЩО...</h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-2xl mx-auto">Розпізнай себе в одній з цих ситуацій</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-4">Ти вже пробувала дієти</h3>
            <p className="text-blue-100 leading-relaxed">Але результат не утримався, і живіт повернувся як було раніше</p>
          </div>
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-4">Здуття внизу живота</h3>
            <p className="text-blue-100 leading-relaxed">Особливо до вечора через слабкі глибокі мʼязи</p>
          </div>
          <div className="bg-blue-900 text-white p-8 rounded-lg shadow-lg hover:shadow-xl transition">
            <h3 className="font-bold text-lg mb-4">Хочеш результату</h3>
            <p className="text-blue-100 leading-relaxed">Без жорстких обмежень і виснажливих тренувань</p>
          </div>
        </div>
      </div>
    </section>
  )
}
