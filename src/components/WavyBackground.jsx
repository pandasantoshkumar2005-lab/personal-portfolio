import React, { useState, useEffect, useMemo } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

/**
 * WavyBackground — Framer Motion powered animated dark wavy background.
 *
 * Uses motion.path with animated SVG `d` attributes for smooth organic waves,
 * motion.div for floating ambient glows, and cursor-tracking springs for
 * interactive light that follows the mouse.
 *
 * No canvas, no requestAnimationFrame, no heavy JS — purely declarative React Motion.
 */

// Generate an SVG wave path string
function buildWavePath(width, height, yBase, amplitude, frequency, phase) {
  const segments = 12; // smooth bezier segments
  const step = width / segments;
  let d = `M 0 ${height}`; // start bottom-left
  d += ` L 0 ${yBase + Math.sin(phase) * amplitude}`; // left edge

  for (let i = 0; i <= segments; i++) {
    const x = i * step;
    const y = yBase + Math.sin(x * frequency + phase) * amplitude
                    + Math.cos(x * frequency * 0.6 + phase * 1.3) * (amplitude * 0.35);
    if (i === 0) {
      d += ` M 0 ${y}`;
    } else {
      // Use smooth curve control points for organic feel
      const prevX = (i - 1) * step;
      const cpX = prevX + step / 2;
      d += ` Q ${cpX} ${y - amplitude * 0.25} ${x} ${y}`;
    }
  }

  d += ` L ${width} ${height} L 0 ${height} Z`;
  return d;
}

// Wave layer definition
const WAVE_LAYERS = [
  { yOffset: 0.18, amplitude: 50, frequency: 0.003, speed: 10, fill: 'rgba(37, 99, 235, 0.04)', stroke: 'rgba(37, 99, 235, 0.18)' },
  { yOffset: 0.35, amplitude: 65, frequency: 0.002, speed: 14, fill: 'rgba(59, 130, 246, 0.03)', stroke: 'rgba(59, 130, 246, 0.14)' },
  { yOffset: 0.50, amplitude: 55, frequency: 0.0035, speed: 9,  fill: 'rgba(99, 102, 241, 0.025)', stroke: 'rgba(99, 102, 241, 0.12)' },
  { yOffset: 0.65, amplitude: 70, frequency: 0.0018, speed: 16, fill: 'rgba(16, 185, 129, 0.02)', stroke: 'rgba(16, 185, 129, 0.10)' },
  { yOffset: 0.78, amplitude: 40, frequency: 0.004, speed: 8,  fill: 'rgba(130, 112, 201, 0.03)', stroke: 'rgba(130, 112, 201, 0.13)' },
];

function AnimatedWave({ layer, width, height }) {
  // Cycle through 3 phase-shifted wave paths to animate between them
  const paths = useMemo(() => {
    const yBase = height * layer.yOffset;
    return [
      buildWavePath(width, height, yBase, layer.amplitude, layer.frequency, 0),
      buildWavePath(width, height, yBase, layer.amplitude, layer.frequency, Math.PI * 0.66),
      buildWavePath(width, height, yBase, layer.amplitude, layer.frequency, Math.PI * 1.33),
      buildWavePath(width, height, yBase, layer.amplitude, layer.frequency, Math.PI * 2),
    ];
  }, [width, height, layer]);

  return (
    <motion.path
      d={paths[0]}
      fill={layer.fill}
      stroke={layer.stroke}
      strokeWidth={1.5}
      initial={{ d: paths[0] }}
      animate={{ d: paths }}
      transition={{
        d: {
          duration: layer.speed,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'loop',
        },
      }}
    />
  );
}

export default function WavyBackground() {
  // Track viewport size
  const [size, setSize] = useState({ w: 1440, h: 900 });

  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // Mouse tracking with spring physics for the cursor glow
  const mouseX = useMotionValue(size.w / 2);
  const mouseY = useMotionValue(size.h / 2);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, [mouseX, mouseY]);

  // Transform spring values to CSS translate for the cursor glow orb
  const glowX = useTransform(springX, (v) => v - 300);
  const glowY = useTransform(springY, (v) => v - 300);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" aria-hidden="true">
      {/* Base dark color */}
      <div className="absolute inset-0 bg-[#080B09]" />

      {/* ── Framer Motion Animated SVG Waves ── */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox={`0 0 ${size.w} ${size.h}`}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {WAVE_LAYERS.map((layer, i) => (
          <AnimatedWave key={i} layer={layer} width={size.w} height={size.h} />
        ))}
      </svg>

      {/* ── Floating ambient glow orbs (Framer Motion) ── */}

      {/* Top-left forest green orb — slow float */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[140px]"
        style={{ top: '-10%', left: '-8%' }}
        animate={{ y: [0, 25, 0], x: [0, 15, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 18, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="w-full h-full rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(21, 45, 29, 0.55) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Upper-center purple ambient — breathing */}
      <motion.div
        className="absolute w-[500px] h-[420px] rounded-full blur-[150px]"
        style={{ top: '6%', left: '42%', x: '-50%' }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 12, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(130, 112, 201, 0.4) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Mid-right green — drift */}
      <motion.div
        className="absolute w-[650px] h-[550px] rounded-full blur-[150px]"
        style={{ top: '35%', right: '-12%' }}
        animate={{ y: [0, -20, 0], x: [0, -18, 0] }}
        transition={{ duration: 20, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="w-full h-full rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(28, 52, 36, 0.45) 0%, transparent 70%)' }}
        />
      </motion.div>

      {/* Lower-left purple — slow pulse */}
      <motion.div
        className="absolute w-[550px] h-[450px] rounded-full blur-[160px]"
        style={{ top: '58%', left: '8%' }}
        animate={{ opacity: [0.2, 0.35, 0.2], y: [0, 15, 0] }}
        transition={{ duration: 14, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(130, 112, 201, 0.3) 0%, transparent 65%)' }}
        />
      </motion.div>

      {/* Bottom-right convergence — float */}
      <motion.div
        className="absolute w-[600px] h-[500px] rounded-full blur-[150px]"
        style={{ bottom: '3%', right: '10%' }}
        animate={{ scale: [1, 1.05, 1], opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 16, ease: 'easeInOut', repeat: Infinity }}
      >
        <div className="w-full h-full rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(130, 112, 201, 0.35) 0%, rgba(25, 48, 33, 0.2) 50%, transparent 75%)' }}
        />
      </motion.div>

      {/* ── Cursor-tracking blue glow orb (spring physics) ── */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-60"
        style={{
          x: glowX,
          y: glowY,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.10) 0%, rgba(37, 99, 235, 0.04) 50%, transparent 70%)',
        }}
      />

      {/* Editorial grid texture */}
      <div className="absolute inset-0 bg-grid-editorial opacity-25" />

      {/* Cinematic vignette */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 35%, rgba(8, 11, 9, 0.7) 100%)' }}
      />
    </div>
  );
}
