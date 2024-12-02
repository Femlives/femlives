import { FCProps, HeadingProps } from '@/types/app';

type Props = HeadingProps & { text: string };

export const H2: FCProps<Props> = ({ text, className, ...props }) => {
  return (
    <h2 className={`text-4xl font-bold ${className}`} {...props}>
      {text}
    </h2>
  );
};
