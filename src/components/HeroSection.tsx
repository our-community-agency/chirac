import { motion } from "framer-motion";
import { Play, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-background/70" />
      <div className="cinematic-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-32 section-padding">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4">
            Chicago AMP
          </p>
          <h1 className="heading-display text-foreground max-w-4xl">
            We Craft Worlds With{" "}
            <span className="gold-gradient">Light, Sound</span>{" "}
            & Story.
          </h1>
          <p className="text-body max-w-xl mt-6">
            Audiovisual production studio specializing in immersive experiences,
            live events, and cinematic storytelling.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold tracking-wider uppercase text-sm px-8 py-4 hover:bg-primary/90 transition-all duration-300"
            >
              Start Your Project
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 border border-foreground/20 text-foreground font-medium tracking-wider uppercase text-sm px-8 py-4 hover:border-primary hover:text-primary transition-all duration-300"
            >
              <Play size={16} className="fill-current" />
              Watch Our Reel
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
