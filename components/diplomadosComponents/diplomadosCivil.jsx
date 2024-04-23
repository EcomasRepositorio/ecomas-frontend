'use client';
import Curso from "./diplomadosAccordion";

const DiploCivil = () => {

  // Array de objetos que contienen los datos de cada curso
  const cursosData = [
    {
      area: 'INGENIERÍA CIVIL',
      titulo: 'Modelamiento BIM',
      imagen: '/image/bim_model.webp',
      fechaInicio: '04/05/2024',
      modalidad: 'Virtual',
      duracion: '4 meses',
      horas: '420 horas academicas (26 creditos)',
      descripcion: 'Este diplomado está dirigido a Ingenieros y arquitectos que se encuentran trabajando en diseño y construcción de estructuras de edificaciones, gerentes de proyectos, ingenieros revisores de proyectos estructurales y profesores de universidades que deseen desarrollar o renovar las técnicas y herramientas involucradas en el diseño estructural.',
      modulos: [
        'Tópicos Gestión con Metodología BIM',
        'Modelado de estructuras BIM',
        'Modelamiento de estructuras metálicas BIM',
        'Modelado de arquitectura',
        'Modelamiento de instalaciones sanitarias',
        'Modelamiento de instalaciones eléctricas',
        'Creación de planos y documentación BIM',
        'Lean construcción y BIM',
      ]
    },
    {
      area: 'INGENIERÍA CIVIL',
      titulo: 'Asistente Técnico en Obras',
      imagen: '/image/tecobras.webp',
      fechaInicio: '11/05/2024',
      modalidad: 'Virtual',
      duracion: '4 meses',
      horas: '420 horas correspondientes a 26 créditos.',
      descripcion: 'Bachilleres, titulados y profesionales de las carreras de ingeniería civil, industriales, sanitarios, arquitectos y ramas afines.',
      modulos: [
        'Expediente técnico en obras',
        'Régimen laboral en construcción civil',
        'Planificación y programación de obras',
        'Control de obras',
        'Metrados en edificaciones',
        'Cuaderno de obra físico y digital',
        'Costos y Presupuestos con S10',
        'Valorización de obras',
        'Liquidación de obras',
        'Formulación y planificación de proyectos con MS Project'
      ]
    },

    {
      area: 'INGENIERÍA CIVIL',
      titulo: 'Ingeniería Vial',
      imagen: '/image/vialdiplo.webp',
      fechaInicio: '18/05/2024',
      modalidad: 'Virtual',
      duracion: '4 meses',
      horas: '420 horas academicas (26 creditos)',
      descripcion: 'Bachilleres, Gerentes y administradores de proyectos de la construcción y jefes de área. Ingenieros civiles, topógrafos, arquitectos residentes y supervisores de obras. Profesionales del sector público y privado relacionados con proyectos viales. ',
      modulos: [
        'Tráfico y carga.',
        'Topografía, diseño geométrico, señalización y seguridad vial.',
        'Geología – Geotecnia.',
        'Mecánica de suelos en carreteras.',
        'Suelos y pavimentos.',
        'Hidrología e hidráulica.',
        'Estructuras en carreteras - puentes.',
        'Metrados, costos y presupuestos – cronograma.',
        'Arqueología en ingeniería vial. ',
        'Estudio medio ambiental – derecho de vía – interferencias Túneles.',
        'Diseño, construcción y mantenimiento de túneles.',
        'Integración de proyectos de infraestructura vial.',

      ]
    },


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
