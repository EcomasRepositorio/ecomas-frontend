
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from "next/image";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';


const SwiperCursosDestacados = () => {
  const cursosDestacados = [
    // Tus datos de cursos destacados
    {
      imageUrl: "/image/bg-test.png",
      title: "Nombre del curso",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/bg-test.png",
      title: "Nombre del curso",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/bg-test.png",
      title: "Nombre del curso",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/bg-test.png",
      title: "Nombre del curso",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/bg-test.png",
      title: "Nombre del curso",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/bg-test.png",
      title: "Nombre del curso",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
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
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 3,
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
          <SwiperSlide key={index}>
            <div key={index} className="rounded overflow-hidden shadow-lg">
              <a href="#"></a>
              <div className="relative">
                <a >
                  <Image
                    src={curso.imageUrl}
                    alt='Imagen banner'
                    width={200}
                    height={300}
                  />
                </a>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-[#0060ff] px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                    Más información
                  </div>
                </a>

              </div>
              <div className="px-6 py-4">
                <a href="#" className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">
                  {curso.title}
                </a>
                <p className="text-gray-500 text-sm">{curso.description}</p>
              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">

                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCursosDestacados;
