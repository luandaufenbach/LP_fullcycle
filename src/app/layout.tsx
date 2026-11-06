import type { Metadata, Viewport } from 'next';
import { Barlow_Condensed, Instrument_Serif, Manrope } from 'next/font/google';
import { company, siteUrl } from '@/content/site';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  variable: '--font-instrument-serif',
});

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['500', '600'],
  variable: '--font-barlow-condensed',
});

const title = 'Full Cycle | Consultoria Ambiental e Restauração Ecológica em SC';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description: company.description,
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description: company.description,
    url: '/',
    siteName: company.name,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: '#f7f5ef',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${instrumentSerif.variable} ${barlowCondensed.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
