// Datos demo de la plantilla "abogados-transito" (inspirada en trafficticketpro.com).
// Marca ficticia, sin login. Todas las imagenes son URLs de Unsplash verificadas.

export const marca = {
  nombre: 'tienda.com',
  sub: 'Tránsito',
  eslogan: 'Defensa de multas de tránsito',
  telTexto: '(702) 555-0198',
  telHref: '+17025550198',
  telOficina: '(702) 555-0120',
  correo: 'ayuda@tienda.com',
  direccion: '1212 S. Casino Center Blvd, Las Vegas, NV 89104',
  horario: 'Lunes a viernes: 8:30 AM – 4:30 PM',
};

const u = (id, w = 1600) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  heroCarretera: u('1465447142348-e9952c393450', 2000),
  ciudadTrafico: u('1449824913935-59a10b8d2000', 1800),
  librosLey: u('1423592707957-3b212afa6733', 1200),
  ladyJustice: u('1589829545856-d10d557cf95f', 1200),
  torresOficina: u('1486406146926-c627a92ad1ab', 1800),
  apreton: u('1521791136064-7986c2920216', 1200),
  firmando: u('1517048676732-d65bc937f952', 1200),
  chocaManos: u('1600880292203-757bb62b4baf', 1200),
  autoCarretera: u('1568605117036-5fe5e7bab0b7', 1200),
  corteVacia: u('1519452575417-564c1401ecc0', 1200),
  autoBlanco: u('1600661653561-629509216228', 1200),
  volanteAtardecer: u('1449965408869-eaa3f722e40d', 1200),
  abogado: u('1519085360753-af0119f7cbe7', 800),
};

export const AVATARES = [
  u('1502685104226-ee32379fefbe', 400),
  u('1487412720507-e7ab37603c6f', 400),
  u('1531123897727-8f129e1688ce', 400),
  u('1519085360753-af0119f7cbe7', 400),
  u('1494790108377-be9c29b29330', 400),
  u('1568602471122-7832951cc4c5', 400),
  u('1573497019940-1c28c88b4f3e', 400),
];

export const navPrincipal = [
  { t: 'Multas desde $24.99*', href: '#tipos-casos' },
  { t: 'Órdenes de Arresto', href: '#banner-urgente' },
  { t: 'Sobre el Equipo', href: '#por-que-elegirnos' },
  { t: 'Cobertura', href: '#cobertura' },
];

export const metodosContacto = [
  {
    icono: 'texto',
    titulo: `TXT ${'(702) 555-0198'}`,
    texto: 'Tómale fotos a tu multa y envíalas por mensaje de texto. Así de simple.',
    nota: 'MÁS RÁPIDO Y FÁCIL',
  },
  {
    icono: 'form',
    titulo: 'Formulario en línea',
    texto: 'Usa el formulario de cotización de nuestro sitio web.',
    nota: 'RÁPIDO Y FÁCIL',
  },
  {
    icono: 'correo',
    titulo: 'Envíanos un correo',
    texto: 'Escríbenos a ayuda@tienda.com con los datos de tu caso.',
    nota: 'CÓMODO',
  },
  {
    icono: 'persona',
    titulo: 'En persona',
    texto: 'Visítanos en nuestra oficina del centro de Las Vegas.',
    nota: 'CON CITA PREVIA',
  },
];

export const estadisticas = [
  { valor: 42043, decimales: 0, etiqueta: 'Casos de tránsito resueltos el último año fiscal' },
  { valor: 17920, decimales: 0, etiqueta: 'Casos resueltos en cortes municipales' },
  { valor: 98, decimales: 0, sufijo: '%', etiqueta: 'Clientes sin escuela de tráfico obligatoria' },
  { valor: 4.8, decimales: 1, etiqueta: 'Calificación promedio de clientes verificados' },
];

export const tiposCasos = [
  {
    columna: 'Infracciones comunes',
    items: [
      'Exceso de velocidad',
      'Conducción agresiva',
      'Desobedecer una señal',
      'Desobedecer un semáforo',
      'Negligente de una luz roja',
      'Negligente de una señal de alto',
    ],
  },
  {
    columna: 'Licencia y documentos',
    items: [
      'Licencia de conducir suspendida',
      'Licencia de conducir revocada',
      'Conducir con licencia suspendida',
      'No portar licencia',
      'No comprobante de seguro',
      'No registro vehicular',
    ],
  },
  {
    columna: 'Seguridad vial',
    items: [
      'No asiento de seguridad para niños',
      'No cinturón de seguridad',
      'No obedecer control de tráfico',
      'Prohibido cambiar de sentido',
      'Contenedor abierto de alcohol',
      'Conducir bajo la influencia',
    ],
  },
  {
    columna: 'Otros casos',
    items: [
      'Órdenes de arresto por tránsito',
      'Multas de tránsito pendientes de pago',
      'Violaciones de inspección vehicular',
      'Accidente de tránsito menor',
      'Pasar el autobús escolar',
      'Exposición de poder / radar',
    ],
  },
];

export const beneficios = [
  {
    titulo: 'Actualizaciones claras',
    texto:
      'Actualizamos el archivo de tu caso varias veces, con procedimientos de comunicación claros mientras avanza. No te dejamos adivinar sobre su estado.',
  },
  {
    titulo: 'Precio competitivo',
    texto:
      'Nuestras tarifas son muy competitivas en el mercado y ofrecemos promociones periódicas con descuentos para casos futuros.',
  },
  {
    titulo: 'Equipo dedicado',
    texto:
      'Con procedimientos rigurosos y personal diligente, el archivo de cada cliente se controla de manera exhaustiva de principio a fin.',
  },
];

export const cobertura = [
  { ciudad: 'Las Vegas', corte: 'Corte Municipal de Las Vegas' },
  { ciudad: 'Las Vegas', corte: 'Corte de Justicia de Las Vegas' },
  { ciudad: 'Henderson', corte: 'Corte Municipal de Henderson' },
  { ciudad: 'North Las Vegas', corte: 'Corte Municipal de North Las Vegas' },
  { ciudad: 'Laughlin', corte: 'Corte de Justicia de Laughlin' },
  { ciudad: 'Reno', corte: 'Corte de Justicia de Reno' },
  { ciudad: 'Henderson', corte: 'Metro Police Traffic Bureau' },
  { ciudad: 'Boulder City', corte: 'Corte Municipal de Boulder City' },
];

export const testimonios = [
  {
    nombre: 'Marisol Peña',
    texto:
      'Envié la foto de mi multa por texto un viernes y el lunes ya tenía mi caso en manos de un abogado. No fui a la corte ni una sola vez.',
    avatar: AVATARES[0],
  },
  {
    nombre: 'Jonathan Reyes',
    texto:
      'Tenía una orden de arresto por una multa vieja y no sabía qué hacer. Me explicaron todo el proceso y resolvieron sin que pisara la cárcel.',
    avatar: AVATARES[1],
  },
  {
    nombre: 'Carla Espinoza',
    texto:
      'El precio fue justo lo que anunciaban, sin sorpresas. Me avisaron por correo en cada paso hasta que cerraron el caso.',
    avatar: AVATARES[2],
  },
  {
    nombre: 'Diego Fuentes',
    texto:
      'No perdí puntos en mi licencia ni tuve que ir a la escuela de tráfico. El formulario en línea tomó menos de 3 minutos.',
    avatar: AVATARES[4],
  },
  {
    nombre: 'Andrea Salas',
    texto:
      'Trabajo dos empleos y no podía ir a la corte. Ellos se encargaron de todo y me devolvieron una foto de la resolución final.',
    avatar: AVATARES[6],
  },
];

export const recursos = [
  {
    imagen: IMG.autoCarretera,
    fecha: '12 de marzo, 2026',
    categoria: 'Accidentes',
    titulo: 'Qué hacer después de un accidente automovilístico',
    resumen:
      'Hasta cierto punto los accidentes son inevitables. Esta es la lista de pasos que recomienda nuestro equipo antes de hablar con el seguro.',
  },
  {
    imagen: IMG.autoBlanco,
    fecha: '28 de febrero, 2026',
    categoria: 'Preguntas frecuentes',
    titulo: 'FAQ sobre multas por exceso de velocidad',
    resumen:
      '¿Te detuvo la policía por exceso de velocidad? Reunimos las preguntas más frecuentes que recibimos a diario sobre este tipo de infracción.',
  },
  {
    imagen: IMG.corteVacia,
    fecha: '14 de febrero, 2026',
    categoria: 'Proceso legal',
    titulo: 'Qué anotar después de un accidente de tránsito',
    resumen:
      'En un mundo de celulares, el lápiz y el papel pueden parecer obsoletos. En realidad, siguen siendo la mejor prueba para tu caso.',
  },
];

export const faq = [
  {
    p: '¿Tengo que ir a la corte en persona?',
    r: 'En la mayoría de los casos no. Nuestro equipo gestiona el caso directamente con la corte correspondiente y te avisamos por correo o texto cuando quede resuelto.',
  },
  {
    p: '¿Cuánto tiempo toma resolver mi multa?',
    r: 'Depende de la corte y del tipo de infracción, pero la mayoría de los casos se procesan en 2 a 3 minutos de tu parte y el resto lo hacemos nosotros.',
  },
  {
    p: '¿Qué pasa si tengo una orden de arresto?',
    r: 'Contáctanos de inmediato. Muchas órdenes por tránsito se pueden resolver sin que pises la cárcel si actuamos rápido.',
  },
  {
    p: '¿Suben mis puntos o mi seguro?',
    r: 'En la mayoría de los casos que manejamos, nuestros clientes no reciben puntos en su licencia, no van a escuela de tráfico y no suben su tasa de seguro.',
  },
  {
    p: '¿Cuánto cuesta el servicio?',
    r: 'Los precios comienzan desde $24.99* dependiendo del tipo de infracción. Pide tu cotización gratuita y te confirmamos el monto exacto antes de empezar.',
  },
];

export const footerCols = {
  catalogo: [
    { t: 'Exceso de velocidad', href: '#tipos-casos' },
    { t: 'Licencia suspendida', href: '#tipos-casos' },
    { t: 'Órdenes de arresto', href: '#banner-urgente' },
    { t: 'Accidentes de tránsito', href: '#recursos' },
  ],
  cobertura: [
    { t: 'Cortes en Las Vegas', href: '#cobertura' },
    { t: 'Cortes en Henderson', href: '#cobertura' },
    { t: 'Cortes en North Las Vegas', href: '#cobertura' },
    { t: 'Cortes en Reno', href: '#cobertura' },
  ],
  politicas: [
    { t: 'Condiciones de Uso', href: '#' },
    { t: 'Preguntas Frecuentes (FAQ)', href: '#faq' },
    { t: 'Política de Privacidad', href: '#' },
    { t: 'Política de Reembolsos', href: '#' },
  ],
};

export const chatCanned = [
  'Gracias por escribir. Cuéntame en una frase qué tipo de multa u orden recibiste y te digo cómo podemos ayudarte.',
  'Perfecto. En la mayoría de los casos podemos empezar solo con una foto de la citación. ¿Quieres que te enviemos el enlace del formulario en línea?',
  'Listo, un asesor de tienda.com Tránsito revisará tu caso y te escribirá por correo o texto en menos de un día hábil. Esta es una demo, no se envía nada real.',
];
