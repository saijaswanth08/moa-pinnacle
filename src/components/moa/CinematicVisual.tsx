import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

interface Props {
  src: string;
  alt: string;
  label?: string;
  sublabel?: string;
  height?: string;
  className?: string;
  overlayOpacity?: number;
  parallax?: boolean;
  glowColor?: string;
}

export const CinematicVisual = ({
  src,
  alt,
  label,
  sublabel,
  height = "500px",
  className = "",
  overlayOpacity = 0.45,
  parallax = true,
  glowColor = "rgba(201,168,76,0.15)",
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], parallax ? ["-15%", "15%"] : ["0%", "0%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.08, 1, 1.04]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full overflow-hidden group ${className}`}
      style={{
        height,
        borderRadius: "12px",
        border: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      {/* Shimmer loading state */}
      {!loaded && (
        <div
          className="absolute inset-0 animate-pulse"
          style={{ background: "linear-gradient(135deg, #0A0A0A, #1A1200, #0A0A0A)" }}
        />
      )}

      {/* Parallax image */}
      <motion.div
        className="absolute inset-x-0 w-full"
        style={{ 
          y, 
          scale,
          height: parallax ? "130%" : "100%",
          top: parallax ? "-15%" : "0%"
        }}
      >
        <img
          src={src}
          alt={alt}
          onLoad={() => setLoaded(true)}
          loading="lazy"
          className="w-full h-full object-cover scale-[1.35] transition-transform duration-[1.5s] ease-out group-hover:scale-[1.40]"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />
      </motion.div>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, rgba(0,0,0,${overlayOpacity * 0.3}) 0%, rgba(0,0,0,${overlayOpacity}) 60%, rgba(0,0,0,${overlayOpacity * 1.3}) 100%)`,
        }}
      />

      {/* Gold edge glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 80px ${glowColor}`,
        }}
      />

      {/* Top gold accent line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-60"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.6), transparent)",
        }}
      />

      {/* Corner accents */}
      <span className="absolute top-4 left-4 w-5 h-5 border-t border-l opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "#C9A84C" }} />
      <span className="absolute top-4 right-4 w-5 h-5 border-t border-r opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "#C9A84C" }} />
      <span className="absolute bottom-4 left-4 w-5 h-5 border-b border-l opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "#C9A84C" }} />
      <span className="absolute bottom-4 right-4 w-5 h-5 border-b border-r opacity-40 group-hover:opacity-80 transition-opacity" style={{ borderColor: "#C9A84C" }} />

      {/* Label overlay */}
      {label && (
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div
              className="font-display text-xl md:text-2xl tracking-wide text-white"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.8)" }}
            >
              {label}
            </div>
            {sublabel && (
              <>
                <div
                  className="mt-2 mb-2"
                  style={{ width: "32px", height: "1px", background: "#C9A84C" }}
                />
                <div
                  className="text-xs md:text-sm uppercase tracking-[0.15em]"
                  style={{ color: "rgba(201,168,76,0.9)" }}
                >
                  {sublabel}
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </motion.div>
  );
};
