import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { CinematicVisual } from "./CinematicVisual";

const attractions = [
  {
    name: "Nickelodeon Universe®",
    desc: "7 acres · 28 rides · 200M+ ride experiences",
    img: "/images/attractions-themepark.png",
  },
  {
    name: "SEA LIFE Aquarium",
    desc: "1.3M gallons · 10,000+ sea creatures",
    img: "/images/sealife-aquarium.png",
  },
  {
    name: "Crayola Experience",
    desc: "25 hands-on attractions · All ages",
    img: "/images/crayola-experience.png",
  },
  {
    name: "Mirror Maze",
    desc: "Immersive labyrinth experience",
    img: "/images/attractions-themepark.png",
  },
  {
    name: "Mini Golf",
    desc: "18-hole indoor course · Family favorite",
    img: "/images/attractions-themepark.png",
  },
];

export const Attractions = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);
  const [numDots, setNumDots] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const calculateDots = () => {
      if (el.scrollWidth <= el.clientWidth) {
        setNumDots(0);
      } else {
        const maxScroll = el.scrollWidth - el.clientWidth;
        setNumDots(Math.ceil(maxScroll / 340) + 1);
      }
    };

    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll <= 0) return;
      
      // Calculate dot index based on scroll percentage
      const scrollPercentage = el.scrollLeft / maxScroll;
      const currentNumDots = Math.ceil(maxScroll / 340) + 1;
      const i = Math.round(scrollPercentage * (currentNumDots - 1));
      
      setActiveDot(Math.min(Math.max(i, 0), currentNumDots - 1));
    };

    calculateDots();
    
    // Use ResizeObserver for more accurate tracking of container size changes
    const resizeObserver = new ResizeObserver(() => {
      calculateDots();
      onScroll();
    });
    resizeObserver.observe(el);
    
    el.addEventListener("scroll", onScroll, { passive: true });
    
    return () => {
      el.removeEventListener("scroll", onScroll);
      resizeObserver.disconnect();
    };
  }, []);

  const scrollBy = (dx: number) => {
    scrollerRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} id="attractions" className="relative section-pad overflow-hidden" style={{ background: "#080808" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,hsl(43_53%_25%/0.2),transparent_70%)]" />

      <div className="container-deck relative">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <p className="eyebrow mb-4">Attractions & Entertainment</p>
            <h2 className="heading-section">
              An Amusement Park. An Aquarium. <span className="gradient-gold-text">A Universe.</span>
            </h2>
            <p className="mt-8 text-lg" style={{ color: "#A0A0A0" }}>
              The attractions that keep 40 million people coming back.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Full-width cinematic hero panel */}
      <Reveal delay={0.15}>
        <div className="container-deck relative mt-12 mb-4">
          <CinematicVisual
            src="/images/attractions-themepark.png"
            alt="Nickelodeon Universe indoor theme park at Mall of America"
            label="NICKELODEON UNIVERSE®"
            sublabel="7 acres of indoor rides & attractions"
            height="380px"
            overlayOpacity={0.4}
          />
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="relative mt-8">
          {/* Arrows (desktop only) */}
          <button
            onClick={() => scrollBy(-340)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full hover:bg-gold/20 transition-colors"
            style={{ width: "44px", height: "44px", border: "1px solid #C9A84C", color: "#C9A84C", background: "rgba(10,10,10,0.6)" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollBy(340)}
            aria-label="Scroll right"
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full hover:bg-gold/20 transition-colors"
            style={{ width: "44px", height: "44px", border: "1px solid #C9A84C", color: "#C9A84C", background: "rgba(10,10,10,0.6)" }}
          >
            <ChevronRight size={20} />
          </button>

          <div
            ref={scrollerRef}
            className="overflow-x-auto no-scrollbar"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex gap-5 px-6 md:px-16 pb-4">
              {attractions.map((a, i) => (
                <motion.div
                  key={i}
                  className="relative overflow-hidden group flex-shrink-0"
                  style={{
                    width: "320px",
                    height: "400px",
                    scrollSnapAlign: "start",
                    borderRadius: "12px",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Image background */}
                  <img
                    src={a.img}
                    alt={a.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover scale-[1.35] transition-transform duration-[1.2s] ease-out group-hover:scale-[1.45]"
                  />

                  {/* Dark gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 100%)",
                    }}
                  />

                  {/* Gold hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      boxShadow: "inset 0 0 60px rgba(201,168,76,0.15)",
                    }}
                  />

                  {/* Corner accent */}
                  <span className="absolute top-3 left-3 w-4 h-4 border-t border-l opacity-0 group-hover:opacity-60 transition-opacity" style={{ borderColor: "#C9A84C" }} />
                  <span className="absolute top-3 right-3 w-4 h-4 border-t border-r opacity-0 group-hover:opacity-60 transition-opacity" style={{ borderColor: "#C9A84C" }} />

                  {/* Content overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3
                      className="font-display text-xl text-foreground mb-1"
                      style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
                    >
                      {a.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#C9A84C" }}>{a.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dots */}
          {numDots > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: numDots }).map((_, i) => (
                <span
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: activeDot === i ? "24px" : "10px",
                    height: "10px",
                    background: activeDot === i ? "#C9A84C" : "transparent",
                    border: "1px solid #C9A84C",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </Reveal>

      {/* Video Panel */}
      <div className="container-deck relative mt-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            position: "relative",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(201,168,76,0.3)",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          whileHover={{ scale: 1.01 }}
        >
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.8) 100%)",
            zIndex: 2, pointerEvents: "none"
          }} />
          <div style={{
            position: "absolute", bottom: "24px", left: "24px",
            zIndex: 3, color: "white"
          }}>
            <p style={{ color: "#C9A84C", fontSize: "11px", letterSpacing: "3px", fontFamily: "Inter" }}>
              NICKELODEON UNIVERSE
            </p>
            <p style={{ fontSize: "20px", fontFamily: "Playfair Display", fontWeight: "500" }}>
              7 Acres of Thrills Inside the Mall
            </p>
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/s8op6InD52A?mute=1&controls=1&rel=0&modestbranding=1&playsinline=1"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Nickelodeon Universe at Mall of America"
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%",
                border: "none"
              }}
            />
          </div>
        </motion.div>
      </div>

      <div className="container-deck relative mt-20">
        <Reveal delay={0.3}>
          <div className="border-y py-8 text-center" style={{ borderColor: "rgba(201,168,76,0.3)" }}>
            <p className="font-display text-2xl md:text-3xl text-foreground/90">
              Attractions account for <span style={{ color: "#C9A84C" }}>60%+ of dwell time</span> — keeping your customers engaged longer than any competitor property.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
