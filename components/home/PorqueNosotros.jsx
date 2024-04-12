import React from "react";
import Image from "next/image";
import { UsersIcon, BookOpen, AcademicCap, Star, BookOpenIcon, AcademicCapIcon, StarIcon } from '@heroicons/react/solid'; // Corregí las importaciones de los iconos

const PorqueNosotros = () => {

  const features = [
    { name: '+3000', description: 'Alumnos beneficiados', icon: UsersIcon }, // Utiliza directamente el componente del ícono en lugar de una cadena de texto
    { name: '+70', description: 'Diplomados disponibles', icon: AcademicCapIcon },
    { name: '+700', description: 'Cursos disponibles"', icon: BookOpenIcon },
    { name: '+10000', description: 'Clases virtuales impartidas', icon: StarIcon },
    ]
  
  return (
<div className="">
  <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16  items-center  px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
    <div>
      <h2 className="text-[#0060ff] dark:text-white text-4xl font-extrabold mb-1 sm:text-4xl">¿Por qué debes elegirnos?</h2>
      <p className="mt-4 text-white text-justify">
        En Ecomas, nos dedicamos a ayudar a mejorar el currículum vitae de los titulados mediante una amplia 
        gama de cursos y diplomados especializados en áreas clave como ingenierías, 
        ofreciendo oportunidades para el desarrollo profesional y el crecimiento personal.
      </p>

      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-4">
        {features.map((feature, index) => (
          <div key={index} className="border-t border-gray-200 pt-4 flex items-center">
            <div className="mr-2">
              <feature.icon className="h-10 w-10 text-[#0060ff]" aria-hidden="true" />
            </div>
            <div>
              <dt className="font-extrabold text-4xl text-white">{feature.name}</dt>
              <dd className="mt-2 text-sm text-white">{feature.description}</dd>
            </div>
          </div>
        ))}
      </dl>
    </div>
    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
      <Image
        src='/image/inges.jpg'
        alt='Imagen banner'
        width={400}
        height={300} // Ajusté la altura de la imagen a 300px
        className='hidden md:block rounded-lg w-full h-72 object-cover object-center' // Ajusté el tamaño de la imagen
      />
      <Image
        src='/image/riego.jpg'
        alt='Imagen banner'
        width={400}
        height={300} // Ajusté la altura de la imagen a 300px
        className='hidden md:block rounded-lg w-full h-72 object-cover object-center' // Ajusté el tamaño de la imagen
      />
      <Image
        src='/image/autocad.jpg'
        alt='Imagen banner'
        width={400}
        height={300} // Ajusté la altura de la imagen a 300px
        className='hidden md:block rounded-lg w-full h-72 object-cover object-center' // Ajusté el tamaño de la imagen
      />
      <Image
        src='/image/alkumnos.jpg'
        alt='Imagen banner'
        width={400}
        height={300} // Ajusté la altura de la imagen a 300px
        className='hidden md:block rounded-lg w-full h-72 object-cover object-center' // Ajusté el tamaño de la imagen
      />
    </div>
  </div>
</div>

  );
};

export default PorqueNosotros;
