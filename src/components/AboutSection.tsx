import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-6">
            About Us
          </p>
          <blockquote className="heading-section text-foreground leading-tight mb-8">
            "We're not just event professionals; we're{" "}
            <span className="gold-gradient">architects of enchantment.</span>"
          </blockquote>
          <p className="text-body max-w-2xl mx-auto mb-8">
            Chicago AMP is an audiovisual production company building realms for
            the stories we tell. We combine cutting-edge technology with
            artistic vision to create experiences that resonate long after the
            lights go down.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "150+", label: "Projects" },
              { value: "12", label: "Years" },
              { value: "50+", label: "Clients" },
              { value: "∞", label: "Possibilities" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-primary">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
