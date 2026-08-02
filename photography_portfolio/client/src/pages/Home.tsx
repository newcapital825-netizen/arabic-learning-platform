import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Home Page - Portfolio of Ahmed Salah
 * 
 * Design Philosophy: Modern Academic Elegance
 * - Professional and trustworthy
 * - Clear hierarchy and navigation
 * - Cultural warmth with modern design
 * - Focus on achievements and expertise
 * 
 * Color Scheme:
 * - Primary: Deep Blue (#2C3E50) - Professional and trustworthy
 * - Accent: Warm Gold (#D4A574) - Cultural warmth
 * - Background: White and Light Gray - Clean and minimal
 * 
 * Typography:
 * - Display: Playfair Display (serif) - Elegant and classic
 * - Body: Lato (sans-serif) - Modern and readable
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
