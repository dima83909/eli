export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading text-5xl font-bold mb-8 text-black">ПРИВІТ,<br/>МЕНЕ ЗВАТИ<br/>САША</h2>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              Я тренер і коуч з фітнесу, сертифікована з роботи з постурою та глибокими мʼязами живота.
            </p>
            <p className="text-gray-600 mb-8 text-base leading-relaxed">
              Займаюся інтенсивним тренуванням вже 8 років. За цей час я допомогла більш ніж 1500 жінкам отримати плаский живіт і впевненість у собі.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-base"><span className="text-blue-900 mr-3 font-bold text-lg">✓</span> Сертифікований тренер</p>
              <p className="flex items-center text-base"><span className="text-blue-900 mr-3 font-bold text-lg">✓</span> 8+ років досвіду</p>
              <p className="flex items-center text-base"><span className="text-blue-900 mr-3 font-bold text-lg">✓</span> 1500+ задоволених клієнтів</p>
            </div>
          </div>
          <div className="aspect-square bg-gray-300 rounded-lg flex items-center justify-center shadow-lg">
            <span className="text-gray-500 text-lg">Фото Саші</span>
          </div>
        </div>
      </div>
    </section>
  )
}
