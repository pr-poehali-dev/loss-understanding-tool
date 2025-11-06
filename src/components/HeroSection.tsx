import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (section: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="home" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Вы не одни в этом пути
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Мы помогаем разобраться с тем, что происходит в процессе переживания утраты, 
            чтобы вы чувствовали спокойствие и понимание
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => scrollToSection('education')}
              className="bg-gradient-to-r from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400 text-white rounded-full px-8 shadow-lg"
            >
              Начать путь
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('psychologists')}
              className="rounded-full px-8 border-2 border-purple-200 text-purple-400 hover:bg-purple-50"
            >
              Найти психолога
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-scale-in">
          {[
            { icon: 'BookOpen', title: 'Образование', desc: 'Понимание этапов горя' },
            { icon: 'Heart', title: 'Дневники', desc: 'Отслеживание эмоций' },
            { icon: 'Users', title: 'Поддержка', desc: 'Проверенные специалисты' }
          ].map((item, idx) => (
            <Card key={idx} className="border-purple-100 shadow-lg hover:shadow-xl transition-all rounded-3xl bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center mb-4">
                  <Icon name={item.icon} className="text-purple-400" size={28} />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription className="text-base">{item.desc}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
