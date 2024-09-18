"use client";
import Curso from "./diplomadosAccordion";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useRef } from "react";

interface CursoData {
  id: string;
  area: string;
  titulo: string;
  imagen: string;
  fechaInicio: string;
  modalidad: string;
  duracion: string;
  horas: string;
  descripcion: string;
  modulos: string[];
}
const DiploDerecho = () => {
  const searchParams = useSearchParams();
  const cursoParam = searchParams.get("curso"); // Obtener el valor de 'curso' del URL

  // Crear un ref para cada curso
  const cursosRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  // Array de objetos que contienen los datos de cada curso
  const cursosData: CursoData[] = [
    {
      id: "perito-forense",
      area: "DERECHO",
      titulo: "PERITO FORENSE Y CRIMINALÍSTICO",
      imagen: "/image/perito_forense.jpg",
      fechaInicio: "01/09/2024",
      modalidad: "Virtual",
      duracion: "4 meses",
      horas: "420 horas correspondientes a 26 créditos.",
      descripcion:
        "Bachilleres y estudiantes universitarios y técnicos de los últimos ciclos de Psicología, medicina, tecnología médica, abogados; efectivos de las Fuerzas Armadas y la Policía Nacional del Perú; así como profesionales que ejercen la labor pericial, ya sea oficialmente o de manera particular.",
      modulos: [
        "Psicopatología de la violencia y perfiles criminales",
        "Criminalística y ciencias forenses en el proceso penal",
        "Medicina forense y autopsia médico legal",
        "Escena del crimen, cadena de custodia, metodología para indicios y evidencia ",
        "Grafotecnia",
        "Documentoscopia",
        "Dactiloscopia forense",
        "Balística forense",
        "Técnicas de laboratorio forense",
      ],
    },
    // Puedes agregar más cursos aquí si es necesario
  ];

  // Hook de efecto para hacer scroll al diplomado basado en el cursoParam
  useEffect(() => {
    if (cursoParam && cursosRefs.current[cursoParam]) {
      const targetElement = cursosRefs.current[cursoParam];
      if (targetElement) {
        const yOffset = -206; // Este valor crea el espacio de 96px en la parte superior
        const y = targetElement.getBoundingClientRect().top + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  }, [cursoParam]);

  return (
    <div>
      {cursosData.map((curso, index) => (
        <div
          id={curso.id}
          key={index}
          ref={(el) => {
            if (el) {
              cursosRefs.current[curso.id] = el;
            }
          }}
        >
          <Curso curso={curso} />
        </div>
      ))}
    </div>
  );
};

export default DiploDerecho;
