import "./Styles.css";
import React from "react";
import Link from 'next/link';
import { Image } from "@nextui-org/react";

import { UsersIcon, BookOpen, AcademicCap, Star, BookOpenIcon, AcademicCapIcon, StarIcon, } from '@heroicons/react/solid';

const Graduates = () => {
  return (
    <div className="bg-white dark:bg-white rounded-lg  md:p-8 mb-8 mt-10" style={{ position: "absolute", left: "50%", transform: "translate(-50%, 0)", zIndex: 2, width: "75%" }}>
      {/* Título */}
      <h1 className="text-[#0060ff] dark:text-black text-4xl font-extrabold mb-5 text-center">¿Porqué debes elegirnos?</h1>

      {/* Contenedor principal */}
      <div className="flex">
        {/* Sección izquierda */}
        <div className="w-2/3 pr-8">
          {/* Texto */}
          <p className="mb-4 text-lg text-gray-800">En Ecomás, nos enorgullecemos de ofrecer una experiencia única a nuestros clientes. ¿Por qué deberías elegirnos? Aquí hay algunas razones:</p>

          {/* Iconos animados con números */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* Primera columna de números */}
            <div>
              {[1000].map(number => (
                <div key={number} className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center text-white mr-2"><UsersIcon class="h-6 w-6 " /></div>
                  <div className="text-6xl font-bold">{number}</div>
                </div>
              ))}
            </div>
            {/* Segunda columna de números */}
            <div>
              {[2000].map(number => (
                <div key={number} className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center text-white mr-2"><BookOpenIcon class="h-6 w-6 " /></div>
                  <div className="text-6xl font-bold">{number}</div>
                </div>
              ))}
            </div>
            {/* Tercer de números */}
            <div>
              {[3000].map(number => (
                <div key={number} className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center text-white mr-2"><AcademicCapIcon class="h-6 w-6 " /></div>
                  <div className="text-6xl font-bold">{number}</div>
                </div>
              ))}
            </div>
            {/* Cuarto  de números */}
            <div>
              {[4000].map(number => (
                <div key={number} className="flex items-center mb-4">
                  <div className="h-10 w-10 bg-gray-500 rounded-full flex items-center justify-center text-white mr-2"><StarIcon class="h-6 w-6 " /></div>
                  <div className="text-6xl font-bold">{number}</div>
                </div>
              ))}
            </div>
          </div>




          {/* Lista de puntos beneficios */}
          <ul className="list-disc pl-6">
            <li className="text-gray-800">Experiencia de más de 5 años.</li>
            <li className="text-gray-800">Amplio catálogo con una variedad de cursos en diferentes áreas.</li>
            <li className="text-gray-800">Compromiso con la satisfacción del cliente.</li>
            <li className="text-gray-800">Contribución a un mejor....</li>
            <li className="text-gray-800">Reconocimiento por nuestra innovación en ...</li>
          </ul>
        </div>

        {/* Sección derecha */}
        <div className="w-1/4">
          {/* Imagen */}
          <Image
            isZoomed
            width={500}
            alt="NextUI Fruit Image with Zoom"
            src="https://nextui-docs-v2.vercel.app/images/fruit-1.jpeg"
          />
        </div>
      </div>
    </div>


  );
};
export default Graduates;
