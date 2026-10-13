import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioContent } from "../data/content";
import { Menu, X, Sparkles } from "lucide-react";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Detect which section is currently active
      const sections = ["hero", "about", "skills", "projects", "achievements", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-universe/90 backdrop-blur-md border-b-2 border-universe-border shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left Nav items (Desktop: 01 Home, 02 About, 03 Skills) */}
            <nav className="hidden lg:flex items-center space-x-6">
              {portfolioContent.navigation.slice(0, 3).map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.number}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group relative text-xs tracking-widest font-mono uppercase transition-colors py-1 ${
                      isActive ? "text-neon-cyan font-bold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-neon-red font-bold mr-1">{item.number}</span>
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan shadow-[0_0_8px_#00e5ff]"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Center Brand / Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex items-center gap-2 text-center"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-neon-red to-neon-cyan rounded-none blur-xs opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative px-3 py-1 bg-universe border-2 border-white flex items-center gap-1.5 shadow-comic">
                  <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-white">
                    SARAH
                  </span>
                  <span className="font-display text-xl sm:text-2xl font-black tracking-wider text-neon-red">
                    HAKIM
                  </span>
                  <Sparkles className="w-4 h-4 text-neon-cyan animate-pulse" />
                </div>
              </div>
            </a>

            {/* Right Nav items (Desktop: 04 Projects, 05 Achievements, 06 Contact) */}
            <nav className="hidden lg:flex items-center space-x-6">
              {portfolioContent.navigation.slice(3, 6).map((item) => {
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <a
                    key={item.number}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`group relative text-xs tracking-widest font-mono uppercase transition-colors py-1 ${
                      isActive ? "text-neon-cyan font-bold" : "text-gray-400 hover:text-white"
                    }`}
                  >
                    <span className="text-neon-red font-bold mr-1">{item.number}</span>
                    <span className="group-hover:translate-x-0.5 inline-block transition-transform">
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-cyan shadow-[0_0_8px_#00e5ff]"
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Mobile Menu Trigger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 bg-universe-card border-2 border-white text-white hover:text-neon-cyan shadow-comic transition-colors focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-neon-red" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-30 bg-universe/98 backdrop-blur-xl comic-halftone flex flex-col justify-center px-8 lg:hidden"
          >
            {/* Top decorative stripe */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-neon-red via-neon-cyan to-neon-yellow" />

            <div className="max-w-md mx-auto w-full flex flex-col space-y-4">
              <div className="mb-2 text-center">
                <span className="font-display text-xs tracking-widest text-neon-cyan uppercase">
                  ✦ MULTIVERSE NAVIGATION ✦
                </span>
              </div>

              {portfolioContent.navigation.map((item, idx) => (
                <motion.a
                  key={item.number}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  className="flex items-center justify-between p-3.5 bg-universe-card border-2 border-white/20 hover:border-neon-cyan shadow-comic transition-all"
                >
                  <span className="font-mono text-neon-red text-sm font-bold">
                    {item.number}
                  </span>
                  <span className="font-display text-2xl tracking-wider text-white hover:text-neon-cyan uppercase">
                    {item.label}
                  </span>
                  <span className="text-neon-cyan text-sm">➔</span>
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35 }}
                className="pt-6 text-center"
              >
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="inline-block w-full py-3 bg-neon-red text-black font-display text-lg tracking-wider font-black uppercase border-2 border-white shadow-comic-cyan hover:bg-white transition-all"
                >
                  LET'S CONNECT ⚡
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
