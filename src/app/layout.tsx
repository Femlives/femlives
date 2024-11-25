import type { Metadata } from 'next';
import './globals.css';
import { dmSans } from './fonts';
// import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Femlives',
  description: `Dedicated to women's health`,
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='h-full w-full'>
      <body
        className={`h-full w-full flex flex-col justify-center items-center bg-fl-primary ${dmSans.variable} font-sans font`}
      >
        {children}
      </body>
    </html>
  );
}
