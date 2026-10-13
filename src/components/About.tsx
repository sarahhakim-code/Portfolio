import React from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "../data/content";
import { Theater, BookOpen, GraduationCap, Sparkles } from "lucide-react";

export const About: React.FC = () => {
  const { about, personal } = portfolioContent;

  const iconMap: Record<string, React.ReactNode> = {
    DEGREE: <GraduationCap className="w-5 h-5 text-neon-cyan" />,
    "STAGE EXPERIENCE": <Theater className="w-5 h-5 text-neon-red" />,
    VOLUNTEERING: <BookOpen className="w-5 h-5 text-neon-yellow" />,
    "CORE FOCUS": <Sparkles className="w-5 h-5 text-neon-cyan" />,
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-universe/95">
      {/* Decorative background grid and comic halftone */}
      <div className="absolute inset-0 comic-halftone opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-2"
          >
            <span className="font-mono text-neon-red font-bold text-sm">
              [{about.sectionNumber}]
            </span>
            <span className="px-2 py-0.5 bg-neon-cyan/20 border border-neon-cyan text-neon-cyan text-xs font-mono tracking-widest uppercase">
              {about.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-display font-black tracking-tight uppercase text-white"
          >
            {about.heading}{" "}
            <span className="text-neon-cyan glitch-text" data-text="UNMASKED">
              UNMASKED
            </span>
          </motion.h2>
        </div>

        {/* Content Grid: Photo + Story Comic Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Panel (5 Columns) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Comic background offset layer */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-neon-red via-neon-yellow to-neon-cyan transform -rotate-2 rounded-none blur-xs opacity-75 group-hover:opacity-100 transition duration-300" />

              {/* Main Photo Card Panel */}
              <div className="relative bg-universe-card border-4 border-white p-3 shadow-comic-lg-red group-hover:shadow-comic-lg-cyan transition-all duration-300">
                {/* Photo Header Bar */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b-2 border-universe-border">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-neon-red" />
                    <div className="w-3 h-3 rounded-full bg-neon-yellow" />
                    <div className="w-3 h-3 rounded-full bg-neon-cyan" />
                  </div>
                  <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">
                    ID: SARAH_HAKIM_V1
                  </span>
                </div>

                {/* The Image */}
                <div className="relative overflow-hidden aspect-3/4 border-2 border-black bg-universe">
                  <img
                    src={personal.photo}
                    alt={personal.name}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback if local image not found
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  {/* Comic Speech Bubble / Sticker Overlay */}
                  <div className="absolute top-3 right-3 bg-neon-yellow text-black font-display text-sm tracking-wider font-black px-2.5 py-1 border-2 border-black shadow-comic transform rotate-3">
                    B.TECH CSE '29 ✦
                  </div>

                  {/* Bottom Vignette Caption */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
                    <p className="font-display text-2xl font-bold uppercase tracking-wide text-white">
                      {personal.name}
                    </p>
                    <p className="font-mono text-xs text-neon-cyan uppercase">
                      {personal.university}
                    </p>
                  </div>
                </div>

                {/* Bottom Comic Tagline */}
                <div className="mt-3 pt-2 border-t-2 border-universe-border flex justify-between items-center text-xs font-mono">
                  <span className="text-gray-400">STATUS:</span>
                  <span className="text-neon-cyan font-bold tracking-wider">
                    {personal.statusBadge}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Story & Highlights (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Story Panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-universe-card border-3 border-white p-6 sm:p-8 shadow-comic-lg relative"
            >
              {/* Comic sticker pin */}
              <div className="absolute -top-3.5 left-6 bg-neon-red text-black font-display text-xs tracking-widest font-black uppercase px-3 py-0.5 border-2 border-black shadow-comic">
                ORIGIN STORY
              </div>

              <p className="text-lg sm:text-xl text-white font-sans leading-relaxed pt-2">
                {about.bioParagraph1}
              </p>

              <div className="my-4 h-0.5 bg-gradient-to-r from-neon-red via-neon-cyan to-transparent" />

              <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
                {about.bioParagraph2}
              </p>
            </motion.div>

            {/* Highlights Grid Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {about.highlights.map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  className="bg-universe-light border-2 border-universe-border hover:border-neon-cyan p-4 shadow-comic hover:shadow-comic-cyan transition-all duration-200"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    {iconMap[item.label] || <Sparkles className="w-4 h-4 text-neon-cyan" />}
                    <span className="font-mono text-xs uppercase tracking-wider text-gray-400">
                      {item.label}
                    </span>
                  </div>
                  <div className="font-display text-2xl font-bold tracking-wide text-white uppercase">
                    {item.value}
                  </div>
                  <div className="font-mono text-xs text-neon-cyan mt-0.5">
                    {item.sub}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
