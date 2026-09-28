// Datos demo de la plantilla taller-cedea (estilo cedeamotors.com).
// Marca propia: tienda.com. Imagenes solo por URL de Unsplash (verificadas).

export const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  motorManos: '1625047509248-ec889cbff17f',
  tallerInterior: '1530046339160-ce3e530c7d2f',
  camionetaElevador: '1723099971299-3789db53604c',
  tallerBanco: '1676018366904-c083ed678e60',
  mecanicoCapo: '1504222490345-c075b6008014',
  aceiteMotor: '1487754180451-c456f719a1fc',
  camionesFlota: '1682033239487-30f076c82232',
  pistolaPintura: '1647426994723-ab685e4b8c77',
  mecanicoTrabajando: '1615906655593-ad0386982a0f',
  tabletDiagnostico: '1623682783900-fea916dcba74',
  discoFreno: '1613214150384-14921ff659b2',
  interiorVolante: '1449965408869-eaa3f722e40d',
  salaDiagnostico: '1658351354155-e854d19233e0',
  motoTaller: '1636761358757-0a616eb9e17e',
  motorAzul: '1670611154935-a4e7d12c3c00',
  manosLlaves: '1619642751034-765dfdf7c58e',
  paredLlaves: '1599256630445-67b5772b1204',
  repuestosSuspension: '1537462715879-360eeb61a0ad',
  tacometro: '1498887960847-2a5e46312788',
  cablesMotor: '1597766353939-9d782bde7a2f',
  llantaLuz: '1640503849111-824da434b2f4',
  laptopAuto: '1581091872370-1c203d690c43',
  pickupArena: '1559416523-140ddc3d238c',
  suvDesierto: '1533473359331-0135ef1b58bf',
  camionAzul: '1601584115197-04ecc0da31d7',
  camionCarretera: '1591768793355-74d04bb6608f',
};

export const img = (k, w) => u(IMG[k], w);

export const marca = {
  nombre: 'tienda.com',
  sub: 'Motors',
  lema: 'Taller mecánico multimarca',
  whatsapp: '999 000 111',
};

export const nav = [
  {
    t: 'Concesionaria',
    href: '#vehículos',
    sub: ['Venta de Camiones', 'Venta de Camionetas Pickup'],
  },
  {
    t: 'Servicios de Mantenimiento',
    href: '#servicios',
    sub: [
      'Mantenimiento Vehicular',
      'Mantenimiento Preventivo Automotriz',
      'Mantenimiento Correctivo Automotriz',
      'Mantenimiento de Flotas',
      'Taller de Planchado y Pintura',
    ],
  },
  {
    t: 'Venta de Repuestos',
    href: '#repuestos',
    sub: [
      'Repuestos Kazai',
      'Repuestos Rumix',
      'Repuestos Nordika',
      'Repuestos Vanko',
      'Repuestos Terrano',
      'Tienda de Repuestos',
    ],
  },
  { t: 'Artículos', href: '#noticias' },
  { t: 'Contáctanos', href: '#contacto' },
];

export const hero = {
  titulo: 'Taller Mecánico en Lima',
  kicker: 'Más de 20 años atendiendo personas y flotas',
  lista: [
    'Mantenimiento preventivo y correctivo',
    'Reparación de averías y reemplazo de piezas',
    'Planchado y pintura vehicular',
    'Escaneo y diagnóstico',
    'Cambio de aceite',
    'Instalación de componentes y accesorios',
    'Atendemos vehículos de todas las marcas',
    'Contamos con stock de piezas y repuestos',
    'Atención a personas y empresas',
  ],
  cta: 'Agenda tu Servicio Mecánico',
  img: img('motorManos', 2000),
};

export const intro = {
  kicker: 'tienda.com Motors',
  titulo: 'Taller Mecánico - Taller automotriz',
  parrafo:
    'tienda.com Motors, como empresa especializada en servicios automotrices, cuenta con los servicios de taller mecánico. Gracias a nuestra infraestructura avanzada y equipada logramos brindar los servicios esenciales y avanzados que el cliente más exigente pueda requerir de un taller de mecánica automotriz. En este sentido brindamos los servicios de:',
  lista: [
    'Mantenimiento vehicular y reparación automotriz',
    'Servicio de pintura y planchado vehicular',
    'Cambio de piezas y reparación de motor y sistemas internos',
    'Cambio de aceite',
    'Diagnóstico y evaluación de vehículos',
    'Instalación de componentes y accesorios',
  ],
  cierre:
    'Brindamos nuestros servicios tanto a nivel correctivo como preventivo para clientes particulares y empresas, con capacidad para atender incluso grandes flotas vehiculares. Somos un taller multimarca con garantía de atención para cualquier tipo de vehículo. Tenemos tres áreas: taller de mecánica automotriz, concesionaria y venta de repuestos vehiculares con amplio stock de repuestos originales.',
  imgs: [img('camionetaElevador', 900), img('tallerBanco', 900)],
};

export const servicios = {
  titulo: 'Servicios de nuestro taller mecánico automotriz',
  texto:
    'Como taller mecánico estamos especializados en reparación, mantenimiento correctivo y preventivo vehicular y planchado-pintura. Buscamos cubrir todo servicio necesario para el óptimo funcionamiento de cualquier vehículo. Atención personalizada para particulares y empresas con flotas.',
  fondo: img('tallerInterior', 2000),
  items: [
    { t: 'Mantenimiento Automotriz', d: 'Un programa de mantenimiento automotriz puntual evita fallas y accidentes imprevistos.', img: img('mecanicoCapo', 700) },
    { t: 'Mantenimiento Preventivo', d: 'Un enfoque preventivo reduce los riesgos de fallas mediante la evaluación de componentes críticos.', img: img('discoFreno', 700) },
    { t: 'Mantenimiento de Flotas', d: 'Servicio corporativo muy solicitado porque reduce los tiempos improductivos de cada unidad.', img: img('camionesFlota', 700) },
    { t: 'Planchado y Pintura', d: 'Más que recuperar el aspecto del vehículo, le devolvemos valor y utilidad.', img: img('pistolaPintura', 700) },
    { t: 'Reparación de Averías', d: 'Cambio de componentes o reparación de piezas en un taller totalmente equipado.', img: img('mecanicoTrabajando', 700) },
    { t: 'Escaneo y Diagnóstico', d: 'Escáneres multimarca para una evaluación exacta y profunda de tu máquina.', img: img('tabletDiagnostico', 700) },
    { t: 'Cambio de Aceite', d: 'Lubricantes de calidad acordes a la etapa de vida de tu vehículo.', img: img('aceiteMotor', 700) },
    { t: 'Instalación de Accesorios', d: 'Para comodidad o seguridad, equipamos tu carro con los accesorios que nos indiques.', img: img('interiorVolante', 700) },
  ],
};

export const confianza = {
  titulo: ['Por qué somos un ', 'taller automotriz', ' de confianza'],
  items: [
    {
      t: 'Mecánicos Certificados y Capacitados',
      d: 'En el sector automotriz el recurso humano es esencial. Por eso contamos con personal certificado y altamente capacitado que asegura un servicio de calidad, clave para resolver problemas complejos en vehículos modernos con sistemas electrónicos avanzados.',
    },
    {
      t: 'Diagnóstico Avanzado y Preciso',
      d: 'Escaneres multimarca y equipos de medición que detectan la falla real antes de cambiar una sola pieza. Te entregamos el reporte del diagnóstico.',
    },
    {
      t: 'Servicios de Mantenimiento Preventivo',
      d: 'Planes por kilometraje que se adelantan a la averia y cuidan la vida útil del motor, la caja y el sistema de frenos.',
    },
    {
      t: 'Contamos con Infraestructura y Equipos Modernos',
      d: 'Elevadores, cabina de pintura, alineadora y banco de pruebas para trabajar con seguridad cualquier tipo de unidad.',
    },
    {
      t: 'Garantía en Cada Servicio',
      d: 'Todo trabajo queda documentado y cuenta con garantía por escrito sobre mano de obra y repuestos instalados.',
    },
    {
      t: 'Usamos Repuestos de Calidad',
      d: 'Trabajamos con repuestos originales y alternativos certificados, siempre con tu aprobación previa.',
    },
    {
      t: 'Ubicación Céntrica',
      d: 'Taller, concesionaria y almacén de repuestos en la misma zona, con acceso rápido desde las principales avenidas.',
    },
  ],
  imgs: [img('salaDiagnostico', 900), img('motoTaller', 900)],
  cta: 'Ponte en Contacto',
};

export const tecnologia = {
  titulo: ['Taller mecánico', ' con alta tecnología para tu vehículo'],
  intro:
    'Nuestro taller mecánico te brinda servicio profesional de reparación, diagnóstico y mantenimiento automotriz. Los beneficios de nuestros servicios son:',
  lista: [
    'Contamos con un staff de técnicos especializados.',
    'Equipos y escáner de alta tecnología para el diagnóstico temprano.',
    'Infraestructura adecuada para cualquier trabajo.',
    'Recogemos tu vehículo y lo entregamos cuando lo necesites.',
    'Usamos piezas originales.',
    'Precios transparentes y cambios solo donde se necesita.',
  ],
  cierre: 'Confía en un taller automotriz con más de 20 años de experiencia y garantía. Estamos a tu servicio.',
  cifras: [
    { n: '20+', t: 'años de experiencia' },
    { n: '8', t: 'servicios especializados' },
    { n: '5', t: 'marcas con repuesto original' },
  ],
  fondo: img('motorAzul', 2000),
};

export const marcasAtendidas = {
  titulo: '¿Qué marcas atendemos en el taller automotriz?',
  texto:
    'Somos un taller mecánico multimarca: atendemos vehículos de todas las marcas y modelos. Sin embargo nos enfocamos en la atención de las marcas:',
  lista: ['KAZAI', 'RUMIX', 'NORDIKA', 'VANKO', 'TERRANO'],
};

export const cuando = {
  titulo: ['Cuándo debo llevar mi vehículo al ', 'taller mecánico'],
  texto:
    'Por lo general los propietarios llevan el carro al taller cuando los problemas ya son manifiestos o cuando alcanzaron el kilometraje del último mantenimiento. Siempre es bueno saber qué problemas son críticos y deben atenderse con prioridad.',
  items: [
    { t: 'Sonidos extraños en el manejo', d: 'Un sonido extraño puede ser señal de una pieza generando fricción, una autoparte rota o la falta de un elemento de sujeción. Para evitar que el problema se agrave es importante detectar la falla y corregirla con prontitud.' },
    { t: 'Recalentamiento del motor', d: 'Si la aguja de temperatura sube o aparece vapor bajo el capó, detente. Puede ser refrigerante, termostato, bomba de agua o radiador; seguir manejando puede dañar la culata.' },
    { t: 'Problemas de dirección o frenos', d: 'Vibraciones en el timón, un pedal esponjoso o que el auto se jale hacia un lado son fallas de seguridad que deben revisarse de inmediato.' },
    { t: 'Pérdida de potencia del motor', d: 'Tirones, consumo elevado o aceleración lenta suelen venir de filtros, bujías, inyectores o sensores. Un escaneo a tiempo evita reparaciones mayores.' },
  ],
  img: img('manosLlaves', 900),
  cta: 'Contacta a nuestro Taller',
};

export const riesgos = {
  titulo: ['Evita riesgos en un ', 'taller especializado en mecánica automotriz'],
  intro: 'Confiar en mecánicos especialistas te brinda una serie de beneficios para tu vehículo, entre ellos tenemos:',
  lista: [
    'Evita riesgos por falta de metodología o diagnósticos incorrectos.',
    'El uso de herramientas adecuadas permite una reparación acertada.',
    'Asegúrate con piezas de recambio de calidad.',
    'Un taller con experiencia repara tu vehículo con las mejores prácticas.',
    'Correcto ensamblado y respeto por los procedimientos.',
    'Protocolos de trabajo estrictos.',
    'Las buenas prácticas de reparación conservan el valor, integridad y buen estado del vehículo.',
  ],
  fondo: img('paredLlaves', 2000),
};

export const repuestos = {
  titulo: 'Venta de Repuestos Vehiculares',
  p1: 'Un buen servicio de reparación o mantenimiento debe acompañarse siempre de repuestos y piezas originales de alta calidad y larga vida útil. Contamos con un almacén surtido con gran cantidad de repuestos automotrices.',
  p2: 'Tenemos un área especializada en venta de repuestos para autos, con foco en las marcas Kazai, Rumix, Nordika, Vanko y Terrano.',
  p3: 'Nuestro stock va desde filtros, bujías, amortiguadores y pastillas de freno hasta kits de embrague y arrancadores. Ventas al por mayor y menor, con envios a provincias a nivel nacional.',
  categorias: ['Filtros', 'Bujías', 'Amortiguadores', 'Pastillas de freno', 'Kits de embrague', 'Arrancadores'],
  img: img('repuestosSuspension', 1000),
  cta: 'Necesitas un Repuesto',
};

export const noticias = [
  { t: '¿Qué tipos de combustible se usan en Perú?', f: 'noviembre 27, 2025', d: 'El parque automotor es diverso y por ello también lo son los combustibles que se utilizan día a día...', img: img('tacometro', 800) },
  { t: '5 técnicas de diagnóstico para problemas eléctricos', f: 'noviembre 17, 2025', d: 'Los sistemas eléctricos modernos representan uno de los mayores retos para cualquier taller automotriz...', img: img('cablesMotor', 800) },
  { t: 'Técnicas de diagnóstico para motores de inyección diésel', f: 'noviembre 10, 2025', d: 'Como taller especializado en mantenimiento de flotas tenemos mucha experiencia en la reparación y mantenimiento correctivo...', img: img('laptopAuto', 800) },
  { t: 'Mantenimiento predictivo para flotas de buses con sensores IoT', f: 'noviembre 6, 2025', d: 'Con más de 20 años de experiencia en mantenimiento vehicular en Lima, hemos incorporado sensores que...', img: img('llantaLuz', 800) },
];

export const vehiculos = {
  titulo: 'Vehículos más solicitados',
  texto: 'Conoce nuestra área de venta de camiones y venta de camionetas pickup.',
  items: [
    { tipo: 'Venta de Pickup', t: 'Rumix Vigor Plus Luxury', desde: 18990, img: img('pickupArena', 900) },
    { tipo: 'Venta de Pickup', t: 'Kazai Grand Avenue MT', desde: 21490, img: img('suvDesierto', 900) },
    { tipo: 'Venta de Camión', t: 'Vanko M35 Chasis', desde: 32900, img: img('camionAzul', 900) },
    { tipo: 'Venta de Camión', t: 'Vanko New Carrying 2.0T', desde: 27500, img: img('camionCarretera', 900) },
  ],
};

export const usd = (n) => 'US$ ' + Number(n).toLocaleString('en-US');

export const sedes = [
  {
    t: 'Concesionaria',
    dir: 'Av. Los Motores 251, Santa Catalina',
    tel: '999 000 111',
    correo: 'ventas@tienda.com',
  },
  {
    t: 'Taller Mecánico',
    dir: 'Jr. Las Bujías 365, Santa Catalina',
    tel: '999 000 222',
    correo: 'citas@tienda.com',
  },
  {
    t: 'Venta de Repuestos',
    dir: 'Jr. Las Bujías 365, Santa Catalina',
    tel: '999 000 333',
    correo: 'repuestos@tienda.com',
  },
];

export const horario = ['L-V de 8:30am - 6:00pm', 'Sáb. 8:30am - 1:00pm'];

export const serviciosCita = [
  'Mantenimiento preventivo',
  'Mantenimiento correctivo',
  'Mantenimiento de flotas',
  'Planchado y pintura',
  'Escaneo y diagnóstico',
  'Cambio de aceite',
  'Instalación de accesorios',
];

export const chatCanned = [
  '¡Hola! Con gusto te ayudamos. Qué marca y modelo es tu vehículo?',
  'Perfecto. Podemos recibirlo esta semana; el diagnóstico inicial no tiene costo si haces el servicio con nosotros.',
  'Un asesor te escribira en breve para confirmar la hora. Gracias por confiar en tienda.com Motors!',
];
