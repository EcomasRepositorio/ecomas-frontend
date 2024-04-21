'use client';
import React, { useState, useEffect } from 'react';
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import DiploCivil from './diplomadosCivil';
import DiploAmbiental from './diplomadosAmbient';
import DiploAlimentarias from './diplomadosAlimentarias';
import DiploAgronoma from './diplomadosAgronoma';





export default function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize(); // Llama a la función una vez al montar el componente para establecer el estado inicial

    window.addEventListener('resize', handleResize); // Agrega un event listener para detectar cambios en el tamaño de la ventana

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col">
        <Tabs disabledKeys={["anothers"]} color='primary' aria-label="Options" className="w-full md:max-w-max" placement={isMobile ? 'top' : 'start'}>
          <Tab key="civil" title="Ing. Civil" className='text-blue-500'>
            <Card>
              <CardBody>
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="ambient" title="Ing. Ambiental">
            <Card>
              <CardBody>
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="agrono" title="Ing. Agrónoma">
            <Card>
              <CardBody>
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="alimentaria" title="Ingeniería en alimentos">
            <Card>
              <CardBody>
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="anothers" title="Otras Profesiones">
            <Card>
              <CardBody>

              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
