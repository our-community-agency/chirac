import { motion } from "framer-motion";
import {
  Film,
  Globe2,
  GraduationCap,
  Layers,
  Mic2,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

import { servicePillars } from "@/content/siteContent";

const iconMap: Record<string, LucideIcon> = {
  spotlight: Mic2,
  film: Film,
  graduation: GraduationCap,
  sparkles: Sparkles,
  globe: Globe2,
  layers: Layers,
};

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-3xl"
      >
        <p className="eyebrow mb-3">Services</p>
        <h2 className="heading-section text-foreground">
          The production system behind the feeling.
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
          Everything on the page points to the same idea: Chicago AMP is built to
          move between live rooms, education stories, and campaign films without
          losing its rhythm.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {servicePillars.map((service, index) => {
          const Icon = iconMap[service.icon];

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              className="surface-panel group p-8"
            >
              <div className="mb-6 inline-flex rounded-2xl border border-white/12 bg-white/[0.03] p-4">
                <Icon
                  size={24}
                  className="text-primary transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-display text-2xl text-foreground">{service.title}</h3>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                {service.description}
              </p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
