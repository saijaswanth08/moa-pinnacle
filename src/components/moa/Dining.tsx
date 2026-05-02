import { Reveal } from "./Reveal";
import { UtensilsCrossed, Clock } from "lucide-react";

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
            <div className="relative">
              <div className="relative p-12 border border-gold/40 bg-gradient-to-br from-surface/60 to-background overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,hsl(43_53%_40%/0.25),transparent_60%)]" />
                <UtensilsCrossed className="text-gold mb-6" size={40} strokeWidth={1.2} />
                <Clock className="text-gold/40 mb-4" size={20} />
                <div className="font-display text-7xl md:text-8xl gradient-gold-text font-bold leading-none">3+</div>
                <div className="mt-4 text-xl font-display">Hours</div>
                <div className="mt-1 text-sm text-foreground/60 uppercase tracking-[0.25em]">
                  Avg Visitor Dwell Time
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gold/10 blur-3xl rounded-full" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
