export default function Numbers() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="heading text-4xl font-bold mb-16 text-center">РЕЗУЛЬТАТ, ЯКИЙ ТИ ОТРИМАЄШ:</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-16">
          <div>
            <div className="text-7xl font-bold mb-4">14</div>
            <p className="text-blue-100 text-lg">днів інтенсиву</p>
          </div>
          <div>
            <div className="text-7xl font-bold mb-4">1500+</div>
            <p className="text-blue-100 text-lg">задоволених учасників</p>
          </div>
          <div>
            <div className="text-7xl font-bold mb-4">100%</div>
            <p className="text-blue-100 text-lg">гарантія результату</p>
          </div>
        </div>
        <div className="text-center">
          <button className="btn bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-10 py-4 shadow-lg">
            ВКЛЮЧАТИСЬ ІНТЕНСИВ ЗАРАЗ
          </button>
        </div>
      </div>
    </section>
  )
}
