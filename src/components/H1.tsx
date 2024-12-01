import { FCProps, HeadingProps } from '@/types/app';

type Props = HeadingProps & { text: string };

export const H1: FCProps<Props> = ({ text, className, ...props }) => {
  return (
    <h1 className={`text-5xl font-bold ${className}`} {...props}>
      {text}
    </h1>
  );
};
