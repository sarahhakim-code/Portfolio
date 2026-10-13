import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioContent } from "../data/content";

export const QuoteBreak: React.FC = () => {
  const { quote } = portfolioContent;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale up dynamically as user scrolls through the section
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1.1, 0.95]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 md:py-44 overflow-hidden bg-black flex items-center justify-center border-y-4 border-black"
    >
      {/* Background Comic Halftone & Dimensional Flare */}
      <div className="absolute inset-0 comic-halftone-dense opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-neon-red/20 via-transparent to-black pointer-events-none" />

      {/* Decorative top & bottom comic stripes */}
      <div className="absolute top-0 inset-x-0 h-3 bg-repeating-linear-gradient" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-6 px-4 py-1 bg-neon-yellow text-black font-display text-sm tracking-widest font-black uppercase comic-sticker"
        >
          {quote.caption}
        </motion.div>

        {/* Scaled Quote Text */}
        <motion.div style={{ scale }}>
          <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight uppercase leading-none text-white select-none">
            <span className="block text-white drop-shadow-[0_4px_0_#000000]">
              IT'S JUST A
            </span>
            <span
              className="block text-neon-red glitch-text drop-shadow-[0_0_35px_rgba(255,31,61,0.8)]"
              data-text="LEAP OF FAITH."
            >
              LEAP OF FAITH.
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 font-mono text-xs sm:text-sm tracking-widest uppercase text-neon-cyan"
        >
          {quote.author}
        </motion.p>
      </div>
    </section>
  );
};
