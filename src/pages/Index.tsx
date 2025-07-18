import { ThemeProvider } from "@/components/ThemeProvider";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />

          <main>
            <HeroSection />
            <ExperienceSection />
            <SkillsSection />
            <ContactSection />
          </main>

          <Footer />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default Index;
