import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { portfolioContent, type AchievementItem } from "../data/content";
import { Star } from "lucide-react";

export const Achievements: React.FC = () => {
  const { achievements } = portfolioContent;
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll-linked progress for drawing the vertical timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 80%"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const getAccentBorder = (accent: AchievementItem["accent"]) => {
    switch (accent) {
      case "red":
        return "border-neon-red shadow-comic-red";
      case "yellow":
        return "border-neon-yellow shadow-comic-yellow";
      case "cyan":
      default:
        return "border-neon-cyan shadow-comic-cyan";
    }
  };

  const getBadgeColor = (accent: AchievementItem["accent"]) => {
    switch (accent) {
      case "red":
        return "bg-neon-red text-black";
      case "yellow":
        return "bg-neon-yellow text-black";
      case "cyan":
      default:
        return "bg-neon-cyan text-black";
    }
  };

  return (
    <section
      id="achievements"
      ref={containerRef}
      className="py-24 relative overflow-hidden bg-universe"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="font-mono text-neon-yellow font-bold text-sm">
              [{achievements.sectionNumber}]
            </span>
            <span className="px-2 py-0.5 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan text-xs font-mono tracking-widest uppercase">
              {achievements.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-display font-black tracking-tight uppercase text-white"
          >
            {achievements.heading}{" "}
            <span className="text-neon-yellow glitch-text" data-text="TIMELINE">
              TIMELINE
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-gray-400 max-w-2xl text-base sm:text-lg font-sans"
          >
            {achievements.description}
          </motion.p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative">
          {/* Background Track Line (Dotted / Dark) */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-universe-border border-l-2 border-dashed border-gray-700" />

          {/* Animated Neon Drawing Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-4 md:left-1/2 top-4 bottom-4 w-1 -translate-x-1/2 bg-gradient-to-b from-neon-red via-neon-yellow to-neon-cyan shadow-[0_0_12px_#00e5ff] z-0"
          />

          {/* Timeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {achievements.timeline.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={item.title}
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Center Node / Dot Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-0 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        delay: 0.2,
                      }}
                      className={`w-8 h-8 rounded-full bg-universe border-3 border-white flex items-center justify-center ${
                        item.accent === "red"
                          ? "shadow-[0_0_12px_#ff1f3d]"
                          : item.accent === "yellow"
                          ? "shadow-[0_0_12px_#ffe600]"
                          : "shadow-[0_0_12px_#00e5ff]"
                      }`}
                    >
                      <Star
                        className={`w-4 h-4 ${
                          item.accent === "red"
                            ? "text-neon-red"
                            : item.accent === "yellow"
                            ? "text-neon-yellow"
                            : "text-neon-cyan"
                        }`}
                      />
                    </motion.div>
                  </div>

                  {/* Spacer for 2-column layout */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card Content (Offset for left/right) */}
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isEven ? -40 : 40,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className={`pl-12 md:pl-0 w-full md:w-1/2 ${
                      isEven ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div
                      className={`bg-universe-card border-3 border-white p-6 shadow-comic hover:scale-[1.01] transition-transform ${getAccentBorder(
                        item.accent
                      )}`}
                    >
                      {/* Badge & Year Header */}
                      <div
                        className={`flex items-center gap-2 mb-3 flex-wrap ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        <span
                          className={`px-2.5 py-0.5 font-display text-xs tracking-wider font-black uppercase border border-black shadow-comic ${getBadgeColor(
                            item.accent
                          )}`}
                        >
                          {item.badge}
                        </span>
                        <span className="font-mono text-xs text-gray-400 font-bold">
                          {item.year}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <h3 className="font-display text-3xl font-black uppercase tracking-wide text-white">
                        {item.title}
                      </h3>
                      <p className="font-mono text-xs text-neon-cyan uppercase mt-0.5 font-semibold">
                        {item.subtitle}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm text-gray-300 font-sans leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
