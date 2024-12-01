import { FCProps, HeadingProps } from '@/types/app';

type Props = HeadingProps & { text: string };

export const H2: FCProps<Props> = ({ text, ...props }) => {
  return (
    <h2 className={`text-4xl ${props.className}`} {...props}>
      {text}
    </h2>
  );
};
