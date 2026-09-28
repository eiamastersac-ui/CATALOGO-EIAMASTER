// Datos demo de la plantilla notaria-central (estilo notariahidalgo.com).
// Marca propia: tienda.com Notaría. Notaria, direccion y telefonos son ficticios.
// Imagenes solo por URL de Unsplash (verificadas con contact sheet).

export const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

const IMG = {
  apretonManos: '1521791136064-7986c2920216',
  firmaPluma: '1450101499163-c8848c66ca85',
  firmaMesa: '1517048676732-d65bc937f952',
  despachoAtencion: '1551836022-d5d88e9218df',
  biblioteca: '1505664194779-8beaceb93744',
  laptop: '1486312338219-ce68d2c6f44d',
  llavesCasa: '1560518883-ce09059eeffa',
  familia: '1511895426328-dc8714191300',
  cartaFirma: '1484480974693-6ca0a78fb36b',
  librosLey: '1423592707957-3b212afa6733',
  auto: '1494976388531-d1058494cdd8',
  oficina: '1497366216548-37526070297c',
  reunion: '1517245386807-bb43f82c33c4',
  papeles: '1554224155-6726b3ff858f',
};

export const img = (k, w) => u(IMG[k], w);

export const marca = {
  nombre: 'tienda.com',
  sub: 'Notaría',
  notaria: 'Dra. Mariana Ledesma Quiroga',
  cargo: 'Notaria de Lima',
  tel: '(01) 614 0000',
  telHref: '+5116140000',
  whatsapp: '51999000111',
  correo: 'notaria@tienda.com',
  correoCv: 'cv@tienda.com',
  direccion: 'Av. Los Olivos 245, San Isidro, Lima',
  horario: 'Lunes a viernes de 9:00 a.m. a 6:00 p.m.',
};

export const nav = [
  { t: 'Inicio', href: '#nc-inicio' },
  { t: 'Nosotros', href: '#nosotros' },
  { t: 'Servicios', href: '#servicios' },
  { t: 'Trámites en Línea', href: '#tramites' },
  { t: 'Trabaja con Nosotros', href: '#trabaja' },
  { t: 'Consultas en Línea', href: '#consultas' },
];

export const heroSlides = [
  {
    kicker: 'Notaría de Lima · San Isidro',
    titulo: 'Trámites en línea',
    texto: 'Ahorra tiempo y dinero con todos nuestros trámites online.',
    cta: 'Ver más',
    href: '#tramites',
    img: img('apretonManos', 2200),
    alt: 'Apretón de manos al cerrar un acuerdo',
  },
  {
    kicker: 'Escrituras y poderes',
    titulo: 'Seguridad jurídica en cada firma',
    texto: 'Compra venta, hipotecas, constitución de empresas y poderes con asesoría notarial personalizada.',
    cta: 'Ver servicios',
    href: '#servicios',
    img: img('firmaPluma', 2200),
    alt: 'Persona firmando un documento con pluma',
  },
  {
    kicker: 'Consultas en línea',
    titulo: 'Consulta tu kardex en línea',
    texto: 'Revisa el estado de tu trámite protocolar desde cualquier lugar, sin hacer colas.',
    cta: 'Consultar',
    href: '#consultas',
    img: img('firmaMesa', 2200),
    alt: 'Reunión de firma de documentos en una mesa de trabajo',
  },
];

export const nosotros = {
  kicker: 'Conoce más sobre nosotros',
  titulo: 'Somos el mejor equipo de trabajo',
  img: img('despachoAtencion', 1000),
  texto:
    'La Dra. Mariana Ledesma Quiroga, Notaria de Lima, les da la bienvenida conjuntamente con el grupo humano con quienes comparte día a día las labores destinadas a brindarles un servicio profesional seguro y confiable. Nos ponemos a su disposición a efectos de brindarles el asesoramiento profesional que necesiten para el logro de sus requerimientos notariales.',
  trayectoria: [
    'La experiencia previa a la función notarial resulta de singular importancia para el desarrollo de su labor actual. Paralelamente a sus estudios de Derecho, practicó en diversos juzgados y salas del Poder Judicial, donde luego ejerció durante años actividades administrativas y jurisdiccionales.',
    'Se desempeñó como secretaria de sala y, posteriormente, como jueza especializada en lo civil, experiencia que hoy se traduce en un control riguroso de cada instrumento que se otorga en el despacho.',
    'Desde su incorporación al Colegio de Notarios de Lima dirige un equipo de abogados, asistentes y personal de atención que acompaña a personas naturales y empresas en cada etapa de su trámite.',
  ],
  cifras: [
    { n: '25+', t: 'años de trayectoria' },
    { n: '5', t: 'áreas de servicio' },
    { n: '9–18h', t: 'atención continua' },
  ],
};

// Servicios de la portada + requisitos (tomados de las páginas internas).
export const servicios = [
  {
    id: 'protocolares',
    titulo: 'Instrumentos Protocolares',
    img: img('llavesCasa', 900),
    items: [
      'Compra Venta de bien Inmueble',
      'Constitución de Hipoteca',
      'Anticipo de Legítima de Bien Inmueble',
      'Anticipo de Legítima de Dinero',
      'Aumento de Capital',
      'Constitución de E.I.R.L.',
      'Constitución de una Sociedad',
      'Liquidación y Disolución de Sociedades',
      'Donación de Dinero',
      'Sucursal de una Sociedad Constituida en el Extranjero',
    ],
    requisitos: [
      {
        t: 'Compra venta de bien inmueble',
        l: [
          'Minuta suscrita por las partes y autorizada por abogado colegiado.',
          'Certificado registral inmobiliario (CRI) original o copia literal completa y actualizada del inmueble.',
          'Si interviene una persona jurídica: vigencia de poder actualizada.',
          'Constancia de no adeudo del impuesto predial emitida por la municipalidad.',
          'Constancia de pago o inafectación del impuesto de alcabala (parte compradora).',
        ],
      },
      {
        t: 'Constitución de hipoteca',
        l: [
          'Minuta suscrita por las partes y autorizada por abogado colegiado.',
          'CRI original y actualizado del inmueble.',
          'Si interviene una persona jurídica: partida registral o vigencia de poder actualizada.',
          'Documento de identidad vigente de todos los intervinientes.',
        ],
      },
      {
        t: 'Constitución de sociedad',
        l: [
          'Minuta firmada por las partes y autorizada por abogado colegiado.',
          'Depósito de capital en una entidad bancaria, si el aporte es en efectivo.',
          'Declaración jurada de recepción de bienes firmada por el gerente general, si el aporte es en bienes.',
          'Reserva de preferencia registral de la razón social.',
        ],
      },
    ],
  },
  {
    id: 'no-contenciosos',
    titulo: 'Asuntos No Contenciosos',
    img: img('familia', 900),
    items: [
      'Constitución de Patrimonio Familiar',
      'Divorcio',
      'Prescripción Adquisitiva Vehicular',
      'Sucesión Intestada',
      'Unión de Hecho',
    ],
    requisitos: [
      {
        t: 'Divorcio (separación convencional)',
        l: [
          'Solicitud autorizada por abogado y firmada por ambos cónyuges.',
          'Partida de matrimonio con antigüedad no mayor de 3 meses.',
          'Escritura de separación de patrimonios inscrita o declaración jurada de no tener bienes.',
          'Declaración jurada del último domicilio conyugal (una por cónyuge).',
          'Copia de los documentos de identidad vigentes de ambos cónyuges.',
        ],
      },
      {
        t: 'Sucesión intestada',
        l: [
          'Solicitud firmada por cualquiera de los interesados y autorizada por abogado.',
          'Se presenta ante notario del lugar del último domicilio del causante.',
          'Nombres, documentos y domicilios de los presuntos herederos.',
          'Partida de defunción y partidas que acrediten el entroncamiento familiar.',
        ],
      },
      {
        t: 'Unión de hecho',
        l: [
          'Solicitud firmada y autorizada por abogado.',
          'Certificado domiciliario de ambos solicitantes.',
          'Certificado negativo de unión de hecho a nombre de cada solicitante.',
          'Declaración jurada con firmas legalizadas de convivencia mayor a dos años.',
        ],
      },
    ],
  },
  {
    id: 'extraprotocolares',
    titulo: 'Extraprotocolares',
    img: img('cartaFirma', 900),
    items: [
      'Certificaciones',
      'Copias Certificadas',
      'Legalización de Firmas',
      'Permisos de Viaje',
      'Poder Fuera de Registro',
    ],
    requisitos: [
      {
        t: 'Legalización de firmas',
        l: [
          'Presentar el documento original redactado, sin firmar.',
          'Presencia de los firmantes con documento de identidad vigente.',
          'Verificación biométrica de huella dactilar.',
          'Persona jurídica: vigencia de poder con antigüedad no mayor a 30 días.',
        ],
      },
      {
        t: 'Permiso de viaje de menores',
        l: [
          'Presencia del padre, madre o ambos con documento de identidad vigente.',
          'Documento de identidad o partida de nacimiento del menor.',
          'Datos del viaje: destino, fechas y acompañante.',
        ],
      },
      {
        t: 'Poder fuera de registro',
        l: [
          'Documento de identidad vigente del otorgante y del apoderado.',
          'Generales de ley: estado civil, domicilio y ocupación.',
          'Facultades que se otorgan, detalladas por escrito.',
        ],
      },
    ],
  },
  {
    id: 'libros',
    titulo: 'Legalización de Libros',
    img: img('librosLey', 900),
    items: ['Formato para Empresas', 'Formato para Personas Naturales'],
    requisitos: [
      {
        t: 'Primer libro contable — persona natural',
        l: [
          'Carta firmada por el titular solicitando la certificación de los libros.',
          'Copia del DNI.',
          'Copia de la ficha RUC.',
        ],
      },
      {
        t: 'Libros de actas, matrícula de acciones y padrón de asociados',
        l: [
          'Carta firmada por el representante legal solicitando la certificación.',
          'Copia del DNI del representante y ficha RUC.',
          'Vigencia de poder con una semana de antigüedad.',
          'Identificación biométrica del representante en la notaría.',
        ],
      },
    ],
  },
  {
    id: 'vehicular',
    titulo: 'Transferencia Vehicular y Protestos',
    img: img('auto', 900),
    items: ['Levantamiento de Protestos', 'Protestos de Títulos Valores', 'Trámites Vehiculares'],
    requisitos: [
      {
        t: 'Levantamiento de protestos',
        l: [
          'Carta dirigida a la notaría (2 ejemplares) solicitando el levantamiento.',
          'Constancia de pago en original y copia.',
          'El costo depende del monto del protesto.',
        ],
      },
      {
        t: 'Protesto de títulos valores',
        l: [
          'Título valor original (letra de cambio, pagaré, etc.).',
          'Presentarlo dentro de los 8 días posteriores al vencimiento.',
          'Emitido conforme a la Ley de Títulos Valores N.º 27287.',
          'El domicilio del deudor debe corresponder a Lima Metropolitana.',
        ],
      },
    ],
  },
];

export const tramites = {
  kicker: 'Trámites online',
  titulo: 'Aquí tendrás toda la información para realizar tus trámites',
  img: img('papeles', 1000),
  items: [
    {
      t: 'Transferencias vehiculares',
      d: 'Compra venta, dación en pago o donación de vehículos.',
      l: [
        'Tarjeta de propiedad y SOAT vigente.',
        'Documento de identidad de ambas partes.',
        'Valorización del vehículo y medio de pago bancario.',
        'Impuesto vehicular cancelado (de estar afecto).',
        'Vigencia de poder con máximo 30 días de antigüedad, de ser el caso.',
      ],
    },
    {
      t: 'Inmatriculación vehicular',
      d: 'Primera inscripción de vehículos importados o nuevos.',
      l: [
        'DUA de importación.',
        'Declaración jurada de medio de pago con firmas legalizadas.',
        'Documento de identidad y comprobante de pago (boleta o factura).',
        'Vigencia de poder, si es persona jurídica.',
      ],
    },
    {
      t: 'Duplicado de tarjeta de propiedad',
      d: 'Por pérdida, robo o deterioro.',
      l: [
        'Denuncia policial por pérdida o robo.',
        'Documento de identidad del titular del vehículo.',
        'Vigencia de poder del representante legal, si el titular es persona jurídica.',
      ],
    },
    {
      t: 'Cambio de características',
      d: 'Color, motor o combustible.',
      l: [
        'Cambio de color: documento de identidad e indicar el nuevo color.',
        'Cambio de motor: boleta o factura del motor, o contrato con firma legalizada si es usado.',
        'Cambio de combustible: certificado de conversión.',
      ],
    },
    {
      t: 'Constitución de empresas en línea',
      d: 'Constituye tu empresa sin salir de casa.',
      l: [
        'Reserva de nombre en el portal de SUNARP.',
        'Envío del acto constitutivo firmado digitalmente.',
        'Firma de la escritura en notaría o por medios digitales.',
      ],
    },
  ],
  otros: ['Constitución de empresa', 'Poder', 'Sucesión intestada', 'Transferencia vehicular', 'Testamentos', 'Unión de hecho', 'Funciones de un notario'],
};

export const kardex = {
  titulo: 'Consulta tu Kardex en Línea',
  texto: 'Ingresa el número de kardex que figura en tu constancia para conocer el estado de tu trámite protocolar.',
  img: img('laptop', 2000),
  estados: [
    { e: 'En redacción', d: 'El instrumento se está redactando con la información entregada.' },
    { e: 'Listo para firmas', d: 'Puedes acercarte a firmar en horario de atención.' },
    { e: 'En registros públicos', d: 'El parte notarial fue presentado a SUNARP.' },
    { e: 'Concluido', d: 'El trámite está inscrito. Recoge tu testimonio en mesa de partes.' },
  ],
};

export const trabaja = {
  titulo: 'Trabaja con nosotros',
  texto: 'Déjanos tus datos y forma parte de nuestro staff de profesionales.',
  img: img('reunion', 1400),
};

export const contacto = {
  img: img('oficina', 1200),
  tiposEmpresa: ['Persona Jurídica', 'Persona Natural'],
};

export const footer = {
  menu: [
    { t: 'Inicio', href: '#nc-inicio' },
    { t: 'Nosotros', href: '#nosotros' },
    { t: 'Servicios', href: '#servicios' },
    { t: 'Trabaja con Nosotros', href: '#trabaja' },
    { t: 'Consultas en Línea', href: '#consultas' },
    { t: 'Contacto', href: '#contacto' },
  ],
  servicios: [
    'Instrumentos Protocolares',
    'Asuntos No Contenciosos',
    'Legalizaciones',
    'Legalización de Libros',
    'Transferencia Vehicular y Protestos',
  ],
  enlaces: [
    { t: 'Superintendencia Nacional de los Registros Públicos - SUNARP', href: 'https://www.sunarp.gob.pe/' },
    { t: 'Superintendencia Nacional de Aduanas y de Administración Tributaria - SUNAT', href: 'https://www.sunat.gob.pe/' },
    { t: 'Registro Nacional de Identificación y Estado Civil', href: 'https://www.reniec.gob.pe/' },
    { t: 'Superintendencia Nacional de Migraciones', href: 'https://www.migraciones.gob.pe/' },
    { t: 'Poder Judicial del Perú', href: 'https://www.pj.gob.pe/' },
    { t: 'Ministerio Público', href: 'https://www.mpfn.gob.pe/' },
    { t: 'Colegio de Notarios de Lima', href: 'https://www.notarios.org.pe/' },
  ],
};

export const citas = {
  tramites: ['Escritura pública', 'Legalización de firmas', 'Permiso de viaje', 'Poder fuera de registro', 'Transferencia vehicular', 'Legalización de libros', 'Otro trámite'],
  horas: ['09:00', '10:00', '11:00', '12:00', '15:00', '16:00', '17:00'],
};
