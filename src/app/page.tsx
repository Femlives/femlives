'use client';

import Image from 'next/image';
import logo from '@/assets/images/fl-logo-big.png';

export default function Home() {
  // eslint-disable-next-line no-process-env
  console.log('>>>>>>>>>>', process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <main className='flex flex-col items-center justify-center'>
      <Image src={logo} alt='Femlives Logo' />
    </main>
  );
}
