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

export const testimonials: Testimonial[] = [
  {
    name: 'María y Javier G.',
    location: 'Madrid',
    rating: 5,
    image: '/images/testi-1.jpeg',
    kittenName: 'Casandra',
    text: "Casandra es una gatita British Shorthair preciosa que nos robó el corazón desde el primer momento. Llegó a casa sana, sociable y con un pelaje azul impresionante. El equipo de Criadero Castellano nos orientó en todo lo relacionado con su alimentación y cuidados específicos de la raza. Estamos encantados con nuestra pequeña y no podríamos estar más agradecidos."
  },
  {
    name: 'Lucía R.',
    location: 'Barcelona',
    rating: 5,
    image: '/images/testi-2.jpeg',
    kittenName: 'Enzo',
    text: "Enzo es un Maine Coon espectacular, con un carácter dulce y juguetón que ha conquistado a toda la familia. Desde el primer día se adaptó perfectamente a nuestro hogar y a nuestros otros gatos. Criadero Castellano nos proporcionó toda la documentación veterinaria y un seguimiento impecable durante las primeras semanas. Sin duda, la mejor decisión que hemos tomado."
  },
  {
    name: 'Carlos y Ana M.',
    location: 'Valencia',
    rating: 5,
    image: '/images/testi-3.jpeg',
    kittenName: 'Bridget',
    text: "Bridget es nuestra gatita Ragdoll y es exactamente como nos la describieron: cariñosa, tranquila y con esos ojos azules que enamoran. Era nuestra primera experiencia adoptando un gatito de raza y Criadero Castellano hizo que todo fuera muy sencillo. Nos dieron consejos sobre el cepillado de su pelo semilargo y la garantía de salud nos dio total tranquilidad."
  },
  {
    name: 'Elena P.',
    location: 'Sevilla',
    rating: 5,
    image: '/images/testi-4.jpeg',
    kittenName: 'Gabi',
    text: "Gabi es un Bengalí con una energía increíble y unos patrones en el pelaje que son una obra de arte. Es súper inteligente, ya aprendió a buscar juguetes y responde cuando le llamas por su nombre. Se nota que en Criadero Castellano crían a sus gatitos con mucho amor y dedicación. Todo el vecindario se para a preguntarnos por él."
  },
  {
    name: 'Pablo y Marta S.',
    location: 'Bilbao',
    rating: 5,
    image: '/images/testi-5.jpeg',
    kittenName: 'Larimar',
    text: "Larimar es una gatita Persa que ha sido la incorporación perfecta a nuestra familia. Nuestros hijos están fascinados con su carácter apacible y su pelaje largo y sedoso. Criadero Castellano nos entregó toda la documentación, el calendario de vacunación al día y un kit de bienvenida muy completo. Han superado con creces todas nuestras expectativas."
  },
  {
    name: 'Raquel V.',
    location: 'Málaga',
    rating: 5,
    image: '/images/testi-6.jpeg',
    kittenName: 'Felicia',
    text: "Felicia es una Siamesa con una personalidad arrolladora. Es vocal, cariñosa y siempre quiere estar donde estemos nosotros, típico de su raza. Nos la enviaron desde Criadero Castellano con todo el proceso de transporte perfectamente organizado y llegó feliz y sana. Tres meses después, es la reina de la casa y no la cambiaríamos por nada."
  },
  {
    name: 'Adrián y Teresa L.',
    location: 'Zaragoza',
    rating: 5,
    image: '/images/testi-7.jpeg',
    kittenName: 'Bonita',
    text: "Bonita es nuestra segunda gatita de Criadero Castellano, esta vez una Abisinia, y la experiencia ha sido igual de maravillosa que la primera. Es ágil, curiosa y tremendamente juguetona, como marca la raza. Ella y su hermana se llevan de maravilla y la calidad genética y el temperamento son siempre excepcionales."
  },
  {
    name: 'Sofía H.',
    location: 'Granada',
    rating: 5,
    image: '/images/testi-8.jpeg',
    kittenName: 'Dieter',
    text: "Dieter es un Bosque de Noruega impresionante, con un porte majestuoso y un carácter increíblemente dulce para su tamaño. Desde la primera consulta hasta el día que lo recogimos, Criadero Castellano fue profesional y cercano. Su pelaje es espectacular y su personalidad es aún mejor. Ya domina el rascador y adora las sesiones de juego."
  }
];

export const testimonialPreviews: TestimonialPreview[] = [
  {
    initials: 'MG',
    name: 'María García',
    rating: 5,
    text: "Estamos enamorados de nuestra gatita de Criadero Castellano. Es una British Shorthair preciosa, sana y con un temperamento ideal. Todo el proceso fue transparente y profesional.",
    location: 'Madrid',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'JL',
    name: 'Javier López',
    rating: 5,
    text: "La mejor decisión que hemos tomado. Nuestro Maine Coon es cariñoso, sociable y tiene un pelaje espectacular. Criadero Castellano nos dio un seguimiento excelente.",
    location: 'Barcelona',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'CF',
    name: 'Carmen Fernández',
    rating: 5,
    text: "Nuestra Ragdoll se adaptó al hogar desde el primer día. Es tranquila, dulce y le encanta que la cojan en brazos. Se nota la dedicación del criadero en cada detalle.",
    location: 'Valencia',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'AM',
    name: 'Antonio Martínez',
    rating: 5,
    text: "Desde la primera llamada hasta la entrega del gatito, la comunicación fue impecable. Nuestro Bengalí llegó con todas las vacunas al día y una documentación completísima. Muy recomendable.",
    location: 'Sevilla',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'LR',
    name: 'Laura Rodríguez',
    rating: 5,
    text: "Nuestro gatito Persa tiene un carácter maravilloso y un pelaje precioso. Criadero Castellano realmente se preocupa por la salud y el bienestar de cada uno de sus gatitos.",
    location: 'Bilbao',
    timeAgo: 'hace 2 meses'
  },
  {
    initials: 'DS',
    name: 'Diego Sánchez',
    rating: 5,
    text: "Recibimos a nuestra gatita Siamesa en perfectas condiciones. El transporte fue rápido y seguro. Tres meses después, es la alegría de la casa y no para de ronronear.",
    location: 'Málaga',
    timeAgo: 'hace 6 semanas'
  },
  {
    initials: 'PH',
    name: 'Patricia Hernández',
    rating: 5,
    text: "Es nuestro segundo gatito de Criadero Castellano y la experiencia ha sido igual de fantástica. La calidad genética y la socialización de sus gatitos son insuperables.",
    location: 'Zaragoza',
    timeAgo: 'hace 3 meses'
  },
  {
    initials: 'RD',
    name: 'Roberto Díaz',
    rating: 5,
    text: "El kit de bienvenida que nos proporcionaron fue de gran ayuda para nosotros como primerizos. Nuestro Bosque de Noruega se acomodó en casa enseguida. Gracias por todo.",
    location: 'Granada',
    timeAgo: 'hace 2 meses'
  },
  {
    initials: 'IG',
    name: 'Isabel González',
    rating: 5,
    text: "Adoptar un gatito de Criadero Castellano ha sido lo mejor del año. Nuestra Abisinia es súper activa, inteligente y tiene una personalidad única. El apoyo postventa ha sido increíble.",
    location: 'Madrid',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'FA',
    name: 'Fernando Álvarez',
    rating: 5,
    text: "Criador excelente. Nuestro gatito vino con toda la documentación veterinaria, registro de pedigree y garantía de salud. La atención al detalle es impresionante.",
    location: 'Barcelona',
    timeAgo: 'hace 2 meses'
  },
  {
    initials: 'NR',
    name: 'Natalia Ruiz',
    rating: 5,
    text: "No podríamos estar más contentos con nuestro British Shorthair. Se lleva genial con nuestros hijos y con el otro gato de casa. Un verdadero gato de familia.",
    location: 'Valencia',
    timeAgo: 'hace 4 semanas'
  },
  {
    initials: 'AT',
    name: 'Alejandro Torres',
    rating: 5,
    text: "La experiencia con Criadero Castellano fue maravillosa. Se nota que aman lo que hacen y que cada gatito recibe cariño y atención individual desde que nace.",
    location: 'Sevilla',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'BN',
    name: 'Beatriz Navarro',
    rating: 5,
    text: "Profesionales, cercanos y de total confianza. Así definiría a Criadero Castellano. Nuestra gatita es juguetona, sana y tiene un carácter estupendo.",
    location: 'Bilbao',
    timeAgo: 'hace 5 semanas'
  },
  {
    initials: 'MV',
    name: 'Miguel Vargas',
    rating: 5,
    text: "Viajamos desde Málaga para recoger a nuestro gatito y mereció totalmente la pena. Criadero Castellano nos recibió con los brazos abiertos y la dedicación que muestran es evidente.",
    location: 'Málaga',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'SC',
    name: 'Sara Castillo',
    rating: 5,
    text: "Nuestro Maine Coon tiene un temperamento increíble. Es genial con desconocidos, niños y otros animales. No podríamos haber elegido mejor criador.",
    location: 'Zaragoza',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'EM',
    name: 'Eva Moreno',
    rating: 5,
    text: "Investigué criaderos de gatos durante meses y Criadero Castellano destacó por encima de todos. La comunicación fue excelente desde el primer momento y nuestra gatita llegó sana y con un pelaje precioso.",
    location: 'Granada',
    timeAgo: 'hace 6 semanas'
  },
  {
    initials: 'JO',
    name: 'Jorge Ortega',
    rating: 5,
    text: "Criadero Castellano superó todas nuestras expectativas. Nuestro Bengalí es increíblemente listo y cariñoso. Toda la familia está encantada y ya pensamos en adoptar otro.",
    location: 'Madrid',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'CI',
    name: 'Cristina Iglesias',
    rating: 5,
    text: "El certificado de nacimiento, los informes veterinarios y la garantía de salud nos dieron total confianza. Nuestra gatita está creciendo sana y feliz. Eternamente agradecidos.",
    location: 'Barcelona',
    timeAgo: 'hace 4 semanas'
  },
  {
    initials: 'PR',
    name: 'Pedro Ramírez',
    rating: 5,
    text: "Nuestra pequeña Ragdoll ha sido la mejor incorporación a la familia. Es tan juguetona y le encanta acurrucarse con nosotros en el sofá. Criadero Castellano hizo todo muy fácil.",
    location: 'Valencia',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'AG',
    name: 'Andrea Gil',
    rating: 5,
    text: "No puedo decir suficientes cosas buenas sobre Criadero Castellano. Nuestro gatito llegó sano, contento y ya usaba el arenero sin problema. El apoyo que hemos recibido ha sido excepcional.",
    location: 'Sevilla',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'VB',
    name: 'Víctor Blanco',
    rating: 5,
    text: "Es nuestro tercer gato de raza y con diferencia la mejor experiencia. El temperamento del gatito es perfecto y se nota que fue criado con mucho cariño.",
    location: 'Bilbao',
    timeAgo: 'hace 2 semanas'
  },
  {
    initials: 'MJ',
    name: 'Marina Jiménez',
    rating: 5,
    text: "Teníamos dudas sobre el transporte del gatito, pero Criadero Castellano lo organizó todo a la perfección. Nuestra Siamesa llegó tranquila y en perfecto estado de salud.",
    location: 'Málaga',
    timeAgo: 'hace 5 semanas'
  },
  {
    initials: 'RL',
    name: 'Rubén Luna',
    rating: 5,
    text: "La comunicación con Criadero Castellano fue excelente durante todo el proceso. Nos enviaron fotos y vídeos del gatito antes de recogerlo. Un trato inmejorable.",
    location: 'Zaragoza',
    timeAgo: 'hace 3 semanas'
  },
  {
    initials: 'LS',
    name: 'Lorena Serrano',
    rating: 5,
    text: "Nuestra gatita Persa tiene una personalidad adorable. Le encanta que la mimen y ronronea sin parar. Criadero Castellano realmente busca los mejores hogares para sus gatitos.",
    location: 'Granada',
    timeAgo: 'hace 1 mes'
  },
  {
    initials: 'HC',
    name: 'Hugo Campos',
    rating: 5,
    text: "Llevamos seis meses con nuestro gatito y está absolutamente perfecto. Sano, feliz y lleno de energía. Muchas gracias a todo el equipo de Criadero Castellano.",
    location: 'Madrid',
    timeAgo: 'hace 6 semanas'
  },
  {
    initials: 'TP',
    name: 'Teresa Peña',
    rating: 5,
    text: "De principio a fin, Criadero Castellano nos ofreció un servicio excepcional. Nuestro Abisinio es todo lo que queríamos y más. Lo recomendaría a cualquiera sin dudarlo.",
    location: 'Barcelona',
    timeAgo: 'hace 2 semanas'
  }
];
