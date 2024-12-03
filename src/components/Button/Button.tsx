'use client';

import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { FCProps } from '@/types/app';
import { Icon, IconName } from '../Icon';

const buttonVariants = {
  'primary-filled': `text-black bg-primary hover:bg-primary-button-hover`,
  'primary-outlined': `bg-white border border-primary text-black hover:bg-primary-button-hover`,
  'secondary-filled': `bg-secondary text-white`,
  link: `text-black hover:underline`,
} as const;

type Variant = keyof typeof buttonVariants;

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  buttonLabel: string;
  variant?: Variant;
  loading?: boolean;
  url?: string;
  iconLeft?: IconName;
  iconRight?: IconName;
};

export const Button: FCProps<ButtonProps> = ({
  buttonLabel,
  variant = 'primary-filled',
  loading = false,
  type = 'button',
  iconLeft,
  iconRight,
  ...buttonProps
}) => {
  const variantStyles = buttonVariants[variant] || '';
  const generalStyles = 'px-3 py-2 rounded-lg flex-center gap-2';

  return (
    <button
      {...buttonProps}
      type={type}
      className={`${generalStyles} ${variantStyles} ${buttonProps.className}`}
      disabled={loading || buttonProps.disabled}
    >
      {!!iconLeft && <Icon iconName={iconLeft} />}

      {loading ? 'Loading...' : buttonLabel}

      {!!iconRight && <Icon iconName={iconRight} />}
    </button>
  );
};
