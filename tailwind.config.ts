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
        'primary-light': 'var(--primary-light)',
        'primary-lighter': 'var(--primary-lighter)',

        /* Button States */
        'primary-button-hover': 'var(--primary-button-hover)',
        'primary-button-disabled': 'var(--primary-button-disabled)',

        /* Blue Shades */
        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-lighter': 'var(--secondary-lighter)',
        'secondary-lightest': 'var(--secondary-lightest)',

        /* Lime Shades */
        ternary: 'var(--ternary)',
        'ternary-light': 'var(--ternary-light)',
        'ternary-lighter': 'var(--ternary-lighter)',

        /* Red Shades */
        danger: 'var(--danger)',
        'ternary-button-hover': 'var(--danger-button-hover)',
        'ternary-button-disabled': 'var(--danger-button-disabled)',

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
