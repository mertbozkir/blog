import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Averia_Serif_Libre } from 'next/font/google';
import { Sidebar } from '../components/SideBar';
import './globals.css';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Providers } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://mbozkir.space'),
  title: 'mert bozkir',
  description: 'writing daily',
  openGraph: {
    title: 'mert bozkir',
    description: 'writing daily',
    url: 'https://mbozkir.space',
    siteName: 'mert bozkir',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: 'mertbozkirr',
    card: 'summary_large_image',
  },
};

const averia = Averia_Serif_Libre({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-averia',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${averia.variable} font-serif`}
    >
      <body className="flex flex-col mb-40 mx-2 md:mx-10 md:flex-row md:items-start md:mt-10 dark:bg-black bg-gradient-to-br from-transparent via-light-phthalo-200 to-transparent dark:from-transparent dark:via-dark-phthalo-200 dark:to-transparent">
        <Providers>
          <Sidebar />
          <main className="flex-auto text-md md:mt-0 px-2 md:px-10 max-w-xl lg:max-w-3xl mx-auto w-full selection:bg-light-phthalo-100/10 dark:selection:bg-dark-phthalo-100/20">
            {children}
          </main>
        </Providers>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
