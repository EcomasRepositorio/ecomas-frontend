import React, { useEffect, useRef, useCallback } from "react";
import Link from 'next/link';

import { ArrowRightIcon, UserCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { Divider } from "@nextui-org/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';
import SwiperCarrousel from "./swiper";
import Graduates from "./whyus";
import Footer from "../homeContent/footer/Footer";



const Banners = () => {
  const nextButtonRef = useRef(null);
  const prevButtonRef = useRef(null);
  const unAcceptClick = useRef(null);

  const showSlider = useCallback((type) => {
    // Lógica del carrusel...
  }, []);

  useEffect(() => {
    // Efectos secundarios...
  }, []);

  return (
    <section class="bg-gray-900 dark:bg-gray-900 relative" style={{ backgroundImage: "url('image/bg-test.png')", backgroundSize: "cover", backgroundPosition: "center", height: "80vh" }}>
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-20">
        <div className="wrapper mb-2" style={{ position: "relative", width: "100%" }}> {/* Contenedor adicional */}
          <div className="bg-gray-800 dark:bg-gray-800 rounded-lg p-8 md:p-12 mb-50 " style={{ backgroundColor: "rgba(249, 250, 251, 0.2)", display: "flex", alignItems: "center", zIndex: 1, marginBottom: "20px", }}>
            <div style={{ flex: 1 }}>
              <a href="#" className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                  <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                </svg>
                asd
              </a>
              <h1 className="text-white dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Bienvenido a </h1>
              <h1 className="text-[#0060ff] dark:text-white text-3xl md:text-5xl font-extrabold mb-2">ECOMÁS </h1>
              <p className="text-lg font-normal text-white dark:text-white mb-6">Aquí la excelencia se encuentra con la innovación. <br />Nos dedicamos a ofrecer servicios de alta calidad <br /> y experiencias educativas transformadoras.</p>
              <a href="#" className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-[#0060ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Empezar
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div style={{ maxWidth: "500px" }}>
              <Image
                src='/image/test-illus.png'
                alt='Imagen banner'
                width={300}
                height={200}
                className='hidden md:block'
              />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-black rounded-lg p-8 md:p-10 mb-8 mt-2  top-9/10  transform   flex-grow border border-gray-300">

          <div className="bg-white dark:bg-black rounded-lg p-8 md:p-5 flex flex-col items-center ">
            <h2 className="text-[#0060ff] dark:text-[#0060ff] text-4xl font-extrabold mb-1">¿Quiénes somos?</h2>
            <Divider className="my-4" />
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400 justify-text">
              En Ecomás, nos dedicamos a brindar un servicio de especialización para personas y profesionales que buscan ampliar sus conocimientos y habilidades en diversas áreas.
            </p>

          </div>



        </div>
        <div className="bg-white dark:bg-black rounded-lg   mb-8 mt-2 border border-gray-300" >
          <div className="bg-white dark:bg-black rounded-lg md:p-5 flex flex-col items-center">
            <h2 className="text-[#0060ff] dark:text-[#0060ff] text-4xl font-extrabold mb-1">Nuestros Diplomados</h2>
          </div>
        </div>
        <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
          <SwiperCarrousel />
        </div>
        <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
          <Graduates />
        </div>
        <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
          asdasd
        </div>
        <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
          asdasd
        </div>
        <div className="bg-white dark:bg-black rounded-lg p-4 md:p-6 mb-8 mt-2 border border-gray-300">
          asdasd
        </div>





      </div>
      <Footer />
    </section>


  );
};

export default Banners;