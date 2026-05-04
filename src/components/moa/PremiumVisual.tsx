import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  sublabel?: string;
  icon: LucideIcon;
  gradient: string;
  height?: string;
  className?: string;
}

export const PremiumVisual = ({ label, sublabel, icon: Icon, gradient, height = "320px", className = "" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        background: gradient,
        height,
        borderRadius: "12px",
        border: "1px solid rgba(201,168,76,0.25)",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,168,76,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Radial gold glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(201,168,76,0.18), transparent 60%)",
        }}
      />

      {/* Corner accents */}
      <span className="absolute top-4 left-4 w-6 h-6 border-t border-l" style={{ borderColor: "#C9A84C" }} />
      <span className="absolute top-4 right-4 w-6 h-6 border-t border-r" style={{ borderColor: "#C9A84C" }} />
      <span className="absolute bottom-4 left-4 w-6 h-6 border-b border-l" style={{ borderColor: "#C9A84C" }} />
      <span className="absolute bottom-4 right-4 w-6 h-6 border-b border-r" style={{ borderColor: "#C9A84C" }} />

      {/* Centered content */}
      <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6">
        <div
          className="flex items-center justify-center rounded-full mb-6"
          style={{
            width: "84px",
            height: "84px",
            background: "rgba(10,10,10,0.5)",
            border: "1px solid rgba(201,168,76,0.5)",
            boxShadow: "0 0 40px rgba(201,168,76,0.15)",
          }}
        >
          <Icon size={36} color="#C9A84C" strokeWidth={1.2} />
        </div>
        <div
          className="font-display text-xl md:text-2xl"
          style={{ color: "#FFFFFF", letterSpacing: "0.08em" }}
        >
          {label}
        </div>
        {sublabel && (
          <>
            <div
              className="mt-3 mb-3"
              style={{ width: "32px", height: "1px", background: "#C9A84C" }}
            />
            <div className="text-xs md:text-sm" style={{ color: "#A0A0A0", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              {sublabel}
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};
