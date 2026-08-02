import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">أحمد صلاح</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                معلم متخصص في اللغة العربية والتربية الإسلامية بخبرة 13+ سنة في المدارس الدولية.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">الروابط السريعة</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    عني
                  </a>
                </li>
                <li>
                  <a href="#experience" className="hover:text-white transition-colors">
                    الخبرات
                  </a>
                </li>
                <li>
                  <a href="#projects" className="hover:text-white transition-colors">
                    المشاريع
                  </a>
                </li>
                <li>
                  <a href="#skills" className="hover:text-white transition-colors">
                    المهارات
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    التواصل
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">التواصل</h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <a href="mailto:ah.slah6699@gmail.com" className="hover:text-white transition-colors">
                    ah.slah6699@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <a href="tel:+201060176196" className="hover:text-white transition-colors">
                    +20 106 017 6196
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>القاهرة، مصر</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8 mt-8">
            {/* Social Links */}
            <div className="flex justify-center gap-4 mb-6">
              <a
                href="https://linkedin.com/in/ahmed-salah-22088111a"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/201060176196"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Phone size={18} />
              </a>
              <a
                href="mailto:ah.slah6699@gmail.com"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center text-sm text-gray-400">
              <p>
                © {currentYear} أحمد صلاح. جميع الحقوق محفوظة.
              </p>
              <p className="mt-2 text-xs">
                تم تطوير هذا الموقع بعناية لعرض خبراتي ومشاريعي التعليمية.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
