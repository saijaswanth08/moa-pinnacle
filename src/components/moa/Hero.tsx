import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

export const Hero = () => {
  const [iframeFailed, setIframeFailed] = useState(false);
  const playerRef = useRef<any>(null);
  const readyRef = useRef(false);
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    let cancelled = false;

    const init = () => {
      if (cancelled || !window.YT?.Player) return;
      try {
        playerRef.current = new window.YT.Player("hero-video-iframe", {
          events: {
            onReady: () => {
              readyRef.current = true;
            },
            onStateChange: (event: any) => {
              if (event.data === 0) {
                playerRef.current?.seekTo(5, true);
                playerRef.current?.playVideo();
              }
            },
            onError: () => setIframeFailed(true),
          },
        });
      } catch {
        setIframeFailed(true);
      }
    };

    if (window.YT && window.YT.Player) {
      init();
    } else {
      const existing = document.querySelector<HTMLScriptElement>('script[src="https://www.youtube.com/iframe_api"]');
      if (!existing) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
      }
      const prev = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        prev?.();
        init();
      };
    }

    const fallbackTimer = window.setTimeout(() => {
      if (!cancelled && !readyRef.current) setIframeFailed(true);
    }, 6000);

    return () => {
      cancelled = true;
      window.clearTimeout(fallbackTimer);
      try {
        playerRef.current?.destroy?.();
      } catch {}
    };
  }, []);

  return (
    <section
      id="overview"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Fallback (always rendered behind iframe; covered when video loads) */}
      <div className="absolute inset-0 bg-black hero-pulse" style={{ zIndex: 0 }}>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 600,
            height: 600,
            background: "radial-gradient(circle, rgba(201,168,76,0.08), transparent 70%)",
          }}
        />
      </div>

      {/* Video background */}
      {!iframeFailed && (
        <div style={{ pointerEvents: "none", position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
          <iframe
            id="hero-video-iframe"
            src="https://www.youtube.com/embed/ioHfrWD1AFU?enablejsapi=1&autoplay=1&mute=1&controls=0&disablekb=1&modestbranding=1&showinfo=0&rel=0&playsinline=1&iv_load_policy=3&start=5&end=120&loop=1&playlist=ioHfrWD1AFU"
            onError={() => setIframeFailed(true)}
            allow="autoplay; encrypted-media"
            allowFullScreen={false}
            title="MOA Background"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              transform: "scale(1.1)",
              border: "none",
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)", zIndex: 1 }} />

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
