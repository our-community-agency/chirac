import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { presencePillars } from "@/content/siteContent";
import { triggerPrompt } from "@/lib/promptBridge";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding py-24 md:py-32">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="surface-panel p-8 md:p-10"
        >
          <p className="eyebrow mb-5">Approach</p>
          <h2 className="heading-section max-w-xl text-foreground">
            Andrew shoots for the feeling in the room, then carries that energy into
            every edit that follows.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground">
            Chicago AMP exists for work that needs more than a tidy portfolio grid.
            It needs motion, atmosphere, and just enough texture to suggest what it
            feels like to be there, whether the story lives in a Chicago venue, a
            Cairo campus, or a campaign launch that spans both stage and screen.
          </p>
          <blockquote className="mt-8 border-l border-primary/40 pl-5 font-display text-2xl leading-tight text-foreground md:text-3xl">
            &ldquo;We&apos;re not documenting attendance. We&apos;re building the memory
            people carry out with them.&rdquo;
          </blockquote>
          <button
            type="button"
            onClick={() =>
              triggerPrompt({
                prompt:
                  "Ask Andrew how he plans productions so the live room, the footage, and the final edit all feel like the same experience.",
                services: ["Live Event Direction", "Editorial Cutdowns"],
              })
            }
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-foreground transition-colors hover:border-primary/40 hover:text-primary"
          >
            Ask About the Process
            <ArrowUpRight size={16} />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {presencePillars.map((pillar, index) => (
            <motion.article
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="surface-panel p-6 md:p-7"
            >
              <p className="text-[11px] uppercase tracking-[0.32em] text-primary">
                {pillar.label}
              </p>
              <h3 className="mt-4 font-display text-2xl text-foreground">
                {pillar.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {pillar.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
