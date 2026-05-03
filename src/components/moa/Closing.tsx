import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { Particles } from "./Particles";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

const interestOptions = [
  "Retail Leasing",
  "Pop-Up Activation",
  "Luxury Flagship",
  "Sponsorship",
  "Event Booking",
  "Venue Rental",
  "General Inquiry",
];

const schema = z.object({
  name: z.string().trim().min(1, "This field is required").max(100),
  company: z.string().trim().min(1, "This field is required").max(150),
  email: z.string().trim().min(1, "This field is required").email("Please enter a valid email").max(255),
  phone: z.string().trim().max(40).optional(),
  interest: z.string().min(1, "This field is required"),
  message: z.string().trim().max(1000).optional(),
});

export const Closing = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

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
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-background">
      <div className="relative section-pad overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "rgba(201,168,76,0.06)",
            boxShadow: "0 0 200px 100px rgba(201,168,76,0.06)",
          }}
        />
        <Particles count={30} />
        <div className="container-deck relative text-center">
          <Reveal>
            <h2 className="font-display font-bold leading-[1.05] tracking-tight" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}>
              The Largest Retail Destination in America Is{" "}
              <span className="gradient-gold-text">Ready For You.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 font-medium tracking-wide glow-gold-hover hover:bg-gold-bright" style={{ background: "#C9A84C", color: "#000" }}>
                Lease a Space
              </button>
              <button className="px-8 py-4 border border-foreground text-foreground hover:border-gold hover:text-gold transition-all font-medium tracking-wide">
                Become a Sponsor
              </button>
              <button className="px-8 py-4 border transition-all font-medium tracking-wide hover:bg-gold/10" style={{ borderColor: "#C9A84C", color: "#C9A84C" }}>
                Book an Event
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="relative section-pad" style={{ background: "rgba(20,20,20,0.4)", borderTop: "1px solid rgba(201,168,76,0.15)" }}>
        <div className="container-deck max-w-3xl">
          <Reveal>
            <div className="text-center mb-12">
              <p className="eyebrow mb-4">Get In Touch</p>
              <h3 className="font-display text-3xl md:text-5xl">Start the Conversation</h3>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.3)", borderRadius: "12px", padding: "2rem" }}>
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 size={48} color="#C9A84C" />
                  <p className="mt-6 font-display text-2xl text-foreground">
                    Thank you! Our team will be in touch within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={submit} className="space-y-6" noValidate>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Full Name" error={errors.name}>
                      <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="input-moa" />
                    </Field>
                    <Field label="Company" error={errors.company}>
                      <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} maxLength={150} className="input-moa" />
                    </Field>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <Field label="Email" error={errors.email}>
                      <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="input-moa" />
                    </Field>
                    <Field label="Phone (optional)" error={errors.phone}>
                      <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} maxLength={40} className="input-moa" />
                    </Field>
                  </div>
                  <Field label="I'm interested in" error={errors.interest}>
                    <select value={form.interest} onChange={(e) => setForm({ ...form, interest: e.target.value })} className="input-moa">
                      <option value="">Select an option…</option>
                      {interestOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </Field>
                  <Field label="Message (optional)" error={errors.message}>
                    <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} rows={5} maxLength={1000} className="input-moa resize-none" />
                  </Field>
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-4 font-medium tracking-wide glow-gold-hover hover:bg-gold-bright disabled:opacity-60 disabled:cursor-not-allowed"
                      style={{ background: "#C9A84C", color: "#000" }}
                    >
                      {submitting ? "Sending..." : "Send Inquiry →"}
                    </button>
                    <p className="text-center text-xs mt-4" style={{ color: "#A0A0A0" }}>
                      Our leasing team responds within 24 hours.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .input-moa {
          width: 100%;
          background: #0A0A0A;
          border: 1px solid rgba(201,168,76,0.2);
          color: #FFFFFF;
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          border-radius: 6px;
          transition: border-color 0.3s, box-shadow 0.3s;
          outline: none;
        }
        .input-moa:focus {
          border-color: #C9A84C;
          box-shadow: 0 0 0 3px rgba(201,168,76,0.15);
        }
      `}</style>
    </section>
  );
};

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <label className="block">
    <span className="block text-xs uppercase tracking-[0.2em] text-foreground/70 mb-2">{label}</span>
    {children}
    {error && <span className="block mt-1 text-xs" style={{ color: "#ef4444" }}>{error}</span>}
  </label>
);
