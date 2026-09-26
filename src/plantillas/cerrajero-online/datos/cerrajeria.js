// Datos demo de la plantilla "cerrajero-online".
// Inspirada en cerrajeronline.com (cerrajeros en Madrid, web Divi): barra
// superior oscura, menu con desplegables, hero de foto con titulo Josefin Sans,
// textos SEO, opiniones, slider del blog, videos, 6 bloques con icono naranja,
// banda de llamada, contacto, preguntas frecuentes, newsletter y footer oscuro.
// Marca propia "tienda.com Cerrajeria" — nunca el nombre real. Sin login.

const u = (id, w = 1200, h = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

// Todas verificadas con curl (200) + contact sheet visual.
const IMG = {
  paredLlaves: '1756341782434-3020b9d17372', // pared de copias de llaves
  llavesVirgen: '1635237393049-55046279ebb8', // llaves en bruto sobre mesa oscura
  llaveEnPuerta: '1677951570313-b0750351c461', // llave puesta en la cerradura
  pomoLlave: '1563845104292-41c1b4825255', // pomo con llave
  bombin: '1685886069739-c1b96bba7953', // llaves colgando del bombin
  puertaAmarilla: '1627252009027-16321aa0777e', // manilla metalica en puerta amarilla
  caja: '1582139329536-e7284fece509', // mecanismo de cerradura de seguridad
  portal: '1607900840367-a83dcd63296d', // portal de edificio de ladrillo
  palanca: '1574588822710-475a38fe3371', // manilla sobre puerta de madera
  llaveCasa: '1560518883-ce09059eeffa', // llave con llavero de casa
  smartLock: '1558002038-1055907df827', // cerradura inteligente + movil
  portalBlanco: '1510266988780-b681a96dca2a', // puerta de portal blanca
  pomoDorado: '1734094151911-803ee718a921', // pomo dorado en puerta blanca
  llaveGris: '1562770584-eaf50b017307', // llave de seguridad sobre fondo oscuro
  llaveOscura: '1634979149798-e9a118734e93', // llave sobre fondo azul noche
  manillaForja: '1583041398200-09b2205f6cf0', // manilla de forja en puerta de madera
  candadoPuerta: '1614797091730-e2a6121aaa60', // candado de laton en puerta
  candadoAzul: '1588689653688-9b312cd6bc2b', // candado en puerta azul
  cerrojo: '1586864387634-2f33030dab41', // cerrojo con candado
  cadena: '1584105154398-99080f81b8ee', // cadena en puerta de madera
  puertaMadera: '1536160885591-301854e2ed04', // puerta de madera 4 paneles
  llaveCadena: '1609770231080-e321deccc34c', // llave en cerradura con sombra
  llavesAntiguas: '1550527882-b71dea5f8089', // llaves antiguas
  cierre: '1583147247241-300cf7acf42a', // cierre metalico en puerta
  puertaAzul: '1629999400001-5e666f0754d9', // puerta de madera en fachada azul
  puertaPatio: '1575099822401-c02b3ce6433e', // puerta de madera en muro
};

export const marca = {
  nombre: 'tienda.com',
  sub: 'Cerrajería',
  tel: '91 000 00 00',
  telCrudo: '910000000',
  correo: 'info@tienda.com',
  direccion: 'Calle Ejemplo 4, Nave 7 · 28909 Getafe, Madrid',
  horario: 'Lunes a viernes · 9:00 a 19:30 ininterrumpido',
  horarioCorto: 'L-V 9:00 – 19:30',
};

/* --- navegacion con desplegables (replica del menu real) --- */
export const nav = [
  { t: 'Inicio', href: '#top', activo: true },
  {
    t: 'Todos los servicios',
    href: '#servicios',
    sub: [
      { t: 'Apertura de puertas', href: '#servicios' },
      { t: 'Instalación y cambio de cerraduras', href: '#servicios' },
      { t: 'Cambio de bombín', href: '#servicios' },
      { t: 'Muelles para puertas y frenos', href: '#servicios' },
      { t: 'Antibumping para cerraduras especiales', href: '#servicios' },
      { t: 'Admón. de fincas y comunidades', href: '#servicios' },
    ],
  },
  {
    t: 'Opiniones de clientes',
    href: '#opiniones',
    sub: [
      { t: 'Opiniones de nuestros clientes', href: '#opiniones' },
      { t: 'Danos tu opinión', href: '#opiniones' },
    ],
  },
  {
    t: 'Blog',
    href: '#blog',
    sub: [
      { t: 'Índice por temática', href: '#blog' },
      { t: 'Índice por fecha', href: '#blog' },
    ],
  },
  {
    t: 'Localidades',
    href: '#zonas',
    sub: [
      { t: 'Cerrajeros Getafe', href: '#zonas' },
      { t: 'Cerrajeros Rivas Vaciamadrid', href: '#zonas' },
      { t: 'Cerrajeros Alcorcón', href: '#zonas' },
      { t: 'Cerrajeros Fuenlabrada', href: '#zonas' },
      { t: 'Cerrajeros Leganés', href: '#zonas' },
      { t: 'Cerrajeros Pozuelo de Alarcón', href: '#zonas' },
      { t: 'Más localidades', href: '#zonas' },
    ],
  },
  { t: 'Contacto', href: '#contacto' },
];

export const hero = {
  img: u(IMG.paredLlaves, 2000, 1300),
  titulo: 'Los mejores cerrajeros en Madrid',
  sub: 'Todos los servicios de cerrajería para particulares, empresas y comunidades',
  datos: [
    { n: '+18', t: 'años de experiencia' },
    { n: '30 min', t: 'en urgencias' },
    { n: '6 meses', t: 'de garantía' },
  ],
};

export const intro = {
  titulo: 'Cerrajeros en todo Madrid centro y pueblos colindantes',
  texto:
    'Somos un equipo de cerrajeros en Madrid formado por profesionales con más de 18 años de experiencia. Nuestro objetivo es dar solución a cualquier problema de cerrajería que surja en su vivienda, comunidad de propietarios o empresa, dentro de Madrid capital y pueblos colindantes. Nos distinguimos por ofrecer lo que pocos en el mercado: máxima calidad, rapidez, facilidad de trato y, muy importante, los precios más razonables.',
};

export const bloquesSeo = [
  {
    id: 'urgentes',
    titulo: 'Cerrajeros urgentes en Madrid',
    img: u(IMG.palanca, 1000, 1150),
    parrafos: [
      'Contamos con una red de profesionales cerrajeros que le proporcionarán soluciones urgentes en Madrid centro y municipios cercanos. Desde los pequeños percances del día a día —apertura de puertas de urgencia, cambio de llave y cerradura— hasta cualquier servicio que pueda imaginar: instalación de puertas o ventanas, reparación de cerraduras y cierres, o asesoría de seguridad para su vivienda o comunidad.',
      'Contamos con más de quince años de experiencia y cientos de servicios realizados cada año. Nuestra política es darle el mejor servicio, con la máxima calidad y privacidad y a los precios más ajustados de Madrid.',
    ],
  },
  {
    id: 'baratos',
    titulo: 'Cerrajeros baratos en Madrid',
    img: u(IMG.llaveCasa, 1000, 1150),
    parrafos: [
      '¿Cómo encontrar buenos cerrajeros baratos en Madrid? Con una empresa seria y profesional. Combinamos calidad y rapidez con una política honesta y rigurosa: presupuestos claros por adelantado y sin cobrar desplazamientos ni visitas.',
      'Nuestro personal está cualificado para todo tipo de trabajos: desde aperturas de emergencia o cambios de cerradura hasta la instalación de puertas acorazadas o antiincendios, con la garantía de 15 años en el sector.',
    ],
  },
];

export const servicios = [
  { t: 'Apertura de puertas', d: 'Sin romper, en menos de 30 minutos en urgencias.', img: u(IMG.llaveEnPuerta, 900, 1100), tag: 'Urgente' },
  { t: 'Instalación y cambio de cerraduras', d: 'Cerraduras de sobreponer, embutir y multipunto.', img: u(IMG.pomoLlave, 900, 1100), tag: 'Hogar' },
  { t: 'Cambio de bombín', d: 'Bombines de alta seguridad antibumping y antirrotura.', img: u(IMG.bombin, 900, 1100), tag: 'Seguridad' },
  { t: 'Muelles para puertas y frenos', d: 'Cierrapuertas hidráulicos para portales y locales.', img: u(IMG.puertaAmarilla, 900, 1100), tag: 'Portales' },
  { t: 'Antibumping para cerraduras especiales', d: 'Escudos y cilindros certificados contra el bumping.', img: u(IMG.caja, 900, 1100), tag: 'Alta seguridad' },
  { t: 'Admón. de fincas y comunidades', d: 'Amaestramientos, porteros y mantenimiento de portal.', img: u(IMG.portal, 900, 1100), tag: 'Comunidades' },
];

export const opiniones = [
  { txt: 'Seriedad, amabilidad y todo tipo de explicaciones sobre el producto instalado. Recomendado al resto de vecinos y amigos.', nombre: 'Carlos C.', lugar: 'Getafe', estrellas: 5 },
  { txt: 'Me quedé fuera de casa un martes por la tarde y en media hora tenía la puerta abierta sin un rasguño. El precio, el que me dijeron por teléfono.', nombre: 'Lucía M.', lugar: 'Leganés', estrellas: 5 },
  { txt: 'Cambiaron el bombín de toda la comunidad y nos amaestraron las llaves del portal y trasteros. Muy limpios y puntuales.', nombre: 'Administración F. R.', lugar: 'Alcorcón', estrellas: 5 },
  { txt: 'Presupuesto online rápido y sin compromiso. Nos instalaron un escudo antitaladro y nos explicaron cada detalle.', nombre: 'Javier P.', lugar: 'Madrid centro', estrellas: 5 },
];

export const blog = {
  texto:
    'Conozca a fondo, incluso por dentro, los nuevos productos; lea el análisis de la situación actual de los robos y descubra artículos de interés social. Únase a los miles de seguidores y comparta sus consultas y comentarios con nosotros.',
  posts: [
    { t: 'Cerradura invisible con apertura en remoto: por fin desde el móvil', cat: 'Análisis de productos', img: u(IMG.smartLock, 1400, 800) },
    { t: 'Cerradero eléctrico temporizado: lo querrás ya en tu portal', cat: 'Análisis de productos', img: u(IMG.portalBlanco, 1400, 800) },
    { t: '¿Qué tipos de apertura de puertas utiliza un cerrajero?', cat: 'Tutoriales', img: u(IMG.pomoDorado, 1400, 800) },
    { t: 'Cilindro radial: el bombín invulnerable', cat: 'Análisis de productos', img: u(IMG.llaveGris, 1400, 800) },
    { t: 'Bombillo de seguridad SKG***: acero templado y 5 pitones', cat: 'Avisos sobre seguridad', img: u(IMG.llaveOscura, 1400, 800) },
    { t: 'Escudo antitaladro súper acorazado para su puerta', cat: 'Avisos sobre seguridad', img: u(IMG.manillaForja, 1400, 800) },
  ],
};

export const video = {
  titulo: '¿Ha visto ya nuestros vídeos?',
  texto:
    'Disponemos de videotutoriales, análisis de productos y videorreportajes. Aprenda más sobre los productos de nuestros artículos y, si se suscribe, sabrá puntualmente cada vez que publiquemos un nuevo vídeo o artículo. ¿A qué espera?',
  img: u(IMG.llavesVirgen, 1200, 700),
  rotulo: 'Cerrojo con alarma: así suena',
  duracion: '6:42',
};

// 6 bloques con icono naranja (como los "blurbs" del sitio real)
export const ventajas = [
  { icono: 'llave', t: 'Tu cerrajería en Madrid', d: 'Trabajamos para comunidades de vecinos, particulares, empresas y administraciones, en Madrid capital y pueblos colindantes: Alcorcón, Leganés, Getafe, Móstoles, Alcobendas, Las Rozas…' },
  { icono: 'euro', t: 'Precios sin competencia', d: 'No somos un servicio 24 horas: somos cerrajeros con precios razonables que trabajan con rapidez y profesionalidad. Atención inmediata ante cualquier eventualidad.' },
  { icono: 'edificio', t: 'Expertos en comunidades', d: 'Reparamos cualquier problema de su comunidad de vecinos con todas las facilidades de pago. Instalación de puertas acorazadas, blindadas y antiincendio.' },
  { icono: 'etiqueta', t: 'Cerrajería a empresas y comercio', d: 'Más de 15 años atendiendo comercios, comunidades y empresas. Si usted nos necesita, nosotros acudimos.' },
  { icono: 'candado', t: 'En cerrajería… todo', d: 'Cerrajería mecánica, apertura de puertas, cambio de bombines, muelles y frenos, igualamientos, amaestramientos, reparaciones y mejora de seguridad.' },
  { icono: 'lapiz', t: 'Presupuestos sin competencia', d: 'Presupuestos online, sin compromiso y rápidos, porque sabemos que no puede esperar. Todos nuestros trabajos tienen 6 meses de garantía.' },
];

export const cta = {
  img: u(IMG.llaveCadena, 2000, 1000),
  titulo: 'tienda.com Cerrajería',
  sub: 'El mejor servicio a una llamada',
};

export const zonas = [
  'Madrid centro', 'Getafe', 'Leganés', 'Alcorcón', 'Fuenlabrada', 'Móstoles',
  'Rivas Vaciamadrid', 'Pozuelo de Alarcón', 'Alcobendas', 'Las Rozas', 'Parla', 'Pinto',
];

export const contacto = [
  { icono: 'casa', t: 'Encuéntrenos en', d: 'Calle Ejemplo 4, Nave 7', d2: '28909 Getafe – Madrid' },
  { icono: 'telefono', t: 'Llámenos', d: 'Tlf. 91 000 00 00', d2: 'L-V 9:00 – 19:30' },
  { icono: 'sobre', t: 'Envíenos un e-mail', d: 'info@tienda.com', d2: 'Respondemos en 24 h' },
];

export const tiposTrabajo = [
  'Apertura de puerta',
  'Cambio de cerradura',
  'Cambio de bombín',
  'Muelle / freno de puerta',
  'Antibumping / escudo',
  'Comunidad de vecinos',
  'Otro',
];

export const faqs = [
  { p: '¿Qué debo hacer para obtener un presupuesto?', r: 'Solo debe llamarnos y hacer su solicitud. Nuestros operadores le indicarán qué información necesitan para elaborar el presupuesto e incluso enviarán a uno de nuestros cerrajeros para evaluar el trabajo. Por el precio no se preocupe: el presupuesto no tiene coste alguno.' },
  { p: '¿Cuándo vendrán a realizar el trabajo de cerrajería?', r: 'Una vez acepte el presupuesto le indicaremos la fecha del trabajo, mientras reunimos el material necesario. Si se trata de una urgencia no tardaremos: en menos de 30 minutos estaremos con usted.' },
  { p: '¿En qué horario trabajan?', r: 'Nuestro horario de atención es de lunes a viernes, de 9:00 a 19:30 ininterrumpido. Es un placer atender su llamada, ya sea para pedir un presupuesto, hacer una consulta o contratar nuestros servicios.' },
  { p: '¿Los siniestros los atienden el mismo día de la visita?', r: 'Hacemos todo lo posible para que así sea, porque la seguridad de su hogar o negocio es prioritaria. Si el proceso se complica, evaluamos los daños y lo solucionamos en menos de 48 horas.' },
];

export const footer = {
  sobre:
    'Años de experiencia en servicios de cerrajería para particulares, empresas y comunidades de vecinos. Calidad, rapidez, facilidad de trato y los precios más económicos del mercado.',
  servicios: [
    'Cerrajeros Madrid',
    'Apertura de puertas',
    'Cambio de bombines y llaves',
    'Instalación de cerraduras',
    'Muelles y frenos',
    'Antibumping para cerraduras especiales',
    'Administradores de fincas',
  ],
  categorias: ['Análisis de productos', 'Avisos sobre seguridad', 'Interés social', 'Ofertas mensuales', 'Tutoriales'],
  legales: ['Aviso legal', 'Política de privacidad', 'Información sobre cookies'],
  trabajos: [
    { img: u(IMG.candadoPuerta, 300, 300), alt: 'Candado en puerta de madera' },
    { img: u(IMG.cerrojo, 300, 300), alt: 'Cerrojo con candado' },
    { img: u(IMG.cadena, 300, 300), alt: 'Cadena de seguridad' },
    { img: u(IMG.puertaMadera, 300, 300), alt: 'Puerta de madera' },
    { img: u(IMG.puertaPatio, 300, 300), alt: 'Puerta de madera en muro' },
    { img: u(IMG.llavesAntiguas, 300, 300), alt: 'Llaves antiguas' },
    { img: u(IMG.cierre, 300, 300), alt: 'Cierre metálico' },
    { img: u(IMG.puertaAzul, 300, 300), alt: 'Puerta en fachada' },
    { img: u(IMG.candadoAzul, 300, 300), alt: 'Candado en puerta azul' },
  ],
};
