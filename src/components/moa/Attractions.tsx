import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Zap, Fish, Palette, Sparkles, Flag } from "lucide-react";
import { Reveal } from "./Reveal";
import { PremiumVisual } from "./PremiumVisual";

const attractions = [
  { icon: Zap, name: "Nickelodeon Universe®", desc: "7 acres · 28 rides · 200M+ ride experiences", gradient: "linear-gradient(135deg,#080818 0%,#1A0A2A 100%)", label: "NICKELODEON UNIVERSE", sublabel: "7 acres · 28 rides" },
  { icon: Fish, name: "SEA LIFE Aquarium", desc: "1.3M gallons · 10,000+ sea creatures", gradient: "linear-gradient(135deg,#000A18 0%,#001A2A 100%)", label: "SEA LIFE AQUARIUM", sublabel: "1.3M gallons · 10,000 sea creatures" },
  { icon: Palette, name: "Crayola Experience", desc: "25 hands-on attractions · All ages", gradient: "linear-gradient(135deg,#180808 0%,#2A0A0A 100%)", label: "CRAYOLA EXPERIENCE", sublabel: "25 hands-on attractions" },
  { icon: Sparkles, name: "Mirror Maze", desc: "Immersive labyrinth experience", gradient: "linear-gradient(135deg,#08180A 0%,#0A2A0A 100%)", label: "MIRROR MAZE", sublabel: "Immersive labyrinth" },
  { icon: Flag, name: "Mini Golf", desc: "18-hole indoor course · Family favorite", gradient: "linear-gradient(135deg,#001A0A 0%,#002A18 100%)", label: "MINI GOLF", sublabel: "18-hole indoor course" },
];

export const Attractions = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / 296); // 280 + 16 gap
      setActiveDot(Math.min(Math.max(i, 0), attractions.length - 1));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollBy = (dx: number) => {
    scrollerRef.current?.scrollBy({ left: dx, behavior: "smooth" });
  };

  return (
    <section id="attractions" className="relative section-pad overflow-hidden" style={{ background: "#080808" }}>
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

      <Reveal delay={0.2}>
        <div className="relative mt-16">
          {/* Arrows (desktop only) */}
          <button
            onClick={() => scrollBy(-300)}
            aria-label="Scroll left"
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 items-center justify-center rounded-full hover:bg-gold/20 transition-colors"
            style={{ width: "44px", height: "44px", border: "1px solid #C9A84C", color: "#C9A84C", background: "rgba(10,10,10,0.6)" }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollBy(300)}
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
            <div className="flex gap-4 px-6 md:px-16 pb-4">
              {attractions.map((a, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden"
                  style={{
                    width: "280px",
                    height: "380px",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    borderRadius: "12px",
                    border: "1px solid rgba(201,168,76,0.2)",
                  }}
                >
                  {a.name === "SEA LIFE Aquarium" ? (
                    <div style={{height:"100%",borderRadius:"12px",background:"linear-gradient(135deg,#000A18,#001A2A)",border:"1px solid rgba(201,168,76,0.2)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"12px"}}>
                      <Fish size={48} color="#C9A84C" />
                      <p style={{color:"#C9A84C",fontSize:"11px",letterSpacing:"4px"}}>SEA LIFE AQUARIUM</p>
                    </div>
                  ) : (
                    <PremiumVisual icon={a.icon} label={a.label} sublabel={a.sublabel} gradient={a.gradient} height="100%" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.95), transparent)" }}>
                    <h3 className="font-display text-xl text-foreground mb-1">{a.name}</h3>
                    <p className="text-xs" style={{ color: "#A0A0A0" }}>{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {attractions.map((_, i) => (
              <span
                key={i}
                className="rounded-full transition-all"
                style={{
                  width: "10px",
                  height: "10px",
                  background: activeDot === i ? "#C9A84C" : "transparent",
                  border: "1px solid #C9A84C",
                }}
              />
            ))}
          </div>
        </div>
      </Reveal>

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
