import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolio';

export default function About() {
  const { about } = personalData;

  return (
    <section 
      id="about" 
      aria-label="About Me"
      className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* Editorial Section Index */}
      <div className="flex items-center gap-3 mb-12 sm:mb-16">
        <span className="font-mono text-xs tracking-widest text-accent-green">01</span>
        <div className="w-8 h-[1px] bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-text font-mono">
          Identity & Approach
        </span>
      </div>

      {/* Main Grid: Editorial Text Column & Structured Info Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Narrative & Specific Areas of Interest */}
        <div className="lg:col-span-7 space-y-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif font-light text-primary-text mb-6">
              {about.heading}
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-secondary-text font-light leading-relaxed">
              {about.narrative.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Core Areas of Interest with minimal markers */}
          <div className="pt-6 border-t border-border/50">
            <h3 className="text-xs uppercase tracking-widest text-muted-text font-mono mb-4">
              What I enjoy working on
            </h3>
            <ul className="space-y-3">
              {about.interests.map((interest, index) => (
                <li key={index} className="flex items-start gap-3 group text-sm sm:text-base text-secondary-text">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-green/70 group-hover:bg-accent-green transition-colors shrink-0" />
                  <span className="group-hover:text-primary-text transition-colors">
                    {interest}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Column: Editorial Metadata Table / Specs */}
        <div className="lg:col-span-5">
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="editorial-card rounded-xl p-6 sm:p-8 space-y-6 border border-border/70 hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.22)] transition-colors duration-300 relative overflow-hidden group cursor-pointer"
          >
            {/* Ambient Blue Flare on Hover */}
            <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-border/60 group-hover:border-blue-500/20 transition-colors">
              <span className="text-xs uppercase tracking-widest text-muted-text font-mono group-hover:text-blue-300 transition-colors">
                Academic Profile
              </span>
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            </div>

            <dl className="space-y-5 text-sm">
              {about.highlights.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-1 pb-4 border-b border-border/30 last:border-b-0 last:pb-0">
                  <dt className="text-xs font-mono tracking-wider text-muted-text uppercase">
                    {item.label}
                  </dt>
                  <dd className="text-primary-text font-medium leading-snug">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            {/* Subtle quote / principle */}
            <div className="pt-4 mt-2 border-t border-border/40 text-xs italic text-secondary-text/80 font-serif">
              "Curiosity thrives when combined with hands-on implementation."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
