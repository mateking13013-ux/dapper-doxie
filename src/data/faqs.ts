export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: 'What makes HillSide Paws Dachshunds special?',
    answer: 'Our Dachshunds are family-raised in our home since 1995, giving us nearly three decades of breeding experience. Every puppy is socialized with children, adults, and other dogs from birth. We perform comprehensive health testing on all parent dogs, including IVDD screening, PRA testing, and cardiac evaluations, so you can be confident you are bringing home a healthy, well-adjusted companion.'
  },
  {
    question: 'What Dachshund varieties do you breed?',
    answer: 'We specialize in three beautiful Dachshund varieties: Miniature Smooth, Miniature Longhair, and Standard Smooth. Each variety has its own unique charm, from the sleek and easy-care Miniature Smooth to the elegant flowing coat of the Miniature Longhair and the bold, athletic Standard Smooth. We are happy to help you choose the variety that best fits your lifestyle.'
  },
  {
    question: 'Do your puppies come with a health guarantee?',
    answer: 'Yes, every puppy from HillSide Paws comes with a comprehensive 2-year genetic health guarantee that covers hereditary and congenital conditions. Before leaving our home, each puppy receives a thorough veterinary examination and is cleared for any health concerns. We stand behind the health of our puppies because we invest in the best genetic testing and veterinary care available.'
  },
  {
    question: 'What is included in the puppy price?',
    answer: 'The price includes age-appropriate vaccinations (DHPP series), a complete deworming program, microchip with registration, a veterinary health certificate, AKC registration papers, and a puppy starter kit with the food they are accustomed to, a toy, a blanket with familiar scents, and a comprehensive care guide specific to Dachshunds.'
  },
  {
    question: 'Do you ship puppies?',
    answer: 'Yes, we offer safe delivery options nationwide. Our preferred methods include personal pickup at our home (which we highly encourage so you can meet the parents), professional ground transport through a trusted pet transport service, and our flight nanny program where a dedicated handler accompanies your puppy on a commercial flight directly to your nearest airport. Every puppy travels with their health documents, food, and comfort items.'
  },
  {
    question: 'How do I reserve a puppy?',
    answer: 'To reserve a puppy, simply fill out our contact form or give us a call. After we chat and determine the right match for your family, a $500 non-refundable deposit secures your chosen puppy. The remaining balance is due at pickup or before shipping. We accept various payment methods and will keep you updated with photos and videos as your puppy grows.'
  },
  {
    question: 'Are your puppies socialized?',
    answer: 'Absolutely. Every puppy is raised inside our family home and has daily interaction with adults, children, and our other dogs. From the earliest weeks, they are exposed to household sounds, different surfaces, gentle handling, and new experiences. This early socialization helps them develop into confident, well-adjusted pets that transition smoothly into their new homes.'
  },
  {
    question: 'What health testing do you perform on parent dogs?',
    answer: 'We take health testing seriously. All breeding dogs undergo IVDD (Intervertebral Disc Disease) screening, which is the most critical health concern for Dachshunds. Additionally, we test for PRA (Progressive Retinal Atrophy), perform cardiac evaluations, patella evaluations, and Brucellosis testing. Only dogs that pass all health screenings are included in our breeding program, ensuring the healthiest possible puppies.'
  }
];

export interface Expense {
  item: string;
  cost: string;
}

export const expenses: Expense[] = [
  { item: 'Premium Dog Food', cost: '$40 - $80' },
  { item: 'Treats & Chews', cost: '$15 - $30' },
  { item: 'Veterinary Care', cost: '$30 - $60' },
  { item: 'Pet Insurance', cost: '$30 - $60' },
  { item: 'Grooming', cost: '$20 - $50' },
  { item: 'Heartworm & Flea Prevention', cost: '$15 - $35' },
  { item: 'Toys & Enrichment', cost: '$15 - $25' },
  { item: 'Supplies (bed, crate, leash, etc.)', cost: '$15 - $30' },
  { item: 'Miscellaneous', cost: '$10 - $25' }
];

export interface ExpenseNote {
  label: string;
  text: string;
}

export const expenseNotes: ExpenseNote[] = [
  { label: 'Premium Dog Food', text: 'Cost varies by brand and dietary needs. Dachshunds can be prone to weight gain, so a high-quality, portion-controlled diet is especially important for this breed.' },
  { label: 'Veterinary Care', text: 'Includes routine checkups, annual vaccinations, dental cleanings, and preventive care recommended by your veterinarian.' },
  { label: 'Pet Insurance', text: 'Prices vary by coverage level and provider. We recommend plans that cover IVDD treatment, as this is the most common health concern for Dachshunds.' },
  { label: 'Grooming', text: 'Smooth coat Dachshunds require minimal grooming, while longhair varieties benefit from regular brushing and occasional professional grooming to keep their coats healthy.' },
  { label: 'Heartworm & Flea Prevention', text: 'Year-round heartworm and flea prevention is essential. Your veterinarian can recommend the best products for your area and your Dachshund.' }
];
