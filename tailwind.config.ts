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
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'pink-default': 'var(--pink-default)',
        'pink-button-hover': 'var(--pink-button-hover)',
        'pink-lighter': 'var(--pink-lighter)',
        'blue-default': 'var(--blue-default)',
        'text-default': 'var(--text-default)',
        'black-default': 'var(--black-default)',
      },
      fontFamily: {
        sans: 'var(--font-dm-sans)',
      },
    },
  },
  plugins: [],
};

export default config;
