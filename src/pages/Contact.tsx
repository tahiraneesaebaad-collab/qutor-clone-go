import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission - in production, this would send to a backend
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll get back to you soon. You can also reach us on WhatsApp for faster response.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "+92 333 413 6071",
      link: "https://wa.me/923334136071",
      description: "Fastest response time",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@quranlearn.com",
      link: "mailto:info@quranlearn.com",
      description: "For detailed inquiries",
    },
    {
      icon: Clock,
      title: "Working Hours",
      content: "24/7 Available",
      description: "We're always here for you",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Karachi, Pakistan",
      description: "Serving students worldwide",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Get in Touch | QuranLearn</title>
        <meta name="description" content="Contact QuranLearn for online Quran classes. Reach us on WhatsApp +92 333 413 6071. Available 24/7 for your inquiries." />
        <meta name="keywords" content="contact quran tutor, quran classes inquiry, online quran teacher contact" />
        <link rel="canonical" href="https://quranlearn.com/contact" />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Have questions about our courses? We're here to help. 
              Reach out to us via WhatsApp for the fastest response.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                  Contact Information
                </h2>
                <p className="text-muted-foreground mb-8">
                  We appreciate your interest in QuranLearn. Whether you're looking to enroll, 
                  have questions about our courses, or need support, we're here to help.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.title}
                      className="bg-card rounded-xl p-6 border border-border hover:shadow-soft transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline font-medium"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{item.content}</p>
                      )}
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-8 p-6 bg-[#25D366]/10 rounded-xl border border-[#25D366]/30">
                  <h3 className="font-heading font-semibold text-foreground mb-2 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5 text-[#25D366]" />
                    Prefer WhatsApp?
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Get instant responses on WhatsApp. Click below to start a conversation.
                  </p>
                  <Button variant="whatsapp" size="lg" asChild>
                    <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5" />
                      Chat on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                  <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone / WhatsApp Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your learning goals..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Contact;
