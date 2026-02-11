export interface Breed {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const breeds: Breed[] = [
  {
    id: 'ragdoll',
    name: 'Ragdoll',
    description:
      'El Ragdoll es un gato grande y cariñoso, conocido por su temperamento dócil y su tendencia a relajarse completamente cuando lo coges en brazos. Su pelaje semilargo y sedoso, junto con sus impresionantes ojos azules, lo convierten en uno de los gatos más bellos. Es un compañero ideal para familias, ya que adora la compañía humana y se lleva muy bien con niños y otras mascotas.',
    image: '/images/gatitos/ragdoll/casandra.jpg',
  },
  {
    id: 'persa',
    name: 'Persa',
    description:
      'El gato Persa es una de las razas más antiguas y elegantes del mundo felino, famoso por su pelaje largo y exuberante y su rostro distintivo. De carácter tranquilo y apacible, prefiere los ambientes serenos y disfruta de largas sesiones de mimos en el sofá. Es el compañero perfecto para quienes buscan un gato calmado, leal y tremendamente cariñoso.',
    image: '/images/gatitos/persa/alexandra.jpg',
  },
  {
    id: 'sphynx',
    name: 'Sphynx',
    description:
      'El Sphynx destaca por su apariencia única sin pelo, su piel cálida y suave al tacto, y sus grandes orejas expresivas. A pesar de su aspecto inusual, es uno de los gatos más sociables y extrovertidos que existen, siempre buscando el contacto humano y el calor corporal. Su personalidad juguetona, inteligente y payasa lo convierte en el centro de atención de cualquier hogar.',
    image: '/images/gatitos/sphynx/alexia.jpg',
  },
  {
    id: 'siberiano',
    name: 'Siberiano',
    description:
      'El Siberiano es un gato robusto y atlético originario de las frías tierras de Rusia, con un pelaje triple capa que lo protege del frío y que es considerado hipoalergénico. Es un gato aventurero, ágil y muy inteligente, que disfruta tanto del juego activo como de los momentos de tranquilidad junto a su familia. Su naturaleza cariñosa y leal lo hace especialmente adecuado para hogares con niños.',
    image: '/images/gatitos/siberiano/marta.webp',
  },
  {
    id: 'azul-ruso',
    name: 'Azul Ruso',
    description:
      'El Azul Ruso es un gato de una elegancia extraordinaria, con su pelaje corto y denso de un característico tono gris azulado y sus cautivadores ojos verde esmeralda. De temperamento reservado pero profundamente leal, crea vínculos muy fuertes con su familia y es conocido por su sensibilidad e inteligencia. Es una raza ideal para quienes buscan un compañero tranquilo, limpio y de una belleza incomparable.',
    image: '/images/gatitos/azul-ruso/larimar.webp',
  },
  {
    id: 'oriental',
    name: 'Oriental',
    description:
      'El gato Oriental es esbelto, atlético y tremendamente vocal, con unas orejas grandes y unos ojos almendrados que le dan una apariencia inconfundible. Es una de las razas más comunicativas y activas, siempre dispuesto a interactuar con su familia y a participar en todo lo que ocurre en el hogar. Su inteligencia, curiosidad y lealtad incondicional hacen de él un compañero fascinante y muy entretenido.',
    image: '/images/gatitos/oriental/felicia.jpeg',
  },
  {
    id: 'maine-coon',
    name: 'Maine Coon',
    description:
      'El Maine Coon es el gigante gentil del mundo felino, pudiendo alcanzar un peso considerable sin perder ni un ápice de su gracia y agilidad. Su pelaje largo y frondoso, sus pinceles en las orejas y su cola espectacular le dan un aire majestuoso y salvaje. A pesar de su imponente tamaño, es un gato extremadamente sociable, juguetón y cariñoso, conocido como el "perro de los gatos" por su lealtad.',
    image: '/images/gatitos/maine-coon/eney.jpg',
  },
  {
    id: 'exotic-shorthair',
    name: 'Exotic Shorthair',
    description:
      'El Exotic Shorthair es la versión de pelo corto del gato Persa, combinando su adorable rostro achatado y redondeado con un pelaje denso y fácil de mantener. De carácter dulce, tranquilo y algo perezoso, es el gato perfecto para la vida en apartamento y para quienes desean un felino de bajo mantenimiento. Su expresión tierna y su personalidad afectuosa conquistan a todos los que lo conocen.',
    image: '/images/gatitos/exotic-shorthair/bonita.webp',
  },
  {
    id: 'devon-rex',
    name: 'Devon Rex',
    description:
      'El Devon Rex es un gato pequeño y travieso con un pelaje rizado y suave, grandes orejas y unos ojos enormes que le dan un aspecto de duendecillo encantador. Es extraordinariamente juguetón, acrobático y sociable, capaz de aprender trucos y de seguir a su dueño por toda la casa como una sombra. Su carácter alegre e incansable lo convierte en la mascota perfecta para familias activas que buscan un compañero lleno de energía.',
    image: '/images/gatitos/devon-rex/fiona.jpg',
  },
  {
    id: 'british-shorthair',
    name: 'British Shorthair',
    description:
      'El British Shorthair es un gato sólido y compacto, famoso por su pelaje denso y aterciopelado y su expresión redonda y bonachona que recuerda al Gato de Cheshire. De temperamento equilibrado y independiente, es un gato que disfruta de la compañía sin ser excesivamente demandante, adaptándose con facilidad a cualquier tipo de hogar. Su carácter sereno, su robusta salud y su aspecto de osito de peluche lo hacen irresistible.',
    image: '/images/gatitos/british-shorthair/liya.jpg',
  },
  {
    id: 'abisinio',
    name: 'Abisinio',
    description:
      'El Abisinio es uno de los gatos más antiguos y fascinantes, con un pelaje atigrado característico que recuerda a los felinos salvajes de África. Es un gato extremadamente activo, curioso y atlético, que necesita explorar cada rincón de su entorno y que adora los juegos interactivos. Su inteligencia aguda, su elegancia natural y su personalidad vivaz y cariñosa lo convierten en un compañero inigualable para hogares dinámicos.',
    image: '/images/gatitos/abisinio/annika.webp',
  },
];
