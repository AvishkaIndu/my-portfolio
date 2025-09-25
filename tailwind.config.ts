import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00ff88',
        'cyber-dark': '#0a0a0a',
        'cyber-gray': '#1a1a1a',
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#8b5cf6',
      },
      fontFamily: {
        mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'Liberation Mono', 'Menlo', 'monospace'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-neon': 'pulse-neon 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'matrix-rain': 'matrix-rain 20s linear infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'typewriter': 'typewriter 3.5s steps(40) 1s 1 normal both',
        'scanline': 'scanline 2s linear infinite',
        'cyber-grid': 'cyber-grid 20s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            'text-shadow': '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88, 0 0 20px #00ff88',
            'box-shadow': '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88, 0 0 20px #00ff88'
          },
          '100%': { 
            'text-shadow': '0 0 2px #00ff88, 0 0 5px #00ff88, 0 0 8px #00ff88, 0 0 12px #00ff88',
            'box-shadow': '0 0 2px #00ff88, 0 0 5px #00ff88, 0 0 8px #00ff88, 0 0 12px #00ff88'
          }
        },
        'pulse-neon': {
          '0%, 100%': {
            opacity: '1',
            'box-shadow': '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88'
          },
          '50%': {
            opacity: '0.8',
            'box-shadow': '0 0 2px #00ff88, 0 0 5px #00ff88, 0 0 8px #00ff88'
          }
        },
        'matrix-rain': {
          '0%': { transform: 'translateY(-100vh)' },
          '100%': { transform: 'translateY(100vh)' }
        },
        glitch: {
          '0%, 100%': {
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
          '10%': {
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '20%': {
            transform: 'translate(-4px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '30%': {
            transform: 'translate(4px, 2px)',
            filter: 'hue-rotate(270deg)'
          },
          '40%': {
            transform: 'translate(-4px, -2px)',
            filter: 'hue-rotate(360deg)'
          },
          '50%': {
            transform: 'translate(2px, -4px)',
            filter: 'hue-rotate(90deg)'
          },
          '60%': {
            transform: 'translate(-2px, 4px)',
            filter: 'hue-rotate(180deg)'
          }
        },
        typewriter: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        scanline: {
          '0%': { top: '0%' },
          '100%': { top: '100%' }
        },
        'cyber-grid': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50px)' }
        }
      },
      boxShadow: {
        'neon': '0 0 5px #00ff88, 0 0 10px #00ff88, 0 0 15px #00ff88, 0 0 20px #00ff88',
        'neon-blue': '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff',
        'cyber': '0 4px 20px rgba(0, 255, 136, 0.3), 0 0 40px rgba(0, 255, 136, 0.1)',
      },
      backdropBlur: {
        'cyber': '10px',
      }
    },
  },
  plugins: [],
}
export default config