export default {
  global: {
    componenteFormativo:
      'Mejoramiento continuo de las estrategias de ciberseguridad',
    descripcionCurso:
      'Mediante el estudio del presente componente, el aprendiz podrá identificar, explicar y aplicar aspectos fundamentales de la operación del ciclo de mejoramiento continuo de las estrategias de ciberseguridad en una organización, proceso fundamental para garantizar la actualización adecuada a las necesidades, a lo largo del tiempo.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
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
        titulo: 'Análisis e interpretación de resultados',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Actividades objeto de análisis',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Informe de auditoría',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad corporativa de seguridad de la información',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Buenas prácticas en ciberseguridad',
        desarrolloContenidos: true,
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
        download: 'downloads/228124_CF11_DU.zip',
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
      tema: '4. Buenas prácticas en ciberseguridad',
      referencia:
        'South Security Cyber Community. (2021).<em> CIS Mapeo de Controles</em>.',
      tipo: 'Norma técnica',
      link:
        'https://www.southsecurity.org/resources/SouthSecurity-CIS_Mapeo_de_Controles.pdf',
    },
    {
      tema: '4. Buenas prácticas en ciberseguridad',
      referencia:
        'Center for Internet Security. (2021).<em> CIS Benchmarks</em>. CISECURITY.',
      tipo: 'Norma técnica',
      link: 'https://www.cisecurity.org/cis-benchmarks/',
    },
  ],
  glosario: [
    {
      termino: 'Ciberseguridad',
      significado:
        'conjunto de elementos articulados para la protección de la información alojados en dispositivos en el ciberespacio.',
    },
    {
      termino: 'Estándar',
      significado:
        'documento técnico que puede ser tomado como referencia para un caso específico.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'es un marco de trabajo específico, con instrucciones y estructuras, para la implementación de alguna acción.',
    },
    {
      termino: 'Incidente',
      significado: 'suceso repentino no deseado.',
    },
    {
      termino: 'Norma',
      significado:
        'reglas organizadas y establecidas para la regulación de un comportamiento.',
    },
    {
      termino: 'Servicio',
      significado:
        'conjunto de herramientas y actividades que sirven para responder a una necesidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Center for Internet Security (2021). <em>CIS Benchmarks</em>. CISECURITY.',
      link: 'https://www.cisecurity.org/cis-benchmarks/',
    },
    {
      referencia:
        'ISO 27001. (s.f.). <em>Evaluación del Desempeño en ISO 27001- Requisitos en detalle</em>.',
      link: 'https://normaiso27001.es/evaluacion-del-desempeno-en-iso-27001/',
    },
    {
      referencia:
        'ISO 27001. (s.f.). <em>ISO 27001 Paso a Paso - 8 Auditoría Interna - ¿Cómo afrontarla?</em>',
      link:
        'https://normaiso27001.es/fase-8-auditoria-interna-segun-iso-27001/',
    },
    {
      referencia:
        'ISO. (2020). ISO/IEC 27001:2013. <em>Information technology — Security techniques — Information security management systems — Requirements</em>.',
      link: 'https://www.iso.org/standard/54534.html',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones [MinTic]. (2016). <em>Guía de auditoría. Seguridad y privacidad de la información.</em>',
      link:
        'https://www.mintic.gov.co/gestionti/615/articles-5482_G15_Auditoria.pdf',
    },
    {
      referencia:
        'South Security Cyber Community. (2021). <em>CIS Mapeo de Controles</em>.',
      link:
        'https://www.southsecurity.org/resources/SouthSecurity-CIS_Mapeo_de_Controles.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Hernando José Peña Hidalgo',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Joaquín Patiño Cerón',
          cargo: 'Experto temático',
          centro:
            'Regional Cauca - Centro de Teleinformática y Producción Industrial',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseño instruccional',
          centro: 'Regional Tolima - Centro agropecuario La Granja',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Rocio Figueroa Pacheco',
          cargo: 'Diseño web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
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
