import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
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

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
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
      const extraOffset = 20; // Additional spacing
      const totalOffset = navbarHeight + extraOffset;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - totalOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
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

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
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
              transition-all duration-500 ease-in-out transform
              ${
                isMobileMenuOpen
                  ? "max-h-64 opacity-100 translate-y-0 my-6"
                  : "max-h-0 opacity-0 -translate-y-2"
              }
            `}
          >
            <div className="p-4 space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 transform
                    text-foreground hover:text-primary hover:bg-primary/10 
                    border border-transparent hover:border-primary/20
                    ${
                      isMobileMenuOpen
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }
                  `}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    transitionProperty: "all",
                  }}
                >
                  <span className="font-medium text-base">{item.name}</span>
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
