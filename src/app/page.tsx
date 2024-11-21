import { Button } from '@/components/Button';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center'>
      <Button buttonLabel='Login' variant='pink-outlined' />
      <Button buttonLabel='Take test' variant='blue-filled' />
      <Button buttonLabel='Take test' variant='pink-filled' />
    </main>
  );
}
