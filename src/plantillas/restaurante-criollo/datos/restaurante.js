const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  hero1: '1686836715835-65af22ea5cd4',
  hero2: '1680209667591-ff5930635a09',
  hero3: '1667388968964-4aa652df0a9b',
  fachada: '1780084635656-7415411d108d',
  interior1: '1622140739492-f82f386260b5',
  interior2: '1610963490387-0c08126eacf8',
  interior3: '1573822028151-731623cb0722',
  interior4: '1713547174010-b53fa1cc4b98',
  chefMaster: '1701878198293-d1f3641efdb3',
  chefCocina: '1709396759790-9051f0c1801a',
  fundadores: '1742890184811-f5e0bde2074a',
  platoCasa: '1757715377796-2a368ec7499e',
  platoCasa2: '1775039983787-3fe9b416c545',
  anticuchos: '1626323109252-0adb3b46692b',
  ceviche: '1601579110733-f654670d8c30',
  evento: '1601118964938-228a89955311',
  catering: '1616734755909-bb016ce64930',
  catering2: '1751810105833-001843080aa1',
  buffet: '1555244162-803834f70033',
};

export const base = '/plantillas/restaurante-criollo';

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Restaurante Criollo',
  tel: '(01) 449 1395',
  telHref: 'tel:0114491395',
  correo: 'administracion@tutienda.com',
  whatsapp: '51987001234',
  whatsappHref: `https://wa.me/51987001234?text=${encodeURIComponent('Hola tu tienda.com, quisiera hacer una consulta')}`,
};

export const nav = [
  { t: 'Nuestra Carta', href: `${base}/carta/` },
  { t: 'Te Brindamos', href: `${base}/servicios/` },
  {
    t: 'Nuestras Casas',
    dropdown: [
      { t: 'Casa Miraflores', href: `${base}/casas/#miraflores` },
      { t: 'Casa La Molina', href: `${base}/casas/#la-molina` },
    ],
  },
  { t: 'Galería', href: `${base}/galeria/` },
  { t: 'Nuestra Historia', href: `${base}/historia/` },
  { t: 'Contáctanos', href: `${base}/contacto/` },
];

export const horario = [
  { grupo: 'Lunes a Sábado', horas: '09:00 a.m. – 11:00 p.m.' },
  { grupo: 'Domingo y Feriados', horas: '09:00 a.m. – 06:00 p.m.' },
];

export const sellos = [
  { t: 'Recomendado 2021', d: 'Restaurant tu tienda.com' },
  { t: 'Restaurant Guru 2021', d: 'Reconocimiento a la sazón criolla' },
];

export const hero = {
  kicker: 'Más de una década contigo',
  titulo: 'En esta casa sí hay cariño',
  cta1: { t: 'Ver Carta', href: `${base}/carta/` },
  cta2: { t: 'Reservar Mesa', href: `${base}/reservaciones/` },
  slides: [u(IMG.hero1, 1900, 1200), u(IMG.hero2, 1900, 1200), u(IMG.hero3, 1900, 1200)],
};

export const bienvenida = {
  kicker: 'Sabor peruano en cada plato',
  titulo1: 'tu tienda.com',
  titulo2: 'Restaurante Criollo',
  parrafos: [
    'Somos un restaurante familiar con más de una década de tradición, enfocado en preservar la sazón de la gastronomía peruana en cada plato que sale de nuestra cocina.',
    'tu tienda.com es más que un restaurante, es un hogar, y lo demostramos en la calidez de nuestra atención en cada visita y en los detalles de cada receta.',
  ],
  cta: 'Leer Más',
  ctaHref: `${base}/historia/`,
  fotos: [u(IMG.interior1, 900, 1100), u(IMG.platoCasa, 900, 1100)],
};

export const platosDestacados = [
  {
    kicker: 'Plato de la casa',
    nombre: 'Arroz con Pato Norteño',
    descripcion:
      'Pato dorado a fuego lento sobre un arroz verde con culantro y un toque de chicha de jora, acompañado de zarza criolla y ají norteño.',
    img: u(IMG.platoCasa2, 1300, 1300),
  },
  {
    kicker: 'Una exquisitez',
    nombre: 'Anticuchos a la Parrilla',
    descripcion:
      'Brochetas marinadas por 24 horas en ají panca y comino, doradas al carbón y servidas con papa dorada y choclo.',
    img: u(IMG.anticuchos, 1300, 1300),
  },
];

export const serviciosTeaser = [
  { t: 'Sabor peruano en cada plato', img: u(IMG.ceviche, 700, 900) },
  { t: 'Eventos especiales', img: u(IMG.evento, 700, 900) },
  { t: 'Catering', img: u(IMG.catering, 700, 900) },
  { t: 'Buffet con reserva', img: u(IMG.buffet, 700, 900) },
];

export const delivery = {
  titulo: 'Delivery',
  texto: 'Llámanos al',
  telefonos: ['449 1395', '348 7802'],
};

export const chef = {
  kicker: 'Nuestros cocineros experimentados',
  nombre: 'Nuestra Chef Master',
  texto:
    'Artífice de nuestra amplia y variada carta, nuestra Chef Master aplicó sus conocimientos en ferias gastronómicas hasta conseguir el reconocimiento de la gente que nos visita para deleitarse con su sazón.',
  img: u(IMG.chefMaster, 900, 1150),
};

export const newsletter = {
  titulo: 'Suscríbete y recibe muchos beneficios',
  img: u(IMG.buffet, 1900, 1000),
};

export const sedes = [
  {
    id: 'miraflores',
    nombre: 'Casa Miraflores',
    direccion: 'Av. Alfredo Benavides 2392, Miraflores, Lima, Perú',
    telefono: '01 449 1395',
    correo: 'miraflores@tutienda.com',
    img: u(IMG.interior2, 1200, 900),
  },
  {
    id: 'la-molina',
    nombre: 'Casa La Molina',
    direccion: 'Av. Javier Prado Este 6326, La Molina, Lima, Perú',
    telefono: '01 348 7802',
    correo: 'molina@tutienda.com',
    img: u(IMG.interior4, 1200, 900),
  },
];

export const galeriaCategorias = ['Todos', 'Salón', 'Cocina', 'Eventos', 'Platos'];

export const galeriaFotos = [
  { cat: 'Salón', img: u(IMG.interior1, 700, 700) },
  { cat: 'Salón', img: u(IMG.interior2, 700, 700) },
  { cat: 'Salón', img: u(IMG.interior3, 700, 700) },
  { cat: 'Salón', img: u(IMG.interior4, 700, 700) },
  { cat: 'Salón', img: u(IMG.fachada, 700, 700) },
  { cat: 'Cocina', img: u(IMG.chefCocina, 700, 700) },
  { cat: 'Cocina', img: u(IMG.chefMaster, 700, 700) },
  { cat: 'Eventos', img: u(IMG.evento, 700, 700) },
  { cat: 'Eventos', img: u(IMG.catering, 700, 700) },
  { cat: 'Eventos', img: u(IMG.catering2, 700, 700) },
  { cat: 'Platos', img: u(IMG.platoCasa, 700, 700) },
  { cat: 'Platos', img: u(IMG.platoCasa2, 700, 700) },
  { cat: 'Platos', img: u(IMG.anticuchos, 700, 700) },
  { cat: 'Platos', img: u(IMG.ceviche, 700, 700) },
  { cat: 'Platos', img: u(IMG.buffet, 700, 700) },
];

export const serviciosDetalle = [
  {
    t: 'Sabor peruano en cada plato',
    texto:
      '¿Sabes qué obtienes al juntar una gran calidad de insumos, una impecable trayectoria y un equipo con talento en la gastronomía liderado por una Chef Master? No te lo podemos describir, pero sí te invitamos a nuestra casa para que tú mismo disfrutes la respuesta.',
    imgs: [u(IMG.interior1, 800, 560), u(IMG.chefMaster, 800, 560)],
  },
  {
    t: 'Eventos especiales',
    texto:
      'A lo largo de más de una década hemos formado parte de los mejores momentos de nuestros clientes, ello promueve la recordación y la fidelización. Desde reuniones familiares por cumpleaños hasta cierres de negocios, estuvimos juntos en todo momento y seguiremos estando para todos.',
    imgs: [u(IMG.evento, 800, 560)],
  },
  {
    t: 'Catering',
    texto:
      'Preservamos nuestra exclusividad ofreciendo nuestro servicio de cocina en eventos reservados, llevando la misma sazón de siempre a la mesa de tu celebración.',
    imgs: [u(IMG.catering, 800, 560), u(IMG.catering2, 800, 560)],
  },
  {
    t: 'Buffet con reserva',
    texto:
      'Es importante brindar un excelente servicio personalizado. Para ello entregamos un servicio de buffet para grupos de 15 personas a más, con la misma calidad de siempre.',
    imgs: [u(IMG.buffet, 800, 560)],
  },
];

export const historia = {
  fotos: [u(IMG.fachada, 900, 700), u(IMG.interior3, 900, 700), u(IMG.fundadores, 900, 700), u(IMG.interior1, 900, 700)],
  parrafos: [
    'tu tienda.com nació hace más de una década en un pequeño local de Miraflores, con la idea de compartir la sazón de casa con quien se sentara a la mesa.',
    'Años más tarde, junto a su esposo, nuestra fundadora amplió la propuesta y consiguió el reconocimiento de la gente que asistía para deleitarse con su sazón. Así nació nuestra segunda casa, en La Molina.',
    'Hoy seguimos siendo un restaurante familiar liderado por nuestra Chef Master, el que logra ofrecer lo que apasiona y experimentar en paralelo con platos nuevos que consigan llamar la atención sin perder la originalidad de las recetas. Ejemplo de ello es el popular Arroz con Pato Norteño o el clásico Seco de Cordero al Pisco.',
  ],
  chefImg: u(IMG.chefCocina, 900, 1100),
};

export const contactoOpciones = [
  { t: 'Atención al Cliente', d: 'Consultas sobre tu visita, reservas o algún reclamo.', correo: 'atencion@tutienda.com', icono: 'mensaje' },
  { t: 'Proveedores', d: 'Coordinación de insumos y abastecimiento para nuestras casas.', correo: 'proveedores@tutienda.com', icono: 'personas' },
  { t: 'Trabaja con Nosotros', d: 'Envíanos tu CV si quieres ser parte de nuestro equipo.', correo: 'trabaja@tutienda.com', icono: 'usuario' },
];

export const carta = [
  {
    categoria: 'Entradas',
    items: [
      { nombre: 'Causa Limeña', precio: 'S/ 24', desc: 'Papa amarilla sazonada con ají amarillo, palta y pollo deshilachado.' },
      { nombre: 'Ceviche Clásico', precio: 'S/ 32', desc: 'Pescado del día en leche de tigre, cebolla morada y camote.', img: u(IMG.ceviche, 700, 500) },
      { nombre: 'Tiradito en Salsa de Ají', precio: 'S/ 30', desc: 'Finas láminas de pescado bañadas en crema de ají amarillo.' },
    ],
  },
  {
    categoria: 'Fondos',
    items: [
      { nombre: 'Arroz con Pato Norteño', precio: 'S/ 38', desc: 'Pato dorado sobre arroz verde con culantro y chicha de jora.', img: u(IMG.platoCasa2, 700, 500) },
      { nombre: 'Lomo Saltado', precio: 'S/ 34', desc: 'Lomo salteado al wok con cebolla, tomate y papas fritas.' },
      { nombre: 'Ají de Gallina', precio: 'S/ 29', desc: 'Pechuga deshilachada en crema de ají amarillo y nueces.' },
      { nombre: 'Anticuchos de Corazón', precio: 'S/ 26', desc: 'Brochetas marinadas a la parrilla con papa y choclo.', img: u(IMG.anticuchos, 700, 500) },
      { nombre: 'Seco de Cordero al Pisco', precio: 'S/ 36', desc: 'Cordero macerado en pisco y culantro, con frejoles y arroz.' },
    ],
  },
  {
    categoria: 'Postres',
    items: [
      { nombre: 'Suspiro a la Limeña', precio: 'S/ 16', desc: 'Manjar blanco con merengue al oporto.' },
      { nombre: 'Picarones con Miel de Chancaca', precio: 'S/ 15', desc: 'Aros fritos de zapallo y camote bañados en miel.' },
    ],
  },
  {
    categoria: 'Bebidas',
    items: [
      { nombre: 'Chicha Morada', precio: 'S/ 10', desc: 'Maíz morado, piña, canela y clavo de olor.' },
      { nombre: 'Pisco Sour', precio: 'S/ 22', desc: 'Pisco quebranta, limón, jarabe de goma y clara de huevo.' },
    ],
  },
];
