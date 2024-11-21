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
        'pink-primary': 'var(--pink-primary)',
        'light-pink-secondary': 'var(--light-pink-secondary)',
        'blue-primary': 'var(--blue-primary)',
        'text-primary': 'var(--text-primary)',
      },
    },
  },
  plugins: [],
};

export default config;
