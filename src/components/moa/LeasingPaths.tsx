import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { Crown, Store, UtensilsCrossed, Sparkles, ArrowRight, Plus } from "lucide-react";

const paths = [
  {
    icon: Crown,
    title: "Luxury Flagship",
    short: "Dedicated luxury corridor, flagship format, premium adjacencies.",
    detail: ["Premium adjacencies with luxury anchors", "Architectural prominence", "White-glove leasing support", "Long-term partnership terms"],
  },
  {
    icon: Store,
    title: "Retail Standard",
    short: "3-level main corridors, 500–5,000 sq ft, flexible lease terms.",
    detail: ["High-traffic primary corridors", "Flexible 1–10 year terms", "Build-out support available", "Multiple footprint configurations"],
  },
  {
    icon: UtensilsCrossed,
    title: "F&B Concepts",
    short: "Food court, restaurant row, and standalone dining pads.",
    detail: ["Food court & restaurant row", "Standalone dining pads", "Full kitchen infrastructure", "Concierge launch support"],
  },
  {
    icon: Sparkles,
    title: "Pop-Up / Temp",
    short: "30-day to 6-month activations. Holiday, seasonal, and launch concepts.",
    detail: ["30-day to 6-month terms", "Turn-key activation packages", "Brand launch programs", "Holiday & seasonal slots"],
  },
];

export const LeasingPaths = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative section-pad bg-background overflow-hidden">
      <div className="container-deck relative">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="eyebrow mb-4">Leasing Paths</p>
            <h2 className="heading-section">
              Choose Your <span className="gradient-gold-text">Footprint</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {paths.map((p, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.08}>
                <div
                  className={`border transition-all duration-500 ${
                    isOpen ? "border-gold/60 bg-surface/40" : "border-border hover:border-gold/40 bg-surface/20"
                  }`}
                >
                  <button onClick={() => setOpen(isOpen ? null : i)} className="w-full text-left p-8 group">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <p.icon className="text-gold" size={32} strokeWidth={1.2} />
                      <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-gold/70">
                        <Plus size={22} />
                      </motion.div>
                    </div>
                    <p className="eyebrow mb-2">Path {String(i + 1).padStart(2, "0")}</p>
                    <h3 className="font-display text-2xl mb-3 group-hover:text-gold transition-colors">{p.title}</h3>
                    <p className="text-foreground/65 text-sm">{p.short}</p>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-8">
                          <div className="gold-rule mb-5 opacity-60" />
                          <ul className="space-y-2 mb-6">
                            {p.detail.map((d, di) => (
                              <li key={di} className="flex gap-2 text-sm text-foreground/75">
                                <span className="text-gold">—</span>
                                {d}
                              </li>
                            ))}
                          </ul>
                          <button className="group inline-flex items-center gap-2 text-gold font-medium hover:gap-4 transition-all">
                            Schedule a Tour
                            <ArrowRight size={16} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
