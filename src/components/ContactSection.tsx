import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
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
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description:
          "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "maxbustamanteg@gmail.com",
      href: "mailto:maxbustamanteg@gmail.com",
    },
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+57 3195940522",
      href: "tel:+57 3195940522",
    },
    {
      icon: MapPinIcon,
      label: "Location",
      value: "Medellín, Colombia",
      href: "https://maps.google.com/?q=Medellin,Colombia",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <div className="space-y-4">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life with cutting-edge technology and
              exceptional user experiences? Let's build something amazing
              together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Contact Form + Availability */}
          <div className="lg:col-span-8 flex flex-col gap-8 h-full">
            {/* Contact Form (2/3 height) */}
            <div className="flex-1 flex flex-col">
              <Card className="card-glow flex-1 flex flex-col">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-8">
                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      Send me a message
                    </h3>
                    <p className="text-muted-foreground">
                      I'd love to hear about your project. Fill out the form
                      below and I'll get back to you within 24 hours.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-6 flex-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                            className="h-12"
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
                            className="h-12"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 mt-6">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="What's this about?"
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2 mt-6">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          placeholder="Tell me about your project, timeline, and budget..."
                          className="min-h-[120px] resize-none"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full md:w-auto btn-hero group mt-6"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <>
                          <PaperAirplaneIcon className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                          Send Message
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
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="font-semibold text-xl  text-foreground">
                      Available for work
                    </span>
                  </div>
                  <p className=" text-muted-foreground">
                    Currently accepting new projects for Q1 2025. Typical
                    response time: 2-6 hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column: Get in touch & Quick Hire */}
          <div className="lg:col-span-4 flex flex-col gap-8 h-full">
            {/* Contact Information */}
            <Card className="card-glow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-6 text-foreground">
                  Get in touch
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors duration-200 group"
                    >
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground mb-1">
                          {item.label}
                        </div>
                        <div className="text-muted-foreground">
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
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                  <EnvelopeIcon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  Ready to start?
                </h3>
                <p className="text-muted-foreground mb-6 text-sm">
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
