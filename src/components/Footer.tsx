interface FooterProps {
  scrollToSection: (section: string) => void;
}

const Footer = ({ scrollToSection }: FooterProps) => {
  return (
    <footer className="py-12 px-6 bg-gradient-to-r from-purple-100 to-blue-100">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full flex items-center justify-center">
                <span className="text-white text-lg">🌸</span>
              </div>
              <h3 className="font-bold text-purple-400">Путь через утрату</h3>
            </div>
            <p className="text-sm text-gray-600">Поддержка на каждом этапе</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Разделы</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <button onClick={() => scrollToSection('education')} className="block hover:text-purple-400">Образование</button>
              <button onClick={() => scrollToSection('diary')} className="block hover:text-purple-400">Дневники</button>
              <button onClick={() => scrollToSection('psychologists')} className="block hover:text-purple-400">Психологи</button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Продукты</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <button onClick={() => scrollToSection('shop')} className="block hover:text-purple-400">Магазин</button>
              <button onClick={() => scrollToSection('subscription')} className="block hover:text-purple-400">Подписка</button>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-gray-800">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>help@puterez.ru</p>
              <p>+7 (999) 123-45-67</p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-200 text-center text-sm text-gray-600">
          © 2024 Путь через утрату. Все права защищены.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
