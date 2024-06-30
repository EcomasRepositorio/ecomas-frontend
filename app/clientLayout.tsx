// components/ClientLayout.tsx
'use client';

import React from 'react';
import { Roboto } from 'next/font/google';
import Header from '@/app/navBar';
import Footer from '@/components/footer/Footer';
import ScrollToTopButton from '@/components/home/slideup';
import { ThemeProvider } from '@/components/ThemeProvider';
import Whatsapp from '@/components/whatsapp/Index';

const roboto = Roboto({
  subsets: ['latin'],
  variable: '--roboto',
  style: 'normal',
  weight: '400',
  display: 'swap',
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${roboto.className} dark:bg-blackblue`}>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <link rel="icon" href="/image/ICONO-COLOR.png" />  {/* Asegúrate de que la ruta sea correcta */}
        
        <Header />
        {children}
        <Whatsapp />
        <Footer />
        <ScrollToTopButton />
      </ThemeProvider>
    </div>
  );
}
