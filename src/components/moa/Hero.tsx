import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import { Particles } from "./Particles";

export const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - r.left}px`);
      el.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      ref={ref}
      className="cursor-glow relative min-h-screen flex items-center justify-center overflow-hidden bg-background shimmer"
    >
      {/* Layered backgrounds */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,hsl(43_53%_30%/0.25),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,hsl(43_53%_20%/0.3),transparent_55%)]" />
      <Particles count={50} />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(0_0%_0%/0.7)_100%)]" />

      <div className="container-deck relative z-10 text-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="eyebrow mb-6"
        >
          Mall of America · Bloomington, MN
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="heading-hero text-foreground"
        >
          NOT A MALL.
          <br />
          <span className="gradient-gold-text">A DESTINATION.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-lg md:text-2xl text-foreground/70 max-w-2xl mx-auto font-light tracking-wide"
        >
          40 Million Visitors. 5.6 Million Sq Ft. One Opportunity.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => go("retail")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-primary-foreground font-medium tracking-wide glow-gold-hover hover:bg-gold-bright"
          >
            Lease Your Space
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => go("overview")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/40 text-foreground hover:border-gold hover:text-gold transition-colors font-medium tracking-wide"
          >
            Explore the Property
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={() => go("overview")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/60 hover:text-gold transition-colors"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="animate-scroll-hint" />
      </motion.button>
    </section>
  );
};
