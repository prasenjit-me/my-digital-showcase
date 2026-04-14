const AboutSection = () => {
  return (
    <section className="mt-20 pt-12 border-t border-border animate-fade-in">
      <h2 className="text-2xl font-semibold text-foreground mb-6">About me</h2>

      <div className="max-w-2xl space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          With experience building full-stack web applications, mobile apps, and AI-powered solutions,
          I specialize in turning complex ideas into clean, performant software.
        </p>
        <p>
          I'm passionate about developer experience, clean architecture, and building tools
          that make a real difference for users and businesses.
        </p>
        <p>
          I'm constantly seeking opportunities to learn and grow, aiming to deliver increasingly
          effective engineering solutions.
        </p>
      </div>

      <div className="mt-10 p-6 rounded-xl bg-secondary">
        <h3 className="text-base font-semibold text-foreground mb-2">Need a developer?</h3>
        <p className="text-sm text-muted-foreground mb-4">Let's chat!</p>
        <a
          href="mailto:hello@example.com"
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Schedule a conversation
        </a>
        <p className="mt-3 text-xs text-muted-foreground">
          or feel free to email me at: <span className="text-foreground font-medium">hello@example.com</span>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
