import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { portfolioContent, type ProjectItem } from "../data/content";
import { ExternalLink } from "lucide-react";

interface TiltCardProps {
  project: ProjectItem;
  index: number;
}

const TiltCard: React.FC<TiltCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 25 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      style={{ perspective: 1200 }}
      className="w-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative group bg-universe-card border-3 border-white p-5 shadow-comic-lg hover:shadow-comic-lg-red transition-shadow duration-300 flex flex-col justify-between h-full"
      >
        {/* Comic Issue Sticker Badge */}
        <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-universe-border">
          <span className="px-2.5 py-0.5 bg-neon-red text-black font-display text-xs tracking-wider font-black uppercase border border-black shadow-comic">
            {project.comicLabel}
          </span>
          <span className="font-mono text-xs text-gray-400">STATUS: PROTOTYPE</span>
        </div>

        {/* Project Thumbnail Image with Comic Overlay */}
        <div className="relative overflow-hidden aspect-16/10 border-2 border-black bg-universe mb-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
          
          <div className="absolute bottom-2 left-2 right-2">
            <span className="font-mono text-[11px] text-neon-cyan font-bold tracking-wider uppercase block">
              {project.tagline}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="flex-1">
          <h3 className="font-display text-3xl font-black uppercase tracking-wide text-white group-hover:text-neon-cyan transition-colors">
            {project.title}
          </h3>

          <p className="mt-2.5 text-sm text-gray-300 font-sans leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-universe-light border border-white/20 text-gray-300 font-mono text-[11px] uppercase tracking-wider"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Buttons / Actions */}
        <div className="mt-6 pt-4 border-t-2 border-universe-border flex items-center justify-between gap-3">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-universe border-2 border-white/30 hover:border-white text-gray-300 hover:text-white shadow-comic transition-colors"
              title="GitHub Repository"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}

          <a
            href={project.demoUrl || "#"}
            className="flex-1 py-2.5 px-4 bg-neon-cyan text-black font-display text-lg tracking-wider font-black uppercase text-center border-2 border-black shadow-comic hover:bg-white hover:shadow-comic-red transition-all flex items-center justify-center gap-1.5"
          >
            <span>VIEW PROJECT</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const { projects } = portfolioContent;

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-universe/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="font-mono text-neon-red font-bold text-sm">
              [{projects.sectionNumber}]
            </span>
            <span className="px-2 py-0.5 bg-neon-yellow/20 border border-neon-yellow text-neon-yellow text-xs font-mono tracking-widest uppercase">
              {projects.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-display font-black tracking-tight uppercase text-white"
          >
            {projects.heading}{" "}
            <span className="text-neon-cyan glitch-text" data-text="SHOWCASE">
              SHOWCASE
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-gray-400 max-w-2xl text-base sm:text-lg font-sans"
          >
            {projects.description}
          </motion.p>
        </div>

        {/* Project Cards Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.items.map((project, idx) => (
            <TiltCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
