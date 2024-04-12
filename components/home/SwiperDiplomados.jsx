import React, { useEffect, useRef, useCallback } from "react";
import { Button } from "@nextui-org/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination, Autoplay } from 'swiper/modules';



const SwiperCarrousel = () => {
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

    <div className="bg-white dark:bg-white rounded-lg  flex flex-col ">

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
        delay: 2000, // Intervalo de tiempo entre cada slide (5 segundos)
        disableOnInteraction: false, // Autoplay no se detendrá al interactuar con el swiper
      }}
      loop={true}
      modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="slide-content ">
          <Image
            src='/image/ing_agricola.jpg'
            alt='Inge agricola'
            width={500}
            height={400}
            style={{ width: '100%' }}
            className="object-cover object-center"
          />

          <h3>Ingeniería Agrícola</h3>
          <Button color="default">
            Más información
          </Button>


        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="slide-content">
          <Image
            src='/image/ing_civil.jpg'
            alt='Imagen banner'
            width={400}
            height={400}
            style={{ width: '100%' }}
            className="object-cover object-center"

          />
          <h3>Ingeniería Civil</h3>
          <Button color="default">
            Más información
          </Button>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="slide-content">
          <Image
            src='/image/ing_ambiental.jpg'
            alt='Imagen banner'
            width={400}
            height={400}
            style={{ width: '100%' }}
            className="object-cover object-center"

          />
          <h3>Ingeniería Ambiental</h3>
          <Button color="default">
            Más información
          </Button>
        </div>
      </SwiperSlide>

      {/* Slide 4 */}
      <SwiperSlide>
        <div className="slide-content">
          <Image
            src='/image/ing_alimentarias.jpg'
            alt='Imagen banner'
            width={400}
            height={400}
            style={{ width: '100%' }}
            className="object-cover object-center"

          />
          <h3>Ingeniería de Industrias Alimentarias</h3>
          <Button color="default">
            Más información
          </Button>
        </div>
      </SwiperSlide>
      {/* Slide 5 */}
      <SwiperSlide>
        <div className="slide-content">
          <Image
            src='/image/ing_vial.jpg'
            alt='Imagen banner'
            width={400}
            height={400}
            style={{ width: '100%' }}
            className="object-cover object-center"

          />
          <h3>Ingeniería Vial</h3>

          <Button color="default">
            Más información
          </Button>
        </div>
      </SwiperSlide>

      {/* Slide 6 */}
      <SwiperSlide>
        <div className="slide-content">
          <Image
            src='/image/ing_riego.jpg'
            alt='Imagen banner'
            width={400}
            height={400}
            style={{ width: '100%' }}
            className="object-cover object-center"

          />
          <h3>Sistemas de Riego Tecnificado</h3>

          <Button color="default">
            Más información
          </Button>
        </div>
      </SwiperSlide>

    </Swiper>

    </div>

);
};
export default SwiperCarrousel;