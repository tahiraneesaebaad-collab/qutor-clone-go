import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import HowItWorks from "@/components/HowItWorks";
import CoursesSection from "@/components/CoursesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "QuranLearn",
    "description": "Learn Quran online with expert tutors. Offering Tajweed, Hifz, Arabic, and Quran recitation courses for all ages.",
    "url": "https://quranlearn.com",
    "telephone": "+923334136071",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressCountry": "Pakistan"
    },
    "sameAs": [
      "https://wa.me/923334136071"
    ],
    "offers": {
      "@type": "Offer",
      "description": "Free 30-minute trial lesson",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <Helmet>
        <title>Learn Quran Online | Expert Tutors | QuranLearn</title>
        <meta name="description" content="Learn Quran online from certified tutors. Online Quran classes for Tajweed, Hifz, Arabic & Recitation. Free trial lesson. Flexible schedule. All ages welcome." />
        <meta name="keywords" content="learn quran online, online quran classes, quran tutor, tajweed classes, hifz online, arabic learning, quran recitation, islamic education" />
        <link rel="canonical" href="https://quranlearn.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Learn Quran Online | Expert Tutors | QuranLearn" />
        <meta property="og:description" content="Learn Quran online from certified tutors. Free trial lesson. Flexible schedule. All ages welcome." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quranlearn.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn Quran Online | QuranLearn" />
        <meta name="twitter:description" content="Learn Quran online from certified tutors. Free trial lesson available." />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <CoursesSection />
        <WhyChooseUs />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
