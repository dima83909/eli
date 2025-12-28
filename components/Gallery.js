export default function Gallery() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12 flex-col md:flex-row gap-4">
          <h2 className="heading text-4xl font-bold">КЕЙСИ КЛІЄНТІВ</h2>
          <button className="btn bg-white text-blue-900 font-bold px-6 py-3 hover:bg-gray-100">
            ХОЧУ ТАК САМО   
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="aspect-square bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition">
              <span className="text-gray-400 text-sm">Фото {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
