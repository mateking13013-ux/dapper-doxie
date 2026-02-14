export interface Testimonial {
  name: string;
  location: string;
  rating: number;
  image: string;
  puppyName: string;
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
  '/images/testimonials/IMG_1162.JPG',
  '/images/testimonials/IMG_1163.JPG',
  '/images/testimonials/IMG_1164.JPG',
  '/images/testimonials/IMG_1165.JPG',
  '/images/testimonials/IMG_1166.JPG',
  '/images/testimonials/IMG_1167.JPG',
  '/images/testimonials/IMG_1168.JPG',
  '/images/testimonials/IMG_1169.JPG',
  '/images/testimonials/IMG_1170.JPG',
  '/images/testimonials/IMG_1188.JPG',
  '/images/testimonials/IMG_1189.JPG',
  '/images/testimonials/IMG_1190.JPG',
  '/images/testimonials/IMG_1191.JPG',
  '/images/testimonials/IMG_1192.JPG',
  '/images/testimonials/IMG_1193.JPG',
  '/images/testimonials/IMG_1194.JPG',
  '/images/testimonials/IMG_1195.JPG',
  '/images/testimonials/IMG_1196.JPG',
  '/images/testimonials/IMG_1197.JPG',
  '/images/testimonials/IMG_1198.JPG',
  '/images/testimonials/IMG_1199.JPG',
  '/images/testimonials/IMG_1200.JPG',
  '/images/testimonials/IMG_1201.JPG',
  '/images/testimonials/IMG_1202.JPG',
  '/images/testimonials/IMG_1203.JPG',
  '/images/testimonials/IMG_1204.JPG',
  '/images/testimonials/IMG_1205.JPG',
  '/images/testimonials/IMG_1206.JPG',
  '/images/testimonials/IMG_1207.JPG',
  '/images/testimonials/IMG_1208.JPG',
  '/images/testimonials/IMG_1209.JPG',
  '/images/testimonials/IMG_1210.JPG',
  '/images/testimonials/IMG_1211.JPG',
  '/images/testimonials/IMG_1212.JPG',
  '/images/testimonials/IMG_1213.JPG',
  '/images/testimonials/IMG_1214.JPG',
  '/images/testimonials/IMG_1215.JPG',
  '/images/testimonials/IMG_1216.JPG',
  '/images/testimonials/IMG_1217.JPG',
  '/images/testimonials/IMG_1218.JPG',
  '/images/testimonials/IMG_1219.JPG',
  '/images/testimonials/IMG_1220.JPG',
  '/images/testimonials/IMG_1221.JPG',
  '/images/testimonials/IMG_E1171.JPG',
  '/images/testimonials/IMG_E1172.JPG',
  '/images/testimonials/IMG_E1173.JPG',
  '/images/testimonials/IMG_E1175.JPG',
  '/images/testimonials/IMG_E1176.JPG',
  '/images/testimonials/IMG_E1177.JPG',
  '/images/testimonials/IMG_E1178.JPG',
  '/images/testimonials/IMG_E1179.JPG',
  '/images/testimonials/IMG_E1180.JPG',
  '/images/testimonials/IMG_E1181.JPG',
  '/images/testimonials/IMG_E1182.JPG',
  '/images/testimonials/IMG_E1183.JPG',
  '/images/testimonials/IMG_E1184.JPG',
  '/images/testimonials/IMG_E1185.JPG',
  '/images/testimonials/IMG_E1186.JPG',
  '/images/testimonials/IMG_E1187.JPG',
];

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    location: 'Marietta, GA',
    rating: 5,
    image: '/images/testimonials/IMG_1162.JPG',
    puppyName: 'Copper',
    text: "Copper has been the best addition to our family. He arrived healthy, well-socialized, and already knew basic commands. The team at HillSide Paws was incredibly supportive throughout the entire process and even checked in on us weeks after bringing him home. We could not be happier with our little guy."
  },
  {
    name: 'Jennifer & Tom L.',
    location: 'Austin, TX',
    rating: 5,
    image: '/images/testimonials/IMG_1163.JPG',
    puppyName: 'Penny',
    text: "Penny is the sweetest little Dachshund and has stolen everyone's hearts. From the moment we picked her up, it was clear she had been raised with love and care. HillSide Paws made the whole experience smooth and professional from start to finish. The welcome kit they sent home with us had everything we needed for the first week."
  },
  {
    name: 'David & Amy R.',
    location: 'Nashville, TN',
    rating: 5,
    image: '/images/testimonials/IMG_1164.JPG',
    puppyName: 'Duke',
    text: "Duke is our third Dachshund but our first from HillSide Paws, and the difference is remarkable. His temperament is wonderful and he came with complete health documentation. The breeder clearly cares deeply about every single puppy they raise. We have already recommended them to three other families."
  },
  {
    name: 'Christine W.',
    location: 'Charlotte, NC',
    rating: 5,
    image: '/images/testimonials/IMG_1165.JPG',
    puppyName: 'Hazel',
    text: "Hazel is an absolute dream. Her chocolate dapple coat is gorgeous and her personality is even more beautiful. She settled into our home within days and already loves our children. HillSide Paws answered every question we had with patience and kindness throughout our entire journey."
  },
  {
    name: 'Eric S.',
    location: 'Greenville, SC',
    rating: 5,
    image: '/images/testimonials/IMG_1166.JPG',
    puppyName: 'Tucker',
    text: "Tucker is everything we hoped for and more. He is playful, affectionate, and incredibly smart. You can tell he was raised in a loving family environment. HillSide Paws truly goes above and beyond for their puppy families. Best decision we have made in years."
  },
  {
    name: 'The Martinez Family',
    location: 'Knoxville, TN',
    rating: 5,
    image: '/images/testimonials/IMG_1167.JPG',
    puppyName: 'Ginger',
    text: "Ginger has become the center of our family in just a few short weeks. Our three kids adore her and she is so patient and gentle with them. The two-year health guarantee gave us complete peace of mind. HillSide Paws is the real deal and we are so thankful we found them."
  },
  {
    name: 'Karen & Bill D.',
    location: 'Birmingham, AL',
    rating: 5,
    image: '/images/testimonials/IMG_1168.JPG',
    puppyName: 'Biscuit',
    text: "Biscuit has brought so much joy to our home. He came with a full health guarantee, vaccination records, and a starter kit that had everything we needed for his first month. HillSide Paws truly thinks of everything. We are so grateful we chose them for our first Dachshund."
  },
  {
    name: 'Jason T.',
    location: 'Raleigh, NC',
    rating: 5,
    image: '/images/testimonials/IMG_1169.JPG',
    puppyName: 'Scout',
    text: "Scout is one of the smartest dogs I have ever owned. He picked up house training in record time and already knows sit, stay, and come. The breeding quality from HillSide Paws is exceptional and their knowledge of the Dachshund breed is second to none. I would recommend them without hesitation."
  },
  {
    name: 'Mike & Laura H.',
    location: 'Columbus, OH',
    rating: 5,
    image: '/images/testimonials/IMG_1170.JPG',
    puppyName: 'Rosie',
    text: "Rosie is the most adorable red dapple Dachshund and we are so grateful to HillSide Paws for matching us with her. They really took the time to understand our lifestyle and recommended the perfect puppy for us. She arrived happy and healthy and has been an angel from day one."
  },
  {
    name: 'Elena B.',
    location: 'Richmond, VA',
    rating: 5,
    image: '/images/testimonials/IMG_1188.JPG',
    puppyName: 'Willow',
    text: "Willow is a gentle soul with the most loving personality. She gets along beautifully with our older dog and has fit right into our routine. The team at HillSide Paws provided fantastic guidance on nutrition and care specific to the Dachshund breed. Their expertise really shows in the quality of their puppies."
  },
  {
    name: 'Adrian G.',
    location: 'Tampa, FL',
    rating: 5,
    image: '/images/testimonials/IMG_1189.JPG',
    puppyName: 'Finn',
    text: "Finn is loyal, protective, and absolutely loves our family. His chocolate and tan coloring is stunning and he has the best Dachshund personality. HillSide Paws made adopting our first dog a stress-free and enjoyable experience. The weekly photo updates before pickup day were the highlight of our week."
  },
  {
    name: 'Pete & Sandra A.',
    location: 'Savannah, GA',
    rating: 5,
    image: '/images/testimonials/IMG_1190.JPG',
    puppyName: 'Clover',
    text: "Clover is our first dog together and HillSide Paws guided us through everything as first-time owners. She is gentle, well-mannered, and already a certified cuddle champion. The welcome kit was incredibly helpful and included food, toys, and a blanket that smelled like her littermates to ease the transition."
  },
  {
    name: 'Megan L.',
    location: 'Chattanooga, TN',
    rating: 5,
    image: '/images/testimonials/IMG_1191.JPG',
    puppyName: 'Maple',
    text: "Maple is a longhair beauty with the sweetest disposition. She loves everyone she meets and has become the star of our neighborhood walks. HillSide Paws clearly puts their heart into raising these puppies. You can tell the difference when a breeder truly cares about what they do."
  },
  {
    name: 'James & Kelly N.',
    location: 'Asheville, NC',
    rating: 5,
    image: '/images/testimonials/IMG_1192.JPG',
    puppyName: 'Rusty',
    text: "We drove four hours to pick up Rusty from HillSide Paws and it was worth every single mile. He was so well-socialized that he settled into our car like he had been riding with us forever. Their facility was clean, the parent dogs were healthy and friendly, and the whole experience was top-notch."
  },
  {
    name: 'Robert & Dan F.',
    location: 'Atlanta, GA',
    rating: 5,
    image: '/images/testimonials/IMG_1193.JPG',
    puppyName: 'Oliver',
    text: "Oliver is incredibly smart and has the most beautiful longhair coat. He learned tricks within his first week home and already has our entire family wrapped around his little paw. You can see the dedication HillSide Paws puts into every puppy. The entire neighborhood stops to ask about him."
  },
  {
    name: 'Paul C.',
    location: 'Houston, TX',
    rating: 5,
    image: '/images/testimonials/IMG_1194.JPG',
    puppyName: 'Hank',
    text: "Hank is my perfect companion. He is always by my side whether we are on a walk or relaxing at home. Communication with HillSide Paws was excellent throughout the entire process. They sent photos and videos every few days so I could watch him grow before pickup day."
  },
  {
    name: 'Frank & Theresa O.',
    location: 'Dallas, TX',
    rating: 5,
    image: '/images/testimonials/IMG_1195.JPG',
    puppyName: 'Daisy',
    text: "Daisy is incredible with our whole family. This is our second puppy from HillSide Paws and the experience was just as wonderful as the first time. Their commitment to breeding healthy, happy Dachshunds is truly commendable. We will be customers for life and have already told all our friends."
  },
  {
    name: 'Alex & Sara K.',
    location: 'Jacksonville, FL',
    rating: 5,
    image: '/images/testimonials/IMG_1196.JPG',
    puppyName: 'Winston',
    text: "Winston is the most adorable cream Dachshund and brings smiles to everyone he meets. We drove to pick him up and it was love at first sight. HillSide Paws made everything perfect from the first phone call to bringing him home. The breeder even called to check on him the next day."
  },
  {
    name: 'Valentina R.',
    location: 'Miami, FL',
    rating: 5,
    image: '/images/testimonials/IMG_1197.JPG',
    puppyName: 'Luna',
    text: "Luna is one of a kind. Her longhair red coat is gorgeous and her personality is even more beautiful. The adoption process was seamless and HillSide Paws gave me complete confidence from the very first moment. The health records and pedigree documentation were thorough and professional."
  },
  {
    name: 'Marcus J.',
    location: 'Charleston, SC',
    rating: 5,
    image: '/images/testimonials/IMG_1198.JPG',
    puppyName: 'Bear',
    text: "Bear has the biggest heart of any dog I have ever known. He is calm, loving, and has a beautiful coat that gets compliments everywhere we go. HillSide Paws exceeded my expectations with their professionalism and genuine care for their puppies. I am already thinking about getting him a sibling."
  },
  {
    name: 'Brittany & Mark P.',
    location: 'Denver, CO',
    rating: 5,
    image: '/images/testimonials/IMG_1199.JPG',
    puppyName: 'Oakley',
    text: "Oakley has been an absolute joy since the moment we brought him home. He was already crate trained and adjusted to our routine within the first two days. The health guarantee and complete vet records from HillSide Paws gave us total confidence in our decision."
  },
  {
    name: 'The Wilson Family',
    location: 'Memphis, TN',
    rating: 5,
    image: '/images/testimonials/IMG_1200.JPG',
    puppyName: 'Pepper',
    text: "Pepper is the sweetest little girl and our four kids are completely in love with her. She came home already socialized and comfortable around children, which made the transition so easy. HillSide Paws clearly raises their puppies in a true family environment and it shows in every way."
  },
  {
    name: 'Linda G.',
    location: 'Scottsdale, AZ',
    rating: 5,
    image: '/images/testimonials/IMG_1201.JPG',
    puppyName: 'Theo',
    text: "Theo is my first Dachshund and I could not have asked for a better experience. HillSide Paws walked me through every step as a first-time owner and the welcome kit they provided had everything from food to toys to a puppy care guide. He is healthy, happy, and already my best friend."
  },
  {
    name: 'Steve & Rachel T.',
    location: 'Portland, OR',
    rating: 5,
    image: '/images/testimonials/IMG_1202.JPG',
    puppyName: 'Ruby',
    text: "Ruby is the most gentle and affectionate puppy we have ever met. Her temperament is exactly what HillSide Paws described, and it is clear they put enormous care into matching puppies with the right families. The AKC registration papers arrived promptly and everything was in perfect order."
  },
  {
    name: 'Derek M.',
    location: 'Philadelphia, PA',
    rating: 5,
    image: '/images/testimonials/IMG_1203.JPG',
    puppyName: 'Sadie',
    text: "Sadie has completely changed our lives for the better. She arrived with up-to-date vaccinations, a thorough health check, and the smoothest adoption paperwork we have ever seen. The breeder at HillSide Paws even followed up a week later to make sure Sadie was settling in well."
  },
  {
    name: 'The Henderson Family',
    location: 'San Antonio, TX',
    rating: 5,
    image: '/images/testimonials/IMG_1204.JPG',
    puppyName: 'Milo',
    text: "Milo is an incredibly well-behaved puppy and our vet was impressed with how healthy he is. HillSide Paws provided detailed feeding instructions, a vaccination schedule, and even tips on Dachshund-specific care. You can tell these puppies are raised with genuine love and attention from day one."
  },
  {
    name: 'Angela & Chris B.',
    location: 'Seattle, WA',
    rating: 5,
    image: '/images/testimonials/IMG_1205.JPG',
    puppyName: 'Poppy',
    text: "Poppy is the most curious and playful little Dachshund. She was already familiar with basic sounds and textures when she arrived, which tells us she was properly socialized from birth. The communication from HillSide Paws throughout the entire process was prompt, friendly, and transparent."
  },
  {
    name: 'Nathan W.',
    location: 'Minneapolis, MN',
    rating: 5,
    image: '/images/testimonials/IMG_1206.JPG',
    puppyName: 'Max',
    text: "Max is everything I wanted in a companion dog. He is loyal, calm, and has the most soulful eyes. HillSide Paws sent me weekly photo and video updates from the time he was born until pickup day, so I felt connected to him long before he came home."
  },
  {
    name: 'Jessica & Brian K.',
    location: 'Milwaukee, WI',
    rating: 5,
    image: '/images/testimonials/IMG_1207.JPG',
    puppyName: 'Coco',
    text: "Coco is a chocolate dapple beauty who has stolen every heart in our neighborhood. The two-year health guarantee from HillSide Paws was a huge factor in our decision, and the breeder made sure we understood every detail of her care before we left. Truly a first-class experience."
  },
  {
    name: 'The Patel Family',
    location: 'Indianapolis, IN',
    rating: 5,
    image: '/images/testimonials/IMG_1208.JPG',
    puppyName: 'Ziggy',
    text: "Ziggy has brought so much laughter and love into our home. He was potty trained within a week and already responds to his name. HillSide Paws provided a comprehensive puppy packet with health records, training tips, and a comfort blanket from his litter. We could not be more grateful."
  },
  {
    name: 'Courtney R.',
    location: 'Kansas City, MO',
    rating: 5,
    image: '/images/testimonials/IMG_1209.JPG',
    puppyName: 'Nola',
    text: "Nola is my emotional support companion and she has been a blessing beyond words. HillSide Paws took the time to understand exactly what I needed and matched me with the perfect puppy. Her calm temperament and sweet nature have made a real difference in my daily life."
  },
  {
    name: 'Travis & Kim S.',
    location: 'Louisville, KY',
    rating: 5,
    image: '/images/testimonials/IMG_1210.JPG',
    puppyName: 'Archie',
    text: "Archie is our second Dachshund from HillSide Paws and we would never go anywhere else. The consistency in their breeding program is remarkable. Both of our pups came home healthy, happy, and incredibly well-adjusted. The adoption process was just as smooth and professional the second time around."
  },
  {
    name: 'Hannah & Joel V.',
    location: 'Baton Rouge, LA',
    rating: 5,
    image: '/images/testimonials/IMG_1211.JPG',
    puppyName: 'Ellie',
    text: "Ellie is the most affectionate puppy we have ever had. She loves to snuggle and has fit right into our daily routine. The vet records from HillSide Paws were meticulous, and our veterinarian commented on how thorough everything was. That level of care really sets them apart."
  },
  {
    name: 'The Campbell Family',
    location: 'Baltimore, MD',
    rating: 5,
    image: '/images/testimonials/IMG_1212.JPG',
    puppyName: 'Otis',
    text: "Otis has the funniest personality and keeps our whole family entertained. He arrived with a full starter kit including food, treats, a collar, and even a toy. HillSide Paws thought of every little detail to make sure the first few days at home were stress-free for both us and our new puppy."
  },
  {
    name: 'Monica D.',
    location: 'Hartford, CT',
    rating: 5,
    image: '/images/testimonials/IMG_1213.JPG',
    puppyName: 'Winnie',
    text: "Winnie is the light of my life. As a single pet owner, I was nervous about the process, but HillSide Paws made everything so simple. They answered my dozens of questions with patience and even provided a new-owner checklist that helped me prepare my apartment before she arrived."
  },
  {
    name: 'Greg & Lisa M.',
    location: 'Newark, NJ',
    rating: 5,
    image: '/images/testimonials/IMG_1214.JPG',
    puppyName: 'Benny',
    text: "Benny has the most beautiful red coat and the sweetest eyes. The breeder at HillSide Paws was in constant communication with us from the deposit through pickup day. They genuinely care about where their puppies end up and it was clear they wanted the best match for Benny and for us."
  },
  {
    name: 'Patricia A.',
    location: 'Tucson, AZ',
    rating: 5,
    image: '/images/testimonials/IMG_1215.JPG',
    puppyName: 'Dolly',
    text: "Dolly is an absolute sweetheart with the most gentle disposition. She came with her AKC papers, a detailed health history, and even a small bag of the food she was eating so we could transition her slowly. HillSide Paws really goes above and beyond to ensure a smooth adoption for every family."
  },
  {
    name: 'Kyle & Amanda J.',
    location: 'Colorado Springs, CO',
    rating: 5,
    image: '/images/testimonials/IMG_1216.JPG',
    puppyName: 'Charlie',
    text: "Charlie is the most well-socialized puppy we have ever seen. He was comfortable with our cats, our toddler, and even the vacuum cleaner from his very first day home. The family-raised environment at HillSide Paws clearly makes all the difference and we recommend them to everyone we meet."
  },
  {
    name: 'The Morgan Family',
    location: 'Virginia Beach, VA',
    rating: 5,
    image: '/images/testimonials/IMG_1217.JPG',
    puppyName: 'Lola',
    text: "Lola is our dream puppy. She has the perfect combination of playfulness and calm that works so well with our two young boys. HillSide Paws provided video calls so we could see her grow before pickup, and the transition blanket with her littermates' scent was a thoughtful touch that helped her settle in quickly."
  },
  {
    name: 'Raymond & Diane H.',
    location: 'Huntsville, AL',
    rating: 5,
    image: '/images/testimonials/IMG_1218.JPG',
    puppyName: 'Murphy',
    text: "Murphy has been a perfect addition to our retired life. He is calm, well-mannered, and loves his daily walks around the neighborhood. HillSide Paws matched us with exactly the right temperament for our lifestyle. The health guarantee and ongoing support gave us complete peace of mind at every step."
  },
  {
    name: 'Samantha & Drew C.',
    location: 'Pittsburgh, PA',
    rating: 5,
    image: '/images/testimonials/IMG_1219.JPG',
    puppyName: 'Stella',
    text: "Stella is a stunning longhair with the most loving personality. She bonded with us instantly and already knows several commands. The training tips HillSide Paws included in the welcome packet were incredibly helpful, and we could tell Stella had already started learning before she even came home to us."
  },
  {
    name: 'Carlos & Maria L.',
    location: 'Orlando, FL',
    rating: 5,
    image: '/images/testimonials/IMG_1220.JPG',
    puppyName: 'Bruno',
    text: "Bruno is the most handsome miniature Dachshund and he has the personality to match. Our vet was very impressed with his overall health and the thoroughness of the records HillSide Paws provided. From start to finish, the entire adoption experience was professional, caring, and truly enjoyable."
  },
  {
    name: 'The Foster Family',
    location: 'Lexington, KY',
    rating: 5,
    image: '/images/testimonials/IMG_1221.JPG',
    puppyName: 'Gus',
    text: "Gus is our family's third Dachshund and our first from HillSide Paws. The difference in quality is night and day. He arrived healthy, confident, and already comfortable being handled by our kids. The breeder's dedication to early socialization really shows, and we wish we had found them sooner."
  },
  {
    name: 'Tiffany & Ryan E.',
    location: 'Macon, GA',
    rating: 5,
    image: '/images/testimonials/IMG_E1171.JPG',
    puppyName: 'Peanut',
    text: "Peanut is the tiniest bundle of joy and she has completely won over our entire household. She came with a detailed vaccination schedule and the breeder walked us through every upcoming vet visit she would need. HillSide Paws made us feel prepared and confident as new Dachshund owners."
  },
  {
    name: 'Doug & Wendy F.',
    location: 'Omaha, NE',
    rating: 5,
    image: '/images/testimonials/IMG_E1172.JPG',
    puppyName: 'Jasper',
    text: "Jasper is a calm and curious little guy who adjusted to our home right away. HillSide Paws included a scented blanket from his littermates which made the first night so much easier. The breeder clearly puts a lot of thought into the transition process and it made all the difference for our family."
  },
  {
    name: 'Whitney N.',
    location: 'Columbia, SC',
    rating: 5,
    image: '/images/testimonials/IMG_E1173.JPG',
    puppyName: 'Honey',
    text: "Honey lives up to her name in every way. She is sweet, snuggly, and has the most beautiful cream coat. The AKC registration was handled efficiently and the pedigree information HillSide Paws shared helped me understand her lineage. I feel so lucky to have found such a reputable breeder."
  },
  {
    name: 'The Brooks Family',
    location: 'Tallahassee, FL',
    rating: 5,
    image: '/images/testimonials/IMG_E1175.JPG',
    puppyName: 'Waffles',
    text: "Waffles has been the perfect family dog from day one. Our kids picked his name and he has lived up to it with his warm and comforting presence. HillSide Paws provided regular photo updates during the weeks before pickup, so the kids felt like they already knew him when he finally came home."
  },
  {
    name: 'Kevin & Stacy W.',
    location: 'Roanoke, VA',
    rating: 5,
    image: '/images/testimonials/IMG_E1176.JPG',
    puppyName: 'Remi',
    text: "Remi is the most well-adjusted puppy we have ever brought into our home. He was comfortable with new sounds, new people, and even our cat within the first hour. The socialization program at HillSide Paws is clearly top-notch and we are so thankful we chose them for our new family member."
  },
  {
    name: 'Nicole H.',
    location: 'Eugene, OR',
    rating: 5,
    image: '/images/testimonials/IMG_E1177.JPG',
    puppyName: 'Ivy',
    text: "Ivy is everything I dreamed of in a Dachshund puppy. Her longhair coat is absolutely gorgeous and her sweet temperament makes every day brighter. HillSide Paws was transparent about her health history and the two-year guarantee shows how confident they are in their breeding program."
  },
  {
    name: 'The Adams Family',
    location: 'Greenville, NC',
    rating: 5,
    image: '/images/testimonials/IMG_E1178.JPG',
    puppyName: 'Boomer',
    text: "Boomer is full of energy and personality and our whole family adores him. He arrived with complete vet records, a microchip already registered in our name, and a starter supply of food. HillSide Paws thought of absolutely everything and the pickup experience was warm and well-organized."
  },
  {
    name: 'Mitchell & Brooke Y.',
    location: 'Spokane, WA',
    rating: 5,
    image: '/images/testimonials/IMG_E1179.JPG',
    puppyName: 'Dixie',
    text: "Dixie is the sweetest girl with the most expressive eyes. She bonded with our daughter immediately and they are now inseparable. The communication from HillSide Paws was outstanding from our very first inquiry all the way through to bringing Dixie home. We truly felt like family, not just customers."
  },
  {
    name: 'Craig B.',
    location: 'Savannah, GA',
    rating: 5,
    image: '/images/testimonials/IMG_E1180.JPG',
    puppyName: 'Rocco',
    text: "Rocco is a bold little guy with a huge personality. His health records were impeccable and the breeder provided detailed notes on his eating habits, sleep schedule, and favorite toys. HillSide Paws goes the extra mile to make the transition seamless, and it really made our first week together so much easier."
  },
  {
    name: 'Laura & Matt Z.',
    location: 'Knoxville, TN',
    rating: 5,
    image: '/images/testimonials/IMG_E1181.JPG',
    puppyName: 'Nellie',
    text: "Nellie has the calmest temperament of any puppy we have ever met. She was sleeping through the night by her third day home, which our vet said is a great sign of a well-raised pup. HillSide Paws clearly invests serious time into early training and socialization before their puppies go to new homes."
  },
  {
    name: 'Jordan & Ashley P.',
    location: 'Mobile, AL',
    rating: 5,
    image: '/images/testimonials/IMG_E1182.JPG',
    puppyName: 'Louie',
    text: "Louie is a little comedian who makes us laugh every single day. He arrived healthy, up-to-date on all his shots, and with a comprehensive puppy care guide from HillSide Paws. The breeder even texted us the next morning to see how his first night went. That kind of personal touch means the world."
  },
  {
    name: 'The Nguyen Family',
    location: 'Tacoma, WA',
    rating: 5,
    image: '/images/testimonials/IMG_E1183.JPG',
    puppyName: 'Pip',
    text: "Pip is the smallest member of our family but has the biggest heart. She warmed up to our two older dogs within hours and now they are the best of friends. HillSide Paws provided guidance on introducing her to a multi-pet household, and their advice made the process incredibly smooth."
  },
  {
    name: 'Danielle & Scott R.',
    location: 'Fayetteville, NC',
    rating: 5,
    image: '/images/testimonials/IMG_E1184.JPG',
    puppyName: 'Clementine',
    text: "Clementine is a gorgeous red longhair who gets compliments everywhere she goes. The adoption process with HillSide Paws was straightforward and they kept us informed at every stage. Her AKC papers and health certifications arrived exactly as promised, and our vet confirmed she is in perfect health."
  },
  {
    name: 'Victor T.',
    location: 'Albuquerque, NM',
    rating: 5,
    image: '/images/testimonials/IMG_E1185.JPG',
    puppyName: 'Banjo',
    text: "Banjo is my adventure buddy and he has been the best trail companion I could ask for. Despite being a miniature Dachshund, he has incredible stamina and confidence. HillSide Paws bred him with an outstanding temperament and his health has been perfect since the day I brought him home."
  },
  {
    name: 'Rebecca & Alan W.',
    location: 'Chattanooga, TN',
    rating: 5,
    image: '/images/testimonials/IMG_E1186.JPG',
    puppyName: 'Millie',
    text: "Millie is the most cuddly and devoted little Dachshund. She follows us from room to room and loves being held. The family-raised environment at HillSide Paws is evident in how comfortable she is around people. Their commitment to producing well-socialized, healthy puppies truly sets them apart from other breeders."
  },
  {
    name: 'The Richardson Family',
    location: 'Jackson, MS',
    rating: 5,
    image: '/images/testimonials/IMG_E1187.JPG',
    puppyName: 'Teddy',
    text: "Teddy has been a wonderful addition to our family. He has the softest coat and the sweetest personality. From the initial phone call to the day we picked him up, HillSide Paws made us feel valued and informed. The complete health documentation and lifetime breeder support sealed the deal for us."
  }
];
