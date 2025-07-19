import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import { useTranslations } from "@/hooks/useLanguage";
import LanguageToggle from "@/components/LanguageToggle";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import mbLogo from "@/assets/mb-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations();

  const navigationItems = [
    { name: t.nav.home(), href: "#home" },
    { name: t.nav.experience(), href: "#experience" },
    { name: t.nav.skills(), href: "#skills" },
    { name: t.nav.contact(), href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const navbarHeight = 120; // Approximate navbar height including top margin
      const elementPosition = (element as HTMLElement).offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 mt-8
        bg-background/60 dark:bg-background/40
        backdrop-blur dark:backdrop-blur
        border border-border/40 dark:border-border/60
        shadow-lg rounded-2xl mx-4 sm:mx-auto max-w-full sm:max-w-2xl md:max-w-4xl
        ${
          isScrolled
            ? "border-primary/30 dark:border-primary/40"
            : "border-border/40 dark:border-border/60"
        }
      `}
      style={{ top: "2.5rem" }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={mbLogo}
              alt="MB Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground font-semibold hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Language Toggle, Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <MoonIcon className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-8 h-8 sm:w-10 sm:h-10 relative"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 rotate-90" />
                ) : (
                  <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden overflow-hidden transition-all duration-500 ease-in-out">
          <div
            className={`bg-background/95 backdrop-blur-xl rounded-xl border border-border/50 shadow-xl
            transition-all duration-500 ease-in-out ${
              isMobileMenuOpen
                ? "max-h-96 opacity-100 mt-4 mb-4 p-4"
                : "max-h-0 opacity-0 mt-0 mb-0 p-0"
            }`}
          >
            <div className="space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 text-foreground font-medium hover:text-primary hover:bg-primary/10 rounded-lg transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
