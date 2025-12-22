import { useEffect, useState, useRef } from "react";
import { Star } from "lucide-react";

interface StatItemProps {
  value: number;
  suffix?: string;
  label: string;
  delay?: number;
}

const StatItem = ({ value, suffix = "", label, delay = 0 }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-accent font-heading mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="text-muted-foreground font-medium uppercase tracking-wide text-sm">
        {label}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Rating */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-accent fill-accent" />
              ))}
            </div>
            <p className="text-primary font-medium">Rating 4.9 | 5000+ Reviews</p>
          </div>

          <StatItem value={50000} suffix="+" label="Registered Students" delay={100} />
          <StatItem value={1500} suffix="+" label="Expert Tutors" delay={200} />
          <StatItem value={400000} suffix="+" label="Online Classes" delay={300} />
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
