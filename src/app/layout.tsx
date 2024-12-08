import type { Metadata } from 'next';
import './globals.css';
import { dmSans } from './_fonts';

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
      <body className={`bg-quinary  ${dmSans.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
