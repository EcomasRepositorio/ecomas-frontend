'use client';
import Curso from "./diplomadosAccordion";


const DiploAgronoma = () => {


    // Array de objetos que contienen los datos de cada curso
    const cursosData = [
        {
            area: 'INGENIERÍA AGRÓNOMA',
            titulo: 'Sistemas de Riego Tecnificado',
            imagen: '/image/diplo_tecnifi.webp',
            fechaInicio: '19/05/2024',
            modalidad: 'Virtual',
            duracion: '4 meses',
            horas: '420 horas correspondientes a 26 créditos.',
            descripcion: 'Gerentes de proyectos, residentes y supervisores de obras. Ingenieros agrícolas, agrónomos, civiles, hidráulicos y todos los profesionales que manejen proyectos y ejecución de obras con riego tecnificado. Bachilleres y estudiantes universitarios de los últimos ciclos de ingeniería agrícola, agronomía, civil, hidráulica, forestal.',
            modulos: [
                'Oferta y demanda hídrica en cultivos.',
                'Sistemas de riego tecnificado por aspersión.',
                'Sistemas de riego tecnificado por goteo.',
                'Fertiirrigación.',
                'Análisis de suelo, agua y foliar.',
                'Importancia del suelo en la agricultura.',
                'Hidráulica de tuberías.',
                'Descarga de data y parámetros geomorfológicos de la cuenca.',
                'Calidad del agua para riego.',
            ]
        },

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

export default DiploAgronoma;

