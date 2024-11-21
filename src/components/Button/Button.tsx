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
};

const Button: FCProps<ButtonProps> = ({
  buttonLabel,
  variant = 'pink-filled',
  loading = false,
  type = 'button',
  ...buttonProps
}) => {
  const baseStyles = `py-2 px-4 rounded-lg w-full font-semibold transition-colors`;
  const pinkFilledStyles = `bg-pink-primary text-text-primary`;
  const blueFilledStyles = `bg-blue-primary text-white`;
  const pinkOutlinedStyles = `bg-transparent border border-pink-primary text-text-primary`;
  const pinkHoverStyles = `hover:bg-[#FE83CF]`;

  const variantStyles =
    variant === 'pink-filled'
      ? `${pinkFilledStyles} ${pinkHoverStyles}`
      : variant === 'blue-filled'
        ? blueFilledStyles
        : pinkOutlinedStyles;

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
