const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  hero1: '1606811841689-23dfddce3e95',
  hero2: '1588776814546-1ffcf47267a5',
  hero3: '1548382131-e0ebb1f0cdea',
  hero4: '1609840114035-3c981b782dfe',
  hero5: '1629909613654-28e377c37b09',
  intro: '1606811841689-23dfddce3e95',
  testimonio: '1651546904620-9a9bc628a1e4',
  equipo: '1588776814546-1ffcf47267a5',
  dentista1: '1622253692010-333f2da6031d',
  dentista2: '1594824476967-48c8b964273f',
  dentista3: '1612349317150-e413f6a5b16d',
  blog1: '1609840114035-3c981b782dfe',
  blog2: '1606811841689-23dfddce3e95',
  blog3: '1548382131-e0ebb1f0cdea',
  casoAntes1: '1489278353717-f64c6ee8a4d2',
  casoDespues1: '1611695434369-a8f5d76ceb7b',
  casoAntes2: '1583264277168-58ceba4b84e7',
  casoDespues2: '1623717217554-72ca676de535',
  contacto: '1629909613654-28e377c37b09',
};

export const base = '/plantillas/clinica-dental-solucion';

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Dental Care',
  claim: 'No solo vemos dientes, devolvemos sonrisas.',
  tel: '922 940 561',
  telFijo: '(01) 715 1965',
  correo: 'hola@tutienda.com',
  direccion: 'Av. La Reforma 1860, of. 306 - San Isidro, Lima Perú',
  whatsappHref: 'https://wa.me/51922940561',
};

export const redes = [
  { t: 'Instagram', icono: 'instagram', href: '#top' },
  { t: 'TikTok', icono: 'tiktok', href: '#top' },
  { t: 'Facebook', icono: 'facebook', href: '#top' },
];

export const tratamientosNav = [
  'Ortodoncia',
  'Ortopedia maxilar',
  'Prótesis Dental',
  'Endodoncia',
  'Implantes Dentales',
  'Periodoncia',
  'Estética dental',
  'Cirugía Dental',
];

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Lo que hacemos', href: '#tratamientos', dropdown: tratamientosNav.map((t) => ({ t, href: '#tratamientos' })) },
  {
    t: 'Nosotros',
    href: '#nosotros',
    dropdown: [
      { t: 'Nuestra Clínica', href: '#nosotros' },
      { t: 'Nuestros Dentistas', href: '#dentistas' },
    ],
  },
  { t: 'Casos de Éxito', href: '#casos' },
  { t: 'Blog', href: '#blog' },
];

export const hero = {
  slides: [
    {
      kicker: 'Expertos en Ortodoncia',
      emoji: '🦷',
      texto: 'Recupera tu mejor sonrisa con confianza. Nuestros ortodoncistas combinan experiencia, formación constante y dedicación para ofrecerte tratamientos efectivos y resultados que superan tus expectativas.',
      cta: '¡Quiero una evaluación!',
      img: u(IMG.hero1, 1900, 1000),
    },
    {
      kicker: 'Tecnología de vanguardia',
      emoji: '✨',
      texto: 'Confianza, tecnología y resultados garantizados. Nuestros especialistas están capacitados para ofrecerte soluciones que harán brillar tu sonrisa. ¡El cambio que buscas comienza aquí!',
      cta: '¡Agenda una cita!',
      img: u(IMG.hero2, 1900, 1000),
    },
    {
      kicker: 'Mejor clínica dental de Lima',
      emoji: '⭐',
      texto: 'Cientos de pacientes satisfechos nos respaldan. Sus reseñas positivas son el reflejo de nuestro profesionalismo, dedicación y compromiso con la excelencia en cada sonrisa que transformamos.',
      cta: '¡Quiero una cita ya!',
      img: u(IMG.hero3, 1900, 1000),
    },
    {
      kicker: 'Recupera tu dentadura',
      emoji: '😁',
      texto: 'Recupera tu sonrisa y calidad de vida. Nuestro equipo de especialistas está listo para brindarte soluciones efectivas ante la pérdida dental, devolviéndote confianza y funcionalidad.',
      cta: '¡Agenda una cita!',
      img: u(IMG.hero4, 1900, 1000),
    },
    {
      kicker: 'Infraestructura moderna',
      emoji: '👌',
      texto: 'Descubre una experiencia dental de primer nivel. Contamos con una infraestructura moderna y equipos de última generación para garantizar tu comodidad y resultados impecables.',
      cta: '¡Quiero visitarlos!',
      img: u(IMG.hero5, 1900, 1000),
    },
  ],
};

export const intro = {
  titulo: 'tu tienda.com Dental Care — Clínica Dental Especializada en Lima',
  p1: 'Ya sea que necesites una simple restauración dental o un cambio de sonrisa total, en nuestro centro especializado te proponemos opciones de tratamiento de vanguardia a cargo de destacados profesionales del Perú.',
  p2: 'tu tienda.com Dental Care está conformado por un grupo de odontólogos con una meta en común: convertirnos en la mejor clínica dental de Lima, por medio de excelencia en calidad asistencial, precios competentes y la mejor tecnología.',
  img: u(IMG.intro, 900, 1100),
};

export const tratamientos = [
  { t: 'Ortodoncia', icono: 'brackets' },
  { t: 'Brackets Linguales', icono: 'arco' },
  { t: 'Prótesis Dental', icono: 'corona' },
  { t: 'Implantes Dentales', icono: 'implante' },
  { t: 'Periodoncia', icono: 'encia' },
  { t: 'Endodoncia', icono: 'raiz' },
  { t: 'Blanqueamiento Dental', icono: 'brillo' },
  { t: 'Carillas Dentales', icono: 'carilla' },
];

export const testimonio = {
  texto: '¡No sólo vemos dientes, sino devolvemos sonrisas con función y',
  resaltado: 'belleza!',
  cta: '¡Quiero mejorar mi sonrisa!',
  img: u(IMG.testimonio, 700, 900),
};

export const resenas = {
  calificacion: 4.8,
  total: 191,
  lista: [
    { autor: 'Paola V.', fecha: '25 agosto 2026', texto: 'El doctor es un excelente profesional y sobre todo, un dentista de muchísimos años de confianza. Lo conozco desde hace tiempo y siempre resuelve mis dudas.' },
    { autor: 'Magali Q.', fecha: '20 agosto 2026', texto: 'Me encuentro muy contenta y satisfecha con el tratamiento de ortodoncia que me brindaron. Me corrigieron la mordida y el resultado superó mis expectativas.' },
    { autor: 'Patricia B.', fecha: '18 agosto 2026', texto: 'Quiero agradecer al equipo por la excelente atención, profesionalismo y dedicación que me brindaron durante todo mi tratamiento de conductos.' },
    { autor: 'Patricia S.', fecha: '17 agosto 2026', texto: 'Muy buena atención desde la recepción hasta los especialistas. Se nota el orden y la limpieza del consultorio.' },
    { autor: 'Maly R.', fecha: '4 agosto 2026', texto: 'Muy amable el equipo, con mucha paciencia, respondieron todas mis preguntas y la atención fue a la hora reservada, sin esperas.' },
    { autor: 'Fátima W.', fecha: '30 julio 2026', texto: 'Me fue súper bien en la atención. Es un equipo muy profesional y cuidadoso en el procedimiento, por lo que lo recomiendo de corazón.' },
  ],
};

export const razones = [
  {
    t: 'Dentistas EXPERTOS',
    icono: 'graduacion',
    d: 'Nos enorgullece contar con odontólogos líderes en su especialidad. Cada miembro de nuestro equipo ha sido cuidadosamente seleccionado por su impecable trayectoria, amplia experiencia y excelencia clínica comprobada.',
  },
  {
    t: '¡Paga lo justo!',
    icono: 'balanza',
    d: 'Disfruta de un tratamiento de calidad sin preocuparte por costos exorbitantes ni sorpresas desagradables. Brindamos presupuestos claros y adaptados a tus necesidades. No queremos convertir un problema dental en un problema financiero.',
  },
  {
    t: 'TODO en un solo lugar',
    icono: 'edificio',
    d: 'Contar con especialistas y tecnología en cada área de la odontología nos permite realizar todos los tratamientos bajo un mismo techo. Somos un equipo unido que trabaja con pasión para lograr los mejores resultados para ti.',
  },
];

export const dentistas = {
  p1: 'Usted es exigente al elegir a su odontólogo. Nosotros también lo somos al elegir a nuestro equipo.',
  p2: 'Cirujanos dentistas reconocidos a nivel nacional, con formación de posgrado y capacitación continua en el extranjero. Años de experiencia que se notan en cada detalle.',
  p3: 'Aquí encontrará también a los mejores ortodoncistas de Lima. Excelencia que se ve. Resultados que se sienten.',
  img: u(IMG.equipo, 900, 1100),
  cta: '¡Conozca a los mejores dentistas de Lima!',
  lista: [
    { nombre: 'Dr. Franco Medina', cargo: 'Ortodoncista', rne: 'RNE 1978', img: u(IMG.dentista1, 500, 500) },
    { nombre: 'Dra. Fátima Paredes', cargo: 'Rehabilitadora Oral', rne: 'RNE 1792', img: u(IMG.dentista2, 500, 500) },
    { nombre: 'Dr. Jorge Luna', cargo: 'Periodoncista', rne: 'RNE 1134', img: u(IMG.dentista3, 500, 500) },
  ],
};

export const casos = [
  { t: 'De la duda a la confianza', d: 'Así se siente terminar un tratamiento con nosotros.', antes: u(IMG.casoAntes1, 600, 600), despues: u(IMG.casoDespues1, 600, 600) },
  { t: 'Una sonrisa sin filtros', d: 'Pacientes reales, resultados que se notan.', antes: u(IMG.casoAntes2, 600, 600), despues: u(IMG.casoDespues2, 600, 600) },
];

export const blog = [
  { t: '¿Cuánto cuesta ponerse brackets en Perú?', fecha: '18/08/2026', img: u(IMG.blog1, 700, 500) },
  { t: '¿Primero la ortodoncia o la estética? ¿Cuál es el orden correcto?', fecha: '28/07/2026', img: u(IMG.blog2, 700, 500) },
  { t: 'Mejores clínicas dentales en Lima: cómo elegir con criterio real', fecha: '24/05/2026', img: u(IMG.blog3, 700, 500) },
];

export const faq = [
  { p: '¿Cuentan con estacionamiento vehicular para pacientes?', r: 'Sí, contamos con estacionamiento gratuito para nuestros pacientes durante su cita. Para asegurar tu espacio, te recomendamos coordinarlo previamente vía WhatsApp.' },
  { p: '¿Tienen todos los equipos para los estudios previos a la ortodoncia?', r: 'Sí, contamos con radiografías panorámicas, escáner intraoral y todo el equipamiento necesario para tu diagnóstico completo, sin necesidad de derivarte a otro centro.' },
  { p: '¿Cuál es el precio de una revisión integral dental?', r: 'La primera evaluación incluye diagnóstico, radiografía y plan de tratamiento personalizado. Escríbenos por WhatsApp y te confirmamos el costo vigente.' },
];

export const horario = { semana: 'Lunes a Viernes: 9:30 a 19:00 hrs.', sabado: 'Sábado: 09:00 a 13:00 hrs.' };

export const footerNav = ['Inicio', 'Dentistas', 'Servicios', 'Galería', 'Contacto', 'Blog', 'Sugerencias'];
