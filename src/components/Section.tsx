import { FCProps, SectionProps } from '@/types/app';
import { PropsWithChildren } from 'react';

export const Section: FCProps<PropsWithChildren<SectionProps>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={`px-36 py-12 ${className}`} {...props}>
      {children}
    </section>
  );
};
