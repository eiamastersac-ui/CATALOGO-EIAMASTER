// Datos demo de la plantilla "barberia-caballeros".
// Inspirada en montalvoformen.com.pe (cadena de barberias masculinas en Peru):
// cabecera oscura translucida, hero de foto a pantalla completa con 3 slides,
// "quienes somos" con dos fotos verticales, 4 valores con icono de linea,
// "por que elegirnos" con foto a media pantalla, grilla de 8 servicios a todo
// el ancho, testimonios en slider, banda "Visitanos" y footer negro.
// Marca propia "tienda.com Barberia" — nunca el nombre real. Sin login.

const u = (id, w = 1200, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

// Todas verificadas con curl (200) + contact sheet visual (scratchpad).
const IMG = {
  perfilOscuro: '1582826187809-3c1a694a7643', // perfil de hombre con barba, B/N, fondo negro
  barbudoRojo: '1559654189-342d45b54b1e', // hombre con barba en estudio oscuro
  barbaTijera: '1517832606299-7ae9b720a186', // arreglo de barba con tijera, B/N
  navajaTatuado: '1599351431202-1e0f0137899a', // barbero tatuado perfilando con navaja
  fade: '1593702275687-f8b402bf1fb5', // corte degradado con maquina
  barberoSombrero: '1635273051937-a0ddef9573b6', // barbero con sombrero cortando
  toalla: '1653875700329-a7c8aca94c95', // toalla caliente, afeitado clasico
  tecnica: '1647140655214-e4a2d914971f', // barbero con peine y tijera
  diseno: '1568339434343-2a640a1a9946', // diseno con lineas en el cabello
  maquina: '1635273051427-7c2a35ce50ce', // maquina de corte en mano
  espuma: '1532710093739-9470acff878f', // brocha y espuma para afeitado royal
  spray: '1598524374912-6b0b0bab43dd', // peinado moderno con spray
  degradado: '1648221122323-572c13a31663', // degradado con maquina
  temporada: '1582771498000-8ad44e6c84db', // peinado pompadour en barberia
  clienteA: '1632850384791-99fda88d324b', // retrato cliente 1
  clienteB: '1609101941791-1d9a8bbbc7d6', // retrato cliente 2
  clienteC: '1562004760-aceed7bb0fe3', // retrato cliente 3
  visitanos: '1629189784191-9afdcbcb0398', // perfil con barba y pompadour
  panel: '1585747860715-2ba37e788b70', // interior de barberia (panel lateral)
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Barbería',
  correo: 'citas@tienda.com',
  tel: '+51 900 000 000',
  telCrudo: '+51900000000',
  lema: 'Amenas charlas. Buenos servicios. Excelentes cortes.',
  anio: 2026,
};

export const nav = [
  { t: 'Nosotros', href: '#nosotros' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Barberías', href: '#visitanos' },
  { t: 'Blog', href: '#opiniones' },
  { t: 'Contacto', href: '#contacto' },
  { t: 'Tienda', href: '#servicios' },
];

export const heroSlides = [
  { img: u(IMG.perfilOscuro, 2000), pos: '70% 40%' },
  { img: u(IMG.barbudoRojo, 2000), pos: '60% 35%' },
  { img: u(IMG.barbaTijera, 2000), pos: '65% 45%' },
];

export const hero = {
  kicker: 'Nuevo concepto en barberías',
  titulo: ['Tu estilo', 'comienza aquí'],
  texto: 'Visítanos en cualquiera de nuestras 45 sedes a nivel nacional',
  cta: 'Reserva aquí',
};

export const nosotros = {
  kicker: 'Quiénes somos',
  titulo: ['La cadena de', 'barberías N°1', 'en el Perú'],
  texto:
    'Iniciamos operaciones en el 2014 con el firme propósito de cubrir todas las exigencias del público masculino. Nos enfocamos en brindar una extensa gama de servicios que garantizan el cuidado integral de nuestros clientes, además de brindarles una experiencia única a través de una infraestructura moderna y un staff altamente calificado.',
  fotos: [
    { src: u(IMG.navajaTatuado, 700, 1000), alt: 'Barbero perfilando la barba con navaja' },
    { src: u(IMG.fade, 700, 1000), alt: 'Corte degradado con máquina' },
  ],
  valores: [
    {
      icono: 'navaja',
      t: 'Humanidad',
      d: 'Incentivamos a nuestro equipo a generar un vínculo con nuestro cliente. Para nosotros es importante que te sientas como en casa.',
    },
    {
      icono: 'tijera',
      t: 'Diferenciación',
      d: 'Contamos con un equipo capacitado que constantemente se encuentra innovando y alimentándose de las nuevas tendencias del mercado.',
    },
    {
      icono: 'cuchilla',
      t: 'Transparencia',
      d: 'Ofrecemos autenticidad y respeto hacia nuestros clientes, siendo lo más objetivos en el servicio que brindamos. Te mereces lo mejor.',
    },
    {
      icono: 'bigote',
      t: 'Empatía',
      d: 'Nos preocupamos por desarrollar las habilidades blandas de nuestro equipo para comprender y adaptarnos a cada tipo de cliente.',
    },
  ],
};

export const beneficios = {
  kicker: 'Nuestros beneficios',
  titulo: ['Por qué', 'elegirnos'],
  img: u(IMG.barberoSombrero, 1400, 1000),
  items: [
    'Ofrecemos un servicio personalizado adaptado a las tendencias y a las necesidades de cada cliente.',
    'Contamos con un staff de barberos altamente calificados.',
    'Trabajamos con las mejores marcas, garantizando resultados duraderos y satisfactorios.',
    'Infraestructura a la vanguardia acondicionada a las exigencias de nuestro público masculino.',
  ],
};

export const servicios = {
  kicker: 'Explora nuestros servicios',
  titulo: ['Manos expertas', 'de todo un equipo', 'de barberos'],
  items: [
    { t: 'Afeitado con navaja', img: u(IMG.toalla, 800, 800) },
    { t: 'Técnicas de barbería', img: u(IMG.tecnica, 800, 800) },
    { t: 'Diseño en cabello', img: u(IMG.diseno, 800, 800) },
    { t: 'Barbería top', img: u(IMG.maquina, 800, 800) },
    { t: 'Afeitado Royal', img: u(IMG.espuma, 800, 800) },
    { t: 'Cortes modernos', img: u(IMG.spray, 800, 800) },
    { t: '10 cortes en degradado', img: u(IMG.degradado, 800, 800) },
    { t: 'Diseños de temporada', img: u(IMG.temporada, 800, 800) },
  ],
};

export const opiniones = [
  {
    texto:
      'El equipo es súper profesional, y no se trata solo de cortes de cabello, sino de toda una experiencia. Me ofrecieron una bebida mientras esperaba y, créanme, ¡esos detalles cuentan!',
    nombre: 'Sebastián Alvarado',
    sede: 'Cliente sede Lince',
    foto: u(IMG.clienteA, 240, 240),
  },
  {
    texto:
      'La atención al cliente es otro nivel. Desde el saludo cálido hasta el cuidado en cada paso del proceso, se nota que se esfuerzan por la excelencia.',
    nombre: 'Fernando Alfaro',
    sede: 'Cliente sede Castilla',
    foto: u(IMG.clienteB, 240, 240),
  },
  {
    texto:
      'Mi barbera entendió exactamente lo que buscaba. Su habilidad con las tijeras y la navaja es insuperable. El ambiente, la música y la atención hacen que esta sea la mejor barbería premium en la que he estado.',
    nombre: 'Edinson Corina',
    sede: 'Cliente sede Garzón',
    foto: u(IMG.clienteC, 240, 240),
  },
];

export const visitanos = {
  titulo: 'Visítanos',
  sub: ['Más que un corte', 'una experiencia'],
  fondo: ['15%', 'OFF'],
  cta: 'Reserva una cita',
  img: u(IMG.visitanos, 1000, 1300),
};

export const panelLateral = {
  img: u(IMG.panel, 900, 1400),
};

export const footer = {
  ayuda: [
    'Libro de Reclamaciones',
    'Términos y Condiciones',
    'Política de Privacidad',
    'Configuración de Cookies',
    'Preguntas Frecuentes',
    'Información de la Empresa',
  ],
  pagos: ['VISA', 'Mastercard', 'Amex', 'Diners Club', 'PagoEfectivo'],
};

export const chat = {
  saludo: [
    '👋 ¡Bienvenido a tienda.com Barbería! Gracias por escribirnos. 😊',
    '📅 ¿Quieres agendar una cita?',
    '✂️ ¿Tienes preguntas sobre nuestros servicios?',
    'Escríbenos y con gusto te atenderemos. ¡Estamos listos para que renueves tu estilo! 💈',
  ],
  respuestas: [
    '¡Genial! Cuéntanos qué sede te queda mejor y el día que prefieres. Te confirmamos la hora en minutos. ✂️',
    'Tenemos corte clásico, degradado, diseño en cabello, afeitado con navaja y afeitado Royal con toalla caliente.',
    'Atendemos de lunes a domingo de 9:00 a 21:00. ¡Te esperamos! 💈',
  ],
};
