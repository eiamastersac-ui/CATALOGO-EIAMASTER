const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  hero1: '1662837775272-545d8e143ad0',
  hero2: '1606811842243-af7e16970c1f',
  doctora: '1484863137850-59afcfe05386',
  testimonios: '1657470179447-0f5aa16daa91',
  casoAntes1: '1489278353717-f64c6ee8a4d2',
  casoDespues1: '1611695434369-a8f5d76ceb7b',
  casoAntes2: '1583264277168-58ceba4b84e7',
  casoDespues2: '1623717217554-72ca676de535',
};

export const base = '/plantillas/clinica-dental-bosque';

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Dental & Ortodoncia',
  tel: '01 700 5410',
  whatsapp: '51987001234',
  correo: 'hola@tutienda.com',
  direccion: 'Av. La Molina 1780, La Molina, Lima',
  whatsappHref: 'https://wa.me/51987001234',
  lat: -12.085,
  lng: -76.942,
};

export const anuncio = {
  texto: '¡Transforma tu sonrisa hoy! Brackets metálicos desde',
  precio: 'S/ 2,995',
  cta: 'AGENDA TU CONSULTA GRATIS',
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Sobre Nosotros', href: '#doctora' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Recursos', href: '#preguntas' },
  { t: 'Contáctanos', href: '#contacto' },
];

export const hero = {
  kicker: 'Dentista y Ortodoncista en Lima',
  titulo: 'Transforma Tu Sonrisa Hoy',
  sub: 'Cuidado dental y ortodóncico para toda la familia, en un espacio pensado para que te sientas como en casa.',
  cta1: 'Solicitar Cita',
  cta2: 'Contáctanos',
  cta3: 'Ver Galería',
  slides: [u(IMG.hero1, 1900, 1100), u(IMG.hero2, 1900, 1100)],
};

export const bienvenida = {
  kicker: 'Sonrisas brillantes empiezan aquí',
  marca1: 'tu tienda.com',
  marca2: 'Dental & Ortodoncia',
  p: 'Bienvenido a tu nuevo hogar dental, donde la comodidad se encuentra con la precisión y cada sonrisa importa. Combinamos atención moderna con un trato genuino, en un espacio donde pacientes de todas las edades se sienten en confianza. Aquí la odontología es más que un servicio: es una relación basada en confianza, cercanía y excelencia.',
  cta: 'Empieza Hoy',
};

export const doctora = {
  kicker: 'Conoce a la Dra. Valeria Rosales',
  titulo: 'Tu Nueva Ortodoncista',
  p: 'Bienvenido a tu tienda.com Dental & Ortodoncia. La Dra. Rosales se dedica a ayudar a pacientes de todas las edades a alinear su sonrisa con atención ortodóncica de calidad. Contamos con distintas opciones de tratamiento, y nuestro equipo trabaja de la mano contigo para crear un plan personalizado hacia la sonrisa que buscas.',
  cta: 'Conoce a la Doctora',
  img: u(IMG.doctora, 900, 1100),
};

export const servicios = [
  { t: 'Ortodoncia', icono: 'brackets' },
  { t: 'General', icono: 'herramientas' },
  { t: 'Estética', icono: 'sillon' },
  { t: 'Invisalign®', icono: 'alineador' },
];

export const porQueElegirnos = {
  kicker: '¿Por qué elegirnos?',
  titulo: 'Donde la habilidad clínica se encuentra con el trato humano',
  items: [
    { t: 'Tratamos personas, no solo dientes', d: 'Tu historia importa. Nos tomamos el tiempo para entender tus necesidades y preferencias, creando planes de cuidado que se ajustan a tu vida, no solo a tu ficha clínica.' },
    { t: 'Tecnología que se siente sencilla', d: 'Desde el diagnóstico digital hasta procesos de tratamiento simplificados, usamos tecnología avanzada para que tu visita sea más rápida, cómoda y sin la frialdad clínica de siempre.' },
    { t: 'Un espacio pensado para ti', d: 'Nuestros consultorios están diseñados para sentirse como un respiro, no como una sala de espera. Cada detalle busca que te sientas realmente atendido, desde la recepción hasta el tratamiento.' },
    { t: 'Un equipo que se siente como familia', d: 'Recordamos tu nombre, tu sonrisa y tu historia. Somos un equipo cercano y apasionado por las personas, y lo notarás desde tu primera visita.' },
  ],
};

export const testimonios = {
  kicker: 'Historias de sonrisas',
  img: u(IMG.testimonios, 1900, 1200),
  lista: [
    { texto: 'El equipo siempre es muy amable y atento. Durante todo mi tratamiento de ortodoncia me sentí acompañada y en confianza en cada cita.', autor: 'Kiana V.' },
    { texto: 'Llevo tres años como paciente y puedo decir sin dudarlo que ha sido la mejor atención dental que he tenido. La tecnología está siempre actualizada y todo el equipo es muy profesional.', autor: 'Roman C.' },
    { texto: 'Recién llegamos a la clínica y la experiencia ha sido excelente hasta ahora. El personal de recepción es muy amable y todo el equipo se nota conocedor y cálido.', autor: 'Melony V.' },
  ],
};

export const galeria = [
  { t: 'Corrección de mordida', antes: u(IMG.casoAntes1, 600, 600), despues: u(IMG.casoDespues1, 600, 600) },
  { t: 'Alineación con brackets', antes: u(IMG.casoAntes2, 600, 600), despues: u(IMG.casoDespues2, 600, 600) },
];

export const horario = [
  { dia: 'Lunes', horas: '8:00 a.m. - 5:00 p.m.' },
  { dia: 'Martes', horas: '9:00 a.m. - 5:00 p.m.' },
  { dia: 'Miércoles', horas: '8:00 a.m. - 5:00 p.m.' },
  { dia: 'Jueves', horas: '8:00 a.m. - 5:00 p.m.' },
  { dia: 'Viernes', horas: 'Cerrado' },
  { dia: 'Sábado', horas: 'Cerrado' },
  { dia: 'Domingo', horas: 'Cerrado' },
];

export const faq = [
  { p: '¿Atienden pacientes de todas las edades?', r: 'Sí, contamos con tratamientos de ortodoncia y odontología general pensados para niños, adolescentes y adultos.' },
  { p: '¿Ofrecen planes de pago para los tratamientos?', r: 'Sí, ofrecemos cuotas mensuales flexibles sin intereses y aceptamos la mayoría de seguros dentales.' },
  { p: '¿Necesito una evaluación antes de empezar mi tratamiento?', r: 'Sí, agenda tu consulta gratuita y nuestro equipo evaluará tu caso para armar un plan de tratamiento personalizado.' },
];
