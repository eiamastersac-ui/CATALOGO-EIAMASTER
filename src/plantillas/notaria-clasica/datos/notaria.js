// Datos demo de la plantilla notaria-clasica (estilo notariapaino.com.pe).
// Marca propia: tienda.com Notaría. Nombres, direcciones y teléfonos ficticios.
// Imágenes solo por URL de Unsplash (verificadas con contact sheet).

export const u = (id, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  firmaHero: '1450101499163-c8848c66ca85',
  archivador: '1569235186275-626cb53b83ce',
  firmaPluma: '1521791055366-0d553872125f',
  sello: '1627518788331-b3b7fdaa382f',
  plumaCarta: '1455390582262-044cdead277a',
  reunion: '1573167507387-6b4b98cb7c13',
  calculadora: '1554224155-8d04cb21cd6c',
  miraflores: '1531968455001-5c5272a41129',
  parejaFirma: '1664463760781-f159dfe3af30',
  pasaporte: '1641736494066-bd18237ede26',
  llaveAuto: '1533558701576-23c65e0272fb',
  apretonFirma: '1681505531034-8d67054e07f6',
  sobres: '1562330094-4a3730591558',
  plumaFirma: '1648712898089-4435bc87b587',
  biblioteca: '1505664194779-8beaceb93744',
  expedientes: '1583521214690-73421a1829a9',
};

export const img = (k, w) => u(IMG[k], w);

export const marca = {
  nombre: 'tienda.com',
  sub: 'Notaría',
  notario: 'Dr. Rodrigo Valcárcel Ibarra',
  tel: '(01) 700 4500',
  telHref: 'tel:+5117004500',
  correo: 'atencion@tienda.com',
  dir1: 'Av. República de Panamá 3420,',
  dir2: 'Piso 5 - San Isidro 15047',
  dir3: '(Torre Empresarial Central)',
  horario: [
    { d: 'Lunes a Viernes', h: ['9:00 am - 6:00 pm (Verano)', '9:00 am - 6:30 pm (Resto del año)'] },
    { d: 'Sábados', h: ['9:00 am - 1:00 pm (previa cita)'] },
  ],
};

export const topIzq = [
  { t: 'Fact. Electrónica', href: '#ncl-consulta', ico: 'doc' },
  { t: 'Correo de atención', href: '#ncl-contacto', ico: 'mail' },
];

export const topDer = [
  { t: 'Salas Virtuales', href: '#ncl-contacto', ico: 'grupo' },
  { t: 'Libro de Reclamaciones', href: '#ncl-pie', ico: 'libro' },
];

export const nav = [
  {
    t: 'Consultas en Línea',
    href: '#ncl-consulta',
    sub: [
      'Consulta de Contratos',
      'Consulta de Contratos Corporativos',
      'Consulta de Cartas Notariales',
      'Cartas Notariales Corporativas',
      'Autenticidad de Documentos',
      'Facturación Electrónica',
    ],
  },
  {
    t: 'Trámites en Línea',
    href: '#ncl-tramites',
    sub: [
      'Actas de Presencia',
      'Arrendamientos',
      'Autorización de Viaje de Menores',
      'Constitución de Empresas en Línea',
      'Levantamiento de Hipoteca',
      'Levantam. Gar. Mob. Vehicular',
      'Poderes',
      'Transferencia Vehicular',
      'Trámites Registrales',
      'Testimonios y Copias Simples',
    ],
  },
  {
    t: 'Servicios Notariales',
    href: '#ncl-tramites',
    sub: [
      'Escrituras Públicas',
      'Asuntos No Contenciosos',
      'Legalizaciones',
      'Transferencias Vehiculares',
      'Autorización de Viaje a Menores',
      'Cartas Notariales',
      'Poderes Fuera de Registro',
    ],
  },
  {
    t: 'Pagos',
    href: '#ncl-pagos',
    sub: [
      'Pagos de Kardex en Línea',
      'Pagos de Personas Jurídicas',
      'Pagos de Personas Naturales',
      'Pagos de Impuesto de Alcabala',
    ],
  },
  { t: 'La Notaría', href: '#ncl-nosotros' },
  { t: 'Contáctenos', href: '#ncl-contacto' },
];

export const hero = {
  img: img('firmaHero', 1920),
  titulo: 'Bienvenido al nuevo portal de la Notaría tienda.com',
  texto:
    'Consulta y realiza tus trámites notariales de forma rápida y efectiva en nuestra plataforma online. Te invitamos a navegar en nuestro sitio y conectarte con nosotros para resolver tus dudas.',
  accesos: [
    {
      t: 'Consultas en línea',
      d: 'La manera más efectiva de revisar el estado de sus trámites.',
      href: '#ncl-consulta',
      ico: 'balanzaDoc',
    },
    {
      t: 'Trámites en línea',
      d: 'Infórmate sobre los trámites notariales y solicita el servicio que requieras.',
      href: '#ncl-tramites',
      ico: 'balanzaMano',
    },
    {
      t: 'Pagos',
      d: 'Consulta la información sobre pago y revisa los manuales que preparamos para ti.',
      href: '#ncl-pagos',
      ico: 'monedaMano',
    },
  ],
};

export const servicios = {
  titulo: 'Consultas y Servicios',
  texto:
    'Ponemos a tu disposición los servicios notariales en nuestra cartera para realizar tus solicitudes de manera confiable, eficaz y con seguridad jurídica, a través de nuestras herramientas digitales.',
  tarjetas: [
    {
      t: 'Consulta Kardex',
      d: 'Revisa el estado de tus contratos a través del código Kardex.',
      img: img('archivador', 600),
      href: '#ncl-consulta',
    },
    {
      t: 'Seguimiento de Contratos',
      d: 'Supervisa el estado de tus contratos en nuestra plataforma.',
      img: img('firmaPluma', 600),
      href: '#ncl-consulta',
    },
    {
      t: 'Escrituras Públicas',
      d: 'Infórmate sobre las principales escrituras públicas que otorgamos y sus requisitos.',
      img: img('sello', 600),
      href: '#ncl-tramites',
    },
    {
      t: 'Cartas Notariales',
      d: 'Conoce y consulta los requerimientos para solicitar este documento.',
      img: img('plumaCarta', 600),
      href: '#ncl-tramites',
    },
  ],
};

export const recurrentes = [
  { t: 'Poderes', ico: 'persona', tramite: 'poderes' },
  { t: 'Autorización de Viajes en Línea', ico: 'avion', tramite: 'viaje' },
  { t: 'Transferencia Vehicular', ico: 'auto', tramite: 'vehicular' },
  { t: 'Pagos en Línea', ico: 'tarjeta', tramite: '' },
];

export const consulta = {
  titulo: 'Consulta de Contratos',
  texto:
    'La manera más efectiva de revisar el estado de sus trámites. Consulta tus contratos y contratos corporativos, cartas notariales, autenticidad de documentos y facturación electrónica.',
  tipos: [
    { id: 'kardex', t: 'Por Kardex', label: 'Número de Kardex', ph: 'Ej. K-2026-04518', patron: '^[A-Za-z0-9-]{4,}$' },
    { id: 'dni', t: 'Por DNI', label: 'Número de DNI', ph: 'Ej. 45879632', patron: '^[0-9]{8}$' },
    { id: 'ruc', t: 'Por RUC', label: 'Número de RUC', ph: 'Ej. 20601234567', patron: '^[0-9]{11}$' },
  ],
  otros: [
    'Contratos Corporativos',
    'Cartas Notariales',
    'Autenticidad de Documentos',
    'Facturación Electrónica',
  ],
  // Resultado demo que se muestra al consultar
  resultado: {
    contrato: 'Compra venta de inmueble',
    fecha: '12/09/2026',
    estado: 'En firma de otorgantes',
    pasos: ['Recepción de minuta', 'Calificación', 'Firma de otorgantes', 'Inscripción registral', 'Entrega de testimonio'],
    actual: 2,
  },
};

export const tramites = {
  titulo: 'Servicios Notariales',
  texto:
    'Revisa aquí nuestra lista de servicios, los requerimientos para la solicitud de cada uno de ellos y el lugar de recepción de documentos.',
  lista: [
    {
      id: 'compraventa',
      grupo: 'Escrituras Públicas',
      t: 'Compra Venta, Donación, Transferencia, Cesión, Adjudicación de Bienes Inmuebles',
      img: img('parejaFirma', 900),
      req: [
        'Minuta firmada por vendedores y compradores, debidamente autorizada por un abogado.',
        'Copia del Autoavalúo (HR y PU).',
        'Copia de los recibos del pago anual del Impuesto Predial y/o constancia de No Adeudo.',
        'Copia literal de la Partida Registral del Inmueble.',
        'Copia de los documentos de identidad vigentes, sin multas por omisión al sufragio.',
        'Vigencia de poder (en el caso que intervenga una empresa o apoderado de persona natural).',
        'Pago del Impuesto de Alcabala. Se puede realizar en la Notaría para inmuebles de Lima Metropolitana.',
        'Pago de Impuesto a la Renta según corresponda, previa calificación del contrato.',
      ],
      nota:
        'El vendedor y el comprador deben presentar ante la municipalidad correspondiente el cargo y descargo de la compra venta, hasta el último día del mes siguiente de la fecha de la minuta.',
    },
    {
      id: 'viaje',
      grupo: 'Trámites en Línea',
      t: 'Autorización de Viaje de Menores',
      img: img('pasaporte', 900),
      req: [
        'Permiso al exterior: presencia de ambos padres.',
        'Permiso al interior: presencia de uno de los padres.',
        'Documento de identidad original de los padres, y al día con las votaciones.',
        'Documento de identidad del menor y Partida de Nacimiento con vigencia no mayor a 30 días.',
        'Si uno de los padres está en el extranjero: poder otorgado ante el Consulado Peruano, legalizado e inscrito en Registros Públicos.',
        'Si uno de los padres ha fallecido: Partida de Defunción original, no mayor a 30 días de antigüedad.',
      ],
      nota:
        'Para viajes al exterior indique los datos completos de la persona responsable del menor durante el viaje y la estadía. Lugar: mostrador de atención al público.',
    },
    {
      id: 'vehicular',
      grupo: 'Trámites en Línea',
      t: 'Transferencia Vehicular',
      img: img('llaveAuto', 900),
      req: [
        'Documento de identidad vigente del comprador y del vendedor.',
        'Tarjeta de identificación vehicular (tarjeta de propiedad).',
        'Boleta informativa del vehículo con antigüedad no mayor a 30 días.',
        'Constancia de no adeudo del Impuesto Vehicular, cuando corresponda.',
        'Si el vendedor es casado: presencia del cónyuge o poder inscrito.',
        'Medio de pago utilizado en la operación.',
      ],
      nota: 'La inscripción en el Registro de Propiedad Vehicular la gestiona la Notaría de forma electrónica.',
    },
    {
      id: 'poderes',
      grupo: 'Escrituras Públicas',
      t: 'Poderes',
      img: img('apretonFirma', 900),
      req: [
        'Minuta del poder autorizada por un abogado (para poder por escritura pública).',
        'Documento de identidad vigente del poderdante y del apoderado.',
        'Si interviene una empresa: vigencia de poder del representante con antigüedad no mayor a 30 días.',
        'Detalle de las facultades que se otorgan.',
      ],
      nota: 'Los poderes fuera de registro se firman el mismo día en ventanilla, previa verificación biométrica.',
    },
    {
      id: 'cartas',
      grupo: 'Servicios Notariales',
      t: 'Cartas Notariales',
      img: img('sobres', 900),
      req: [
        'Carta original y dos copias, firmadas por el remitente.',
        'Dirección completa y exacta del destinatario.',
        'Documento de identidad del remitente o de su representante.',
      ],
      nota: 'El diligenciamiento se realiza dentro de Lima Metropolitana; puede consultar el estado de su carta en línea.',
    },
    {
      id: 'legalizacion',
      grupo: 'Legalizaciones',
      t: 'Legalización de Firmas, Copias y Libros',
      img: img('plumaFirma', 900),
      req: [
        'Presencia del firmante con documento de identidad vigente.',
        'Documento original para la legalización de copias.',
        'Para libros: libro nuevo foliado y ficha RUC de la empresa.',
      ],
      nota: 'Atención inmediata en ventanilla, sin cita previa.',
    },
  ],
};

export const nosotros = {
  img: img('reunion', 1920),
  titulo: 'Sobre la Notaría tienda.com y su trayectoria',
  texto:
    'En la Notaría tienda.com contamos con un grupo humano altamente competente y dedicado a brindarle a los usuarios servicios satisfactorios y de calidad. Contamos con una larga trayectoria brindando seguridad jurídica de confianza, oportuna, con soluciones integrales e innovadoras, con una comunicación permanente, con responsabilidad social y profesionalismo.',
  mision:
    'Brindamos seguridad jurídica de confianza, oportuna, con soluciones integrales, innovadoras, de calidad, actualizadas, personalizadas, con una comunicación permanente, con responsabilidad social y profesionalismo.',
  vision: 'Ofrecer a nuestros usuarios plena satisfacción en el servicio prestado.',
  valores: [
    'Servicio al Cliente',
    'Colaboración',
    'Autonomía',
    'Innovación',
    'Desarrollo Personal',
    'Seguridad Jurídica',
  ],
};

export const financiamiento = {
  img: img('calculadora', 1200),
  titulo: 'Contratos con Financiamiento',
  texto:
    'Te invitamos a revisar nuestras opciones de contratos con financiamiento con las principales entidades bancarias donde podrás realizar acciones como compra venta y préstamo hipotecario, compra venta de bien futuro y préstamo hipotecario, ampliación de garantía hipotecaria, contrato de préstamo de libre disponibilidad, ampliación, ratificación y constitución de hipoteca, etc.',
  opciones: [
    'Compra venta y préstamo hipotecario',
    'Compra venta de bien futuro',
    'Ampliación de garantía hipotecaria',
    'Préstamo de libre disponibilidad',
  ],
};

export const pagos = {
  titulo: 'Pagos',
  texto:
    'Cancele los derechos notariales y registrales por nuestra pasarela de pagos solo con su número de kardex, o revise las cuentas y manuales disponibles.',
  lista: [
    { t: 'Pagos de Kardex en Línea', d: 'Pague con tarjeta de crédito o débito usando solo su número de kardex.', ico: 'tarjeta' },
    { t: 'Pagos de Personas Jurídicas', d: 'Cuentas recaudadoras y datos para facturación a nombre de empresas.', ico: 'edificio' },
    { t: 'Pagos de Personas Naturales', d: 'Depósitos y transferencias con la referencia de su trámite.', ico: 'persona' },
    { t: 'Pagos de Impuesto de Alcabala', d: 'Liquidación y pago del impuesto para inmuebles de Lima Metropolitana.', ico: 'monedaMano' },
  ],
};

export const certificacion = {
  sello: 'Gestión Ética',
  titulo: 'Programa de Integridad "Manos Limpias"',
  texto:
    'Sistema de gestión ética que promueve procesos transparentes y buenas prácticas operativas, supervisado por nuestro Órgano de Vigilancia.',
};

export const contacto = {
  img: img('miraflores', 1920),
  titulo: 'Contáctenos',
  texto:
    'Infórmese más y contáctenos a través de nuestros canales de comunicación, en donde resolveremos cualquier duda con la mayor brevedad posible.',
  asuntos: ['Escrituras Públicas', 'Trámites en Línea', 'Cartas Notariales', 'Pagos', 'Otros'],
};

export const pie = {
  links: [
    { t: 'Consultas en Línea', href: '#ncl-consulta' },
    { t: 'Trámites en Línea', href: '#ncl-tramites' },
    { t: 'Servicios Notariales', href: '#ncl-tramites' },
    { t: 'Pagos', href: '#ncl-pagos' },
    { t: 'La Notaría', href: '#ncl-nosotros' },
    { t: 'Contáctenos', href: '#ncl-contacto' },
  ],
};

export const chat = {
  saludo: '¡Hola! Soy el asistente virtual de la Notaría tienda.com. ¿En qué podemos ayudarle?',
  rapidas: ['Horario de atención', 'Consultar mi kardex', 'Requisitos de viaje de menores', 'Hablar con un asesor'],
  respuestas: {
    'Horario de atención': 'Atendemos de lunes a viernes de 9:00 am a 6:30 pm (en verano hasta las 6:00 pm) y sábados de 9:00 am a 1:00 pm previa cita.',
    'Consultar mi kardex': 'Puede revisar el estado de su trámite en la sección "Consulta de Contratos" ingresando su número de kardex, DNI o RUC.',
    'Requisitos de viaje de menores': 'Para viajes al exterior se requiere la presencia de ambos padres con DNI, y el DNI y partida de nacimiento del menor (no mayor a 30 días).',
    'Hablar con un asesor': 'Déjenos sus datos en el formulario de contacto o llámenos al (01) 700 4500 y un asesor le atenderá.',
  },
  defecto: 'Gracias por escribirnos. Un asesor revisará su consulta y le responderá a la brevedad dentro del horario de atención.',
};
