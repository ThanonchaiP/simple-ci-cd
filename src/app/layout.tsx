import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { RootLayout } from '@/components/layout-components/root-layout';
import { NProgress } from '@/components/util-components';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Onefence - Web Portal',
  description: 'Onefence web portal',
  icons: {
    icon: [
      {
        rel: 'icon',
        url: '/favicon.ico',
        type: 'image/x-icon',
      },
      {
        rel: 'icon',
        url: '/favicon-16x16.png',
        type: 'image/png',
        sizes: '16x16',
      },
      {
        rel: 'icon',
        url: '/favicon-32x32.png',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    apple: {
      rel: 'apple-touch-icon.png',
      url: '/apple-touch-icon.png',
      type: 'image/png',
      sizes: '180x180',
    },
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootLayout>
          <NProgress />
          {children}
        </RootLayout>
      </body>
    </html>
  );
}
