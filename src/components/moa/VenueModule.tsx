import { motion } from "framer-motion";
import { Reveal } from "./Reveal";
import { ArrowRight, Download } from "lucide-react";
import { CinematicVisual } from "./CinematicVisual";

const venueCards = [
  { name: "Main Event Stage", desc: "Capacity 5,000 standing / 2,500 seated · Full AV rig · Broadcast-ready", img: "/images/venue-stage.png" },
  { name: "Rotunda Plaza", desc: "360° branded environment · 20,000 sq ft · Premium sightlines" },
  { name: "Outdoor East Plaza", desc: "Open-air events · Seasonal activations · 15,000 person capacity" },
  { name: "Private Event Suites", desc: "Corporate meetings · VIP experiences · Fully catered" },
];

const tableRows = [
  { venue: "Main Event Stage", capacity: "5,000 standing", sqft: "18,000 sq ft", best: "Concerts & Shows" },
  { venue: "Rotunda Plaza", capacity: "10,000 visitors", sqft: "20,000 sq ft", best: "Brand Activations" },
  { venue: "Outdoor East Plaza", capacity: "15,000 standing", sqft: "35,000 sq ft", best: "Festivals & Fairs" },
  { venue: "Private Suites", capacity: "50 per suite", sqft: "800 sq ft", best: "Corporate & VIP" },
];

export const VenueModule = () => {
  return (
    <section id="venue" className="relative section-pad overflow-hidden" style={{ background: "#0D0D0D" }}>
      <div className="container-deck relative">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="eyebrow mb-4">Venue Infrastructure</p>
            <h2 className="heading-section">World-Class Venue Infrastructure</h2>
            <p className="mt-6 text-lg" style={{ color: "#A0A0A0" }}>
              Not just a mall. A multi-venue destination complex.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <CinematicVisual
            src="/images/venue-expo.png"
            alt="Exposition and convention center at Mall of America"
            label="VENUE SPACES"
            sublabel="4 venues · 73,000+ combined sq ft"
            height="420px"
            overlayOpacity={0.4}
            glowColor="rgba(201,168,76,0.12)"
            className="mb-12"
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            {venueCards.map((v, i) => (
              <motion.div
                key={v.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden"
                style={{
                  background: "#111111",
                  borderLeft: "1px solid #C9A84C",
                  borderRadius: "0 8px 8px 0",
                }}
              >
                {v.img && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-700">
                    <img src={v.img} alt={v.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                )}
                <div className="relative p-5">
                  <h3 className="font-display text-xl text-foreground mb-2">{v.name}</h3>
                  <p className="text-sm" style={{ color: "#A0A0A0" }}>{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div style={{ background: "#111111", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "12px" }} className="overflow-hidden">
              <div
                className="grid grid-cols-12 px-6 py-4 text-[11px] uppercase tracking-[0.2em]"
                style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C", borderBottom: "1px solid rgba(201,168,76,0.3)" }}
              >
                <div className="col-span-4">Venue</div>
                <div className="col-span-3">Capacity</div>
                <div className="col-span-3">Sq Ft</div>
                <div className="col-span-2">Best For</div>
              </div>
              {tableRows.map((r, i) => (
                <div
                  key={i}
                  className="grid grid-cols-12 px-6 py-5 text-sm"
                  style={{ borderBottom: i < tableRows.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}
                >
                  <div className="col-span-4 font-display text-base text-foreground">{r.venue}</div>
                  <div className="col-span-3" style={{ color: "#A0A0A0" }}>{r.capacity}</div>
                  <div className="col-span-3" style={{ color: "#A0A0A0" }}>{r.sqft}</div>
                  <div className="col-span-2 text-xs" style={{ color: "#C9A84C" }}>{r.best}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Video Panel */}
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
            marginTop: "48px",
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
              VENUE SHOWCASE
            </p>
            <p style={{ fontSize: "20px", fontFamily: "Playfair Display", fontWeight: "500" }}>
              See the Space. Feel the Scale.
            </p>
          </div>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              src="https://www.youtube.com/embed/JLKbW1aSDK8?mute=1&controls=1&rel=0&modestbranding=1&playsinline=1"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              title="Mall of America Venue Showcase"
              style={{
                position: "absolute", top: 0, left: 0,
                width: "100%", height: "100%",
                border: "none"
              }}
            />
          </div>
        </motion.div>

        <Reveal delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 font-medium tracking-wide glow-gold-hover hover:bg-gold-bright"
              style={{ background: "#C9A84C", color: "#000" }}
            >
              Book Your Venue
              <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => {
                import("sonner").then(({ toast }) => {
                  toast.success("Downloading Venue Kit...", {
                    description: "Your PDF is being generated and will download shortly."
                  });
                });
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-foreground/60 text-foreground hover:border-gold hover:text-gold transition-colors font-medium tracking-wide"
            >
              <Download size={18} />
              Download Venue Kit
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
