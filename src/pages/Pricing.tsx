import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Check, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import FAQSection from "@/components/FAQSection";

const plans = [
  {
    name: "Basic",
    sessions: "4 Sessions/Month",
    duration: "30 min each",
    price: 25,
    features: [
      "4 one-on-one sessions",
      "30 minutes per session",
      "Flexible scheduling",
      "Progress reports",
      "WhatsApp support",
    ],
    popular: false,
  },
  {
    name: "Standard",
    sessions: "8 Sessions/Month",
    duration: "30 min each",
    price: 45,
    features: [
      "8 one-on-one sessions",
      "30 minutes per session",
      "Flexible scheduling",
      "Weekly progress reports",
      "Priority WhatsApp support",
      "Recorded lessons",
    ],
    popular: true,
  },
  {
    name: "Premium",
    sessions: "12 Sessions/Month",
    duration: "45 min each",
    price: 75,
    features: [
      "12 one-on-one sessions",
      "45 minutes per session",
      "Flexible scheduling",
      "Daily progress reports",
      "24/7 WhatsApp support",
      "Recorded lessons",
      "Free study materials",
    ],
    popular: false,
  },
  {
    name: "Intensive",
    sessions: "20 Sessions/Month",
    duration: "45 min each",
    price: 120,
    features: [
      "20 one-on-one sessions",
      "45 minutes per session",
      "Daily scheduling",
      "Daily progress reports",
      "24/7 dedicated support",
      "All recorded lessons",
      "Free study materials",
      "Monthly assessments",
    ],
    popular: false,
  },
];

const Pricing = () => {
  const [hourlyRate, setHourlyRate] = useState([10]);
  const [weeklyHours, setWeeklyHours] = useState([2]);

  const estimatedMonthlyCost = hourlyRate[0] * weeklyHours[0] * 4;

  return (
    <>
      <Helmet>
        <title>Pricing | Affordable Online Quran Classes | QuranLearn</title>
        <meta name="description" content="Affordable online Quran learning packages. Choose from Basic, Standard, Premium, or Intensive plans. Free trial available. Flexible payment options." />
        <meta name="keywords" content="quran classes price, online quran tutor fees, affordable quran learning, hifz program cost" />
        <link rel="canonical" href="https://quranlearn.com/pricing" />
      </Helmet>

      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary-dark text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Choose the plan that works best for you. All plans include a free trial lesson.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {plans.map((plan) => (
                <div
                  key={plan.name}
                  className={`relative bg-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-card ${
                    plan.popular
                      ? "border-primary shadow-soft"
                      : "border-border"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-accent text-accent-foreground text-sm font-semibold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {plan.sessions} • {plan.duration}
                    </p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full"
                    asChild
                  >
                    <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground mt-8">
              All prices are in USD. Custom plans available for families and groups.
            </p>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-20 bg-secondary">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                <Calculator className="w-8 h-8 text-primary" />
                Cost Calculator
              </h2>
              <p className="text-muted-foreground">
                Estimate your monthly learning cost based on your preferences
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium text-foreground">
                      Hourly Rate (USD)
                    </label>
                    <span className="text-2xl font-bold text-primary">${hourlyRate[0]}</span>
                  </div>
                  <Slider
                    value={hourlyRate}
                    onValueChange={setHourlyRate}
                    min={5}
                    max={30}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>$5</span>
                    <span>$30</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="font-medium text-foreground">
                      Weekly Study Hours
                    </label>
                    <span className="text-2xl font-bold text-primary">{weeklyHours[0]}h</span>
                  </div>
                  <Slider
                    value={weeklyHours}
                    onValueChange={setWeeklyHours}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground mt-2">
                    <span>1 hour</span>
                    <span>10 hours</span>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-medium text-foreground">
                      Estimated Monthly Cost
                    </span>
                    <span className="text-3xl font-bold text-accent">
                      ${estimatedMonthlyCost}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Based on {weeklyHours[0]} hours/week at ${hourlyRate[0]}/hour
                  </p>
                </div>
              </div>

              <div className="mt-8 text-center">
                <Button size="lg" asChild>
                  <a href="https://wa.me/923334136071" target="_blank" rel="noopener noreferrer">
                    Get Custom Quote
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Pricing;
