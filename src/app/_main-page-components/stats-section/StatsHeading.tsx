'use client';

import { H2 } from '@/components';
import { FCProps } from '@/types/app';
import { useEffect, useRef, useState } from 'react';

type Props = {
  heading: string;
};

export const StatsHeading: FCProps<Props> = ({ heading, ...props }) => {
  const [labelWidth, setLabelWidth] = useState(0);
  const textWidthRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (textWidthRef.current) {
      setLabelWidth(textWidthRef.current.clientWidth);
    }
  }, [textWidthRef]);
  return (
    <div className='relative'>
      <H2
        text={heading}
        {...props}
        className='w-fit relative z-20'
        ref={textWidthRef}
      />
      {labelWidth > 0 && (
        <UnderLine
          width={labelWidth + 10}
          className='stroke-quaternary-light absolute z-10 -bottom-1 -left-1'
        />
      )}
    </div>
  );
};

const UnderLine = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height='24'
      width='201'
      fill='none'
      viewBox='0 0 201 24'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M3 3.00047C41.9825 6.06651 135.558 10.359 198 3.00046'
        strokeLinecap='round'
        strokeWidth='5'
      />
      <path
        d='M136.218 6.95207C103.736 9.73788 34.568 15.6061 12.5045 15.9446C-15.075 16.3678 99.0837 15.9446 152.503 15.9446C205.561 15.9445 137.531 19.0121 79.7458 21.4453'
        strokeLinecap='round'
        strokeWidth='5'
      />
    </svg>
  );
};
