import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CalendarIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  UsersIcon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  type: "full-time" | "freelance" | "current";
  description: string;
  achievements: string[];
  metrics: {
    label: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  technologies: string[];
  website?: string;
  logo?: string;
}

const experiences: Experience[] = [
  {
    id: "ellamau",
    title: "Lead Frontend Developer",
    company: "Ellamau SAS",
    location: "Remote",
    period: "2024 - Present",
    type: "current",
    description:
      "Leading the complete frontend architecture and development of an e-commerce platform. Responsible for the entire technology stack planning and implementation.",
    achievements: [
      "Architected complete e-commerce solution using MongoDB, Next.js, and Stripe",
      "Implemented React Query for efficient state management",
      "Built comprehensive admin panel for content management",
      "Designed responsive UI with modern best practices",
    ],
    metrics: [
      { label: "Sales Increase", value: "60%", icon: ChartBarIcon },
      { label: "Timeline", value: "30 Days", icon: CalendarIcon },
      { label: "Team Size", value: "3", icon: UsersIcon },
    ],
    technologies: [
      "React",
      "Next.js",
      "MongoDB",
      "Stripe",
      "React Query",
      "Tailwind CSS",
    ],
    website: "https://ellamau.vercel.app/",
    logo: "https://www.ellamauusa.com/cdn/shop/files/logo_ellamau.png?height=628&pad_color=ffffff&v=1743481196&width=1200",
  },
  {
    id: "rh",
    title: "Frontend Developer",
    company: "RH (Restoration Hardware)",
    location: "Remote",
    period: "2024 - 2025",
    type: "full-time",
    description:
      "Developed reusable components for migration from Adobe Experience Manager to Contentful Studio, achieving significant cost reduction.",
    achievements: [
      "Created component library for AEM to Contentful migration",
      "Implemented Material UI and Radix UI components",
      "Optimized performance and accessibility standards",
      "Collaborated with design team for pixel-perfect implementations",
    ],
    metrics: [
      { label: "Cost Reduction", value: "60%", icon: ChartBarIcon },
      { label: "Components Built", value: "50+", icon: BuildingOffice2Icon },
      { label: "Team Members", value: "12", icon: UsersIcon },
    ],
    technologies: [
      "React",
      "Material UI",
      "Radix UI",
      "Tailwind CSS",
      "Contentful",
      "AEM",
    ],
    website: "https://rh.com/us/en/sale",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2b/RH_logo.svg",
  },
  {
    id: "orthofix",
    title: "Frontend  & Salesforce Developer",
    company: "Orthofix",
    location: "Remote",
    period: "2023 - 2024",
    type: "full-time",
    description:
      "Developed patient registration software and section management systems using Lightning Web Components and Salesforce platform.",
    achievements: [
      "Built patient registration system from scratch",
      "Implemented section management with Salesforce",
      "Created Lightning Web Components for enhanced UX",
      "Integrated with medical device tracking systems",
    ],
    metrics: [
      { label: "Patients Processed", value: "1000+", icon: UsersIcon },
      { label: "System Uptime", value: "99.9%", icon: ChartBarIcon },
      { label: "Processing Time", value: "-75%", icon: CalendarIcon },
    ],
    technologies: [
      "Lightning Web Components",
      "Salesforce",
      "JavaScript",
      "Apex",
      "SOQL",
    ],
    website: "https://orthofix.com/",
    logo: "https://companieslogo.com/img/orig/OFIX-c56c9c90.png?t=1720244493",
  },
  {
    id: "ibox",
    title: "Frontend React Developer",
    company: "iBox SA",
    location: "Medellín, Colombia",
    period: "2021 - 2022",
    type: "full-time",
    description:
      "Led the creation of the main company website focused on intelligent locker solutions, establishing the digital presence for the business.",
    achievements: [
      "Built main company website from ground up",
      "Implemented responsive design for all devices",
      "Created interactive product showcase",
      "Established company's digital brand presence",
    ],
    metrics: [
      { label: "Website Traffic", value: "+200%", icon: ChartBarIcon },
      { label: "Lead Generation", value: "+150%", icon: UsersIcon },
      { label: "Page Load Time", value: "1.2s", icon: CalendarIcon },
    ],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Design"],
    website: "https://www.iboxsm.com/",
    logo: "https://www.appiboxsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_ibox.01cac8c8.png&w=1200&q=75",
  },
];

const freelanceProjects = [
  {
    title: "Dr. Hugo Diazgranados",
    description:
      "Personal website for aesthetic dentist specializing in high-end dentistry",
    technologies: ["WordPress", "Custom PHP", "CSS"],
    website: "https://drhugodiazgranados.com/",
  },
  {
    title: "Sebastian Correa Developer",
    description: "Personal portfolio for Senior Software Developer",
    technologies: ["Astro.js", "TypeScript", "Tailwind CSS"],
    website: "https://www.scorrea.dev/",
  },
  {
    title: "Pagui.co",
    description:
      "Registration software with OCR recognition for Bancolombia Bank clients",
    technologies: ["Django", "Next.js", "OCR API", "PostgreSQL"],
    website: "https://pagui-kyc.vercel.app/",
  },
  {
    title: "Wordle Clone",
    description: "Wordle clone built with Vanilla JS",
    technologies: ["Vanilla JS", "HTML", "CSS"],
    website: "https://wordle-max.vercel.app/",
  },
];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] = useState<string>(
    experiences[0].id
  );
  const [activeTab, setActiveTab] = useState<"work" | "freelance">("work");
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  const selectedExp = experiences.find((exp) => exp.id === selectedExperience);

  return (
    <section id="experience" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through innovative projects and impactful solutions across
            various industries
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted/50 rounded-2xl p-1 backdrop-blur-sm border border-border/50">
            <Button
              variant={activeTab === "work" ? "default" : "ghost"}
              onClick={() => setActiveTab("work")}
              className={activeTab === "work" ? "btn-hero" : ""}
            >
              Professional Work
            </Button>
            <Button
              variant={activeTab === "freelance" ? "default" : "ghost"}
              onClick={() => setActiveTab("freelance")}
              className={activeTab === "freelance" ? "btn-hero" : ""}
            >
              Freelance Projects
            </Button>
          </div>
        </div>

        {activeTab === "work" && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Timeline Navigation */}
            <div className="lg:col-span-4 space-y-4">
              {experiences.map((exp, index) => (
                <Card
                  key={exp.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                    selectedExperience === exp.id
                      ? "card-glow border-primary/50 bg-primary/5"
                      : "card-glow hover:border-primary/30"
                  }`}
                  onClick={() => setSelectedExperience(exp.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-4 h-4 rounded-full mt-1 ${
                            exp.type === "current"
                              ? "bg-green-500 animate-pulse"
                              : exp.type === "full-time"
                              ? "bg-primary"
                              : "bg-primary-glow"
                          }`}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {exp.company}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CalendarIcon className="w-4 h-4" />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    {/* External link icon */}
                    {exp.website && (
                      <a
                        href={exp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 text-white hover:text-primary transition-colors duration-200"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-8">
              {selectedExp && (
                <Card className="card-glow animate-fade-in-up">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Header with Logo */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-start gap-4">
                          {/* Company Logo */}
                          {selectedExp.logo && (
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl border-2 border-border/50 p-2 flex items-center justify-center shadow-sm">
                                <img
                                  src={selectedExp.logo}
                                  alt={`${selectedExp.company} logo`}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = "none";
                                  }}
                                />
                              </div>
                            </div>
                          )}
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-3">
                              <h3 className="text-2xl font-bold text-foreground">
                                {selectedExp.title}
                              </h3>
                              <Badge
                                variant={
                                  selectedExp.type === "current"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {selectedExp.type === "current"
                                  ? "Current"
                                  : "Completed"}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <BuildingOffice2Icon className="w-5 h-5" />
                              <span className="font-medium">
                                {selectedExp.company}
                              </span>
                              <span>•</span>
                              <span>{selectedExp.location}</span>
                              {selectedExp.website && (
                                <>
                                  <span className="hidden sm:inline">•</span>
                                  <a
                                    href={selectedExp.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary-glow link-animated hidden sm:inline"
                                  >
                                    Visit Website
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedExp.description}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedExp.metrics.map((metric, index) => (
                          <div
                            key={index}
                            className="bg-muted/30 rounded-xl p-4 text-center"
                          >
                            <metric.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                            <div className="text-2xl font-bold text-foreground">
                              {metric.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {metric.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Achievements - Desktop */}
                      <div className="hidden md:block space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {selectedExp.achievements.map(
                            (achievement, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Achievements - Mobile Dropdown */}
                      <div className="md:hidden">
                        <button
                          onClick={() =>
                            setIsAchievementsOpen(!isAchievementsOpen)
                          }
                          className="w-full flex items-center justify-between p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors duration-200 border border-border/50"
                        >
                          <h4 className="text-lg font-semibold text-foreground">
                            Key Achievements
                          </h4>
                          {isAchievementsOpen ? (
                            <ChevronUpIcon className="w-5 h-5 text-muted-foreground transition-transform duration-300" />
                          ) : (
                            <ChevronDownIcon className="w-5 h-5 text-muted-foreground transition-transform duration-300" />
                          )}
                        </button>

                        <div className="overflow-hidden transition-all duration-500 ease-in-out">
                          <div
                            className={`bg-background/95 backdrop-blur-xl rounded-lg border border-border/50 shadow-lg
                              transition-all duration-500 ease-in-out transform
                              ${
                                isAchievementsOpen
                                  ? "max-h-96 opacity-100 translate-y-0 mt-2"
                                  : "max-h-0 opacity-0 -translate-y-2"
                              }
                            `}
                          >
                            <div className="p-4 space-y-3">
                              {selectedExp.achievements.map(
                                (achievement, index) => (
                                  <div
                                    key={index}
                                    className={`flex items-start gap-3 transition-all duration-300 transform
                                    ${
                                      isAchievementsOpen
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-4"
                                    }
                                  `}
                                    style={{
                                      transitionDelay: `${index * 100}ms`,
                                      transitionProperty: "all",
                                    }}
                                  >
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground text-sm leading-relaxed">
                                      {achievement}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedExp.technologies.map((tech, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-primary/10 border-primary/30"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* External link icon for mobile */}
                    {selectedExp.website && (
                      <a
                        href={selectedExp.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-6 right-6 text-white hover:text-primary transition-colors duration-200 sm:hidden"
                      >
                        <ArrowTopRightOnSquareIcon className="w-6 h-6" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        )}

        {activeTab === "freelance" && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {freelanceProjects.map((project, index) => (
              <Card
                key={index}
                className="card-glow hover:scale-105 transition-all duration-300 relative"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.website !== "#" && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary-glow link-animated text-sm font-medium"
                    >
                      View Project →
                    </a>
                  )}
                  {/* External link icon */}
                  {project.website !== "#" && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute top-4 right-4 text-white hover:text-primary transition-colors duration-200"
                    >
                      <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
