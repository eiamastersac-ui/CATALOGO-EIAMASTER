// Datos demo de la plantilla "reservas-belleza" (estilo booksy.com).
// Todo es ficticio: marca propia tienda.com Reservas, sin login ni backend.

export const u = (id, w = 640, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

// Ids de Unsplash verificados (curl 200 + contact sheet), todos del rubro.
export const IMG = {
  barberoNavaja: '1503951914875-452162b0f3f1',
  barberiaLocal: '1585747860715-2ba37e788b70',
  barberoTatuaje: '1599351431202-1e0f0137899a',
  herramientas: '1621605815971-fbc98d665033',
  corteHombre: '1622286342621-4bd786c2447c',
  barberoSonrie: '1605497788044-5a32c7078486',
  sillonBarbero: '1512690459411-b9245aed614b',
  maquinaNuca: '1493256338651-d82f7acb2b38',
  salonBN: '1560066984-138dadb4c035',
  salonBlanco: '1521590832167-7bcbfaa6381f',
  peluqueraSecador: '1562322140-8baeececf3df',
  melenaRosa: '1522337360788-8b13dee7a37e',
  estilistaOscuro: '1595476108010-b4d1f102b1b1',
  peinado: '1580618672591-eb180b1a973f',
  salonPasillo: '1633681926022-84c23e8cb2d6',
  equipoSalon: '1559599101-f09722fb4948',
  peloRosa: '1470259078422-826894b933aa',
  unasNegras: '1604654894610-df63bc536371',
  unasNude: '1610992015732-2449b76344bc',
  unasRojas: '1519014816548-bf5fe059798b',
  manicura: '1632345031435-8727f6897d53',
  unasLila: '1607779097040-26e80aa78e66',
  masajeAceite: '1544161515-4ab6ce6db874',
  spaToalla: '1540555700478-4be289fbecef',
  piedrasCalientes: '1600334089648-b0d9d3028eb2',
  serum: '1515377905703-c4788e51af15',
  masajeEspalda: '1519823551278-64ac92734fb1',
  faciaBarro: '1570172619644-dfd03ed5d881',
  mascarilla: '1616394584738-fc6e612e71b9',
  tratamientoFacial: '1512290923902-8a9f81dc236c',
  maquillajeOjos: '1487412947147-5cebf100ffc2',
  paleta: '1522335789203-aabd1fc54bc9',
  brochas: '1596462502278-27bfdc403348',
  ondas: '1560869713-7d0a29430803',
  rizos: '1519699047748-de8e457a634e',
  salonNegro: '1600948836101-f9ffda59d250',
  trenzas: '1582095133179-bfd08e2fc6b3',
  lavacabezas: '1634449571010-02389ed0f9b0',
  utilesPelo: '1527799820374-dcf8d9d4a388',
  esteticaFacial: '1552693673-1bf958298935',
  labiosRojos: '1616683693504-3ea7e9ad6fec',
  ondasPlancha: '1629397685944-7073f5589754',
  pedicura: '1519415510236-718bdfcd89c8',
  unasEsmalte: '1457972729786-0411a3b2b626',
  salonEspejos: '1633681138600-295fcd688876',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Reservas',
  correo: 'hola@tienda.com',
};

export const euros = (n) =>
  Number(n).toLocaleString('es-ES', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2 });

// Fotos que se alternan (crossfade) detras del hero, como el video del original.
export const heroFondos = [
  { src: u(IMG.peluqueraSecador, 1920), alt: 'Peluquera secando el pelo a una clienta' },
  { src: u(IMG.barberiaLocal, 1920), alt: 'Interior de una barberia con sillones de cuero' },
  { src: u(IMG.masajeAceite, 1920), alt: 'Masaje relajante en un spa' },
];

// Palabras que se "escriben" solas en el titular del hero.
export const heroFrases = ['Sé tú mismo', 'Siéntete bien', 'Luce increíble', 'Tómate un respiro'];

export const categorias = [
  { id: 'peluqueria', t: 'Peluquería' },
  { id: 'barberia', t: 'Barbería' },
  { id: 'unas', t: 'Salón de uñas' },
  { id: 'depilacion', t: 'Depilación' },
  { id: 'cejas', t: 'Cejas y pestañas' },
  { id: 'piel', t: 'Cuidado de la piel' },
  { id: 'masajes', t: 'Masajes' },
  { id: 'maquillaje', t: 'Maquillaje' },
];

export const categoriasMas = [
  { id: 'spa', t: 'Spa' },
  { id: 'mascotas', t: 'Servicios para mascotas' },
  { id: 'tatuajes', t: 'Tienda de tatuajes' },
  { id: 'medicina', t: 'Medicina estética' },
  { id: 'piercing', t: 'Piercing' },
  { id: 'salud', t: 'Deporte y salud' },
  { id: 'dental', t: 'Cuidado dental' },
  { id: 'trenzas', t: 'Trenzas' },
  { id: 'profesionales', t: 'Servicios profesionales' },
  { id: 'domesticos', t: 'Servicios domésticos' },
  { id: 'otro', t: 'Otro' },
];

export const nombreCategoria = Object.fromEntries(
  [...categorias, ...categoriasMas].map((c) => [c.id, c.t]),
);

// Carta de servicios por rubro (la reutilizan varios negocios).
const cartas = {
  barberia: [
    { n: 'Corte de pelo clásico', d: 30, p: 15 },
    { n: 'Corte + arreglo de barba', d: 45, p: 22 },
    { n: 'Afeitado con toalla caliente', d: 30, p: 16 },
    { n: 'Degradado (fade) a navaja', d: 40, p: 18 },
  ],
  peluqueria: [
    { n: 'Lavar, cortar y peinar', d: 60, p: 32 },
    { n: 'Color raíz', d: 75, p: 45 },
    { n: 'Mechas balayage', d: 150, p: 95 },
    { n: 'Peinado de evento', d: 45, p: 35 },
  ],
  unas: [
    { n: 'Manicura semipermanente', d: 45, p: 20 },
    { n: 'Uñas de gel (esculpidas)', d: 90, p: 38 },
    { n: 'Pedicura completa', d: 50, p: 28 },
    { n: 'Nail art (por uña)', d: 10, p: 3 },
  ],
  masajes: [
    { n: 'Masaje relajante 60 min', d: 60, p: 45 },
    { n: 'Masaje descontracturante', d: 50, p: 50 },
    { n: 'Piedras calientes', d: 75, p: 62 },
    { n: 'Reflexología podal', d: 40, p: 35 },
  ],
  piel: [
    { n: 'Limpieza facial profunda', d: 60, p: 48 },
    { n: 'Hidratación con ácido hialurónico', d: 50, p: 55 },
    { n: 'Peeling suave', d: 40, p: 42 },
  ],
  cejas: [
    { n: 'Diseño de cejas con hilo', d: 20, p: 12 },
    { n: 'Lifting de pestañas', d: 50, p: 39 },
    { n: 'Extensiones pelo a pelo', d: 120, p: 70 },
  ],
  maquillaje: [
    { n: 'Maquillaje social', d: 45, p: 40 },
    { n: 'Maquillaje de novia (prueba incl.)', d: 120, p: 150 },
    { n: 'Clase de automaquillaje', d: 90, p: 60 },
  ],
  depilacion: [
    { n: 'Depilación láser piernas', d: 40, p: 69 },
    { n: 'Cera axilas', d: 15, p: 9 },
    { n: 'Cera piernas completas', d: 40, p: 25 },
  ],
  trenzas: [
    { n: 'Box braids medianas', d: 240, p: 120 },
    { n: 'Trenzas pegadas (cornrows)', d: 90, p: 45 },
  ],
  spa: [
    { n: 'Circuito de aguas 90 min', d: 90, p: 35 },
    { n: 'Ritual spa para dos', d: 120, p: 140 },
  ],
};

export const negocios = [
  { id: 'n1', nombre: 'Barbería El Navajero', cat: 'barberia', ciudad: 'Madrid', dir: 'Calle de Fuencarral 112, 28004 Madrid', rating: 5.0, resenas: 690, img: IMG.barberoNavaja, patrocinado: true },
  { id: 'n2', nombre: 'Estudio Melena', cat: 'peluqueria', ciudad: 'Barcelona', dir: 'Carrer de Pàdua 41, 08006 Barcelona', rating: 4.9, resenas: 1193, img: IMG.peluqueraSecador, patrocinado: true },
  { id: 'n3', nombre: 'Palace Barber Club', cat: 'barberia', ciudad: 'Barcelona', dir: 'Carrer de Padilla 241, 08013 Barcelona', rating: 4.9, resenas: 1805, img: IMG.barberiaLocal, patrocinado: false },
  { id: 'n4', nombre: 'Nails Studio Aurora', cat: 'unas', ciudad: 'Valencia', dir: 'Carrer de Colón 18, 46004 Valencia', rating: 4.6, resenas: 1132, img: IMG.unasNegras, patrocinado: true },
  { id: 'n5', nombre: 'Casa Calma Masajes', cat: 'masajes', ciudad: 'Sevilla', dir: 'Calle Feria 64, 41003 Sevilla', rating: 4.8, resenas: 412, img: IMG.masajeEspalda, patrocinado: false },
  { id: 'n6', nombre: 'Piel de Seda Estética', cat: 'piel', ciudad: 'Málaga', dir: 'Calle Larios 7, 29005 Málaga', rating: 4.7, resenas: 358, img: IMG.faciaBarro, patrocinado: false },
  { id: 'n7', nombre: 'Lash & Brow Lab', cat: 'cejas', ciudad: 'Madrid', dir: 'Calle de Serrano 88, 28006 Madrid', rating: 4.9, resenas: 824, img: IMG.maquillajeOjos, patrocinado: false },
  { id: 'n8', nombre: 'Fade Factory', cat: 'barberia', ciudad: 'Bilbao', dir: 'Licenciado Poza 23, 48011 Bilbao', rating: 4.8, resenas: 967, img: IMG.barberoSonrie, patrocinado: false },
  { id: 'n9', nombre: 'Rizos & Co.', cat: 'peluqueria', ciudad: 'Zaragoza', dir: 'Paseo de la Independencia 30, 50004 Zaragoza', rating: 4.7, resenas: 289, img: IMG.peinado, patrocinado: false },
  { id: 'n10', nombre: 'Glow Make-up Room', cat: 'maquillaje', ciudad: 'Valencia', dir: 'Carrer de Russafa 15, 46004 Valencia', rating: 5.0, resenas: 176, img: IMG.brochas, patrocinado: false },
  { id: 'n11', nombre: 'Láser Center Sur', cat: 'depilacion', ciudad: 'Sevilla', dir: 'Avenida de la Constitución 20, 41004 Sevilla', rating: 4.5, resenas: 540, img: IMG.esteticaFacial, patrocinado: false },
  { id: 'n12', nombre: 'Uñas Bonitas Gràcia', cat: 'unas', ciudad: 'Barcelona', dir: 'Carrer Gran de Gràcia 150, 08012 Barcelona', rating: 4.8, resenas: 702, img: IMG.unasNude, patrocinado: false },
  { id: 'n13', nombre: 'Termas Urbanas Spa', cat: 'spa', ciudad: 'Madrid', dir: 'Calle de Atocha 55, 28012 Madrid', rating: 4.6, resenas: 1310, img: IMG.spaToalla, patrocinado: false },
  { id: 'n14', nombre: 'Afro Trenzas Studio', cat: 'trenzas', ciudad: 'Málaga', dir: 'Calle Carretería 36, 29008 Málaga', rating: 4.9, resenas: 233, img: IMG.trenzas, patrocinado: false },
].map((n) => ({ ...n, servicios: cartas[n.cat] || cartas.peluqueria }));

export const ciudadesBusqueda = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Málaga', 'Bilbao', 'Zaragoza'];

// Tarjetas "app" del original (cliente / negocio).
export const appCards = {
  cliente: {
    kicker: 'App tienda.com Reservas · iOS, Android',
    titulo: ['Busca y reserva', 'una cita'],
    texto: 'Sin llamadas ni esperas. Encuentra tu próxima cita y resérvala al momento, a cualquier hora y desde donde estés.',
  },
  negocio: {
    kicker: 'tienda.com Negocios · iOS, Android',
    titulo: ['tienda.com', 'para tu negocio'],
    texto: 'Gestiona tu salón sin complicaciones: agenda, reservas online, recordatorios y cobros en un solo lugar.',
    cta: 'Hacer crecer mi negocio',
  },
};

export const ventajas = [
  {
    titulo: 'Citas con mayor facilidad',
    parrafos: [
      '¿Buscas barbero, peluquera, masajista o manicurista cerca de ti? ¿Quieres reservar un arreglo de barba, un diseño de cejas o un masaje descontracturante?',
      'Con tienda.com Reservas encuentras y reservas en segundos, sin llamar por teléfono. La agenda está abierta las 24 horas, todos los días.',
    ],
    cierre: 'Descubre los mejores negocios de tu barrio y reserva al instante.',
    img: IMG.salonBlanco,
    alt: 'Salón de peluquería luminoso con sillones',
  },
  {
    titulo: '¿Algún imprevisto? Te lo ponemos fácil.',
    parrafos: [
      'Gestiona tus citas desde el móvil: cambia la hora o cancela sin tener que llamar a nadie.',
      'Y como sabemos que vas con mil cosas, te mandamos un recordatorio antes de cada cita para que no se te pase ninguna.',
    ],
    cierre: '',
    img: IMG.manicura,
    alt: 'Manicurista trabajando en las uñas de una clienta',
  },
  {
    titulo: 'Reserva con los mejores de tu zona',
    parrafos: [
      'Explora los negocios de belleza y bienestar mejor valorados de tu ciudad.',
      'Mira sus perfiles, sus fotos de trabajos y lo que opinan otros clientes en reseñas verificadas.',
      'Ahorra tiempo y olvídate del estrés: reservar tu próxima cita es gratis y sencillo.',
    ],
    cierre: '',
    img: IMG.barberoTatuaje,
    alt: 'Barbero perfilando un degradado',
  },
];

const catsCiudad = ['Barbería', 'Peluquería', 'Masajes', 'Salón de uñas', 'Spa', 'Cejas y pestañas', 'Maquillaje'];
export const ciudades = [
  'Málaga', 'Almería', 'Cádiz', 'Oviedo', 'Córdoba',
  'Murcia', 'Santander', 'Zaragoza', 'Burgos', 'Valladolid',
  'Elche', 'Bilbao', 'Barcelona', 'Gijón', 'Madrid',
  'Huelva', 'A Coruña', 'Valencia', 'Las Palmas de Gran Canaria', 'Sevilla',
].map((c) => ({ ciudad: c, cats: catsCiudad }));

export const blog = [
  { t: 'Los beneficios de un buen masaje (y por qué mereces una tarde de spa)', img: IMG.masajeAceite },
  { t: 'Cuatro trucos de cabina para cuidar la piel en otoño', img: IMG.mascarilla },
  { t: 'Depilación láser: todo lo que conviene saber antes de empezar', img: IMG.esteticaFacial },
  { t: 'Lifting de pestañas: mirada despierta sin rímel', img: IMG.maquillajeOjos },
  { t: 'Uñas semipermanentes: cuánto duran y cómo retirarlas bien', img: IMG.unasEsmalte },
  { t: 'Barba perfecta: cada cuánto pasar por la barbería', img: IMG.corteHombre },
];

export const footerLinks = [
  'Blog', 'Quiénes somos', 'Preguntas frecuentes', 'Política de privacidad',
  'Condiciones del servicio', 'Centro de confianza', 'Empleo', 'tienda.com Negocios', 'Contacto',
];
