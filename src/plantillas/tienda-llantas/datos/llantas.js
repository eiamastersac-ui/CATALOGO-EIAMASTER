const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

/* Ids verificados con contact sheet (llantas, autos, talleres, flota).
   Hero: recorte horizontal 1920x1080. */
const IMG = {
  // Hero
  autoRojoCiudad: '1724529011363-3f7eec698142',
  aroCaliperRojo: '1616788902258-138db56fe7e5',
  vanBlancaCalle: '1641199788912-9a7385a35c82',
  camionCarretera: '1591768793355-74d04bb6608f',

  // Llantas / aros (productos)
  llantaATaro: '1601411101851-ea0e07766235',
  pilaBandaRodadura: '1571335746824-742511d49bce',
  llantaLateralOscura: '1585252522525-4f9ad48a24ea',
  bandaCloseGris: '1623706897185-32d543db92cf',
  bandaDiagonal: '1657307913178-97cb5a4d0cd7',
  llantaPerfilNegra: '1608248086047-12d70e2cd870',
  llantaSombraCoche: '1559674697-aea453b06ea9',
  aroSobrePila: '1760836395760-9831facb4754',
  aroAleacionClose: '1678119045984-2158a8f4f1f1',
  bandaVertical: '1730514782439-cd0e4b763483',
  llantaAzulOscura: '1608248068155-5795b0ac3c46',
  llantaMudATV: '1585824856765-0cab8940a879',
  aroDeportivoNegro: '1768577615397-f9916e9b2152',
  aroMultiRayos: '1623564493214-6137dff043ad',
  aroPlataAzul: '1696191543293-086df7354abe',
  llantaSolaOscura: '1702146713922-613313be011d',
  aroAutoRojo: '1717355736782-23bcd0748c7d',

  // Tipos de vehiculo
  autoNegro: '1688885387704-67df0a0c4be7',
  camionetaNegra: '1601252300554-4ad551483bd2',
  camionRojo: '1586206670130-4c6d8e646c9a',
  tractorFrente: '1618346976725-71ee4a1ecc89',

  // Taller / delivery
  tallerParedLlantas: '1786489623872-2ebdfe51297c',
  mecanicoGuantes: '1785764684037-a8483f977ff7',
  cambioLlanta: '1599082267768-4815b2ea6bd2',
  vanAbierta: '1558803116-b443d28fa878',
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Llantas',
  tel: '941 000 453',
  correo: 'ventas@tienda.com',
  horario: 'Lunes a sabado, 08:00 – 18:00',
  descripcion:
    'Neumaticos para todo vehiculo con instalacion, balanceo y servicio de taller. Importacion directa y respaldo tienda.com.',
};

export const navPrincipal = [
  { t: 'Nosotros', href: '#nosotros' },
  { t: 'Catalogo', href: '#catalogo' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Promociones', href: '#destacados' },
  { t: 'Delivery', href: '#delivery' },
  { t: 'Encuentranos', href: '#encuentranos' },
];

export const heroSlides = [
  {
    kicker: 'Llantas para cada vehiculo',
    rojo: 'Las llantas perfectas',
    blanco: 'Al mejor precio y con el mejor servicio',
    sub: 'DELIVERY e INSTALACION a TODO Lima',
    cta: 'Ver tienda online',
    href: '#catalogo',
    img: u(IMG.aroCaliperRojo, 1920) + '&h=1080',
    pos: 'center',
  },
  {
    kicker: 'Solo por tiempo limitado',
    rojo: 'Neumaticos',
    blanco: 'premium',
    sub: 'Ofertas que no puedes perder. Solo por tiempo limitado.',
    cta: 'Ver promociones',
    href: '#destacados',
    img: u(IMG.autoRojoCiudad, 1920) + '&h=1080',
    pos: 'center',
  },
  {
    kicker: 'Servicio delivery',
    rojo: 'El taller',
    blanco: 'va hasta ti',
    sub: 'Instalamos tus llantas donde estes — en toda Lima.',
    cta: 'Pedir delivery',
    href: '#delivery',
    img: u(IMG.vanBlancaCalle, 1920) + '&h=1080',
    pos: 'center',
  },
  {
    kicker: 'Servicios a empresas',
    rojo: 'Soluciones',
    blanco: 'para tu flota',
    sub: 'Neumaticos y servicios tecnicos para empresas con atencion prioritaria.',
    cta: 'Cotizar para mi empresa',
    href: '#encuentranos',
    img: u(IMG.camionCarretera, 1920) + '&h=1080',
    pos: 'center 55%',
  },
];

export const tiposVehiculo = [
  { id: 'auto', t: 'Autos', sub: 'Sedan, hatchback, coupe.', img: u(IMG.autoNegro, 700) },
  { id: 'camioneta', t: 'Camionetas', sub: 'SUV, pickup, 4x4', img: u(IMG.camionetaNegra, 700) },
  { id: 'camion', t: 'Buses y Camiones', sub: 'Carga, buses y camiones.', img: u(IMG.camionRojo, 700) },
  { id: 'maquinaria', t: 'Maquinaria', sub: 'Tractores y linea amarilla', img: u(IMG.tractorFrente, 700) },
];

/* Marcas demo (no son marcas reales). */
export const marcas = ['ROVANTA', 'KORSAN', 'TERRAMAX', 'VELTRO', 'NORTECK', 'DUNAR', 'PISTARA', 'GRANDIA'];

/*
 * Catalogo. La medida se separa en ancho / perfil / aro para el buscador.
 * tipo: auto | camioneta | camion | maquinaria
 */
export const productos = [
  { id: 1, marca: 'KORSAN', nombre: 'Korsan Dynaterra AT2 RF11', ancho: 'LT265', perfil: '65', aro: '17', tipo: 'camioneta', precio: 599, img: u(IMG.llantaATaro), destacado: true },
  { id: 2, marca: 'ROVANTA', nombre: 'Rovanta Adventure A/T 107 XL', ancho: '235', perfil: '60', aro: '18', tipo: 'camioneta', precio: 339, antes: 379, img: u(IMG.llantaMudATV), destacado: true },
  { id: 3, marca: 'KORSAN', nombre: 'Korsan Dynaterra MT2 RT05', ancho: 'LT265', perfil: '75', aro: '16', tipo: 'camioneta', precio: 639, img: u(IMG.llantaSolaOscura), destacado: true },
  { id: 4, marca: 'PISTARA', nombre: 'Pistara Scorpia ATR 112S', ancho: '265', perfil: '65', aro: '17', tipo: 'camioneta', precio: 745, img: u(IMG.llantaPerfilNegra), destacado: true },
  { id: 5, marca: 'ROVANTA', nombre: 'Rovanta Vanti Touring 91V', ancho: '195', perfil: '65', aro: '15', tipo: 'auto', precio: 189, img: u(IMG.aroAleacionClose), destacado: true },
  { id: 6, marca: 'KORSAN', nombre: 'Korsan Kinergy ST H735', ancho: '185', perfil: '60', aro: '14', tipo: 'auto', precio: 209, img: u(IMG.llantaLateralOscura), destacado: true },
  { id: 7, marca: 'ROVANTA', nombre: 'Rovanta Grand Tourer HT 100V', ancho: '235', perfil: '60', aro: '18', tipo: 'camioneta', precio: 310, img: u(IMG.aroSobrePila), destacado: true },
  { id: 8, marca: 'VELTRO', nombre: 'Veltro PowerContact 2 99V', ancho: '205', perfil: '55', aro: '16', tipo: 'auto', precio: 285, antes: 319, img: u(IMG.aroPlataAzul), destacado: true },
  { id: 9, marca: 'VELTRO', nombre: 'Veltro CrossContact ATR 103V XL', ancho: '225', perfil: '60', aro: '17', tipo: 'camioneta', precio: 469, img: u(IMG.bandaDiagonal) },
  { id: 10, marca: 'NORTECK', nombre: 'Norteck Eco Plus 82T', ancho: '175', perfil: '70', aro: '13', tipo: 'auto', precio: 149, img: u(IMG.llantaSombraCoche) },
  { id: 11, marca: 'TERRAMAX', nombre: 'Terramax Sport RS 94W', ancho: '215', perfil: '45', aro: '17', tipo: 'auto', precio: 355, img: u(IMG.aroDeportivoNegro) },
  { id: 12, marca: 'GRANDIA', nombre: 'Grandia Ultra UHP 104Y', ancho: '245', perfil: '40', aro: '19', tipo: 'auto', precio: 529, antes: 589, img: u(IMG.aroAutoRojo) },
  { id: 13, marca: 'DUNAR', nombre: 'Dunar Mud Terrain 121Q', ancho: 'LT245', perfil: '75', aro: '16', tipo: 'camioneta', precio: 559, img: u(IMG.llantaAzulOscura) },
  { id: 14, marca: 'TERRAMAX', nombre: 'Terramax HT Highway 112H', ancho: '275', perfil: '55', aro: '20', tipo: 'camioneta', precio: 689, img: u(IMG.aroMultiRayos) },
  { id: 15, marca: 'NORTECK', nombre: 'Norteck Cargo RD 152/148L', ancho: '295', perfil: '80', aro: '22.5', tipo: 'camion', precio: 1290, img: u(IMG.bandaVertical) },
  { id: 16, marca: 'DUNAR', nombre: 'Dunar Traccion DR 154/150K', ancho: '315', perfil: '80', aro: '22.5', tipo: 'camion', precio: 1450, img: u(IMG.pilaBandaRodadura) },
  { id: 17, marca: 'GRANDIA', nombre: 'Grandia Agro TR 85 R1', ancho: '420', perfil: '85', aro: '30', tipo: 'maquinaria', precio: 2890, img: u(IMG.bandaCloseGris) },
  { id: 18, marca: 'PISTARA', nombre: 'Pistara Linea Amarilla L3', ancho: '380', perfil: '70', aro: '24', tipo: 'maquinaria', precio: 2350, img: u(IMG.llantaMudATV) },
];

export const servicios = [
  { t: 'Alineamiento Computarizado', ico: 'alineamiento' },
  { t: 'Balanceo Computarizado', ico: 'balanceo' },
  { t: 'Frenos', ico: 'frenos' },
  { t: 'Suspension y Direccion', ico: 'suspension' },
  { t: 'Enllante', ico: 'enllante' },
  { t: 'Mantenimiento de Aros', ico: 'aros' },
  { t: 'Rectificacion de Discos', ico: 'discos' },
  { t: 'Diagnostico Preventivo', ico: 'diagnostico' },
  { t: 'Afinamiento', ico: 'afinamiento' },
  { t: 'Aire Acondicionado', ico: 'aire' },
  { t: 'Undercoating', ico: 'undercoating' },
  { t: 'tienda.com in House', ico: 'inhouse' },
];

export const nosotros = {
  titulo: 'Mas de 15 anos llevando las mejores llantas a Lima',
  texto:
    'Somos importadores directos de neumaticos para autos, camionetas, buses, camiones y maquinaria. En nuestras tiendas encuentras stock inmediato, asesoria tecnica y un taller equipado con tecnologia de punta para instalar, alinear y balancear tus llantas en el dia.',
  datos: [
    { n: '4', t: 'tiendas en Lima' },
    { n: '+8 000', t: 'llantas en stock' },
    { n: '24 h', t: 'delivery e instalacion' },
  ],
  img: u(IMG.tallerParedLlantas, 1100),
};

export const delivery = {
  kicker: 'En todo Lima',
  titulo: 'Servicio de Delivery',
  texto:
    'Renueva tus llantas sin salir de casa! Llevamos el taller hasta tu domicilio e instalamos tus neumaticos con un servicio completo que incluye desenllante, enllante, balanceo computarizado y plomos adhesivos. Rapido, seguro y con la calidad de tienda.com.',
  cta: 'Solicitar ahora',
  pagos: ['VISA', 'Mastercard', 'Plin', 'Yape'],
  img: u(IMG.vanAbierta, 1200),
};

export const tiendas = [
  'Av. de la Marina 3410 · San Miguel',
  'Av. de la Marina 3469 · San Miguel',
  'Av. de la Marina 3483 · San Miguel',
  'Av. Nicolas Arriola 1505 · La Victoria',
];

export const footerLegal = ['Blog y actualidad', 'Terminos y condiciones', 'Politica de privacidad', 'Clausula informativa', 'Aviso legal'];

export const chatCanned = [
  'Perfecto. Me indicas la medida de tu llanta? La encuentras en el costado del neumatico, por ejemplo 195/65 R15.',
  'Tenemos esa medida en stock en varias marcas. Incluimos instalacion y balanceo computarizado.',
  'Hacemos delivery e instalacion a domicilio en todo Lima, normalmente en menos de 24 horas.',
  'Aceptamos Visa, Mastercard, Plin y Yape. Tambien puedes pagar al recibir la instalacion.',
  'Un asesor continuara la conversacion en breve. Gracias por escribir a tienda.com Llantas!',
];

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const medida = (p) => `${p.ancho}/${p.perfil} R${p.aro}`;
