import { DivProps, FCProps } from '@/types/app';
import { Icon, IconName } from './Icon';

type Props = DivProps & {
  label: string;
  iconName: IconName;
};

export const Tag: FCProps<Props> = ({
  label,
  iconName,
  className,
  ...props
}) => {
  return (
    <div
      className={`flex w-fit items-center gap-2 px-2 py-1 rounded-full bg-primary-lighter ${className}`}
      {...props}
    >
      <Icon iconName={iconName} />
      {label}
    </div>
  );
};
