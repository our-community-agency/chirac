import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film, Music, Lightbulb, Layers, Sparkles, Megaphone } from "lucide-react";

const services = [
  {
    icon: Film,
    title: "Video Production",
    description: "From concept to final cut — cinematic storytelling that moves audiences.",
  },
  {
    icon: Music,
    title: "Live Event Production",
    description: "End-to-end event creation that transforms venues into immersive worlds.",
  },
  {
    icon: Lightbulb,
    title: "Sound & Lighting Design",
    description: "Precision-engineered atmospheres that heighten every moment.",
  },
  {
    icon: Layers,
    title: "Set & Atmosphere Engineering",
    description: "Physical and digital environments designed to captivate.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics & Visual Media",
    description: "Dynamic visuals that amplify brand presence across every screen.",
  },
  {
    icon: Megaphone,
    title: "Distribution & Marketing",
    description: "Strategic campaigns across digital platforms to maximize reach.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 md:py-32 section-padding bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">
          What We Do
        </p>
        <h2 className="heading-section text-foreground">
          Full-Spectrum Creative Production
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {services.map((service, i) => {
          const ref2 = useRef(null);
          const inView2 = useInView(ref2, { once: true, margin: "-50px" });
          return (
            <motion.div
              ref={ref2}
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card p-8 md:p-10 group hover:bg-secondary/50 transition-colors duration-500"
            >
              <service.icon
                size={28}
                className="text-primary mb-6 transition-transform duration-500 group-hover:scale-110"
              />
              <h3 className="text-foreground text-lg font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
