'use client';
import React from "react";
import SearchCode from '@/components/certificate/SearchCode';
import SearchDNI from '@/components/certificate/SearchDNI';
import SearchName from '@/components/certificate/SearchName';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Image from "next/image";

interface Props {
  // Define any props if needed
}

const TestingPage: React.FC<Props> = () => {

  const handleSearch = (data: any) => {
    console.log(data);
  };

  const handleButton = (type: string) => {
    // Implement handleButton functionality if needed
  };

  return (

    <section className=" bg-fixed " style={{}}>
      <div className='' style={{ backgroundAttachment: "fixed", backgroundImage: "url(/image/bg-test4.png)", backgroundSize: "cover", backgroundPosition: "center" }}>

        <div className="py-8  mx-auto max-w-screen-xl lg:py-10">
          <div className="" style={{ position: "relative", width: "100%" }}>
            <div className="bg-white dark:bg-blackblue rounded-lg p-8 md:p-12 mb-50  " style={{ marginBottom: "20px", }}>


              <div className="flex flex-col md:flex-row mx-auto max-w-screen-xl md:mr-12 md:p-4 " >
                <div className="md:mr-12" >
                  <div className="flex flex-col">
                    <h2 className="mb-4 mt-8 text-2xl font-bold text-primaryblue dark:text-white md:mb-6 lg:text-4xl">Nuestro Diplomados</h2>
                    <p className="dark:text-white md:text-xl mb-4">Explora Nuestra Trayectoria Educativa: Descubre Nuestros Programas de Formación</p>

                    <Tabs aria-label="Options" color="primary">
                      <Tab key="dni" title="Buscar por DNI" className="">
                        <Card>
                          <CardBody>
                            <div>
                              <SearchDNI onSearchDNI={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                      <Tab key="name" title="Buscar por nombres">
                        <Card>
                          <CardBody>
                            <div>
                              <SearchName onSearchName={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                      <Tab key="code" title="Buscar por Código">
                        <Card>
                          <CardBody>
                            <div>
                              <SearchCode onSearchCode={handleSearch} />
                            </div>
                          </CardBody>
                        </Card>
                      </Tab>
                    </Tabs>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-y-8  md:p-8  ">
                  <div>
                    <Image
                      src='/image/COLEGIO DE ABOGADOS DE LA LIBERTAD.png'
                      alt='Imagen banner'
                      width={150}
                      height={150}
                      className=""
                    />
                  </div>
                  <div>
                    <Image
                      src='/image/COLEGIO DE INGENIEROS DEL PERÚ.png'
                      alt='Imagen banner'
                      width={150}
                      height={150}
                    />
                  </div>
                  <div>
                    <Image
                      src='/image/ESCUELA DE POSGRADO DE LA UNP.png'
                      alt='Imagen banner'
                      width={150}
                      height={150}
                    />
                  </div>
                  <div>
                    <Image
                      src='/image/LOGO-VERTICAL-COLOR.png'
                      alt='Imagen banner'
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>




    </section>
  );
}

export default TestingPage;
