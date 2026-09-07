const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  heroCitricos: '1583258292688-d0213dc5a3a8',
  heroVerdes: '1516594798947-e65505dbb29d',
  heroSuplementos: '1664956618021-73c47736845e',
  heroFrutosSecos: '1621470626377-dd2757ae6216',
  heroPasillo: '1604719312566-8912e9227c6a',
  catPasillo: '1557333610-90ee4a951ecf',
  catPimientos: '1568724001336-2101ca2a0d8b',
  catVerduras: '1590779033100-9f60a05a013d',
  catFrutosSecos: '1542990253-a781e04c0082',
  prodCapsulas1: '1670850757896-e1b6c3e311ea',
  prodCitricos: '1707129785947-ddc627a8bab9',
  prodCapsulas2: '1624362772755-4d5843e67047',
  prodProteina: '1559087316-6b27308e53f6',
  prodGranola: '1668723968333-28fff638eecd',
  prodRaices: '1553787434-45e1d245bfbb',
  prodVerdurasColor: '1566385101042-1a0aa0c1268c',
  prodNueces: '1621470626424-5c3f5fee3269',
  institucional: '1609842947419-ba4f04d5d60f',
};

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const marca = {
  nombre: 'tienda.com',
  sub: 'Saludable',
  tel: '934 990 745',
  correo: 'hola@tienda.com',
};

export const barraMensaje = '¡LLEGAMOS A TODO EL PERÚ! Envíos a nivel nacional.';

export const navPrincipal = [
  { t: 'Frescos', href: '#lo-nuevo' },
  { t: 'Congelados', href: '#lo-nuevo' },
  { t: 'Abarrotes', href: '#lo-nuevo' },
  { t: 'Medicina Natural', href: '#medicina-natural' },
  { t: 'Cuidado Personal', href: '#lo-nuevo' },
  { t: 'Hogar y Limpieza', href: '#lo-nuevo' },
];

export const megaMenu = [
  {
    cat: 'Abarrotes',
    grupos: [
      { t: 'Condimentos', sub: ['Hongos & Algas Secas', 'Mayonesa Mostaza Ketchup', 'Vinagres', 'Sal Marina', 'Condimentos & Especias'] },
      { t: 'Pastas & Salsas', sub: ['Salsa pesto', 'Otras salsas', 'Pastas de cereales', 'Pastas de trigo', 'Gnocchi'] },
      { t: 'Galletas & golosinas', sub: ['Galletas dulces', 'Galletas saladas', 'Golosinas', 'Galletas sin gluten', 'Galletas de arroz'] },
      { t: 'Endulzantes', sub: ['Otros endulzantes', 'Panela', 'Agave', 'Azúcar de coco', 'Stevia'] },
    ],
  },
  {
    cat: 'Frescos',
    grupos: [
      { t: 'Frutas & verduras', sub: ['Frutas de estación', 'Verduras orgánicas', 'Hierbas frescas', 'Brotes & germinados'] },
      { t: 'Lácteos', sub: ['Leches vegetales', 'Yogurt natural', 'Quesos', 'Mantequillas'] },
      { t: 'Panadería', sub: ['Panetones', 'Pan artesanal', 'Panes planos', 'Pan sin gluten'] },
    ],
  },
  {
    cat: 'Congelados',
    grupos: [
      { t: 'Pescados & mariscos', sub: ['Filetes', 'Mariscos', 'Conservas de pescado'] },
      { t: 'Vegetales congelados', sub: ['Mix de verduras', 'Frutas congeladas', 'Pulpas'] },
    ],
  },
  {
    cat: 'Medicina Natural',
    grupos: [
      { t: 'Vitaminas', sub: ['Vitamina C', 'Vitamina D', 'Complejo B', 'Multivitamínicos'] },
      { t: 'Suplementos', sub: ['Proteínas', 'Colágeno', 'Probióticos', 'Omega 3'] },
      { t: 'Hierbas & tinturas', sub: ['Adaptógenos', 'Infusiones', 'Aceites esenciales'] },
    ],
  },
  {
    cat: 'Cuidado Personal',
    grupos: [
      { t: 'Rostro & cuerpo', sub: ['Cremas naturales', 'Jabones', 'Exfoliantes'] },
      { t: 'Cabello', sub: ['Shampoo sólido', 'Aceites capilares'] },
    ],
  },
  {
    cat: 'Hogar y Limpieza',
    grupos: [
      { t: 'Limpieza eco', sub: ['Multiusos', 'Detergentes', 'Desinfectantes'] },
      { t: 'Repelentes', sub: ['Repelente natural', 'Anti insectos'] },
    ],
  },
];

export const heroSlides = [
  {
    badge: 'Nuevo',
    marca: 'tienda.com',
    titulo: 'Frescura de estación',
    highlight: '100% NATURAL',
    sub: 'Frutas y verduras seleccionadas cada semana directo del productor a tu mesa.',
    cta: 'Ver frescos',
    img: u(IMG.heroCitricos, 1200),
  },
  {
    badge: 'Nuevo',
    marca: 'tienda.com',
    titulo: 'Verde que alimenta',
    highlight: 'ORGÁNICO CERTIFICADO',
    sub: 'Hojas verdes y brotes cultivados sin pesticidas, cosechados en su punto óptimo.',
    cta: 'Descubrir',
    img: u(IMG.heroVerdes, 1200),
  },
  {
    badge: 'Destacado',
    marca: 'tienda.com',
    titulo: 'Medicina Natural',
    highlight: 'BUENO DE VERDAD',
    sub: 'Vitaminas y suplementos de marcas confiables para acompañar tu bienestar diario.',
    cta: 'Ver suplementos',
    img: u(IMG.heroSuplementos, 1200),
  },
  {
    badge: 'Nuevo',
    marca: 'tienda.com',
    titulo: 'Snacks que nutren',
    highlight: 'SIN AZÚCAR AÑADIDA',
    sub: 'Frutos secos y deshidratados, la mejor opción para tu lonchera saludable.',
    cta: 'Lo quiero',
    img: u(IMG.heroFrutosSecos, 1200),
  },
  {
    badge: 'Bienvenido',
    marca: 'tienda.com',
    titulo: 'Tu supermercado saludable',
    highlight: 'ENTREGAS A TODO EL PERÚ',
    sub: 'Miles de productos buenos de verdad, con delivery rápido donde estés.',
    cta: 'Empezar a comprar',
    img: u(IMG.heroPasillo, 1200),
  },
];

export const categoriasCirculares = [
  { t: 'Congelados', color: '#2c6c93', icon: 'pescado' },
  { t: 'Hogar y Limpieza', color: '#6fc2be', icon: 'spray' },
  { t: 'Frescos', color: '#c6304e', icon: 'verduras' },
  { t: 'Medicina Natural', color: '#0f7a5c', icon: 'mortero' },
  { t: 'Abarrotes', color: '#c49705', icon: 'despensa' },
  { t: 'Cuidado Personal', color: '#8a5fb0', icon: 'gota' },
  { t: 'Bebidas', color: '#1f7fae', icon: 'vaso' },
  { t: 'F&F Café', color: '#6b3f2a', icon: 'taza' },
];

export const loNuevo = [
  { marca: 'Nature Boost', nombre: 'Cápsulas de Omega 3 Concentrado 90cap', precio: 89.9, img: u(IMG.prodCapsulas1, 500), nuevo: true },
  { marca: 'Vita Citrus', nombre: 'Vitamina C Efervescente Naranja 20tab', precio: 24.9, img: u(IMG.prodCitricos, 500), nuevo: true },
  { marca: 'PureLab', nombre: 'Omega 3 Triple Fuerza 60cap', precio: 79.9, antes: 89.9, img: u(IMG.prodCapsulas2, 500), nuevo: true, advertencia: 'ALTO EN SODIO' },
  { marca: 'GreenFit', nombre: 'Proteína Vegetal Vainilla 500g', precio: 129.0, img: u(IMG.prodProteina, 500), nuevo: true },
  { marca: 'Granola Real', nombre: 'Granola Artesanal Miel y Nueces 400g', precio: 34.9, antes: 39.9, img: u(IMG.prodGranola, 500), nuevo: true, advertencia: 'ALTO EN AZÚCAR' },
];

export const medicinaNatural = [
  { marca: 'Raíz Andina', nombre: 'Mix de Raíces Deshidratadas 250g', precio: 27.9, img: u(IMG.prodRaices, 500), nuevo: true },
  { marca: 'Huerto Vivo', nombre: 'Vegetales Frescos de Estación 1kg', precio: 18.5, img: u(IMG.prodVerdurasColor, 500), nuevo: true },
  { marca: 'Nature Boost', nombre: 'Frutos Secos Mixtos Premium 300g', precio: 32.9, antes: 36.9, img: u(IMG.prodNueces, 500), nuevo: true },
  { marca: 'Vita Citrus', nombre: 'Multivitamínico Diario 60tab', precio: 69.9, img: u(IMG.prodCitricos, 500), nuevo: true },
  { marca: 'PureLab', nombre: 'Colágeno Hidrolizado Polvo 300g', precio: 99.0, antes: 115.0, img: u(IMG.prodCapsulas2, 500), nuevo: true },
];

export const footerCols = {
  servicioCliente: ['Preguntas frecuentes', 'Políticas de privacidad', 'Formulario de contacto', 'Términos y condiciones', 'Política de uso de datos personales'],
  institucional: ['Quiénes somos', 'Nuestras tiendas'],
};

export const institucionalImg = u(IMG.institucional, 900);
