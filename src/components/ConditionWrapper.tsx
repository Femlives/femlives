import { FCProps } from '@/types/app';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  condition: boolean;
};

const ConditionWrapper: FCProps<Props> = ({ condition, children }) => {
  return condition ? <div>{children}</div> : <></>;
};

export default ConditionWrapper;
