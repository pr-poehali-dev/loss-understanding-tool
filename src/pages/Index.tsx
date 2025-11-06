import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [diaryStreak, setDiaryStreak] = useState(3);
  const [emotionStreak, setEmotionStreak] = useState(5);
  const [dailyEntry, setDailyEntry] = useState('');

  const saveDiaryEntry = () => {
    if (dailyEntry.trim()) {
      setDiaryStreak(prev => prev + 1);
      setDailyEntry('');
      toast.success('Запись сохранена. Вы молодец! 🌸');
    }
  };

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-peach-50">
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

      <section id="education" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Образовательный раздел</h2>
            <p className="text-gray-600 text-lg">Материалы для понимания процесса переживания</p>
          </div>

          <Tabs defaultValue="stages" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 bg-purple-100 rounded-full p-1">
              <TabsTrigger value="stages" className="rounded-full">Этапы горя</TabsTrigger>
              <TabsTrigger value="cards" className="rounded-full">Работа с карточками</TabsTrigger>
              <TabsTrigger value="practices" className="rounded-full">Практики</TabsTrigger>
            </TabsList>

            <TabsContent value="stages" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { stage: 'Отрицание', desc: 'Первая реакция на потерю', color: 'from-purple-200 to-purple-300' },
                  { stage: 'Гнев', desc: 'Эмоциональный выплеск', color: 'from-blue-200 to-blue-300' },
                  { stage: 'Торг', desc: 'Попытка вернуть прошлое', color: 'from-purple-200 to-blue-200' },
                  { stage: 'Депрессия', desc: 'Глубокое переживание', color: 'from-blue-300 to-purple-300' },
                  { stage: 'Принятие', desc: 'Новая реальность', color: 'from-purple-300 to-blue-200' }
                ].map((item, idx) => (
                  <Card key={idx} className="border-purple-100 rounded-3xl overflow-hidden hover:shadow-lg transition-all">
                    <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                    <CardHeader>
                      <CardTitle className="text-xl">{item.stage}</CardTitle>
                      <CardDescription className="text-base">{item.desc}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="ghost" className="text-purple-400 hover:text-purple-500">
                        Смотреть видео <Icon name="Play" size={16} className="ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cards" className="mt-8">
              <Card className="border-purple-100 rounded-3xl">
                <CardHeader>
                  <CardTitle>Как работать с карточками</CardTitle>
                  <CardDescription>Видео-инструкции для владельцев физического набора</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center">
                    <Icon name="PlayCircle" size={64} className="text-purple-300" />
                  </div>
                  <p className="text-gray-600">
                    Подробные инструкции по использованию карточек с картинками и вопросами, 
                    браслета-якоря и ручки с исчезающими чернилами
                  </p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="practices" className="mt-8">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="space-y-4">
                  {[
                    'Дыхательные практики для возвращения в настоящий момент',
                    'Техника "якорь" с браслетом',
                    'Письмо как способ отпускания',
                    'Медитация принятия'
                  ].map((practice, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-purple-100 bg-white rounded-2xl px-6">
                      <AccordionTrigger className="text-lg hover:text-purple-400">
                        {practice}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        Подробное описание практики с пошаговыми инструкциями и рекомендациями 
                        по применению в повседневной жизни.
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="diary" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Интерактивные дневники</h2>
            <p className="text-gray-600 text-lg">Ведите регулярные записи и отслеживайте прогресс</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-purple-100 rounded-3xl shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-200 to-blue-200 rounded-full flex items-center justify-center">
                      <Icon name="BookHeart" className="text-purple-400" size={24} />
                    </div>
                    <div>
                      <CardTitle>Дневник размышлений</CardTitle>
                      <CardDescription>Ежедневные вопросы для рефлексии</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-purple-200 text-purple-600 hover:bg-purple-200">
                    🔥 {diaryStreak} дней
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-600">Сегодняшний вопрос:</label>
                  <p className="text-base font-medium text-gray-800 bg-purple-50 p-4 rounded-2xl">
                    Что помогло вам чувствовать себя спокойнее сегодня?
                  </p>
                </div>
                <Textarea
                  placeholder="Ваши мысли..."
                  className="min-h-32 rounded-2xl border-purple-200 focus:border-purple-300"
                  value={dailyEntry}
                  onChange={(e) => setDailyEntry(e.target.value)}
                />
                <Button
                  onClick={saveDiaryEntry}
                  className="w-full bg-gradient-to-r from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400 rounded-full"
                >
                  Сохранить запись
                </Button>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Прогресс недели</span>
                    <span>5/7 дней</span>
                  </div>
                  <Progress value={71} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-purple-100 rounded-3xl shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                      <Icon name="Smile" className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <CardTitle>Дневник эмоций</CardTitle>
                      <CardDescription>Отслеживание эмоционального состояния</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-blue-200 text-blue-600 hover:bg-blue-200">
                    🔥 {emotionStreak} дней
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">Как вы себя чувствуете сегодня?</p>
                <div className="grid grid-cols-5 gap-3">
                  {['😢', '😔', '😐', '🙂', '😊'].map((emoji, idx) => (
                    <button
                      key={idx}
                      className="aspect-square bg-gradient-to-br from-purple-50 to-blue-50 hover:from-purple-100 hover:to-blue-100 rounded-2xl flex items-center justify-center text-4xl transition-all hover:scale-110"
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-2xl">
                  <p className="text-sm font-medium text-gray-700 mb-2">График настроения за неделю</p>
                  <div className="h-24 flex items-end gap-2">
                    {[40, 55, 45, 70, 65, 80, 75].map((height, idx) => (
                      <div key={idx} className="flex-1 bg-gradient-to-t from-purple-300 to-blue-300 rounded-t-lg" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="psychologists" className="py-20 px-6 bg-white/60">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-purple-400">Наши партнёры-психологи</h2>
            <p className="text-gray-600 text-lg">Проверенные специалисты с подтверждённой квалификацией</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Это Важно',
                founder: 'Елена Мицкевич',
                desc: 'Практикующий психолог и автор одноимённого психологического подкаста. Все специалисты проходят строгий отбор и регулярно повышают квалификацию',
                badge: 'Подкаст'
              },
              {
                name: 'Focus',
                founder: 'Топ-10 Москвы',
                desc: 'Психологический центр, в который входят психологи топ-10 Москвы с подтверждённым опытом и высоким рейтингом',
                badge: 'Центр'
              },
              {
                name: 'Synaps',
                founder: 'Мария Максимова',
                desc: 'Профессиональный психолог, лектор Московского института психоанализа, кандидат медицинских наук, член Российского общества психиатров',
                badge: 'К.м.н.'
              }
            ].map((partner, idx) => (
              <Card key={idx} className="border-purple-100 rounded-3xl shadow-lg hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-full h-32 bg-gradient-to-br from-purple-200 via-blue-200 to-purple-100 rounded-2xl mb-4 flex items-center justify-center">
                    <Icon name="Brain" size={48} className="text-white" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{partner.name}</CardTitle>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-600">
                      {partner.badge}
                    </Badge>
                  </div>
                  <p className="font-medium text-purple-400 text-sm">{partner.founder}</p>
                  <CardDescription className="text-base leading-relaxed mt-2">
                    {partner.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full rounded-full border-purple-200 text-purple-400 hover:bg-purple-50">
                    Записаться на консультацию
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                  <div className="text-4xl font-bold text-purple-400 mb-4">4 990 ₽</div>
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
    </div>
  );
};

export default Index;
