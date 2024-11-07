export const runtime = 'edge';

import type { Metadata } from 'next';

import './globals.css';

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
      <body className='h-full w-full flex justify-center items-center bg-fl-primary'>
        {children}
      </body>
    </html>
  );
}
