// Datos demo de la plantilla "gasfitero-lima".
// Inspirada en gasfitero.pe/lima (sitio de captacion de un gasfitero en Lima):
// hero de urgencia, servicios, cobertura por distritos, proceso, resenas y
// contacto 24 h. Marca propia inventada "Cauce" — nunca el nombre real.

const u = (id, w = 1400, h = 1700) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  heroSifon: '1607472586893-edb57bdc0e39', // gasfitero bajo el lavabo con llave
  heroCaneria: '1585704032915-c3400ca199e7', // reparando canerias
  heroCobre: '1621905251189-08b45d6a269e', // soldadura de tuberia de cobre
  bano: '1600566752355-35792bedcfea', // lavabo / bano moderno
  banoB: '1584622650111-993a426fbf0a', // bano moderno
  grifo: '1607400201889-565b1ee75f8e', // grifo de cocina
  terma: '1620626011761-996317b8d101', // termotanque / caldera
  tuberias: '1558618666-fcd25c85cd64', // tuberias industriales
  llaves: '1585909695284-32d2985ac9c0', // tuberia y llave inglesa
  herramientas: '1504328345606-18bbc8c9d7d1', // herramientas sobre fondo oscuro
  herramientasB: '1416879595882-3373a0480b5b', // herramientas sobre madera
  tecnico: '1581092160562-40aa08e78837', // tecnico con tablet
  toolbelt: '1517646287270-a5a9ca602e5c', // herramientas de gasfiteria
};

export const marca = {
  nombre: 'Cauce',
  sub: 'Gasfitería 24 h',
  claim: 'Gasfitero en Lima, en tu puerta el mismo día.',
  tel: '931 885 179',
  telCrudo: '931885179',
  correo: 'hola@cauce.pe',
  direccion: 'San Diego 148 · Cercado de Lima 15047',
  horario: 'Lunes a domingo · 24 horas',
  rating: '5,0',
  resenas: '5.130',
};

export const nav = [
  { t: 'Servicios', href: '#servicios' },
  { t: 'Proceso', href: '#proceso' },
  { t: 'Cobertura', href: '#cobertura' },
  { t: 'Reseñas', href: '#resenas' },
  { t: 'Contacto', href: '#contacto' },
];

export const hero = {
  confianza: {
    nombre: 'Franklin Quispe',
    cargo: 'Gasfitero jefe · licencia vigente',
    rating: '5,0',
    resenas: '5.130',
    dato: 'Llega en ~40 min a tu distrito',
    img: u(IMG.tecnico, 240, 240),
  },
  tags: ['Desatoro', 'Fuga de agua', 'Instalación de terma', 'Gas', 'Emergencias'],
  slides: [
    {
      kicker: 'Gasfitero en Lima · 24 horas',
      titulo: 'Tu emergencia de agua o gas, resuelta hoy',
      sub: 'Cañería reventada, fuga, desagüe tapado o terma sin agua caliente. Un técnico motorizado llega a tu casa el mismo día.',
      img: u(IMG.heroSifon),
    },
    {
      kicker: 'Cotización en menos de 5 minutos',
      titulo: 'Sabes cuánto cuesta antes de que empecemos',
      sub: 'Te damos el precio cerrado por teléfono o WhatsApp. Sin sorpresas al final y sin cargo por acercarnos a revisar.',
      img: u(IMG.heroCaneria),
    },
    {
      kicker: 'Trabajo con garantía por escrito',
      titulo: 'Un año de garantía en mano de obra y repuestos',
      sub: 'Gasfiteros con licencia municipal vigente y años de oficio. Si algo vuelve a fallar, volvemos sin costo.',
      img: u(IMG.heroCobre),
    },
  ],
};

export const stats = [
  { n: '24/7', t: 'Atención todos los días del año' },
  { n: '+5.000', t: 'Servicios realizados en Lima' },
  { n: '~40 min', t: 'Tiempo promedio de llegada' },
  { n: '1 año', t: 'Garantía por escrito en cada trabajo' },
];

export const servicios = [
  {
    slug: 'desatoro',
    nombre: 'Desatoro de desagües',
    desc: 'Destape de inodoros, lavaderos y montantes con máquina de termofusión y varillado. Sin romper pisos.',
    img: u(IMG.llaves, 1100, 1300),
    ancho: true,
  },
  {
    slug: 'sanitarias',
    nombre: 'Instalaciones sanitarias',
    desc: 'Puntos de agua y desagüe, cambio de tuberías, inodoros, lavatorios y griferías.',
    img: u(IMG.bano, 900, 1100),
  },
  {
    slug: 'fuga',
    nombre: 'Detección de fugas de agua',
    desc: 'Ubicamos la fuga con geófono y cámara, picamos solo lo necesario y sellamos.',
    img: u(IMG.grifo, 900, 1100),
  },
  {
    slug: 'terma',
    nombre: 'Instalación y reparación de termas',
    desc: 'Termas eléctricas y a gas: instalación, mantenimiento, cambio de resistencia y válvulas.',
    img: u(IMG.terma, 900, 1100),
  },
  {
    slug: 'gas',
    nombre: 'Gas y conexiones',
    desc: 'Instalación de cocinas, líneas de gas, pruebas de hermeticidad y revisión de fugas.',
    img: u(IMG.heroCobre, 900, 1100),
  },
  {
    slug: 'mantenimiento',
    nombre: 'Mantenimiento preventivo',
    desc: 'Revisión anual de tuberías, presión, empaquetaduras y tanque elevado para edificios y casas.',
    img: u(IMG.herramientasB, 900, 1100),
  },
];

export const urgencia = {
  kicker: 'Emergencia ahora',
  titulo: '¿Fuga de gas o cañería reventada?',
  sub: 'No cierres tú la llave general si hay olor a gas. Llámanos y te guiamos mientras el técnico va en camino.',
  img: u(IMG.tuberias, 1600, 900),
};

export const proceso = [
  { n: '01', t: 'Llamas o escribes', d: 'Nos cuentas qué pasa y, si puedes, mandas una foto por WhatsApp.' },
  { n: '02', t: 'Cotización en 5 minutos', d: 'Te damos el precio cerrado y una hora de llegada realista.' },
  { n: '03', t: 'Técnico motorizado en camino', d: 'Un gasfitero con licencia llega a tu distrito con repuestos comunes a bordo.' },
  { n: '04', t: 'Trabajo y garantía', d: 'Terminado el servicio recibes tu comprobante y un año de garantía por escrito.' },
];

export const cobertura = {
  nota: 'Cobertura en toda Lima Metropolitana y Callao. Si tu distrito no está en la lista, escríbenos igual: casi siempre llegamos.',
  distritos: [
    'Miraflores', 'San Isidro', 'Surco', 'La Molina', 'San Borja', 'Barranco',
    'Jesús María', 'Lince', 'Magdalena', 'Pueblo Libre', 'San Miguel', 'Surquillo',
    'Chorrillos', 'Cercado de Lima', 'Breña', 'La Victoria', 'Los Olivos', 'San Juan de Lurigancho',
    'Ate', 'Callao', 'Bellavista', 'La Perla',
  ],
};

export const criterios = [
  {
    icono: 'escudo',
    t: 'Licencia municipal vigente',
    d: 'Pide siempre el carné. Un gasfitero formal responde por su trabajo y factura.',
  },
  {
    icono: 'reloj',
    t: 'Años de oficio comprobables',
    d: 'La experiencia se nota en el diagnóstico: un buen técnico ubica el problema rápido.',
  },
  {
    icono: 'garantia',
    t: 'Garantía por escrito',
    d: 'Mínimo un año en mano de obra y repuestos. Si no la ofrecen, desconfía.',
  },
];

export const resenas = [
  {
    texto: 'Se me reventó una tubería un domingo a las 11 de la noche. En 35 minutos ya estaba el técnico en la puerta. Trabajo limpio y me pasó boleta.',
    nombre: 'Carla M.',
    zona: 'San Borja',
  },
  {
    texto: 'Cotización por WhatsApp con foto, precio cerrado y no se movió ni un sol al final. El desatoro quedó perfecto sin romper nada.',
    nombre: 'Renzo A.',
    zona: 'Jesús María',
  },
  {
    texto: 'Cambiaron la resistencia de la terma y de paso revisaron las válvulas. Explican todo antes de tocar nada. Muy recomendables.',
    nombre: 'Patricia V.',
    zona: 'Surco',
  },
  {
    texto: 'Olía a gas en la cocina. Vinieron rápido, hicieron prueba de hermeticidad y encontraron la fuga en una conexión floja. Tranquilidad total.',
    nombre: 'Julio E.',
    zona: 'Miraflores',
  },
  {
    texto: 'Llamé a tres gasfiteros. Este fue el único que dio hora exacta y la cumplió. La garantía por escrito me dio confianza.',
    nombre: 'Milagros P.',
    zona: 'Los Olivos',
  },
];

export const contacto = {
  kicker: 'Contacto directo',
  titulo: 'Cuéntanos qué necesitas y te llamamos en minutos',
  distritos: [
    'Miraflores', 'San Isidro', 'Surco', 'La Molina', 'San Borja', 'Barranco',
    'Jesús María', 'Lince', 'Magdalena', 'Pueblo Libre', 'San Miguel', 'Surquillo',
    'Chorrillos', 'Cercado de Lima', 'Callao', 'Otro distrito',
  ],
  asuntos: ['Emergencia (fuga / reventón)', 'Desatoro', 'Instalación sanitaria', 'Terma', 'Gas', 'Mantenimiento'],
};

export const footer = {
  cols: [
    {
      t: 'Servicios',
      links: ['Desatoro de desagües', 'Instalaciones sanitarias', 'Detección de fugas', 'Instalación de termas', 'Gas y conexiones', 'Mantenimiento'],
    },
    {
      t: 'Zonas',
      links: ['Miraflores', 'San Isidro', 'Surco', 'La Molina', 'Jesús María', 'Callao'],
    },
    {
      t: 'Empresa',
      links: ['Cómo trabajamos', 'Garantía', 'Reseñas', 'Contacto', 'Libro de reclamaciones'],
    },
  ],
  pagos: ['Visa', 'Mastercard', 'Yape', 'Plin', 'Efectivo'],
};
