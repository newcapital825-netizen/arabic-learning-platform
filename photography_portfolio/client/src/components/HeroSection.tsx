import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/manus-storage/FB_IMG_1586970988686.jpg_2K_202607131649_f781c7e6.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display" style={{color: '#D4AF37'}}>
            أحمد صلاح
          </h1>
          <p className="text-xl md:text-2xl mb-4 font-light" style={{color: 'white'}}>
            معلم اللغة العربية والتربية الإسلامية
          </p>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            أكثر من 13 سنة خبرة في  تدريس اللغة العربية وتصميم المناهج والتدريس المتمايز والتعليم المدعوم بالتكنولوجيا
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('about')}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
            >
              استكشف ملفي الشخصي
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
            >
              تواصل معي
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <ArrowDown size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
