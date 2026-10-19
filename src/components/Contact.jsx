import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolio';

export default function Contact() {
  const { contact } = personalData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (contact.email) {
      navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const isPlaceholderGithub = contact.github.includes('[your-username]');
  const isPlaceholderLinkedin = contact.linkedin.includes('[your-username]');

  return (
    <section 
      id="contact" 
      aria-label="Contact and Connect"
      className="relative py-24 sm:py-36 px-6 sm:px-8 max-w-6xl mx-auto border-t border-border/40 overflow-hidden"
    >
      {/* Local Ambient Blue & Purple Glow behind contact area */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[380px] rounded-full opacity-30 blur-[130px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(130, 112, 201, 0.25) 50%, transparent 80%)'
        }}
      />

      {/* Section Header */}
      <div className="relative flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-blue-400">06</span>
        <div className="w-8 h-[1px] bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-text font-mono">
          Initiate Contact
        </span>
      </div>

      <div className="relative max-w-2xl mb-12">
        <h2 className="text-4xl sm:text-5xl font-serif font-light text-primary-text mb-4 tracking-tight">
          {contact.heading}
        </h2>
        <p className="text-base sm:text-lg text-secondary-text font-light leading-relaxed">
          {contact.subtitle}
        </p>
      </div>

      {/* Contact Cards Grid with Framer Motion Elevate & Blue Frame */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email Card */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="editorial-card rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-border/70 hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-colors duration-300 relative overflow-hidden group cursor-pointer"
        >
          {/* Ambient Blue Flare on Hover */}
          <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-surface-subtle border border-border group-hover:border-blue-500/40 transition-colors">
                <Mail className="w-4 h-4 text-blue-400" />
              </span>
              <span className="font-mono text-[11px] text-muted-text uppercase group-hover:text-blue-300 transition-colors">
                Direct Email
              </span>
            </div>
            <h3 className="text-sm font-mono text-primary-text mb-1 truncate group-hover:text-blue-100 transition-colors">
              {contact.email}
            </h3>
            <p className="text-xs text-muted-text font-light">
              Send inquiries, questions, or ideas.
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-border/40 flex items-center gap-2 group-hover:border-blue-500/20 transition-colors">
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 hover:underline"
            >
              <span>Write Mail</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <span className="text-border">|</span>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1 text-xs font-mono text-muted-text hover:text-primary-text transition-colors"
              title="Copy email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-accent-green" />
                  <span className="text-accent-green text-[11px]">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Copy</span>
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* GitHub Card */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="editorial-card rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-border/70 hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-colors duration-300 relative overflow-hidden group cursor-pointer"
        >
          {/* Ambient Blue Flare on Hover */}
          <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-surface-subtle border border-border group-hover:border-blue-500/40 transition-colors">
                <GithubIcon className="w-4 h-4 text-accent-green" />
              </span>
              <span className="font-mono text-[11px] text-muted-text uppercase group-hover:text-blue-300 transition-colors">
                Code Repository
              </span>
            </div>
            <h3 className="text-sm font-mono text-primary-text mb-1 group-hover:text-blue-100 transition-colors">
              GitHub Profile
            </h3>
            <p className="text-xs text-muted-text font-light">
              Explore public repositories, commits, and experiments.
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-border/40 group-hover:border-blue-500/20 transition-colors">
            {isPlaceholderGithub ? (
              <span className="text-[11px] font-mono text-muted-text/80">
                Configure URL in data/portfolio.js
              </span>
            ) : (
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accent-green hover:underline"
              >
                <span>Visit GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>

        {/* LinkedIn Card */}
        <motion.div
          whileHover={{ y: -8, scale: 1.03 }}
          transition={{ type: "spring", stiffness: 350, damping: 20 }}
          className="editorial-card rounded-xl p-6 sm:p-7 flex flex-col justify-between border border-border/70 hover:border-blue-500/60 hover:shadow-[0_0_35px_rgba(59,130,246,0.25)] transition-colors duration-300 relative overflow-hidden group cursor-pointer"
        >
          {/* Ambient Blue Flare on Hover */}
          <div className="absolute -top-16 -right-16 w-36 h-36 rounded-full bg-blue-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2 rounded-lg bg-surface-subtle border border-border group-hover:border-blue-500/40 transition-colors">
                <LinkedinIcon className="w-4 h-4 text-blue-400" />
              </span>
              <span className="font-mono text-[11px] text-muted-text uppercase group-hover:text-blue-300 transition-colors">
                Professional Network
              </span>
            </div>
            <h3 className="text-sm font-mono text-primary-text mb-1 group-hover:text-blue-100 transition-colors">
              LinkedIn Profile
            </h3>
            <p className="text-xs text-muted-text font-light">
              Connect for academic discussions and collaborations.
            </p>
          </div>

          <div className="pt-6 mt-4 border-t border-border/40 group-hover:border-blue-500/20 transition-colors">
            {isPlaceholderLinkedin ? (
              <span className="text-[11px] font-mono text-muted-text/80">
                Configure URL in data/portfolio.js
              </span>
            ) : (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-400 hover:text-blue-300 hover:underline"
              >
                <span>Connect on LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Editorial Note */}
      <div className="mt-8 text-xs font-mono text-muted-text flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400/80" />
        <span>Based in {contact.location}. Responses typically within 24–48 hours.</span>
      </div>
    </section>
  );
}
