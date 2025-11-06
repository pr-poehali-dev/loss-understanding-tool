import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    lossType: '',
    timeframe: '',
    goals: '',
    consent: false
  });

  const handleNext = () => {
    if (step === 1 && !formData.name) {
      toast.error('Пожалуйста, укажите ваше имя');
      return;
    }
    if (step === 2 && !formData.lossType) {
      toast.error('Пожалуйста, выберите вариант');
      return;
    }
    if (step === 3 && !formData.timeframe) {
      toast.error('Пожалуйста, выберите вариант');
      return;
    }
    if (step < 4) {
      setStep(step + 1);
    } else {
      toast.success('Добро пожаловать в Точку опоры! 🌸');
      setTimeout(() => navigate('/'), 1500);
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-peach-50 flex items-center justify-center p-6">
      <Card className="w-full max-w-2xl border-purple-100 rounded-3xl shadow-xl animate-fade-in">
        <CardHeader className="text-center pb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-300 to-blue-300 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-3xl">🌸</span>
          </div>
          <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Точка опоры
          </CardTitle>
          <CardDescription className="text-base mt-2">
            Давайте познакомимся, чтобы лучше вам помочь
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="flex justify-center gap-2 mb-6">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`h-2 rounded-full transition-all ${
                  s === step ? 'w-12 bg-purple-400' : 'w-2 bg-purple-200'
                }`}
              />
            ))}
          </div>

          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Как вас зовут?</h3>
                <p className="text-gray-600">Мы будем обращаться к вам по имени</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="name" className="text-base">Имя</Label>
                <Input
                  id="name"
                  placeholder="Введите ваше имя"
                  className="rounded-2xl border-purple-200 text-lg py-6"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age" className="text-base">Возраст (опционально)</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder="Ваш возраст"
                  className="rounded-2xl border-purple-200 text-lg py-6"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">С чем связана ваша утрата?</h3>
                <p className="text-gray-600">Это поможет нам подобрать подходящие материалы</p>
              </div>
              <RadioGroup value={formData.lossType} onValueChange={(value) => setFormData({ ...formData, lossType: value })}>
                <div className="space-y-3">
                  {[
                    { value: 'person', label: 'Потеря близкого человека', icon: 'Users' },
                    { value: 'relationship', label: 'Расставание или развод', icon: 'HeartCrack' },
                    { value: 'job', label: 'Потеря работы', icon: 'Briefcase' },
                    { value: 'health', label: 'Изменения в здоровье', icon: 'Heart' },
                    { value: 'other', label: 'Другое', icon: 'CircleHelp' }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-4 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-pointer">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="flex items-center gap-3 cursor-pointer flex-1">
                        <Icon name={option.icon} size={24} className="text-purple-400" />
                        <span className="text-base">{option.label}</span>
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Как давно это произошло?</h3>
                <p className="text-gray-600">Понимание временного контекста важно для поддержки</p>
              </div>
              <RadioGroup value={formData.timeframe} onValueChange={(value) => setFormData({ ...formData, timeframe: value })}>
                <div className="space-y-3">
                  {[
                    { value: 'recent', label: 'Недавно (до 1 месяца)' },
                    { value: 'months', label: '1-6 месяцев назад' },
                    { value: 'year', label: '6-12 месяцев назад' },
                    { value: 'longtime', label: 'Больше года назад' }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-3 p-4 rounded-2xl border-2 border-purple-100 hover:border-purple-300 hover:bg-purple-50 transition-all cursor-pointer">
                      <RadioGroupItem value={option.value} id={option.value} />
                      <Label htmlFor={option.value} className="cursor-pointer flex-1 text-base">
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">Чего вы хотите достичь?</h3>
                <p className="text-gray-600">Расскажите о своих ожиданиях и целях</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="goals" className="text-base">Ваши цели (опционально)</Label>
                <Textarea
                  id="goals"
                  placeholder="Например: научиться справляться с эмоциями, найти спокойствие, понять себя..."
                  className="min-h-32 rounded-2xl border-purple-200"
                  value={formData.goals}
                  onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
                />
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl space-y-4">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={24} className="text-purple-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Важно помнить</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Мы не заменяем профессиональную психологическую помощь. Наш сервис помогает 
                      понимать и отслеживать свои переживания, но при серьёзных состояниях рекомендуем 
                      обратиться к специалисту. У нас есть проверенные партнёры-психологи.
                    </p>
                    <Button
                      variant="link"
                      className="text-purple-400 p-0 h-auto mt-2"
                      onClick={() => navigate('/agreement')}
                    >
                      Прочитать пользовательское соглашение
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex gap-4 pt-6">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="flex-1 rounded-full border-2 border-purple-200 text-purple-400 hover:bg-purple-50 py-6"
              >
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                Назад
              </Button>
            )}
            <Button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-purple-300 to-blue-300 hover:from-purple-400 hover:to-blue-400 rounded-full py-6 text-lg"
            >
              {step === 4 ? 'Начать путь' : 'Далее'}
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Onboarding;
