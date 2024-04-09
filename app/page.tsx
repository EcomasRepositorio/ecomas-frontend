"use client";

import Header from '@/components/header/Index'
import Whatsapp from '@/components/whatsapp/Index'
import Banners from '@/components/home/PrincipalHome';
import '/components/homeContent/styles.css';

export default function Main() {


  return (

    <main className="bg-gray-200">
      <Header />
      <Banners />

      <Whatsapp />

    </main>

  )
}