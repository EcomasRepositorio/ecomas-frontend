"use client";
import React, { useState, useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useSearchParams } from "next/navigation";

import DiploCivil from "./diplomadosCivil";
import DiploAmbiental from "./diplomadosAmbient";
import DiploAlimentarias from "./diplomadosAlimentarias";
import DiploAgronoma from "./diplomadosAgronoma";
import DiploDerecho from "./diplomadosDerecho";
type Key = string | number;
const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const searchParams = useSearchParams();
  const curso = searchParams.get("curso");
  const area = searchParams.get("area");

  const [selectedTab, setSelectedTab] = useState<string>("");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Actualizamos la tab seleccionada basado en el área obtenida de los searchParams
  useEffect(() => {
    if (area) {
      setSelectedTab(area);
    }
  }, [area]);

  // Asegúrate de convertir 'key' a string antes de actualizar el estado
  const handleTabChange = (key: Key) => {
    setSelectedTab(key.toString());  // Convertimos el Key a string
  };

  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col">
        <Tabs
          selectedKey={selectedTab}
          onSelectionChange={handleTabChange}  // Usamos la nueva función que convierte 'Key' a string
          disabledKeys={["anothers"]}
          color="primary"
          aria-label="Options"
          className="w-full md:max-w-max "
          placement={isMobile ? "top" : "start"}
          classNames={{
            tabList: " w-full dark:bg-blackblue2 bg-blue-50",
            cursor: "bg-primaryblue",
            tab: "",
            tabContent:
              "group-data-[selected=true]:text-white dark:text-white ",
          }}
        >
          <Tab key="INGENIERÍA CIVIL" title="Ing. Civil">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploCivil />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="INGENIERÍA AMBIENTAL" title="Ing. Ambiental">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploAmbiental />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="INGENIERÍA AGRÓNOMA" title="Ing. Agrónoma">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploAgronoma />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="INGENIERÍA EN ALIMENTOS" title="Ingeniería en alimentos">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploAlimentarias />
              </CardBody>
            </Card>
          </Tab>
          <Tab key="DERECHO" title="Derecho">
            <Card>
              <CardBody className="dark:bg-blackblue2 bg-blue-50">
                <DiploDerecho />
              </CardBody>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
