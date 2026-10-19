import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Database, Brain, Layers } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function Skills() {
  const { skills } = personalData;

  const getCategoryIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Layers className="w-4 h-4 text-blue-400" />;
      case 'backend':
        return <Server className="w-4 h-4 text-accent-green" />;
      case 'database':
        return <Database className="w-4 h-4 text-accent-green" />;
      case 'ai-prog':
        return <Brain className="w-4 h-4 text-accent-purple" />;
      default:
        return <Code2 className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <section 
      id="skills" 
      aria-label="Technical Skills"
      className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent-green">02</span>
        <div className="w-8 h-[1px] bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-text font-mono">
          Capabilities & Toolset
        </span>
      </div>

      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-primary-text mb-4">
          {skills.heading}
        </h2>
        <p className="text-base text-secondary-text font-light">
          {skills.subtitle}
        </p>
      </div>

      {/* 4-Group Grid with Framer Motion Elevate & Blue Frame */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {skills.groups.map((group) => (
          <motion.div
            key={group.id}
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
            className="editorial-card rounded-xl p-7 sm:p-8 flex flex-col justify-between transition-colors duration-300 border border-border/70 hover:border-blue-500/60 hover:shadow-[0_0_30px_rgba(59,130,246,0.22)] group relative overflow-hidden cursor-pointer"
          >
            {/* Ambient Blue Flare on Hover */}
            <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-md bg-surface-subtle border border-border group-hover:border-blue-500/40 transition-colors">
                    {getCategoryIcon(group.id)}
                  </span>
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-text group-hover:text-blue-300 transition-colors">
                    {group.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-muted-text/70 group-hover:text-blue-400/80 transition-colors">
                  {group.number}
                </span>
              </div>

              {/* Description */}
              <p className="text-sm text-secondary-text mb-8 leading-relaxed font-light">
                {group.description}
              </p>
            </div>

            {/* Technologies Tag List */}
            <div className="pt-4 border-t border-border/50 group-hover:border-blue-500/20 transition-colors">
              <span className="text-[11px] font-mono tracking-wider text-muted-text uppercase block mb-3">
                Stack & Concepts
              </span>
              <div className="flex flex-wrap gap-2">
                {group.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center text-xs font-mono px-3 py-1.5 rounded-md bg-surface-subtle/80 border border-border text-primary-text/90 group-hover:border-blue-500/30 transition-all hover:bg-surface-elevated hover:text-blue-200"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Minimal Footer Note */}
      <div className="mt-12 text-xs font-mono text-muted-text flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/70" />
        <span>Continuously refining tools through personal projects and coursework.</span>
      </div>
    </section>
  );
}
