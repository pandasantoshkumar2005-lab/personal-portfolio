import React from 'react';
import { ArrowDown, ArrowUpRight, Camera } from 'lucide-react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolio';

export default function Hero() {
  return (
    <section 
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-6 sm:px-8 max-w-6xl mx-auto"
    >
      {/* Top / Main Editorial Composition with Middle-Left Photocard */}
      <div className="my-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Middle-Left Side: Interactive Framer Photocard */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="group relative w-full max-w-[320px] sm:max-w-[350px] aspect-[4/5] rounded-2xl p-1.5 transition-all duration-300"
          >
            {/* Ambient Blue Glowing Frame (intensifies on hover) */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-blue-600/30 via-cyan-500/20 to-blue-400/40 opacity-40 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105 pointer-events-none" />
            
            {/* The Framer Blue Border Container */}
            <div className="relative w-full h-full rounded-2xl bg-surface-elevated/90 border border-blue-500/30 group-hover:border-blue-400/80 shadow-[0_0_20px_rgba(59,130,246,0.15)] group-hover:shadow-[0_0_40px_rgba(59,130,246,0.35)] overflow-hidden flex flex-col justify-between p-5 sm:p-6 transition-all duration-300">
              
              {/* Subtle blue light scan/shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-blue-500/10 pointer-events-none" />

              {/* Top Bar of Photocard */}
              <div className="flex items-center justify-between z-10">
                <span className="text-[10px] font-mono tracking-wider px-2 py-0.5 rounded bg-blue-950/60 text-blue-300 border border-blue-500/30">
                  DEVELOPER / PROFILE
                </span>
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400" />
                </span>
              </div>

              {/* Photo Display Area */}
              <div className="my-auto py-6 flex flex-col items-center justify-center text-center z-10">
                {personalData.avatarUrl ? (
                  <div className="w-full h-full rounded-xl overflow-hidden border border-blue-500/30 group-hover:border-blue-400/60 transition-colors">
                    <img 
                      src={personalData.avatarUrl} 
                      alt={personalData.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                  </div>
                ) : (
                  /* Stylized Photocard Slot Ready for Photo Attachment */
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-24 h-24 rounded-2xl bg-surface-subtle border border-blue-500/40 group-hover:border-blue-400 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.2)] group-hover:shadow-[0_0_35px_rgba(59,130,246,0.4)] transition-all">
                      <span className="text-3xl font-serif text-blue-300 font-medium">
                        {personalData.initials}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-blue-200">
                        <Camera className="w-3.5 h-3.5 text-blue-400" />
                        <span>Attach Your Photo</span>
                      </div>
                      <p className="text-[11px] font-mono text-muted-text max-w-[210px] leading-relaxed">
                        Set <span className="text-blue-300">avatarUrl</span> in <code className="text-accent-green">portfolio.js</code>
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Info Bar of Photocard */}
              <div className="pt-3 border-t border-border/40 flex items-center justify-between text-[11px] font-mono text-muted-text z-10">
                <span className="text-primary-text font-medium truncate max-w-[170px]">
                  {personalData.name}
                </span>
                <span className="text-blue-400/90 text-[10px]">
                  CSE &bull; AI-ML
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Editorial Composition & Headline */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="lg:col-span-7 space-y-7"
        >
          {/* Editorial Sub-Header / Portfolio Year */}
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface-subtle/80 text-[11px] font-mono tracking-widest text-muted-text">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
              <span>{personalData.hero.badge}</span>
            </div>

            <div className="inline-flex items-center gap-2 text-xs tracking-wider text-muted-text font-mono">
              <span className="text-border">/</span>
              <span>{personalData.location}</span>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-1">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight text-primary-text leading-[1.08] font-serif">
              <span className="block text-primary-text font-serif italic font-normal">
                {personalData.hero.headlineLine1}
              </span>
              <span className="block text-secondary-text font-sans font-medium text-3xl sm:text-4xl md:text-5xl tracking-tight mt-1">
                {personalData.hero.headlineLine2}
              </span>
            </h1>
          </div>

          {/* Introduction Paragraph */}
          <div className="max-w-xl">
            <p className="text-base sm:text-lg text-secondary-text leading-relaxed font-light">
              I'm <span className="text-primary-text font-normal">{personalData.name}</span>, a Computer Science student exploring software development, modern web experiences, and artificial intelligence.
            </p>
          </div>

          {/* Call to Actions & Status line with Framer hover zoom */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            <div className="flex items-center gap-3.5">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface-elevated hover:bg-surface-hover border border-border hover:border-blue-400 text-xs uppercase tracking-widest text-primary-text hover:shadow-[0_0_20px_rgba(59,130,246,0.25)] transition-all duration-200 group"
              >
                <span>{personalData.hero.primaryCta}</span>
                <ArrowDown className="w-3.5 h-3.5 text-accent-green group-hover:translate-y-0.5 transition-transform" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-border/70 hover:border-blue-500/50 bg-transparent hover:bg-surface-subtle text-xs uppercase tracking-widest text-secondary-text hover:text-primary-text hover:shadow-[0_0_20px_rgba(59,130,246,0.18)] transition-all duration-200 group"
              >
                <span>{personalData.hero.secondaryCta}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-muted-text group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            </div>

            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2.5 px-3 py-2 rounded-lg bg-surface/40 border border-border/50 text-xs text-muted-text">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-green opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-green" />
              </span>
              <span className="tracking-wide text-[11px] font-mono">{personalData.status}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Editorial Bottom Bar / Scroll Hint */}
      <div className="pt-12 sm:pt-16 border-t border-border/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted-text font-mono">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 text-secondary-text">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple/60" />
            {personalData.educationDegree}
          </span>
          <span className="hidden md:inline text-border">|</span>
          <span className="hidden md:inline">{personalData.currentYear}</span>
        </div>

        <a
          href="#about"
          className="group flex items-center gap-2 text-[11px] tracking-widest uppercase hover:text-primary-text transition-colors"
        >
          <span>Scroll down</span>
          <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform text-accent-green" />
        </a>
      </div>
    </section>
  );
}
