'use client';
import React from "react";
import { ArrowRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import './stylesHome.css';
import { TypeAnimation } from 'react-type-animation';

const PrincipalHome = () => {
  return (
        <section className="    bg-fixed " style={{ }}>
          <div className="py-8  mx-auto max-w-screen-xl lg:py-10">
            <div className="wrapper mb-2" style={{ position: "relative", width: "100%" }}>
              <div className="bg-gray-800 dark:bg-gray-800 rounded-lg p-8 md:p-12 mb-50 " style={{ backgroundColor: "rgba(249, 250, 251, 0.2)", display: "flex", alignItems: "center", zIndex: 1, marginBottom: "20px", }}>
                <div style={{ flex: 1 }}>
                  <button className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2">
                    <svg className="w-2.5 h-2.5 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                      <path d="M11 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm8.585 1.189a.994.994 0 0 0-.9-.138l-2.965.983a1 1 0 0 0-.685.949v8a1 1 0 0 0 .675.946l2.965 1.02a1.013 1.013 0 0 0 1.032-.242A1 1 0 0 0 20 12V2a1 1 0 0 0-.415-.811Z" />
                    </svg>
                    asd
                  </button>
                  <h1 className="mb-4">
                    <TypeAnimation
                      sequence={[
                        'Bienvenido a', // Types 'One'
                        5000, // Waits 1s
                        'Únete a ', // Deletes 'One' and types 'Two'
                        5000, // Waits 2s
                        'Sé parte de',// Types 'Three' without deleting 'Two'
                        5000,
                        () => {
                          console.log('Sequence completed');
                        },
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="text-white dark:text-white text-5xl md:text-6xl font-extrabold"
                    />
                  </h1>
                  <h1 className="text-[#0060ff]  text-6xl md:text-7xl font-extrabold mb-2">ECOMÁS </h1>

                  <p className="mb-8">
                    <TypeAnimation
                      sequence={[
                        'Aquí la excelencia se encuentra con la innovación.', // Types 'One'
                        3000, // Waits 1s
                        'Nos dedicamos a ofrecer servicios de alta calidad.', // Deletes 'One' and types 'Two'
                        3000, // Waits 2s
                        'Proporcionamos experiencias educativas transformadoras.',// Types 'Three' without deleting 'Two'
                        3000,
                        () => {
                          console.log('Sequence completed');
                        },
                      ]}
                      wrapper="span"
                      cursor={true}
                      repeat={Infinity}
                      className="text-3xl font-medium text-white dark:text-white"
                    />
                  </p>
                  <button className="inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-[#0060ff] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Empezar
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
                <div className="moveArrow" style={{ maxWidth: "500px" }}>
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
          </div>
        </section>

  );
};
export default PrincipalHome;
