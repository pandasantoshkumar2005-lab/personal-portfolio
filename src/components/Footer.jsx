import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalData } from '../data/portfolio';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border/50 bg-[#060806] text-secondary-text py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Left Side: Name and Personal Tagline */}
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="font-serif text-base text-primary-text font-normal">
              {personalData.name}
            </span>
            <span className="text-border">/</span>
            <span className="text-xs font-mono text-muted-text">
              CSE &bull; AI &bull; ML
            </span>
          </div>
          <p className="text-xs text-muted-text font-light max-w-sm">
            Curious by nature. Building with purpose. Designed with a minimal editorial layout and atmospheric depth.
          </p>
        </div>

        {/* Middle: Links */}
        <div className="flex items-center gap-6 text-xs font-mono">
          <a
            href={personalData.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-text transition-colors flex items-center gap-1.5"
            aria-label="GitHub"
          >
            <GithubIcon className="w-3.5 h-3.5 text-muted-text hover:text-accent-green" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={personalData.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary-text transition-colors flex items-center gap-1.5"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-3.5 h-3.5 text-muted-text hover:text-accent-purple" />
            <span className="hidden sm:inline">LinkedIn</span>
          </a>
          <a
            href={`mailto:${personalData.contact.email}`}
            className="hover:text-primary-text transition-colors flex items-center gap-1.5"
            aria-label="Email"
          >
            <Mail className="w-3.5 h-3.5 text-muted-text hover:text-primary-text" />
            <span className="hidden sm:inline">Email</span>
          </a>
        </div>

        {/* Right Side: Year and Back to Top */}
        <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto text-xs font-mono text-muted-text border-t border-border/30 md:border-t-0 pt-4 md:pt-0">
          <span>&copy; {currentYear} &bull; All rights reserved</span>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-primary-text transition-colors group p-1 focus:outline-none"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-accent-green group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
