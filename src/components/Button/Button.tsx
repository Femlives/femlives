'use client';

import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { FCProps } from '@/types/app';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  buttonLabel: string;
  variant?: 'pink-filled' | 'blue-filled' | 'pink-outlined';
  loading?: boolean;
  url?: string;
};

const VARIANT_STYLES: Record<string, string> = {
  'pink-filled': `bg-pink-default text-text-default hover:bg-pink-button-hover`,
  'blue-filled': `bg-blue-default text-white`,
  'pink-outlined': `bg-transparent border border-pink-default text-text-default`,
};

const Button: FCProps<ButtonProps> = ({
  buttonLabel,
  variant = 'pink-filled',
  loading = false,
  type = 'button',
  ...buttonProps
}) => {
  const baseStyles = `py-2 px-4 rounded-lg w-full font-semibold transition-colors`;

  const variantStyles = VARIANT_STYLES[variant] || '';

  return (
    <button
      {...buttonProps}
      type={type}
      className={`${baseStyles} ${variantStyles}`}
      disabled={loading || buttonProps.disabled}
    >
      {loading ? 'Loading...' : buttonLabel}
    </button>
  );
};

export default Button;
