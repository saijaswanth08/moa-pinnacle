import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { id: "overview", label: "Overview" },
  { id: "retail", label: "Retail" },
  { id: "luxury", label: "Luxury" },
  { id: "dining", label: "Dining" },
  { id: "attractions", label: "Attractions" },
  { id: "events", label: "Events" },
  { id: "venue", label: "Venue" },
  { id: "sponsors", label: "Sponsors" },
  { id: "leasing", label: "Leasing" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("overview");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.4) {
            setActive(e.target.id);
          }
        });
      },
      { threshold: [0.4] }
    );
    links.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "1px solid transparent",
      }}
    >
      <nav className="container-deck flex items-center justify-between" style={{ height: "72px" }}>
        <button
          onClick={() => go("overview")}
          className="font-display font-bold tracking-widest hover:opacity-80 transition-opacity"
          style={{ color: "#C9A84C", fontSize: "24px" }}
          aria-label="MOA"
        >
          MOA
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => {
            const isActive = active === l.id;
            return (
              <li key={l.id}>
                <button
                  onClick={() => go(l.id)}
                  className="relative px-3 py-2 text-sm tracking-wide transition-colors"
                  style={{ color: isActive ? "#C9A84C" : "#FFFFFF" }}
                >
                  {l.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute left-3 right-3 -bottom-0.5"
                      style={{ height: "2px", background: "#C9A84C" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          onClick={() => go("contact")}
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-medium glow-gold-hover hover:bg-gold-bright"
          style={{ background: "#C9A84C", color: "#000" }}
        >
          Book a Tour
        </button>

        <button
          className="md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          style={{ color: "#C9A84C" }}
        >
          <Menu size={24} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 flex flex-col items-center justify-center md:hidden"
            style={{ background: "rgba(10,10,10,0.98)", zIndex: 100 }}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6"
              style={{ color: "#C9A84C" }}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <ul className="flex flex-col items-center gap-2">
              {links.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => go(l.id)}
                    className="font-display text-foreground hover:text-gold transition-colors"
                    style={{ fontSize: "24px", lineHeight: "48px" }}
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
