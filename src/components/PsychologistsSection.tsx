import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const PsychologistsSection = () => {
  return (
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
  );
};

export default PsychologistsSection;
