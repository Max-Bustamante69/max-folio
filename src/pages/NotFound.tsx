import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { useTranslations } from "@/hooks/useTranslations";

const NotFoundContent = () => {
  const location = useLocation();
  const t = useTranslations();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          {t.notFound.title()}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
          {t.notFound.message()}
        </p>
        <a
          href="/"
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 underline"
        >
          {t.notFound.button()}
        </a>
      </div>
    </div>
  );
};

const NotFound = () => {
  return (
    <LanguageProvider>
      <ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">
        <NotFoundContent />
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default NotFound;
