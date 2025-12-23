import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageCircle, ChevronDown, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwfC44ke5LZL9nnEoHZ5A0lO9h1s-DAAsPlHJYHAf3WfOhPd5OkvTZUA8f1sxTIN1tHVw/exec";

const countryCodes = [
  { code: "+1", country: "US/CA", flag: "🇺🇸" },
  { code: "+44", country: "UK", flag: "🇬🇧" },
  { code: "+92", country: "PK", flag: "🇵🇰" },
  { code: "+91", country: "IN", flag: "🇮🇳" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "SA", flag: "🇸🇦" },
  { code: "+965", country: "KW", flag: "🇰🇼" },
  { code: "+974", country: "QA", flag: "🇶🇦" },
  { code: "+973", country: "BH", flag: "🇧🇭" },
  { code: "+968", country: "OM", flag: "🇴🇲" },
  { code: "+60", country: "MY", flag: "🇲🇾" },
  { code: "+62", country: "ID", flag: "🇮🇩" },
  { code: "+880", country: "BD", flag: "🇧🇩" },
  { code: "+27", country: "ZA", flag: "🇿🇦" },
  { code: "+49", country: "DE", flag: "🇩🇪" },
  { code: "+33", country: "FR", flag: "🇫🇷" },
  { code: "+39", country: "IT", flag: "🇮🇹" },
  { code: "+34", country: "ES", flag: "🇪🇸" },
  { code: "+31", country: "NL", flag: "🇳🇱" },
  { code: "+61", country: "AU", flag: "🇦🇺" },
  { code: "+64", country: "NZ", flag: "🇳🇿" },
  { code: "+90", country: "TR", flag: "🇹🇷" },
  { code: "+20", country: "EG", flag: "🇪🇬" },
  { code: "+212", country: "MA", flag: "🇲🇦" },
  { code: "+234", country: "NG", flag: "🇳🇬" },
];

const studentCounts = [
  { value: "1", label: "1 Student" },
  { value: "2", label: "2 Students" },
  { value: "3", label: "3 Students" },
  { value: "4", label: "4 Students" },
  { value: "5+", label: "5+ Students" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    countryCode: "+92",
    whatsappNumber: "",
    numberOfStudents: "1",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountrySelect = (code: string) => {
    setFormData((prev) => ({ ...prev, countryCode: code }));
    setShowCountryDropdown(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate WhatsApp number (only digits)
    const cleanNumber = formData.whatsappNumber.replace(/\D/g, '');
    if (cleanNumber.length < 8 || cleanNumber.length > 15) {
      toast({
        title: "Invalid WhatsApp Number",
        description: "Please enter a valid WhatsApp number (8-15 digits)",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    const submissionData = {
      studentName: formData.studentName.trim(),
      email: formData.email.trim(),
      whatsappNumber: `${formData.countryCode}${cleanNumber}`,
      numberOfStudents: formData.numberOfStudents,
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
      source: "QuranAcademy Contact Form",
    };

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // Google Apps Script requires no-cors
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      // Since no-cors doesn't return readable response, we assume success
      toast({
        title: "Message Sent Successfully! ✅",
        description: "We'll contact you on WhatsApp soon. JazakAllah Khair!",
      });

      setFormData({
        studentName: "",
        email: "",
        countryCode: "+92",
        whatsappNumber: "",
        numberOfStudents: "1",
        message: "",
      });
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedCountry = countryCodes.find(c => c.code === formData.countryCode);

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
      content: "info@quranacademy.com",
      link: "mailto:info@quranacademy.com",
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
        <title>Contact Us | Get in Touch | QuranAcademy</title>
        <meta name="description" content="Contact QuranAcademy for online Quran classes. Reach us on WhatsApp +92 333 413 6071. Available 24/7 for your inquiries about Noorani Qaida, Tajweed, Hifz courses." />
        <meta name="keywords" content="contact quran tutor, quran classes inquiry, online quran teacher contact, quran academy contact" />
        <link rel="canonical" href="https://quranacademy.com/contact" />
        <meta property="og:title" content="Contact QuranAcademy | 24/7 Support" />
        <meta property="og:description" content="Get in touch for online Quran classes. WhatsApp: +92 333 413 6071" />
        <meta property="og:url" content="https://quranacademy.com/contact" />
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
                  We appreciate your interest in QuranAcademy. Whether you're looking to enroll, 
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

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Student Name */}
                    <div>
                      <label htmlFor="studentName" className="block text-sm font-medium text-foreground mb-2">
                        Student Name *
                      </label>
                      <Input
                        id="studentName"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Enter student's name"
                        required
                        className="bg-background"
                      />
                    </div>

                    {/* Email */}
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
                        className="bg-background"
                      />
                    </div>

                    {/* WhatsApp Number with Country Code */}
                    <div>
                      <label htmlFor="whatsappNumber" className="block text-sm font-medium text-foreground mb-2">
                        WhatsApp Number * <span className="text-muted-foreground text-xs">(We'll contact you here)</span>
                      </label>
                      <div className="flex gap-2">
                        {/* Country Code Selector */}
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                            className="flex items-center gap-1 h-10 px-3 rounded-md border border-input bg-background text-sm font-medium hover:bg-muted transition-colors min-w-[100px]"
                          >
                            <span className="text-lg">{selectedCountry?.flag}</span>
                            <span>{formData.countryCode}</span>
                            <ChevronDown className="w-4 h-4 text-muted-foreground" />
                          </button>
                          
                          {showCountryDropdown && (
                            <div className="absolute top-full left-0 mt-1 w-48 max-h-60 overflow-y-auto bg-background border border-border rounded-lg shadow-lg z-50">
                              {countryCodes.map((country) => (
                                <button
                                  key={country.code}
                                  type="button"
                                  onClick={() => handleCountrySelect(country.code)}
                                  className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-muted transition-colors ${
                                    formData.countryCode === country.code ? 'bg-primary/10 text-primary' : ''
                                  }`}
                                >
                                  <span className="text-lg">{country.flag}</span>
                                  <span>{country.country}</span>
                                  <span className="text-muted-foreground ml-auto">{country.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        
                        {/* Phone Number Input */}
                        <Input
                          id="whatsappNumber"
                          name="whatsappNumber"
                          type="tel"
                          value={formData.whatsappNumber}
                          onChange={handleChange}
                          placeholder="3334136071"
                          required
                          className="flex-1 bg-background"
                        />
                      </div>
                    </div>

                    {/* Number of Students */}
                    <div>
                      <label htmlFor="numberOfStudents" className="block text-sm font-medium text-foreground mb-2">
                        <Users className="w-4 h-4 inline mr-1" />
                        Number of Students *
                      </label>
                      <select
                        id="numberOfStudents"
                        name="numberOfStudents"
                        value={formData.numberOfStudents}
                        onChange={handleChange}
                        required
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      >
                        {studentCounts.map((count) => (
                          <option key={count.value} value={count.value}>
                            {count.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your learning goals, preferred schedule, or any questions..."
                        rows={4}
                        required
                        className="bg-background"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Sending...
                        </>
                      ) : (
                        "Send Message"
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Your information is secure and will only be used to contact you about Quran classes.
                    </p>
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
