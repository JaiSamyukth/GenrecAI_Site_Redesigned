import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: '#081CFF',
        'accent-hover': '#0616CC',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      spacing: {
        '4.5': '1.125rem',
      },
      borderRadius: {
        card: '12px',
        input: '6px',
      },
      boxShadow: {
        'subtle-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'subtle': '0 2px 4px 0 rgba(0, 0, 0, 0.04)',
        'subtle-md': '0 4px 8px 0 rgba(0, 0, 0, 0.05)',
        'subtle-lg': '0 8px 16px 0 rgba(0, 0, 0, 0.06)',
        'glow': '0 0 0 4px rgba(8, 28, 255, 0.12)',
      },
      transitionDuration: {
        'fast': '120ms',
        'default': '240ms',
        'long': '420ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(.2,.9,.3,1)',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'counter': {
          '0%': { '--num': '0' },
          '100%': { '--num': '100' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 240ms cubic-bezier(.2,.9,.3,1)',
        'fade-in-down': 'fade-in-down 180ms cubic-bezier(.2,.9,.3,1)',
        'slide-in-right': 'slide-in-right 260ms cubic-bezier(.2,.9,.3,1)',
      },
      maxWidth: {
        'container': '1200px',
        'prose': '65ch',
      },
      lineHeight: {
        'prose': '1.45',
      },
    },
  },
  plugins: [],
};

export default config;
