import { FCProps, HeadingProps } from '@/types/app';

type Props = HeadingProps & { text: string };

export const H1: FCProps<Props> = ({ text, ...props }) => {
  return (
    <h1 className={`text-5xl font-bold ${props.className}`} {...props}>
      {text}
    </h1>
  );
};
