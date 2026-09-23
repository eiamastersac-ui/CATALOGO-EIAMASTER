const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const IMG = {
  hero1: u('1687511844598-165c1fc387cc', 1900, 1100),
  hero2: u('1574154894072-18ba0d48321b', 1900, 1100),
  hero3: u('1618176581835-d60e9c2567b9', 1900, 1100),
  hero4: u('1632008649281-0846891f76bd', 1900, 1100),
  djBooth1: u('1777734448523-6b441c719d8d'),
  djBooth2: u('1782806959608-3f8d823335ef'),
  djWoman: u('1778318730348-e37057121b12'),
  vip1: u('1640791441879-509ba4dfdd7e'),
  vip2: u('1746734088155-9431a79d4375'),
  bottles: u('1780328344434-0bdd5d7a84da'),
  crowd1: u('1578736641330-3155e606cd40'),
  crowd2: u('1721775385137-616d59c1bd34'),
  crowd3: u('1565034400535-687aa5b5dcd6'),
  rooftop1: u('1758165532022-a68f291317ba'),
  rooftop2: u('1770021601385-af0bf0136762'),
  cocktail1: u('1564947774160-532ef016eaa6'),
  cocktail2: u('1570204865352-934c744d682c'),
  entrance: u('1772255919595-8ce4331eed5b'),
  neonSign: u('1696062985845-79f3e22f4f92'),
  hoodie: u('1677538537484-324385aff147'),
  cap: u('1521369909029-2afed882baee'),
};

export const base = '/plantillas/club-nocturno';

export const marca = {
  nombre: 'tienda.com',
  sub: 'Club',
  tel: '01-700 9911',
  correo: 'reservas@tienda.com',
  whatsapp: '51987001234',
  whatsappHref: `https://wa.me/51987001234?text=${encodeURIComponent('Hola tienda.com Club, quiero reservar una mesa')}`,
  direccion: 'Av. La Marina 890, Miraflores, Lima',
};

export const nav = [
  { t: 'Eventos', href: '#eventos' },
  { t: 'Ambientes', href: '#ambientes' },
  { t: 'DJs', href: '#djs' },
  { t: 'Tienda', href: '#tienda' },
];

export const aviso = 'Ingreso solo para mayores de 18 años · Bebe con responsabilidad';

export const heroSlides = [
  {
    kicker: 'VIERNES DE HOUSE & TECHNO',
    titulo: 'La noche empieza aquí',
    sub: 'Pista principal, terraza VIP y rooftop bajo un mismo techo.',
    img: IMG.hero1,
  },
  {
    kicker: 'SÁBADOS ANIVERSARIO',
    titulo: '12 años de fiesta ininterrumpida',
    sub: 'Line-up sorpresa, producción visual y la mejor gente de la ciudad.',
    img: IMG.hero2,
  },
  {
    kicker: 'DJ INVITADO INTERNACIONAL',
    titulo: 'Una noche, un solo escenario',
    sub: 'Sonido de punta a punta y un show que no vas a olvidar.',
    img: IMG.hero4,
  },
];

export const eventos = [
  {
    mes: 'SEP', dia: '12', diaFin: null,
    titulo: 'Techno Night: Sesión Underground',
    lugar: 'Pista Principal',
    desc: 'Una noche dedicada al techno más oscuro con line-up 100% local.',
    img: IMG.crowd1,
  },
  {
    mes: 'SEP', dia: '19', diaFin: null,
    titulo: 'Reggaetón & Perreo Night',
    lugar: 'Terraza VIP',
    desc: 'Los hits del momento con los mejores DJs urbanos de la ciudad.',
    img: IMG.vip2,
  },
  {
    mes: 'SEP', dia: '26', diaFin: '27',
    titulo: 'Aniversario 12 Años',
    lugar: 'Todo el local',
    desc: 'Dos noches de celebración con producción especial y sorpresas.',
    img: IMG.hero2,
  },
  {
    mes: 'OCT', dia: '03', diaFin: null,
    titulo: 'Rooftop Sunset Session',
    lugar: 'Rooftop Panorámico',
    desc: 'Deep house al atardecer con la mejor vista de la ciudad.',
    img: IMG.rooftop1,
  },
  {
    mes: 'OCT', dia: '31', diaFin: null,
    titulo: 'Halloween Masquerade',
    lugar: 'Todo el local',
    desc: 'Disfraz obligatorio, barra temática y decoración a otro nivel.',
    img: IMG.crowd2,
  },
];

export const presenta = {
  kicker: 'tienda.com PRESENTA',
  titulo: 'DJ Residente: Mara Sol, todos los viernes',
  texto: 'Con más de una década detrás de las cabinas, Mara Sol trae su firma de house melódico y techno progresivo a nuestra pista principal cada semana.',
  cta: 'Más información',
  img: IMG.djWoman,
};

export const ambientes = [
  { titulo: 'Pista Principal', texto: 'Sonido envolvente, láseres y el mejor line-up de la noche.', img: IMG.crowd3 },
  { titulo: 'Terraza VIP', texto: 'Mesas reservadas, servicio de botellas y vista privilegiada.', img: IMG.vip1 },
  { titulo: 'Rooftop Panorámico', texto: 'Cócteles de autor con la ciudad de fondo.', img: IMG.rooftop2 },
  { titulo: 'Barra Speakeasy', texto: 'Coctelería de autor en un ambiente íntimo y exclusivo.', img: IMG.bottles },
];

export const djs = [
  { nombre: 'Mara Sol', show: 'Residente · House Melódico', duracion: '58:12', img: IMG.djWoman, live: true },
  { nombre: 'Kael Ruiz', show: 'Residente · Techno Progresivo', duracion: '01:02:40', img: IMG.djBooth1, live: false },
  { nombre: 'Nico Andrade', show: 'Invitado · Tech House', duracion: '47:35', img: IMG.djBooth2, live: false },
  { nombre: 'Vale Cortez', show: 'Residente · Afro House', duracion: '55:03', img: IMG.crowd1, live: false },
];

export const momentos = [
  IMG.hero1, IMG.hero2, IMG.crowd1, IMG.vip1, IMG.djBooth1,
  IMG.rooftop1, IMG.bottles, IMG.crowd2, IMG.djWoman, IMG.cocktail2,
];

export const tienda = [
  { nombre: 'Hoodie tienda.com Club', precio: 'S/ 149', img: IMG.hoodie },
  { nombre: 'Gorra Bordada', precio: 'S/ 69', img: IMG.cap },
  { nombre: 'Vaso Coleccionable', precio: 'S/ 35', img: IMG.cocktail1 },
  { nombre: 'Tote Bag Oficial', precio: 'S/ 45', img: IMG.neonSign },
];

export const resenas = [
  { texto: 'El sonido y la producción no tienen nada que envidiarle a un festival. Volví el mismo fin de semana.', autor: 'Renato Q.', tag: 'Techno Night' },
  { texto: 'Reservamos la terraza VIP para un cumpleaños y la atención fue impecable de principio a fin.', autor: 'Camila F.', tag: 'Terraza VIP' },
  { texto: 'El rooftop al atardecer es otro nivel, la mejor vista de la ciudad con buena música.', autor: 'Diego M.', tag: 'Rooftop Panorámico' },
  { texto: 'Fui por primera vez al aniversario y quedé completamente sorprendido con la producción.', autor: 'Valentina S.', tag: 'Aniversario 12 Años' },
];

export const footerCols = {
  eventos: { titulo: 'Eventos', items: ['Calendario completo', 'Próximos eventos', 'Line-up', 'Aniversario'] },
  experiencias: { titulo: 'Experiencias', items: ['Pista Principal', 'Terraza VIP', 'Rooftop Panorámico', 'Barra Speakeasy'] },
  tienda: { titulo: 'Tienda', items: ['Merch oficial', 'Gorras', 'Hoodies', 'Colección aniversario'] },
  mas: { titulo: 'Más', items: ['Sobre nosotros', 'Trabaja con nosotros', 'Preguntas frecuentes', 'Libro de Reclamaciones'] },
};
