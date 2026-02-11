export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: '¿Qué raza de gato es mejor para familias?',
    answer: 'Razas como el Ragdoll, el British Shorthair y el Maine Coon son opciones excelentes para familias gracias a su temperamento tranquilo y cariñoso. El Ragdoll, por ejemplo, es conocido por su carácter dócil y su amor por los niños, mientras que el British Shorthair destaca por su paciencia y adaptabilidad al hogar. En Criadero Castellano te asesoramos para encontrar la raza que mejor se adapte a tu estilo de vida familiar.'
  },
  {
    question: '¿Los gatitos vienen vacunados?',
    answer: 'Sí, todos nuestros gatitos se entregan con su cartilla de vacunación al día, incluyendo las vacunas contra la panleucopenia, el calicivirus y la rinotraqueítis felina. Además, se les realiza una desparasitación completa antes de la entrega. En Criadero Castellano trabajamos con veterinarios de confianza para garantizar que cada gatito llegue a su nuevo hogar en perfecto estado de salud.'
  },
  {
    question: '¿Qué incluye el precio de un gatito?',
    answer: 'El precio incluye la cartilla de vacunación completa, el microchip identificativo, la desparasitación interna y externa, un certificado veterinario de salud y el pedigrí oficial de la raza. También entregamos un kit de bienvenida con una muestra del pienso al que está acostumbrado el gatito y una guía de cuidados específica para su raza, ya sea Persa, Sphynx, Devon Rex u otra.'
  },
  {
    question: '¿Hacen envíos a toda España?',
    answer: 'Sí, realizamos envíos seguros a toda la Península Ibérica y las Islas Baleares y Canarias, siempre cumpliendo con la normativa vigente de transporte animal. Trabajamos con transportistas especializados que garantizan el bienestar del gatito durante todo el trayecto. No obstante, siempre recomendamos la recogida en persona en nuestro criadero en Castilla para que conozcas a tu futuro compañero antes de llevarlo a casa.'
  },
  {
    question: '¿Cómo elijo la raza adecuada para mí?',
    answer: 'La elección depende de tu estilo de vida: si buscas un gato activo y juguetón, el Abisinio o el Oriental son ideales; si prefieres un compañero tranquilo y cariñoso, el Persa o el Exotic Shorthair serán perfectos. Para personas alérgicas, el Siberiano produce menos proteína Fel d 1, y el Sphynx es una opción popular por carecer de pelo. Nuestro equipo en Criadero Castellano te orientará según tus preferencias y circunstancias personales.'
  },
  {
    question: '¿Los gatitos están socializados?',
    answer: 'Todos nuestros gatitos crecen en un ambiente familiar y se socializan desde las primeras semanas de vida con personas, otros gatos y estímulos del hogar. Razas como el Azul Ruso y el Maine Coon responden especialmente bien a la socialización temprana, desarrollando un carácter equilibrado y afectuoso. Cada gatito de Criadero Castellano se entrega acostumbrado al contacto humano, a los sonidos cotidianos y al uso del arenero.'
  },
  {
    question: '¿Ofrecen garantía de salud?',
    answer: 'Sí, ofrecemos una garantía de salud por escrito que cubre enfermedades congénitas y hereditarias durante los primeros dos años de vida del gatito. Antes de la entrega, cada ejemplar pasa un examen veterinario completo y se realizan pruebas genéticas específicas de la raza, como las de PKD en Persas y Exotic Shorthair o HCM en Ragdoll y Maine Coon. Si se detecta cualquier problema de salud cubierto, nos comprometemos a dar una solución justa y responsable.'
  },
  {
    question: '¿Puedo visitar el criadero antes de comprar?',
    answer: 'Por supuesto, animamos a todos los futuros dueños a visitar Criadero Castellano con cita previa para conocer nuestras instalaciones, ver a los padres de las camadas y pasar tiempo con los gatitos disponibles. Podrás observar de primera mano cómo criamos razas como el Devon Rex, el Siberiano y el British Shorthair en un entorno limpio y enriquecido. Las visitas son la mejor forma de asegurarte de que eliges al compañero perfecto para tu hogar.'
  }
];

export interface Expense {
  item: string;
  cost: string;
}

export const expenses: Expense[] = [
  { item: 'Alimentación', cost: '40€ – 80€' },
  { item: 'Golosinas', cost: '10€ – 20€' },
  { item: 'Atención Veterinaria', cost: '20€ – 50€' },
  { item: 'Seguro para Mascotas', cost: '25€ – 50€' },
  { item: 'Aseo y Cuidado', cost: '15€ – 40€' },
  { item: 'Arena para Gatos', cost: '15€ – 30€' },
  { item: 'Juguetes', cost: '10€ – 20€' },
  { item: 'Suministros (cama, rascador, etc.)', cost: '10€ – 25€' },
  { item: 'Varios', cost: '10€ – 20€' }
];

export interface ExpenseNote {
  label: string;
  text: string;
}

export const expenseNotes: ExpenseNote[] = [
  { label: 'Alimentación', text: 'El coste puede variar según la marca y las necesidades dietéticas de la raza; los gatos Sphynx y Siberiano, por ejemplo, pueden requerir alimentación especial.' },
  { label: 'Atención Veterinaria', text: 'Incluye revisiones rutinarias, vacunas anuales, desparasitaciones y cuidados preventivos recomendados por el veterinario.' },
  { label: 'Seguro para Mascotas', text: 'El precio varía según la cobertura y la aseguradora; algunas pólizas cubren también enfermedades hereditarias propias de ciertas razas.' },
  { label: 'Aseo y Cuidado', text: 'Razas de pelo largo como el Persa y el Maine Coon necesitan cepillado frecuente, mientras que el Sphynx requiere baños regulares para mantener su piel sana.' },
  { label: 'Arena para Gatos', text: 'Se recomienda arena aglomerante de buena calidad y limpiar el arenero a diario para garantizar la higiene y el bienestar de tu gato.' }
];
