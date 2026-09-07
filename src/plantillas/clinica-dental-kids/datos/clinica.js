const u = (id, w = 1200, h = 1400) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

const IMG = {
  heroDientes: '1631051103633-24959376b92d',
  heroSonrisa: '1611146033545-5e1e5ad951d8',
  heroConfianza: '1631051104176-4fb841f41c9f',
  heroRisa: '1593183230686-69876b0cb240',
  espPediatria: '1533394494298-1aebf5352dc7',
  espPrimeraVisita: '1780327065644-399075fb9e9b',
  espOrtodoncia: '1603472559212-8820d4e0e041',
  espEstetica: '1622408064430-9728776f96e6',
  espSedacion: '1653508310895-62141575a3a9',
  espTemor: '1573384369939-f10c8e6d9219',
  espEndodoncia: '1565090568947-7293970ba471',
  espBebes: '1619642532128-30519b11291a',
  casoNervioso: '1595421552408-cfbbbd56bbaf',
  casoFeliz: '1611146033545-5e1e5ad951d8',
  casoNervioso2: '1621354750058-ba77aba38157',
  casoFeliz2: '1593183230686-69876b0cb240',
  galeria1: '1552873816-636e43209957',
  galeria2: '1601299124383-d65f0339d910',
  galeria3: '1621354748873-1d97fff3f8f6',
  galeria4: '1609050156163-a649d11c3368',
  galeria5: '1621354749264-cf8fa25ad828',
  galeria6: '1747154605982-6843c308edde',
  galeria7: '1674649205910-ce785b24c134',
  galeria8: '1652761029249-6ec32a82ccb0',
  ctaFinal: '1499081589563-7c400fcd94e8',
};

export const marca = {
  nombre: 'tu tienda.com',
  sub: 'Kids',
  claim: 'Su primera sonrisa feliz en el dentista.',
  tel: '991 398 311',
  correo: 'hola@tutienda.com',
};

export const nav = [
  { t: 'Inicio', href: '#top' },
  { t: 'Especialidades', href: '#especialidades' },
  { t: 'Antes y después', href: '#casos' },
  { t: 'Galería', href: '#galeria' },
  { t: 'Sedes', href: '#sedes' },
  { t: 'Preguntas', href: '#preguntas' },
];

export const hero = {
  insignia: {
    nombre: 'Mateo, 6 años',
    frase: '"¡No me dolió nada!"',
    img: u(IMG.heroSonrisa, 200, 200),
  },
  tags: ['Primera visita', 'Sin miedo', 'Ortodoncia', 'Bebés'],
  slides: [
    {
      kicker: 'Odontopediatría en Perú',
      titulo: 'Que su primera visita sea un buen recuerdo',
      sub: 'Atención exclusiva para bebés, niños y adolescentes, en consultorios pensados para que se sientan en confianza — no en un hospital.',
      img: u(IMG.heroDientes),
    },
    {
      kicker: 'Sin lágrimas, sin dramas',
      titulo: 'Especialistas en pacientes con temor al doctor',
      sub: 'Técnicas de manejo de conducta y sedación consciente para las visitas que más preocupan a los papás.',
      img: u(IMG.heroConfianza),
    },
    {
      kicker: 'Resultado real',
      titulo: 'Sonrisas que hablan por sí solas',
      sub: 'Más de 55,000 niños atendidos en 21 años. La mayoría vuelve pidiendo ir al dentista.',
      img: u(IMG.heroRisa),
    },
    {
      kicker: 'Para toda la familia',
      titulo: 'Desde el primer diente hasta los brackets',
      sub: 'Un mismo equipo acompaña a tu hijo en cada etapa: bebé, niño y adolescente.',
      img: u(IMG.heroSonrisa),
    },
  ],
};

export const estadisticas = [
  { n: 55000, sufijo: '+', t: 'Niños atendidos', icono: 'corazon' },
  { n: 21, sufijo: ' años', t: 'De experiencia', icono: 'reloj' },
  { n: 4900, sufijo: '+', t: 'Reseñas 5 estrellas', icono: 'estrella' },
  { n: 10, sufijo: '', t: 'Sedes en Perú', icono: 'mapa' },
];

export const filtrosEdad = [
  { id: 'todos', t: 'Todos', icono: 'todos' },
  { id: 'bebes', t: 'Bebés (0-3)', icono: 'bebe' },
  { id: 'ninos', t: 'Niños (4-10)', icono: 'nino' },
  { id: 'adolescentes', t: 'Adolescentes (11+)', icono: 'adolescente' },
];

export const especialidades = [
  { img: u(IMG.espPediatria, 700, 900), t: 'Odontopediatría', d: 'Chequeos y limpiezas adaptadas a cada edad.', edad: ['bebes', 'ninos', 'adolescentes'] },
  { img: u(IMG.espPrimeraVisita, 700, 900), t: 'Primera visita sin miedo', d: 'Una cita de bienvenida, sin instrumentos, para perder el miedo.', edad: ['bebes', 'ninos'] },
  { img: u(IMG.espOrtodoncia, 700, 900), t: 'Ortodoncia y brackets', d: 'Alineadores y brackets estéticos para adolescentes.', edad: ['adolescentes'] },
  { img: u(IMG.espEstetica, 700, 900), t: 'Odontología estética infantil', d: 'Restauraciones del color del diente, casi invisibles.', edad: ['ninos', 'adolescentes'] },
  { img: u(IMG.espSedacion, 700, 900), t: 'Sedación consciente', d: 'Para tratamientos largos o niños muy sensibles.', edad: ['bebes', 'ninos', 'adolescentes'] },
  { img: u(IMG.espTemor, 700, 900), t: 'Pacientes con temor al doctor', d: 'Manejo de conducta especializado, paso a paso.', edad: ['ninos', 'adolescentes'] },
  { img: u(IMG.espEndodoncia, 700, 900), t: 'Endodoncia infantil', d: 'Tratamiento de conductos en dientes de leche y definitivos.', edad: ['ninos', 'adolescentes'] },
  { img: u(IMG.espBebes, 700, 900), t: 'Control del bebé', d: 'Revisión desde la salida del primer diente.', edad: ['bebes'] },
];

export const humores = [
  {
    id: 'tranquilo',
    emoji: '😊',
    t: 'Tranquilo',
    titulo: '¡Así nos gusta!',
    texto: 'Si tu peque ya está tranquilo, seguimos igual: le mostramos cada instrumento antes de usarlo y avanzamos a su ritmo.',
    cta: 'Ver odontopediatría',
    href: '#especialidades',
  },
  {
    id: 'nervioso',
    emoji: '😐',
    t: 'Nervioso',
    titulo: 'Es más común de lo que crees',
    texto: 'Usamos juegos y cuentos en la sala de espera para bajar la ansiedad antes de entrar al consultorio.',
    cta: 'Conocer nuestro método',
    href: '#casos',
  },
  {
    id: 'miedo',
    emoji: '😟',
    t: 'Le tiene miedo',
    titulo: 'Tenemos un plan para esto',
    texto: 'Nuestro equipo está entrenado en manejo de conducta y, si hace falta, sedación consciente para que la cita sea sin trauma.',
    cta: 'Ver pacientes con temor',
    href: '#especialidades',
  },
  {
    id: 'primeravez',
    emoji: '⭐',
    t: 'Primera vez',
    titulo: '¡Bienvenidos!',
    texto: 'La primera cita es solo para conocerse: revisamos, jugamos y le explicamos todo antes de tocar un solo diente.',
    cta: 'Agendar primera visita',
    href: '#preguntas',
  },
];

export const casos = [
  {
    t: 'De la puerta al sillón',
    d: 'Llegó agarrado de la mano de mamá, nervioso por lo que no conocía.',
    antes: u(IMG.casoNervioso, 500, 500),
    despues: u(IMG.casoFeliz, 500, 500),
  },
  {
    t: 'Primera cita superada',
    d: 'Después de conocer el consultorio y jugar un rato, todo cambia.',
    antes: u(IMG.casoNervioso2, 500, 500),
    despues: u(IMG.casoFeliz2, 500, 500),
  },
];

export const galeria = [
  { img: u(IMG.galeria1, 700, 700), alt: 'Niño sonriendo en la sala de espera' },
  { img: u(IMG.galeria2, 700, 700), alt: 'Niña feliz después de su control' },
  { img: u(IMG.galeria3, 700, 700), alt: 'Bebé en su primera revisión' },
  { img: u(IMG.galeria4, 700, 700), alt: 'Niño explorando el consultorio' },
  { img: u(IMG.galeria5, 700, 700), alt: 'Hermanos esperando su turno' },
  { img: u(IMG.galeria6, 700, 700), alt: 'Sonrisa después de la cita' },
  { img: u(IMG.galeria7, 700, 700), alt: 'Niño mostrando sus dientes' },
  { img: u(IMG.galeria8, 700, 700), alt: 'Risas en la sala de juegos' },
];

export const testimonios = [
  { texto: 'Mi hijo le tenía pánico al dentista desde una mala experiencia. Aquí lo trataron con una paciencia increíble.', autor: 'Marisol T.', hijo: 'Mamá de Fabrizio, 5 años' },
  { texto: 'La sala de juegos hace toda la diferencia. Mi hija no quería irse después de su control.', autor: 'Renzo Q.', hijo: 'Papá de Valentina, 4 años' },
  { texto: 'Nos explicaron cada paso antes de hacerlo. Mi hijo salió contando lo divertido que fue.', autor: 'Karina S.', hijo: 'Mamá de Thiago, 7 años' },
  { texto: 'Empezamos la ortodoncia y el equipo fue súper claro con los tiempos y el cuidado en casa.', autor: 'Diego M.', hijo: 'Papá de Camila, 13 años' },
];

export const horario = [
  { dia: 'Lunes', horas: '09:00 - 20:00' },
  { dia: 'Martes', horas: '09:00 - 20:00' },
  { dia: 'Miércoles', horas: '09:00 - 20:00' },
  { dia: 'Jueves', horas: '09:00 - 20:00' },
  { dia: 'Viernes', horas: '09:00 - 20:00' },
  { dia: 'Sábado', horas: '09:00 - 20:00' },
  { dia: 'Domingo', horas: 'Solo con cita previa' },
];

export const sedes = [
  { t: 'Huancayo', dir: 'Pje. Sta. Elena 147' },
  { t: 'Miraflores', dir: 'Av. Larco 345' },
  { t: 'San Isidro', dir: 'Av. Conquistadores 850' },
  { t: 'Surco', dir: 'Juan Soto Bermeo 460' },
  { t: 'Los Olivos', dir: 'Jr. Los Gladiolos Mz. B Lt10' },
  { t: 'Arequipa', dir: 'Urb. Los Ángeles de Umacollo A-5' },
  { t: 'Cusco', dir: 'Urb. Barrio Profesional C-7-A' },
  { t: 'Trujillo', dir: 'Pje. Fermín Tanguis 345' },
  { t: 'Tacna', dir: 'Pasaje Reinoso 1187' },
  { t: 'Juliaca', dir: 'Jr. 9 de Diciembre 309' },
];

export const faq = [
  { p: '¿A qué edad debe ser la primera visita?', r: 'Recomendamos la primera revisión con la salida del primer diente, o antes del primer año de vida.' },
  { p: '¿Qué pasa si mi hijo le tiene mucho miedo al dentista?', r: 'Contamos con especialistas en manejo de conducta y, si es necesario, sedación consciente para que la experiencia no sea traumática.' },
  { p: '¿Cuánto dura una consulta?', r: 'La primera cita dura entre 30 y 45 minutos e incluye tiempo para que tu hijo conozca el consultorio antes de la revisión.' },
  { p: '¿Trabajan con seguros?', r: 'Sí, trabajamos con las principales aseguradoras. Escríbenos y validamos tu cobertura antes de la cita.' },
  { p: '¿Puedo quedarme en el consultorio con mi hijo?', r: 'Por supuesto, los papás pueden acompañar toda la consulta si el niño lo necesita.' },
  { p: '¿Con qué frecuencia debe visitar al odontopediatra?', r: 'Recomendamos un control cada 6 meses, igual que en adultos, para prevenir caries a tiempo.' },
];

export const footerEspecialidades = ['Odontopediatría', 'Ortodoncia y brackets', 'Odontología estética', 'Sedación consciente', 'Pacientes con temor', 'Endodoncia infantil'];

export const ctaFinal = { img: u(IMG.ctaFinal, 900, 1100) };
