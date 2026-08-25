import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hellaswagultra.github.io'),
  title: 'HellaSwagUltra — Multilingual Commonsense Reasoning',
  description:
    'A challenging multilingual commonsense reasoning benchmark spanning 61 languages and grounded in local cultural knowledge.',
  keywords: [
    'HellaSwagUltra',
    'commonsense reasoning',
    'multilingual benchmark',
    'natural language understanding',
    'LLM evaluation',
  ],
  authors: [
    { name: 'Wenhan Han' },
    { name: 'Yifan Zhang' },
    { name: 'Binbin Liu' },
    { name: 'Mykola Pechenizkiy' },
    { name: 'Yin Zheng' },
    { name: 'Meng Fang' },
  ],
  openGraph: {
    title: 'HellaSwagUltra',
    description: '61 languages. Commonsense, unsolved.',
    url: '/',
    siteName: 'HellaSwagUltra',
    type: 'website',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 631,
        alt: 'HellaSwagUltra — 61 languages. Commonsense, unsolved.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HellaSwagUltra',
    description: '61 languages. Commonsense, unsolved.',
    images: ['/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
