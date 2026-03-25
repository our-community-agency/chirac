import { motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, Play } from "lucide-react";

import { heroSignals } from "@/content/siteContent";
import { triggerPrompt } from "@/lib/promptBridge";

const heroVideoSrc = `${import.meta.env.BASE_URL}videos/hero.mp4`;

const HeroSection = () => {
  const startConversation = () => {
    triggerPrompt({
      prompt:
        "Help me talk with Andrew about creating a dark, event-forward Chicago AMP presence with motion, live-room energy, and project reels that can carry the story.",
      services: ["Live Event Direction", "Campaign Capture", "Motion Graphics"],
    });
  };

  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden">
      <div className="bg-stage absolute inset-0" />
      <div className="hero-grid absolute inset-x-0 top-0 h-[72%]" />
      <div className="pointer-events-none absolute left-[8%] top-24 h-48 w-48 rounded-full bg-accent/20 blur-[110px]" />
      <div className="pointer-events-none absolute right-[6%] top-20 h-80 w-80 rounded-full bg-primary/20 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-56 w-56 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 section-padding flex min-h-screen items-center pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            <p className="eyebrow mb-5">
              Motion-first production for moments that need to land immediately.
            </p>
            <h1 className="heading-display max-w-5xl text-foreground">
              Chicago AMP turns Andrew&apos;s work into a{" "}
              <span className="signal-gradient">presence you can feel</span> before
              anyone reads a line of copy.
            </h1>
            <p className="text-body mt-6 max-w-2xl">
              Dark, cinematic, and built for motion: live-event films, education
              stories, and campaign moments shaped to move from the room to the reel
              without losing their pulse.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={startConversation}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-[0.24em] text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                Start the Conversation
                <ArrowDownRight size={18} />
              </button>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-4 text-sm font-medium uppercase tracking-[0.24em] text-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary"
              >
                <Play size={16} className="fill-current" />
                See the Featured Moments
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {heroSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-foreground/80"
                >
                  {signal}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="grid gap-4 lg:pl-4"
          >
            <div className="surface-panel overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-[1.6rem] border border-white/10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="aspect-[4/5] w-full object-cover md:aspect-[4/4.4]"
                >
                  <source src={heroVideoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="eyebrow mb-3 text-[10px]">Hero reel</p>
                  <p className="max-w-sm font-display text-2xl leading-tight text-foreground">
                    A first hit of movement, atmosphere, and room energy before the
                    case studies even begin.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="surface-panel p-5">
                <p className="eyebrow mb-3 text-[10px]">Built for</p>
                <p className="text-lg font-display leading-snug text-foreground">
                  Cairo campus shoots, Chicago stages, and campaigns that need the
                  same visual pulse across every touchpoint.
                </p>
              </div>
              <div className="surface-panel p-5">
                <p className="eyebrow mb-3 text-[10px]">Prompt-ready</p>
                <p className="text-lg font-display leading-snug text-foreground">
                  Every featured project can kick off the next question with one tap.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

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
