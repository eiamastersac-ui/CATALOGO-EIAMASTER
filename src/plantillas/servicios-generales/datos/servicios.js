// Datos demo de la plantilla "servicios-generales".
// Inspirada en serviciosgeneralesgesaj.igoosites.com (empresa de servicios
// generales en Lince, Lima: gasfiteria, electricidad, albanileria y
// refacciones 24 h). Marca propia "tienda.com Servicios" — nunca el nombre real.

const u = (id, w = 1200, h = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// Ids verificados (200 + contact sheet) — todos del rubro.
const IMG = {
  electricista: '1621905251189-08b45d6a269e', // electricista con casco midiendo un medidor
  tablero: '1544724569-5f546fd6f2b5', // tablero de llaves termomagneticas
  tuberias: '1607472586893-edb57bdc0e39', // tuberias y valvulas sobre muro de ladrillo
  grifo: '1542013936693-884638332954', // reparando grifo de cocina
  obra: '1531834685032-c34bf0d84c77', // obreros armando fierro / albanileria
  sellado: '1607400201515-c2c41c07d307', // sellando marco de ventana (refacciones)
  rodillo: '1562259949-e8e7689d7828', // rodillo de pintura sobre pared
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Servicios',
  tel: '912 345 678',
  telCrudo: '912345678',
  correo: 'servicios@tienda.com',
  direccion: 'Av. Arequipa 2450, Lince 15046, Lima',
  horario: 'Lunes a domingo',
  horas: 'Atención 24 horas',
  experiencia: '20+',
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Por qué elegirnos', href: '#por-que' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Contacto', href: '#contacto' },
];

export const hero = {
  img: u(IMG.electricista, 1400, 1600),
  titulo: 'Respire tranquilo.',
  sub: 'Si tienes necesidad de gasfitero y electricista',
  texto:
    'Está en el lugar indicado: solicita servicio de gasfitería y electricidad en Lince y distritos cercanos, las 24 horas.',
  pills: ['Gasfitería', 'Electricidad', 'Albañilería', 'Refacciones'],
  dato: { valor: '24/7', t: 'Atendemos emergencias' },
};

export const banda = 'Solicite presupuesto sin costo';

export const compromiso = {
  titulo: 'Estamos comprometidos a hacer el trabajo, cada trabajo, ¡de la manera correcta!',
  lead: 'Llama y recibe el mejor servicio de electricista y gasfitero de Lima. Precios competitivos. Llame ya.',
  texto:
    'Atención las 24 horas. Servicios de gasfitería, electricidad, albañilería y refacciones. Atendemos emergencias. Contamos con más de 20 años de experiencia en el distrito de Lince y alrededores: un equipo de profesionales capacitados y experimentados, comprometidos con un servicio de calidad y seguridad para tu hogar.',
};

export const servicios = [
  {
    t: 'Gasfitería',
    d: 'Fugas, atoros, cambio de grifería, termas y tuberías de agua y desagüe.',
    img: u(IMG.grifo, 900, 1100),
  },
  {
    t: 'Electricidad',
    d: 'Tableros, cortocircuitos, cableado, tomacorrientes e iluminación.',
    img: u(IMG.tablero, 900, 1100),
  },
  {
    t: 'Albañilería',
    d: 'Muros, tarrajeo, pisos, columnas y pequeñas obras en casa o negocio.',
    img: u(IMG.obra, 900, 1100),
  },
  {
    t: 'Refacciones',
    d: 'Pintura, sellado de ventanas, resanes y mantenimiento general.',
    img: u(IMG.rodillo, 900, 1100),
  },
];

export const porQue = {
  titulo: 'Por qué elegirnos',
  texto:
    'Contamos con más de 20 años de experiencia en el sector, lo que nos convierte en una empresa líder en el mercado. Nuestro equipo está altamente capacitado y cuenta con la certificación necesaria para realizar cualquier trabajo de gasfitería y electricidad.',
  items: [
    {
      icono: 'alcancia',
      t: 'Precios competitivos',
      d: 'Ofrecemos precios competitivos para todos nuestros servicios. Nos esforzamos por brindar calidad a un precio accesible.',
    },
    {
      icono: 'veinticuatro',
      t: 'Servicio al cliente',
      d: 'Nos preocupamos por la satisfacción de nuestros clientes: siempre estamos disponibles para atender tus preguntas y resolver tus dudas.',
    },
    {
      icono: 'llave',
      t: 'Calidad y seguridad',
      d: 'Usamos los mejores materiales y técnicas. Nuestros trabajos están garantizados para que puedas estar tranquilo.',
    },
  ],
};

export const contacto = [
  { icono: 'telefono', t: 'Llamada', v: marca.tel, href: `tel:+51${marca.telCrudo}` },
  { icono: 'whatsapp', t: 'WhatsApp', v: marca.tel, href: `https://wa.me/51${marca.telCrudo}` },
  { icono: 'correo', t: '', v: marca.correo, href: `mailto:${marca.correo}` },
];

export const pie = [
  { icono: 'pin', t: 'Ubicación', l: [marca.direccion] },
  { icono: 'reloj', t: 'Horario', l: ['00:00 – 24:00 h', marca.horario] },
  { icono: 'telefono', t: 'Teléfono', l: [marca.tel], href: `tel:+51${marca.telCrudo}` },
];

export const waHref = `https://wa.me/51${marca.telCrudo}?text=Hola,%20necesito%20un%20presupuesto`;
export const telHref = `tel:+51${marca.telCrudo}`;
