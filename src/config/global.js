export default {
  global: {
    componenteFormativo:
      'Procedimientos del primer responsable en accidentes de tránsito',
    descripcionCurso:
      'El procedimiento a realizar en el lugar de los hechos de un accidente de tránsito indica que las funciones principales del primer responsable son evaluar la escena y los lesionados, activar el servicio médico, reportar el suceso a las autoridades competentes, la preservación y entrega de la información y del material probatorio recaudado que será sometido a cadena de custodia (EMP y EF) a la Policía Judicial. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Tratamiento en el lugar de los hechos en los accidentes de tránsito',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Generalidades para el tratamiento de los accidentes de tránsito',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo:
              'Técnicas de fijación topográfica en accidentes de tránsito',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fijación fotográfica en los accidentes de tránsito',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Atención a las víctimas',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Técnicas de inspección al cadáver ASD',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Recolección de la información',
            hash: 't_1_6',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Actuaciones del primer responsable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Protección del lugar de los hechos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Actividades de aseguramiento del lugar de los hechos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Procedimiento de la cadena de custodia',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Elementos materiales de prueba y evidencia física',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Requisitos de la cadena de custodia',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Formato de primer responsable',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Formato de registro de la cadena de custodia',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Equipos y plataformas tecnológicas para el tránsito y el transporte',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Técnicas de uso en equipos para pruebas de alcohol',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Técnicas de uso en equipos para pruebas de drogas',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Características y tipos de radares de velocidad',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/638100_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Tratamiento en el lugar de los hechos en los accidentes de tránsito',
      referencia:
        'Ley 906 de 2004. [Congreso de la República].  Por la cual se expide el Código de Procedimiento Penal. Septiembre 1° de 2004. DO. No. 45.658. ',
      tipo: 'Web',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0906_2004.html',
    },
    {
      tema:
        'Tratamiento en el lugar de los hechos en los accidentes de tránsito',
      referencia:
        'Resolución 0011268 de 2012. [Ministerio de Transporte]. Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su manual de diligenciamiento y se dictan otras disposiciones. Diciembre 6 de 2012. ',
      tipo: 'PDF',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=92644',
    },
    {
      tema: 'Procedimiento de la cadena de custodia',
      referencia:
        'Fiscalía General de la Nación. 2018. <em>Manual del sistema de cadena de custodia</em>. Fiscalía General de la Nación. ',
      tipo: 'PDF',
      link:
        'https://www.fiscalia.gov.co/colombia/wp-content/uploads/MANUAL-DEL-SISTEMA-DE-CADENA-DE-CUSTODIA.pdf',
    },
    {
      tema: 'Tratamiento en el lugar de los hechos en accidentes de tránsito',
      referencia:
        'Ramos, H. y Quiroga, L. (2017). <em>Investigación de accidentes de tránsito en Colombia</em>. Policía Nacional. ',
      tipo: 'PDF',
      link: 'https://www.policia.gov.co/file/187193/download?token=JuaAf5sw',
    },
  ],
  glosario: [
    {
      termino: 'Acordonamiento',
      significado:
        'Acción de aislar el lugar de los hechos considerando sus características mediante la utilización de cintas, barricadas, personas, vehículos, entre otros (Fiscalía General de la Nación, 2018).',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas encaminadas a minimizar y controlar los factores de riesgo biológico, físico o químico en las personas expuestas a los mismos (Fiscalía General de la Nación, 2018).',
    },
    {
      termino: 'Custodio',
      significado:
        'Persona que vigila y guarda con cuidado y responsabilidad un EMP y EF o un lugar de los hechos (Fiscalía General de la Nación, 2018).',
    },
    {
      termino: 'Embalar',
      significado:
        'Es el procedimiento técnico utilizado para empacar, preservar y proteger los EMP y EF en el contenedor adecuado, con el fin de ser enviados para el análisis o el almacenamiento (Fiscalía General de la Nación, 2018).',
    },
    {
      termino: 'Epicrisis',
      significado:
        'Resumen de la atención médica desde el ingreso hasta el egreso en la institución de salud (Fiscalía General de la Nación, 2018).',
    },
    {
      termino: 'Evidencia traza',
      significado:
        'Es toda aquella evidencia que no es perceptible por los órganos de los sentidos (Fiscalía General de la Nación, 2018).',
    },
    {
      termino: 'Macroelemento',
      significado:
        'Son objetos de gran tamaño, como naves, aeronaves, vehículos automotores, máquinas, grúas y otros similares, después de ser examinados por peritos para recoger elementos materiales probatorios y evidencia física que se hallen en estos.',
    },
    {
      termino: 'Muestra',
      significado:
        'Es definida como la fracción de un material sobre la que se estudian ciertas características, que  posteriormente se generalizan a todo el conjunto (Fiscalía General de la Nación, 2018).',
    },
  ],
  referencias: [
    {
      referencia:
        'Álzate, C. y Buitrago, J. (2001). <em>Manual de medicina legal tanatológica</em>. Universidad de Manizales.',
      link:
        'https://ridum.umanizales.edu.co/xmlui/bitstream/handle/20.500.12746/387/Microsoft%20Word%20-%2140_Alzate_Ramirez_Clemencia_2001.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Corte Constitucional. (1991). <em>Constitución Política de Colombia</em>. Corte Constitucional. ',
      link:
        'https://www.corteconstitucional.gov.co/inicio/Constitucion%20politica%20de%20Colombia%20-%202015.pdf',
    },
    {
      referencia:
        'Fiscalía General de la Nación. 2018. <em>Manual del sistema de cadena de custodia</em>. Fiscalía General de la Nación. ',
      link:
        'https://www.fiscalia.gov.co/colombia/wp-content/uploads/MANUAL-DEL-SISTEMA-DE-CADENA-DE-CUSTODIA.pdf',
    },
    {
      referencia:
        'Ley 906 de 2004. [Congreso de la República].  Por la cual se expide el Código de Procedimiento Penal. Septiembre 1° de 2004. DO. No. 45.658. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0906_2004.html',
    },
    {
      referencia:
        'Ley 769 de 2002. [Congreso de la República]. Por la cual se expide el Código Nacional de Tránsito Terrestre y se dictan otras disposiciones. Septiembre 13 de 2002. DO. No. 44.932. ',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0769_2002.html',
    },
    {
      referencia:
        'Ramos, H. y Quiroga, L. (2017). <em>Investigación de accidentes de tránsito en Colombia</em>. Policía Nacional. ',
      link:
        'https://www.policia.gov.co/sites/default/files/publicaciones-institucionales/libro-investigacion-accidentes-de-transito-en-colombia.pdf',
    },
    {
      referencia:
        'Resolución 0011268 de 2012. [Ministerio de Transporte]. Por la cual se adopta el nuevo informe policial de accidentes de tránsito (IPAT), su manual de diligenciamiento y se dictan otras disposiciones. Diciembre 6 de 2012. ',
      link: 'https://web.mintransporte.gov.co/jspui/handle/001/5348',
    },
    {
      referencia:
        'Rodríguez, F. (2013). <em>Topografía aplicada a la investigación de accidentes de tránsito</em>. Universidad Francisco José de Caldas. ',
      link:
        'https://revistas.udistrital.edu.co/index.php/bsa/article/view/12855',
    },
    {
      referencia:
        'Sierra, L. (2008). <em>La prueba en el proceso penal colombiano</em>. Fiscalía General de la Nación.',
      link:
        'https://www.fiscalia.gov.co/colombia/wp-content/uploads/2012/01/LaPruebaenelProcesoPenalColombiano.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Hoover Fabián Ramos Enríquez',
          cargo: 'Experto temático',
          centro:
            'Centro de la Industria, la Empresa y los servicios - CIESSAN - Regional Huila',
        },
        {
          nombre: 'Diego Acevedo Guevara',
          cargo: 'Diseñador instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora metodológica',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Yerson Fabián Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Full-stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para Contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Zuleidy María Ruíz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Álvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
