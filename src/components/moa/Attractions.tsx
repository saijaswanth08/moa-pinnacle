import { Reveal } from "./Reveal";
import { Particles } from "./Particles";
import { Rocket, Fish, Palette, Wand2, Flag } from "lucide-react";

const attractions = [
  { icon: Rocket, name: "Nickelodeon Universe®", desc: "7 acres. 28 rides. Indoor theme park.", gradient: "from-purple-900/60 via-purple-700/30 to-background" },
  { icon: Fish, name: "SEA LIFE Aquarium", desc: "1.3M gallons. 10,000+ creatures.", gradient: "from-cyan-900/60 via-blue-800/30 to-background" },
  { icon: Palette, name: "Crayola Experience", desc: "Hands-on creative attractions for families.", gradient: "from-orange-900/60 via-red-800/30 to-background" },
  { icon: Wand2, name: "Mirror Maze", desc: "Disorienting. Memorable. Highly Instagrammable.", gradient: "from-fuchsia-900/60 via-pink-800/30 to-background" },
  { icon: Flag, name: "Mini Golf", desc: "Themed indoor courses for all ages.", gradient: "from-emerald-900/60 via-teal-800/30 to-background" },
];

export const Attractions = () => {
  return (
    <section id="attractions" className="relative section-pad bg-background overflow-hidden">
      <Particles count={30} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,hsl(43_53%_25%/0.2),transparent_70%)]" />

      <div className="container-deck relative">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto">
            <p className="eyebrow mb-4">Attractions & Entertainment</p>
            <h2 className="heading-section">
              An Amusement Park. An Aquarium. <span className="gradient-gold-text">A Universe.</span>
            </h2>
            <p className="mt-8 text-lg text-foreground/70 leading-relaxed">
              Nickelodeon Universe® — 7 acres, 28 rides, 200M+ ride experiences. SEA LIFE Aquarium — 1.3M gallons.
              Crayola Experience. Mirror Maze. Mini Golf.
            </p>
          </div>
        </Reveal>
      </div>

      {/* Horizontal scroll carousel */}
      <Reveal delay={0.2}>
        <div className="mt-20 overflow-x-auto no-scrollbar">
          <div className="flex gap-6 px-6 md:px-12 pb-4 min-w-max">
            {attractions.map((a, i) => (
              <div
                key={i}
                className="group relative w-[320px] h-[440px] overflow-hidden cursor-pointer border border-border hover:border-gold/60 transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${a.gradient}`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_50%,hsl(43_53%_40%/0.3),transparent_70%)] transition-opacity duration-500" />
                <div className="relative h-full flex flex-col justify-between p-8">
                  <a.icon className="text-gold" size={48} strokeWidth={1.2} />
                  <div>
                    <div className="gold-rule mb-4 opacity-60" />
                    <h3 className="font-display text-2xl mb-2 group-hover:text-gold transition-colors">{a.name}</h3>
                    <p className="text-sm text-foreground/70">{a.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <div className="container-deck relative mt-20">
        <Reveal delay={0.3}>
          <div className="border-y border-gold/30 py-8 text-center">
            <p className="font-display text-2xl md:text-3xl text-foreground/90">
              Attractions generate <span className="text-gold font-bold">60%+ of dwell time</span> — keeping your
              customers captive longer.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
