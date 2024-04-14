'use client';
import Whatsapp from '@/components/whatsapp/Index'
import './globals.css'

import PrincipalHome from '@/components/home/PrincipalHome';
import Footer from '@/components/footer/Footer';
import PorqueNosotros from '@/components/home/PorqueNosotros';
import SwiperCarrouselDiplomados from '@/components/home/SwiperDiplomados';
import CarouselCursosDestacados from '@/components/home/SwiperCursosDestacados';
import TestimoniosFb from '@/components/home/TestimoniosFb';
import QuienesSomos from '@/components/home/QuienesSomos';
import NuestrosDiplomados from '@/components/home/NuestrosDiplomados';
import ContactForm from '@/components/home/ContactForm';
import NuestrasRedes from '@/components/home/NuestrasRedes';

export default function Main(
  { children }: { children: React.ReactNode }
) {

  {
    return (

      <main className="relative bg-white dark:bg-[#001d51]">
        
        <div className='' style={{ backgroundAttachment: "fixed", backgroundImage: "url(/image/bg-test4.png)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <PrincipalHome />
          <QuienesSomos />
        </div>
        <NuestrosDiplomados />
        <div className="   rounded-lg   ">
          <SwiperCarrouselDiplomados />
        </div>
        <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-8 ">
          <PorqueNosotros />
        </div>
        <div className="  rounded-lg   ">
          <CarouselCursosDestacados />
        </div>
        <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-6  ">
          <TestimoniosFb />
        </div>
        <div className="   rounded-lg  ">
          <ContactForm />
        </div>
        <NuestrasRedes />
        <Whatsapp />


      </main>

    )
  }
}