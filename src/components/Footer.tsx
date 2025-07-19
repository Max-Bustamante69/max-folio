import {
  CodeBracketIcon,
  HeartIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import { useTranslations } from "@/hooks/useTranslations";
import mbLogo from "@/assets/mb-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const t = useTranslations();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Max-Bustamante69", // Placeholder - update with real URL
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/maximiliano-bustamante-998b77173/", // Placeholder - update with real URL
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted border-t border-border/50 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-4 py-16 relative z-10">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-black border  border-gray-700 rounded-xl flex items-center justify-center shadow-lg">
                  <img src={mbLogo} alt="MB Logo" className="w-12 h-12" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">
                    {t.footer.name()}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t.footer.title()}
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {t.footer.description()}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted/80 hover:bg-primary/20 border border-border/50 hover:border-primary/30 rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-semibold text-foreground">
              {t.footer.quickLinks()}
            </h4>
            <div className="space-y-3">
              {[
                { name: t.nav.home(), href: "#home" },
                { name: t.nav.experience(), href: "#experience" },
                { name: t.nav.skills(), href: "#skills" },
                { name: t.nav.contact(), href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-fit text-muted-foreground hover:text-primary transition-colors duration-200 link-animated"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-medium transition-colors duration-200"
              >
                <EnvelopeIcon className="w-4 h-4" />
                {t.footer.getInTouch()}
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-4 space-y-6">
            <h4 className="font-semibold text-foreground">
              {t.footer.whatIDo()}
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {t.footer.services().map((service, index) => (
                <div key={service} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-sm text-muted-foreground">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <CodeBracketIcon className="w-5 h-5" />
              <span className="text-sm">{t.footer.copyright()}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © {currentYear} Maximiliano Bustamante
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
