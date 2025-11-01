import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/global/Header';
import Footer from '@/components/global/Footer';
import CookieConsent from '@/components/global/CookieConsent';
import Preloader from '@/components/global/Preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Genrec AI - Privacy-First Engineering for Enterprise',
    template: '%s | Genrec AI',
  },
  description: 'Privacy-first AI solutions for construction, hospitality, and education. Enterprise pilots delivering measurable results.',
  keywords: ['AI', 'Enterprise AI', 'Privacy-first', 'Construction Tech', 'Hospitality Tech', 'Education Tech'],
  authors: [{ name: 'Genrec AI' }],
  creator: 'Genrec AI',
  metadataBase: new URL('https://genrecai.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://genrecai.com',
    title: 'Genrec AI - Privacy-First Engineering for Enterprise',
    description: 'Privacy-first AI solutions for construction, hospitality, and education.',
    siteName: 'Genrec AI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Genrec AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genrec AI - Privacy-First Engineering for Enterprise',
    description: 'Privacy-first AI solutions for construction, hospitality, and education.',
    images: ['/og-image.png'],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased bg-white text-black min-h-screen">
        <Preloader />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
