import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-devices.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-primary-foreground">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Learn Quran Online
            </h1>
            <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
              Your rate, Your time, Your choice.
            </p>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg animate-fade-in" style={{ animationDelay: "200ms" }}>
              Online Quran classes for Tajweed, Hifz, and Arabic. Learn from expert tutors 
              at your own pace with personalized one-on-one lessons.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                  Try Free Lesson
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#how-it-works">
                  <Play className="w-5 h-5" />
                  How It Works
                </a>
              </Button>
            </div>

            <p className="text-sm text-primary-foreground/60 mt-4 animate-fade-in" style={{ animationDelay: "400ms" }}>
              No credit card required • 30 min free trial
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in" style={{ animationDelay: "300ms" }}>
            <div className="relative z-10 animate-float">
              <img
                src={heroImage}
                alt="Learn Quran online on laptop and tablet"
                className="w-full max-w-xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary-foreground/10 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
