import React, { useState } from "react";
import Image from "next/image";
import ScrollAnimation from "./scrollAnimation";
import { motion } from "framer-motion";

const cursosDestacados = [
  // Tus datos de cursos destacados
  {
    id: 1,
    imageUrl: "/image/solidos.jpg",
    title: "Gestion y manejo de residuos sólidos municipales",
    description:
      "Este curso aborda estrategias y técnicas para gestionar eficazmente los residuos sólidos en entornos urbanos, incluyendo temas como reciclaje, tratamiento de residuos y participación comunitaria.",
  },
  {
    id: 2,
    imageUrl: "/image/aspersor.jpg",
    title: "Sistemas de riego por aspersión",
    description:
      "Curso sobre el diseño y uso eficiente de sistemas de riego por aspersión.",
  },
  {
    id: 3,
    imageUrl: "/image/goteo.jpg",
    title: "Sistemas de riego por goteo",
    description:
      "Curso que explora el diseño y aplicación de sistemas eficientes de riego por goteo en agricultura y jardinería.",
  },
  {
    id: 4,
    imageUrl: "/image/viales.jpg",
    title: "Arqueología en proyectos viales",
    description:
      "Curso sobre la integración de la arqueología en el diseño y desarrollo de proyectos viales.",
  },
  {
    id: 5,
    imageUrl: "/image/obras.jpg",
    title: "Ampliaciones de plazo, adicionales de obra y penalidades en obra",
    description:
      "Curso que aborda la gestión de ampliaciones de plazo, cambios en obra y las penalizaciones asociadas en proyectos de construcción.",
  },
  {
    id: 6,
    imageUrl: "/image/aguaca.jpg",
    title: "Monitoreo de la calidad de agua",
    description:
      "Curso sobre técnicas y métodos para monitorear la calidad del agua en diferentes contextos ambientales y aplicaciones.",
  },
  {
    id: 7,
    imageUrl: "/image/ssoma.jpg",
    title: "Supervisor SSOMA",
    description:
      "Curso que prepara a los supervisores en seguridad, salud ocupacional y medio ambiente (SSOMA) para la gestión efectiva en entornos laborales.",
  },
];

const SwiperCursosDestacados = () => {
  // Duplica los cursos para el efecto de carrousel infinito
  const duplicatedCursos = [...cursosDestacados, ...cursosDestacados];

  // Define la longitud total en píxeles que los elementos ocuparán.
  const itemWidth = 396; // Ajusta según el ancho real de cada elemento
  const totalWidth = itemWidth * duplicatedCursos.length;

  const containerVariants = {
    animate: {
      x: [-totalWidth / 2, 0], // Empieza desde la mitad de la longitud total hacia la izquierda hasta el inicio
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 28, // Duración de la animación
          ease: "linear", // Tipo de easing
        },
      },
    },
  };
  return (
    <ScrollAnimation>
      <div className="rounded-lg p-8 md:p-5 flex flex-col items-center">
        <h2 className="text-primaryblue dark:text-white text-4xl font-extrabold mb-1">
          Nuestros Cursos Destacados
        </h2>
      </div>
      <div className="relative overflow-hidden py-5">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute left-0 top-0 w-1/5 h-full bg-gradient-to-r from-white to-transparent via-transparent dark:from-blackblue dark:to-transparent dark:via-transparent"></div>
          <div className="absolute right-0 top-0 w-1/5 h-full bg-gradient-to-l from-white to-transparent via-transparent dark:from-blackblue dark:to-transparent dark:via-transparent"></div>
        </div>

        <motion.div
          className="flex cursor-grab"
          drag="x" // Hacer arrastrable en el eje x
          dragConstraints={{ left: -totalWidth / 2, right: 0 }} // Limitar el arrastre
          dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }} // Ajustar la transición del arrastre
          variants={containerVariants}
          animate="animate"
        >
          {duplicatedCursos.map((curso, index) => (
            <motion.div
              key={index}
              className=" dark:bg-blackblue2 dark:ring-0 py-4 mr-3 rounded-2xl relative p-2 bg-gray-50/60 backdrop-blur-md transition-all ring-1 ring-gray-200/50 shadow hover:shadow-lg w-96 max-w-md flex flex-col justify-between snap-start snap-always shrink-0 first-of-type:scroll-m-10 scroll-m-5"
            >
              <div className="object-cover">
                <div className="p-2 rounded-lg">
                  <Image
                    src={curso.imageUrl}
                    alt="Imagen curso"
                    width={400}
                    height={300}
                    className="object-cover h-48 rounded-lg w-full"
                  />
                </div>
                <div className="px-8 md:px-4 pt-1 mb-4 pb-2">
                  <a className="text-justify font-semibold text-md text-blackblue dark:text-white">
                    {curso.title}
                  </a>
                  <p className="text-justify font-light text-sm">
                    {curso.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ScrollAnimation>
  );
};

export default SwiperCursosDestacados;
