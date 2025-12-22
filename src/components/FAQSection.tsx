import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What do I need to start learning online?",
    answer: "You only need a computer, tablet, or smartphone with a stable internet connection. We use Zoom or Skype for live sessions. A headset with microphone is recommended for better audio quality.",
  },
  {
    question: "What age groups do you teach?",
    answer: "We teach students of all ages, from children as young as 4 years old to adults. Our tutors are experienced in adapting their teaching methods to suit different age groups and learning styles.",
  },
  {
    question: "How long is each class session?",
    answer: "Standard sessions are 30 minutes to 1 hour, depending on your subscription plan. For children, shorter sessions (30 minutes) are recommended to maintain focus and engagement.",
  },
  {
    question: "Can I try a free lesson before subscribing?",
    answer: "Yes! We offer a free 30-minute trial lesson with no obligation. This helps you experience our teaching style and meet a tutor before making any commitment.",
  },
  {
    question: "Do you have female tutors available?",
    answer: "Yes, we have both male and female certified tutors. You can request your preferred tutor gender when enrolling for classes.",
  },
  {
    question: "What if I miss a scheduled class?",
    answer: "We understand that schedules can change. If you notify us at least 24 hours in advance, you can reschedule your class at no extra cost. Classes missed without notice may be forfeited.",
  },
  {
    question: "Do you provide any certification?",
    answer: "Yes, upon completing specific courses, students receive completion certificates. For Hifz students, we provide Ijazah (certificate of authorization) upon completing memorization of the entire Quran.",
  },
  {
    question: "How do I contact you for more information?",
    answer: "You can reach us via WhatsApp at +92 333 413 6071. We're available to answer your questions and help you get started with your Quran learning journey.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our online Quran courses.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-soft transition-shadow"
            >
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
