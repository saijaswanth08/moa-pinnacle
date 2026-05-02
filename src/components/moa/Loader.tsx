import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const Loader = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0, letterSpacing: "0.5em", scale: 0.9 }}
            animate={{ opacity: 1, letterSpacing: "0.25em", scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-6xl md:text-8xl font-bold gradient-gold-text"
          >
            MOA
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
