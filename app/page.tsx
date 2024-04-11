"use client";
import Header from '@/components/header/Index'
import Whatsapp from '@/components/whatsapp/Index'

import '/components/homeContent/styles.css';
import PrincipalHome from '@/components/home/PrincipalHome';
import Footer from '@/components/homeContent/footer/Footer';
import PorqueNosotros from '@/components/home/PorqueNosotros';
import SwiperCarrouselDiplomados from '@/components/home/SwiperDiplomados';
import SwiperCursosDestacados from '@/components/home/SwiperCursosDestacados';
import TestimoniosFb from '@/components/home/TestimoniosFb';
export default function Main() {


  return (

    <main className="bg-white">
      <Header />
      <PrincipalHome />

      <div className="block md:hidden mt-96">
      </div>
      <div className="bg-gradient-to-r from-[#02227b] to-[#0060ff]  py-8 px-4 mx-auto max-w-screen-xl  bg-white dark:bg-black rounded-lg p-3 md:p-8 mb-8 mt-40 transform  border border-gray-300">
        <div className="bg-gradient-to-r from-[#02227b] to-[#0060ff] bg-white dark:bg-black rounded-lg p-8 md:p-5 flex flex-col items-center">
          <h2 className="text-white dark:text-white text-4xl font-extrabold mb-1">Nuestros Diplomados</h2>
        </div>
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
        <SwiperCarrouselDiplomados />
      </div>

      <div className="py-8 px-4 mx-auto max-w-screen-xl bg-white dark:bg-black rounded-lg p-4 md:p-8 mb-8 mt-2 border border-gray-300">
        <PorqueNosotros />
      </div>

      <div className="py-8  bg-white dark:bg-black rounded-lg  mb-8 mt-2 border border-gray-300">
        <SwiperCursosDestacados />
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
        <TestimoniosFb />
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
        asdasd
      </div>


      <Whatsapp />
      <Footer />

    </main>

  )
}