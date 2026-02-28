import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const serviceOptions = [
  "Video Production",
  "Live Event Production",
  "Sound & Lighting",
  "Set & Atmosphere",
  "Full Campaign",
];

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  return (
    <section id="contact" className="py-24 md:py-32 section-padding bg-card">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">
          Let's Create
        </p>
        <h2 className="heading-section text-foreground mb-4">
          Start Your Project
        </h2>
        <p className="text-body mb-12">
          Tell us about your vision. We'll craft a creative plan tailored to
          your story.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-8"
        >
          {/* Service Selection */}
          <div>
            <label className="text-foreground text-sm font-medium tracking-wider uppercase block mb-4">
              What do you need?
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceOptions.map((service) => (
                <button
                  key={service}
                  type="button"
                  onClick={() => toggleService(service)}
                  className={`px-4 py-2 text-sm border transition-all duration-300 ${
                    selectedServices.includes(service)
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-muted-foreground"
                  }`}
                >
                  {service}
                </button>
              ))}
            </div>
          </div>

          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-muted-foreground text-xs tracking-wider uppercase block mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-border text-foreground py-3 focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-muted-foreground text-xs tracking-wider uppercase block mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-border text-foreground py-3 focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="text-muted-foreground text-xs tracking-wider uppercase block mb-2">
              Tell us about your project
            </label>
            <textarea
              rows={4}
              className="w-full bg-transparent border-b border-border text-foreground py-3 focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="Describe your vision, timeline, and any details..."
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold tracking-wider uppercase text-sm px-10 py-4 hover:bg-primary/90 transition-all duration-300 group"
          >
            Submit & Get a Creative Plan
            <Send
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;
