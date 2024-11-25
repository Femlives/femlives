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
        background: 'var(--background)', // Matches --background from global.css
        foreground: 'var(--foreground)', // Matches --foreground from global.css
        'pink-default': 'var(--pink-default)', // Matches --pink-default
        'pink-button-hover': 'var(--pink-button-hover)', // Matches --pink-button-hover
        'pink-lighter': 'var(--pink-lighter)', // Matches --pink-lighter
        'blue-default': 'var(--blue-default)', // Matches --blue-default
        'text-default': 'var(--text-default)', // Matches --text-default
        'black-default': 'var(--black-default)', // Matches --black-default
      },
    },
  },
  plugins: [],
};

export default config;
