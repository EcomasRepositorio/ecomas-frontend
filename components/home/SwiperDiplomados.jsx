import React, { useRef, useState, useCallback } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import {Button, ButtonGroup} from "@nextui-org/react";

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
      imageUrl: "/image/ing_agricola.jpg",
      title: "Ingeniería Agrícola",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/ing_alimentarias.jpg",
      title: "Ingeniería de Industrias Alimentarias",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/ing_ambiental.jpg",
      title: "Ingeniería Ambiental",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/ing_civil.jpg",
      title: "Ingeniería Civil",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/ing_vial.jpg",
      title: "Ingeniería Vial",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/ing_riego.jpg",
      title: "Sistema de Riego Tecnificado",
      date: "27 March",
      readTime: "6 mins ago",
    },

  ];

  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();

  const variants = {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const handleScroll = () => {
      const elementPosition = containerRef.current.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;

      if (elementPosition < screenPosition) {
          setIsVisible(true);
      }
  };

  // Attach scroll event listener when component mounts
  React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      // Cleanup function to remove the event listener when component unmounts
      return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
      if (isVisible) {
          controls.start("visible");
      }
  }, [isVisible]);

  return (

<motion.div ref={containerRef} className=" p-1 sm:p-1 md:p-1 " initial="hidden"
      animate={controls}
      variants={variants}>

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
          <SwiperSlide key={index} style={{  }}>
            <div key={index} className="rounded-xl shadow-lg  w-full ">

              <div className="relative object-cover ">
                <a >
                  <Image
                    src={curso.imageUrl}
                    alt='Imagen banner'
                    width={400}
                    height={300}
                    className="object-cover h-96 rounded-t-xl"
                  />
                </a>
                <a href="#!">
                  <div className="absolute bottom-0 left-0 bg-[#0060ff] px-4 py-2 text-white text-sm hover:bg-white hover:text-primaryblue transition duration-500 ease-in-out">
                    Más información
                  </div>
                </a>

              </div>
              <div className="px-6 pt-1 mb-12 pb-2">
                <a href="#" className="font-normal text-lg inline-block hover:text-primaryblue transition duration-500 ease-in-out">
                  {curso.title}
                </a>

              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>

);
};
export default SwiperCarrousel;