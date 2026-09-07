const u = (id, w = 700, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  hero1: '1603189343302-e603f7add05a',
  hero2: '1574015974293-817f0ebebb74',
  hero3: '1562151270-c7d22ceb586a',
  hero4: '1596993100471-c3905dafa78e',
  hero5: '1553544260-f87e671974ee',
  megaMujer: '1538329972958-465d6d2144ed',
  megaHombre: '1618886614638-80e3c103d31a',
  megaZapatos: '1596702874230-b5706dfb5bc7',
  megaBolsos: '1584917865442-de89df76afd3',
  p1: '1613915617430-8ab0fd7c6baf',
  p2: '1549298222-1c31e8915347',
  p3: '1591348278863-a8fb3887e2aa',
  p4: '1548036328-c9fa89d128fa',
  p5: '1617137968427-85924c800a22',
  p6: '1622497170185-5d668f816a56',
  p7: '1562692158-7e4cbe83716f',
  p8: '1618274158638-41d9f8d9279d',
  p9: '1591884807537-0bce39888fe0',
  p10: '1589363358751-ab05797e5629',
  edit1: '1645996830739-8fe3df27c33f',
  edit2: '1541130292430-a832637ddc0d',
  edit3: '1604284195847-88dc4b5a9faa',
  edit4: '1664076458686-3449062080ac',
};

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const marca = { nombre: 'tienda.com' };

export const barraUtilidad = '¿Envíos fuera de Perú? Conoce nuestras opciones internacionales';

export const navPrincipal = [
  { t: 'New & Now', href: '#top-picks' },
  {
    t: 'Women',
    menu: 'women',
    sidebar: ['All Women', 'New Arrivals', "Women's Sale", 'Under S/ 400', 'Fall Essentials', 'tienda.com Made'],
    columnas: [
      { t: 'Clothing', links: ['Activewear', 'Dresses', 'Coats & Jackets', 'Jeans & Denim', 'Sweaters', 'Tops'] },
      { t: 'Dresses', links: ['Casual', 'Cocktail', 'Formal', 'Wedding Guest', 'Vacation'] },
      { t: 'Shoes', links: ['Sneakers', 'Boots', 'Heels', 'Flats', 'Sandals'] },
    ],
    banner: { t: 'End of Season', sub: 'Up to 50% off', img: u(IMG.megaMujer, 420, 560) },
  },
  {
    t: 'Men',
    menu: 'men',
    sidebar: ['All Men', 'New Arrivals', "Men's Sale", 'Under S/ 400'],
    columnas: [
      { t: 'Clothing', links: ['Suits', 'Shirts', 'Denim', 'Outerwear', 'Activewear'] },
      { t: 'Shoes', links: ['Sneakers', 'Boots', 'Dress Shoes', 'Loafers'] },
    ],
    banner: { t: 'Tailored Edit', sub: 'New arrivals', img: u(IMG.megaHombre, 420, 560) },
  },
  { t: 'Beauty', href: '#top-picks' },
  {
    t: 'Shoes',
    menu: 'shoes',
    sidebar: ['All Shoes', 'New Arrivals', 'Shoes Sale'],
    columnas: [{ t: 'Category', links: ['Sneakers', 'Boots', 'Heels', 'Flats', 'Sandals', 'Slippers'] }],
    banner: { t: 'Seasonal Icons', sub: 'Shop new styles', img: u(IMG.megaZapatos, 420, 560) },
  },
  {
    t: 'Accessories',
    menu: 'accessories',
    sidebar: ['All Accessories'],
    columnas: [{ t: 'Category', links: ['Handbags', 'Jewelry', 'Sunglasses', 'Belts', 'Scarves'] }],
    banner: { t: 'Bag Edit', sub: 'Statement pieces', img: u(IMG.megaBolsos, 420, 560) },
  },
  { t: 'Kids', href: '#top-picks' },
  { t: 'Designer', href: '#top-picks' },
  { t: 'Home', href: '#top-picks' },
  { t: 'Gifts', href: '#top-picks' },
  { t: 'Sale', href: '#top-picks', destacado: true },
  { t: 'Services', href: '#top-picks' },
];

export const heroSlides = [
  { kicker: 'End of Season', titulo: 'Clearance', sub: 'Up to 50% off top finds', cta: 'Shop All Sale', img: u(IMG.hero1, 1200, 900) },
  { kicker: 'New Season', titulo: 'Fall Arrivals', sub: 'The edit everyone is talking about', cta: 'Shop New Arrivals', img: u(IMG.hero2, 1200, 900) },
  { kicker: 'Trending', titulo: 'Color Story', sub: 'Bold hues to carry you into the new season', cta: 'Shop the Look', img: u(IMG.hero3, 1200, 900) },
  { kicker: 'Just In', titulo: 'Outerwear Edit', sub: 'Layer up with pieces that go the distance', cta: 'Shop Outerwear', img: u(IMG.hero4, 1200, 900) },
  { kicker: 'Editor’s Pick', titulo: 'Evening Hours', sub: 'Statement pieces for every occasion', cta: 'Shop Designer', img: u(IMG.hero5, 1200, 900) },
];

export const heroFiltros = ['All Sale', "Women's Sale", "Men's Sale", 'Shoes Sale'];

export const marcas = ['tienda.com Made', 'Free People', 'Something Navy', 'Vince', 'Veja', 'Madewell', 'Topshop', 'Zella'];
export const tallas = ['XS', 'S', 'M', 'L', 'XL'];
export const colores = [
  { nombre: 'Black', hex: '#171717' },
  { nombre: 'White', hex: '#f5f3ef' },
  { nombre: 'Red', hex: '#a02332' },
  { nombre: 'Navy', hex: '#22304a' },
  { nombre: 'Tan', hex: '#c9a876' },
];
export const ordenarPor = ['Featured', 'Best Sellers', 'Price: Low to High', 'Price: High to Low', 'New Arrivals'];

export const catalogo = [
  { nombre: 'Wool-Blend Tailored Coat', marca: 'tienda.com Made', precio: 649.9, img: u(IMG.p1, 500, 650), popular: true, tags: ['coat', 'outerwear', 'women'] },
  { nombre: 'Silk Slip Midi Dress', marca: 'Something Navy', precio: 389.9, img: u(IMG.p2, 500, 650), popular: false, tags: ['dress', 'silk', 'women'] },
  { nombre: 'Quilted Crossbody Bag', marca: 'Vince', precio: 799.0, antes: 950.0, img: u(IMG.p3, 500, 650), popular: true, tags: ['bag', 'handbag', 'accessories'] },
  { nombre: 'Matelassé Chain Shoulder Bag', marca: 'Free People', precio: 549.9, img: u(IMG.p4, 500, 650), popular: false, tags: ['bag', 'handbag', 'accessories'] },
  { nombre: 'Tailored Wool Suit', marca: 'Vince', precio: 1290.0, img: u(IMG.p5, 500, 650), popular: true, tags: ['suit', 'men', 'blazer'] },
  { nombre: 'Slim Fit Blazer', marca: 'Topshop', precio: 459.9, img: u(IMG.p6, 500, 650), popular: false, tags: ['blazer', 'men', 'suit'] },
  { nombre: 'Pointed Toe Leather Pump', marca: 'Veja', precio: 429.9, antes: 519.9, img: u(IMG.p7, 500, 650), popular: true, tags: ['heels', 'shoes', 'women'] },
  { nombre: 'Woven Leather Kitten Heel', marca: 'Madewell', precio: 379.9, img: u(IMG.p8, 500, 650), popular: false, tags: ['heels', 'shoes', 'women'] },
  { nombre: 'Patent Mary Jane Heel', marca: 'Zella', precio: 349.9, img: u(IMG.p9, 500, 650), popular: false, tags: ['heels', 'shoes', 'women'] },
  { nombre: 'Trench Coat & Watch Set', marca: 'tienda.com Made', precio: 899.0, img: u(IMG.p10, 500, 650), popular: true, tags: ['coat', 'accessories', 'men'] },
];

export const editorialGrid = [
  { t: 'New for Fall: Classic', sub: 'Timeless silhouettes', img: u(IMG.edit1, 700, 900) },
  { t: 'The Weekend Edit', sub: 'Off-duty essentials', img: u(IMG.edit2, 700, 900) },
  { t: 'Color of the Season', sub: 'Prints that pop', img: u(IMG.edit3, 700, 900) },
  { t: 'Evening Hours', sub: 'Statement dressing', img: u(IMG.edit4, 700, 900) },
];

export const busquedaPopular = ['dresses', 'sneakers', 'handbags', 'coats', 'jewelry'];
export const busquedaSugerencias = ['women’s dresses', 'dresses', 'dresses for wedding guest', 'cocktail dresses', 'dress shirts'];
export const busquedaCategorias = [
  { t: 'Dresses', en: 'Women / Clothing' },
  { t: 'Dress Shirts', en: 'Men / Clothing' },
  { t: 'Dress Shoes', en: 'Men / Shoes' },
  { t: 'Designer Dresses', en: 'Designer / Women' },
];

export const footerCols = [
  { t: 'Customer Care', links: ['Contact Us', 'Order Status', 'Shipping & Delivery', 'Returns & Exchanges', 'Size Guide', 'Gift Cards'] },
  { t: 'Company', links: ['About Us', 'Careers', 'Sustainability', 'tienda.com Rewards', 'Store Locations'] },
  { t: 'Resources', links: ['tienda.com App', 'Personal Stylists', 'Gift Registry', 'Corporate Gifting'] },
];
