import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const ShopSection = () => {
  return (
    <section id="shop" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-purple-400">Физический набор</h2>
          <p className="text-gray-600 text-lg">Инструменты для работы с переживаниями</p>
        </div>

        <Card className="border-purple-100 rounded-3xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-br from-purple-200 via-blue-200 to-purple-100 p-12 flex items-center justify-center">
              <div className="text-center">
                <Icon name="Package" size={120} className="text-white mx-auto mb-4" />
                <p className="text-white text-xl font-medium">Комплексный набор для поддержки</p>
              </div>
            </div>
            <div className="md:w-1/2 p-8">
              <CardHeader>
                <CardTitle className="text-3xl mb-4">Набор "Путь к себе"</CardTitle>
                <div className="text-4xl font-bold text-purple-400 mb-4">1 500 ₽</div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  {[
                    { icon: 'Layers', text: 'Карточки с картинками и вопросами для рефлексии' },
                    { icon: 'Watch', text: 'Браслет-якорь для возвращения в настоящий момент' },
                    { icon: 'Pen', text: 'Ручка с исчезающими чернилами' },
                    { icon: 'BookOpen', text: 'Блокнот для практик отпускания' },
                    { icon: 'Video', text: 'Доступ к эксклюзивным видео-инструкциям' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon name={item.icon} size={16} className="text-purple-400" />
                      </div>
                      <p className="text-gray-700">{item.text}</p>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-gradient-to-r from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400 rounded-full py-6 text-lg">
                  Заказать набор
                </Button>
                <p className="text-sm text-gray-500 text-center">Доставка по всей России</p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ShopSection;