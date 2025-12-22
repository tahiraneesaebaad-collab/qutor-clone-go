import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import courseRecitation from "@/assets/course-recitation.png";
import courseArabic from "@/assets/course-arabic.png";
import courseHifz from "@/assets/course-hifz.png";
import courseTajweed from "@/assets/course-tajweed.png";

const courses = [
  {
    id: "recitation",
    title: "Quran Recitation",
    subtitle: "Noorani Qaida & Basic Reading",
    description: "Learn to read the Quran with proper pronunciation. Starting from Noorani Qaida, you'll progress to fluent Quran recitation with our step-by-step approach.",
    image: courseRecitation,
    features: [
      "Arabic alphabet recognition",
      "Noorani Qaida fundamentals",
      "Word formation and joining letters",
      "Fluent reading practice",
      "Verse-by-verse recitation",
      "Pronunciation correction",
    ],
    duration: "3-6 months",
    level: "Beginner",
  },
  {
    id: "arabic",
    title: "Arabic Language",
    subtitle: "Quranic & Modern Arabic",
    description: "Master the Arabic language to understand the Quran in its original form. Our comprehensive curriculum covers both Quranic and conversational Arabic.",
    image: courseArabic,
    features: [
      "Arabic alphabet mastery",
      "Grammar (Nahw & Sarf)",
      "Vocabulary building",
      "Quranic Arabic understanding",
      "Conversational skills",
      "Writing practice",
    ],
    duration: "6-12 months",
    level: "All Levels",
  },
  {
    id: "hifz",
    title: "Hifz (Memorization)",
    subtitle: "Complete Quran Memorization",
    description: "Memorize the Holy Quran with expert guidance. Our structured program uses proven memorization techniques with daily revision and progress tracking.",
    image: courseHifz,
    features: [
      "Personalized memorization plan",
      "Daily new lesson + revision",
      "Proven memory techniques",
      "Regular progress assessment",
      "Ijazah upon completion",
      "Lifetime revision support",
    ],
    duration: "2-4 years",
    level: "Intermediate",
  },
  {
    id: "tajweed",
    title: "Tajweed Rules",
    subtitle: "Perfect Your Recitation",
    description: "Perfect your Quran recitation with proper Tajweed rules. Learn the science of pronunciation, articulation points, and characteristics of Arabic letters.",
    image: courseTajweed,
    features: [
      "Makhaarij (articulation points)",
      "Sifaat (letter characteristics)",
      "Rules of Noon and Meem",
      "Madd (elongation rules)",
      "Waqf (stopping rules)",
      "Practical application",
    ],
    duration: "4-8 months",
    level: "All Levels",
  },
];

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Our Quran Courses | Online Tajweed, Hifz, Arabic Classes</title>
        <meta name="description" content="Explore our online Quran courses: Recitation, Tajweed, Hifz (Memorization), and Arabic Language. Expert tutors, flexible timing, all ages." />
        <meta name="keywords" content="quran courses online, tajweed course, hifz program, arabic course, noorani qaida, quran recitation class" />
        <link rel="canonical" href="https://quranlearn.com/courses" />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Online Quran Courses
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Comprehensive courses designed for learners of all ages and levels. 
              Start your Quran learning journey today with expert guidance.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {courses.map((course, index) => (
                <article
                  key={course.id}
                  id={course.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                    <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 flex items-center justify-center">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {course.level}
                      </span>
                      <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium">
                        {course.duration}
                      </span>
                    </div>

                    <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
                      {course.title}
                    </h2>
                    <p className="text-lg text-primary font-medium mb-4">
                      {course.subtitle}
                    </p>
                    <p className="text-muted-foreground mb-6">
                      {course.description}
                    </p>

                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {course.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-foreground">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-4">
                      <Button size="lg" asChild>
                        <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                          Start Free Trial
                          <ArrowRight className="w-5 h-5" />
                        </a>
                      </Button>
                      <Button variant="outline" size="lg" asChild>
                        <Link to="/pricing">View Pricing</Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Courses;
