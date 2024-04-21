import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from "@/app/navBar"
import Footer from '@/components/footer/Footer'

const inter = Inter({ subsets: ['latin'], }
)
import { ThemeProvider } from "@/components/ThemeProvider"
import { Suspense } from 'react';
import DashboardSkeleton from '@/components/home/skeletons';
import Whatsapp from '@/components/whatsapp/Index';
import Link from 'next/link'


export const metadata: Metadata = {
  title: 'ECOMÁS - Consultoría y capacitación'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    <html lang="es">
      <body className={`${inter.className} dark:bg-blackblue`} >
        
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <link rel="icon" href="image/ICONO-COLOR.png" />
          <Header />

          {children}

        </ThemeProvider>
        <Whatsapp />
        <Footer />
      
      </body>

    </html>
  )
}