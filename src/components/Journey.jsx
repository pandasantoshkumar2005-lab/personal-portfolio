import React from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolio';

export default function Journey() {
  const { journey } = personalData;

  return (
    <section 
      id="journey" 
      aria-label="Learning Journey"
      className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent-green">05</span>
        <div className="w-8 h-[1px] bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-text font-mono">
          Growth & Progress
        </span>
      </div>

      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-primary-text mb-4">
          {journey.heading}
        </h2>
        <p className="text-base text-secondary-text font-light">
          {journey.subtitle}
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:left-[11px] sm:before:left-[15px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gradient-to-b before:from-blue-500/60 before:via-accent-purple/40 before:to-transparent">
        {journey.milestones.map((milestone, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Marker Dot */}
            <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-3 h-3 rounded-full bg-surface-elevated border-2 border-border group-hover:border-blue-400 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)] transition-all flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
            </div>

            {/* Milestone Content with Framer Motion Elevate & Blue Frame */}
            <motion.div
              whileHover={{ x: 8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 350, damping: 22 }}
              className="p-6 rounded-xl bg-surface-subtle/80 border border-border/60 hover:border-blue-500/60 hover:shadow-[0_0_28px_rgba(59,130,246,0.2)] transition-all max-w-3xl cursor-pointer group/card"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="font-mono text-[11px] text-blue-400 tracking-wider uppercase">
                  Phase {milestone.step}
                </span>
                <span className="font-mono text-xs text-muted-text">
                  {milestone.focus}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-normal text-primary-text group-hover/card:text-blue-100 transition-colors mb-2">
                {milestone.title}
              </h3>

              <p className="text-sm text-secondary-text font-light leading-relaxed">
                {milestone.description}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
