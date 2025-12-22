import stepTutor from "@/assets/step-tutor.png";
import stepPlan from "@/assets/step-plan.png";
import stepLearn from "@/assets/step-learn.png";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Reach out via WhatsApp to discuss your learning goals and schedule a free trial lesson.",
    image: stepTutor,
  },
  {
    number: "02",
    title: "Select Your Plan",
    description: "Choose a learning plan that fits your schedule and budget. Flexible options for everyone.",
    image: stepPlan,
  },
  {
    number: "03",
    title: "Start Learning",
    description: "Begin your Quran learning journey with personalized one-on-one online classes.",
    image: stepLearn,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            3 Steps to Learn Quran Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Getting started is easy. Follow these simple steps to begin your Quran learning journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 left-full w-full h-0.5 bg-gradient-to-r from-primary/20 to-transparent -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 bg-card rounded-2xl p-8 text-center shadow-card transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg border border-border">
                {/* Step number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center font-heading">
                  {step.number}
                </div>

                {/* Image */}
                <div className="w-32 h-32 mx-auto mb-6 mt-4">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
