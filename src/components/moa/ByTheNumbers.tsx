import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CountUp } from "./CountUp";
import { Reveal } from "./Reveal";

const stats = [
  { value: 40, suffix: "M+", label: "Annual Visitors" },
  { value: 5.6, suffix: "M sq ft", decimals: 1, label: "Total Area" },
  { value: 520, suffix: "+", label: "Stores & Brands" },
  { value: 2, prefix: "$", suffix: "B+", label: "Annual Economic Impact" },
  { value: 4, prefix: "#", label: "Most Visited US Attraction" },
  { value: 11000, suffix: "+", label: "Employees" },
];

const timeline = [
  { year: "1992", label: "Grand Opening" },
  { year: "2000s", label: "Major Expansion" },
  { year: "2015", label: "Luxury Renovation" },
  { year: "2024", label: "New Attractions" },
];

export const ByTheNumbers = () => {
  const tlRef = useRef<HTMLDivElement>(null);
  const tlInView = useInView(tlRef, { once: true, margin: "-100px" });

  return (
    <section id="numbers" className="relative section-pad overflow-hidden" style={{ background: "#0D0D0D" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(43_53%_20%/0.15),transparent_60%)]" />

      <div className="container-deck relative">
        <Reveal>
          <div className="text-center mb-20">
            <p className="eyebrow mb-4">By The Numbers</p>
            <h2 className="heading-section">
              The Scale of <span className="gradient-gold-text">a City</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ background: "rgba(201,168,76,0.2)" }}>
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-background p-10 md:p-12 h-full group hover:bg-surface transition-colors duration-500 relative" style={{ borderTop: "2px solid #C9A84C" }}>
                <div className="font-display text-5xl md:text-6xl font-bold gradient-gold-text">
                  <CountUp to={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-foreground/70">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Timeline */}
        <div ref={tlRef} className="mt-24">
          <div className="relative">
            {/* Animated gold line */}
            <svg
              className="absolute left-0 right-0 top-1/2 -translate-y-1/2 w-full"
              height="2"
              preserveAspectRatio="none"
              viewBox="0 0 100 1"
            >
              <motion.line
                x1="0"
                y1="0.5"
                x2="100"
                y2="0.5"
                stroke="#C9A84C"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                animate={tlInView ? { pathLength: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative">
              {timeline.map((t, i) => (
                <div key={i} className="text-center">
                  <motion.div
                    className="w-3 h-3 mx-auto mb-6 rounded-full glow-gold"
                    style={{ background: "#C9A84C" }}
                    initial={{ scale: 0 }}
                    animate={tlInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 1.5 + i * 0.3, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={tlInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 1.6 + i * 0.3 }}
                  >
                    <div className="font-display text-2xl md:text-3xl text-gold">{t.year}</div>
                    <div className="text-sm text-foreground/70 mt-1">{t.label}</div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.3}>
          <p className="mt-20 text-center font-display italic text-2xl md:text-3xl" style={{ color: "#A0A0A0" }}>
            Bigger than Vatican City. Steps from a major international airport.
          </p>
        </Reveal>
      </div>
    </section>
  );
};
