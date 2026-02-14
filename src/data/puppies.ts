export interface Puppy {
  name: string;
  variety: string;
  image: string;
  sex: 'Male' | 'Female';
  age: string;
  color: string;
  status: 'Available' | 'Sold';
  price: number;
  description: string;
}

export const puppies: Puppy[] = [
  {
    name: 'Bella',
    variety: 'Miniature Smooth',
    image: '/images/puppies/BELLA female 9 weeks.jpeg',
    sex: 'Female',
    age: '9 Weeks',
    color: 'Black & Tan',
    status: 'Available',
    price: 2200,
    description: 'Bella is a sweet and gentle girl with beautiful markings and the most expressive eyes. She loves to snuggle in your lap and will follow you from room to room. Her calm and affectionate temperament makes her a wonderful companion for families of all sizes.',
  },
  {
    name: 'Coco',
    variety: 'Miniature Smooth',
    image: '/images/puppies/COCO male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Chocolate & Tan',
    status: 'Available',
    price: 2400,
    description: 'Coco is a handsome chocolate and tan boy with a bold personality and a heart of gold. He is playful, curious, and always the first to greet you at the door. Coco has been raised with children and other dogs, making him an ideal addition to any active household.',
  },
  {
    name: 'Copper',
    variety: 'Miniature Smooth',
    image: '/images/puppies/COPPER male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Red',
    status: 'Available',
    price: 2200,
    description: 'Copper is a spirited little guy with a glossy red coat and the biggest brown eyes you have ever seen. He loves to burrow under blankets and will follow you everywhere. With a playful yet gentle temperament, Copper is perfect for families looking for a loyal companion.',
  },
  {
    name: 'Daisy',
    variety: 'Miniature Longhair',
    image: '/images/puppies/DAISY female 10 weeks sold.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Red Dapple',
    status: 'Sold',
    price: 2500,
    description: 'Daisy is a gorgeous red dapple longhair girl with a silky coat and the sweetest temperament. She found her forever home with a loving family. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Duke',
    variety: 'Miniature Smooth',
    image: '/images/puppies/DUKE male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Black & Tan',
    status: 'Available',
    price: 2200,
    description: 'Duke is a confident and outgoing boy with classic black and tan markings. He is always up for playtime and loves to explore every corner of the yard. Duke bonds deeply with his people and will be your most devoted friend for years to come.',
  },
  {
    name: 'Layla',
    variety: 'Miniature Smooth',
    image: '/images/puppies/LAYLA female 10 WEEKS.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Chocolate & Tan',
    status: 'Available',
    price: 2400,
    description: 'Layla is a darling girl with a rich chocolate and tan coat and a personality that lights up every room. She is gentle, patient, and wonderful with children. Layla loves to curl up beside you and will be your most loyal shadow.',
  },
  {
    name: 'Lola',
    variety: 'Miniature Smooth',
    image: '/images/puppies/LOLA 10 weeks  female.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Black & Tan',
    status: 'Available',
    price: 2200,
    description: 'Lola is a sweet and sassy little girl with striking black and tan markings. She has mastered the art of puppy-dog eyes and uses them to win everyone over. Lola is confident, curious, and loves to play with toys before settling in for a nap.',
  },
  {
    name: 'Luna',
    variety: 'Miniature Longhair',
    image: '/images/puppies/LUNA female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Red',
    status: 'Available',
    price: 2500,
    description: 'Luna is a stunning longhair girl with a flowing red coat and big expressive eyes. She has a calm and affectionate disposition, preferring snuggle sessions over roughhousing. Luna would thrive in a home where she can be your devoted companion.',
  },
  {
    name: 'Max',
    variety: 'Miniature Smooth',
    image: '/images/puppies/MAX male 10 weeks sold.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Red',
    status: 'Sold',
    price: 2200,
    description: 'Max is a bold and adventurous boy with a sleek red coat and an athletic build. He found his forever family and is living his best life. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Mia',
    variety: 'Miniature Longhair',
    image: '/images/puppies/MIA FEMALE 10 WEEKS SOLD.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Cream',
    status: 'Sold',
    price: 2500,
    description: 'Mia is a beautiful cream longhair girl with the sweetest temperament. She has been placed with a wonderful family. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Minnie',
    variety: 'Miniature Smooth',
    image: '/images/puppies/MINNIE 10 WEEKS SOLD.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Black & Tan',
    status: 'Sold',
    price: 2200,
    description: 'Minnie is an adorable girl with a playful spirit and loving heart. She has found her forever home with a wonderful family. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Molly',
    variety: 'Miniature Smooth',
    image: '/images/puppies/MOLLY female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Chocolate & Tan',
    status: 'Available',
    price: 2400,
    description: 'Molly is a charming girl with a rich chocolate and tan coat and an endearing personality. She loves exploring the yard, chasing leaves, and then settling in for a long nap in a sunny spot. Molly is great with kids and has been socialized from day one.',
  },
  {
    name: 'Milo',
    variety: 'Miniature Smooth',
    image: '/images/puppies/Milo male 10 weeks.jpeg',
    sex: 'Male',
    age: '10 Weeks',
    color: 'Red Dapple',
    status: 'Available',
    price: 2500,
    description: 'Milo is an eye-catching red dapple boy with a beautifully patterned coat that makes him truly one of a kind. He has a bright, inquisitive personality and loves to explore every corner of the house. Milo is well-socialized and does wonderfully with other pets.',
  },
  {
    name: 'Rosie',
    variety: 'Miniature Longhair',
    image: '/images/puppies/ROSIE female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Red',
    status: 'Available',
    price: 2500,
    description: 'Rosie is an absolutely gorgeous red longhair girl with a silky flowing coat and the sweetest temperament. She is gentle and patient, making her a wonderful choice for families with young children. Rosie loves to be pampered and will sit in your lap for hours.',
  },
  {
    name: 'Ruby',
    variety: 'Miniature Smooth',
    image: '/images/puppies/RUBY 10 WEEKS  SOLD.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Red',
    status: 'Sold',
    price: 2200,
    description: 'Ruby is a beautiful red girl with a warm personality. She has been placed with a loving family and is thriving in her new home. Contact us to join our waitlist for similar puppies.',
  },
  {
    name: 'Sadie',
    variety: 'Miniature Smooth',
    image: '/images/puppies/SADIE female 9 weeks.jpeg',
    sex: 'Female',
    age: '9 Weeks',
    color: 'Black & Tan',
    status: 'Available',
    price: 2200,
    description: 'Sadie is a gentle soul with classic black and tan markings and a wagging tail that never stops. She is the peacemaker of the litter, always checking on her siblings. Sadie would be an ideal companion thanks to her calm and intuitive nature.',
  },
  {
    name: 'Zola',
    variety: 'Miniature Smooth',
    image: '/images/puppies/ZOLA female 10 weeks.jpeg',
    sex: 'Female',
    age: '10 Weeks',
    color: 'Chocolate Dapple',
    status: 'Available',
    price: 2500,
    description: 'Zola is a striking chocolate dapple girl with a unique spotted pattern that turns heads wherever she goes. She has a playful yet gentle personality and loves both outdoor adventures and cozy indoor cuddles. Zola is ready to become the heart of your family.',
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
