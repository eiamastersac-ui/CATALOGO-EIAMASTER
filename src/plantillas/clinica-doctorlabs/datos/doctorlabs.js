const u = (id, w = 1200, h = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  heroDoctora: '1758691462651-611d730c5272',
  heroAvatarStaff: '1623854767648-e7bb8009f0db',
  laboratorioEquipo: '1614935151651-0bea6508db6b',
  pasilloHospital: '1777269749032-d8d458ae594d',
  tubosLaboratorio: '1606206591513-adbfbdd7a177',
  monitorCardio: '1513224502586-d1e602410265',
  radiografiaTorax: '1616012480717-fd9867059ca0',
  medicoRadiografia: '1631563018856-81be9c118283',
  ecografiaBebe: '1770134846141-a7a11976145d',
  extraccionSangre: '1615461066159-fea0960485d5',
  presionArterial: '1631815590058-860e4f83c1e8',
  consultaHistoria: '1758691461990-03b49d969495',
  testimoniosFondo: '1765896387387-0538bc9f997e',
};

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Clínica',
  tel: '961 051 008',
  correo: 'contacto@tutienda.com',
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Quiénes Somos', href: '#nosotros' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Contacto', href: '#contacto' },
];

export const dropdownServicios = [
  { t: 'Cardiología', href: '#cardiologia', icono: 'corazon' },
  { t: 'Laboratorio Clínico', href: '#laboratorio', icono: 'tubo' },
  { t: 'Ecografías', href: '#ecografias', icono: 'onda' },
  { t: 'Rayos X', href: '#rayosx', icono: 'rayos' },
];

export const hero = {
  badge: 'Bienvenidos',
  titulo: 'tu tienda.com, al servicio de tu salud',
  sub: 'Cardiología, laboratorio clínico, ecografías y rayos X en un solo centro médico, con especialistas certificados y resultados en los que puedes confiar.',
  cta: 'Consultas Aquí',
  confianza: { dato: '+10 años de experiencia', sub: 'Atención personalizada' },
  img: u(IMG.heroDoctora, 900, 1100),
  badgeSatisfaccion: '100% Pacientes Satisfechos',
  staff: { nombre: 'Staff de Médicos', sub: 'A tu servicio', img: u(IMG.heroAvatarStaff, 160, 160) },
};

export const franjaCentro = {
  kicker: 'Nuestro centro',
  titulo: 'Centro Cardiológico, Ecografías & Laboratorio Clínico',
  parrafo:
    'Contamos con tecnología de diagnóstico avanzada y un equipo médico multidisciplinario para acompañarte en cada etapa de tu salud, desde el chequeo preventivo hasta el seguimiento de tratamientos.',
  bullets: [
    'Resultados el mismo día para la mayoría de exámenes',
    'Equipos de última generación en cada especialidad',
    'Atención en sede y a domicilio',
  ],
  img: u(IMG.laboratorioEquipo, 900, 1000),
};

export const marquee = ['Laboratorio Clínico', 'Ecografías', 'Rayos X', 'Medicina General', 'Cardiología'];

export const nuestrosServicios = {
  kicker: 'Lo que hacemos',
  titulo: 'Nuestros Servicios',
  parrafo:
    'Cuatro especialidades bajo un mismo techo, pensadas para resolver tu diagnóstico sin que tengas que moverte de clínica en clínica.',
  img: u(IMG.consultaHistoria, 560, 680),
  tarjetas: [
    { icono: 'corazon', t: 'Cardiología', d: 'Electrocardiogramas, prueba de esfuerzo y control de presión arterial.' },
    { icono: 'tubo', t: 'Laboratorio Clínico', d: 'Análisis de sangre, orina y perfiles completos con resultados rápidos.' },
    { icono: 'onda', t: 'Ecografías', d: 'Ecografía abdominal, obstétrica, renal y de partes blandas.' },
    { icono: 'rayos', t: 'Rayos X', d: 'Radiografías digitales de tórax, óseas y dentales.' },
  ],
};

export const especialidades = [
  { t: 'Cardiología', img: u(IMG.monitorCardio, 700, 900), href: '#cardiologia' },
  { t: 'Laboratorio Clínico', img: u(IMG.tubosLaboratorio, 700, 900), href: '#laboratorio' },
  { t: 'Ecografías', img: u(IMG.ecografiaBebe, 700, 900), href: '#ecografias' },
  { t: 'Rayos X', img: u(IMG.radiografiaTorax, 700, 900), href: '#rayosx' },
];

export const examenes = [
  { t: 'Hemograma Completo', img: u(IMG.tubosLaboratorio, 520, 640) },
  { t: 'Perfil Lipídico', img: u(IMG.extraccionSangre, 520, 640) },
  { t: 'Electrocardiograma', img: u(IMG.monitorCardio, 520, 640) },
  { t: 'Prueba de Esfuerzo', img: u(IMG.presionArterial, 520, 640) },
  { t: 'Ecografía Abdominal', img: u(IMG.ecografiaBebe, 520, 640) },
  { t: 'Ecografía Obstétrica', img: u(IMG.ecografiaBebe, 521, 640) },
  { t: 'Rayos X de Tórax', img: u(IMG.radiografiaTorax, 522, 640) },
  { t: 'Radiografía Ósea', img: u(IMG.medicoRadiografia, 520, 640) },
  { t: 'Chequeo Preventivo', img: u(IMG.consultaHistoria, 523, 640) },
  { t: 'Perfil Renal Completo', img: u(IMG.tubosLaboratorio, 524, 640) },
  { t: 'Ecocardiograma', img: u(IMG.monitorCardio, 525, 640) },
  { t: 'Perfil Hepático', img: u(IMG.extraccionSangre, 526, 640) },
];

export const testimonios = [
  {
    nombre: 'Abigail Alcalá',
    cargo: 'Paciente',
    texto: 'Me atendieron rapidísimo y los resultados del laboratorio llegaron el mismo día. Muy recomendado.',
  },
  {
    nombre: 'Alexis Rojas',
    cargo: 'Paciente',
    texto: 'El cardiólogo me explicó todo con calma y el ecógrafo es de última generación. Excelente atención.',
  },
  {
    nombre: 'Marisol Quiroz',
    cargo: 'Paciente',
    texto: 'Fui por una radiografía y terminé haciéndome el chequeo completo, todo en la misma visita.',
  },
];
export const testimoniosImg = u(IMG.testimoniosFondo, 1700, 900);

export const infoPractica = {
  horario: { titulo: 'Horario de Atención', dias: 'Lunes a Sábado', horas: '7:30 am – 7:00 pm', extra: 'Atención en sede y a domicilio' },
  sedes: [
    { nombre: 'Sede Surquillo', direccion: 'Cl. Los Negocios 223, Surquillo' },
    { nombre: 'Sede Comas', direccion: 'Jr. Francisco Alvariño 470 – Retablo, Comas' },
  ],
};

export const footerCols = {
  trust: 'Más de 10 años acompañando la salud de miles de familias en Lima.',
  enlaces: [
    { t: 'Inicio', href: '#top' },
    { t: 'Quiénes Somos', href: '#nosotros' },
    { t: 'Servicios', href: '#servicios' },
    { t: 'Contacto', href: '#contacto' },
  ],
  redes: ['Facebook', 'Instagram', 'TikTok'],
};
