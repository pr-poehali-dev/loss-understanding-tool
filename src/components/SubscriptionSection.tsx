import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const SubscriptionSection = () => {
  return (
    <section id="subscription" className="py-20 px-6 bg-white/60">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-purple-400">Подписка Premium</h2>
          <p className="text-gray-600 text-lg">Расширенные возможности поддержки</p>
        </div>

        <Card className="border-purple-100 rounded-3xl shadow-xl bg-gradient-to-br from-white to-purple-50">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-3xl mb-2">Premium доступ</CardTitle>
            <div className="text-5xl font-bold text-purple-400 my-4">990 ₽/мес</div>
            <CardDescription className="text-base">Первый месяц со скидкой 50%</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: 'Percent',
                  title: 'Скидка на консультации',
                  desc: 'Скидка на первые 3 консультации с психологами-партнёрами'
                },
                {
                  icon: 'Map',
                  title: 'Карта мест',
                  desc: 'Интерактивные списки мест в вашем городе: кафе, парки, пространства для спокойствия'
                },
                {
                  icon: 'Share2',
                  title: 'Поделиться записями',
                  desc: 'Возможность делиться записями с близкими людьми'
                },
                {
                  icon: 'LineChart',
                  title: 'Виджеты состояния',
                  desc: 'Отслеживание динамики вашего эмоционального состояния с графиками'
                },
                {
                  icon: 'Bell',
                  title: 'Мягкие напоминания',
                  desc: 'Ежедневные уведомления о заполнении дневников на почту'
                },
                {
                  icon: 'Unlock',
                  title: 'Полный доступ',
                  desc: 'Все материалы образовательного раздела без ограничений'
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon name={feature.icon} size={24} className="text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-8 bg-gradient-to-r from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400 rounded-full py-6 text-lg">
              Оформить подписку
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default SubscriptionSection;
