import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        space:    '#05060F',
        'space-2':'#0A0E24',
        'space-3':'#121838',
        mission:  '#1A237E',
        orbit:    '#7C4DFF',
        'ene-cyan':'#00E5FF',
        gold:     '#FFD600',
        moon:     '#D4C5A9',
        thrust:   '#FF6F00',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        body:    ['"Sarabun"', '"Inter"', 'system-ui', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-12px)' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.85' },
          '50%':     { opacity: '0.3'  },
        },
      },
      animation: {
        'spin-slow':   'spin 60s linear infinite',
        float:         'float 5s ease-in-out infinite',
        'float-delay': 'float 5s ease-in-out 1.5s infinite',
        twinkle:       'twinkle 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
export default config
