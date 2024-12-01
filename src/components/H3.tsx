import { FCProps, HeadingProps } from '@/types/app';

type Props = HeadingProps & { text: string };

export const H3: FCProps<Props> = ({ text, className, ...props }) => {
  return (
    <h3 className={` text-3xl font-bold ${className}`} {...props}>
      {text}
    </h3>
  );
};
