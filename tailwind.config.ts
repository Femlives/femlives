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
        /* Pink Shades */
        primary: 'var(--primary)',
        'pink-light': 'var(--pink-light)',
        'pink-lighter': 'var(--pink-lighter)',

        /* Button States */
        'pink-button-hover': 'var(--pink-button-hover)',
        'pink-button-disabled': 'var(--pink-button-disabled)',

        /* Blue Shades */
        secondary: 'var(--secondary)',
        'blue-light': 'var(--blue-light)',
        'blue-lighter': 'var(--blue-lighter)',
        'blue-lightest': 'var(--blue-lightest)',

        /* Lime Shades */
        ternary: 'var(--ternary)',
        'lime-light': 'var(--lime-light)',
        'lime-lighter': 'var(--lime-lighter)',

        /* Red Shades */
        danger: 'var(--danger)',
        'red-button-hover': 'var(--red-button-hover)',
        'red-button-disabled': 'var(--red-button-disabled)',

        /* Gray Shades */
        'gray-light': 'var(--gray-light)',
        'gray-button-disabled': 'var(--gray-button-disabled)',

        /* Black and White */
        'black-default': 'var(--black-default)',
        'black-hover': 'var(--black-hover)',
        'black-disabled': 'var(--black-disabled)',
        'white-default': 'var(--white-default)',

        /* Text Colors */
        'text-default': 'var(--text-default)',
      },
    },
  },
  plugins: [],
};

export default config;
