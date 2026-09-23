const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  rosasIntensas: '1519378058457-4c29a0a2efac',
  rosaUnica: '1518895949257-7621c3c786d7',
  girasol: '1470509037663-253afd7f0f51',
  tulipanes: '1561181286-d3fee7d55364',
  tulipanesMix: '1468327768560-75b778cbb551',
  lirioVaso: '1502977249166-824b3a8a4d6d',
  ramoManos: '1526047932273-341f2a7631f9',
  floristeria: '1487070183336-b863922373d4',
  rosasMoody: '1457089328109-e5d9bd499191',
  ramoBlush: '1563241527-3004b7be0ffd',
  arregloCalido: '1533616688419-b7a585564566',
  margarita: '1606041008023-472dfb5e530f',
  peonias: '1464982326199-86f32f81b211',
  rosasRojas: '1494972308805-463bc619d34e',
  cerezo: '1522748906645-95d8adfd52c7',
  cajaRegalo: '1549465220-1a8b9238cd48',
  ramoElegante: '1487530811176-3780de880c2d',
  rosasDurazno: '1591886960571-74d43a9d4166',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Flores',
  tel: '+51 955 000 111',
  correo: 'pedidos@tienda.com',
  ciudad: 'Lima y Callao',
};

export const navPrincipal = [
  { t: 'Selección Especial', href: '#seleccion' },
  {
    t: 'Ocasiones',
    href: '#historias',
    sub: [
      { t: 'Amor', href: '#historias' },
      { t: 'Aniversario', href: '#historias' },
      { t: 'Cumpleaños', href: '#historias' },
      { t: 'Condolencias', href: '#homenajes' },
    ],
  },
  {
    t: 'Ramos',
    href: '#tipos-flor',
    sub: [
      { t: 'Rosas', href: '#tipos-flor' },
      { t: 'Girasoles', href: '#tipos-flor' },
      { t: 'Tulipanes', href: '#tipos-flor' },
      { t: 'Lirios', href: '#tipos-flor' },
    ],
  },
  {
    t: 'Condolencias',
    href: '#homenajes',
    sub: [
      { t: 'Lágrimas', href: '#homenajes' },
      { t: 'Coronas', href: '#homenajes' },
      { t: 'Arreglos y ramos', href: '#homenajes' },
      { t: 'Mantos', href: '#homenajes' },
    ],
  },
  { t: 'Regalos', href: '#seleccion' },
  { t: 'Empresas', href: '#sobre-nosotros' },
];

export const heroSlides = [
  {
    kicker: 'Flores para decirlo todo',
    titulo: 'Un aniversario que se queda en la memoria.',
    sub: 'Cada fecha importante merece un gesto que hable por ti.',
    cta: 'Ver colección',
    img: u(IMG.rosasRojas, 1600),
  },
  {
    kicker: 'Entrega el mismo día',
    titulo: 'Rosas frescas para decir lo que sientes.',
    sub: 'Arreglos elaborados a mano, con flores de temporada seleccionadas una por una.',
    cta: 'Pedir ahora',
    img: u(IMG.ramoBlush, 1600),
  },
  {
    kicker: 'Momentos de condolencia',
    titulo: 'Un homenaje floral, con respeto y cuidado.',
    sub: 'Diseños pensados para acompañar en los momentos más difíciles.',
    cta: 'Ver homenajes',
    img: u(IMG.rosasMoody, 1600),
  },
];

export const promesa = {
  kicker: 'Arreglos florales premium',
  titulo: 'Arreglos florales premium en Lima y Callao con entrega a domicilio',
  texto:
    'Diseñamos arreglos florales con flores frescas para cumpleaños, aniversarios, nacimientos, condolencias y cada ocasión especial. Cada arreglo es elaborado por floristas expertos y presentado con el cuidado que merece un regalo importante.',
  items: [
    { t: 'Flores 100% frescas', d: 'Seleccionamos cada tallo por su frescura, belleza y duración.' },
    { t: 'Lo que ves, es lo que recibes', d: 'La máxima fidelidad entre el diseño que eliges y el arreglo que recibe tu ser querido.' },
    { t: 'Entregas puntuales', d: 'Cumplimos los horarios acordados para que tu sorpresa llegue a tiempo.' },
    { t: 'Envío seguro', d: 'Cada arreglo viaja protegido para conservar su belleza durante el recorrido.' },
    { t: 'Confirmación de entrega', d: 'Recibe una fotografía del arreglo al momento de la entrega, para tu tranquilidad.' },
  ],
};

export const productos = [
  { nombre: 'Girasol de Vivero', desc: 'Box con girasoles frescos', precio: 220, img: u(IMG.girasol, 520) },
  { nombre: 'Rosa Roja Clásica', desc: 'Ramo circular, 20 rosas', precio: 220, img: u(IMG.rosasRojas, 520) },
  { nombre: 'Tulipanes de Primavera', desc: 'Ramo de tulipanes variados', precio: 195, img: u(IMG.tulipanesMix, 520) },
  { nombre: 'Alegría', desc: 'Ramo colorido de temporada', precio: 189, img: u(IMG.ramoManos, 520) },
  { nombre: 'Rosa Roja Esencial', desc: 'Ramo de 12 rosas', precio: 129, img: u(IMG.rosasIntensas, 520) },
  { nombre: 'Jardín de Peonías', desc: 'Ramo de peonías rosadas', precio: 175, img: u(IMG.peonias, 520) },
];

export const historias = [
  { t: 'Amor', cta: 'Descubrir', img: u(IMG.rosasIntensas, 640) },
  { t: 'Aniversario', cta: 'Celebrar', img: u(IMG.arregloCalido, 640) },
  { t: 'Cumpleaños', cta: 'Sorprender', img: u(IMG.margarita, 640) },
  { t: 'Condolencias', cta: 'Acompañar', img: u(IMG.rosasMoody, 640) },
];

export const tiposFlor = [
  { t: 'Rosas', cta: 'Ver colección', img: u(IMG.rosaUnica, 640) },
  { t: 'Girasoles', cta: 'Ver colección', img: u(IMG.girasol, 640) },
  { t: 'Tulipanes', cta: 'Ver colección', img: u(IMG.tulipanes, 640) },
  { t: 'Lirios', cta: 'Ver colección', img: u(IMG.lirioVaso, 640) },
];

export const homenajes = [
  { t: 'Lágrimas', cta: 'Ver colección', img: u(IMG.rosasRojas, 640) },
  { t: 'Coronas', cta: 'Ver colección', img: u(IMG.rosasMoody, 640) },
  { t: 'Arreglos y ramos', cta: 'Ver colección', img: u(IMG.ramoBlush, 640) },
  { t: 'Mantos', cta: 'Ver colección', img: u(IMG.ramoElegante, 640) },
];

export const testimonios = [
  { nombre: 'Julia Bravo', tiempo: 'Hace 2 semanas', texto: 'El servicio es muy confiable y de alto nivel. Las flores llegan de primera y siempre envían fotos de la entrega.' },
  { nombre: 'María Sánchez', tiempo: 'Hace 3 semanas', texto: 'Respondieron rápido y con buena disposición. Cumplieron el horario y me avisaron en todo momento sobre mi pedido.' },
  { nombre: 'Sebastián Donoso', tiempo: 'Hace 1 mes', texto: 'La compra es rápida, hay gran variedad de productos y buenas opciones de despacho en toda la ciudad.' },
  { nombre: 'Onix Faunes', tiempo: 'Hace 1 mes', texto: 'Muy puntuales y fácil de comprar en la página. Los arreglos llegan iguales a la foto.' },
  { nombre: 'Analiza Tavares', tiempo: 'Hace 2 meses', texto: 'Buen servicio de principio a fin: compra, seguimiento y cumplimiento del horario de entrega.' },
  { nombre: 'Nelson Campos', tiempo: 'Hace 2 meses', texto: 'Excelente atención, las flores son preciosas y muy bien presentadas. Servicio muy rápido.' },
];

export const entregas = [
  u(IMG.tulipanesMix, 480),
  u(IMG.lirioVaso, 480),
  u(IMG.margarita, 480),
  u(IMG.cerezo, 480),
  u(IMG.cajaRegalo, 480),
  u(IMG.floristeria, 480),
];

export const sobreNosotros = {
  kicker: 'Florería en Lima y Callao',
  titulo: 'El arte de decir lo que las palabras no alcanzan.',
  texto:
    'En tienda.com diseñamos arreglos florales con flores frescas y una presentación cuidada, ideales para aniversarios, cumpleaños, fechas especiales y momentos de condolencia. Coordinamos pedidos desde cualquier parte del Perú o del extranjero, con entregas puntuales en toda Lima Metropolitana y Callao. Cada entrega se confirma con una fotografía, para tu tranquilidad.',
  img: u(IMG.floristeria, 900),
  imgChica: u(IMG.rosaUnica, 420),
};

export const experiencia = {
  kicker: 'Experiencia tienda.com',
  titulo: 'Flores frescas, entregadas el mismo día.',
  items: ['Flores frescas', 'Entrega puntual', 'Presentación impecable', 'Foto de entrega'],
  img: u(IMG.rosasDurazno, 1100),
};

export const rating = { valor: '4.9', cantidad: 391 };

export const distritos = [
  'Miraflores',
  'San Isidro',
  'Santiago de Surco',
  'La Molina',
  'San Borja',
  'Los Olivos',
  'Cercado de Lima',
];

export const footerCatalogo = [
  { t: 'Ramo de Rosas', href: '#tipos-flor' },
  { t: 'Ramo con Girasoles', href: '#tipos-flor' },
  { t: 'Cumpleaños', href: '#historias' },
  { t: 'Amor', href: '#historias' },
  { t: 'Aniversario', href: '#historias' },
  { t: 'Condolencias', href: '#homenajes' },
];

export const footerPoliticas = [
  'Condiciones de uso',
  'Preguntas frecuentes (FAQ)',
  'Información sobre envío y pago',
  'Política de devoluciones y cancelaciones',
];

export const pagoMetodos = ['Visa', 'Mastercard', 'Amex', 'BBVA', 'BCP', 'Interbank', 'Scotiabank', 'Plin', 'Yape', 'PagoEfectivo'];

export const soles = (n) => 'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
