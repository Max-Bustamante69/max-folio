import { useLanguage } from "@/contexts/LanguageContext";

// Type definitions for job and freelance translations
export interface JobTranslations {
  title: () => string;
  company: () => string;
  location: () => string;
  period: () => string;
  description: () => string;
  achievements: () => string[];
  metrics: () => string[];
}

export interface FreelanceTranslations {
  title: () => string;
  description: () => string;
}

// Type-safe translation hook with autocomplete
export const useTranslations = () => {
  const { t } = useLanguage();

  // Dynamic job translation getter - works for any job ID
  const getJob = (jobId: string): JobTranslations => ({
    title: () => t(`experience.jobs.${jobId}.title`),
    company: () => t(`experience.jobs.${jobId}.company`),
    location: () => t(`experience.jobs.${jobId}.location`),
    period: () => t(`experience.jobs.${jobId}.period`),
    description: () => t(`experience.jobs.${jobId}.description`),
    achievements: () =>
      t(`experience.jobs.${jobId}.achievements`, {
        returnObjects: true,
      }) as unknown as string[],
    metrics: () =>
      t(`experience.jobs.${jobId}.metrics`, {
        returnObjects: true,
      }) as unknown as string[],
  });

  // Dynamic freelance translation getter - works for any project ID
  const getFreelance = (projectId: string): FreelanceTranslations => ({
    title: () => t(`experience.freelance.${projectId}.title`),
    description: () => t(`experience.freelance.${projectId}.description`),
  });

  return {
    // Navigation
    nav: {
      home: () => t("nav.home"),
      experience: () => t("nav.experience"),
      skills: () => t("nav.skills"),
      contact: () => t("nav.contact"),
    },

    // Hero section
    hero: {
      greeting: () => t("hero.greeting"),
      name: () => t("hero.name"),
      title: () => t("hero.title"),
      description: () => t("hero.description"),
      currentFocus: () => t("hero.currentFocus"),
      focusItems: {
        leadDeveloper: () => t("hero.focusItems.leadDeveloper"),
        ecommerce: () => t("hero.focusItems.ecommerce"),
        freelance: () => t("hero.focusItems.freelance"),
      },
      buttons: {
        getInTouch: () => t("hero.buttons.getInTouch"),
        downloadCV: () => t("hero.buttons.downloadCV"),
      },
    },

    // Experience section
    experience: {
      title: () => t("experience.title"),
      subtitle: () => t("experience.subtitle"),
      tabs: {
        work: () => t("experience.tabs.work"),
        freelance: () => t("experience.tabs.freelance"),
      },
      badges: {
        current: () => t("experience.badges.current"),
        completed: () => t("experience.badges.completed"),
      },
      visitWebsite: () => t("experience.visitWebsite"),
      viewProject: () => t("experience.viewProject"),
      achievements: () => t("experience.achievements"),
      technologies: () => t("experience.technologies"),
      // Dynamic getters for any job/freelance project
      getJob,
      getFreelance,
    },

    // Skills section
    skills: {
      title: () => t("skills.title"),
      subtitle: () => t("skills.subtitle"),
      additionalTitle: () => t("skills.additionalTitle"),
      additionalSubtitle: () => t("skills.additionalSubtitle"),
      levels: {
        expert: () => t("skills.levels.expert"),
        advanced: () => t("skills.levels.advanced"),
        intermediate: () => t("skills.levels.intermediate"),
        beginner: () => t("skills.levels.beginner"),
      },
      categories: {
        frontend: () => t("skills.categories.frontend"),
        backend: () => t("skills.categories.backend"),
        database: () => t("skills.categories.database"),
        tools: () => t("skills.categories.tools"),
        languages: () => t("skills.categories.languages"),
      },
      descriptions: {
        react: () => t("skills.descriptions.react"),
        javascript: () => t("skills.descriptions.javascript"),
        nextjs: () => t("skills.descriptions.nextjs"),
        typescript: () => t("skills.descriptions.typescript"),
        tailwind: () => t("skills.descriptions.tailwind"),
        python: () => t("skills.descriptions.python"),
        mongodb: () => t("skills.descriptions.mongodb"),
        html: () => t("skills.descriptions.html"),
        css: () => t("skills.descriptions.css"),
      },
    },

    // Contact section
    contact: {
      title: () => t("contact.title"),
      subtitle: () => t("contact.subtitle"),
      description: () => t("contact.description"),
      form: {
        title: () => t("contact.form.title"),
        fullName: () => t("contact.form.fullName"),
        fullNamePlaceholder: () => t("contact.form.fullNamePlaceholder"),
        email: () => t("contact.form.email"),
        emailPlaceholder: () => t("contact.form.emailPlaceholder"),
        subject: () => t("contact.form.subject"),
        subjectPlaceholder: () => t("contact.form.subjectPlaceholder"),
        message: () => t("contact.form.message"),
        messagePlaceholder: () => t("contact.form.messagePlaceholder"),
        sendMessage: () => t("contact.form.sendMessage"),
        sending: () => t("contact.form.sending"),
      },
      availability: () => t("contact.availability"),
      availabilityDescription: () => t("contact.availabilityDescription"),
      getInTouch: () => t("contact.getInTouch"),
      info: {
        email: () => t("contact.info.email"),
        phone: () => t("contact.info.phone"),
        location: () => t("contact.info.location"),
      },
      quickHire: {
        title: () => t("contact.quickHire.title"),
        description: () => t("contact.quickHire.description"),
        button: () => t("contact.quickHire.button"),
      },
      toasts: {
        success: {
          title: () => t("contact.toasts.success.title"),
          description: () => t("contact.toasts.success.description"),
        },
        error: {
          title: () => t("contact.toasts.error.title"),
          description: () => t("contact.toasts.error.description"),
        },
      },
    },

    // Footer section
    footer: {
      name: () => t("footer.name"),
      title: () => t("footer.title"),
      description: () => t("footer.description"),
      whatIDo: () => t("footer.whatIDo"),
      services: () =>
        t("footer.services", { returnObjects: true }) as unknown as string[],
      quickLinks: () => t("footer.quickLinks"),
      getInTouch: () => t("footer.getInTouch"),
      copyright: () => t("footer.copyright"),
    },

    // Not Found page
    notFound: {
      title: () => t("notFound.title"),
      message: () => t("notFound.message"),
      button: () => t("notFound.button"),
    },
  };
};
