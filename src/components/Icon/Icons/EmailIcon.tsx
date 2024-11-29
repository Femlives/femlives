import * as React from 'react';

export const EmailIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width={props.width || 13}
      height={props.height || 11}
      viewBox='0 0 13 11'
      fill='none'
      className={props.className || 'stroke-black'}
    >
      <path
        clipRule='evenodd'
        d='M.5 1.753v0c0 .4.2.733.533 1l4 2.733c.934.6 2.067.6 3 0l4-2.667c.267-.333.467-.666.467-1.066v0c0-.667-.533-1.2-1.2-1.2H1.7c-.667 0-1.2.533-1.2 1.2z'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M.5 1.886v6.667c0 .733.6 1.333 1.333 1.333h9.334c.733 0 1.333-.6 1.333-1.333V1.886M.892 9.494L4.955 5.43M8.073 5.46l4.035 4.034'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
