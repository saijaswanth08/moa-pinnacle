import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowRight, Music, Megaphone, Building2, Plus } from "lucide-react";
import { PremiumVisual } from "./PremiumVisual";

const cards = [
  {
    icon: Music,
    title: "Live Events & Concerts",
    blurb:
      "MOA has hosted Taylor Swift, Def Leppard, K-Pop championships, Cirque du Soleil, and Guinness World Record events. 40M eyeballs. Unmatched platform.",
    detail: [
      "Rotunda capacity: 7,000+ guests",
      "Integrated broadcast & livestream production",
      "On-property hospitality & green-room access",
      "Cross-promotion across owned digital channels",
    ],
    cta: "Book a Performance Slot",
  },
  {
    icon: Megaphone,
    title: "Brand Activations & Sponsorships",
    blurb:
      "Exclusive naming rights, digital displays, experiential zones, and multi-touchpoint campaigns across 5.6M sq ft of prime real estate.",
    detail: [
      "300+ digital screens across the property",
      "Experiential zones from 500 to 50,000 sq ft",
      "Integrated app, web, and on-site campaigns",
      "Custom measurement & attribution reporting",
    ],
    cta: "Explore Sponsorship Tiers",
  },
  {
    icon: Building2,
    title: "Corporate & Convention Events",
    blurb:
      "Multi-venue capability: indoor event plazas, rotunda spaces, and dedicated event areas for product launches, corporate gatherings, and trade shows.",
    detail: [
      "Multiple plazas with flexible build-out",
      "On-site catering & A/V partner network",
      "1,400+ adjacent hotel rooms",
      "MSP airport: 1.5 miles away",
    ],
    cta: "Inquire About Events",
  },
];

export const Events = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="events" className="relative section-pad overflow-hidden bg-gradient-to-b from-background via-[#03050D] to-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,hsl(220_60%_15%/0.5),transparent_60%)]" />

      <div className="container-deck relative">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-12">
            <p className="eyebrow mb-4">Events & Platform</p>
            <h2 className="heading-section">
              The <span className="gradient-gold-text">World's Stage</span>,
              <br />Under One Roof.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-12" style={{ height: "280px" }}>
            <img
              src="/events.jpg.jpeg"
              alt="Live Events at MOA"
              className="w-full h-full object-cover rounded-xl"
              style={{ border: "1px solid rgba(201,168,76,0.2)" }}
            />
          </div>
        </Reveal>

        <div className="space-y-4">
          {cards.map((c, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 0.1}>
                <div
                  className={`border transition-all duration-500 ${
                    isOpen ? "border-gold/60 bg-surface/40" : "border-border hover:border-gold/40 bg-background"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full text-left p-8 md:p-10 flex items-start gap-6 group"
                  >
                    <c.icon className="text-gold flex-shrink-0 mt-1" size={32} strokeWidth={1.2} />
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-gold transition-colors">
                        {c.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">{c.blurb}</p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 45 : 0 }} className="text-gold mt-1">
                      <Plus size={28} strokeWidth={1.5} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 md:px-10 pb-10 pl-[4.5rem] md:pl-[5.5rem]">
                          <div className="gold-rule mb-6 opacity-60" />
                          <ul className="grid md:grid-cols-2 gap-3 mb-8">
                            {c.detail.map((d, di) => (
                              <li key={di} className="flex items-start gap-3 text-foreground/75 text-sm">
                                <span className="text-gold mt-1">—</span>
                                {d}
                              </li>
                            ))}
                          </ul>
                          <button className="group inline-flex items-center gap-2 text-gold font-medium tracking-wide hover:gap-4 transition-all">
                            {c.cta}
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
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
