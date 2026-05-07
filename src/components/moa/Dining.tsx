import { Reveal } from "./Reveal";
import { CinematicVisual } from "./CinematicVisual";

const pills = ["Fine Dining", "Fast Casual", "Celebrity Chef Concepts"];

export const Dining = () => {
  return (
    <section id="dining" className="relative section-pad overflow-hidden" style={{ background: 'linear-gradient(180deg, #1A1100 0%, #0A0A0A 100%)' }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(38_60%_25%/0.25),transparent_60%)]" />

      <div className="container-deck relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div>
              <p className="eyebrow mb-4">Dining & Lifestyle</p>
              <h2 className="heading-section">
                50+ Restaurants.
                <br />
                <span className="gradient-gold-text">One Captive Audience.</span>
              </h2>
              <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
                From fast-casual to fine dining, MOA's culinary landscape is a destination in itself. Visitors stay
                longer, spend more, and return specifically for the food experience.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {pills.map((p) => (
                  <span
                    key={p}
                    className="px-5 py-2.5 border border-gold/40 text-gold text-sm tracking-wider rounded-full hover:bg-gold/10 transition-colors"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <CinematicVisual
              src="/images/dining-experience.png"
              alt="Premium dining experience at Mall of America"
              label="DINING EXPERIENCE"
              sublabel="50+ restaurants · 3.5hr avg dwell"
              height="420px"
              overlayOpacity={0.4}
              glowColor="rgba(201,140,50,0.15)"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
