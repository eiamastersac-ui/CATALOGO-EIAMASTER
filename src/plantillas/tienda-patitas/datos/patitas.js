const u = (id, w = 900, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const IMG = {
  hero1: u('1740188380691-dedfd874488c', 1900, 1000),
  hero2: u('1610389959243-774ed80e22ab', 1900, 1000),
  hero3: u('1770837653554-0b8bc8f19e68', 1900, 1000),
  dogStairs: u('1595345553470-b662c332daed'),
  dogGate: u('1715794497793-9c0dd2a5488f'),
  catTree1: u('1601758065893-25c11bfa69b5'),
  catTree2: u('1759568572593-41dabc3b6029'),
  strollerFace: u('1765714550098-69cc6c6d83b7'),
  fountain: u('1765110278353-3ef4d7af67f6'),
  harness: u('1787561375245-efc541f1ee87'),
  leash: u('1622532305807-e44152333057'),
  bowlFood: u('1650453208424-bb782a8168fd'),
  sofaDog: u('1651571471018-bab81f8ca452'),
  crate: u('1618307987789-79e5930f902e'),
  litterBox: u('1727510153658-643787acb16a'),
  carrierBag: u('1774790479490-dbf0f3a7fb60'),
  catsTree3: u('1637311175624-f78cfccec706'),
  dogFlowers: u('1780133082979-dfc58d07739c'),
};

export const base = '/plantillas/tienda-patitas';

export const marca = {
  nombre: 'tienda.com',
  sub: 'Pet Shop',
  tel: '01-700 4488',
  correo: 'pedidos@tienda.com',
  whatsapp: '51987001234',
  whatsappHref: `https://wa.me/51987001234?text=${encodeURIComponent('Hola tienda.com, tengo una consulta')}`,
};

export const ticker = '¡Usa el código PRIMERACOMPRA10 y obtén 10% OFF en tu primera compra! ⚡';

export const categoriasMenu = [
  {
    cat: 'Perros',
    ico: 'perro',
    grupos: [
      { titulo: 'Por categoría', items: ['Higiene', 'Comederos y bebederos', 'Juguetes', 'Rampas', 'Protectores y asientos para autos', 'Corrales', 'Mochilas transportadoras', 'Pecheras y arneses', 'Escaleras'] },
      { titulo: 'Los más buscados', items: ['Rampa de madera', 'Escalera plegable', 'Funda para muebles', 'Puerta de seguridad', 'Barrera de seguridad retráctil', 'Coche de 3 ruedas'] },
    ],
    banners: [
      { titulo: '¡Engríe a tu mascota como se merece!', tag: 'Venta exclusiva', img: IMG.dogFlowers },
      { titulo: 'Lo mejor en accesorios', tag: '12% dscto.', img: IMG.harness },
    ],
  },
  {
    cat: 'Gatos',
    ico: 'gato',
    grupos: [
      { titulo: 'Por categoría', items: ['Higiene', 'Fuente de agua', 'Túneles', 'Transportadores', 'Protectores de muebles', 'Hamacas', 'Comederos', 'Rascadores', 'Gimnasios', 'Casas'] },
      { titulo: 'Los más buscados', items: ['Fuente básica', 'Arenero para gato', 'Rascador con pelota', 'Gimnasio de madera', 'Gimnasio completo', 'Protector de muebles'] },
    ],
    banners: [
      { titulo: '¡Engríe a tu mascota como se merece!', tag: 'Venta exclusiva', img: IMG.catTree1 },
      { titulo: 'Lo mejor en accesorios', tag: '12% dscto.', img: IMG.catsTree3 },
    ],
  },
];

export const navLinks = [
  { t: 'Todos', href: '#recomendados' },
  { t: 'Seguridad', href: '#tiles' },
  { t: 'Gimnasios', href: '#tiles' },
  { t: 'Fuentes', href: '#tiles' },
  { t: 'Rampas', href: '#tiles' },
  { t: 'Escaleras', href: '#tiles' },
  { t: 'Ofertas', href: '#ofertas', destacado: true },
  { t: 'Lo nuevo', href: '#lo-nuevo' },
];

export const heroSlides = [
  {
    kicker: 'PRIMAVERA CON PATITAS',
    titulo: '¡No esperes para engreír a tu mascota!',
    sub: 'Compra hoy y paga hasta en 6 cuotas sin intereses con tu tarjeta',
    pct: '0%',
    img: IMG.hero2,
  },
  {
    kicker: 'OFERTA RELÁMPAGO',
    titulo: 'Hasta 50% en productos seleccionados',
    sub: 'Rampas, escaleras, corrales y mucho más para tu engreído',
    pct: '50%',
    img: IMG.hero1,
  },
  {
    kicker: 'LO MEJOR EN PASEO',
    titulo: 'Coches y transportadores para toda ocasión',
    sub: 'Envío rápido y seguro a nivel nacional',
    pct: 'NEW',
    img: IMG.hero3,
  },
];

export const beneficios = [
  { ico: 'camion', titulo: 'Envío rápido y seguro', sub: 'A nivel nacional' },
  { ico: 'tienda', titulo: 'Retiro en tienda', sub: '¡Gratis!' },
  { ico: 'usuario', titulo: '+1,500 clientes felices', sub: 'Confían en nosotros' },
  { ico: 'reloj', titulo: 'Horario de atención', sub: 'Lun-Vie 9am-7pm, Sáb 9am-1pm' },
];

export const temporada = {
  kicker: 'OFERTA RELÁMPAGO',
  titulo: 'Llegó la primavera con patitas',
  sub: 'Todo el mes con hasta 50% en productos seleccionados',
  img: IMG.dogFlowers,
};

export const ofertasProductos = [
  { marca: 'Higiene', nombre: 'Collarín Inflable', precio: 22, antes: 44, dscto: '50%', img: IMG.leash, tag: 'Llega hoy' },
  { marca: 'Seguridad', nombre: 'Malla de Seguridad', precio: 42, antes: 84, dscto: '50%', img: IMG.dogGate, tag: 'Llega hoy' },
  { marca: 'Muebles', nombre: 'Protector Antiarañazos', precio: 43, antes: 86, dscto: '50%', img: IMG.sofaDog, tag: 'Llega hoy' },
  { marca: 'Muebles', nombre: 'Funda para Mueble', precio: 52.5, antes: 105, dscto: '50%', img: IMG.sofaDog, tag: 'Llega hoy' },
  { marca: 'Comederos', nombre: 'Comedero Doble Elevado', precio: 95, antes: 190, dscto: '50%', img: IMG.bowlFood, tag: 'Llega hoy' },
  { marca: 'Seguridad', nombre: 'Puerta de Seguridad', precio: 199.5, antes: 399, dscto: '50%', img: IMG.dogGate, tag: 'Envío gratis' },
  { marca: 'Escaleras', nombre: 'Escalera Plegable', precio: 178.5, antes: 357, dscto: '50%', img: IMG.dogStairs, tag: 'Llega hoy' },
  { marca: 'Corrales', nombre: 'Corral Jaula', precio: 178.5, antes: 357, dscto: '50%', img: IMG.crate, tag: 'Llega hoy' },
  { marca: 'Paseo', nombre: 'Coche de 3 Ruedas', precio: 262.5, antes: 525, dscto: '50%', img: IMG.strollerFace, tag: 'Llega hoy' },
  { marca: 'Gimnasios', nombre: 'Gimnasio 5 Niveles', precio: 263, antes: 526, dscto: '50%', img: IMG.catTree1, tag: 'Envío gratis' },
];

export const categoriasAnimal = [
  { t: 'Perros', img: IMG.harness, tono: 'azul' },
  { t: 'Gatos', img: IMG.catTree2, tono: 'crema' },
  { t: 'Paseo', img: IMG.strollerFace, tono: 'rosa' },
];

export const recomendadosProductos = [
  { marca: 'Gimnasios', nombre: 'Gimnasio de Madera', precio: 367, antes: 734, dscto: '50%', img: IMG.catTree1, tag: 'Envío gratis' },
  { marca: 'Higiene', nombre: 'Caja de Arena para Gato', precio: 53, antes: 106, dscto: '50%', img: IMG.litterBox, tag: 'Llega hoy' },
  { marca: 'Dormitorio', nombre: 'Cama Elevada Básica', precio: 105, antes: 210, dscto: '50%', img: IMG.sofaDog, tag: 'Llega hoy' },
  { marca: 'Rampas', nombre: 'Rampa de Madera', precio: 231, antes: 462, dscto: '50%', img: IMG.dogStairs, tag: 'Envío gratis' },
  { marca: 'Fuentes', nombre: 'Fuente Básica', precio: 63, antes: 126, dscto: '50%', img: IMG.fountain, tag: 'Llega hoy' },
  { marca: 'Transportes', nombre: 'Maletín para Viaje', precio: 126, antes: 252, dscto: '50%', img: IMG.carrierBag, tag: 'Llega hoy' },
  { marca: 'Transportes', nombre: 'Funda Premium', precio: 105, antes: 210, dscto: '50%', img: IMG.carrierBag, tag: 'Llega hoy' },
  { marca: 'Gimnasios', nombre: 'Gimnasio XXL', precio: 419, antes: 838, dscto: '50%', img: IMG.catsTree3, tag: 'Envío gratis' },
];

export const tiles = [
  { t: 'Transportes', img: IMG.carrierBag },
  { t: 'Juguetes', img: IMG.harness },
  { t: 'Higiene', img: IMG.litterBox },
  { t: 'Rampas', img: IMG.dogStairs },
  { t: 'Dormitorio', img: IMG.sofaDog },
  { t: 'Comederos', img: IMG.bowlFood },
];

export const nuevosProductos = [
  { marca: 'Paseo', nombre: 'Portamascotas de Hombro', precio: 52.5, antes: 105, dscto: '50%', img: IMG.carrierBag, tag: 'Llega hoy' },
  { marca: 'Rampas', nombre: 'Escalera Rampa 2 en 1', precio: 273, antes: 546, dscto: '50%', img: IMG.dogStairs, tag: 'Envío gratis' },
  { marca: 'Comederos', nombre: 'Comedero Doble Elevado para Perros Grandes', precio: 158, antes: 316, dscto: '50%', img: IMG.bowlFood, tag: 'Llega hoy' },
  { marca: 'Muebles', nombre: 'Protector de Camas y Muebles', precio: 136.5, antes: 273, dscto: '50%', img: IMG.sofaDog, tag: 'Llega hoy' },
  { marca: 'Paseo', nombre: 'Arnés Táctico', precio: 94.5, antes: 189, dscto: '50%', img: IMG.harness, tag: 'Llega hoy' },
  { marca: 'Escaleras', nombre: 'Escalera de Tela 4 Escalones', precio: 231, antes: 462, dscto: '50%', img: IMG.dogStairs, tag: 'Envío gratis' },
];

export const resenas = [
  { texto: 'Me encanta la calidad de este producto, superó todas mis expectativas.', autor: 'Luis Torres', tag: 'Puerta de Seguridad', img: IMG.dogGate },
  { texto: 'Primera vez comprando aquí y todo salió perfecto. Buen precio y buena calidad.', autor: 'Mateo Barrientos', tag: 'Gimnasio XXL', img: IMG.catsTree3 },
  { texto: 'La atención fue muy amable y me ayudaron a elegir el tamaño correcto para mi perrita.', autor: 'Camila Alvarez', tag: 'Comedero Doble Elevado', img: IMG.bowlFood },
  { texto: 'Llegó rapidísimo y mi gato ya se subió a rascar apenas lo armamos.', autor: 'Renzo Salas', tag: 'Rascador Torre', img: IMG.catTree1 },
];

export const blog = [
  { fecha: 'Setiembre 29, 2025', titulo: 'Dermatitis en perros: cómo identificarla y ofrecerle alivio', extracto: '¿Tu perro se rasca sin parar? ¿Has notado que tiene enrojecimiento en la piel o...', img: IMG.sofaDog },
  { fecha: 'Setiembre 29, 2025', titulo: '¿Tu perro es hiperactivo? Descubre cómo ayudarle a calmarse', extracto: '¿Tu perro parece tener batería infinita? ¿No para de correr, saltar o morder cosas...', img: IMG.dogFlowers },
  { fecha: 'Agosto 26, 2025', titulo: 'Collar isabelino: qué es, para qué sirve y cómo elegir el adecuado', extracto: 'El famoso collar isabelino, también llamado "cono de la vergüenza", puede parecer incómodo, pero cumple...', img: IMG.leash },
];

export const seoTexto = {
  titulo: 'tienda.com Pet Shop: accesorios para mascotas en Lima y Perú',
  parrafos: [
    'En tienda.com Pet Shop nos especializamos en accesorios de calidad para tus mascotas: seguridad, gimnasios, fuentes, rampas y escaleras. Ya sea que busques algo para el hogar o para salir de paseo, tenemos lo que necesitas.',
  ],
  subsecciones: [
    { titulo: 'Seguridad para tu hogar', texto: 'Puertas y mallas de seguridad, corrales y barreras retráctiles para que tu mascota esté protegida en cada rincón de la casa.' },
    { titulo: 'Rampas y escaleras', texto: 'Ayuda a tu mascota a subir con comodidad a la cama, el auto o el sofá con nuestras rampas y escaleras plegables.' },
    { titulo: 'Gimnasios y rascadores', texto: 'La mejor variedad de gimnasios y rascadores para que tu gato tenga su propio espacio de juego y descanso.' },
    { titulo: 'Fuentes y comederos', texto: 'Fuentes de agua, comederos elevados y dobles para que tu mascota coma y beba de forma cómoda y saludable.' },
  ],
};

export const financiamiento = {
  titulo: 'Cuotas sin intereses',
  texto: 'Paga en hasta 6 cuotas sin intereses con todas las tarjetas de crédito, sin afectar tu línea.',
};

export const footerCols = {
  marca: { titulo: marca.nombre, items: ['Quiénes somos', 'Contáctanos'] },
  ayuda: { titulo: 'Ayuda', items: ['Rastrea tu pedido', 'Preguntas frecuentes', 'Política de envío', 'Política de devoluciones'] },
  categorias: { titulo: 'Categorías', items: ['Perros', 'Gatos', 'Seguridad', 'Gimnasios', 'Fuentes', 'Rampas', 'Escaleras', 'Ofertas', 'Lo nuevo'] },
  legales: { titulo: 'Legales', items: ['Política de privacidad', 'Términos y condiciones', 'T&C de cuotas sin intereses'] },
};

export const soles = (n) => 'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
