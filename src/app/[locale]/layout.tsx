import '../globals.css'
import Header from '../components/layout/header'
import Footer from '../components/layout/footer/Footer'
import Providers from '../../providers/Provider'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '../../i18n/routing';
import type { Metadata } from 'next';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    default: 'Nexus Partners - Corporate Showcase & Digital Solutions',
    template: '%s | Nexus Partners'
  },
  description: 'Nexus Partners is a premier consulting and digital solutions firm. We transform businesses with cutting-edge technology, strategic branding, and expert consulting.',
  keywords: ['Nexus Partners', 'Digital Solutions', 'Consulting', 'Branding', 'Web Development', 'SEO', 'Automation', 'Benin', 'Cotonou'],
  authors: [{ name: 'Nexus Partners' }],
  creator: 'Nexus Partners',
  publisher: 'Nexus Partners',
  metadataBase: new URL('https://nexus-partners.xyz'), // Replace with actual domain if known, or localhost for now
  openGraph: {
    title: 'Nexus Partners',
    description: 'Corporate Showcase & Digital Solutions Platform',
    url: 'https://nexus-partners.xyz',
    siteName: 'Nexus Partners',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/logo/logo-nexuspartners.png',
        width: 1200,
        height: 630,
        alt: 'Nexus Partners Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus Partners',
    description: 'Corporate Showcase & Digital Solutions Platform',
    creator: '@nexuspartners',
    images: ['/images/logo/logo-nexuspartners.png'],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default async function Layout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <link rel="icon" href="/logo.png" sizes="any" />
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
        <SpeedInsights />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SXG1HDV56J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SXG1HDV56J');
          `}
        </Script>
      </body>
    </html>
  )
}
