'use client';
import React from "react";
import ScrollAnimation from "./framerAnimation";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import Link from 'next/link';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';



const SwiperCarrousel = () => {

  const cursosDestacados = [
    // Tus datos de cursos destacados
    {
      imageUrl: "/image/diplo_tecnifi.jpg",
      title: "Sistemas de Riego Tecnificado",

    },
    {
      imageUrl: "/image/diplo_residuos.jpg",
      title: "Gestión y Manejo Integral de Residuos Sólidos",
    },
    {
      imageUrl: "/image/diplo_ssoma.jpg",
      title: "SSOMA",
    },
    {
      imageUrl: "/image/diplo_alim.jpg",
      title: "Gestión de la calidad e inocuidad alimentaria",
    },
    {
      imageUrl: "/image/bim_model.jpg",
      title: "Modelamiento BIM",
    },
    {
      imageUrl: "/image/vialdiplo.jpg",
      title: "Ingeniería Vial",
    },
    {
      imageUrl: "/image/tecobras.jpg",
      title: "Asistente Técnico en Obras",
    },

  ];


  return (

    <ScrollAnimation>

      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}

        keyboard={{
          enabled: true,
        }}
        spaceBetween={10}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={false}
        navigation={true}
        pagination={{
          clickable: true,

        }}
        autoplay={{
          delay: 3000, // Intervalo de tiempo entre cada slide (5 segundos)
          disableOnInteraction: false, // Autoplay no se detendrá al interactuar con el swiper
        }}
        loop={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {cursosDestacados.map((curso, index) => (
          <SwiperSlide key={index} style={{}}>
            <div key={index} className="  w-full ">

              <div className="relative object-cover ">
                <a >
                  <Image
                    src={curso.imageUrl}
                    alt='Imagen banner'
                    width={450}
                    height={300}
                    className="object-cover h-96 "
                  />
                </a>
                <Link href="/diplomados" passHref legacyBehavior>
                  <div className="absolute bottom-0 left-0 bg-[#0060ff] px-4 py-2 text-white text-sm hover:bg-white hover:text-primaryblue transition duration-500 ease-in-out">

                    Más información


                  </div>
                </Link>

              </div>
              <div className="px-6 pt-1 mb-12 pb-2">

                <a href="/" className="font-normal text-lg inline-block hover:text-primaryblue transition duration-500 ease-in-out">
                  {curso.title}
                </a>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ScrollAnimation>

  );
};
export default SwiperCarrousel;