import React from 'react';

/**
 * BackgroundGlow provides the deep forest-green and ambient purple/indigo atmospheric lighting.
 * Built with pure CSS gradients and blurred pseudo-elements for optimal 60fps performance
 * without heavy canvas or WebGL dependencies.
 */
export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">

      {/* Deep Forest-Green Ambient Wash - Top Left */}
      <div 
        className="absolute -top-[15%] -left-[10%] w-[650px] h-[650px] rounded-full opacity-40 blur-[130px]"
        style={{
          background: 'radial-gradient(circle, rgba(21, 45, 29, 0.5) 0%, rgba(13, 26, 18, 0.2) 60%, transparent 80%)'
        }}
      />

      {/* Atmospheric Purple / Indigo Ambient Glow - Upper Center / Behind Hero */}
      <div 
        className="absolute top-[8%] left-[45%] -translate-x-1/2 w-[550px] h-[450px] rounded-full opacity-35 blur-[140px] animate-pulse-subtle"
        style={{
          background: 'radial-gradient(circle, rgba(130, 112, 201, 0.4) 0%, rgba(92, 70, 170, 0.18) 50%, transparent 75%)'
        }}
      />

      {/* Deep Forest-Green Ambient Accent - Mid Right */}
      <div 
        className="absolute top-[38%] -right-[10%] w-[700px] h-[600px] rounded-full opacity-30 blur-[150px]"
        style={{
          background: 'radial-gradient(circle, rgba(28, 52, 36, 0.4) 0%, rgba(16, 32, 22, 0.15) 60%, transparent 80%)'
        }}
      />

      {/* Ambient Purple Light - Behind Selected Work & Projects */}
      <div 
        className="absolute top-[58%] left-[10%] w-[600px] h-[500px] rounded-full opacity-25 blur-[160px]"
        style={{
          background: 'radial-gradient(circle, rgba(130, 112, 201, 0.3) 0%, rgba(70, 50, 130, 0.1) 60%, transparent 75%)'
        }}
      />

      {/* Deep Ambient Green & Purple Convergence - Contact Section */}
      <div 
        className="absolute bottom-[5%] right-[15%] w-[650px] h-[550px] rounded-full opacity-35 blur-[150px] animate-pulse-subtle"
        style={{
          background: 'radial-gradient(circle, rgba(130, 112, 201, 0.35) 0%, rgba(25, 48, 33, 0.25) 50%, transparent 80%)'
        }}
      />

      {/* Delicate Editorial Grid Texture */}
      <div className="absolute inset-0 bg-grid-editorial opacity-40" />

      {/* Soft Vignette Overlay for cinematic dark framing */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(8, 11, 9, 0.6) 100%)'
        }}
      />
    </div>
  );
}
