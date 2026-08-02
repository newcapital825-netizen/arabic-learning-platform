import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection() {
  const experiences = [
    {
      title: 'معلم اللغة العربية والتربية الإسلامية',
      school: 'مدرسة فالكون الدولية',
      period: '2025 - الحالي',
      location: 'القاهرة، مصر',
      description: 'قيادة الإنتاج الإبداعي والتعليمي لعرض مسرحي أصلي، تحويل الشعر الجاهلي إلى تجربة تعليمية معاصرة.',
      achievements: ['إنتاج عرض مسرحي متميز', 'شهادة تقدير من إدارة المدرسة'],
      tags: ['إنتاج إبداعي', 'التعليم المسرحي', 'الشعر الجاهلي']
    },
    {
      title: 'معلم اللغة العربية والتربية الإسلامية',
      school: 'مدارس سانت فاتيما الدولية',
      period: '2024 - 2025',
      location: 'مدينة نصر، القاهرة',
      description: 'عضو موثوق في قسم اللغة العربية الكبير، معروف بممارسات تدريسية جذابة وعلاقات قوية مع الطلاب.',
      achievements: ['ثقافة تعليمية إيجابية', 'طلبات متكررة من الطلاب والأسر للالتحاق بفصلي'],
      tags: ['إدارة الفصل', 'بناء العلاقات', 'التدريس المتمايز']
    },
    {
      title: 'معلم اللغة العربية',
      school: 'مدرسة ستانفورد الدولية',
      period: '2022 - 2024',
      location: 'التجمع الخامس، القاهرة',
      description: 'تدريس اللغة العربية للصفوف 7-10 ضمن المنهج الأمريكي، مع تكييف استراتيجيات التدريس لأربع مستويات صفية متزامنة.',
      achievements: ['معايير أكاديمية عالية متسقة', 'مساهم موثوق في تطوير المنهج', 'دعم ومرشد للطلاب'],
      tags: ['المنهج الأمريكي', 'تطوير المنهج', 'التدريس متعدد المستويات']
    },
    {
      title: 'معلم اللغة العربية',
      school: 'مدرسة كورنيل الدولية',
      period: '2020 - 2022',
      location: 'القاهرة',
      description: 'تدريس اللغة العربية الأساسية للصفوف 4-6، بناء أساس قوي في اكتساب اللغة. في ظل وباء عالمي جائح ومناهج وزارية متغيرة كان التحدي هو المقياس للنجاح.',
      achievements: ['تأسيس أساس لغوي قوي', 'تطوير مهارات القراءة والكتابة'],
      tags: ['المرحلة الابتدائية', 'اكتساب اللغة', 'القراءة والكتابة']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">
              الخبرات المهنية
            </h2>
            <div className="divider-accent"></div>
          </div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="academic-card border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary font-display">{exp.title}</CardTitle>
                      <CardDescription className="text-lg text-foreground mt-2 font-semibold">
                        {exp.school}
                      </CardDescription>
                      <p className="text-sm text-muted-foreground mt-1">{exp.location}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary" className="whitespace-nowrap accent-highlight bg-blue-50 border-blue-200">
                        {exp.period}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-foreground mb-2">الإنجازات:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-foreground">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
