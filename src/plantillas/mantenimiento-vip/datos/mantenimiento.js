// Datos demo de la plantilla "mantenimiento-vip".
// Inspirada en vip2carsmantenimientos.com (landing de campana de un taller
// automotriz en Los Olivos, Lima: mantenimiento mayor + afinamiento
// electronico con mas de 70 servicios). Marca propia "tienda.com" — nunca
// el nombre real.

const u = (id, w = 1200, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

// Ids verificados (200 + contact sheet) — todos del rubro automotriz.
const IMG = {
  garajeOscuro: '1492144534655-ae79c964c9d7', // deportivo en taller oscuro
  mecanicoMotor: '1625047509248-ec889cbff17f', // mecanico trabajando en el vano motor
  autoElevador: '1723099971299-3789db53604c', // camioneta en elevador, taller
  mecanicoRojo: '1677938438599-a55528c41b2c', // mecanico con overol rojo + carro de herramientas
  aceite: '1487754180451-c456f719a1fc', // cambio de aceite
  correas: '1486262715619-67b85e0b08d3', // motor, correas y poleas
  llaveMotor: '1619642751034-765dfdf7c58e', // manos con llave en el motor
  rueda: '1613214149922-f1809c99b414', // ajuste de pernos de rueda
  lavadoEspuma: '1520340356584-f9917d1eea6f', // lavado con espuma
  lavadoMano: '1607860108855-64acf2078ed9', // lavado a mano
  escaner: '1581091872370-1c203d690c43', // diagnostico con laptop
  tablet: '1623682783900-fea916dcba74', // escaner en tablet
  mecanicoDebajo: '1615906655593-ad0386982a0f', // tecnico revisando el motor
  tallerBanco: '1676018366904-c083ed678e60', // taller con banco de trabajo
  tallerHerramientas: '1583126162406-643011b3f69f', // taller con coche de herramientas
  mecanicoSonrie: '1504222490345-c075b6008014', // mecanico con el capo abierto
};

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 0, maximumFractionDigits: 0 });

export const marca = {
  nombre: 'tienda.com',
  sub: 'El trato VIP para tu auto',
  tel: '908 000 483',
  telCrudo: '908000483',
  correo: 'citas@tienda.com',
  direccion: 'Av. Carlos Izaguirre 1345, Los Olivos',
  horario: 'Lun a sáb · 8:00 – 18:00 h',
};

export const waHref = `https://wa.me/51${marca.telCrudo}?text=${encodeURIComponent('Hola, quiero agendar mi mantenimiento mayor')}`;
export const telHref = `tel:+51${marca.telCrudo}`;

export const nav = [
  { t: 'Inicio', href: '#inicio' },
  { t: 'Qué incluye', href: '#incluye' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Paquetes', href: '#paquetes' },
  { t: 'Beneficios', href: '#beneficios' },
  { t: 'Testimonios', href: '#testimonios' },
  { t: 'Promos', href: '#promos' },
];

export const hero = {
  fondo: u(IMG.garajeOscuro, 2000),
  foto: u(IMG.mecanicoMotor, 1100, 760),
  kicker: 'Devolvemos el rendimiento',
  kicker2: 'real a tu auto',
  titulo: ['Mant.', 'Mayor'],
  sub: '+ Afinamiento electrónico con más de 70 servicios.',
  datos: [
    { v: '70+', t: 'servicios en un paquete' },
    { v: '3 h', t: 'tiempo aproximado' },
    { v: '4.9', t: 'en 1540 opiniones' },
  ],
};

export const porQue = {
  titulo: '¿Por qué elegirnos?',
  sub: 'Tu vehículo merece un servicio de excelencia.',
  items: [
    { icono: 'escaner', t: 'Escaneo computarizado' },
    { icono: 'tecnico', t: 'Técnicos especializados' },
    { icono: 'repuesto', t: 'Repuestos de calidad garantizada' },
    { icono: 'reporte', t: 'Reportes en tiempo real por WhatsApp' },
    { icono: 'calibracion', t: 'Calibración electrónica' },
    { icono: 'autos', t: 'Atención para vehículos europeos, japoneses y americanos' },
  ],
};

export const importancia = {
  titulo: ['¿Por qué es importante realizar', 'el mantenimiento mayor?'],
  malo: {
    t: 'Si lo postergas',
    l: [
      'Sobrecalentamiento',
      'Desgaste prematuro del motor',
      'Pérdida de potencia',
      'Mayor consumo de combustible',
      'Fallas en carretera',
      'Reparaciones mucho más costosas',
    ],
  },
  bueno: {
    t: 'Si no lo postergas',
    l: [
      'Evitas reparaciones costosas',
      'Detectas fallas antes de que aparezcan',
      'Mantienes el rendimiento del motor',
      'Reduces el consumo de combustible',
      'Conservas el valor de reventa',
    ],
  },
};

export const marcasAuto = [
  'Mini Cooper', 'Subaru', 'Ford', 'Volkswagen', 'Audi', 'BMW', 'Maserati',
  'Mercedes-Benz', 'Toyota', 'Jaguar', 'Hyundai', 'Kia', 'Nissan', 'Volvo',
];

export const servicios = {
  fondo: u(IMG.autoElevador, 2000),
  kicker: '¡Más de 70 servicios',
  kicker2: 'en un solo paquete!',
  titulo: ['Esto incluye', 'nuestro servicio'],
  cta: 'Quiero recuperar el rendimiento de mi auto',
  grupos: [
    {
      id: 'motor',
      t: 'Motor',
      img: u(IMG.correas, 700, 420),
      l: [
        'Cambio de aceite de motor sintético',
        'Cambio de filtro de aceite',
        'Cambio de filtro de aire',
        'Cambio de bujías',
        'Limpieza de cuerpo de aceleración',
        'Revisión de fajas y poleas',
        'Revisión de fugas de aceite',
        'Revisión de soportes de motor',
      ],
    },
    {
      id: 'electronico',
      t: 'Afinamiento electrónico',
      img: u(IMG.escaner, 700, 420),
      l: [
        'Escaneo computarizado de módulos',
        'Limpieza de inyectores por ultrasonido',
        'Prueba de estanqueidad de inyectores',
        'Borrado y lectura de códigos de falla',
        'Calibración de mariposa electrónica',
        'Revisión de sensores (MAF, MAP, O2)',
        'Prueba de batería y alternador',
        'Reporte de diagnóstico por WhatsApp',
      ],
    },
    {
      id: 'frenos',
      t: 'Frenos y suspensión',
      img: u(IMG.rueda, 700, 420),
      l: [
        'Limpieza y regulación de frenos',
        'Medición de pastillas y discos',
        'Revisión de líquido de frenos',
        'Revisión de amortiguadores',
        'Revisión de terminales y rótulas',
        'Rotación de neumáticos',
        'Calibración de presión de llantas',
        'Revisión de freno de mano',
      ],
    },
    {
      id: 'fluidos',
      t: 'Fluidos y filtros',
      img: u(IMG.aceite, 700, 420),
      l: [
        'Cambio de filtro de combustible',
        'Cambio de filtro de cabina (A/C)',
        'Nivelación de refrigerante',
        'Nivelación de líquido de dirección',
        'Nivelación de agua de plumillas',
        'Revisión de caja de cambios',
        'Revisión de mangueras',
        'Lavado premium de cortesía',
      ],
    },
  ],
};

// Paquetes: precio base por tipo de vehiculo (demo). El selector del
// cliente intercambia la columna de precio.
export const tiposVehiculo = [
  { id: 'sedan', t: 'Sedán / Hatchback' },
  { id: 'suv', t: 'SUV / Camioneta' },
  { id: 'euro', t: 'Europeo / Premium' },
];

export const paquetes = [
  {
    id: 'afinamiento',
    t: 'Afinamiento electrónico',
    d: 'Escaneo, limpieza de inyectores y bujías.',
    precios: { sedan: 289, suv: 349, euro: 449 },
    antes: { sedan: 360, suv: 430, euro: 560 },
    items: ['Escaneo computarizado', 'Limpieza de inyectores', 'Cambio de bujías', 'Limpieza de cuerpo de aceleración', 'Reporte por WhatsApp'],
    destacado: false,
  },
  {
    id: 'mayor',
    t: 'Mantenimiento mayor',
    d: 'Mant. mayor + afinamiento con más de 70 servicios.',
    precios: { sedan: 649, suv: 789, euro: 989 },
    antes: { sedan: 812, suv: 986, euro: 1236 },
    items: ['Todo el afinamiento electrónico', 'Aceite sintético + 4 filtros', 'Frenos y suspensión', 'Nivelación de fluidos', 'Lavado premium gratis', 'Grúa gratis en Lima'],
    destacado: true,
  },
  {
    id: 'preventivo',
    t: 'Mantenimiento preventivo',
    d: 'Cambio de aceite y revisión de 30 puntos.',
    precios: { sedan: 179, suv: 219, euro: 289 },
    antes: { sedan: 220, suv: 270, euro: 360 },
    items: ['Aceite de motor + filtro', 'Revisión de 30 puntos', 'Nivelación de fluidos', 'Presión de llantas'],
    destacado: false,
  },
];

export const beneficios = {
  fondo: u(IMG.mecanicoRojo, 2000),
  kicker: 'Beneficios',
  titulo: ['Lavado', 'premium'],
  extra: '+ grúa',
  extraAcento: 'gratis',
  extra2: 'y atención prioritaria',
  items: [
    { icono: 'gota', t: 'Lavado premium', d: 'Exterior, aspirado y silicona de tablero.' },
    { icono: 'grua', t: 'Grúa gratis', d: 'Recojo en Lima Norte sin costo.' },
    { icono: 'rayo', t: 'Atención prioritaria', d: 'Tu auto entra primero a la bahía.' },
  ],
};

export const resenas = {
  nota: '4.9',
  total: '1540',
  lista: [
    { n: 'Guadalupe G.', t: 'Buena atención, buen trato, todo bien explicado. Nos vamos satisfechos.', hace: 'hace 2 semanas' },
    { n: 'Joel M.', t: 'Buena atención y cumplen la fecha de entrega.', hace: 'hace 3 semanas' },
    { n: 'Tania R.', t: 'Buena atención. Me mandaron fotos del avance por WhatsApp.', hace: 'hace 1 mes' },
    { n: 'Lázaro M.', t: 'Atención puntual y ordenada 👍', hace: 'hace 1 mes' },
    { n: 'Carla V.', t: 'El auto quedó como nuevo, se nota el cambio en el consumo de gasolina.', hace: 'hace 1 mes' },
    { n: 'Renzo P.', t: 'Me explicaron cada repuesto que cambiaron y el precio fue el cotizado.', hace: 'hace 2 meses' },
    { n: 'Milagros T.', t: 'Rápidos, en 3 horas tenía mi camioneta lista y lavada.', hace: 'hace 2 meses' },
    { n: 'Diego A.', t: 'Excelente el escaneo, detectaron un sensor que otro taller no vio.', hace: 'hace 3 meses' },
    { n: 'Pamela S.', t: 'La grúa llegó puntual. Muy recomendados.', hace: 'hace 3 meses' },
    { n: 'Óscar L.', t: 'Buen precio por todo lo que incluye el mantenimiento mayor.', hace: 'hace 4 meses' },
    { n: 'Rosa Q.', t: 'Trato amable y taller muy limpio.', hace: 'hace 4 meses' },
    { n: 'Hugo C.', t: 'Segunda vez que vengo, siempre cumplen.', hace: 'hace 5 meses' },
  ],
};

export const promos = [
  {
    img: u(IMG.mecanicoSonrie, 1600, 760),
    kicker: 'Descuento VIP para tu auto',
    grande: '20%',
    t: 'dscto. mant. mayor',
    acento: '+ lavado gratis',
    regalo: 'Esencia de regalo',
  },
  {
    img: u(IMG.escaner, 1600, 760),
    kicker: 'Afinamiento electrónico',
    grande: 'S/ 289',
    t: 'escaneo + inyectores',
    acento: 'reporte por WhatsApp',
    regalo: 'Diagnóstico incluido',
  },
  {
    img: u(IMG.lavadoEspuma, 1600, 760),
    kicker: 'Solo este mes',
    grande: '0',
    t: 'soles en grúa',
    acento: '+ atención prioritaria',
    regalo: 'Lima Norte',
  },
  {
    img: u(IMG.rueda, 1600, 760),
    kicker: 'Frenos seguros',
    grande: '15%',
    t: 'dscto. en pastillas',
    acento: 'revisión gratis',
    regalo: 'Con tu mant. mayor',
  },
];

export const faqs = [
  {
    q: '¿Cada cuánto debo realizar el mantenimiento mayor?',
    a: 'Se recomienda realizarlo cada 20,000 km o según las indicaciones del fabricante de tu vehículo. Esto ayuda a prevenir fallas y mantener el rendimiento óptimo del motor.',
  },
  {
    q: '¿Cuánto tiempo demora un mantenimiento mayor?',
    a: 'El servicio tiene una duración aproximada de 3 horas, aunque puede variar ligeramente según la marca y el modelo del vehículo.',
  },
  {
    q: '¿Por qué es importante realizar el mantenimiento mayor?',
    a: 'Porque permite prevenir averías, prolongar la vida útil de los componentes, mejorar el desempeño del vehículo y evitar gastos inesperados por reparaciones correctivas.',
  },
  {
    q: '¿Qué pasa si no realizo el mantenimiento mayor a tiempo?',
    a: 'Posponerlo puede generar mayor desgaste de componentes, pérdida de rendimiento, incremento en el consumo de combustible y reparaciones más costosas a largo plazo.',
  },
];

export const contacto = {
  titulo: 'Tu vehículo habla.',
  sub: 'Nosotros sabemos escucharlo.',
  texto: 'Agenda hoy tu mantenimiento mayor y evita reparaciones costosas mañana.',
  barra: 'Quiero mi dscto especial',
  marcas: ['Toyota', 'Hyundai', 'Kia', 'Nissan', 'Chevrolet', 'Suzuki', 'Mazda', 'Volkswagen', 'Audi', 'BMW', 'Mercedes-Benz', 'Subaru', 'Ford', 'Otra'],
};

export const sedes = [
  { t: 'Sede Izaguirre', dir: 'Av. Carlos Izaguirre 1345, Los Olivos', img: u(IMG.tallerHerramientas, 1200, 640), horario: marca.horario },
  { t: 'Sede Mendiola', dir: 'Av. Alfredo Mendiola 5400, Los Olivos', img: u(IMG.tallerBanco, 1200, 640), horario: marca.horario },
];

export const pie = {
  cols: [
    { t: 'Servicio al cliente', l: ['Términos y condiciones', 'Política de privacidad', 'Libro de reclamaciones', 'Legales', 'Convenios'] },
    { t: 'Sobre nosotros', l: ['¿Quiénes somos?', '¿Por qué elegir tienda.com?'] },
  ],
  redes: ['facebook', 'instagram', 'youtube', 'tiktok'],
};
