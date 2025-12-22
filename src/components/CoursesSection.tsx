import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import courseNoraniQaida from "@/assets/course-norani-qaida.png";
import courseRecitation from "@/assets/course-recitation.png";
import courseArabic from "@/assets/course-arabic.png";
import courseHifz from "@/assets/course-hifz.png";
import courseTajweed from "@/assets/course-tajweed.png";

const courses = [
  {
    id: "norani-qaida",
    title: "Noorani Qaida",
    description: "The perfect foundation course for beginners. Learn Arabic alphabet, pronunciation, and basic Quran reading skills.",
    image: courseNoraniQaida,
    features: ["Arabic Alphabet", "Letter Pronunciation", "Word Formation", "Basic Rules"],
    viral: true,
  },
  {
    id: "recitation",
    title: "Quran Recitation",
    description: "Learn to read Quran with proper pronunciation and fluency through personalized one-on-one sessions.",
    image: courseRecitation,
    features: ["Fluent Reading", "Pronunciation", "Word Recognition", "Daily Practice"],
  },
  {
    id: "arabic",
    title: "Arabic Language",
    description: "Master the Arabic language to understand the Quran in its original form and communicate fluently.",
    image: courseArabic,
    features: ["Arabic Grammar", "Vocabulary", "Conversation", "Quranic Arabic"],
  },
  {
    id: "hifz",
    title: "Hifz (Memorization)",
    description: "Memorize the Holy Quran with expert guidance and proven memorization techniques.",
    image: courseHifz,
    features: ["Memory Techniques", "Daily Revision", "Progress Tracking", "Ijazah"],
  },
  {
    id: "tajweed",
    title: "Tajweed Rules",
    description: "Perfect your Quran recitation with proper Tajweed rules and pronunciation techniques.",
    image: courseTajweed,
    features: ["Makhaarij", "Sifaat", "Madd Rules", "Practical Application"],
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-secondary" id="courses">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            🌟 Popular Courses
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Online Quran Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive courses designed for learners of all ages and levels. 
            Join 10,000+ students worldwide learning Quran online.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              to={`/courses#${course.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {course.viral && (
                <div className="absolute top-3 right-3 z-10 px-2 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full animate-pulse">
                  🔥 Popular
                </div>
              )}
              {/* Image */}
              <div className="aspect-square p-4 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <img
                  src={course.image}
                  alt={`${course.title} - Online Quran Course`}
                  className="w-4/5 h-4/5 object-contain transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center text-primary font-medium text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link to="/courses">
              View All Courses
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
