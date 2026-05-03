import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Hero = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [iframeFailed, setIframeFailed] = useState(false);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Video background */}
      {!iframeFailed && (
        <iframe
          src="https://www.youtube.com/embed/6xKB6FRBH_M?autoplay=1&mute=1&loop=1&playlist=6xKB6FRBH_M&controls=0&showinfo=0&modestbranding=1&rel=0"
          onLoad={() => setIframeLoaded(true)}
          onError={() => setIframeFailed(true)}
          allow="autoplay; encrypted-media"
          title="MOA Background"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) scale(1.4)",
            width: "100%",
            height: "100%",
            border: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* Fallback / always-present radial glow */}
      {(iframeFailed || !iframeLoaded) && (
        <>
          <div className="absolute inset-0 bg-background" style={{ zIndex: 0 }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(43_53%_30%/0.4),transparent_60%)]" style={{ zIndex: 0 }} />
        </>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.65)", zIndex: 1 }} />

      {/* Content */}
      <div className="container-deck relative text-center pt-24" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="eyebrow mb-6"
          style={{ letterSpacing: "0.3em" }}
        >
          Bloomington, Minnesota
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
          className="mt-8 text-lg md:text-2xl text-foreground/80 max-w-2xl mx-auto font-light tracking-wide"
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
            onClick={() => go("leasing")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 font-medium tracking-wide glow-gold-hover hover:bg-gold-bright"
            style={{ background: "#C9A84C", color: "#000" }}
          >
            Explore Leasing
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => go("events")}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground text-foreground hover:border-gold hover:text-gold transition-colors font-medium tracking-wide"
          >
            View Events
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-10 gap-y-6 text-sm"
        >
          {[
            { v: "40M", l: "Visitors" },
            { v: "#4", l: "US Attraction" },
            { v: "520+", l: "Stores" },
            { v: "1.5mi", l: "from MSP" },
          ].map((s, i) => (
            <div key={s.l} className="flex items-center gap-10">
              <div className="text-center">
                <div className="font-display text-2xl text-gold">{s.v}</div>
                <div className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 mt-1">{s.l}</div>
              </div>
              {i < 3 && <div className="hidden sm:block h-8 w-px bg-gold/40" />}
            </div>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={() => go("numbers")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/70 hover:text-gold transition-colors"
        style={{ zIndex: 2 }}
        aria-label="Scroll down"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.button>
    </section>
  );
};
