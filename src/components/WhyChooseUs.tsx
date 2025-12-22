import { Check, Shield, Clock, Users, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Tutors",
    description: "Learn from certified Quran teachers with years of experience in online education.",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose your preferred time slots. Learn at your own pace, anytime, anywhere.",
  },
  {
    icon: Headphones,
    title: "One-on-One Classes",
    description: "Personalized attention with individual sessions tailored to your learning needs.",
  },
  {
    icon: Shield,
    title: "Safe Learning",
    description: "Secure online platform with verified tutors for a safe learning environment.",
  },
  {
    icon: Award,
    title: "Certification",
    description: "Receive certificates upon course completion and Ijazah for Hifz students.",
  },
  {
    icon: Check,
    title: "Free Trial",
    description: "Try before you commit with a free 30-minute trial lesson. No obligations.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We provide the best online Quran learning experience with qualified tutors 
            and a student-centered approach.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
