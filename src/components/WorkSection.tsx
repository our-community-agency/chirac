import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import { featuredProjects } from "@/content/siteContent";
import { triggerPrompt } from "@/lib/promptBridge";

const WorkSection = () => {
  return (
    <section id="work" className="section-padding py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between"
      >
        <div>
          <p className="eyebrow mb-3">Featured moments</p>
          <h2 className="heading-section max-w-3xl text-foreground">
            Video-first project cards built to hold the room before the details
            arrive.
          </h2>
        </div>
        <p className="max-w-md text-sm leading-7 text-muted-foreground">
          These are structured as reel-ready placeholders: swap in footage, keep the
          pacing, and use the CTA to spark deeper questions instantly.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {featuredProjects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="surface-panel group overflow-hidden p-5 md:p-6"
          >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-primary">
                  {project.location}
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-foreground/70">
                  {project.category}
                </p>
              </div>
              <span className="rounded-full border border-white/12 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Reel placeholder
              </span>
            </div>

            <div className="video-placeholder aspect-[16/10] overflow-hidden rounded-[1.5rem] p-6">
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.28em] text-foreground/75">
                    Video-first layout
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.28em] text-primary/80">
                    {project.location}
                  </span>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.32em] text-muted-foreground">
                    Replace placeholder with footage
                  </p>
                  <p className="mt-3 max-w-sm font-display text-2xl leading-tight text-foreground">
                    {project.videoLabel}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-display text-3xl leading-tight text-foreground">
                {project.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.deliverables.map((deliverable) => (
                <span
                  key={deliverable}
                  className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-foreground/75"
                >
                  {deliverable}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() =>
                  triggerPrompt({
                    prompt: project.prompt,
                    title: project.title,
                    services: project.services,
                  })
                }
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/12 px-5 py-3 text-xs font-semibold uppercase tracking-[0.26em] text-primary transition-all duration-300 hover:border-primary hover:bg-primary/18"
              >
                Learn more
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </button>
              <p className="text-sm leading-7 text-muted-foreground">
                Fires a follow-up prompt and seeds the creative brief below.
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
