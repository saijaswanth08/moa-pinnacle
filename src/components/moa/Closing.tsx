import { useState } from "react";
import { Reveal } from "./Reveal";
import { Particles } from "./Particles";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  company: z.string().trim().min(1, "Company required").max(150),
  interest: z.enum(["Retail", "Sponsorship", "Events"]),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message required").max(1000),
});

export const Closing = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", company: "", interest: "Retail", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    toast({ title: "Inquiry received", description: "Our leasing team will be in touch within 24 hours." });
    setForm({ name: "", company: "", interest: "Retail", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background">
      {/* Closing CTA */}
      <div className="relative section-pad overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_53%_30%/0.4),hsl(0_0%_4%)_70%)]" />
        <Particles count={40} />
        <div className="container-deck relative text-center">
          <Reveal>
            <h2 className="font-display font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}>
              The Largest Retail Destination
              <br />in America Is <span className="gradient-gold-text">Ready For You.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wide glow-gold-hover hover:bg-gold-bright">
                Lease a Space
              </button>
              <button className="px-8 py-4 border border-foreground/50 text-foreground hover:border-foreground hover:bg-foreground/5 transition-all font-medium tracking-wide">
                Become a Sponsor
              </button>
              <button className="px-8 py-4 bg-background border border-gold text-gold hover:bg-gold/10 transition-all font-medium tracking-wide">
                Book an Event
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Contact form */}
      <div className="relative section-pad bg-surface/30 border-t border-border">
        <div className="container-deck max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Get In Touch</p>
              <h3 className="font-display text-3xl md:text-5xl">Start the Conversation</h3>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={submit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name" error={errors.name}>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    maxLength={100}
                    className="input-moa"
                  />
                </Field>
                <Field label="Company" error={errors.company}>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    maxLength={150}
                    className="input-moa"
                  />
                </Field>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Interest" error={errors.interest}>
                  <select
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    className="input-moa"
                  >
                    <option>Retail</option>
                    <option>Sponsorship</option>
                    <option>Events</option>
                  </select>
                </Field>
                <Field label="Email" error={errors.email}>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    maxLength={255}
                    className="input-moa"
                  />
                </Field>
              </div>
              <Field label="Message" error={errors.message}>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={5}
                  maxLength={1000}
                  className="input-moa resize-none"
                />
              </Field>
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="px-10 py-4 bg-gold text-primary-foreground font-medium tracking-wide glow-gold-hover hover:bg-gold-bright"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>

      {/* Footer rendered separately in Index */}

      <style>{`
        .input-moa {
          width: 100%;
          background: hsl(var(--background));
          border: 1px solid hsl(var(--border));
          color: hsl(var(--foreground));
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          transition: border-color 0.3s, box-shadow 0.3s;
          outline: none;
        }
        .input-moa:focus {
          border-color: hsl(var(--gold));
          box-shadow: 0 0 0 3px hsl(var(--gold) / 0.15);
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-xs uppercase tracking-[0.2em] text-foreground/60 mb-2">{label}</span>
    {children}
    {error && <span className="block mt-1 text-xs text-destructive">{error}</span>}
  </label>
);
