import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolio';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Section tracking
      const sections = ['about', 'skills', 'projects', 'education', 'journey', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B09]/85 backdrop-blur-md border-b border-border py-4 shadow-sm'
          : 'bg-transparent border-b border-border/50 py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Left Side: Monogram & Name */}
        <a
          href="#"
          className="group flex items-center gap-3.5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-400/50 rounded-sm"
          aria-label="Back to top"
        >
          <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center bg-surface-elevated/70 group-hover:border-blue-400 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.35)] transition-all">
            <span className="font-mono text-xs tracking-wider text-blue-300 font-medium">
              {personalData.initials}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-medium tracking-wider text-primary-text uppercase group-hover:text-blue-300 transition-colors">
              {personalData.name}
            </span>
            <span className="text-[10px] tracking-widest text-muted-text font-mono">
              CSE &bull; AI &bull; ML
            </span>
          </div>
        </a>

        {/* Right Side: Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-widest uppercase">
          {personalData.navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative py-1 transition-colors hover:text-blue-300 ${
                  isActive ? 'text-blue-400 font-medium' : 'text-secondary-text'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-400" />
                )}
              </a>
            );
          })}

          {/* Discreet Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border bg-surface-subtle hover:bg-surface-elevated hover:border-blue-400/70 hover:shadow-[0_0_18px_rgba(59,130,246,0.28)] text-secondary-text hover:text-primary-text transition-all group"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-muted-text group-hover:text-blue-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-secondary-text hover:text-primary-text focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-green"
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B09]/95 backdrop-blur-xl border-b border-border px-6 py-6 transition-all animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {personalData.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={closeMobileMenu}
                className="text-sm font-medium tracking-wider uppercase text-secondary-text hover:text-accent-green py-2 border-b border-border/40 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={closeMobileMenu}
              className="mt-2 inline-flex items-center justify-between px-4 py-2.5 rounded-md border border-accent-purple/30 bg-surface-elevated text-xs uppercase tracking-wider text-primary-text"
            >
              <span>Connect with me</span>
              <ArrowUpRight className="w-4 h-4 text-accent-purple" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
