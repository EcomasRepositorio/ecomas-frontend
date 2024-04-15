import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react";
import './globals.css'
import Header from "@/app/navBar"
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
import { ThemeProvider } from "@/components/ThemeProvider"
import { Suspense } from 'react';
import DashboardSkeleton, { RevenueChartSkeleton } from '@/components/home/skeletons';


export const metadata: Metadata = {
  title: 'ECOMÁS - Consultoría y capacitación'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="es">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <link rel="icon" href="image/ICONO-COLOR.png" />
          <Header />
          <Suspense fallback = {<DashboardSkeleton/>}>
            {children}
          </Suspense>

        </ThemeProvider>
               
       <Footer />
        
      </body>
    </html>
  )
}