const u = (id, w = 1200, h = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  collage1: '1659356576109-194b3398f080',
  collage2: '1615375775649-895834ba727e',
  collage3: '1653744018876-93ead293f0fb',
  collage4: '1627199219038-e8263f729e3d',
  collage5: '1629539056661-45c917cdff75',
  diagnostico: '1662997777051-f50b550bff53',
  equipo1: '1622253692010-333f2da6031d',
  equipo2: '1594824476967-48c8b964273f',
  equipo3: '1729162128021-f37dca3ff30d',
  ctaFinal: '1730597842283-943c7986ee2c',
  blog1: '1606811841689-23dfddce3e95',
  blog2: '1609840114035-3c981b782dfe',
  blog3: '1611695434369-a8f5d76ceb7b',
};

export const base = '/plantillas/clinica-dental-red';

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Red Dental',
  anios: '15 años',
  tel: '01 700 1234',
  whatsapp: '51987654321',
  correo: 'hola@tutienda.com',
  whatsappHref: 'https://wa.me/51987654321',
};

export const anuncio = '¡Descubre nuestros alineadores!';

export const tratamientosMenu = {
  clinicos: ['Diagnóstico 360°', 'Implantes', 'Limpieza dental', 'Coronas dentales', 'Resinas dentales', 'Cirugía Maxilofacial', 'Endodoncia', 'Periodoncia', 'Puentes dentales'],
  esteticos: ['Alineadores', 'Invisalign', 'Brackets', 'Blanqueamiento', 'Carillas'],
  infantiles: ['Limpieza dental para niños', 'Selladores', 'Ortopedia', 'Extractores'],
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Tratamientos', href: '#tratamientos', mega: 'tratamientos' },
  { t: 'Clínicas', href: '#clinicas', mega: 'clinicas' },
  { t: 'Nosotros', href: '#equipo' },
  { t: 'Recursos', href: '#blog' },
];

export const hero = {
  titulo: 'siempre cerca de ti',
  sub: 'Tratamientos dentales para cuidar la sonrisa de toda tu familia en un mismo lugar, en cualquier distrito de Lima.',
  cta1: 'Agenda gratis',
  cta2: 'Promociones',
  collage: [
    { img: u(IMG.collage1, 700, 700), bg: '#FFC93C' },
    { img: u(IMG.collage2, 700, 900), bg: '#BFE3F0' },
    { img: u(IMG.collage3, 700, 700), bg: '#F3C9A5' },
    { img: u(IMG.collage4, 700, 900), bg: '#CFE8B0' },
    { img: u(IMG.collage5, 700, 700), bg: '#FBF3DE' },
  ],
};

export const porQueElegirnos = [
  { t: 'Clínicas cercanas', d: 'Más de 12 ubicaciones en Lima', icono: 'pin' },
  { t: 'Facilidades de pago', d: 'Múltiples opciones de pago flexibles', icono: 'tarjeta' },
  { t: 'Tecnología avanzada', d: 'Innovación, IA y los mejores equipos', icono: 'escaner' },
  { t: 'Odontólogos certificados', d: 'Cuidado especializado y humano', icono: 'doctor' },
];

// Sedes reales de la red en Lima (coordenadas aproximadas por distrito).
// El mapa elige una al azar en cada carga para centrar la vista inicial.
export const clinicas = [
  { t: 'Miraflores', dir: 'Av. José Larco 345, Miraflores', lat: -12.1211, lng: -77.0269 },
  { t: 'San Isidro', dir: 'Av. Javier Prado Este 1120, San Isidro', lat: -12.0931, lng: -77.0465 },
  { t: 'Surco', dir: 'Av. Caminos del Inca 1234, Santiago de Surco', lat: -12.1401, lng: -76.9891 },
  { t: 'San Borja', dir: 'Av. Aviación 2560, San Borja', lat: -12.1019, lng: -76.9975 },
  { t: 'La Molina', dir: 'Av. La Molina 1780, La Molina', lat: -12.085, lng: -76.942 },
  { t: 'Barranco', dir: 'Av. Grau 810, Barranco', lat: -12.1494, lng: -77.0201 },
];

export const tratamientos = [
  { t: 'Alineadores', icono: 'alineador' },
  { t: 'Brackets', icono: 'brackets' },
  { t: 'Tratamientos Infantiles', icono: 'infantil' },
  { t: 'Blanqueamiento', icono: 'brillo' },
  { t: 'Implantes', icono: 'implante' },
  { t: 'Carillas', icono: 'carilla' },
  { t: 'Endodoncia', icono: 'raiz' },
];

export const diagnostico = {
  kicker: '¿Cómo comenzar?',
  titulo: 'Agenda tu Diagnóstico 360° sin costo',
  d: 'Ahorra hasta S/ 150 en tu primera visita con una evaluación profesional completa respaldada por inteligencia artificial.',
  cta: 'Agenda gratis',
  img: u(IMG.diagnostico, 1000, 800),
};

export const resenas = {
  calificacion: 4.6,
  total: 850,
  lista: [
    { autor: 'Richard R.', clinica: 'Red Dental Miraflores', texto: 'Me gustó el servicio, tuve que ir por una emergencia, no tenían citas en el momento pero consiguieron hacerme un hueco. El costo es adecuado conforme a lo que ofrecen, un poco elevado pero vale la pena.' },
    { autor: 'Diego M.', clinica: 'Red Dental San Borja', texto: 'Estuve ahí para mi limpieza dental y el trato fue muy profesional, las instalaciones se encuentran impecablemente limpias, sin duda vuelvo a regresar.' },
    { autor: 'Karla T.', clinica: 'Red Dental Surco', texto: 'Felices sobre todo con el trato a mi pequeño de 8 años, para él es súper normal ir al dentista, gracias a la atención de la odontopediatra y el trato en general.' },
    { autor: 'Vanessa M.', clinica: 'Red Dental La Molina', texto: 'Muy buena atención, te explican todo a detalle. Fui a que me extrajeran las muelas del juicio y ni siquiera tuve molestias posteriores a la cirugía.' },
    { autor: 'Ernesto V.', clinica: 'Red Dental Barranco', texto: 'Quiero felicitar a la odontóloga que me atendió para una limpieza dental. En mi vida había tenido una visita tan fácil y sin dolor en una clínica dental.' },
  ],
};

export const equipo = [
  { nombre: 'Dr. Renzo Palacios', cargo: 'Ortodoncista', img: u(IMG.equipo1, 600, 700) },
  { nombre: 'Dra. Fátima Salcedo', cargo: 'Rehabilitadora Oral', img: u(IMG.equipo2, 600, 700) },
  { nombre: 'Dr. Alonso Vidal', cargo: 'Director Médico', img: u(IMG.equipo3, 600, 700) },
];

export const ctaFinal = {
  titulo: 'Cuidamos tu sonrisa, cuidamos de ti',
  sub: 'Agenda tu cita hoy mismo y transforma tu experiencia dental',
  checks: ['+12 clínicas en Lima', 'Diagnóstico gratuito', 'Aceptamos seguros dentales'],
  cta1: 'Agenda gratis',
  cta2: 'Contáctanos',
  img: u(IMG.ctaFinal, 900, 1100),
};

export const blogCategorias = ['Todos', 'Ortodoncia', 'Blanqueamiento', 'Encías', 'Niños'];

export const blog = [
  { t: '¿Cuánto cuesta ponerse brackets en Perú?', d: 'Precios referenciales y qué factores los afectan.', cat: 'Ortodoncia', img: u(IMG.blog1, 700, 500) },
  { t: '¿Primero la ortodoncia o el blanqueamiento?', d: 'El orden correcto para un resultado parejo.', cat: 'Blanqueamiento', img: u(IMG.blog2, 700, 500) },
  { t: 'Encías inflamadas: 7 consejos para prevenirlas', d: 'La primera señal de alerta de una enfermedad periodontal.', cat: 'Encías', img: u(IMG.blog3, 700, 500) },
];

export const faq = [
  { p: '¿Qué opciones de financiamiento o planes de pago tienen?', r: 'Contamos con cuotas flexibles sin intereses y aceptamos las principales tarjetas. Consulta el plan que mejor se adapte a tu tratamiento en tu primera cita.' },
  { p: '¿Cuáles son los seguros dentales que aceptan?', r: 'Trabajamos con las principales aseguradoras del país. Escríbenos con el nombre de tu póliza y validamos tu cobertura antes de agendar.' },
  { p: '¿Qué tecnologías o equipos dentales utilizan?', r: 'Escáner intraoral, radiografía digital de baja radiación y diagnóstico asistido por inteligencia artificial en todas nuestras sedes.' },
  { p: '¿Cuál es el proceso para agendar una cita?', r: 'Puedes agendar en línea, por WhatsApp o llamando a la clínica más cercana. El diagnóstico inicial siempre es sin costo.' },
  { p: '¿Cuál es la política de cancelación y reprogramación?', r: 'Puedes reprogramar tu cita sin costo hasta 24 horas antes. Te lo recordamos por WhatsApp el día anterior.' },
];

export const footerNav = {
  visita: ['Agenda una cita', 'Ubica tu clínica más cercana', 'Descubre nuestras promociones', 'Genera tu factura'],
  tratamientos: ['Alineadores', 'Invisalign', 'Brackets', 'Dentistas para niños', 'Otros tratamientos'],
  nosotros: ['Quiénes somos', 'Recursos', 'Bolsa de trabajo', 'Opiniones', 'Preguntas frecuentes'],
};
