const u = (id, w = 640) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  heroLavado: '1557353425-6c61136de070',
  heroAgua: '1512103154942-f12b1bff1c36',
  heroRizos: '1522337360788-8b13dee7a37e',
  heroPlaya: '1616689321313-4e2eeabd5420',
  heroDucha: '1574621100236-d25b64cfd647',
  catRutina: '1591130901921-3f0652bb3915',
  catFacial: '1608979048467-6194dabc6a3d',
  catCapilar: '1610595426075-eed5a3f521ee',
  catRitual: '1580618864180-f6d7d39b8ff6',
  prodShampoo: '1631729371254-42c2892f0e6e',
  prodCrema: '1580870069867-74c57ee1bb07',
  prodSerum: '1585945037805-5fd82c2e60b1',
  prodManos: '1619451427882-6aaaded0cc61',
  prodAceite: '1552046122-03184de85e08',
  prodSet: '1608571423902-eed4a5ad8108',
  prodPaleta: '1512496015851-a90fb38ba796',
  prodNeceser: '1598528738936-c50861cc75a9',
  institucional: '1704305861425-8683b791e638',
};

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const marca = {
  nombre: 'tienda.com',
  sub: 'Cosmética',
  tel: '901 222 333',
  correo: 'hola@tienda.com',
  horario: 'Lunes a Viernes: 09:00am a 06:00pm',
};

export const barraMensajes = [
  'ENVÍOS A TODO EL PERÚ',
  'DELIVERY GRATIS POR COMPRAS DESDE S/350',
  'ENVÍO EN 24 HRS*',
  '100% PRODUCTOS ORIGINALES',
];

export const navPrincipal = [
  { t: 'Marcas', href: '#marcas' },
  { t: 'Cabello', href: '#mas-vendidos' },
  { t: 'Cuidado Facial', href: '#categorias' },
  { t: 'Cuidado Corporal', href: '#categorias' },
  { t: 'Packs & Promos', href: '#mas-vendidos' },
  { t: 'Blog', href: '#nosotros' },
];

export const megaMenu = [
  {
    cat: 'Cabello',
    sub: ['Shampoo', 'Acondicionador', 'Mascarillas', 'Aceites y sérums', 'Ampollas', 'Protectores térmicos', 'Tintes'],
  },
  {
    cat: 'Rostro',
    sub: ['Limpiadores faciales', 'Cremas hidratantes', 'Sérums', 'Contorno de ojos', 'Protector solar', 'Parches para acné'],
  },
  {
    cat: 'Cuerpo',
    sub: ['Cremas corporales', 'Exfoliantes', 'Aceites corporales', 'Fragancias', 'Autobronceadores'],
  },
  {
    cat: 'Maquillaje',
    sub: ['Base', 'Labiales', 'Paletas', 'Rubor', 'Iluminador', 'Brochas'],
  },
  {
    cat: 'Packs y promos',
    sub: ['Packs capilares', 'Packs faciales', 'Ofertas de la semana', 'Novedades'],
  },
];

export const heroSlides = [
  {
    kicker: 'Rutina completa',
    titulo: 'Todo funciona mejor en equipo',
    sub: 'Arma tu rutina capilar y aprovecha descuentos exclusivos en packs seleccionados.',
    cta: 'Quiero mi rutina',
    img: u(IMG.heroLavado, 1200),
  },
  {
    kicker: 'Hidratación',
    titulo: 'Team rizos, encuentra tu rutina',
    sub: 'Productos pensados para definir y nutrir cada tipo de rizo, de raíz a puntas.',
    cta: 'Lo quiero',
    img: u(IMG.heroAgua, 1200),
  },
  {
    kicker: 'Novedad',
    titulo: 'Reparación molecular al instante',
    sub: 'La rutina reparadora que tu cabello dañado necesita, con envío a todo el Perú.',
    cta: 'Descubre más',
    img: u(IMG.heroRizos, 1200),
  },
  {
    kicker: 'Ofertas de lanzamiento',
    titulo: 'Brillo, cuerpo y movimiento',
    sub: 'Sérums y aceites ligeros para un brillo saludable todos los días.',
    cta: 'Ver ofertas',
    img: u(IMG.heroPlaya, 1200),
  },
  {
    kicker: 'Cuidado diario',
    titulo: 'Arma el combo perfecto',
    sub: 'Combina shampoo, acondicionador y tratamiento con precio especial.',
    cta: 'Armar combo',
    img: u(IMG.heroDucha, 1200),
  },
];

export const masVendidos = [
  { nombre: "Pack Absolut Repair Molecular Shampoo 300 ml + Mascarilla 100 ml + Sérum 250 ml", precio: 309, antes: 364, tag: 'Oferta', img: u(IMG.prodShampoo, 500) },
  { nombre: 'Pack Vitamino Color Shampoo 500 ml + Acondicionador 500 ml', precio: 289, antes: 320, tag: 'Oferta', img: u(IMG.prodCrema, 500) },
  { nombre: 'Sérum Reparador Acidic Bonding Concentrate 100 ml', precio: 179, antes: 205, tag: 'Oferta', img: u(IMG.prodSerum, 500) },
  { nombre: 'Dúo Cabello Dañado Acidic Bonding Shampoo + Acondicionador 1000 ml', precio: 519.90, antes: 581, tag: 'Oferta', img: u(IMG.prodManos, 500) },
  { nombre: 'Aceite Reparador Multiusos 100 ml', precio: 99, antes: 118, tag: 'Oferta', img: u(IMG.prodAceite, 500) },
  { nombre: 'Set de Viaje Rutina Hidratante 4 piezas', precio: 149, antes: 172, tag: 'Oferta', img: u(IMG.prodSet, 500) },
  { nombre: 'Paleta de Sombras Mate Profesional', precio: 89, antes: 105, tag: 'Nuevo', img: u(IMG.prodPaleta, 500) },
  { nombre: 'Neceser Rutina Facial Completa', precio: 219, antes: 249, tag: 'Oferta', img: u(IMG.prodNeceser, 500) },
];

export const categoriasBanners = [
  { titulo: 'Reparación ahora!', sub: 'Los mejores tratamientos y rutinas reparadoras.', cta: 'Lo quiero', img: u(IMG.catRutina, 900) },
  { titulo: 'Especial rizos', sub: 'Hidratación y definición para todo tipo de rizos.', cta: 'Conoce más', img: u(IMG.catFacial, 900) },
  { titulo: 'Protectores térmicos', sub: 'Antes de la plancha o rizador. Usa tu protector.', cta: 'Ver más', img: u(IMG.catCapilar, 900) },
  { titulo: 'Colores vibrantes', sub: 'Las mejores rutinas para tu cabello teñido.', cta: 'Descubrir', img: u(IMG.catRitual, 900) },
];

export const marcasLogos = [
  'L’Oréal Professionnel', 'Redken', 'Moroccanoil', 'Olaplex', 'Wella Professionals',
  'Sebastian Professional', 'Alfaparf Milano', 'K18', 'Revlon Professional', 'b.fresh',
];

export const testimonios = [
  { texto: 'Excelente servicio de delivery, han ganado una fiel clienta. Felicitaciones.', autor: 'Marlene' },
  { texto: 'No encontraba en otras tiendas mi shampoo favorito y aquí lo encontré, me lo trajeron super rápido. ¡Gracias!', autor: 'Diana' },
  { texto: 'El test para tipo de cabello es un éxito para saber qué producto comprar. Recomendado.', autor: 'Alicia' },
];

export const textoSeo = [
  {
    t: 'tienda.com: tu tienda de productos de belleza',
    p: 'Si amas verte y sentirte bien, llegaste al lugar indicado. En tienda.com vas a encontrar todo lo que necesitas para potenciar tu estilo, con especial atención al cuidado capilar y facial. Explora ahora y arma tu rutina ideal con productos que realmente marcan la diferencia.',
  },
  {
    t: 'Descubre lo que te hace brillar',
    p: 'En tienda.com creemos que cada persona tiene una belleza única, por eso creamos una tienda de cosméticos online pensada para inspirarte y acompañarte en cada paso de tu rutina, con productos de alta calidad y una variedad enorme para que encuentres exactamente lo que buscas.',
  },
  {
    t: 'Los mejores productos para el cabello',
    p: '¿Lista para enamorarte de tu cabello todos los días? En tienda.com tenemos shampoos, tratamientos, acondicionadores y mascarillas pensados para cada tipo de melena. Solo trabajamos con marcas de calidad que realmente cuidan, nutren y transforman tu cabello desde la raíz.',
  },
];

export const footerCols = [
  { t: 'Legales', links: ['Términos y Condiciones', 'Políticas de privacidad', 'Políticas de envío', 'Política de devolución'] },
];

export const comprasRecientes = [
  { nombre: 'Milagros R.', producto: 'Pack Absolut Repair Molecular Shampoo 500 ml', tiempo: '6 días atrás · Lima, Perú' },
  { nombre: 'Iorla C.', producto: 'Sérum Acidic Bonding Concentrate 24/7 100ml', tiempo: '8 días atrás · Lima, Perú' },
  { nombre: 'Sandra P.', producto: 'Tinte Alfaparf Evolution Rubio Oscuro', tiempo: '10 días atrás · Arequipa, Perú' },
];

export const institucionalImg = u(IMG.institucional, 900);
