import Image from 'next/image';
import logo from '@/assets/images/fl-logo-big.png';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Image src={logo} alt='Femlives Logo' />
    </main>
  );
}
