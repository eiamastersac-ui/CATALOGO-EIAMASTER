// Datos demo de tienda-futbol (escuela de formación de entrenadores de fútbol,
// estructura inspirada en eseful.com.pe). Marca propia tienda.com Fútbol.

export const marca = {
  nombre: 'tienda.com',
  sub: 'Fútbol',
  fundada: 1991,
  direccion: 'Jr. Principal 976 - Breña, Lima',
  informes: '987 654 321 / 912 345 678',
  tesoreria: '976 000 656',
  correoTesoreria: 'tesoreria@tienda.com',
  correoReclamos: 'reclamos@tienda.com',
  whatsapp: 'https://wa.me/51987654321?text=Hola%20tienda.com%20F%C3%BAtbol%2C%20necesito%20m%C3%A1s%20informaci%C3%B3n',
};

// Imagenes de Unsplash verificadas (200 + contact sheet): fútbol, entrenadores,
// arqueros, conos de entrenamiento y estadio de noche.
export const IMG = {
  heroEntrenador: '1528036788076-c031f7707270', // cuerpo técnico conversando en el campo
  heroFisico: '1560272564-c83b66b1ad12', // jugador pateando en entrenamiento
  heroArqueros: '1518905332052-b6cfda20ee45', // arquero volando al balón
  menores: '1526494661200-9d7cfd4b2404', // entrenador atando el chimpunes de un niño
  juvenil: '1585757318177-0570a997dc3a', // entrenador con carpeta táctica
  arqueros: '1597630907602-356d09900200', // guantes de arquero con balón
  fisico: '1650897877790-0e171d2207dc', // conos de entrenamiento en el césped
  plantel: '1652318696037-8d34c4d2f378', // plantel infantil con su entrenador (se muestra en B/N)
  estadio: '1431324155629-1a6deb1dec8d', // campo iluminado de noche con reflector
};

export const u = (id, w = 1200, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

export const navPrincipal = [
  { txt: 'Inicio', href: '#inicio', activo: true },
  { txt: 'Nosotros', href: '#nosotros' },
  {
    txt: 'Cursos',
    href: '#cursos',
    sub: [
      { txt: 'Entrenador de Fútbol', href: '#curso-menores' },
      { txt: 'Preparador de Arqueros de Fútbol', href: '#curso-arqueros' },
      { txt: 'Preparador Físico de Fútbol', href: '#curso-fisico' },
      { txt: 'Otros Cursos', href: '#cursos' },
    ],
  },
  { txt: 'Contáctanos', href: '#contacto' },
  { txt: 'Preguntas Frecuentes', href: '#preguntas' },
  { txt: 'Eventos', href: '#eventos' },
];

export const heroSlides = [
  {
    kicker: 'CURSO',
    lineas: ['Entrenador', 'de Fútbol'],
    estado: 'Inscripciones Abiertas',
    img: IMG.heroEntrenador,
    href: '#curso-menores',
  },
  {
    kicker: 'CURSO',
    lineas: ['Preparador', 'Físico de Fútbol'],
    estado: 'Inscripciones Abiertas',
    img: IMG.heroFisico,
    href: '#curso-fisico',
  },
  {
    kicker: 'CURSO',
    lineas: ['Entrenador de', 'Arqueros de Fútbol'],
    estado: 'Inscripciones Abiertas',
    img: IMG.heroArqueros,
    href: '#curso-arqueros',
  },
];

export const nosotros = {
  titulo: '¿QUIÉNES SOMOS?',
  texto:
    'tienda.com Fútbol fue fundada en 1991 para suplir la falta de centros de capacitación en fútbol en el Perú. Inspirada en modelos de escuelas europeas y sudamericanas, capacitó inicialmente a su propio personal docente mediante un curso de dos años y estudios de posgrado en diversos países, constituyéndose así en la primera institución dedicada exclusivamente a la capacitación en fútbol en el país.',
  boton: 'CONÓCENOS',
};

export const cursos = [
  {
    id: 'curso-menores',
    titulo: 'Entrenador de Fútbol de Menores',
    texto: 'Curso diseñado para formar entrenadores capacitados en el desarrollo integral del futbolista infantil.',
    img: IMG.menores,
  },
  {
    id: 'curso-juvenil',
    titulo: 'Entrenador de Fútbol Juvenil',
    texto: 'Curso orientado a capacitar entrenadores en el desarrollo de adolescentes y jóvenes en etapa de especialización.',
    img: IMG.juvenil,
  },
  {
    id: 'curso-arqueros',
    titulo: 'Preparador de Arqueros de Fútbol',
    texto: 'Curso de extensión para todos aquellos que se dedican a la preparación de arqueros de fútbol.',
    img: IMG.arqueros,
  },
  {
    id: 'curso-fisico',
    titulo: 'Preparador Físico de Fútbol',
    texto: 'Curso diseñado para formar profesionales para intervenir en el entrenamiento físico de futbolistas.',
    img: IMG.fisico,
  },
];

export const evento = {
  titulo: 'I Congreso Internacional de Fútbol 2026',
  dirigido: [
    'Profesores de Educación Física, técnicos deportivos y entrenadores de academias.',
    'Exfutbolistas y futbolistas activos interesados en formar categorías menores.',
    'Padres, educadores y agentes sociales vinculados a proyectos deportivos.',
  ],
  img: IMG.estadio,
};

export const faqs = [
  {
    p: '¿Cuáles son los pasos de inscripción al curso?',
    pasos: [
      'Contactarse con un asesor comercial.',
      'Realizar el pago de la matrícula y pensión adelantada.',
      'Envío del comprobante de pago y datos requeridos.',
      'Recepción de correo de bienvenida con los datos de acceso del alumno.',
    ],
  },
  {
    p: '¿Si está en trámite algún requisito en otra institución, qué debo realizar?',
    pasos: [
      'Contactarse con Secretaría Académica.',
      'Completar la solicitud de exoneración (te brindamos un modelo de documento).',
    ],
  },
  {
    p: '¿Cómo obtengo el acceso a mi aula virtual?',
    pasos: [
      'En caso no recibas tus datos de acceso por correo, contacta con tu asesor o escribe a informatica@tienda.com.',
    ],
  },
];

export const redes = [
  { nombre: 'facebook', href: '#', label: 'Facebook' },
  { nombre: 'instagram', href: '#', label: 'Instagram' },
  { nombre: 'tiktok', href: '#', label: 'TikTok' },
];

export const footerLinks = {
  marca: [
    { txt: 'Inicio', href: '#inicio' },
    { txt: 'Nosotros', href: '#nosotros' },
    { txt: 'Preguntas Frecuentes', href: '#preguntas' },
    { txt: 'Contáctanos', href: '#contacto' },
  ],
  cursos: [
    { txt: 'Entrenador de Fútbol de Menores', href: '#curso-menores' },
    { txt: 'Preparador de Arqueros de Fútbol', href: '#curso-arqueros' },
    { txt: 'Preparador Físico de Fútbol', href: '#curso-fisico' },
  ],
};
