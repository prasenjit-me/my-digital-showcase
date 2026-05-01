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
          Over the last 5 years I've shipped full-stack products across logistics, education,
          e-commerce, and AI — for clients in the US and India. I work across the entire stack:
          React and TypeScript on the frontend, Laravel and Node.js on the backend, React Native
          for mobile, and increasingly AI agents for automation and support.
        </p>
        <p>
          I've designed and delivered end-to-end platforms — from the database schema and API layer
          to the customer-facing UI — across industries like logistics, ed-tech, alcohol delivery,
          and grooming. Most projects I've shipped solo, which means I own the decisions and the
          delivery, without the overhead of a larger team.
        </p>
        <p>
          I care about clean architecture and software that doesn't become a maintenance burden six
          months later. Whether it's a customer-facing product or an internal admin tool, the
          standard of craft stays the same.
        </p>
        <p>
          I'm currently open to freelance, contract, and full-time work — particularly on products
          where the engineering decisions actually matter.
        </p>
      </div>

      {/* Contact */}
      <div id="contact" className="mt-14">
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
