'use client';
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from "next/image";
import './stylesHome.css';
import ScrollAnimation from "./framerAnimation";
// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';


const SwiperCursosDestacados = () => {

  const cursosDestacados = [
    // Tus datos de cursos destacados
    {
      imageUrl: "/image/solidos.jpg",
      title: "Gestion y manejo de residuos sólidos municipales",
      description: "Este curso aborda estrategias y técnicas para gestionar eficazmente los residuos sólidos en entornos urbanos, incluyendo temas como reciclaje, tratamiento de residuos y participación comunitaria.",
    },
    {
      imageUrl: "/image/aspersor.jpg",
      title: "Sistemas de riego por aspersión",
      description: "Curso sobre el diseño y uso eficiente de sistemas de riego por aspersión.",
    },
    {
      imageUrl: "/image/goteo.jpg",
      title: "Sistemas de riego por goteo",
      description: "Curso que explora el diseño y aplicación de sistemas eficientes de riego por goteo en agricultura y jardinería.",
    },
    {
      imageUrl: "/image/viales.jpg",
      title: "Arqueología en proyectos viales",
      description: "Curso sobre la integración de la arqueología en el diseño y desarrollo de proyectos viales.",
    },
    {
      imageUrl: "/image/obras.jpg",
      title: "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
      description: "Curso que aborda la gestión de ampliaciones de plazo, cambios en obra y las penalizaciones asociadas en proyectos de construcción.",
    },
    {
      imageUrl: "/image/aguaca.jpg",
      title: "Monitoreo de la calidad de agua",
      description: "Curso sobre técnicas y métodos para monitorear la calidad del agua en diferentes contextos ambientales y aplicaciones.",
    },
    {
      imageUrl: "/image/ssoma.jpg",
      title: "Supervisor SSOMA",
      description: "Curso que prepara a los supervisores en seguridad, salud ocupacional y medio ambiente (SSOMA) para la gestión efectiva en entornos laborales.",
    },
  ];

  return (
    <ScrollAnimation>

      <div className=" rounded-lg p-8 md:p-5 flex flex-col items-center">
        <h2 className="text-[#0060ff] dark:text-white text-4xl font-extrabold mb-1">Nuestros Cursos Destacados</h2>
      </div>
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
          767 : {
            slidesPerView: 3,
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
          <SwiperSlide key={index} >
            <div className="swiper-card-container">
              <div className=" rounded-2xl  object-cover w-full flex flex-col mb-8 h-[340px]">

                <div className="relative object-cover ">
                  <a>
                    <Image
                      src={curso.imageUrl}
                      alt='Imagen banner'
                      width={400}
                      height={300}
                      className="h-40 rounded-t-2xl object-cover"
                    />
                  </a>

                </div>
                <div className="px-12 md:px-4  pt-1 mb-4 pb-2">
                  <a href="#" className="text-justify font-bold text-base inline-block hover:text-primaryblue transition duration-500 ease-in-out">
                    {curso.title}
                  </a>
                  <p className="text-justify font-light text-sm">{curso.description}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

        ))}
      </Swiper>
      </ScrollAnimation>
  );
};

export default SwiperCursosDestacados;
