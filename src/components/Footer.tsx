import React from "react";
import { portfolioContent } from "../data/content";
import { ArrowUp, Sparkles, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  const { footer, navigation } = portfolioContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const smoothScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const elem = document.getElementById(targetId);
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black border-t-4 border-black overflow-hidden pt-12 pb-16">
      {/* SECOND MARQUEE STRIP (Tilted in opposite direction) */}
      <div className="relative -mx-4 overflow-hidden bg-neon-cyan py-2.5 border-y-3 border-black transform -rotate-1 mb-12 shadow-[0_6px_0px_#000000]">
        <div className="flex whitespace-nowrap animate-marquee-left">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-xl sm:text-2xl font-display font-black tracking-wider text-black mx-4"
            >
              {footer.marquee}
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-universe-border">
          {/* Brand & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-display text-3xl font-black tracking-wider text-white">
                SARAH
              </span>
              <span className="font-display text-3xl font-black tracking-wider text-neon-red">
                HAKIM
              </span>
              <Sparkles className="w-5 h-5 text-neon-cyan" />
            </div>
            <p className="text-gray-400 font-mono text-xs uppercase tracking-widest">
              {footer.tagline}
            </p>
          </div>

          {/* Repeat Numbered Nav Links */}
          <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
            {navigation.map((item) => (
              <a
                key={item.number}
                href={item.href}
                onClick={(e) => smoothScrollTo(e, item.href)}
                className="group text-xs font-mono uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
              >
                <span className="text-neon-cyan font-bold mr-1">{item.number}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Back to Top Comic Button */}
          <button
            onClick={scrollToTop}
            className="p-3 bg-universe-card border-2 border-white hover:border-neon-cyan text-white hover:text-neon-cyan shadow-comic transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

        {/* Bottom Copyright & Credit */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs font-mono text-gray-500">
          <div>{footer.copyright}</div>
          <div className="flex items-center gap-1">
            <span>BUILT WITH</span>
            <Heart className="w-3.5 h-3.5 text-neon-red fill-neon-red" />
            <span>AND CODE COURAGE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
