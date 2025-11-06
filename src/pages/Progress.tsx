import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress as ProgressBar } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Progress = () => {
  const [diaryStreak] = useState(12);
  const [emotionStreak] = useState(15);
  const [totalEntries] = useState(45);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-peach-50">
      <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-purple-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full flex items-center justify-center">
                <span className="text-white text-xl">🌸</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Точка опоры
              </h1>
            </Link>
            <Link to="/">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-500">
                <Icon name="Home" size={20} className="mr-2" />
                На главную
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 text-purple-400">Мой прогресс</h2>
          <p className="text-gray-600 text-lg">Отслеживайте свой путь и достижения</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8 animate-scale-in">
          <Card className="border-purple-100 rounded-3xl shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 to-blue-200 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Icon name="Flame" className="text-purple-400" size={32} />
              </div>
              <CardTitle className="text-center text-3xl font-bold text-purple-400">{diaryStreak}</CardTitle>
              <CardDescription className="text-center text-base">дней подряд в дневнике</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 rounded-3xl shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Icon name="Heart" className="text-blue-400" size={32} />
              </div>
              <CardTitle className="text-center text-3xl font-bold text-blue-400">{emotionStreak}</CardTitle>
              <CardDescription className="text-center text-base">дней отслеживания эмоций</CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-purple-100 rounded-3xl shadow-lg">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-200 via-blue-200 to-purple-300 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Icon name="BookOpen" className="text-purple-400" size={32} />
              </div>
              <CardTitle className="text-center text-3xl font-bold text-purple-400">{totalEntries}</CardTitle>
              <CardDescription className="text-center text-base">всего записей</CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="border-purple-100 rounded-3xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">График активности</CardTitle>
              <CardDescription>Ваши записи за последние 4 недели</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { week: 'Неделя 1', entries: 4, max: 7 },
                  { week: 'Неделя 2', entries: 6, max: 7 },
                  { week: 'Неделя 3', entries: 5, max: 7 },
                  { week: 'Неделя 4', entries: 7, max: 7 }
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{item.week}</span>
                      <span className="text-purple-400 font-medium">{item.entries}/{item.max} дней</span>
                    </div>
                    <ProgressBar value={(item.entries / item.max) * 100} className="h-3" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-100 rounded-3xl shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Динамика настроения</CardTitle>
              <CardDescription>Средняя оценка за последний месяц</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl">
                  <div className="h-48 flex items-end gap-2">
                    {[
                      { week: 'Нед 1', value: 45 },
                      { week: 'Нед 2', value: 60 },
                      { week: 'Нед 3', value: 55 },
                      { week: 'Нед 4', value: 75 }
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                        <div 
                          className="w-full bg-gradient-to-t from-purple-300 to-blue-300 rounded-t-xl transition-all hover:opacity-80" 
                          style={{ height: `${item.value}%` }}
                        />
                        <span className="text-xs text-gray-600">{item.week}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <Icon name="TrendingUp" size={20} className="text-green-500" />
                  <span>Заметен рост на 30% за месяц</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-purple-100 rounded-3xl shadow-lg mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Достижения</CardTitle>
            <CardDescription>Ваши важные вехи на пути</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { icon: 'Award', title: 'Первый шаг', desc: 'Первая запись в дневнике', unlocked: true },
                { icon: 'Zap', title: 'Неделя силы', desc: '7 дней подряд', unlocked: true },
                { icon: 'Star', title: 'Месяц пути', desc: '30 дней практики', unlocked: false },
                { icon: 'Crown', title: 'Мастер', desc: '50 записей', unlocked: false },
                { icon: 'Sparkles', title: 'Постоянство', desc: '14 дней без пропусков', unlocked: true },
                { icon: 'Trophy', title: 'Чемпион', desc: '100 дней практики', unlocked: false }
              ].map((achievement, idx) => (
                <div 
                  key={idx} 
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    achievement.unlocked 
                      ? 'border-purple-200 bg-gradient-to-br from-purple-50 to-blue-50' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-3 ${
                    achievement.unlocked 
                      ? 'bg-gradient-to-br from-purple-200 to-blue-200' 
                      : 'bg-gray-200'
                  }`}>
                    <Icon 
                      name={achievement.icon} 
                      size={24} 
                      className={achievement.unlocked ? 'text-purple-400' : 'text-gray-400'} 
                    />
                  </div>
                  <h3 className={`font-semibold mb-1 ${achievement.unlocked ? 'text-gray-800' : 'text-gray-500'}`}>
                    {achievement.title}
                  </h3>
                  <p className={`text-sm ${achievement.unlocked ? 'text-gray-600' : 'text-gray-400'}`}>
                    {achievement.desc}
                  </p>
                  {achievement.unlocked && (
                    <Badge className="mt-2 bg-purple-200 text-purple-600 hover:bg-purple-200">
                      Получено
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-purple-100 rounded-3xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Последние записи</CardTitle>
            <CardDescription>Ваши недавние размышления</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { date: 'Сегодня, 14:30', mood: '🙂', preview: 'Сегодня было особенно спокойно. Попробовал практику с браслетом...' },
                { date: 'Вчера, 20:15', mood: '😊', preview: 'Прогулка в парке помогла. Чувствую больше ясности...' },
                { date: '2 дня назад, 18:45', mood: '😐', preview: 'День был сложным, но я справился. Важно помнить...' },
                { date: '3 дня назад, 16:20', mood: '🙂', preview: 'Начал понимать, что это процесс. Разговор с психологом...' }
              ].map((entry, idx) => (
                <div key={idx} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{entry.mood}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-500">{entry.date}</span>
                        <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-500">
                          <Icon name="Eye" size={16} className="mr-1" />
                          Открыть
                        </Button>
                      </div>
                      <p className="text-gray-700">{entry.preview}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Progress;
