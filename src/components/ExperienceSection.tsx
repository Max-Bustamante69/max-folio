import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/hooks/useTranslations";
import {
  CalendarIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  UsersIcon,
  ArrowTopRightOnSquareIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";

// =============================================================================
// JOB CONFIGURATION
// To add a new job:
// 1. Add translations to all locale files (en.json, es.json, ja.json)
// 2. Add a new entry to JOB_CONFIGS below
// =============================================================================

interface JobConfig {
  id: string;
  type: "full-time" | "freelance" | "current";
  startYear: number; // Used for sorting: current jobs first, then by start year descending
  metricValues: string[];
  metricIcons: React.ComponentType<{ className?: string }>[];
  technologies: string[];
  website?: string;
  logo?: string;
}

// Jobs are sorted: current jobs first, then by startYear descending
const JOB_CONFIGS: JobConfig[] = [
  // === CURRENT JOBS (appear first) ===
  {
    id: "ellamau",
    type: "current",
    startYear: 2024,
    metricValues: ["60%", "30 Days", "3"],
    metricIcons: [ChartBarIcon, CalendarIcon, UsersIcon],
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
  // === PAST JOBS (sorted by startYear descending) ===
  {
    id: "abidata",
    type: "full-time",
    startYear: 2025,
    metricValues: ["15+", "+40%", "20+"],
    metricIcons: [BuildingOffice2Icon, UsersIcon, ChartBarIcon],
    technologies: [
      "Django",
      "Next.js",
      "Redux",
      "React Query",
      "React Email",
      "PostgreSQL",
    ],
    website: "https://abidata.co/en/",
    logo: "https://abidata.co/en/wp-content/uploads/2025/05/logo-abi.webp",
  },
  {
    id: "rh",
    type: "full-time",
    startYear: 2024,
    metricValues: ["60%", "50+", "12"],
    metricIcons: [ChartBarIcon, BuildingOffice2Icon, UsersIcon],
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
    type: "full-time",
    startYear: 2023,
    metricValues: ["1000+", "99.9%", "-75%"],
    metricIcons: [UsersIcon, ChartBarIcon, CalendarIcon],
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
    type: "full-time",
    startYear: 2021,
    metricValues: ["+200%", "+150%", "1.2s"],
    metricIcons: [ChartBarIcon, UsersIcon, CalendarIcon],
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Responsive Design"],
    website: "https://www.iboxsm.com/",
    logo: "https://www.appiboxsm.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo_ibox.01cac8c8.png&w=1200&q=75",
  },
];

// =============================================================================
// FREELANCE CONFIGURATION
// To add a new freelance project:
// 1. Add translations to all locale files (en.json, es.json, ja.json)
// 2. Add a new entry to FREELANCE_CONFIGS below
// =============================================================================

interface FreelanceConfig {
  id: string;
  technologies: string[];
  website: string;
}

const FREELANCE_CONFIGS: FreelanceConfig[] = [
  {
    id: "drHugo",
    technologies: ["WordPress", "Custom PHP", "CSS"],
    website: "https://drhugodiazgranados.com/",
  },
  {
    id: "sebastian",
    technologies: ["Astro.js", "TypeScript", "Tailwind CSS"],
    website: "https://www.scorrea.dev/",
  },
  {
    id: "pagui",
    technologies: ["Django", "Next.js", "OCR API", "PostgreSQL"],
    website: "https://pagui-kyc.vercel.app/",
  },
  {
    id: "wordle",
    technologies: ["Vanilla JS", "HTML", "CSS"],
    website: "https://wordle-max.vercel.app/",
  },
];

// =============================================================================
// COMPONENT
// =============================================================================

const ExperienceSection = () => {
  const t = useTranslations();

  const [selectedExperience, setSelectedExperience] = useState<string>(
    JOB_CONFIGS[0].id
  );
  const [activeTab, setActiveTab] = useState<"work" | "freelance">("work");
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  const selectedConfig = JOB_CONFIGS.find(
    (job) => job.id === selectedExperience
  );
  const selectedJob = selectedConfig
    ? t.experience.getJob(selectedConfig.id)
    : null;

  const handleExperienceSelect = (experienceId: string) => {
    setSelectedExperience(experienceId);
    const experienceSection = document.getElementById("experience");
    if (experienceSection) {
      experienceSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="experience"
      className="py-24 px-4 relative overflow-hidden z-10"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.experience.title().split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">
              {t.experience.title().split(" ").slice(-1)}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.experience.subtitle()}
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
              {t.experience.tabs.work()}
            </Button>
            <Button
              variant={activeTab === "freelance" ? "default" : "ghost"}
              onClick={() => setActiveTab("freelance")}
              className={activeTab === "freelance" ? "btn-hero" : ""}
            >
              {t.experience.tabs.freelance()}
            </Button>
          </div>
        </div>

        {activeTab === "work" && (
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Timeline Navigation */}
            <div className="lg:col-span-4 space-y-4 order-2 lg:order-1">
              {JOB_CONFIGS.map((config) => {
                const job = t.experience.getJob(config.id);
                return (
                  <Card
                    key={config.id}
                    className={`cursor-pointer transition-all duration-300 hover:scale-105 relative ${
                      selectedExperience === config.id
                        ? "card-glow border-primary/50 bg-primary/5"
                        : "card-glow hover:border-primary/30"
                    }`}
                    onClick={() => handleExperienceSelect(config.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div
                            className={`w-4 h-4 rounded-full mt-1 ${
                              config.type === "current"
                                ? "bg-green-500 animate-pulse"
                                : config.type === "full-time"
                                ? "bg-primary"
                                : "bg-primary-glow"
                            }`}
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-foreground mb-1">
                            {job.title()}
                          </h3>
                          <p className="text-primary font-medium mb-2">
                            {job.company()}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <CalendarIcon className="w-4 h-4" />
                            {job.period()}
                          </div>
                        </div>
                      </div>
                      {/* External link icon */}
                      {config.website && (
                        <a
                          href={config.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="absolute top-4 right-4 text-black dark:text-white hover:text-primary transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                        </a>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Experience Details */}
            <div className="lg:col-span-8 order-1 lg:order-2">
              {selectedConfig && selectedJob && (
                <Card className="card-glow animate-fade-in-up">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Header with Logo */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-start gap-4">
                          {/* Company Logo */}
                          {selectedConfig.logo && (
                            <div className="flex-shrink-0">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-xl border-2 border-gray-200 p-2 flex items-center justify-center shadow-sm">
                                <img
                                  src={selectedConfig.logo}
                                  alt={`${selectedJob.company()} logo`}
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
                                {selectedJob.title()}
                              </h3>
                              <Badge
                                variant={
                                  selectedConfig.type === "current"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {selectedConfig.type === "current"
                                  ? t.experience.badges.current()
                                  : t.experience.badges.completed()}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <BuildingOffice2Icon className="w-5 h-5" />
                              <span className="font-medium">
                                {selectedJob.company()}
                              </span>
                              <span>•</span>
                              <span>{selectedJob.location()}</span>
                              {selectedConfig.website && (
                                <>
                                  <span className="hidden sm:inline">•</span>
                                  <a
                                    href={selectedConfig.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary hover:text-primary-glow link-animated hidden sm:inline"
                                  >
                                    {t.experience.visitWebsite()}
                                  </a>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedJob.description()}
                      </p>

                      {/* Metrics */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {selectedJob.metrics().map((metricLabel, index) => {
                          const MetricIcon = selectedConfig.metricIcons[index];
                          return (
                            <div
                              key={index}
                              className="bg-muted/30 rounded-xl p-4 text-center"
                            >
                              <MetricIcon className="w-6 h-6 mx-auto mb-2 text-primary" />
                              <div className="text-2xl font-bold text-foreground">
                                {selectedConfig.metricValues[index]}
                              </div>
                              <div className="text-sm text-muted-foreground">
                                {metricLabel}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Achievements - Desktop */}
                      <div className="hidden md:block space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          {t.experience.achievements()}
                        </h4>
                        <ul className="space-y-2">
                          {selectedJob
                            .achievements()
                            .map((achievement, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground">
                                  {achievement}
                                </span>
                              </li>
                            ))}
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
                            {t.experience.achievements()}
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
                              {selectedJob
                                .achievements()
                                .map((achievement, index) => (
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
                                ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="space-y-3">
                        <h4 className="text-lg font-semibold text-foreground">
                          {t.experience.technologies()}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedConfig.technologies.map((tech, index) => (
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
                    {selectedConfig.website && (
                      <a
                        href={selectedConfig.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-6 right-6 text-black dark:text-white hover:text-primary transition-colors duration-200 sm:hidden"
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
            {FREELANCE_CONFIGS.map((config) => {
              const project = t.experience.getFreelance(config.id);
              return (
                <Card
                  key={config.id}
                  className="card-glow hover:scale-105 transition-all duration-300 relative"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-foreground">
                      {project.title()}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description()}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {config.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {config.website !== "#" && (
                      <a
                        href={config.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-glow link-animated text-sm font-medium"
                      >
                        {t.experience.viewProject()} →
                      </a>
                    )}
                    {/* External link icon */}
                    {config.website !== "#" && (
                      <a
                        href={config.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 text-black dark:text-white hover:text-primary transition-colors duration-200"
                      >
                        <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                      </a>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
