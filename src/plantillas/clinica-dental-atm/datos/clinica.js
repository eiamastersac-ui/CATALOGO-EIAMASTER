const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  hero: '1606811811225-10635e4c9a39',
  nosotros: '1619691249147-c5689d88016b',
  fundador: '1729162128021-f37dca3ff30d',
  svMontaje: '1612736777093-461fb48101d7',
  svArticulador: '1600170311833-c2cf5280ce49',
  svCeras: '1590424753656-fc25220af381',
  svPalpacion: '1663755787934-3742b0f5983a',
  svImagenes: '1559601965-37415aa3ccfb',
  svPlan: '1619691249147-c5689d88016b',
  svCondilografia: '1612836696857-bf3d0eab59a9',
  svOrtodoncia: '1619987614890-4797e713fb03',
  svBruxismo: '1648025487763-993aa9ee7ba9',
  equipoHero: '1582380626754-bcf3185f1832',
  equipoModelos: '1600964373138-19ddd99bd553',
};

export const base = '/plantillas/clinica-dental-atm';

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Craneomandibular',
  claim: 'Cuidamos tu articulación con un enfoque funcional integral.',
  tel: '963 718 933',
  correo: 'hola@tutienda.com',
  whatsappHref: 'https://wa.me/51963718933',
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Sobre Nosotros', href: '#nosotros' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Equipos', href: '/equipos/', externo: true },
];

export const hero = {
  badge: 'Especialistas en salud dental',
  t1: 'Rehabilitación',
  t2: 'Funcional',
  sub: 'Cuidamos tu articulación con los mejores especialistas de la región.',
  img: u(IMG.hero, 1900, 1100),
};

export const nosotros = {
  kicker: 'Conoce a tu tienda.com',
  titulo: 'Sobre Nosotros',
  p1: 'Somos un centro de salud dental orientado al tratamiento de la disfunción temporomandibular mediante la ortodoncia craneomandibular, con un enfoque integral.',
  p2: 'Buscamos democratizar el conocimiento de esta condición en la comunidad y, sobre todo, devolverle la calidad de vida a quienes padecen dolor articular y merecen sonrisas realmente felices.',
  img: u(IMG.nosotros, 900, 1000),
};

export const fundador = {
  kicker: 'Nuestro fundador',
  nombre: 'Dr. Mateo Rengifo',
  cargo: 'CEO Fundador · tu tienda.com',
  bio: 'Especialista en ortodoncia y ortopedia maxilar, con formación en ortodoncia craneomandibular y disfunción de la ATM.',
  destacados: [
    { t: '+20 Años de Experiencia', icono: 'medalla' },
    { t: 'Especialista en Casos Complejos', icono: 'escudo' },
    { t: 'Atención Personalizada', icono: 'personas' },
  ],
  img: u(IMG.fundador, 800, 1000),
};

export const servicios = [
  { t: 'Montaje de oclusión', d: 'Llevamos la mordida a un simulador para obtener una visión real de cómo muerde el paciente.', img: u(IMG.svMontaje, 700, 500) },
  { t: 'Análisis en articulador', d: 'Visualizamos los problemas en la mordida y determinamos la posible corrección del tratamiento.', img: u(IMG.svArticulador, 700, 500) },
  { t: 'Oclusión con ceras', d: 'Evaluamos la mordida y los puntos de contacto entre dientes antes, durante y después.', img: u(IMG.svCeras, 700, 500) },
  { t: 'Palpación muscular', d: 'Identificamos estados iniciales de alteración y primeros indicios de disfunción témporo mandibular.', img: u(IMG.svPalpacion, 700, 500) },
  { t: 'Estudio de imágenes', d: 'Radiografía, tomografía y resonancia magnética para visualizar patologías y maloclusiones.', img: u(IMG.svImagenes, 700, 500) },
  { t: 'Plan de tratamiento', d: 'El diagnóstico funcional se realiza en cuatro sesiones siguiendo un método estandarizado.', img: u(IMG.svPlan, 700, 500) },
  { t: 'Condilografía digital', d: 'Estudio no invasivo que permite identificar cómo funciona la articulación y tratar cualquier patología.', img: u(IMG.svCondilografia, 700, 500) },
  { t: 'Ortodoncia craneomandibular', d: 'Diagnóstico funcional integral buscando la reposición de la mandíbula en infantes y adultos.', img: u(IMG.svOrtodoncia, 700, 500) },
  { t: 'Estudio del bruxismo', d: 'Evaluamos la fuerza muscular con la que se aprieta o rechina para evitar fractura de piezas dentales.', img: u(IMG.svBruxismo, 700, 500) },
];

export const testimonios = [
  { texto: 'Excelente atención, el dolor articular que tenía desapareció por completo gracias al tratamiento funcional.', autor: 'Marisol T.', rol: 'Paciente' },
  { texto: 'La palpación muscular y el estudio de imágenes me ayudaron a entender por primera vez el origen real de mi dolor.', autor: 'Dr. Renzo A.', rol: 'Odontólogo referente' },
  { texto: 'La capacitación en ortodoncia craneomandibular cambió mi perspectiva clínica por completo.', autor: 'Dra. Ana López', rol: 'Ortodoncista' },
];

export const equipos = {
  kicker: 'Tecnología de precisión',
  titulo: 'Venta de Equipos',
  sub: 'Ponemos a tu disposición tecnología de precisión para el diagnóstico y tratamiento funcional.',
  heroImg: u(IMG.equipoHero, 1900, 700),
  intro: {
    titulo: 'Condilografía',
    d1: 'Es un método no invasivo que provee un estudio funcional de los movimientos de la mandíbula del paciente, estandarizado con un sistema de coordenadas craneomandibular.',
    d2: 'Los registros de condilografía son útiles para el diagnóstico de disfunciones articulares, la planificación de prótesis y el seguimiento de tratamientos ortodóncicos complejos.',
    img: u(IMG.equipoModelos, 900, 900),
  },
};

export const footerEnlaces = [
  { t: 'Inicio', href: '#top' },
  { t: 'Sobre Nosotros', href: '#nosotros' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Equipos', href: '/equipos/' },
];
