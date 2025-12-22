import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import courseRecitation from "@/assets/course-recitation.png";
import courseArabic from "@/assets/course-arabic.png";
import courseHifz from "@/assets/course-hifz.png";
import courseTajweed from "@/assets/course-tajweed.png";

const courses = [
  {
    id: "recitation",
    title: "Quran Recitation",
    description: "Learn to read Quran with proper pronunciation starting from Noorani Qaida to fluent recitation.",
    image: courseRecitation,
    features: ["Noorani Qaida", "Letter Recognition", "Word Formation", "Fluent Reading"],
  },
  {
    id: "arabic",
    title: "Arabic Language",
    description: "Master the Arabic language to understand the Quran in its original form.",
    image: courseArabic,
    features: ["Arabic Alphabet", "Grammar Rules", "Vocabulary", "Conversation"],
  },
  {
    id: "hifz",
    title: "Hifz (Memorization)",
    description: "Memorize the Holy Quran with expert guidance and proven memorization techniques.",
    image: courseHifz,
    features: ["Memorization Techniques", "Daily Revision", "Progress Tracking", "Ijazah Program"],
  },
  {
    id: "tajweed",
    title: "Tajweed Rules",
    description: "Perfect your Quran recitation with proper Tajweed rules and pronunciation.",
    image: courseTajweed,
    features: ["Pronunciation Rules", "Makhraj", "Sifaat", "Practical Application"],
  },
];

const CoursesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Quran Courses
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive courses designed for learners of all ages and levels. 
            From beginners to advanced students.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              to={`/courses/${course.id}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="aspect-square p-6 bg-gradient-to-br from-primary/5 to-accent/5 flex items-center justify-center">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-4/5 h-4/5 object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
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
