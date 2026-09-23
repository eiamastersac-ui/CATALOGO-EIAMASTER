const u = (id, w = 1200, h = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  heroSesion: '1709880754445-8ffbd7e6ab3a',
  examenPierna: '1649751361457-01d3a696c7e6',
  masajePierna: '1712638932314-e2b185ca0930',
  terapiaEnfermera: '1746806942507-a7e93fdd6dd4',
  masajeEspalda: '1741522509407-41cfe73b0b75',
};

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Fisioterapia',
  claim: 'Recupera el movimiento, recupera tu vida.',
  tel: '992 134 117',
  correo: 'citas@tutienda.com',
  direccion: 'Av. Los Sauces 615, Jesús María, Lima',
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Beneficios', href: '#beneficios' },
  { t: 'Tecnología', href: '#tecnologia' },
  { t: 'Preguntas', href: '#preguntas' },
];

export const hero = {
  kicker: 'Terapia de ondas de choque',
  tituloA: '¿El dolor no te deja moverte como antes?',
  tituloB: 'No es normal. Y sí tiene solución.',
  sub: 'Tratamos lesiones deportivas, contracturas, fascitis plantar y dolor crónico con tecnología no invasiva, sin cirugía y sin tiempo de reposo.',
  imgIzq: u(IMG.masajePierna, 500, 620),
  imgDer: u(IMG.terapiaEnfermera, 480, 480),
  form: {
    titulo: 'Agenda tu primera evaluación',
    turnos: ['Mañana', 'Tarde'],
  },
};

export const mitos = [
  { t: 'El dolor articular puede aparecer desde los 30 años, no solo en la vejez.' },
  { t: 'No siempre es por esfuerzo físico o mala postura pasajera.' },
  { t: 'Los analgésicos alivian el síntoma, no resuelven la causa del dolor.' },
];

export const beneficios = [
  { icono: 'escudo', t: 'Seguro y no invasivo', d: 'Sin cirugía, sin anestesia y sin cortes en la piel.' },
  { icono: 'corazon', t: 'Prácticamente indoloro', d: 'La mayoría de pacientes retoma su rutina el mismo día.' },
  { icono: 'reloj', t: 'Retorno rápido', d: 'Sesiones de 20-30 minutos, sin reposo posterior.' },
  { icono: 'estrella', t: 'Resultados visibles', d: 'Mejora notable desde las primeras 2-3 sesiones.' },
];

export const tecnologia = {
  t: 'Equipos que aceleran la recuperación real',
  d: 'Ondas de choque de alta frecuencia que estimulan la circulación, reducen la inflamación y regeneran el tejido dañado — el mismo estándar que usan los equipos médicos deportivos de alto rendimiento.',
  img: u(IMG.examenPierna, 900, 1000),
  badges: ['Certificación FDA del equipo', 'Protocolo médico supervisado'],
};

export const estadisticas = [
  { n: 12000, sufijo: '+', t: 'Sesiones realizadas' },
  { n: 8, sufijo: ' años', t: 'De experiencia clínica' },
  { n: 4, sufijo: '', t: 'Sedes de atención' },
];

export const ctaFinal = {
  t: 'Recupera tu movilidad sin cirugía ni reposo prolongado',
  d: 'Agenda una evaluación con nuestro equipo de fisioterapeutas certificados y arma un plan de recuperación a tu medida.',
  img: u(IMG.masajeEspalda, 1400, 700),
};

export const faq = [
  { p: '¿Cuánto dura cada sesión?', r: 'Entre 20 y 30 minutos por zona tratada, según el diagnóstico y la lesión específica.' },
  { p: '¿Cuántas sesiones necesito?', r: 'La mayoría de casos requiere entre 4 y 6 sesiones, con una periodicidad semanal, aunque cada plan se ajusta al paciente.' },
  { p: '¿El tratamiento duele?', r: 'Se siente una vibración o golpeteo controlado. La mayoría de pacientes lo describe como incómodo, no doloroso.' },
  { p: '¿Para qué lesiones sirve?', r: 'Tendinitis, fascitis plantar, contracturas musculares, dolor de hombro y lesiones deportivas crónicas, entre otras.' },
  { p: '¿Necesito un examen previo?', r: 'Recomendamos una evaluación inicial con nuestro fisioterapeuta para confirmar que el tratamiento es el adecuado para tu caso.' },
];

export const footerCols = {
  trust: 'Más de 12,000 sesiones realizadas con seguimiento médico personalizado.',
  redes: ['Instagram', 'TikTok', 'Facebook'],
};
