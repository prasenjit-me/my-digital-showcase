const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start with a free call to understand your goals, constraints, and timeline. I ask the right questions so nothing is ambiguous before work begins.",
  },
  {
    number: "02",
    title: "Proposal",
    description:
      "I send a clear scope document — what's included, what's not, the timeline, and a fixed price or hourly breakdown. No surprises mid-project.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Regular updates throughout. You'll see working builds early and often — not just at the end. Feedback is welcome at every stage.",
  },
  {
    number: "04",
    title: "Handoff",
    description:
      "Clean code, documentation, and a handoff call. I stay available for 30 days post-launch to handle anything that comes up.",
  },
];

const ProcessSection = () => {
  return (
    <section className="mt-16 pt-16 border-t border-border animate-fade-in">
      <div className="mb-10">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
          How I work
        </span>
        <h2 className="text-xl sm:text-2xl text-foreground mt-1">My Process</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4">
            <span className="text-4xl font-bold text-muted-foreground/15 leading-none shrink-0 w-12 select-none">
              {step.number}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-1.5">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;
