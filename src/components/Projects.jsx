import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Lock, 
  Calendar, 
  UserCheck, 
  FileText, 
  Wind, 
  Droplets, 
  Activity
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalData } from '../data/portfolio';

// Custom CSS Previews for each project
function NexusErpPreview() {
  return (
    <div className="w-full h-full min-h-[260px] sm:min-h-[320px] bg-[#0A0F0C] rounded-lg border border-border/70 p-4 sm:p-6 flex flex-col justify-between overflow-hidden relative group/preview">
      {/* Subtle background ambient highlight inside preview */}
      <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-accent-green/5 blur-3xl pointer-events-none" />

      {/* Mock Header */}
      <div className="flex items-center justify-between pb-3 border-b border-border/40">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-accent-green/60" />
          </div>
          <span className="text-[11px] font-mono text-muted-text ml-2">nexus-erp // academic-portal</span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-green/10 text-accent-green border border-accent-green/20">
          STUDENT PORTAL
        </span>
      </div>

      {/* Mock Dashboard Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        {/* Metric 1 */}
        <div className="p-3 rounded-md bg-surface border border-border/40">
          <div className="flex items-center gap-1.5 text-muted-text text-[10px] font-mono mb-1">
            <UserCheck className="w-3 h-3 text-accent-green" />
            <span>ATTENDANCE</span>
          </div>
          <div className="text-lg sm:text-xl font-mono text-primary-text font-semibold">
            91.4<span className="text-xs text-accent-green font-normal ml-0.5">%</span>
          </div>
          <div className="text-[9px] text-muted-text mt-0.5">Threshold: 75%</div>
        </div>

        {/* Metric 2 */}
        <div className="p-3 rounded-md bg-surface border border-border/40">
          <div className="flex items-center gap-1.5 text-muted-text text-[10px] font-mono mb-1">
            <FileText className="w-3 h-3 text-accent-purple" />
            <span>MARKS OVERVIEW</span>
          </div>
          <div className="text-lg sm:text-xl font-mono text-primary-text font-semibold">
            8.75 <span className="text-xs text-muted-text font-normal font-sans">GPA</span>
          </div>
          <div className="text-[9px] text-muted-text mt-0.5">Sem III Verified</div>
        </div>

        {/* Metric 3 */}
        <div className="hidden sm:block p-3 rounded-md bg-surface border border-border/40">
          <div className="flex items-center gap-1.5 text-muted-text text-[10px] font-mono mb-1">
            <Calendar className="w-3 h-3 text-secondary-text" />
            <span>FEES & DUES</span>
          </div>
          <div className="text-sm font-mono text-accent-green font-medium mt-1">
            Settled
          </div>
          <div className="text-[9px] text-muted-text mt-0.5">Receipt #NX-2401</div>
        </div>
      </div>

      {/* Mock Schedule & Notice */}
      <div className="space-y-2 pt-2 border-t border-border/30">
        <div className="flex items-center justify-between text-[11px] p-2 rounded bg-surface-subtle border border-border/30">
          <span className="text-secondary-text font-mono truncate">
            Next: CSE302 - Data Structures & Algorithms
          </span>
          <span className="text-muted-text font-mono text-[10px] shrink-0 ml-2">10:30 AM</span>
        </div>
        <div className="flex items-center justify-between text-[11px] p-2 rounded bg-surface-subtle border border-border/30">
          <span className="text-secondary-text font-mono truncate">
            Notice: Mid-Term Examination Schedule Released
          </span>
          <span className="text-accent-purple font-mono text-[10px] shrink-0 ml-2">New</span>
        </div>
      </div>
    </div>
  );
}

function WeatherAppPreview() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#0A0F0C] rounded-lg border border-border/70 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 right-0 w-36 h-36 rounded-full bg-accent-purple/10 blur-2xl pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-border/40">
        <span className="text-[11px] font-mono text-muted-text">weather-client // live-feed</span>
        <div className="flex items-center gap-1.5 text-[10px] font-mono text-accent-green">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-green animate-pulse" />
          <span>API ACTIVE</span>
        </div>
      </div>

      {/* Main Temperature Display */}
      <div className="flex items-center justify-between my-3">
        <div>
          <span className="text-[11px] font-mono text-muted-text uppercase block">Current City</span>
          <h4 className="text-sm sm:text-base font-medium text-primary-text">Regional Forecast</h4>
          <span className="text-xs text-secondary-text font-light">Scattered Clouds &bull; Low Wind</span>
        </div>
        <div className="text-right">
          <div className="text-3xl sm:text-4xl font-mono font-light text-primary-text">
            24<span className="text-accent-green text-xl font-normal">°C</span>
          </div>
          <span className="text-[10px] font-mono text-muted-text">Feels like 23.5°</span>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/30">
        <div className="flex items-center gap-2 p-2 rounded bg-surface-subtle border border-border/20 text-[11px]">
          <Droplets className="w-3.5 h-3.5 text-secondary-text" />
          <span className="text-muted-text font-mono">Humidity:</span>
          <span className="text-primary-text font-mono ml-auto">62%</span>
        </div>
        <div className="flex items-center gap-2 p-2 rounded bg-surface-subtle border border-border/20 text-[11px]">
          <Wind className="w-3.5 h-3.5 text-secondary-text" />
          <span className="text-muted-text font-mono">Wind:</span>
          <span className="text-primary-text font-mono ml-auto">12 km/h</span>
        </div>
      </div>
    </div>
  );
}

function AiExplorationPreview() {
  return (
    <div className="w-full h-full min-h-[220px] bg-[#0A0F0C] rounded-lg border border-border/70 p-4 sm:p-5 flex flex-col justify-between relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient opacity-20 pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between pb-2 border-b border-border/40">
        <span className="text-[11px] font-mono text-muted-text">ml-sandbox // research-notes</span>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
          EXPLORING
        </span>
      </div>

      {/* Neural Network Abstract Topology */}
      <div className="py-4 flex items-center justify-around">
        {/* Layer 1 */}
        <div className="flex flex-col gap-3">
          {[1, 2, 3].map((node) => (
            <div key={node} className="w-3 h-3 rounded-full border border-accent-green/60 bg-surface-elevated" />
          ))}
        </div>
        <div className="h-[1px] w-12 bg-gradient-to-r from-accent-green/40 to-accent-purple/60" />
        {/* Layer 2 */}
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4].map((node) => (
            <div key={node} className="w-3.5 h-3.5 rounded-full border border-accent-purple bg-accent-purple/20 animate-pulse-subtle" />
          ))}
        </div>
        <div className="h-[1px] w-12 bg-gradient-to-r from-accent-purple/60 to-accent-green/40" />
        {/* Layer 3 */}
        <div className="flex flex-col gap-4">
          {[1, 2].map((node) => (
            <div key={node} className="w-3 h-3 rounded-full border border-accent-green/60 bg-surface-elevated" />
          ))}
        </div>
      </div>

      {/* Footnote */}
      <div className="pt-2 border-t border-border/30 flex items-center justify-between text-[11px] text-muted-text font-mono">
        <span className="flex items-center gap-1.5">
          <Activity className="w-3 h-3 text-accent-purple" />
          <span>Heuristics & Tensor experiments</span>
        </span>
        <span className="text-secondary-text">Python 3</span>
      </div>
    </div>
  );
}

export default function Projects() {
  const { projects } = personalData;

  const renderProjectPreview = (type) => {
    switch (type) {
      case 'erp-dashboard':
        return <NexusErpPreview />;
      case 'weather-widget':
        return <WeatherAppPreview />;
      case 'neural-network':
        return <AiExplorationPreview />;
      default:
        return null;
    }
  };

  return (
    <section 
      id="projects" 
      aria-label="Featured Projects"
      className="py-24 sm:py-32 px-6 sm:px-8 max-w-6xl mx-auto border-t border-border/40"
    >
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <span className="font-mono text-xs tracking-widest text-accent-green">03</span>
        <div className="w-8 h-[1px] bg-border" />
        <span className="text-xs uppercase tracking-widest text-muted-text font-mono">
          Portfolio & Code
        </span>
      </div>

      <div className="max-w-3xl mb-16">
        <h2 className="text-3xl sm:text-4xl font-serif font-light text-primary-text mb-4">
          {projects.heading}
        </h2>
        <p className="text-base text-secondary-text font-light">
          {projects.subtitle}
        </p>
      </div>

      {/* Project Showcase */}
      <div className="space-y-12 sm:space-y-16">
        {projects.items.map((project) => {
          const isFeatured = project.featured;
          const hasGithub = Boolean(project.links?.github && project.links.github.trim() !== "");
          const hasLive = Boolean(project.links?.live && project.links.live.trim() !== "");

          return (
            <motion.article
              key={project.id}
              whileHover={{ y: -8, scale: 1.015 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              className={`editorial-card rounded-2xl overflow-hidden transition-colors duration-300 relative border border-border/70 hover:border-blue-500/60 hover:shadow-[0_0_40px_rgba(59,130,246,0.25)] group cursor-pointer ${
                isFeatured ? 'p-6 sm:p-10' : 'p-6 sm:p-8'
              }`}
            >
              {/* Ambient Blue Flare on Hover */}
              <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-blue-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                {/* Project Information */}
                <div className={`${isFeatured ? 'lg:col-span-6' : 'lg:col-span-6'} space-y-6`}>
                  {/* Category & Status */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-text">
                      {project.number}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-border" />
                    <span className="font-mono text-xs uppercase tracking-widest text-accent-green">
                      {project.category}
                    </span>
                    {project.isExploring && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-purple/15 text-accent-purple border border-accent-purple/30">
                        In Development
                      </span>
                    )}
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-serif font-normal text-primary-text mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-muted-text font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-secondary-text font-light leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <span className="text-[11px] font-mono tracking-wider text-muted-text uppercase block mb-2">
                      Technologies used
                    </span>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2.5 py-1 rounded bg-surface-subtle border border-border/80 text-secondary-text"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links / Action Area */}
                  <div className="pt-4 border-t border-border/40 flex items-center gap-4 text-xs">
                    {hasGithub ? (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-surface-elevated border border-border hover:border-accent-green/40 text-primary-text transition-colors"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-accent-green" />
                        <span>Source Code</span>
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-muted-text font-mono text-[11px]">
                        <Lock className="w-3 h-3 text-muted-text/60" />
                        <span>Source available on request</span>
                      </span>
                    )}

                    {hasLive ? (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border hover:border-accent-purple/40 text-secondary-text hover:text-primary-text transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-accent-purple" />
                        <span>Live Preview</span>
                      </a>
                    ) : (
                      <span className="text-muted-text/60 font-mono text-[11px]">
                        &bull; Academic showcase
                      </span>
                    )}
                  </div>
                </div>

                {/* Visual Project Preview Frame */}
                <div className={`${isFeatured ? 'lg:col-span-6' : 'lg:col-span-6'}`}>
                  {renderProjectPreview(project.previewType)}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
