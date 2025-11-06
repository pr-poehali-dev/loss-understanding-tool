import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const EducationSection = () => {
  return (
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
  );
};

export default EducationSection;
