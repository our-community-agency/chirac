import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";

const projects = [
  { title: "Lakeshore Music Festival", category: "Live Event Production", image: portfolio1 },
  { title: "Behind The Glass", category: "Video Production", image: portfolio2 },
  { title: "Infinite Horizons", category: "Immersive Installation", image: portfolio3 },
  { title: "Summit 2025", category: "Corporate Event", image: portfolio4 },
  { title: "Neon Dreams Tour", category: "Music Video", image: portfolio5 },
  { title: "Frequency Lab", category: "Sound Design", image: portfolio6 },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative overflow-hidden cursor-pointer"
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
        <p className="text-primary text-xs tracking-[0.2em] uppercase font-medium">
          {project.category}
        </p>
        <h3 className="text-foreground text-xl font-bold mt-1">{project.title}</h3>
      </div>
    </motion.div>
  );
};

const WorkSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-24 md:py-32 section-padding">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-3">
          Selected Work
        </p>
        <h2 className="heading-section text-foreground">
          Stories We've Brought to Life
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default WorkSection;
