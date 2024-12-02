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
        primary: 'var(--primary)',
        'primary-light': 'var(--primary-light)',
        'primary-lighter': 'var(--primary-lighter)',

        'primary-button-hover': 'var(--primary-button-hover)',
        'primary-button-disabled': 'var(--primary-button-disabled)',

        secondary: 'var(--secondary)',
        'secondary-light': 'var(--secondary-light)',
        'secondary-lighter': 'var(--secondary-lighter)',
        'secondary-lightest': 'var(--secondary-lightest)',

        ternary: 'var(--ternary)',
        'ternary-light': 'var(--ternary-light)',
        'ternary-lighter': 'var(--ternary-lighter)',

        quaternary: 'var(--quaternary)',
        'quaternary-light': 'var(--quaternary-light)',
        'quaternary-lighter': 'var(--quaternary-lighter)',

        quinary: 'var(--quinary)',

        danger: 'var(--danger)',
        'ternary-button-hover': 'var(--danger-button-hover)',
        'ternary-button-disabled': 'var(--danger-button-disabled)',

        'gray-light': 'var(--gray-light)',
        'gray-button-disabled': 'var(--gray-button-disabled)',

        black: 'var(--black)',
        'black-hover': 'var(--black-hover)',
        'black-disabled': 'var(--black-disabled)',
        white: 'var(--white)',
      },
      fontFamily: {
        sans: 'var(--font-dm-sans)',
      },
    },
  },
  plugins: [],
};

export default config;
