// Datos demo de la plantilla notaria-moderna (estilo notariatarazona.pe).
// Marca propia tienda.com Notaría. Nombres de personas, cuentas y teléfonos son ficticios.

const u = (id, w = 1200) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  apreton: '1521791136064-7986c2920216',
  traje: '1507679799987-c73779587ccf',
  firma: '1450101499163-c8848c66ca85',
  firmaMesa: '1562564055-71e051d33c19',
  reunionFirma: '1517048676732-d65bc937f952',
  laptopFirma: '1454165804606-c3d57bc86b40',
  portapapeles: '1586281380349-632531db7ed4',
  manos: '1544027993-37dbfe43562a',
  viaje: '1530521954074-e64f6810b32d',
  mapa: '1488646953014-85cb44e25828',
  libros: '1423592707957-3b212afa6733',
  contable: '1554224155-6726b3ff858f',
  calculadora: '1554224154-26032ffc0d07',
  escribiendo: '1434030216411-0b793f4b4173',
  sobreLacre: '1578531504112-0dcd95eda450',
  lacre: '1587716283570-f71969a1f854',
  sello: '1603057190473-f3b6422b6320',
  pilas: '1583521214690-73421a1829a9',
  auto: '1449965408869-eaa3f722e40d',
  columnas: '1436450412740-6b988f486c6b',
  biblioteca: '1505664194779-8beaceb93744',
  oficina: '1497366811353-6870744d04b2',
  laptop: '1553877522-43269d4ea984',
  asesora: '1573497019940-1c28c88b4f3e',
  citaDos: '1551836022-d5d88e9218df',
  lima: '1531968455001-5c5272a41129',
  justicia: '1589829545856-d10d557cf95f',
  p1: '1580489944761-15a19d654956',
  p2: '1560250097-0b93528c311a',
  p3: '1507003211169-0a1dd7228f2d',
  notario: '1472099645785-5658abf4ff4e',
};

export const img = (k, w) => u(IMG[k], w);

export const marca = {
  nombre: 'tienda.com',
  sub: 'Notaría',
  notario: 'Dr. Andrés Villalta Quiroga',
  lema: 'Calidad de servicio y confianza para tus trámites',
  whatsapp: '900 000 111',
  tel: '(01) 700-1234',
  telHref: 'tel:+5117001234',
  correo: 'notaria@tienda.com',
  direccion: 'Calle Los Laureles N° 245 - Miraflores',
  direccionLarga: ['Calle Los Laureles N° 245,', 'esquina con la cuadra 40 de la', 'Av. Principal, Miraflores - Lima'],
  horario: [
    { dia: 'Lunes a Viernes', h: '8:15 a.m. a 6:00 p.m.' },
    { dia: 'Sábados', h: '8:45 a.m. a 1:00 p.m.' },
  ],
};

export const nav = [
  { t: 'Trámites en línea', href: '#tramites' },
  { t: 'Servicios notariales', href: '#servicios', sub: [
    { t: 'Servicios protocolares', href: '#servicios' },
    { t: 'Servicios extraprotocolares', href: '#servicios' },
    { t: 'Requisitos por trámite', href: '#requisitos' },
  ] },
  { t: 'La Notaría', href: '#notaria', sub: [
    { t: 'Nosotros', href: '#notaria' },
    { t: 'Equipo por áreas', href: '#equipo' },
    { t: 'Modalidades de pago', href: '#pagos' },
  ] },
  { t: 'Contáctanos', href: '#contacto' },
];

export const heroSlides = [
  {
    kicker: 'Bienvenidos',
    titulo: 'tienda.com Notaría es experiencia y profesionalismo',
    texto: 'Nos enfocamos en brindarle el mejor servicio en el más corto plazo, siempre con la seguridad jurídica que usted necesita.',
    cta: { t: 'Conócenos', href: '#notaria' },
    img: 'apreton',
  },
  {
    kicker: 'Citas en línea',
    titulo: 'Evite las aglomeraciones y reserve su cita',
    texto: 'Gestione sus citas con nuestro equipo legal de manera fácil y rápida, en cualquier momento y desde cualquier lugar.',
    cta: { t: 'Reservar', cita: true },
    img: 'firmaMesa',
  },
  {
    kicker: 'Notaría en línea',
    titulo: 'Inicie su trámite notarial cuándo y dónde usted desee',
    texto: 'Inicie sus trámites desde la comodidad de su hogar u oficina; un asesor de la notaría se pondrá en contacto con usted.',
    cta: { t: 'Iniciar trámite', href: '#tramites' },
    img: 'laptopFirma',
  },
  {
    kicker: 'Servicios notariales',
    titulo: 'Conozca todos nuestros servicios notariales',
    texto: 'Estamos aquí para ayudarle cuando más lo necesita. Revise la lista de servicios y los requisitos de cada uno.',
    cta: { t: 'Conocer', href: '#servicios' },
    img: 'traje',
  },
];

export const tramitesLinea = [
  { t: 'Poder fuera de registro', d: '¿Necesita que su apoderado pueda tramitar documentos en el Perú? Inicie su trámite con nosotros.', img: 'manos', req: 'poder' },
  { t: 'Autorización de viaje', d: 'Inicie aquí el trámite para solicitar el permiso de viaje de un menor de edad.', img: 'viaje', req: 'viaje' },
  { t: 'Legalización de libro', d: 'Legalice con nosotros los libros societarios y/o contables que su empresa requiera.', img: 'libros', req: 'libros' },
  { t: 'Carta notarial', d: 'Envíe su carta con fecha cierta y constancia de entrega dentro de la jurisdicción.', img: 'sobreLacre', req: 'cartas' },
];

export const servicios = {
  protocolares: {
    titulo: 'Servicios protocolares',
    intro: 'Actos que se incorporan al Protocolo (archivo) del Notario, quien da fe de la identidad, capacidad, libertad y conocimiento de los otorgantes.',
    items: [
      { id: 'transferencia', t: 'Transferencia vehicular', d: 'Realice su transferencia vehicular de manera segura; nos encargamos de la inscripción respectiva ante SUNARP.', img: 'auto' },
      { id: 'escrituras', t: 'Escrituras públicas', d: 'Realice su escritura con la autorización del notario. Revise la relación de actos que puede formalizar.', img: 'firmaMesa' },
      { id: 'no-contenciosos', t: 'Asuntos no contenciosos', d: 'Si busca legalizar o legitimar una situación jurídica mediante la comprobación de ciertos hechos, podemos ayudarle.', img: 'reunionFirma' },
    ],
  },
  extraprotocolares: {
    titulo: 'Servicios extraprotocolares',
    intro: 'Certificaciones que el notario extiende fuera del protocolo, dejando constancia de hechos y documentos.',
    items: [
      { id: 'cartas', t: 'Cartas notariales', d: 'El notario certifica la entrega de sus cartas dentro de los límites de su jurisdicción, dejando constancia de su entrega.', img: 'sobreLacre' },
      { id: 'firmas', t: 'Legalización de firmas', d: '¿Necesita certificar que la firma de un documento privado es auténtica? Conozca los requisitos.', img: 'firma' },
      { id: 'copias', t: 'Legalización de copias', d: 'Certifique las reproducciones de documentos con la autorización notarial correspondiente.', img: 'pilas' },
      { id: 'viaje', t: 'Autorización de viaje', d: 'Documento por el cual los padres autorizan el viaje de su hijo menor de edad dentro o fuera del país.', img: 'mapa' },
      { id: 'poder', t: 'Poder fuera de registro', d: 'Autorice a otra persona a realizar trámites administrativos a nombre del poderdante.', img: 'manos' },
      { id: 'libros', t: 'Legalización de libros y hojas sueltas', d: 'Certifique la apertura de libros de actas, de contabilidad y otros con autorización del notario.', img: 'contable' },
    ],
  },
};

// Requisitos (resumidos de las páginas internas del sitio de referencia).
export const requisitos = [
  {
    id: 'transferencia', grupo: 'Protocolares', t: 'Transferencia vehicular',
    intro: 'Instrumento público que extiende el Notario con las formalidades de ley para la transferencia de vehículos. La presentación de partes a SUNARP es cautiva para el Notario ante el cual se extendió el acta.',
    lista: [
      'Deberán estar presentes compradores y vendedores conjuntamente.',
      'Copia de la tarjeta de identificación vehicular (TIVE).',
      'Copia del SOAT vigente a la fecha de transferencia.',
      'Original y copia del documento de identidad vigente de los contratantes (DNI con constancia de votación al día).',
      'Original y copia del medio de pago bancarizado.',
      'Si el comprador es casado, copia del documento de identidad de su cónyuge.',
      'Vehículos con menos de 3 años de inmatriculación: comprobante de pago del impuesto vehicular.',
      'Apoderados o representantes: vigencia de poder con antigüedad no mayor a 30 días.',
    ],
  },
  {
    id: 'escrituras', grupo: 'Protocolares', t: 'Escrituras públicas',
    intro: 'Documento que constata ante notario un hecho o acto jurídico autorizado por el mismo: declaraciones de voluntad, contratos y negocios jurídicos de cualquier índole.',
    lista: [
      'Minuta firmada por las partes y autorizada por abogado colegiado.',
      'Documento de identidad vigente de todos los otorgantes.',
      'Copia literal o vigencia de poder, en caso de representantes.',
      'Constancia del medio de pago cuando corresponda.',
      'Autoavalúo y pago del impuesto predial, en caso de inmuebles.',
    ],
  },
  {
    id: 'no-contenciosos', grupo: 'Protocolares', t: 'Asuntos no contenciosos',
    intro: 'Trámites que permiten legalizar o legitimar una situación jurídica mediante la comprobación de hechos, sin necesidad de acudir al Poder Judicial.',
    lista: [
      'Solicitud firmada por el interesado y abogado.',
      'Documento de identidad de los solicitantes.',
      'Partidas (nacimiento, matrimonio o defunción) según el tipo de trámite.',
      'Publicaciones de ley cuando el procedimiento lo exija.',
    ],
  },
  {
    id: 'cartas', grupo: 'Extraprotocolares', t: 'Cartas notariales',
    intro: 'La carta notarial es una forma legal de comunicar algo a un tercero —persona natural o jurídica— y otorga fecha cierta al documento enviado.',
    lista: [
      'Presentar la carta debidamente firmada, en original y dos copias.',
      'Indicar claramente nombre o razón social y dirección del destinatario y del remitente.',
    ],
  },
  {
    id: 'firmas', grupo: 'Extraprotocolares', t: 'Legalización de firmas',
    intro: 'Acto notarial mediante el cual se da fe de que la firma que se encuentra en un documento público o privado es auténtica.',
    lista: [
      'Documento a legalizar.',
      'Documento de identidad original.',
      'Copia literal (máx. 3 meses) o vigencia de poder (máx. 1 mes) si actúa como apoderado o representante.',
      'Si el solicitante no puede firmar, interviene un testigo a ruego con su documento de identidad.',
      'Si el documento implica entrega de dinero superior a S/ 3,500.00, acreditar el medio de pago.',
    ],
  },
  {
    id: 'copias', grupo: 'Extraprotocolares', t: 'Legalización de copias',
    intro: 'Certificación de que la reproducción de un documento coincide con su original.',
    lista: [
      'Documento original.',
      'Copias legibles del documento a certificar.',
    ],
  },
  {
    id: 'viaje', grupo: 'Extraprotocolares', t: 'Autorización de viaje',
    intro: 'Documento certificado notarialmente por el cual los padres autorizan el viaje de su hijo menor de edad dentro o fuera del territorio peruano, solo o acompañado.',
    lista: [
      'Documento de identidad de los padres.',
      'Documento de identidad del menor.',
      'Partida de nacimiento del menor con antigüedad no mayor a tres meses.',
      'Si el menor viaja solo: fecha de viaje y datos de la aerolínea.',
    ],
  },
  {
    id: 'poder', grupo: 'Extraprotocolares', t: 'Poder fuera de registro',
    intro: 'Autorización a otra persona para realizar trámites administrativos a nombre del poderdante.',
    lista: [
      'Documento de identidad del poderdante.',
      'Datos completos del apoderado (nombre y número de documento).',
      'Detalle de las facultades que se otorgan.',
    ],
  },
  {
    id: 'libros', grupo: 'Extraprotocolares', t: 'Legalización de libros',
    intro: 'Certificación de la apertura de libros y hojas sueltas de actas, de contabilidad y otros.',
    lista: [
      'Libro u hojas sueltas debidamente foliados.',
      'Ficha RUC de la empresa.',
      'Documento de identidad del representante legal.',
      'Certificado del libro anterior, en caso de libros sucesivos.',
    ],
  },
];

export const compromiso = {
  titulo: 'Nuestro compromiso es brindarle un servicio de calidad',
  texto: 'En tienda.com Notaría disponemos de un grupo profesional con el cual brindamos servicios notariales eficaces y de excelente calidad.',
  lista: [
    'Contamos con personal altamente calificado para que cada usuario reciba una atención integral.',
    'Le brindamos asesoramiento y consultoría en actos jurídicos.',
    'Lo atenderemos de forma personalizada para ayudarlo de manera eficiente.',
    'Ponemos a su disposición nuestra página web para que encuentre la información oportuna siempre.',
  ],
  valores: ['Experiencia', 'Seguridad jurídica', 'Trabajo en equipo', 'Compromiso'],
};

export const cuentas = [
  { banco: 'Banco Andino', sigla: 'BA', concepto: 'Derechos notariales', titular: 'tienda.com Notaría S.A.C.', cuenta: '000-1234567-0-10', cci: '002-000-001234567010-18' },
  { banco: 'Banco del Pacífico', sigla: 'BP', concepto: 'Derechos notariales', titular: 'tienda.com Notaría S.A.C.', cuenta: '0011-0000-0100000031-03', cci: '011-000-000100000031-03' },
  { banco: 'Banco del Pacífico', sigla: 'BP', concepto: 'Derechos registrales', titular: 'tienda.com Notaría S.A.C.', cuenta: '0011-0000-0100011572-03', cci: '011-000-000100011572-03' },
];

export const equipo = [
  { area: 'Servicios protocolares', personas: [
    { n: 'Lucía Paredes Ormeño', mail: 'protocolares@tienda.com', wsp: '900 000 201', anexo: '#109' },
    { n: 'Martín Cáceres Luna', mail: 'legal@tienda.com', wsp: '900 000 202', anexo: '#102' },
  ] },
  { area: 'Constitución de empresas', personas: [
    { n: 'Diego Salcedo Ríos', mail: 'constituciones@tienda.com', wsp: '900 000 203', anexo: '#105' },
  ] },
  { area: 'Servicios extraprotocolares', personas: [
    { n: 'Rosa Medina Huertas', mail: 'extraprotocolares@tienda.com', wsp: '900 000 204', anexo: '#101' },
    { n: 'Carla Benavides Soto', mail: 'legalizaciones@tienda.com', anexo: '#114' },
  ] },
  { area: 'Asistente del notario', personas: [
    { n: 'Valeria Núñez Prado', mail: 'asistente@tienda.com', wsp: '900 000 205', anexo: '#110' },
  ] },
  { area: 'Registros públicos', personas: [
    { n: 'Inscripciones', mail: 'inscripciones@tienda.com', wsp: '900 000 206', anexo: '#107' },
  ] },
  { area: 'Archivo / Partes y testimonios', personas: [
    { n: 'Archivo', mail: 'archivo@tienda.com', anexo: '#112' },
    { n: 'Partes y testimonios', mail: 'traslados@tienda.com' },
  ] },
  { area: 'Caja', personas: [
    { n: 'Caja', mail: 'caja@tienda.com', anexo: '#108' },
  ] },
  { area: 'Administración', personas: [
    { n: 'Gabriela Torres Vidal', mail: 'administracion@tienda.com', anexo: '#111' },
  ] },
];

export const testimonios = [
  { q: 'Cuentan con profesionales altamente calificados y muy eficientes. Mi transferencia quedó inscrita sin contratiempos.', n: 'Paola Ramírez', cargo: 'Gerente general', emp: 'Estudio Ramírez & Asociados', img: 'p1' },
  { q: 'Todo el equipo es eficiente, cortés y profesional. La consulta del kardex en línea nos ahorra muchas llamadas.', n: 'Jorge Castañeda', cargo: 'Administrador', emp: 'Inversiones del Sur S.A.C.', img: 'p2' },
  { q: 'Nuestro estudio legal está satisfecho con los servicios brindados. Los plazos siempre se cumplen.', n: 'Miguel Ángel Rojas', cargo: 'Socio', emp: 'Rojas Abogados y Contadores E.I.R.L.', img: 'p3' },
];

export const entidades = ['SUNAT', 'RENIEC', 'SBS', 'SUNARP'];

export const tiposCita = ['Transferencia vehicular', 'Escritura pública', 'Asunto no contencioso', 'Carta notarial', 'Legalización de firmas', 'Autorización de viaje', 'Poder fuera de registro', 'Otro / consulta general'];

// Resultados demo para "Consulta tu Kardex" (ficticios).
export const kardexDemo = [
  { kardex: '2026-01584', doc: '45879632', fecha: '12/09/2026', acto: 'Compraventa de vehículo', estado: 'Inscrito en SUNARP', paso: 4 },
  { kardex: '2026-01612', doc: '20601234567', fecha: '18/09/2026', acto: 'Constitución de sociedad (S.A.C.)', estado: 'En firma de otorgantes', paso: 2 },
  { kardex: '2026-01655', doc: '70125489', fecha: '23/09/2026', acto: 'Poder fuera de registro', estado: 'Listo para recoger', paso: 3 },
];

export const pasosKardex = ['Recibido', 'En firma', 'Concluido', 'Inscrito'];
