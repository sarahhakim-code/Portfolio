import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "../data/content";

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Smooth random increment to feel like a high-tech bootloader
        const increment = Math.floor(Math.random() * 8) + 3;
        const next = Math.min(prev + increment, 100);
        return next;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const exitTimeout = setTimeout(() => {
        setIsDone(true);
        setTimeout(onComplete, 650); // Give time for wipe transition
      }, 350);
      return () => clearTimeout(exitTimeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-universe comic-halftone overflow-hidden"
        >
          {/* Neon comic accent bars on top and bottom */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-neon-red via-neon-cyan to-neon-yellow" />
          <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-neon-yellow via-neon-red to-neon-cyan" />

          {/* Background grid accent */}
          <div className="absolute inset-0 bg-universe/90 pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center px-6 max-w-lg text-center">
            {/* Comic issue badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="mb-4 inline-block px-3 py-1 bg-neon-red text-black font-display text-sm tracking-widest font-black uppercase comic-sticker"
            >
              {portfolioContent.personal.statusBadge}
            </motion.div>

            {/* Main title */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold uppercase tracking-wide text-white"
            >
              <span className="text-neon-cyan glitch-text" data-text="ENTERING">
                ENTERING
              </span>{" "}
              <span>SARAH'S</span>{" "}
              <span className="text-neon-red drop-shadow-[0_0_20px_rgba(255,31,61,0.8)]">
                UNIVERSE...
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-3 text-xs sm:text-sm tracking-widest uppercase text-gray-400 font-mono"
            >
              {portfolioContent.loader.subText}
            </motion.p>

            {/* Progress Counter Box */}
            <div className="mt-8 w-full max-w-xs">
              <div className="flex justify-between items-baseline mb-2">
                <span className="font-mono text-xs text-neon-cyan tracking-wider">
                  SYSTEM READY
                </span>
                <span className="font-display text-3xl font-bold text-white tracking-wider">
                  {progress}%
                </span>
              </div>

              {/* Comic styled progress bar */}
              <div className="h-4 w-full bg-universe-border border-2 border-white p-0.5 shadow-comic-red">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-red via-neon-cyan to-neon-yellow"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
            </div>

            {/* Skip Button for impatient visitors */}
            <button
              onClick={() => {
                setProgress(100);
                setIsDone(true);
                setTimeout(onComplete, 200);
              }}
              className="mt-8 text-xs font-mono tracking-widest text-gray-500 hover:text-neon-cyan transition-colors underline decoration-dotted"
            >
              [ SKIP INTRO ➔ ]
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
