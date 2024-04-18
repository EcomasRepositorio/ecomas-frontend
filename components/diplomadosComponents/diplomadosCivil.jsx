'use client';
import { useState } from 'react';
import Curso from "./diplomadosAccordion";


const DiploCivil = () => {

  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? null : value);

  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      titulo: 'Asistente Técnico en Obras',
      imagen: '/image/tecobras.jpg',
      fechaInicio: '01/05/2024',
      modalidad: 'Online',
      duracion: '4 semanas',
      horas: '20 horas',
      descripcion: 'El diplomado de Asistente Técnico en Obras está dirigido a personas interesadas en adquirir habilidades prácticas para trabajar eficazmente en el campo de la construcción y obras civiles. Este programa es ideal para aspirantes a técnicos de obra, trabajadores del sector de la construcción que deseen mejorar sus habilidades, y estudiantes de carreras técnicas o universitarias relacionadas con la construcción civil.',
      modulos: [
        'Fundamentos de la construcción',
        'Interpretación de planos arquitectónicos',
        'Interpretación de planos estructurales',
        'Materiales de construcción y técnicas de construcción',
        'Supervisión y control de calidad en obras civiles',
        'Gestión de proyectos en construcción',
        'Normativas y regulaciones en la industria de la construcción',
        'Seguridad laboral en el sector de la construcción',
        'Manejo de herramientas y equipos de construcción',
        'Tecnologías de la información aplicadas a la construcción'
      ]
    },
    {
      titulo: 'Ingeniería Vial',
      imagen: '/image/vialdiplo.jpg',
      fechaInicio: '15/06/2024',
      modalidad: 'Presencial',
      duracion: '6 semanas',
      horas: '30 horas',
      descripcion: 'El diplomado en ingeniería vial está dirigido principalmente a ingenieros civiles, profesionales del sector vial, estudiantes de ingeniería civil o vial, gestores de proyectos de infraestructura vial y profesionales de campo relacionados con la vialidad. ',
      modulos: [
        'Introducción al diseño estructural',
        'Cargas y combinaciones de carga',
        'Diseño de elementos estructurales',
        'Diseño de sistemas estructurales',
        'Diseño sísmico',
        'Diseño de cimentaciones',
        'Análisis y diseño de estructuras de acero',
        'Análisis y diseño de estructuras de concreto',
        'Software de diseño estructural'
      ]
    }
    // Puedes agregar más cursos aquí si es necesario
  ];

  return (
    <div>
      {cursosData.map((curso, index) => (
        <Curso key={index} curso={curso} />
      ))}
    </div>
  );
};

export default DiploCivil;
