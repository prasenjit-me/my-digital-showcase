import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formsubmit.co/ajax/prasenjitdutta198@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio enquiry from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">Name</label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-medium text-foreground">Email</label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-medium text-foreground">Message</label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell me about your project..."
          rows={5}
          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-foreground/20 transition resize-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-foreground text-background text-sm font-medium hover:opacity-85 transition-opacity disabled:opacity-50"
        >
          {status === "loading" ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Send className="w-4 h-4" />
          )}
          {status === "loading" ? "Sending…" : "Send message"}
        </button>

        {status === "success" && (
          <div className="flex items-center gap-1.5 text-xs text-green-600">
            <CheckCircle className="w-4 h-4" />
            Message sent — I'll be in touch soon.
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-1.5 text-xs text-red-500">
            <AlertCircle className="w-4 h-4" />
            Something went wrong. Try emailing me directly.
          </div>
        )}
      </div>
    </form>
  );
};

const AboutSection = () => {
  return (
    <section className="mt-8 pt-16 border-t border-border animate-fade-in">
      <h2 className="text-2xl sm:text-4xl lg:text-5xl leading-[1.15] text-foreground mb-8 max-w-xl">
        About me
      </h2>

      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
        <p>
          I'm a passionate Software Developer with 5 years of hands-on experience building full-stack
          web applications, cross-platform mobile apps, and AI-powered solutions. I specialise in
          scalable backend architectures, real-time integrations, and delivering products that are
          both technically sound and genuinely useful.
        </p>
        <p>
          Over the years I've worked across a range of industries — from insurance and logistics to
          education and e-commerce — designing and shipping end-to-end platforms for clients in the US
          and India. My stack spans React, Laravel, Node.js, and TypeScript on the frontend and backend,
          with growing expertise in AI agent development and mobile (React Native).
        </p>
        <p>
          I care deeply about clean architecture, developer experience, and building software that
          scales without becoming a maintenance burden. Whether it's a customer-facing product or an
          internal tool, I bring the same level of craft and attention to detail to every project.
        </p>
        <p>
          I'm currently open to new opportunities — freelance, contract, or full-time — where I can
          contribute to a product that matters and work alongside people who take their craft seriously.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-14">
        <div className="mb-8">
          <h3 className="text-2xl sm:text-3xl leading-[1.15] text-foreground mb-2">
            Let's build something together
          </h3>
          <p className="text-sm text-muted-foreground">
            Open to freelance, contract, and full-time roles. I'm most excited about products with real user impact.
          </p>
        </div>

        <ContactForm />

        <p className="mt-5 text-xs text-muted-foreground">
          Prefer email?{" "}
          <a
            href="mailto:prasenjitdutta198@gmail.com"
            className="text-foreground font-medium hover:underline"
          >
            prasenjitdutta198@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
