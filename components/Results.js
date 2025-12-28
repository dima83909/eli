export default function Results() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="heading text-4xl font-bold mb-16 text-center text-black">МОЇ СИСТЕМА — ЦЕ ЙОГО ТРЬОХЕТАПНА КОМПЛЕКС</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">ЕТАП 1: Активація</h3>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              Навчаємо твоє тіло працювати з глибокими мʼязами, включаємо правильне дихання
            </p>
            <div className="aspect-video bg-gray-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-600">Відео/Зображення</span>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 text-black">ЕТАП 2: Укріплення</h3>
            <p className="text-gray-700 mb-6 text-base leading-relaxed">
              Будуємо силу та витривалість глибоких мʼязів живота
            </p>
            <div className="aspect-video bg-gray-400 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-gray-600">Відео/Зображення</span>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 text-white p-12 rounded-lg shadow-lg">
          <h3 className="font-bold text-2xl mb-6">ЕТАП 3: Закріплення</h3>
          <p className="text-base leading-relaxed text-blue-100">
            Закріпляємо результат через розуміння синтезу мʼязів і правильного дихання. Після цього етапу твій живіт буде пласким всередину і це стане стійким результатом на довгий час.
          </p>
        </div>
      </div>
    </section>
  )
}
