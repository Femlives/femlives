'use client';

import Image from 'next/image';
import logo from '@/assets/images/fl-logo-big.png';
import { parsedEnv } from '@/util/helper';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Image src={logo} alt='Femlives Logo' />
      <p>{parsedEnv.VERCEL_ENV}</p>
      <p>{parsedEnv.NEXT_PUBLIC_CONVEX_URL}</p>
    </main>
  );
}
