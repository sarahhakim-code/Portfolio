import React, { useState } from "react";
import { motion } from "framer-motion";
import { portfolioContent } from "../data/content";
import { Mail, Send, CheckCircle2, MapPin } from "lucide-react";

export const Contact: React.FC = () => {
  const { contact } = portfolioContent;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate interactive sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 800);
  };

  const getSocialIcon = (icon: string) => {
    switch (icon) {
      case "github":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      case "linkedin":
        return (
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        );
      case "mail":
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-universe/95">
      {/* Background glow accents */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-neon-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl pointer-events-none" />

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
              [{contact.sectionNumber}]
            </span>
            <span className="px-2 py-0.5 bg-neon-red/20 border border-neon-red text-neon-red text-xs font-mono tracking-widest uppercase">
              {contact.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-7xl font-display font-black tracking-tight uppercase text-white"
          >
            {contact.heading}{" "}
            <span className="text-neon-red glitch-text" data-text="TRANSMIT">
              TRANSMIT
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-3 text-gray-400 max-w-2xl text-base sm:text-lg font-sans"
          >
            {contact.description}
          </motion.p>
        </div>

        {/* 2-Column Grid: Contact Form + Comic Info / Socials */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Panel (7 Columns) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-universe-card border-3 border-white p-6 sm:p-8 shadow-comic-lg"
          >
            <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-universe-border">
              <span className="font-display text-xl font-bold tracking-wider text-neon-cyan uppercase">
                SEND A FREQUENCY TRANSMISSION
              </span>
              <span className="font-mono text-xs text-gray-400">STATUS: OPEN</span>
            </div>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-neon-cyan/20 border-2 border-neon-cyan flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8 text-neon-cyan" />
                </div>
                <h3 className="font-display text-4xl font-black uppercase text-white tracking-wide">
                  MESSAGE RECEIVED!
                </h3>
                <p className="mt-2 text-gray-300 font-sans max-w-md">
                  Thank you for reaching out! Sarah will review your message and beam a response back soon.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2 bg-universe border-2 border-white text-xs font-mono tracking-widest uppercase hover:bg-neon-red hover:text-black transition-colors shadow-comic"
                >
                  [ SEND ANOTHER MESSAGE ]
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-widest mb-1.5">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Peter Parker / Maya Lin"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-universe border-2 border-universe-border focus:border-neon-cyan px-4 py-3 text-white font-sans text-sm focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-widest mb-1.5">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-universe border-2 border-universe-border focus:border-neon-cyan px-4 py-3 text-white font-sans text-sm focus:outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono text-xs text-gray-400 uppercase tracking-widest mb-1.5">
                    TRANSMISSION MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Tell me about your project, speaking invitation, question, or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-universe border-2 border-universe-border focus:border-neon-cyan px-4 py-3 text-white font-sans text-sm focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-neon-red text-black font-display text-2xl tracking-wider font-black uppercase border-2 border-black shadow-comic-lg hover:shadow-comic-lg-cyan hover:bg-white transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>BEAMING DATA...</span>
                  ) : (
                    <>
                      <span>TRANSMIT MESSAGE</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Details & Social Links (5 Columns) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-universe-card border-3 border-white p-6 shadow-comic-lg"
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-4">
                BASE OF OPERATIONS
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-universe border border-white/20 text-neon-cyan">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-400 uppercase block">LOCATION</span>
                    <span className="text-white font-sans text-sm">{contact.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-universe border border-white/20 text-neon-red">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-gray-400 uppercase block">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-neon-cyan font-mono text-sm hover:underline"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Channels Comic Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-universe-card border-3 border-white p-6 shadow-comic-lg"
            >
              <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-white mb-4">
                CONNECTED FREQUENCIES
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contact.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-universe border-2 border-white/20 hover:border-neon-cyan hover:bg-universe-light shadow-comic transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-neon-cyan transition-colors">
                      {getSocialIcon(social.icon)}
                    </div>
                    <div>
                      <div className="font-display text-lg font-bold uppercase tracking-wider text-white group-hover:text-neon-cyan transition-colors">
                        {social.name}
                      </div>
                      <div className="font-mono text-[10px] text-gray-400">
                        {social.handle}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
