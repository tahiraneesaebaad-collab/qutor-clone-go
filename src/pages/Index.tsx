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
    "name": "QuranAcademy",
    "alternateName": "Quran Academy Online",
    "description": "The #1 Online Quran Academy. Learn Quran online with certified tutors. Offering Noorani Qaida, Tajweed, Hifz, Arabic, and Quran recitation courses for kids & adults worldwide.",
    "url": "https://quranacademy.com",
    "logo": "https://quranacademy.com/logo.png",
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
      "description": "Free 30-minute trial lesson - Learn Quran Online",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do online Quran classes work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our online Quran classes are conducted via Zoom or Skype. You'll have one-on-one sessions with a certified tutor at your preferred time. All you need is a device with internet connection."
        }
      },
      {
        "@type": "Question",
        "name": "What is Noorani Qaida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Noorani Qaida is the foundational course for learning to read the Quran. It teaches Arabic alphabets, pronunciation, and basic reading rules. It's perfect for complete beginners."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer a free trial?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a completely free 30-minute trial lesson with no obligation. This helps you experience our teaching method and meet your tutor before enrolling."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Learn Quran Online | #1 Online Quran Academy | QuranAcademy.com</title>
        <meta name="description" content="Learn Quran online from certified tutors. Online Quran classes for kids & adults - Noorani Qaida, Tajweed, Hifz, Arabic & Recitation. Free trial lesson. 24/7 flexible schedule. Join 10,000+ students worldwide!" />
        <meta name="keywords" content="learn quran online, online quran classes, quran tutor, tajweed classes, hifz online, arabic learning, quran recitation, islamic education, noorani qaida online, quran for kids, quran for beginners, online quran academy, quran memorization course" />
        <link rel="canonical" href="https://quranacademy.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Learn Quran Online | #1 Online Quran Academy | Free Trial" />
        <meta property="og:description" content="Join 10,000+ students learning Quran online. Noorani Qaida, Tajweed, Hifz, Arabic courses with certified tutors. Free trial available!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://quranacademy.com" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:site_name" content="QuranAcademy" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Learn Quran Online | #1 Online Quran Academy" />
        <meta name="twitter:description" content="Join 10,000+ students learning Quran online. Free trial lesson available!" />
        <meta name="twitter:image" content="/logo.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
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
