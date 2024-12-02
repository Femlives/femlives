import { FCProps } from '@/types/app';
import * as icons from './Icons';
import { FallbackIcon } from './Icons';

export type IconName = keyof typeof icons;

type Props = {
  iconName: IconName;
};

export const Icon: FCProps<Props> = ({ iconName, ...props }) => {
  const icon = icons[iconName];
  return (
    <>
      {!icon ||
        (iconName === 'FallbackIcon' ? (
          <FallbackIcon {...props} width={16} height={16} />
        ) : (
          icon(props)
        ))}
    </>
  );
};
