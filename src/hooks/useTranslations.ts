import { useLanguage } from "@/contexts/LanguageContext";

// Type-safe translation hook with autocomplete
export const useTranslations = () => {
  const { t } = useLanguage();

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
      metrics: () => t("experience.metrics"),
      technologies: () => t("experience.technologies"),
      jobs: {
        ellamau: {
          title: () => t("experience.jobs.ellamau.title"),
          company: () => t("experience.jobs.ellamau.company"),
          location: () => t("experience.jobs.ellamau.location"),
          period: () => t("experience.jobs.ellamau.period"),
          description: () => t("experience.jobs.ellamau.description"),
          achievements: () =>
            t("experience.jobs.ellamau.achievements", {
              returnObjects: true,
            }) as unknown as string[],
          metrics: {
            salesIncrease: () =>
              t("experience.jobs.ellamau.metrics.salesIncrease"),
            timeline: () => t("experience.jobs.ellamau.metrics.timeline"),
            teamSize: () => t("experience.jobs.ellamau.metrics.teamSize"),
          },
        },
        rh: {
          title: () => t("experience.jobs.rh.title"),
          company: () => t("experience.jobs.rh.company"),
          location: () => t("experience.jobs.rh.location"),
          period: () => t("experience.jobs.rh.period"),
          description: () => t("experience.jobs.rh.description"),
          achievements: () =>
            t("experience.jobs.rh.achievements", {
              returnObjects: true,
            }) as unknown as string[],
          metrics: {
            costReduction: () => t("experience.jobs.rh.metrics.costReduction"),
            componentsBuilt: () =>
              t("experience.jobs.rh.metrics.componentsBuilt"),
            teamMembers: () => t("experience.jobs.rh.metrics.teamMembers"),
          },
        },
        orthofix: {
          title: () => t("experience.jobs.orthofix.title"),
          company: () => t("experience.jobs.orthofix.company"),
          location: () => t("experience.jobs.orthofix.location"),
          period: () => t("experience.jobs.orthofix.period"),
          description: () => t("experience.jobs.orthofix.description"),
          achievements: () =>
            t("experience.jobs.orthofix.achievements", {
              returnObjects: true,
            }) as unknown as string[],
          metrics: {
            patientsProcessed: () =>
              t("experience.jobs.orthofix.metrics.patientsProcessed"),
            systemUptime: () =>
              t("experience.jobs.orthofix.metrics.systemUptime"),
            processingTime: () =>
              t("experience.jobs.orthofix.metrics.processingTime"),
          },
        },
        ibox: {
          title: () => t("experience.jobs.ibox.title"),
          company: () => t("experience.jobs.ibox.company"),
          location: () => t("experience.jobs.ibox.location"),
          period: () => t("experience.jobs.ibox.period"),
          description: () => t("experience.jobs.ibox.description"),
          achievements: () =>
            t("experience.jobs.ibox.achievements", {
              returnObjects: true,
            }) as unknown as string[],
          metrics: {
            websiteTraffic: () =>
              t("experience.jobs.ibox.metrics.websiteTraffic"),
            leadGeneration: () =>
              t("experience.jobs.ibox.metrics.leadGeneration"),
            pageLoadTime: () => t("experience.jobs.ibox.metrics.pageLoadTime"),
          },
        },
      },
      freelance: {
        drHugo: {
          title: () => t("experience.freelance.drHugo.title"),
          description: () => t("experience.freelance.drHugo.description"),
        },
        sebastian: {
          title: () => t("experience.freelance.sebastian.title"),
          description: () => t("experience.freelance.sebastian.description"),
        },
        pagui: {
          title: () => t("experience.freelance.pagui.title"),
          description: () => t("experience.freelance.pagui.description"),
        },
        wordle: {
          title: () => t("experience.freelance.wordle.title"),
          description: () => t("experience.freelance.wordle.description"),
        },
      },
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
