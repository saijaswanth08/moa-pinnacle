import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  label: string;
  icon: LucideIcon;
  gradient: string;
  height?: string;
  className?: string;
}

export const ImagePlaceholder = ({ label, icon: Icon, gradient, height = "320px", className = "" }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`relative w-full flex flex-col items-center justify-center overflow-hidden ${className}`}
      style={{
        background: gradient,
        height,
        borderRadius: "12px",
        border: "1px solid rgba(201,168,76,0.2)",
      }}
    >
      <Icon size={48} color="#C9A84C" strokeWidth={1.2} />
      <div
        className="mt-4 font-sans"
        style={{
          fontSize: "12px",
          color: "#C9A84C",
          letterSpacing: "3px",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
    </motion.div>
  );
};
