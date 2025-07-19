import { Button } from "@/components/ui/button";
import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import heroPortrait from "@/assets/hero-portrait.png";

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    // Placeholder for CV download - you can replace with actual CV link
    const link = document.createElement("a");
    link.href = "/Maximiliano Bustamante - CV.pdf"; // Replace with actual CV URL
    link.download = "Maximiliano_Bustamante_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 py-40 lg:py-0 relative overflow-hidden"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary-glow/5 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-60 animate-pulse" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-glow/20 rounded-full blur-3xl opacity-40 animate-pulse" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Hi, I'm <span className="gradient-text">Maximiliano</span>
            </h1>
            <p className="text-xl md:text-2xl ">
              Software Engineering Student & Frontend Developer
            </p>
          </div>

          <div className="max-w-2xl space-y-6">
            <p className="text-md md:text-lg text-muted-foreground leading-relaxed ">
              I'm a passionate Software Engineering student at EAFIT University
              with extensive experience in modern web development. I specialize
              in React, Next.js, and creating beautiful, functional user
              experiences that drive business results.
            </p>
          </div>
        </div>

        {/* Profile Image - Mobile: Between sections, Desktop: Right side */}
        <div className="flex justify-center lg:justify-end animate-slide-in-left order-2 lg:order-1">
          <div className="relative">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-glow rounded-3xl blur-2xl opacity-30 animate-pulse-glow"></div>

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-card to-card/50 rounded-3xl p-2 backdrop-blur-sm border border-border/50">
              <img
                src={heroPortrait}
                alt="Maximiliano Bustamante"
                className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-2xl shadow-2xl float-animation bg-gradient-to-br from-primary/10 to-primary-glow/50"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce opacity-80"></div>
            <div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-glow rounded-full animate-bounce opacity-60"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 -left-8 w-4 h-4 bg-accent rounded-full animate-bounce opacity-40"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>

        {/* Current Focus Section - Mobile: After photo, Desktop: Left side */}
        <div className="order-3 lg:order-2">
          <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Current Focus
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Lead Frontend Developer at Ellamau SAS
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                Building scalable e-commerce solutions with Shopify Liquid
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Freelance web development projects
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button onClick={scrollToContact} className="btn-hero group">
              <EnvelopeIcon className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Get In Touch
            </Button>
            <Button
              onClick={downloadCV}
              variant="outline"
              className="btn-hero-outline group"
            >
              <ArrowDownTrayIcon className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
