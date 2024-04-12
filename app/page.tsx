"use client";
import Header from '@/components/header/Index'
import Whatsapp from '@/components/whatsapp/Index'
import './globals.css'
import '/components/homeContent/styles.css';
import PrincipalHome from '@/components/home/PrincipalHome';
import Footer from '@/components/homeContent/footer/Footer';
import PorqueNosotros from '@/components/home/PorqueNosotros';
import SwiperCarrouselDiplomados from '@/components/home/SwiperDiplomados';
import SwiperCursosDestacados from '@/components/home/SwiperCursosDestacados';
import TestimoniosFb from '@/components/home/TestimoniosFb';
import QuienesSomos from '@/components/home/QuienesSomos';
import NuestrosDiplomados from '@/components/home/NuestrosDiplomados';
import ContactForm from '@/components/home/ContactForm';
import NuestrasRedes from '@/components/home/NuestrasRedes';

export default function Main() {


  return (

    <main className="relative bg-white dark:bg-[#001d51]">

      <Header />
      <PrincipalHome />
      <QuienesSomos/>

      <NuestrosDiplomados/>



      <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-6  ">
        <SwiperCarrouselDiplomados />
      </div>

      <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-8 ">
        <PorqueNosotros />
      </div>

      <div className="  rounded-lg   ">
        <SwiperCursosDestacados />
      </div>
      <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-6  ">
        <TestimoniosFb />
      </div>
      <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-6 ">
        <ContactForm />
      </div>
      <NuestrasRedes />


      <Whatsapp />
      <Footer />

    </main>

  )
}