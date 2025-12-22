import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Start Your Quran Journey Today
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Join thousands of students learning Quran online. Get started with a free trial lesson 
          and discover the joy of Quran learning.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="hero" size="xl" asChild>
            <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5" />
              Contact on WhatsApp
            </a>
          </Button>
          <Button variant="heroOutline" size="xl" asChild>
            <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
              Try Free Lesson
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>

        <p className="text-primary-foreground/60 mt-6 text-sm">
          WhatsApp: +92 333 413 6071 • Available 24/7
        </p>
      </div>
    </section>
  );
};

export default CTASection;
