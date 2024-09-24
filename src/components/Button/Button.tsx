import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import { FCProps } from '@/types/app';

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  buttonLabel: string;
  loading?: boolean;
};

const Button: FCProps<ButtonProps> = ({
  buttonLabel,
  loading = false,
  ...buttonProps
}) => {
  return (
    <button
      {...buttonProps}
      type='submit'
      className='bg-fl-primary text-white py-2 px-4 rounded-lg w-full hover:bg-pink-400 transition-colors'
      disabled={loading || buttonProps.disabled}
    >
      {loading ? 'Loading...' : buttonLabel}{' '}
    </button>
  );
};

export default Button;
