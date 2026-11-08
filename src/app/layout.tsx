import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { company, siteUrl } from '@/content/site';
import './globals.css';

const manrope = localFont({
  src: '../assets/fonts/manrope-latin.woff2',
  weight: '200 800',
  variable: '--font-manrope',
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
    <html lang="pt-BR" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
