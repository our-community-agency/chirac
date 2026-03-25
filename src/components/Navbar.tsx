import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import logo from "@/assets/chicago-amp-logo.png";
import { triggerPrompt } from "@/lib/promptBridge";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Approach", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const startProject = () => {
    triggerPrompt({
      prompt:
        "Start a conversation with Andrew at Chicago AMP about building a motion-first presence for a live event, education story, or campaign moment.",
      services: ["Live Event Direction", "Campaign Capture"],
    });
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-background/75 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="section-padding flex h-20 items-center justify-between md:h-24">
          <a href="#top" className="flex items-center gap-4">
            <img src={logo} alt="Chicago AMP" className="h-12 w-auto md:h-14" />
            <div className="hidden sm:block">
              <p className="text-[10px] uppercase tracking-[0.42em] text-muted-foreground">
                Chicago AMP
              </p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.28em] text-foreground/70">
                Live • Education • Global
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={startProject}
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary/20"
            >
              Start a Project
            </button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-foreground md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-background/95 px-6 backdrop-blur-2xl"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="font-display text-2xl font-bold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={startProject}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-8 py-3 text-sm font-semibold uppercase tracking-[0.26em] text-primary"
            >
              Start a Project
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
