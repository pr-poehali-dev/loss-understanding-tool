import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface DiarySectionProps {
  diaryStreak: number;
  emotionStreak: number;
  dailyEntry: string;
  setDailyEntry: (value: string) => void;
  saveDiaryEntry: () => void;
}

const DiarySection = ({ diaryStreak, emotionStreak, dailyEntry, setDailyEntry, saveDiaryEntry }: DiarySectionProps) => {
  return (
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
  );
};

export default DiarySection;
