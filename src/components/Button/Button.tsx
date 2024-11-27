'use client';

import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { FCProps } from '@/types/app';

const buttonVariants = {
  'primary-filled': `text-black bg-primary hover:bg-primary-button-hover`,
  'primary-outlined': `bg-white border border-primary text-black hover:bg-primary-button-hover`,
  'secondary-filled': `bg-secondary text-white`,
  link: `text-black`,
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
  variant = 'primary-filled',
  loading = false,
  type = 'button',
  ...buttonProps
}) => {
  const variantStyles = buttonVariants[variant] || '';
  const generalStyles = 'px-3 py-2 rounded-lg';

  return (
    <button
      {...buttonProps}
      type={type}
      className={`${generalStyles} ${variantStyles} ${buttonProps.className} text-black`}
      disabled={loading || buttonProps.disabled}
    >
      {loading ? 'Loading...' : buttonLabel}
    </button>
  );
};

export default Button;
