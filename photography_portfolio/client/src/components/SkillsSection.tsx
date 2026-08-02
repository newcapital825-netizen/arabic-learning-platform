import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Users, Lightbulb, Globe, Zap, Award } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: BookOpen,
      title: 'تدريس اللغة العربية',
      skills: ['تدريس القراءة والكتابة', 'النحو والصرف', 'الأدب العربي', 'الخط العربي'],
      color: 'bg-blue-50 text-primary'
    },
    {
      icon: Users,
      title: 'إدارة الفصل',
      skills: ['بناء علاقات إيجابية', 'إدارة السلوك', 'التواصل الفعال', 'التنوع الثقافي'],
      color: 'bg-purple-50 text-purple-600'
    },
    {
      icon: Lightbulb,
      title: 'التدريس المتمايز',
      skills: ['تصميم المناهج', 'تكييف الاستراتيجيات', 'دعم الطلاب المختلفين', 'التقييم المستمر'],
      color: 'bg-yellow-50 text-yellow-600'
    },
    {
      icon: Globe,
      title: 'المناهج الدولية',
      skills: ['المنهج البريطاني', 'المنهج الأمريكي', 'المدارس الدولية', 'المعايير الدولية'],
      color: 'bg-green-50 text-green-600'
    },
    {
      icon: Zap,
      title: 'التعليم المدعوم بالتكنولوجيا',
      skills: ['أدوات الذكاء الاصطناعي', 'المنصات التعليمية', 'الفصول الافتراضية', 'المحتوى الرقمي'],
      color: 'bg-orange-50 text-orange-600'
    },
    {
      icon: Award,
      title: 'التطوير المهني',
      skills: ['التعليم المستمر', 'القيادة التعليمية', 'البحث التربوي', 'الابتكار التعليمي'],
      color: 'bg-red-50 text-red-600'
    }
  ];

  const languages = [
    { name: 'العربية', level: 'لغة أم', proficiency: 100 },
    { name: 'الإنجليزية', level: 'كفاءة احترافية', proficiency: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">
              المهارات والكفاءات
            </h2>
            <div className="divider-accent"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="academic-card">
                  <CardContent className="pt-6">
                    <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4 font-display">
                      {category.title}
                    </h3>
                    <div className="space-y-2">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Languages Section */}
          <div className="bg-white rounded-lg p-8 border border-gray-100">
            <h3 className="text-3xl font-bold text-primary mb-6 font-display">اللغات</h3>
            <div className="space-y-6">
              {languages.map((lang, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <h4 className="font-semibold text-foreground text-lg">{lang.name}</h4>
                      <p className="text-sm text-muted-foreground">{lang.level}</p>
                    </div>
                    <span className="text-sm font-semibold accent-highlight">{lang.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-accent h-2 rounded-full transition-all duration-500"
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
