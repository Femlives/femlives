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
    <html lang='en' className='xy-full'>
      <body
        className={`xy-full flex-center flex-col bg-fl-primary ${dmSans.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
