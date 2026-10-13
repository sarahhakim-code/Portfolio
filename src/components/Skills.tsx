import React from "react";
import { motion } from "framer-motion";
import { portfolioContent, type SkillItem } from "../data/content";
import { Code, GitBranch, Mic, GraduationCap, Globe, Zap } from "lucide-react";

export const Skills: React.FC = () => {
  const { skills } = portfolioContent;

  const getSkillIcon = (id: string) => {
    switch (id) {
      case "c-prog":
        return <Code className="w-6 h-6 text-neon-cyan" />;
      case "git-github":
        return <GitBranch className="w-6 h-6 text-neon-cyan" />;
      case "theatre":
        return <Mic className="w-6 h-6 text-neon-red" />;
      case "teaching":
        return <GraduationCap className="w-6 h-6 text-neon-yellow" />;
      case "languages":
        return <Globe className="w-6 h-6 text-neon-red" />;
      default:
        return <Zap className="w-6 h-6 text-neon-cyan" />;
    }
  };

  const getBadgeStyle = (color: SkillItem["badgeColor"]) => {
    switch (color) {
      case "red":
        return "bg-neon-red text-black border-black";
      case "yellow":
        return "bg-neon-yellow text-black border-black";
      case "cyan":
      default:
        return "bg-neon-cyan text-black border-black";
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-universe">
      {/* Background Halftone & Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-neon-red/10 rounded-full blur-3xl pointer-events-none" />

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
            <span className="font-mono text-neon-cyan font-bold text-sm">
              [{skills.sectionNumber}]
            </span>
            <span className="px-2 py-0.5 bg-neon-red/20 border border-neon-red text-neon-red text-xs font-mono tracking-widest uppercase">
              {skills.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-display font-black tracking-tight uppercase text-white"
          >
            {skills.heading}{" "}
            <span className="text-neon-red glitch-text" data-text="UNLOCKED">
              UNLOCKED
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-gray-400 max-w-2xl text-base sm:text-lg font-sans"
          >
            {skills.description}
          </motion.p>
        </div>

        {/* Skills Cards Grid: Animated pop-in with stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.items.map((skill, idx) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: [0.175, 0.885, 0.32, 1.275], // Bouncy pop-in
              }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative bg-universe-card border-3 border-white p-6 shadow-comic hover:shadow-comic-lg-cyan transition-all duration-300 flex flex-col justify-between"
            >
              {/* Comic sticker tag on top corner */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 bg-universe border-2 border-white/30 group-hover:border-neon-cyan shadow-comic transition-colors">
                  {getSkillIcon(skill.id)}
                </div>

                <span
                  className={`px-2.5 py-1 font-display text-xs tracking-wider font-black uppercase border-2 shadow-comic ${getBadgeStyle(
                    skill.badgeColor
                  )}`}
                >
                  {skill.status}
                </span>
              </div>

              {/* Title & Category */}
              <div>
                <span className="font-mono text-xs text-gray-400 uppercase tracking-widest block mb-1">
                  CATEGORY: {skill.category}
                </span>
                <h3 className="font-display text-3xl font-black uppercase tracking-wide text-white group-hover:text-neon-cyan transition-colors">
                  {skill.name}
                </h3>
                <p className="mt-3 text-sm text-gray-300 font-sans leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Comic Power Level Meter */}
              <div className="mt-6 pt-4 border-t-2 border-universe-border">
                <div className="flex justify-between items-center text-xs font-mono mb-1.5">
                  <span className="text-gray-400">POWER LEVEL</span>
                  <span className="text-neon-cyan font-bold">{skill.powerLevel}%</span>
                </div>
                <div className="w-full h-3 bg-universe border border-white/40 p-0.5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.powerLevel}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                    className={`h-full ${
                      skill.badgeColor === "red"
                        ? "bg-neon-red shadow-[0_0_8px_#ff1f3d]"
                        : skill.badgeColor === "yellow"
                        ? "bg-neon-yellow shadow-[0_0_8px_#ffe600]"
                        : "bg-neon-cyan shadow-[0_0_8px_#00e5ff]"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
