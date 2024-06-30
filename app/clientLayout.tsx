// components/ClientLayout.tsx
'use client';

import React from 'react';
import { Roboto } from 'next/font/google';
import Header from '@/app/navBar';
import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '@/components/home/slideup';
import { ThemeProvider } from '@/components/ThemeProvider';
import Whatsapp from '@/components/whatsapp/Index';

const inter = Roboto({
  subsets: ['latin'],
  variable: '--inter',
  weight: '400',
  display: "swap",
  adjustFontFallback: false,
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.className} dark:bg-blackblue`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <link rel="icon" href="image/ICONO-COLOR.png" />
        
        <Header />
        {children}
        <Whatsapp />
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>
    </div>
  );
}
