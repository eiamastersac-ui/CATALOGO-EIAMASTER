// Datos demo de la plantilla "pasteleria-cafe".
// Inspirada en dolcecapriccio.pe (pasteleria / cafeteria en Lima, WooCommerce):
// cabecera blanca con buscador pill, boton coral "Nuestras categorias" con
// desplegable, hero en banner pastel con borde redondeado y aro coral,
// carrusel "¿Que estas buscando hoy?", "Recomendados para ti" con pestanas,
// 2 banners promo, blog y footer claro con libro de reclamaciones.
// Marca propia "tienda.com Pasteleria" — nunca el nombre real. Sin login.

const u = (id, w = 800, h = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// Todas verificadas con curl (200) + contact sheet visual en el scratchpad.
const IMG = {
  // tortas enteras
  tortaBlanca: '1663447170673-2b8ca4b4e5bd', // torta blanca de crema sobre plato
  tortaDesnuda: '1704358826048-04d97dde2f96', // naked cake blanca
  tortaFrutosRojos: '1557925923-33b27f891f88', // torta blanca con frambuesas
  tortaFresasFrutas: '1608830597604-619220679440', // naked cake con fresas y frutas
  tortaChocoToppings: '1555050338-0abc773f7978', // torta de chocolate con trufas
  tortaMerengue: '1663447170676-99f1ec83931a', // torta de crema con merengue
  tortaChocoDrip: '1626263468007-a9e0cf83f1ac', // torta con drip de chocolate, fondo durazno
  tortaChocoStand: '1586985289906-406988974504', // torta de chocolate en base de torta
  tortaChocoCapas: '1606890737304-57a1ca8a5b62', // torta de chocolate de 3 pisos
  tortaChocoVela: '1605807646983-377bc5a76493', // torta de chocolate con drip
  tortaChocoAlta: '1602351447937-745cb720612f', // torta alta de chocolate y crema
  tortaChocoRebanada: '1517427294546-5aa121f68e8a', // rebanada de torta de capas
  tortaFresaCrema: '1579356094148-9b74dab60f5b', // torta de fresas y crema chantilly
  tortaFresaPie: '1611293388250-580b08c4a145', // mini torta de fresa en base verde
  tortaFresaAlta: '1609357871098-7949aa2fb20d', // torta roja de capas con fresas
  tortaFresaRebanada: '1641848421644-a1603f016f51', // rebanada de torta de fresa
  tortaRojaCapas: '1677840147140-252adb9ca347', // torta rosada con drip
  // cheesecakes
  cheeseFrambuesa: '1676300185983-d5f242babe34', // cheesecake con coulis de frambuesa
  cheeseCaramelo: '1708175313856-8573b2bf8a3a', // cheesecake con galleta
  cheeseArandanos: '1695088957420-c3b97d1f1138', // cheesecake de arandanos
  cheeseNY: '1702925614886-50ad13c88d3f', // new york cheesecake con arandanos
  cheeseVasco: '1635327173758-85badf17f995', // cheesecake horneado
  cheeseMoras: '1567171466295-4afa63d45416', // cheesecake con moras
  cheeseFresa: '1622621746668-59fb299bc4d7', // cheesecake de fresa entero
  cheeseFresaRebanada: '1578775887804-699de7086ff9', // rebanada de cheesecake de fresa
  cheeseOscuro: '1547414368-ac947d00b91d', // cheesecake con galleta de chocolate
  // rollos
  rolloCanela: '1760136874870-701b323169ed', // rollo de bizcochuelo
  rolloChoco: '1772469425825-b1b5309760d4', // rollos de chocolate y crema
  rolloDorado: '1760136874880-7747be5b8d17', // rollo dorado de mermelada
  rolloRebanadas: '1760786410563-eb89e815315a', // rebanada de rollo
  // salados
  quicheTomate: '1608855238293-a8853e7f7c98', // quiche de tomate
  quicheLorraine: '1565181782289-457ee028de39', // quiche lorraine en tartaleta
  quicheCorte: '1650844010413-3f24dc1c182b', // quiche cortado en porciones
  quicheHierbas: '1679116136154-1b621f97b31e', // quiche de hierbas
  quicheMini: '1608855725042-e95ffd4ca487', // quiche individual
  quicheSarten: '1612477491914-a2f46ef8586e', // quiche de espinaca en sarten
  quicheEsparragos: '1558371516-7f34b9dcc2a7', // pie de esparragos
  // tartas / pies
  tartaFrutos: '1620980776848-84ac10194945', // tartaletas de frutos rojos
  tartaLimon: '1519915028121-7d3463d20b13', // pie de limon con merengue
  tartaManzana: '1572383672419-ab35444a6934', // pie de manzana enrejado
  // helados
  heladoCono: '1559703248-dcaaec9fab78', // cono de helado sobre fondo celeste
  heladoConos: '1580915411954-282cb1b0d780', // conos de helado de chocolate
  heladoVainilla: '1505616485412-adfcd5561e31', // helado de vainilla en cono
  heladoChoco: '1572307230741-453859592dce', // helado de chocolate en cono
  heladoFresa: '1597041505347-26a27f87b914', // helado rosado en cono
  // cafe / local / equipo
  cafeTorta: '1598022186152-1b66e6c38245', // cafe con torta en cafeteria
  cafeLatte: '1606821466874-1e3eb48c9442', // latte art
  vitrina: '1647544301437-36acef1eff9d', // vitrina de pasteleria
  pasteleroChef: '1625489409904-324a5e9591e1', // pastelera en cocina
  pasteleroManga: '1519733870-f96bef9bc85f', // decorando con manga
  postresRosados: '1530648672449-81f6c723e2f1', // postres rosados con fresas
  tortaNavidad: '1640794334523-b299f14d28db', // torta de chocolate en ambiente festivo
};

export const img = (k, w, h) => u(IMG[k], w, h);

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const marca = {
  nombre: 'tienda.com',
  sub: 'Pastelería',
  tel: '(01) 416 0000',
  telCrudo: '+5114160000',
  whatsapp: '(+51) 900 000 000',
  correo: 'hola@tienda.com',
  razon: 'tienda.com Pastelería S.A.C.',
  ruc: '20600000000',
};

// menu principal (el sitio real enlaza a paginas; aqui son anclas)
export const nav = [
  { t: 'Inicio', href: '#top', icono: 'sol', activo: true },
  { t: 'Nosotros', href: '#blog', icono: 'corazonMenu' },
  { t: 'Tiendas', href: '#pie', icono: 'pin' },
  { t: 'Blog', href: '#blog', icono: 'globo' },
  { t: 'Carta salón', href: '#recomendados', icono: 'cubiertos' },
];

// desplegable "Nuestras categorias" (2 columnas, igual que el original)
export const categoriasMenu = [
  { t: 'Recojo en local', icono: 'bolsa', tab: 'tortas' },
  { t: 'Helados artesanales', tab: 'helados' },
  { t: 'Regalos especiales', tab: 'tortas' },
  { t: 'Tortas de chocolate', tab: 'tortas' },
  { t: 'Tortas y postres', tab: 'tortas' },
  { t: 'Pies, pasteles y tartas', tab: 'tortas' },
  { t: 'Cheesecakes', tab: 'cheesecakes' },
  { t: 'Rollos', tab: 'rollos' },
  { t: 'Pastelería salada', tab: 'salada' },
];

export const busquedasPopulares = ['torta de chocolate', 'cheesecake', 'quiche', 'lúcuma', 'fresa'];

// hero: 3 slides con banner de color pastel (mismos textos que el original)
export const heroSlides = [
  {
    kicker: '',
    titulo: 'Es hora de ese dulce que tanto te provoca',
    sub: 'Pídelo y disfruta ¡Te lo mereces!',
    cta: 'Ver productos',
    tab: 'tortas',
    fondo: 'salvia',
    img: img('tortaChocoAlta', 1100, 760),
    alt: 'Torta de chocolate con baño de ganache',
  },
  {
    kicker: 'Tu esfuerzo es valioso. ¡Ven y disfruta!',
    titulo: '¿Semana intensa? Date un gustito',
    sub: '',
    cta: 'Ver productos',
    tab: 'cheesecakes',
    fondo: 'rosa',
    img: img('tortaFresaAlta', 1100, 760),
    alt: 'Torta de capas con fresas frescas',
  },
  {
    kicker: 'Cremosos, refrescantes y llenos de sabor',
    titulo: 'El momento perfecto para un helado artesanal',
    sub: '',
    cta: 'Ver productos',
    tab: 'helados',
    fondo: 'arena',
    img: img('heladoChoco', 1100, 760),
    alt: 'Helado artesanal de chocolate en cono',
  },
];

// "¿Que estas buscando hoy?" — carrusel de 5 categorias con fondo pastel
export const categoriasHome = [
  { t: 'Tortas de chocolate', img: img('tortaChocoDrip', 600, 440), fondo: 'arena', tab: 'tortas' },
  { t: 'Cheesecakes', img: img('cheeseFresa', 600, 440), fondo: 'salvia', tab: 'cheesecakes' },
  { t: 'Pies, pasteles y tartas', img: img('tartaFrutos', 600, 440), fondo: 'rosa', tab: 'salada' },
  { t: 'Tortas y postres', img: img('tortaFresaCrema', 600, 440), fondo: 'arena', tab: 'tortas' },
  { t: 'Rollos', img: img('rolloCanela', 600, 440), fondo: 'salvia', tab: 'rollos' },
];

// pestanas de "Recomendados para ti"
export const tabs = [
  { id: 'tortas', t: 'Tortas y postres' },
  { id: 'rollos', t: 'Rollos' },
  { id: 'cheesecakes', t: 'Cheesecakes' },
  { id: 'salada', t: 'Pastelería salada' },
  { id: 'helados', t: 'Helados' },
];

// tamanos: la mayoria de tortas tiene "chica" y "grande" (rango de precio en la tarjeta)
const t2 = (a, b) => [
  { t: 'Chica (8 porciones)', p: a },
  { t: 'Grande (16 porciones)', p: b },
];
const t1 = (a, t = 'Única (10 porciones)') => [{ t, p: a }];

export const DESCUENTO = 30; // -30% en todo el catalogo, como el original

export const productos = [
  // tortas y postres
  { id: 'zanahoria', cat: 'tortas', n: 'Torta de zanahoria', img: 'tortaBlanca', tam: t2(70, 125), d: 'Bizcocho húmedo de zanahoria y nueces con frosting de queso crema.' },
  { id: 'tiramisu', cat: 'tortas', n: 'Tiramisú de la casa', img: 'tortaDesnuda', tam: t2(75, 140), d: 'Capas de bizcochuelo bañado en café, crema de mascarpone y cacao amargo.' },
  { id: 'pecanas', cat: 'tortas', n: 'Torta de pecanas', img: 'tortaChocoToppings', tam: t2(70, 120), d: 'Bizcocho de chocolate con manjar blanco y pecanas caramelizadas.' },
  { id: 'yogurt', cat: 'tortas', n: 'Torta de yogurt con frutos rojos', img: 'tortaFrutosRojos', tam: t1(115), d: 'Mousse de yogurt natural sobre base crocante con frutos rojos frescos.' },
  { id: 'bavarois', cat: 'tortas', n: 'Bavarois de chocolate con lúcuma', img: 'tortaChocoDrip', tam: t2(80, 140), d: 'Bavarois de lúcuma y chocolate semiamargo con baño de ganache.' },
  { id: 'pera', cat: 'tortas', n: 'Torta de pera', img: 'tortaMerengue', tam: t2(60, 115), d: 'Bizcocho de vainilla con peras al vino y crema chantilly.' },
  { id: 'delicia', cat: 'tortas', n: 'Delicia de fresa (chica)', img: 'tortaFresaPie', tam: t1(85, 'Chica (8 porciones)'), d: 'Bizcochuelo, crema pastelera y fresas frescas coronadas con merengue.' },
  { id: 'chirimoya', cat: 'tortas', n: 'Soufflé de chirimoya', img: 'tortaFresasFrutas', tam: t1(130), d: 'Soufflé de chirimoya entre capas de bizcochuelo y crema.' },
  { id: 'souffle-fresa', cat: 'tortas', n: 'Soufflé de fresas', img: 'tortaFresaCrema', tam: t1(130), d: 'Soufflé de fresas con crema chantilly y fresas enteras.' },
  { id: 'pasion-lucuma', cat: 'tortas', n: 'Pasión de lúcuma', img: 'tortaChocoAlta', tam: t1(130), d: 'Mousse de lúcuma sobre bizcocho de chocolate y discos de cacao.' },
  // rollos
  { id: 'rollo-fresa', cat: 'rollos', n: 'Rollo de fresas', img: 'rolloCanela', tam: t2(65, 110), d: 'Rollo de bizcochuelo con crema chantilly y fresas frescas.' },
  { id: 'rollo-chirimoya', cat: 'rollos', n: 'Rollo de chirimoya', img: 'rolloDorado', tam: t2(65, 105), d: 'Rollo relleno de crema de chirimoya.' },
  { id: 'rollo-lucuma', cat: 'rollos', n: 'Rollo de lúcuma', img: 'rolloRebanadas', tam: t2(60, 108), d: 'Rollo de vainilla relleno de crema de lúcuma y manjar.' },
  { id: 'rollo-choco', cat: 'rollos', n: 'Rollo de chocolate', img: 'rolloChoco', tam: t2(62, 110), d: 'Bizcocho de cacao enrollado con crema batida.' },
  // cheesecakes
  { id: 'cc-maracuya', cat: 'cheesecakes', n: 'Cheesecake frío de maracuyá', img: 'cheeseVasco', tam: t1(110), d: 'Cheesecake frío con coulis de maracuyá.' },
  { id: 'cc-frutos', cat: 'cheesecakes', n: 'Cheesecake frío de frutos rojos', img: 'cheeseFrambuesa', tam: t1(80, 'Chica (8 porciones)'), d: 'Cheesecake frío con salsa de frambuesa y frutos rojos.' },
  { id: 'cc-brownie', cat: 'cheesecakes', n: 'Brownie caramel New York cheesecake', img: 'cheeseCaramelo', tam: t1(145), d: 'Base de brownie, cheesecake horneado y salsa de caramelo.' },
  { id: 'cc-ny', cat: 'cheesecakes', n: 'New York style cheesecake', img: 'cheeseNY', tam: t1(160), d: 'El clásico horneado, denso y cremoso, con arándanos.' },
  { id: 'cc-arandanos', cat: 'cheesecakes', n: 'Cheesecake de arándanos', img: 'cheeseArandanos', tam: t1(150), d: 'Cheesecake horneado con compota de arándanos.' },
  { id: 'cc-oreo', cat: 'cheesecakes', n: 'Cheesecake frío de galleta', img: 'cheeseOscuro', tam: t2(75, 130), d: 'Cheesecake frío con galleta de chocolate triturada.' },
  { id: 'cc-fresas', cat: 'cheesecakes', n: 'Cheesecake frío de fresas', img: 'cheeseFresa', tam: t2(85, 140), d: 'Cheesecake frío cubierto de fresas y gelatina de fresa.' },
  // salados
  { id: 'q-rocoto', cat: 'salada', n: 'Quiche de rocoto', img: 'quicheTomate', tam: t1(80), d: 'Quiche de rocoto, queso fresco y cebolla caramelizada.' },
  { id: 'q-lorraine', cat: 'salada', n: 'Quiche lorraine chico', img: 'quicheLorraine', tam: t1(75, 'Chico (6 porciones)'), d: 'Tocino ahumado, queso gruyère y crema.' },
  { id: 'q-poro', cat: 'salada', n: 'Quiche de poro con tocino', img: 'quicheCorte', tam: t2(70, 110), d: 'Poro salteado en mantequilla y tocino crocante.' },
  { id: 'q-caprese', cat: 'salada', n: 'Quiche caprese', img: 'quicheHierbas', tam: t2(65, 105), d: 'Tomate, mozzarella y albahaca fresca.' },
  { id: 'p-choclo', cat: 'salada', n: 'Pastel de choclo con 3 quesos', img: 'quicheMini', tam: t2(85, 140), d: 'Pastel de choclo tierno con tres quesos.' },
  { id: 'p-acelga', cat: 'salada', n: 'Pastel de acelga', img: 'quicheSarten', tam: t2(80, 140), d: 'Acelga, huevo y queso en masa hojaldrada.' },
  { id: 'p-choclo-carne', cat: 'salada', n: 'Pastel de choclo con carne', img: 'quicheEsparragos', tam: t2(70, 120), d: 'Pastel de choclo relleno de carne sazonada.' },
  // helados
  { id: 'h-chocolate', cat: 'helados', n: 'Helado de chocolate', img: 'heladoChoco', tam: [{ t: '1 litro', p: 45 }, { t: '2 litros', p: 80 }], d: 'Helado artesanal de cacao peruano.' },
  { id: 'h-vainilla', cat: 'helados', n: 'Helado de vainilla', img: 'heladoVainilla', tam: [{ t: '1 litro', p: 42 }, { t: '2 litros', p: 76 }], d: 'Helado artesanal de vainilla natural.' },
  { id: 'h-fresa', cat: 'helados', n: 'Helado de fresa', img: 'heladoFresa', tam: [{ t: '1 litro', p: 42 }, { t: '2 litros', p: 76 }], d: 'Helado artesanal con fresas de temporada.' },
  { id: 'h-lucuma', cat: 'helados', n: 'Helado de lúcuma', img: 'heladoConos', tam: [{ t: '1 litro', p: 45 }, { t: '2 litros', p: 80 }], d: 'El favorito peruano, cremoso y con lúcuma de verdad.' },
  { id: 'h-menta', cat: 'helados', n: 'Helado de menta con chispas', img: 'heladoCono', tam: [{ t: '1 litro', p: 45 }, { t: '2 litros', p: 80 }], d: 'Menta fresca con chispas de chocolate.' },
];

// banners promo (2 tarjetas de color bajo el catalogo)
export const promos = [
  { titulo: 'Alegra tus días', sub: 'Con un delicioso rollo', cta: 'Ver productos', tab: 'rollos', fondo: 'arena', img: img('rolloCanela', 900, 640), alt: 'Rollo de bizcochuelo' },
  { titulo: 'Ven y disfruta', sub: 'Productos solo para recojo', cta: 'Ver productos', tab: 'tortas', fondo: 'rosa', img: img('tortaFresaAlta', 900, 640), alt: 'Torta de fresas' },
];

export const blog = [
  { t: 'Dulce amor: las novedades más románticas para San Valentín', r: 'San Valentín es la ocasión perfecta para celebrar el amor…', img: img('postresRosados', 700, 700) },
  { t: 'Celebra la magia de la Navidad con nosotros', r: 'Siempre buscamos transmitir esa esencia familiar en cada…', img: img('tortaNavidad', 700, 700) },
  { t: '24 años endulzando corazones', r: 'Nuestra historia comenzó en una pequeña esquina de Miraflores…', img: img('pasteleroChef', 700, 700) },
  { t: 'Renovamos nuestro portafolio de productos', r: 'Nuevas recetas, los mismos sabores de siempre en cada…', img: img('vitrina', 700, 700) },
];

export const footer = {
  comprobantes: ['Hasta el 29/02/2024', 'Desde el 01/03/2024'],
  informacion: ['Trabaja con nosotros', 'Cartilla de alérgenos', 'Zonas de reparto', 'Contacto'],
  politicas: ['Políticas de privacidad', 'Políticas de cookies', 'Términos y condiciones', 'Preguntas frecuentes'],
  redes: ['facebook', 'instagram', 'linkedin', 'tiktok'],
};
