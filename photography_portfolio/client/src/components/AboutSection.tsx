export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6 font-display">
              عني
            </h2>
            <div className="divider-accent"></div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <img 
                src="/manus-storage/FB_IMG_1586970988686.jpg_2K_202607131649_f781c7e6.webp"
                alt="Ahmed Salah - Arabic Language Teacher"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            {/* Text Content */}
            <div className="order-1 md:order-2">
              <p className="text-lg text-foreground mb-6 leading-relaxed">
                معلم متخصص في اللغة العربية والتربية الإسلامية بخبرة تزيد على 13 سنة في المدارس الدولية البريطانية والأمريكية. أؤمن بأن دور المعلم الأساسي ليس فقط تدريس المادة، بل مساعدة الطلاب على تطوير الثقة والهوية والفضول الفكري الذي يبقى معهم طوال حياتهم.
              </p>

              <p className="text-lg text-foreground mb-6 leading-relaxed">
                متخصص في تصميم المناهج الدراسية والتدريس المتمايز، مع تركيز قوي على دمج التكنولوجيا في العملية التعليمية. أعمل على تحويل تعلم اللغة العربية إلى تجربة ملهمة وتفاعلية تحافظ على الهوية الثقافية والإسلامية.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                  <div className="text-4xl font-bold accent-highlight mb-2">13+</div>
                  <div className="text-sm text-muted-foreground font-medium">سنة خبرة</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                  <div className="text-4xl font-bold accent-highlight mb-2">5+</div>
                  <div className="text-sm text-muted-foreground font-medium">مدارس دولية</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-100">
                  <div className="text-4xl font-bold accent-highlight mb-2">1000+</div>
                  <div className="text-sm text-muted-foreground font-medium">طالب وطالبة</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
