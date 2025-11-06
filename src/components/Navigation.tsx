interface NavigationProps {
  activeSection: string;
  scrollToSection: (section: string) => void;
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full flex items-center justify-center">
              <span className="text-white text-xl">🌸</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Путь через утрату
            </h1>
          </div>
          <div className="hidden md:flex gap-6">
            {['home', 'education', 'diary', 'psychologists', 'shop', 'subscription'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${
                  activeSection === section ? 'text-purple-400' : 'text-gray-600'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'education' && 'Образование'}
                {section === 'diary' && 'Дневники'}
                {section === 'psychologists' && 'Психологи'}
                {section === 'shop' && 'Магазин'}
                {section === 'subscription' && 'Подписка'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
