export default function Footer(){
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="heading text-lg mb-4">ELI</h3>
            <p className="text-gray-400 text-sm">14-денний інтенсив для плоського живота</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">МЕНЮ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Інтенсив</a></li>
              <li><a href="#" className="hover:text-white">Про мене</a></li>
              <li><a href="#" className="hover:text-white">Отзиви</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">КОНТАКТИ</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:info@noeaterprotein.com" className="hover:text-white">eli@gmail.com</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
          <div className="text-right">
            <a href="#" className="text-sm text-gray-400 hover:text-white">site by<br/>ltvyniuk</a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2025 ELI. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  )
}
