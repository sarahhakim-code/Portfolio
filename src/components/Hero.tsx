import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioContent } from "../data/content";
import { ArrowDown, Flame, Terminal, Code2 } from "lucide-react";

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Light parallax effect for hero elements
  const yMarquee = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yContent = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.8], [1, 0.2]);

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden comic-halftone"
    >
      {/* Background ambient neon glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-neon-red/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-neon-cyan/15 rounded-full blur-3xl pointer-events-none" />

      {/* Decorative Comic Badges */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full mb-6 z-10 flex flex-wrap items-center justify-between gap-3">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-universe-card border-2 border-white text-xs font-mono uppercase tracking-widest text-neon-cyan shadow-comic"
        >
          <Terminal className="w-3.5 h-3.5 text-neon-red animate-pulse" />
          <span>{portfolioContent.personal.statusBadge}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="hidden sm:inline-flex items-center gap-2 px-3 py-1 bg-neon-yellow text-black font-display text-sm tracking-wider font-black uppercase comic-sticker"
        >
          <Flame className="w-4 h-4 text-black" />
          <span>{portfolioContent.personal.university}</span>
        </motion.div>
      </div>

      {/* GIANT OPPOSING MARQUEE STRIPS (Tilted) */}
      <motion.div style={{ y: yMarquee }} className="my-4 sm:my-8 relative z-10 select-none py-2">
        {/* Strip 1: Tilted -2 degrees, Moving Left */}
        <div className="transform -rotate-2 -mx-4 sm:-mx-8 overflow-hidden bg-neon-red py-3 border-y-4 border-black shadow-[0_10px_0px_#000000]">
          <div className="flex whitespace-nowrap animate-marquee-left">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-wider text-black mx-4"
              >
                {portfolioContent.hero.marqueeUpper}
              </span>
            ))}
          </div>
        </div>

        {/* Strip 2: Tilted +1.5 degrees, Moving Right */}
        <div className="transform rotate-2 -mx-4 sm:-mx-8 overflow-hidden bg-neon-cyan py-3 border-y-4 border-black mt-2 shadow-[0_10px_0px_#000000]">
          <div className="flex whitespace-nowrap animate-marquee-right">
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-wider text-black mx-4"
              >
                {portfolioContent.hero.marqueeLower}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* HERO HEADLINE & CALL TO ACTION */}
      <motion.div
        style={{ y: yContent, opacity: opacityFade }}
        className="max-w-5xl mx-auto px-4 sm:px-6 text-center mt-6 sm:mt-10 relative z-20"
      >
        {/* Eyebrow Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block mb-3 px-3 py-1 bg-universe-light border border-neon-cyan/40 text-neon-cyan font-mono text-xs uppercase tracking-widest shadow-comic-cyan"
        >
          {portfolioContent.hero.eyebrow}
        </motion.div>

        {/* Main Display Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black tracking-tight uppercase leading-[0.9] text-white"
        >
          <span className="block text-white drop-shadow-[0_4px_0_#000000]">
            {portfolioContent.hero.headlinePart1}
          </span>
          <span className="inline-block text-neon-red px-2 py-1 bg-black/40 border-2 border-white/20 transform -rotate-1 mx-2 shadow-comic">
            {portfolioContent.hero.headlineAccent}
          </span>
          <span className="text-neon-cyan glitch-text drop-shadow-[0_4px_0_#000000]" data-text={portfolioContent.hero.headlinePart2}>
            {portfolioContent.hero.headlinePart2}
          </span>
        </motion.h1>

        {/* Subtitle Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-sans leading-relaxed"
        >
          {portfolioContent.hero.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
        >
          {/* Primary Button: View My Work */}
          <a
            href={portfolioContent.hero.ctaPrimary.href}
            onClick={(e) => smoothScrollTo(e, "projects")}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-neon-red text-black font-display text-2xl tracking-wider font-black uppercase border-3 border-black shadow-comic-lg hover:shadow-comic-lg-cyan hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Code2 className="w-6 h-6" />
              {portfolioContent.hero.ctaPrimary.text}
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
          </a>

          {/* Secondary Button: Contact Me */}
          <a
            href={portfolioContent.hero.ctaSecondary.href}
            onClick={(e) => smoothScrollTo(e, "contact")}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-universe-card text-white font-display text-2xl tracking-wider font-black uppercase border-3 border-white shadow-comic-lg-cyan hover:shadow-comic-lg-red hover:bg-neon-cyan hover:text-black hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200"
          >
            <span className="relative z-10">
              {portfolioContent.hero.ctaSecondary.text} ➔
            </span>
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-14 sm:mt-16 flex flex-col items-center justify-center gap-2 text-gray-500 font-mono text-xs uppercase tracking-widest"
        >
          <span>SCROLL TO DIVE IN</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4 text-neon-cyan" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
