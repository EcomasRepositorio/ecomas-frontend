
import React, { useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Image from "next/image";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';


const SwiperCursosDestacados = () => {
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
  
  const cursosDestacados = [
    // Tus datos de cursos destacados
    {
      imageUrl: "/image/solidos.jpg",
      title: "Gestion y manejo de residuos sólidos municipales",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/aspersor.jpg",
      title: "Sistemas de riego por aspersión",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/goteo.jpg",
      title: "Sistemas de riego por goteo",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/viales.jpg",
      title: "Arqueología en proyectos viales",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/obras.jpg",
      title: "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/aguaca.jpg",
      title: "Monitoreo de la calidad de agua",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
    {
      imageUrl: "/image/ssoma.jpg",
      title: "Supervisor SSOMA",
      description: "Descripción",
      date: "27 March",
      readTime: "6 mins ago",
    },
  ];

  return (
    <motion.div ref={containerRef} className=" p-1 sm:p-10 md:p-4" initial="hidden"
      animate={controls}
      variants={variants}>
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
            slidesPerView: 5,
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
          <SwiperSlide key={index} style={{ height: "500px" }}>
            <div key={index} className="rounded  shadow-lg object-cover w-full ">
              <a href="#"></a>
              <div className="relative object-cover ">
                <a>
                  <Image
                    src={curso.imageUrl}
                    alt='Imagen banner'
                    width={400}
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
                <a href="#" className="font-semibold text-lg inline-block hover:text-primaryblue transition duration-500 ease-in-out">
                  {curso.title}
                </a>

              </div>
              <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">

                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default SwiperCursosDestacados;
