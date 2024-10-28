import { FCProps } from '@/types/app';
import React, { PropsWithChildren } from 'react';

type Props = PropsWithChildren & {
  condition: boolean;
  children: React.ReactNode;
};

const ConditionWrapper: FCProps<Props> = ({ condition, children }) => {
  return condition ? <div>{children}</div> : null;
};

export default ConditionWrapper;
