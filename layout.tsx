
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { SiteHeader } from '@/components/site-header';
import { AppProvider } from '@/contexts/app-context';

export const metadata: Metadata = {
  title: 'العقار الذكي | Smart Property',
  description: 'تطبيق إدارة العقارات الذكي',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    userScalable: true, // Allow users to zoom
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${GeistSans.variable} antialiased flex flex-col min-h-screen`}>
        <AppProvider>
          <SiteHeader />
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <Toaster />
        </AppProvider>
      </body>
    </html>
  );
}
