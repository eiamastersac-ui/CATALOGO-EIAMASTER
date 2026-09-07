const u = (id, w = 1200, h = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  heroDoctora: '1650803075918-efbee311735d',
  heroAtencion: '1681939282781-341ac4f61996',
  heroPacienteB: '1567516364473-233c4b6fcfbe',
  heroPacienteC: '1526080652727-5b77f74eacd2',
  espSonrisa: '1489278353717-f64c6ee8a4d2',
  espEstetica: '1611690061248-5f8f327e4551',
  espImplante: '1720685193964-4529228a33c1',
  espProtesis: '1684607632829-1e5bf4f21dab',
  espOrtodoncia: '1656514894252-fb336a3ad6a6',
  espPediatria: '1619236200199-2c138e4a5fae',
  espGeneral: '1629909613654-28e377c37b09',
  espCirugia: '1620775997427-9175928218d2',
  clinicaB: '1598256989800-fe5f95da9787',
  clinicaC: '1609207825181-52d3214556dd',
  doctora: '1650803075918-efbee311735d',
};

export const soles = (n) =>
  'S/ ' + Number(n).toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Dental',
  claim: 'Diseñamos sonrisas, cuidamos personas.',
  tel: '987 654 321',
  correo: 'hola@tutienda.com',
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Especialidades', href: '#especialidades' },
  { t: 'Nosotros', href: '#nosotros' },
  { t: 'Casos', href: '#casos' },
  { t: 'Testimonios', href: '#testimonios' },
  { t: 'Preguntas', href: '#preguntas' },
];

export const hero = {
  confianza: {
    nombre: 'Dra. Camila Reyes',
    cargo: 'Odontología estética',
    rating: 4.9,
    resenas: 145,
    experiencia: '9 años de experiencia',
    img: u(IMG.doctora, 200, 200),
  },
  tags: ['Chequeo dental', 'Limpieza', 'Implantes', 'Blanqueamiento', 'Ortodoncia'],
  slides: [
    {
      kicker: 'Clínica dental premium en Lima',
      titulo: 'Odontología moderna con cuidado genuino',
      sub: 'Atención experta para sonrisas sanas y seguras, a cualquier edad — con comodidad, precisión y confianza.',
      img: u(IMG.heroDoctora),
    },
    {
      kicker: 'Diseño de sonrisa',
      titulo: 'Tu sonrisa, planificada al detalle',
      sub: 'Escaneo digital 3D y simulación de resultados antes de empezar cualquier tratamiento.',
      img: u(IMG.heroAtencion),
    },
    {
      kicker: 'Pacientes reales',
      titulo: 'Resultados que se notan, cuidado que se siente',
      sub: 'Más de 6,000 pacientes atendidos con un mismo criterio: escuchar primero, tratar después.',
      img: u(IMG.heroPacienteB),
    },
    {
      kicker: 'Bienvenida',
      titulo: 'Tres sedes en Lima, un mismo estándar',
      sub: 'Miraflores, San Isidro y La Molina — el mismo equipo, la misma calidad, más cerca de ti.',
      img: u(IMG.heroPacienteC),
    },
  ],
};

export const estadisticas = [
  { n: 6000, sufijo: '+', t: 'Pacientes atendidos', icono: 'corazon' },
  { n: 9, sufijo: ' años', t: 'De experiencia', icono: 'reloj' },
  { n: 1800, sufijo: '+', t: 'Reseñas 5 estrellas', icono: 'estrella' },
  { n: 12, sufijo: '', t: 'Especialistas', icono: 'escudo' },
];

export const especialidades = [
  { img: u(IMG.espSonrisa, 700, 900), t: 'Diseño de sonrisa', d: 'Planificación digital de tu sonrisa ideal.' },
  { img: u(IMG.espEstetica, 700, 900), t: 'Estética dental', d: 'Blanqueamiento y carillas con resultado natural.' },
  { img: u(IMG.espImplante, 700, 900), t: 'Implantes dentales', d: 'Piezas perdidas recuperadas con titanio de alta duración.' },
  { img: u(IMG.espProtesis, 700, 900), t: 'Prótesis dentales', d: 'Fijas y removibles, diseñadas a medida.' },
  { img: u(IMG.espOrtodoncia, 700, 900), t: 'Ortodoncia', d: 'Brackets estéticos y alineadores invisibles.' },
  { img: u(IMG.espPediatria, 700, 900), t: 'Odontopediatría', d: 'Atención amable para las sonrisas más pequeñas.' },
  { img: u(IMG.espGeneral, 700, 900), t: 'Odontología general', d: 'Limpiezas y chequeos para toda la familia.' },
  { img: u(IMG.espCirugia, 700, 900), t: 'Cirugía oral', d: 'Extracciones e injertos con sedación consciente.' },
];

export const beneficios = [
  { icono: 'escaneo', t: 'Escaneo 3D', d: 'Diagnóstico digital preciso, sin moldes incómodos.' },
  { icono: 'corazon', t: 'Atención VIP', d: 'Seguimiento personalizado antes, durante y después.' },
  { icono: 'mapa', t: '3 sedes en Lima', d: 'Miraflores, San Isidro y La Molina, cerca de ti.' },
  { icono: 'garantia', t: 'Garantía escrita', d: 'Respaldamos cada tratamiento con documento.' },
];

export const casos = [
  {
    t: 'Sonrisa completamente transformada',
    d: 'Carillas de porcelana en 8 piezas frontales: color, forma y alineación en una sola sesión de diseño.',
    antes: u(IMG.espSonrisa, 500, 500),
    despues: u(IMG.heroPacienteB, 500, 500),
  },
  {
    t: 'Rehabilitación estética integral',
    d: 'Restauración de piezas dañadas con carillas emax para una sonrisa funcional y natural.',
    antes: u(IMG.heroPacienteC, 500, 500),
    despues: u(IMG.espSonrisa, 500, 500),
  },
  {
    t: 'Ortodoncia invisible',
    d: 'Alineadores transparentes durante 10 meses para corregir apiñamiento leve.',
    antes: u(IMG.heroPacienteB, 500, 500),
    despues: u(IMG.heroPacienteC, 500, 500),
  },
];

export const testimonios = [
  { texto: 'Del escaneo 3D al resultado final todo fue transparente. Nunca sentí que me estuvieran vendiendo algo que no necesitaba.', autor: 'Fabiola R.', tratamiento: 'Diseño de sonrisa' },
  { texto: 'Tenía pánico a los dentistas desde niña. El equipo de Lúmina cambió completamente esa relación.', autor: 'Renzo A.', tratamiento: 'Implante dental' },
  { texto: 'Mis hijos ahora piden ir al dentista. La sala infantil y la paciencia del equipo hacen toda la diferencia.', autor: 'Karina M.', tratamiento: 'Odontopediatría' },
  { texto: 'Comparé tres clínicas antes de decidir. Lúmina fue la única que me mostró una simulación real de mi sonrisa.', autor: 'Diego S.', tratamiento: 'Carillas de porcelana' },
];

export const equipo = {
  nombre: 'Dra. Camila Reyes',
  cargo: 'Directora clínica · Odontología estética',
  bio: 'Con más de 9 años de práctica y formación en diseño digital de sonrisa, la Dra. Reyes lidera un equipo de 12 especialistas que comparten un mismo criterio: cada tratamiento empieza por escuchar.',
  credenciales: ['Especialista en Rehabilitación Oral', 'Certificación en Ortodoncia Invisible', 'Miembro del Colegio Odontológico del Perú'],
  img: u(IMG.doctora, 900, 1100),
};

export const ctaFinal = {
  img: u(IMG.clinicaC, 900, 1100),
};

export const faq = [
  { p: '¿Cuánto dura la primera evaluación?', r: 'Entre 40 y 60 minutos. Incluye escaneo 3D, diagnóstico y una simulación de tu plan de tratamiento antes de cualquier decisión.' },
  { p: '¿El tratamiento dental es doloroso?', r: 'Trabajamos con anestesia local y técnicas mínimamente invasivas. La mayoría de pacientes describe el proceso como cómodo, no doloroso.' },
  { p: '¿Aceptan seguros dentales?', r: 'Trabajamos con las principales aseguradoras del país. Escríbenos tu seguro y validamos tu cobertura antes de la cita.' },
  { p: '¿Con qué frecuencia debo visitar al dentista?', r: 'Recomendamos un chequeo cada 6 meses para prevención, aunque cada plan personalizado puede variar según tu caso.' },
  { p: '¿Qué hago en una emergencia dental?', r: 'Contamos con línea de atención prioritaria por WhatsApp para emergencias, con atención el mismo día en nuestras sedes.' },
  { p: '¿Puedo agendar una cita en línea?', r: 'Sí, puedes escribirnos por WhatsApp o completar el formulario de contacto y te confirmamos disponibilidad en minutos.' },
];

export const footerEspecialidades = ['Estética dental', 'Implantes dentales', 'Prótesis dentales', 'Ortodoncia', 'Ortodoncia invisible', 'Odontopediatría', 'Odontología general', 'Cirugía oral'];

export const sedes = [
  { t: 'Miraflores', dir: 'Av. Larco 345, Piso 4' },
  { t: 'San Isidro', dir: 'Av. Conquistadores 850, Of. 302' },
  { t: 'La Molina', dir: 'Av. La Molina 1220' },
];
