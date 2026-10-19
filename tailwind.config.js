/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080B09',
        surface: {
          DEFAULT: '#101713',
          elevated: '#151D18',
          subtle: '#0D1310',
          hover: '#19241E',
        },
        'primary-text': '#F2F5F0',
        'secondary-text': '#A1AAA2',
        'muted-text': '#717B73',
        border: 'rgba(180, 200, 185, 0.14)',
        'border-strong': 'rgba(180, 200, 185, 0.28)',
        accent: {
          green: '#A7C8AE',
          'green-glow': 'rgba(167, 200, 174, 0.15)',
          purple: '#8270C9',
          'purple-glow': 'rgba(130, 112, 201, 0.18)',
          'purple-deep': 'rgba(92, 70, 170, 0.12)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 6s ease-in-out infinite',
        'float-slow': 'floatSlow 14s ease-in-out infinite',
        'ambient-glow': 'ambientGlow 12s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.03)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        ambientGlow: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '100%': { transform: 'translate(20px, -20px) scale(1.08)' },
        }
      }
    },
  },
  plugins: [],
}
