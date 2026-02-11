export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  image: string;
  kittenName: string;
  text: string;
}

export interface TestimonialPreview {
  initials: string;
  name: string;
  rating: number;
  text: string;
  location: string;
  timeAgo: string;
}

export const testimonialImages = [
  '/images/testimonials/carlos.png',
  '/images/testimonials/laura.png',
  '/images/testimonials/david-y-ana.png',
  '/images/testimonials/cristina.png',
  '/images/testimonials/erik.png',
  '/images/testimonials/sofia.png',
  '/images/testimonials/carmen.png',
  '/images/testimonials/javier.png',
  '/images/testimonials/miguel-y-laura.png',
  '/images/testimonials/elena.png',
  '/images/testimonials/adrian.png',
  '/images/testimonials/pedro-y-marcos.png',
  '/images/testimonials/mei.png',
  '/images/testimonials/yuki.png',
  '/images/testimonials/roberto-y-daniel.png',
  '/images/testimonials/pablo.png',
  '/images/testimonials/fernando-y-teresa.png',
  '/images/testimonials/alvaro-y-sara.jpg',
  '/images/testimonials/valentina.jpg',
  '/images/testimonials/marco.jpg',
];

export const testimonials: Testimonial[] = [
  {
    name: 'Carlos M.',
    location: 'Madrid',
    rating: 5,
    image: '/images/testimonials/carlos.png',
    kittenName: 'Nieve',
    text: "Nieve es un gatito blanco precioso que nos robó el corazón en cuanto lo vimos. Llegó sano, sociable y con un pelaje inmaculado. El equipo de Criadero Castellano nos orientó en todo momento con la alimentación y los cuidados. No podríamos estar más contentos."
  },
  {
    name: 'Laura P.',
    location: 'Barcelona',
    rating: 5,
    image: '/images/testimonials/laura.png',
    kittenName: 'Mochi',
    text: "Mochi es una gatita con un carácter increíble. Desde que llegó a casa se adaptó perfectamente y se lleva genial con toda la familia. El proceso con Criadero Castellano fue transparente y profesional de principio a fin."
  },
  {
    name: 'David y Ana R.',
    location: 'Valencia',
    rating: 5,
    image: '/images/testimonials/david-y-ana.png',
    kittenName: 'Sombra',
    text: "Sombra es nuestro gatito negro y es pura ternura. Viajamos juntos para recogerlo y fue un momento mágico. La documentación veterinaria estaba completa y el seguimiento postventa ha sido excelente."
  },
  {
    name: 'Cristina V.',
    location: 'Sevilla',
    rating: 5,
    image: '/images/testimonials/cristina.png',
    kittenName: 'Luna',
    text: "Luna es una gatita atigrada con una personalidad arrolladora. Es cariñosa, juguetona y se ha convertido en la reina de la casa. Criadero Castellano hizo que todo el proceso fuera muy sencillo y nos dieron consejos muy útiles."
  },
  {
    name: 'Erik S.',
    location: 'Bilbao',
    rating: 5,
    image: '/images/testimonials/erik.png',
    kittenName: 'Thor',
    text: "Thor es un gatito Maine Coon con una energía increíble. Es juguetón, cariñoso y ya domina el rascador. Se nota que en Criadero Castellano crían a sus gatitos con mucho amor. La mejor decisión que he tomado."
  },
  {
    name: 'Sofía L.',
    location: 'Málaga',
    rating: 5,
    image: '/images/testimonials/sofia.png',
    kittenName: 'Cleo',
    text: "Cleo es mi pequeña Sphynx y es absolutamente adorable. Llegó en perfectas condiciones y con todo el papeleo en orden. El equipo fue muy atento y siempre disponible para resolver mis dudas. Estoy enamorada de mi gatita."
  },
  {
    name: 'Carmen D.',
    location: 'Zaragoza',
    rating: 5,
    image: '/images/testimonials/carmen.png',
    kittenName: 'Simba',
    text: "Simba es un gatito naranja con un carácter dulce y juguetón que ha llenado nuestra casa de alegría. Nuestros hijos están fascinados con él. Criadero Castellano nos entregó toda la documentación y un kit de bienvenida muy completo."
  },
  {
    name: 'Javier T.',
    location: 'Granada',
    rating: 5,
    image: '/images/testimonials/javier.png',
    kittenName: 'Atlas',
    text: "Atlas es un gatito atigrado con un porte impresionante. Es inteligente, curioso y se ha adaptado a la perfección. Todo el proceso con Criadero Castellano fue profesional y cercano. Lo recomendaría sin dudarlo."
  },
  {
    name: 'Miguel y Laura H.',
    location: 'Madrid',
    rating: 5,
    image: '/images/testimonials/miguel-y-laura.png',
    kittenName: 'Canela',
    text: "Canela es nuestra gatita naranja y es puro amor. La recogimos en el aeropuerto y fue amor a primera vista. El transporte fue impecable y llegó tranquila y sana. Criadero Castellano superó todas nuestras expectativas."
  },
  {
    name: 'Elena B.',
    location: 'Barcelona',
    rating: 5,
    image: '/images/testimonials/elena.png',
    kittenName: 'Perla',
    text: "Perla es una gatita preciosa con un pelaje suave y unos ojos cautivadores. Es dulce, sociable y se lleva genial con mi otro gato. La experiencia con Criadero Castellano ha sido fantástica. Atención personalizada y un seguimiento increíble."
  },
  {
    name: 'Adrián G.',
    location: 'Valencia',
    rating: 5,
    image: '/images/testimonials/adrian.png',
    kittenName: 'Copito',
    text: "Copito es un gatito blanco con una personalidad encantadora. Es tranquilo, mimoso y le encanta acurrucarse en el sofá. Todo el proceso fue muy fácil gracias a Criadero Castellano. La calidad genética y la socialización son insuperables."
  },
  {
    name: 'Pedro y Marcos A.',
    location: 'Sevilla',
    rating: 5,
    image: '/images/testimonials/pedro-y-marcos.png',
    kittenName: 'Nacho',
    text: "Nacho es un gatito naranja lleno de energía y travesuras. Es nuestro primer gato y Criadero Castellano nos guió en todo lo necesario como primerizos. El kit de bienvenida fue de gran ayuda. No podríamos estar más agradecidos."
  },
  {
    name: 'Mei L.',
    location: 'Bilbao',
    rating: 5,
    image: '/images/testimonials/mei.png',
    kittenName: 'Kira',
    text: "Kira es una gatita Sphynx con un carácter increíble. Es cariñosa, sociable y siempre busca el contacto humano. Llegó sana y con toda la documentación en regla. Criadero Castellano realmente se preocupa por cada gatito."
  },
  {
    name: 'Yuki N.',
    location: 'Málaga',
    rating: 5,
    image: '/images/testimonials/yuki.png',
    kittenName: 'Milo y Lola',
    text: "Adoptamos dos gatitos, Milo y Lola, y son inseparables. Llegaron en perfecto estado y se adaptaron desde el primer día. El equipo de Criadero Castellano organizó todo el transporte a la perfección. Son la alegría de nuestra casa."
  },
  {
    name: 'Roberto y Daniel F.',
    location: 'Zaragoza',
    rating: 5,
    image: '/images/testimonials/roberto-y-daniel.png',
    kittenName: 'Toffee',
    text: "Toffee es un gatito Bengalí con unos patrones espectaculares. Es súper inteligente y juguetón, ya aprendió varios trucos. Se nota la dedicación de Criadero Castellano en cada detalle. Todo el vecindario se para a preguntarnos por él."
  },
  {
    name: 'Pablo C.',
    location: 'Granada',
    rating: 5,
    image: '/images/testimonials/pablo.png',
    kittenName: 'Bruma',
    text: "Bruma es una gatita gris con un carácter dulce y aventurero. Es mi compañera perfecta, siempre está a mi lado. La comunicación con Criadero Castellano fue excelente durante todo el proceso. Nos enviaron fotos y vídeos antes de recogerla."
  },
  {
    name: 'Fernando y Teresa O.',
    location: 'Madrid',
    rating: 5,
    image: '/images/testimonials/fernando-y-teresa.png',
    kittenName: 'Tigre',
    text: "Tigre es un gatito naranja con una personalidad increíble. Es cariñoso con toda la familia y se lleva genial con los niños. Es nuestro segundo gatito de Criadero Castellano y la experiencia ha sido igual de maravillosa."
  },
  {
    name: 'Álvaro y Sara K.',
    location: 'Barcelona',
    rating: 5,
    image: '/images/testimonials/alvaro-y-sara.jpg',
    kittenName: 'Calabaza',
    text: "Calabaza es nuestro gatito naranja con su jersey verde y es la cosa más adorable del mundo. Lo recogimos en el aeropuerto y desde entonces no hemos dejado de sonreír. Criadero Castellano hizo que todo fuera perfecto."
  },
  {
    name: 'Valentina R.',
    location: 'Sevilla',
    rating: 5,
    image: '/images/testimonials/valentina.jpg',
    kittenName: 'Pixel',
    text: "Pixel es mi pequeña Sphynx y es única en el mundo. Tiene una personalidad fascinante y es increíblemente cariñosa. El proceso de adopción fue impecable y Criadero Castellano me dio total confianza desde el primer momento."
  },
  {
    name: 'Marco J.',
    location: 'Valencia',
    rating: 5,
    image: '/images/testimonials/marco.jpg',
    kittenName: 'Blanco',
    text: "Blanco es un gatito con un corazón enorme. Es tranquilo, cariñoso y tiene un pelaje precioso. Criadero Castellano superó mis expectativas con su profesionalidad y cercanía. Ya estoy pensando en adoptar otro."
  }
];

export const testimonialPreviews: TestimonialPreview[] = [
  {
    initials: 'CM',
    name: 'Carlos M.',
    rating: 5,
    text: "Nieve nos robó el corazón desde el primer momento. Llegó sano, sociable y con un pelaje inmaculado. El equipo de Criadero Castellano nos orientó en todo.",
    location: 'Madrid',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'LP',
    name: 'Laura P.',
    rating: 5,
    text: "Mochi se adaptó perfectamente desde el primer día. El proceso con Criadero Castellano fue transparente y profesional de principio a fin.",
    location: 'Barcelona',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'DA',
    name: 'David y Ana R.',
    rating: 5,
    text: "Sombra es pura ternura. La documentación veterinaria estaba completa y el seguimiento postventa ha sido excelente. Muy recomendable.",
    location: 'Valencia',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'CV',
    name: 'Cristina V.',
    rating: 5,
    text: "Luna se ha convertido en la reina de la casa. Criadero Castellano hizo que todo el proceso fuera muy sencillo y nos dieron consejos muy útiles.",
    location: 'Sevilla',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'ES',
    name: 'Erik S.',
    rating: 5,
    text: "Thor tiene una energía increíble. Se nota que en Criadero Castellano crían a sus gatitos con mucho amor. La mejor decisión que he tomado.",
    location: 'Bilbao',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'SL',
    name: 'Sofía L.',
    rating: 5,
    text: "Cleo es absolutamente adorable. Llegó en perfectas condiciones y con todo el papeleo en orden. Estoy enamorada de mi gatita.",
    location: 'Málaga',
    timeAgo: 'hace 5 semanas'
  },
  {
    initials: 'CD',
    name: 'Carmen D.',
    rating: 5,
    text: "Simba ha llenado nuestra casa de alegría. Nuestros hijos están fascinados con él. El kit de bienvenida fue muy completo.",
    location: 'Zaragoza',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'JT',
    name: 'Javier T.',
    rating: 5,
    text: "Atlas se ha adaptado a la perfección. Todo el proceso con Criadero Castellano fue profesional y cercano. Lo recomendaría sin dudarlo.",
    location: 'Granada',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'ML',
    name: 'Miguel y Laura H.',
    rating: 5,
    text: "Canela es puro amor. La recogimos en el aeropuerto y fue amor a primera vista. Criadero Castellano superó todas nuestras expectativas.",
    location: 'Madrid',
    timeAgo: 'hace 2 meses'
  },
  {
    initials: 'EB',
    name: 'Elena B.',
    rating: 5,
    text: "Perla se lleva genial con mi otro gato. La experiencia con Criadero Castellano ha sido fantástica. Atención personalizada y seguimiento increíble.",
    location: 'Barcelona',
    timeAgo: 'hace 6 semanas'
  },
  {
    initials: 'AG',
    name: 'Adrián G.',
    rating: 5,
    text: "Copito es tranquilo, mimoso y le encanta acurrucarse. La calidad genética y la socialización de Criadero Castellano son insuperables.",
    location: 'Valencia',
    timeAgo: 'hace 4 semanas'
  },
  {
    initials: 'PM',
    name: 'Pedro y Marcos A.',
    rating: 5,
    text: "Nacho está lleno de energía y travesuras. Criadero Castellano nos guió en todo como primerizos. No podríamos estar más agradecidos.",
    location: 'Sevilla',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'ML',
    name: 'Mei L.',
    rating: 5,
    text: "Kira es cariñosa, sociable y siempre busca el contacto humano. Criadero Castellano realmente se preocupa por cada gatito.",
    location: 'Bilbao',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'YN',
    name: 'Yuki N.',
    rating: 5,
    text: "Adoptamos dos gatitos, Milo y Lola, y son inseparables. El equipo organizó todo el transporte a la perfección. Son la alegría de nuestra casa.",
    location: 'Málaga',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'RD',
    name: 'Roberto y Daniel F.',
    rating: 5,
    text: "Toffee es súper inteligente y juguetón. Se nota la dedicación de Criadero Castellano en cada detalle. Todo el vecindario pregunta por él.",
    location: 'Zaragoza',
    timeAgo: 'hace 5 semanas'
  },
  {
    initials: 'PC',
    name: 'Pablo C.',
    rating: 5,
    text: "Bruma es mi compañera perfecta. La comunicación con Criadero Castellano fue excelente. Nos enviaron fotos y vídeos antes de recogerla.",
    location: 'Granada',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'FT',
    name: 'Fernando y Teresa O.',
    rating: 5,
    text: "Tigre es cariñoso con toda la familia. Es nuestro segundo gatito de Criadero Castellano y la experiencia ha sido igual de maravillosa.",
    location: 'Madrid',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'AS',
    name: 'Álvaro y Sara K.',
    rating: 5,
    text: "Calabaza es la cosa más adorable del mundo. Lo recogimos en el aeropuerto y no hemos dejado de sonreír. Todo fue perfecto.",
    location: 'Barcelona',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'VR',
    name: 'Valentina R.',
    rating: 5,
    text: "Pixel es única en el mundo. El proceso de adopción fue impecable y Criadero Castellano me dio total confianza desde el primer momento.",
    location: 'Sevilla',
    timeAgo: 'hace 4 semanas'
  },
  {
    initials: 'MJ',
    name: 'Marco J.',
    rating: 5,
    text: "Blanco tiene un corazón enorme. Criadero Castellano superó mis expectativas con su profesionalidad y cercanía. Ya pienso en adoptar otro.",
    location: 'Valencia',
    timeAgo: 'hace 2 semanas'
  }
];
