import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function Education() {
  const { education } = personalData;

  return (
    <section 
      id="education" 
      aria-label="Academic Foundations"
      className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent-green">04</span>
        <div className="w-8 h-[1px] bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-text font-mono">
          Undergraduate Study
        </span>
      </div>

      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-primary-text mb-4">
          {education.heading}
        </h2>
        <p className="text-base text-secondary-text font-light">
          {education.subtitle}
        </p>
      </div>

      {/* Main Editorial Card with Framer Motion Elevate & Blue Frame */}
      <motion.div
        whileHover={{ y: -6, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="editorial-card rounded-2xl p-6 sm:p-10 mb-12 border border-border/70 hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.2)] transition-colors duration-300 relative overflow-hidden group cursor-pointer"
      >
        {/* Ambient Blue Flare on Hover */}
        <div className="absolute -top-20 -right-20 w-44 h-44 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-border/50 group-hover:border-blue-500/20 transition-colors">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-border group-hover:border-blue-500/40 text-xs font-mono text-blue-300 mb-3 transition-colors">
              <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
              <span>{education.degree}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-primary-text font-normal group-hover:text-blue-100 transition-colors">
              {education.branch}
            </h3>
            <p className="text-sm font-mono text-secondary-text mt-1">
              Specialization: <span className="text-primary-text font-medium">{education.specialization}</span>
            </p>
          </div>

          <div className="flex flex-col md:items-end text-sm font-mono text-muted-text">
            <span className="text-blue-400 font-medium">{education.academicYear}</span>
            <span>{education.institution}</span>
            <span className="text-xs text-muted-text/80 mt-1">{education.location}</span>
          </div>
        </div>

        {/* Narrative */}
        <div className="pt-8">
          <p className="text-base text-secondary-text font-light leading-relaxed max-w-4xl">
            {education.narrative}
          </p>
        </div>
      </motion.div>

      {/* Coursework Pillars */}
      <div>
        <h3 className="text-xs uppercase tracking-widest text-muted-text font-mono mb-6">
          Core Coursework & Theoretical Pillars
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {education.coreAreas.map((area, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.025 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="p-5 rounded-xl bg-surface-subtle border border-border/60 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.18)] transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:scale-125 transition-transform" />
                <h4 className="text-sm font-medium text-primary-text group-hover:text-blue-200 transition-colors">
                  {area.title}
                </h4>
              </div>
              <p className="text-xs text-secondary-text font-light leading-relaxed pl-3.5">
                {area.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
