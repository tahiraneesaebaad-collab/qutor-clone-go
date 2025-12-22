import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, Users, Clock, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import courseNoraniQaida from "@/assets/course-norani-qaida.png";
import courseRecitation from "@/assets/course-recitation.png";
import courseArabic from "@/assets/course-arabic.png";
import courseHifz from "@/assets/course-hifz.png";
import courseTajweed from "@/assets/course-tajweed.png";

const courses = [
  {
    id: "norani-qaida",
    title: "Noorani Qaida",
    subtitle: "Foundation for Quran Reading",
    description: "The Noorani Qaida is the essential first step in learning to read the Holy Quran. This foundational course teaches Arabic alphabets, pronunciation, and basic reading skills in a structured, easy-to-follow manner. Perfect for complete beginners, children, and adults who want to start their Quran learning journey.",
    image: courseNoraniQaida,
    features: [
      "Arabic alphabet recognition & pronunciation",
      "Letter joining and word formation",
      "Harakat (diacritical marks) mastery",
      "Basic Tajweed introduction",
      "Progressive lesson structure",
      "Interactive learning activities",
    ],
    duration: "2-4 months",
    level: "Beginner",
    popular: true,
    stats: {
      students: "5,000+",
      rating: "4.9",
      completion: "95%"
    }
  },
  {
    id: "recitation",
    title: "Quran Recitation",
    subtitle: "Fluent Quran Reading",
    description: "Master the art of fluent Quran recitation with our comprehensive course. After completing Noorani Qaida, this course will help you read the Quran smoothly and beautifully. Our expert tutors guide you through verse-by-verse reading with proper pronunciation.",
    image: courseRecitation,
    features: [
      "Post-Qaida fluency development",
      "Verse-by-verse guided reading",
      "Pronunciation correction",
      "Reading speed improvement",
      "Quran completion program",
      "Regular progress assessments",
    ],
    duration: "6-12 months",
    level: "Beginner to Intermediate",
    stats: {
      students: "8,000+",
      rating: "4.8",
      completion: "92%"
    }
  },
  {
    id: "arabic",
    title: "Arabic Language",
    subtitle: "Quranic & Modern Arabic",
    description: "Master the Arabic language to understand the Quran in its original form. Our comprehensive curriculum covers both Quranic Arabic for understanding the Holy Book and conversational Arabic for everyday communication.",
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
    stats: {
      students: "3,000+",
      rating: "4.7",
      completion: "88%"
    }
  },
  {
    id: "hifz",
    title: "Hifz (Memorization)",
    subtitle: "Complete Quran Memorization",
    description: "Memorize the Holy Quran with expert guidance. Our structured Hifz program uses proven memorization techniques combined with daily revision schedules. Suitable for students who have completed basic Quran reading.",
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
    level: "Intermediate to Advanced",
    stats: {
      students: "2,000+",
      rating: "4.9",
      completion: "85%"
    }
  },
  {
    id: "tajweed",
    title: "Tajweed Rules",
    subtitle: "Perfect Your Recitation",
    description: "Perfect your Quran recitation with proper Tajweed rules. Learn the science of pronunciation, articulation points (Makhaarij), and characteristics (Sifaat) of Arabic letters to recite the Quran as it was revealed.",
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
    stats: {
      students: "4,000+",
      rating: "4.8",
      completion: "90%"
    }
  },
];

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>Online Quran Courses | Noorani Qaida, Tajweed, Hifz, Arabic | QuranAcademy</title>
        <meta name="description" content="Explore our online Quran courses: Noorani Qaida, Quran Recitation, Tajweed, Hifz (Memorization), and Arabic Language. Expert certified tutors, flexible timing, all ages welcome. Start your free trial today!" />
        <meta name="keywords" content="quran courses online, noorani qaida course, tajweed course online, hifz program, arabic course online, online quran classes, quran for kids, quran for beginners, learn quran at home" />
        <link rel="canonical" href="https://quranacademy.com/courses" />
        <meta property="og:title" content="Online Quran Courses | Noorani Qaida, Tajweed, Hifz | QuranAcademy" />
        <meta property="og:description" content="Join 10,000+ students learning Quran online. Noorani Qaida, Tajweed, Hifz, Arabic courses with certified tutors." />
        <meta property="og:url" content="https://quranacademy.com/courses" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Online Quran Courses",
            "description": "Comprehensive online Quran courses for all levels",
            "itemListElement": courses.map((course, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "Course",
                "name": course.title,
                "description": course.description,
                "provider": {
                  "@type": "Organization",
                  "name": "QuranAcademy"
                }
              }
            }))
          })}
        </script>
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <span className="inline-block px-4 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
              🌟 Trusted by 10,000+ Students Worldwide
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Online Quran Courses
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Learn Quran from the comfort of your home with certified tutors. 
              From Noorani Qaida for beginners to advanced Hifz programs - we have courses for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {courses.map((course, index) => (
                <article
                  key={course.id}
                  id={course.id}
                  className="scroll-mt-24"
                >
                  <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}>
                    {/* Image */}
                    <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                      <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-12 flex items-center justify-center relative">
                        {course.popular && (
                          <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-accent-foreground text-sm font-bold rounded-full animate-pulse flex items-center gap-1">
                            🔥 Most Popular
                          </div>
                        )}
                        <img
                          src={course.image}
                          alt={`${course.title} - Online Quran Course at QuranAcademy`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                          {course.level}
                        </span>
                        <span className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {course.duration}
                        </span>
                      </div>

                      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-2">
                        {course.title}
                      </h2>
                      <p className="text-lg text-primary font-medium mb-4">
                        {course.subtitle}
                      </p>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {course.description}
                      </p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-6 mb-6 py-4 border-y border-border">
                        <div className="flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{course.stats.students}</span>
                          <span className="text-muted-foreground">Students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-accent fill-accent" />
                          <span className="font-semibold">{course.stats.rating}</span>
                          <span className="text-muted-foreground">Rating</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          <span className="font-semibold">{course.stats.completion}</span>
                          <span className="text-muted-foreground">Completion</span>
                        </div>
                      </div>

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
