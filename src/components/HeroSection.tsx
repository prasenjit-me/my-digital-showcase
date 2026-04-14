import { ExternalLink } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="mb-12 animate-fade-in">
      {/* Top bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h3 className="text-base font-semibold text-foreground">Your Name</h3>
          <p className="text-sm text-muted-foreground">Full Stack Developer</p>
        </div>
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <span>hello@example.com</span>
          <a href="#" className="text-foreground hover:text-hero-highlight transition-colors underline underline-offset-4">Resume</a>
        </div>
      </div>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold leading-tight text-foreground mb-6 max-w-3xl">
        <span className="text-hero-highlight">Software Developer</span> building websites, mobile apps & AI agents that solve real problems
      </h1>

      {/* Status */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm font-medium text-foreground">Currently available to work</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Delivering full-stack solutions across web, mobile, and AI
          </p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
          {["LinkedIn", "GitHub", "Twitter"].map((name) => (
            <a
              key={name}
              href="#"
              className="flex items-center gap-1 text-sm text-foreground hover:text-hero-highlight transition-colors"
            >
              {name}
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
