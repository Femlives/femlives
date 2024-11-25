import Image from 'next/image';
import logo from '@/assets/images/fl-logo-big.png';
import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Button buttonLabel='Switch for experts' variant='link' />
      <Button buttonLabel='Login' variant='pink-outlined' />
      <Button buttonLabel='Take test' variant='pink-filled' />
      <Button buttonLabel='Take test' variant='blue-filled' />
      <Image src={logo} alt='Femlives Logo' />
    </main>
  );
}
