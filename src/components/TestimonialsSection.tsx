// TODO: Replace the placeholder quotes below with real quotes from your clients.
// Each client you shipped work for (AMBEST, DAX, EdGuru, BeerGo) is a potential testimonial.
// Even a sentence from an email or Slack message works — just ask permission to publish it.

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  project: string;
}

// Replace these with real quotes before deploying
const testimonials: Testimonial[] = [
  {
    quote:
      "Prasenjit delivered a polished, production-ready platform on time and on budget. He understood the brief immediately and needed minimal back-and-forth.",
    name: "Client Name",
    title: "Founder / Title — Company",
    project: "Project Name",
  },
  {
    quote:
      "The AI agent Prasenjit built handles the majority of our inbound support queries automatically. It's exactly what we needed, and the integration was seamless.",
    name: "Client Name",
    title: "Founder / Title — Company",
    project: "Project Name",
  },
  {
    quote:
      "Working with Prasenjit felt like working with a senior engineer who also cared about the product outcome, not just the code. Would hire again.",
    name: "Client Name",
    title: "Founder / Title — Company",
    project: "Project Name",
  },
];

const TestimonialsSection = () => {
  if (testimonials.length === 0) return null;

  return (
    <section className="mt-16 pt-16 border-t border-border animate-fade-in">
      <div className="mb-10">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
          Client feedback
        </span>
        <h2 className="text-xl sm:text-2xl text-foreground mt-1">What clients say</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 p-5 rounded-2xl border border-border bg-secondary/30"
          >
            {/* Quote mark */}
            <span className="text-3xl leading-none text-muted-foreground/30 select-none font-serif">"</span>

            <p className="text-sm text-foreground leading-relaxed flex-1">
              {t.quote}
            </p>

            <div className="flex items-center gap-3 pt-2 border-t border-border">
              {/* Initials avatar */}
              <div className="w-8 h-8 rounded-full bg-foreground/10 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-foreground uppercase">
                  {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold text-foreground truncate">{t.name}</p>
                <p className="text-[10px] text-muted-foreground truncate">{t.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
