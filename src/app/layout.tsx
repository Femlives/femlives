import type { Metadata } from 'next';
// import localFont from 'next/font/local';
import './globals.css';
// import Footer from '@/components/Footer';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

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
