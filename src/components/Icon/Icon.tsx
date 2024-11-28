import { FCProps } from '@/types/app';
import * as icons from './Icons';
import { FallbackIcon } from './Icons';

export type IconName = keyof typeof icons;

type Props = {
  iconName: IconName;
};

const Icon: FCProps<Props> = ({ iconName, ...props }) => {
  const icon = icons[iconName];

  return (
    <>
      {icon && icon(props)}
      {!icon && <FallbackIcon {...props} width={16} />}
    </>
  );
};

export default Icon;
