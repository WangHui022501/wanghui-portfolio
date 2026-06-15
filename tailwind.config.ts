import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', '"PingFang SC"', '"Microsoft YaHei"', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', '"Songti SC"', '"SimSun"', 'serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        // Base
        paper: '#F8FFFC',   // Mint cream — page background
        ink: '#2E2B36',     // deep plum-charcoal — primary text
        muted: '#83909A',   // muted slate-mint — secondary text
        border: '#CFE6DD',  // soft mint-tinted hairline
        // Palette
        mint: '#E4F3ED',
        floral: '#F7F4EA',
        lavender: '#DED9E2',
        periwinkle: '#C0B9DD',
        wisteria: '#80A1D4',
        aqua: '#75C9C8',
      },
      letterSpacing: {
        widest: '0.25em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
      },
    },
  },
  plugins: [],
}

export default config
