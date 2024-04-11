"use client";
import Header from '@/components/header/Index'
import Whatsapp from '@/components/whatsapp/Index'

import '/components/homeContent/styles.css';
import PrincipalHome from '@/components/home/PrincipalHome';
import SwiperCarrousel from '@/components/home/swiper';
import Graduates from '@/components/home/whyus';
import Footer from '@/components/homeContent/footer/Footer';

export default function Main() {


  return (

    <main className="bg-gray-200">
      <Header />
      <PrincipalHome />

      <div className="block md:hidden mb-80">
  Contenido visible solo en móvil
</div>
      
<div className="bg-white dark:bg-black rounded-lg p-8 md:p-10 mb-8 mt-20 transform  border border-gray-300">
  <div className="bg-white dark:bg-black rounded-lg p-8 md:p-5 flex flex-col items-center">
    <h2 className="text-[#0060ff] dark:text-[#0060ff] text-4xl font-extrabold mb-1">Nuestros Diplomados</h2>
  </div>
</div>


          <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
            <SwiperCarrousel />
          </div>

          <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
            <Graduates />
          </div>

          <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
            asdasd
          </div>

          <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
            asdasd
          </div>

          <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
            asdasd
          </div>


      <Whatsapp />
      <Footer />

    </main>

  )
}