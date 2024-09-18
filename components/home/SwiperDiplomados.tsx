"use client";
import React from "react";
import ScrollAnimation from "./scrollAnimation";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { GrFormNextLink } from "react-icons/gr";
import { useRouter } from "next/navigation";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

interface CursoDestacado {
  id: string;
  imageUrl: string;
  title: string;
  area: string;
}

const SwiperCarrousel: React.FC = () => {
  const router = useRouter(); // Usamos el hook de Next.js para la navegación

  const cursosDestacados: CursoDestacado[] = [
    {
      id: "riego-tecnificado",
      imageUrl: "/image/diplo_tecnifi.jpg",
      title: "Sistemas de Riego Tecnificado",
      area: "INGENIERÍA AGRÓNOMA",
    },
    {
      id: "gestion-ambiental-municipal",
      imageUrl: "/image/diplo_municipal.jpg",
      title: "Gestión Ambiental Municipal y Regional",
      area: "INGENIERÍA AMBIENTAL",
    },
    {
      id: "ssoma",
      imageUrl: "/image/diplo_ssoma.jpg",
      title: "SSOMA",
      area: "INGENIERÍA AMBIENTAL",
    },
    {
      id: "gestion-calidad-alimentos",
      imageUrl: "/image/diplo_alim.jpg",
      title: "Gestión de la calidad e inocuidad alimentaria",
      area: "INGENIERÍA EN ALIMENTOS",
    },
    {
      id: "modelamiento-bim",
      imageUrl: "/image/bim_model.jpg",
      title: "Modelamiento BIM",
      area: "INGENIERÍA CIVIL",
    },
    {
      id: "ingenieria-vial",
      imageUrl: "/image/vialdiplo.jpg",
      title: "Ingeniería Vial",
      area: "INGENIERÍA CIVIL",
    },
    {
      id: "asistente-tecnico-obras",
      imageUrl: "/image/tecobras.jpg",
      title: "Asistente Técnico en Obras",
      area: "INGENIERÍA CIVIL",
    },
  ];

  const handleCursoClick = (cursoId: string, cursoArea: string) => {
    router.push(`/diplomados?curso=${cursoId}&area=${cursoArea}`);
  };

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
        spaceBetween={15}
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
        navigation={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        style={{ padding: "10px" }}
      >
        {cursosDestacados.map((curso, index) => (
          <SwiperSlide key={index}>
            <div className="w-full mt-4 shadow-lg pt-2 hover:opacity-90 rounded-lg bg-white dark:bg-blackblue2">
              <div className="p-2 rounded-lg">
                <Image
                  src={curso.imageUrl}
                  alt="Imagen banner"
                  width={450}
                  height={300}
                  className="object-cover h-96 rounded-lg w-full"
                />
              </div>
              <div
                onClick={() => handleCursoClick(curso.id, curso.area)}
                className="mx-2 flex items-center justify-between cursor-pointer dark:bg-blackblue dark:text-white dark:border-0 bg-blue-100 border-blue-200 border text-primaryblue rounded-md text-xs font-medium px-4 py-1"
              >
                <span>Más información</span>
                <span>
                  <GrFormNextLink className="w-6 h-6" />
                </span>
              </div>
              <div className="flex items-center justify-center px-4 pt-1 mb-12 pb-2 min-h-[4rem]">
                <a
                  href={`/diplomados?curso=${curso.id}&area=${curso.area}`}
                  className="font-normal text-center inline-block hover:text-primaryblue transition duration-500 ease-in-out"
                >
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
