import { FCProps, HeadingProps } from '@/types/app';
import { forwardRef } from 'react';

type Props = HeadingProps & { text: string };

export const H2: FCProps<Props> = forwardRef(
  ({ text, className, ...props }, ref) => {
    return (
      <h2 className={`text-4xl font-bold ${className}`} {...props} ref={ref}>
        {text}
      </h2>
    );
  }
);
