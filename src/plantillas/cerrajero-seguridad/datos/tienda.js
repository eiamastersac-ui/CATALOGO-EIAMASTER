// Datos demo — cerrajero-seguridad (inspirada en tucerrajerodeseguridad.com)
// Marca propia: tienda.com Seguridad. Sin login. Imagenes: Unsplash del rubro
// (llaves, cerraduras, candados, cajas fuertes), verificadas con contact sheet.

export const marca = {
  nombre: 'tienda.com',
  sub: 'Seguridad',
  lema: 'Distribuidor oficial · +22.000 pedidos',
  tel: '644 000 123',
  telCrudo: '34644000123',
  correo: 'hola@tienda.com',
};

export const euros = (n) => `${Number(n).toLocaleString('es-ES', { maximumFractionDigits: 0 })}€`;

const IMG = {
  llavesCerradura: '1750614335370-fa6e54d970db',
  puertaLlaves: '1681833375133-3cf8a514d6b3',
  cajasSeguridad: '1565126035964-29e1c95b13f9',
  manilla: '1757590108469-693d6f6a0165',
  candadoPuerta: '1635602739175-bab409a6e94c',
  manoLlaves: '1722487631997-cf1e0f92c2c4',
  llavesSuelo: '1698358530697-dd421871f576',
  llaveroLaton: '1678869521205-e9becb190e43',
  candadoReja: '1743976314550-1ef362f12a4b',
  candadoOxido: '1687690496828-ebab05b0d3fc',
  entregaLlaves: '1741156386380-0236c72eb6f9',
  puertaMadera: '1605332402336-9b3cd23d3128',
  llavesAntiguas: '1584045446619-7146285c9811',
  bocallave: '1746370636321-7cf8cb49326c',
  cerraduraSmart: '1558002038-1055907df827',
  camaraFuerte: '1582139329536-e7284fece509',
  camaras: '1557597774-9d273605dfa9',
  instalador: '1621905251189-08b45d6a269e',
  herramientas: '1530124566582-a618bc2615dc',
  candadoCombinacion: '1633265486064-086b219458ec',
};

export const u = (id, w = 600, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}${h ? `&h=${h}` : ''}&q=80`;

export const img = (k, w, h) => u(IMG[k], w, h);

/* ---------------- cabecera ---------------- */
export const beneficios = [
  { ico: '🚚', t: 'Envío Gratis 24h', s: 'En el 99% de pedidos' },
  { ico: '🔄', t: 'Siempre la Última Versión', s: 'Modelos 2026' },
  { ico: '🪙', t: 'Ganas CerraCoins', s: 'Canjeables por descuentos' },
  { ico: '📦', t: '+24.000 Pedidos Anuales', s: 'Cerrajería top ventas' },
];

export const nav = [
  { t: 'Tienda', ico: '🛍️', href: '#categorias' },
  {
    t: 'Packs Ahorro',
    destacado: true,
    href: '#packs',
    sub: [
      'Packs bombín + escudo',
      'Pack bombín + escudo magnético',
      'Pack bombín + cerrojo',
      'Pack bombines igualados',
      'Pack bombín + cerradura electrónica',
    ],
  },
  {
    t: 'Bombines',
    ico: '🔑',
    href: '#bombines',
    sub: [
      'Perfil europeo',
      'Bombines M&C',
      'Bombines CISA RS5',
      'Bombines KESO',
      'Bombines KABA',
      'Perfil suizo',
      'Perfil Sidese',
      'Perfil Fichet',
      '🪛 Repuestos bombines M&C',
      '🔑🔑 Copia de llaves',
    ],
  },
  {
    t: 'Escudos',
    ico: '🛡️',
    href: '#escudos',
    sub: [
      '⚫ Ver todos',
      'Escudos DISEC',
      'Escudos DMC',
      'Escudos magnéticos',
      'Escudos Ezcurra 424',
      'Escudos Dierre',
      'Escudos Sidese',
    ],
  },
  { t: 'Cerrojos', ico: '🔒', href: '#cerrojos' },
  {
    t: 'Domótica',
    ico: '🛜',
    href: '#destacado',
    sub: ['📲 Cerraduras electrónicas', '👁️ Mirillas digitales'],
  },
  {
    t: 'Más',
    ico: '➕',
    href: '#categorias',
    sub: [
      '🧰 Accesorios',
      '🪛 Repuestos bombines M&C',
      '🔐 Cerraduras',
      '🎴 Placas embellecedoras',
      '🚪 Manetas',
      '🧴 Lubricantes bombines',
      '🔑🔑 Copia de llaves',
      '✅ Outlet',
    ],
  },
];

// Items de submenu: si empiezan por letra llevan vineta, si ya traen emoji se dejan.
export const etiquetaSub = (s) => (/^[A-Za-zÁÉÍÓÚÑáéíóúñ]/.test(s) ? `• ${s.toUpperCase()}` : s.toUpperCase());

/* ---------------- banner lema ---------------- */
export const lema = {
  a: 'Los LADRONES se ACTUALIZAN',
  b: '¿Por Qué Tú No?',
  pill: 'Bombines y escudos premium testados',
  lineas: [
    { ico: '', t: 'Probamos todos los productos del mercado' },
    { ico: '✅', t: 'Solo nos quedamos los mejores' },
    { ico: '❌', t: '¿Para qué venderte el resto?' },
  ],
};

/* ---------------- promo mirilla ---------------- */
export const mirilla = {
  kicker: 'Alerta antes de que entren',
  lista: [
    ['Disuade', ': nadie merodea tranquilo ante una cámara'],
    ['Te avisa al móvil', ' si alguien ronda tu puerta'],
    ['Ves quién es en directo', ' desde cualquier lugar'],
    ['Graba y guarda', ' todo lo que pase'],
    ['Llamas a la policía', ' a tiempo si no queda otra'],
  ],
};

/* ---------------- protecciones ---------------- */
export const protecciones = [
  { id: 'bumping', t: 'Bumping' },
  { id: 'impresion', t: 'Impresión' },
  { id: 'ganzua', t: 'Ganzúa' },
  { id: 'rotura', t: 'Rotura' },
  { id: 'extraccion', t: 'Extracción' },
  { id: 'topolino', t: 'Topolino' },
  { id: 'taladro', t: 'Taladro' },
  { id: 'magic', t: 'Magic Key' },
];

/* ---------------- ahorro (instálalo tú) ---------------- */
export const comparativa = {
  cerrajero: { precio: 150, t: 'Lo instala un desconocido', items: ['Mano de obra + desplazamiento', 'Esperas que venga', 'Esperas que termine'] },
  kit: { precio: 17, t: 'Lo instalas tú y lo dejas perfecto', items: ['Kit completo + extras', 'Cuando tú quieras', 'En 15 minutos lo tienes listo'] },
  ahorro: { precio: 133, t: 'Por hacerlo tú mismo puedes', items: ['Subir nivel de seguridad', 'Añadir un producto extra', 'Pegarte una buena cena'] },
};

export const pasos = [
  { t: 'Configuras tu producto', s: 'Añadiendo extras y mejoras' },
  { t: 'Recibes el pack perfecto', s: 'Te llega a casa listo para montar' },
  { t: 'Instalas siguiendo el tutorial', s: 'A tu ritmo, fácil y sin estrés' },
  { t: 'El placer del trabajo bien hecho', s: 'Sabes que quedó perfecto' },
];

export const kitIncluye = [
  'Kit de instalación completo',
  'Bombín guía europeo/suizo',
  'Corona bimetálica',
  'Varilla de acero específica',
  'Contraplaca reforzada',
  'Discos de regrueso',
  'Tornillos extrafuertes',
  'Tutoriales en vídeo',
];

/* ---------------- ofertas con cuenta atras ---------------- */
export const ofertas = [
  { dcto: 15, t: 'Bombines KESO', s: 'KESO 8000 PREMIUM - KESO 8000 ULTRA', cupon: 'TU-KESO' },
  { dcto: 10, t: 'Bombines M&C', s: 'M&C MINOS - M&C CONDOR - M&C MOVE', cupon: 'TU-MC' },
  { dcto: 5, t: 'Escudos DISEC', s: 'DISEC ROK - DISEC KRIPTON - DISEC DIAMOND', cupon: 'TU-DISEC' },
];

/* ---------------- categorias ---------------- */
export const categorias = [
  { t: 'Packs Seguridad', s: 'Ahorra dinero', img: 'candadoCombinacion', badge: 'Ahorro', href: '#packs' },
  { t: 'Bombines', s: 'Alta seguridad', img: 'llavesCerradura', href: '#bombines' },
  { t: 'Escudos', s: 'Acorazados y Magnéticos', img: 'bocallave', href: '#escudos' },
  { t: 'Cerrojos', s: 'Refuerza el apalancamiento', img: 'candadoReja', href: '#cerrojos' },
  { t: 'Domótica', s: 'Mirillas, cerraduras smart', img: 'cerraduraSmart', href: '#destacado' },
  { t: 'Copias', s: 'Duplicado de llaves', img: 'llavesAntiguas', href: '#bombines' },
];

/* ---------------- productos ----------------
   banda: color de la franja inferior de la "ficha" (navy | negro | petroleo)
   corto: texto grande de la franja; nivel: puntuacion NIVEL (0-5)
   antes: precio tachado (si hay oferta) */
const P = (o) => ({ banda: 'petroleo', stock: 'EN STOCK', ...o });

export const filas = [
  {
    id: 'novedades',
    badge: 'Nuevo',
    badgeTipo: 'crema',
    titulo: 'Novedades',
    fondo: 'blanco',
    productos: [
      P({ t: 'Bombín CISA RS5 [2026]', corto: 'CISA RS5', nivel: 5, precio: 195, img: 'llavesCerradura', banda: 'negro' }),
      P({ t: '[Pack Ahorro] CISA RS5 + DISEC ROK [2026]', corto: 'RS5 + ROK', nivel: 5, precio: 275, antes: 295, img: 'puertaLlaves', pack: true, banda: 'negro' }),
      P({ t: '[Pack Ahorro] KABA EXPERT PLUS EXTREME + DISEC ROK [2026]', corto: 'KABA + ROK', nivel: 4.5, precio: 265, antes: 295, img: 'manoLlaves', pack: true }),
      P({ t: '[Pack Ahorro] CISA RS5 + DISEC KRIPTON [2026]', corto: 'RS5 + KRIPTON', nivel: 5, precio: 315, antes: 413, img: 'bocallave', pack: true, banda: 'negro' }),
      P({ t: '[Pack Ahorro] CISA RS5 + DISEC DIAMOND [2026]', corto: 'RS5 + DIAMOND', nivel: 5, precio: 355, antes: 413, img: 'llavesSuelo', pack: true, banda: 'negro' }),
    ],
  },
  {
    id: 'destacado',
    badge: '★ Top',
    badgeTipo: 'navy',
    titulo: 'Destacado',
    fondo: 'hielo',
    productos: [
      P({ t: 'Mirilla Digital DP2 2K [2026]', corto: 'MIRILLA 2K', sup: 'Mirilla digital', precio: 134, antes: 145, img: 'camaras' }),
      P({ t: 'Mirilla Digital EP4 4K [2026]', corto: 'MIRILLA 4K', sup: 'Mirilla digital', precio: 179, antes: 199, img: 'cerraduraSmart' }),
      P({ t: 'CERROJO SAG EP60 M&C CONDOR v8 [2026]', corto: 'SAG EP60', nivel: 5, precio: 199, img: 'candadoReja', banda: 'negro' }),
      P({ t: 'ACTUALIZACIÓN MOTTURA – M&C CONDOR Pompa [2026]', corto: 'M&C CONDOR', sup: 'Actualizar Mottura', precio: 144, img: 'llavesAntiguas' }),
      P({ t: 'Cerradura electrónica PRO 2026 [Pack BRIDGE]', corto: 'PACK BRIDGE', sup: 'Smart PRO', precio: 275, img: 'entregaLlaves' }),
      P({ t: 'ESCUDO DISEC TF001 TRASTEROS', corto: 'DISEC TF001', nivel: 3.5, precio: 75, img: 'candadoPuerta' }),
    ],
  },
  {
    id: 'packs',
    badge: 'Ahorro',
    badgeTipo: 'naranja',
    titulo: 'Packs Bombín + Escudo',
    fondo: 'crema',
    verTodos: 'Ver todos los Packs',
    btnTipo: 'naranja',
    productos: [
      P({ t: '[Pack Ahorro] M&C MINOS + ESCUDO DMC BASSET [2026]', corto: 'MINOS + BASSET', nivel: 3, precio: 104, antes: 139, img: 'llaveroLaton', pack: true }),
      P({ t: '[Pack Ahorro] M&C MINOS + DISEC ROK [2026]', corto: 'MINOS + ROK', nivel: 3.25, precio: 149, antes: 189, img: 'puertaLlaves', pack: true }),
      P({ t: '[Pack Ahorro] M&C CONDOR + DISEC KRIPTON [2026]', corto: 'CONDOR + KRIPTON', nivel: 4, precio: 199, antes: 295, img: 'bocallave', pack: true }),
      P({ t: '[Pack Ahorro] M&C MOVE [V2] + DISEC DIAMOND [2026]', corto: 'MOVE + DIAMOND', nivel: 5, precio: 275, antes: 381, img: 'llavesCerradura', pack: true, banda: 'negro' }),
      P({ t: '[Pack Ahorro] KABA EXPERT PLUS EXTREME + DISEC ROK [2026]', corto: 'KABA + ROK', nivel: 4.5, precio: 265, antes: 295, img: 'manoLlaves', pack: true }),
      P({ t: '[Pack Ahorro] KESO 8000 PREMIUM + DISEC DIAMOND [2026]', corto: 'KESO + DIAMOND', nivel: 5, precio: 365, antes: 467, img: 'llavesSuelo', pack: true, banda: 'negro' }),
    ],
  },
  {
    id: 'bombines',
    emoji: '🔑',
    titulo: 'Bombines Top Seguridad',
    fondo: 'blanco',
    verTodos: 'Ver todos los Bombines',
    productos: [
      P({ t: 'Bombín M&C MINOS [2026]', corto: 'M&C MINOS', nivel: 3.5, precio: 71, img: 'llaveroLaton' }),
      P({ t: 'Bombín M&C CONDOR [2026]', corto: 'M&C CONDOR', nivel: 4, precio: 96, img: 'llavesAntiguas' }),
      P({ t: 'Bombín M&C MOVE [2026] [Versión 2]', corto: 'M&C MOVE', nivel: 4.5, precio: 124, img: 'manoLlaves' }),
      P({ t: 'Bombín CISA RS5 [2026]', corto: 'CISA RS5', nivel: 5, precio: 195, img: 'llavesCerradura', banda: 'negro' }),
      P({ t: 'Bombín KESO 8000 PREMIUM Ω² [2026]', corto: 'KESO PREMIUM', nivel: 5, precio: 237, img: 'puertaLlaves', banda: 'negro' }),
      P({ t: 'Bombín KESO 8000 ULTRA Ω² [2026]', corto: 'KESO ULTRA', nivel: 5, precio: 330, img: 'llavesSuelo', banda: 'negro' }),
    ],
  },
  {
    id: 'escudos',
    emoji: '🛡️',
    titulo: 'Escudos Acorazados',
    fondo: 'hielo',
    verTodos: 'Ver todos los Escudos',
    productos: [
      P({ t: 'Escudo DISEC DIAMOND BKD280 [2026]', corto: 'DISEC DIAMOND', nivel: 5, precio: 218, img: 'bocallave', banda: 'negro' }),
      P({ t: 'Escudo DISEC KRIPTON BKS280 [2026]', corto: 'DISEC KRIPTON', nivel: 4.5, precio: 163, img: 'manilla' }),
      P({ t: 'Escudo DISEC ROK BD280 [2026]', corto: 'DISEC ROK', nivel: 4, precio: 104, img: 'puertaMadera' }),
      P({ t: 'Escudo DMC BASSET [2026] EN OFERTA', corto: 'DMC BASSET', nivel: 3.5, precio: 35, antes: 49, img: 'candadoPuerta', banda: 'negro' }),
      P({ t: 'Escudo DISEC LG280EZC [EZCURRA] [2026]', corto: 'DISEC LG280EZC', nivel: 4, precio: 121, img: 'candadoOxido' }),
      P({ t: 'ESCUDO DISEC PERFIL SUIZO LG280ARC ARCU y SEA 23 [2026]', corto: 'DISEC LG280ARC', nivel: 4.5, precio: 155, img: 'bocallave' }),
    ],
  },
  {
    id: 'magneticos',
    emoji: '🧲',
    titulo: 'Magnéticos Perfil Europeo',
    fondo: 'blanco',
    verTodos: 'Ver todos los Magnéticos',
    productos: [
      P({ t: 'Escudo MAGNÉTICO DIERRE DISEC MR423 [2026]', corto: 'DISEC MR423', nivel: 4.5, precio: 169, img: 'candadoCombinacion' }),
      P({ t: 'Escudo DISEC MRM25E MAGNÉTICO [2026]', corto: 'DISEC MRM25E', nivel: 4.5, precio: 175, img: 'candadoPuerta' }),
      P({ t: 'Escudo DISEC MAG3G MAGNÉTICO KRIPTON [5 LLAVES] [2026]', corto: 'DISEC MAG3G', nivel: 5, precio: 185, img: 'manilla', banda: 'negro' }),
      P({ t: 'Escudo DISEC LGMRM25EZC [EZCURRA MAGNÉTICO] 2026', corto: 'DISEC LGMRM25', nivel: 4.5, precio: 185, img: 'puertaMadera' }),
      P({ t: 'Escudo DISEC MR500EX MAGNÉTICO [2026] 5LL', corto: 'DISEC MR500', nivel: 4.5, precio: 219, antes: 250, img: 'bocallave' }),
      P({ t: '[Pack Ahorro] BOMBÍN M&C + DISEC MAG3G MAGNÉTICO [5 LLAVES] [2026]', corto: 'M&C + MAG3G', nivel: 5, precio: 299, antes: 343, img: 'llavesCerradura', pack: true }),
    ],
  },
  {
    id: 'cerrojos',
    emoji: '🔒',
    titulo: 'Packs Cerrojo + Bombín',
    fondo: 'hielo',
    verTodos: 'Ver todos los Packs Cerrojo',
    productos: [
      P({ t: '[Pack Ahorro] CERROJO + BOMBÍN + ESCUDO', corto: 'PACK CERROJO', nivel: 5, precio: 209, antes: 270, img: 'candadoReja', banda: 'negro' }),
      P({ t: '[Pack Ahorro] CERROJO SAG EP60 M&C CONDOR v8 + BOMBÍN M&C CONDOR [2026]', corto: 'IGUALADOS', sup: 'Cerrojo + Bombín', precio: 265, antes: 347, img: 'candadoOxido', pack: true }),
      P({ t: '[Pack Ahorro] CERROJO SAG EP50 KESO PREMIUM + BOMBÍN KESO 8000 PREMIUM', corto: 'IGUALADOS', sup: 'Keso Premium', precio: 355, antes: 486, img: 'llavesAntiguas', pack: true, stock: 'EN CAMINO - RESERVAR', diasExtra: 12 }),
      P({ t: '[Pack Ahorro] CERROJO SAG EP50 KESO PREMIUM + BOMBÍN KESO 8000 ULTRA', corto: 'IGUALADOS', sup: 'Keso Ultra', precio: 415, antes: 486, img: 'llaveroLaton', pack: true, stock: 'EN CAMINO - RESERVAR', diasExtra: 12 }),
    ],
  },
];

/* ---------------- footer ---------------- */
export const footerInteres = [
  { t: 'Cupones', color: '#7b1fa2', ico: '%' },
  { t: 'Plazo envío', color: '#1f4e8c', ico: '🚚' },
  { t: 'WhatsApp', color: '#1b7a34', ico: 'wa' },
];

export const footerInfo = [
  { t: 'Envío gratis 24h*', ico: 'camion' },
  { t: 'Pago 100% seguro', ico: 'candado' },
  { t: 'Formas de pago', ico: 'tarjeta' },
  { t: 'Facturación', ico: 'doc' },
  { t: 'Garantía', ico: 'sello' },
  { t: 'Devoluciones', ico: 'flechas' },
  { t: 'Preguntas frecuentes', ico: 'ayuda' },
];

export const pagos = ['TARJETA', 'PayPal', 'G Pay', 'Apple Pay', 'Bizum', 'TRANSFER'];
