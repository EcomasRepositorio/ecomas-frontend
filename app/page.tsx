'use client';
import dynamic from 'next/dynamic';
const PrincipalHome = dynamic(() => import('@/components/home/PrincipalHome'));
const PorqueNosotros = dynamic(() => import('@/components/home/PorqueNosotros'));
const SwiperCarrouselDiplomados = dynamic(() => import('@/components/home/SwiperDiplomados'));
const CarouselCursosDestacados = dynamic(() => import('@/components/home/SwiperCursosDestacados'));
const TestimoniosFb = dynamic(() => import('@/components/home/TestimoniosFb'));
const QuienesSomos = dynamic(() => import('@/components/home/QuienesSomos'));
const NuestrosDiplomados = dynamic(() => import('@/components/home/NuestrosDiplomados'));
const ContactForm = dynamic(() => import('@/components/home/ContactForm'));
const ScrollToTopButton = dynamic(() => import('@/components/home/slideup'));

export default function Main() {

    return (
      <main className="relative bg-white dark:bg-[#001d51]">
        <div className='' style={{ backgroundAttachment: "fixed", backgroundImage: "url(/image/bg-test4.webp)", backgroundSize: "cover", backgroundPosition: "center" }}>
          <PrincipalHome />
          <QuienesSomos />
        </div>
        
        <NuestrosDiplomados />
        
        <div className="   rounded-lg  mx-auto max-w-screen-xl ">
          <SwiperCarrouselDiplomados />
        </div>

        <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-8 ">
          <PorqueNosotros />
        </div>
        <div className="  rounded-lg   mx-auto max-w-screen-xl ">
          <CarouselCursosDestacados />
        </div>
        <div className=" px-4 mx-auto max-w-screen-xl  rounded-lg p-4 md:p-6  ">
          <TestimoniosFb />
        </div>
        <div className="   rounded-lg  ">
          <ContactForm />
        </div>

        <div className=''>
          <ScrollToTopButton />
        </div>


      </main>
    )
  }
