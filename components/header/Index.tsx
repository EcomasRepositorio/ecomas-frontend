"use client";
import Image from 'next/image';
import { ArrowRightIcon,UserCircleIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import React, { useState } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Aquí puedes agregar lógica adicional para cambiar el tema de tu aplicación
  };

  return (
    <>
      <nav className={`bg-${darkMode ? '[#0060ff]' : 'white'} border-gray-700`}>
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <Image
              src='/image/ecomas.png'
              alt='Imagen del logo'
              width={220}
              height={10}
              className='hidden md:block'
            />
            <Image
              src='/image/ecomas.png'
              alt='Imagen del logo'
              width={120}
              height={80}
              className='block md:hidden'
            />
          </a>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <a href="tel:5541251234" className={`flex items-center text-white bg-[#0060ff] hover:bg-white hover:text-[#0060ff] focus:outline-none border border-${darkMode ? 'white' : 'blue-500'} rounded-md px-4 py-2 transform transition-transform hover:scale-105`}>
              Ver Certificados
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
            <a href="#" className={`flex items-center text-white bg-[#0060ff] hover:bg-white hover:text-[#0060ff] focus:outline-none border border-${darkMode ? 'white' : 'blue-500'} rounded-md px-4 py-2 transform transition-transform hover:scale-105`}>
              Aula Virtual
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </nav>
      <nav className="bg-[#0060ff] shadow dark:[bg-white]">
        <div className="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
          <a href="#" className="text-white dark:text-white border-b-2 border-white mx-1.5 sm:mx-6">Inicio</a>

          <a href="#" className="border-b-2 border-transparent hover:text-white dark:hover:text-white hover:border-gray-200 mx-1.5 sm:mx-6">Diplomados</a>

          <a href="#" className="border-b-2 border-transparent hover:text-white dark:hover:text-white hover:border-gray-200 mx-1.5 sm:mx-6">Certificados</a>

          <a href="#" className="border-b-2 border-transparent hover:text-white dark:hover:text-white hover:border-gray-200 mx-1.5 sm:mx-6">Contáctanos</a>

          <a href="#" className="border-b-2 border-transparent hover:text-white dark:hover:text-white hover:border-gray-200 mx-1.5 sm:mx-6">
            <UserCircleIcon className="w-8 h-8 " />
          </a>

          <a href="#" className="border-b-2 border-transparent hover:text-white dark:hover:text-white hover:border-gray-200 mx-1.5 sm:mx-6">
            <SunIcon className="w-8 h-8" />          
          </a>
        </div>
      </nav>


    </>
  );
};

export default Header;
