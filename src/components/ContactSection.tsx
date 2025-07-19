import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useTranslations } from "@/hooks/useLanguage";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import emailjs from "@emailjs/browser";

// Vite exposes env variables via import.meta.env
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const t = useTranslations();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          time: new Date().toLocaleString(),
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast({
        title: t.contact.toasts.success.title(),
        description: t.contact.toasts.success.description(),
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: t.contact.toasts.error.title(),
        description: t.contact.toasts.error.description(),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: t.contact.info.email(),
      value: "maxbustamanteg@gmail.com",
      href: "mailto:maxbustamanteg@gmail.com",
    },
    {
      icon: PhoneIcon,
      label: t.contact.info.phone(),
      value: "+57 3195940522",
      href: "tel:+57 3195940522",
    },
    {
      icon: MapPinIcon,
      label: t.contact.info.location(),
      value: "Medellín, Colombia",
      href: "https://maps.google.com/?q=Medellin,Colombia",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            {t.contact.title().split(" ").slice(0, -1).join(" ")}{" "}
            <span className="gradient-text">
              {t.contact.title().split(" ").slice(-1)}
            </span>
          </h2>
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
              {t.contact.subtitle()}
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Column: Contact Form + Availability */}
          <div className="lg:col-span-8 flex flex-col gap-6 sm:gap-8 h-full">
            {/* Contact Form (2/3 height) */}
            <div className="flex-1 flex flex-col">
              <Card className="card-glow flex-1 flex flex-col">
                <CardContent className="p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-foreground">
                      Send me a message
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {t.contact.description()}
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            {t.contact.form.fullName()}
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder={t.contact.form.fullNamePlaceholder()}
                            className="h-10 sm:h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                            className="h-10 sm:h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 mt-4 sm:mt-6">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What's this about?"
                          className="h-10 sm:h-12"
                        />
                      </div>

                      <div className="space-y-2 mt-4 sm:mt-6">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell me about your project, timeline, and budget..."
                          className="min-h-[100px] sm:min-h-[120px] resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto btn-hero group mt-4 sm:mt-6"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          {t.contact.form.sending()}
                        </div>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          {t.contact.form.sendMessage()}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            {/* Availability Status (1/3 height) */}
            <div className="flex-shrink-0">
              <Card className="card-glow h-full">
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3 mb-2 sm:mb-3">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-lg sm:text-xl text-foreground">
                      Available for work
                    </span>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    Currently accepting new projects for Q1 2025. Typical
                    response time: 2-6 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Get in touch & Quick Hire */}
          <div className="lg:col-span-4 flex flex-col gap-6 sm:gap-8 h-full">
            {/* Contact Information */}
            <Card className="card-glow">
              <CardContent className="p-4 sm:p-6 lg:p-8">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-foreground">
                  Get in touch
                </h3>
                <div className="space-y-4 sm:space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors flex-shrink-0">
                        <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="font-medium text-foreground mb-1 text-sm sm:text-base">
                          {item.label}
                        </div>
                        <div className="text-muted-foreground text-sm sm:text-base break-words">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Hire Card */}
            <Card className="card-glow bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/20">
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 animate-pulse-glow">
                  <EnvelopeIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-foreground">
                  Ready to start?
                </h3>
                <p className="text-muted-foreground mb-4 sm:mb-6 text-sm">
                  Available for freelance projects and full-time opportunities.
                  Let's discuss your next big idea.
                </p>
                <Button
                  onClick={() => window.open(contactInfo[0].href, "_blank")}
                  variant="outline"
                  className="w-full btn-hero-outline"
                >
                  Quick Email
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
