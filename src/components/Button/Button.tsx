'use client';

import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { FCProps } from '@/types/app';

const buttonVariants = {
  'pink-filled': `bg-primary text-text-default hover:bg-primary-button-hover`,
  'blue-filled': `bg-secondary text-white`,
  'pink-outlined': `bg-transparent border border-primary text-text-default`,
  link: `text-text-default`,
} as const; //  using `as const` to ensure the keys and values are readonly

type Variant = keyof typeof buttonVariants; //now it´s dynamically derives the type of variant from the keys of buttonVariants, so buttonVariants updating automatically

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  buttonLabel: string;
  variant?: Variant;
  loading?: boolean;

  url?: string;
};

const Button: FCProps<ButtonProps> = ({
  buttonLabel,
  variant = 'pink-filled',
  loading = false,
  type = 'button',
  ...buttonProps
}) => {
  const variantStyles = buttonVariants[variant] || '';

  return (
    <button
      {...buttonProps}
      type={type}
      className={`${buttonProps.className} ${variantStyles}`}
      disabled={loading || buttonProps.disabled}
    >
      {loading ? 'Loading...' : buttonLabel}
    </button>
  );
};

export default Button;
