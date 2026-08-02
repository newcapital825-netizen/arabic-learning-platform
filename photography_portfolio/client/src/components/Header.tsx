import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/manus-storage/logo-icon_1563b8b5.png" 
              alt="Ahmed Salah Logo" 
              className="w-10 h-10"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">أحمد صلاح</h1>
              <p className="text-xs text-muted-foreground">معلم اللغة العربية</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              عني
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors"
            >
              الخبرات
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors"
            >
              المشاريع
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors"
            >
              المهارات
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              التواصل
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-100 pt-4">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-right text-foreground hover:text-primary transition-colors"
            >
              عني
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-right text-foreground hover:text-primary transition-colors"
            >
              الخبرات
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-right text-foreground hover:text-primary transition-colors"
            >
              المشاريع
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-right text-foreground hover:text-primary transition-colors"
            >
              المهارات
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-right text-foreground hover:text-primary transition-colors"
            >
              التواصل
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}
