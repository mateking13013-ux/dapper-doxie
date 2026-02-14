export interface Puppy {
  name: string;
  breed: string;
  image: string;
  sex: 'Male' | 'Female';
  age: string;
  color: string;
  coat: string;
  status: 'Available' | 'Sold';
  price: number;
  description: string;
}

export const puppies: Puppy[] = [
  {
    name: 'Bella',
    breed: 'Dachshund',
    image: '/images/puppies/BELLA female 9 weeks.jpeg',
    sex: 'Female',
    age: '9 Weeks',
    color: 'Chocolate Dapple',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Bella is a sweet and gentle girl with beautiful markings and the most expressive eyes. She loves to snuggle in your lap and will follow you from room to room. Her calm and affectionate temperament makes her a wonderful companion for families of all sizes.',
  },
  {
    name: 'Coco',
    breed: 'Dachshund',
    image: '/images/puppies/COCO male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Cream Dapple',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Coco is a handsome boy with stunning blue eyes, a golden cream coat with soft dapple patches, and a heart of gold. He is playful, curious, and always the first to greet you at the door. Coco has been raised with children and other dogs, making him an ideal addition to any active household.',
  },
  {
    name: 'Copper',
    breed: 'Dachshund',
    image: '/images/puppies/COPPER male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Chocolate & Tan Dapple',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Copper is a spirited little guy with a rich chocolate and tan dapple coat and big soulful blue eyes. He loves to burrow under blankets and will follow you everywhere. With a playful yet gentle temperament, Copper is perfect for families looking for a loyal companion.',
  },
  {
    name: 'Daisy',
    breed: 'Dachshund',
    image: '/images/puppies/DAISY female 10 weeks sold.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Black & Tan Dapple',
    coat: 'Longhair',
    status: 'Sold',
    price: 750,
    description: 'Daisy is a gorgeous girl with a striking black and tan dapple pattern, silky longhair coat, and the sweetest temperament. She found her forever home with a loving family. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Duke',
    breed: 'Dachshund',
    image: '/images/puppies/DUKE male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Black & Tan Dapple',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Duke is a confident and outgoing boy with a striking black and tan dapple coat and gorgeous spotted paws. He is always up for playtime and loves to explore every corner of the yard. Duke bonds deeply with his people and will be your most devoted friend for years to come.',
  },
  {
    name: 'Layla',
    breed: 'Dachshund',
    image: '/images/puppies/LAYLA female 10 WEEKS.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Black & Cream',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Layla is a darling girl with a glossy black coat accented by warm cream markings on her face, chest, and paws. She wears a blue collar and has a personality that lights up every room. Layla loves to curl up beside you and will be your most loyal shadow.',
  },
  {
    name: 'Lola',
    breed: 'Dachshund',
    image: '/images/puppies/LOLA 10 weeks  female.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Red',
    coat: 'Smooth',
    status: 'Available',
    price: 750,
    description: 'Lola is a sweet and sassy little girl with a warm golden-red smooth coat and big dark eyes. She has mastered the art of puppy-dog eyes and uses them to win everyone over. Lola is confident, curious, and loves to play with toys before settling in for a nap.',
  },
  {
    name: 'Luna',
    breed: 'Dachshund',
    image: '/images/puppies/LUNA female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Shaded Cream',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Luna is a stunning longhair girl with a soft sandy cream coat with darker shading on her ears and back. She has a calm and affectionate disposition, preferring snuggle sessions over roughhousing. Luna would thrive in a home where she can be your devoted companion.',
  },
  {
    name: 'Max',
    breed: 'Dachshund',
    image: '/images/puppies/MAX male 10 weeks sold.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'English Cream',
    coat: 'Longhair',
    status: 'Sold',
    price: 750,
    description: 'Max was a gorgeous English cream longhair boy with a pale golden coat and big dark eyes. He found his forever family and is living his best life. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Mia',
    breed: 'Dachshund',
    image: '/images/puppies/MIA FEMALE 10 WEEKS SOLD.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'English Cream',
    coat: 'Longhair',
    status: 'Sold',
    price: 750,
    description: 'Mia is a beautiful English cream longhair girl with a soft pale golden coat and the sweetest temperament. She has been placed with a wonderful family. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Minnie',
    breed: 'Dachshund',
    image: '/images/puppies/MINNIE 10 WEEKS SOLD.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Blue & Tan Dapple',
    coat: 'Longhair',
    status: 'Sold',
    price: 750,
    description: 'Minnie is an adorable girl with a stunning blue and tan dapple longhair coat and a playful spirit. She has found her forever home with a wonderful family. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Molly',
    breed: 'Dachshund',
    image: '/images/puppies/MOLLY female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Black & Tan Dapple',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Molly is a charming girl with a striking black and tan dapple coat with beautiful blue eyes. She loves exploring the yard, chasing leaves, and then settling in for a long nap in a sunny spot. Molly is great with kids and has been socialized from day one.',
  },
  {
    name: 'Milo',
    breed: 'Dachshund',
    image: '/images/puppies/Milo male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'English Cream',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Milo is a gorgeous English cream longhair boy with a soft ivory white coat and big dark eyes. He has a bright, inquisitive personality and loves to explore every corner of the house. Milo is well-socialized and does wonderfully with other pets.',
  },
  {
    name: 'Rosie',
    breed: 'Dachshund',
    image: '/images/puppies/ROSIE female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Chocolate Dapple',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Rosie is an absolutely gorgeous girl with a rich chocolate and tan dapple longhair coat. She is gentle and patient, making her a wonderful choice for families with young children. Rosie loves to be pampered and will sit in your lap for hours.',
  },
  {
    name: 'Ruby',
    breed: 'Dachshund',
    image: '/images/puppies/RUBY 10 WEEKS  SOLD.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Black & Tan Dapple',
    coat: 'Longhair',
    status: 'Sold',
    price: 750,
    description: 'Ruby is a beautiful girl with a black and tan dapple coat and blue eyes. She has been placed with a loving family and is thriving in her new home. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Sadie',
    breed: 'Dachshund',
    image: '/images/puppies/SADIE female 9 weeks.jpeg',
    sex: 'Female',
    age: '9 Weeks',
    color: 'Cream',
    coat: 'Smooth',
    status: 'Available',
    price: 750,
    description: 'Sadie is a gentle soul with a soft pale cream smooth coat and a wagging tail that never stops. She is the peacemaker of the litter, always checking on her siblings. Sadie would be an ideal companion thanks to her calm and intuitive nature.',
  },
  {
    name: 'Zola',
    breed: 'Dachshund',
    image: '/images/puppies/ZOLA female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Chocolate Dapple',
    coat: 'Longhair',
    status: 'Available',
    price: 750,
    description: 'Zola is a striking chocolate dapple longhair girl with beautiful blue eyes and a unique mottled pattern of chocolate, tan, and cream. She has a playful yet gentle personality and loves both outdoor adventures and cozy indoor cuddles. Zola is ready to become the heart of your family.',
  },
];

export function getAvailablePuppies(): Puppy[] {
  return puppies.filter((puppy) => puppy.status === 'Available');
}

export function getSoldPuppies(): Puppy[] {
  return puppies.filter((puppy) => puppy.status === 'Sold');
}

export function getFeaturedPuppies(count = 5): Puppy[] {
  const available = puppies.filter((p) => p.status === 'Available');
  const shuffled = [...available].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
