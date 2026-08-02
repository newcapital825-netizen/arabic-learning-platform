import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: 'منصة فُصَاح: مستقبل تعلم العربية',
      description: 'منصة تعليمية تفاعلية تحول تعلم اللغة العربية إلى تجربة ممتعة وجذابة للطلاب.',
      category: 'منصة تعليمية',
      tags: ['تعليم تفاعلي', 'اللغة العربية', 'تكنولوجيا'],
      link: 'https://app.heygen.com/videos/fusaha-the-future-of-arabic-learning-0985ba13f259409eb02276802faf855a'
    },
    {
      title: 'درس تفاعلي: البطل الشهيد الرفاعي',
      description: 'درس تفاعلي داخل الفصل يجمع بين الأدب والتاريخ والقيم الإسلامية بطريقة حديثة وجذابة.',
      category: 'درس تفاعلي',
      tags: ['الأدب العربي', 'التاريخ الإسلامي', 'التدريس التفاعلي'],
      link: 'https://www.canva.com/design/DAHPTGTi_-c/7BHnKlrXluLCC1zKasxipg/edit'
    },
    {
      title: 'الأدب في العصر الأموي',
      description: 'عرض شامل لخصائص الأدب الأموي مع أمثلة تطبيقية وتحليلات معمقة.',
      category: 'محتوى تعليمي',
      tags: ['الأدب الأموي', 'التحليل الأدبي', 'المنهج'],
      link: 'https://canva.link/cfzygmnb17iqulm'
    },
    {
      title: 'الأدب العباسي بطريقة عرض متميزة',
      description: 'عرض مبتكر للأدب العباسي يجمع بين الجمال البصري والمحتوى الأكاديمي الدقيق.',
      category: 'محتوى تعليمي',
      tags: ['الأدب العباسي', 'العرض المرئي', 'التدريس الحديث'],
      link: 'https://www.canva.com/design/DAHPTCJXjpQ/p1afrmx8TCo-VhglUqDt4w/edit'
    },
    {
      title: 'نماذج امتحانات الوحدة الأولى',
      description: 'مجموعة شاملة من نماذج الامتحانات لمساعدة الطلاب على الاستعداد والتقييم الذاتي.',
      category: 'أدوات تقييم',
      tags: ['التقييم', 'نماذج امتحانات', 'التحضير'],
      link: 'https://www.canva.com/design/DAHPTCb8nZo/P_kNLMkoc9H1H4IAADHGdw/edit'
    },
    {
      title: 'لعبة تعليمية للصف الرابع',
      description: 'لعبة تعليمية تفاعلية تجعل تعلم اللغة العربية ممتعاً وشيقاً للطلاب الصغار.',
      category: 'تعليم تفاعلي',
      tags: ['لعبة تعليمية', 'الصف الرابع', 'التعليم المرح'],
      link: 'https://www.canva.com/design/DAGwLHcJZGM/8Cf2KzN119Gp7ozC25vU1A/edit'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">
              المشاريع والأعمال
            </h2>
            <div className="divider-accent"></div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="academic-card flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-lg text-primary font-display">{project.title}</CardTitle>
                      <Badge variant="secondary" className="mt-2 text-xs accent-highlight bg-blue-50 border-blue-200">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Link Button */}
                  <Button 
                    variant="outline" 
                    className="w-full text-primary border-primary hover:bg-primary/5"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    عرض المشروع
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
