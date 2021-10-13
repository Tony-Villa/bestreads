const nonFiction = [
  {
    title: 'The Autobiography of Malcolm X',
    author: ' Alex Haley , Attallah Shabazz',
    genre: 'Non Fiction',
    description:
      'In the searing pages of this classic autobiography, originally published in 1964, Malcolm X, the Muslim leader, firebrand, and anti-integrationist, tells the extraordinary story of his life and the growth of the Black Muslim movement.',
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/51K6Bsvbn6L._SX303_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Double Helix: A Personal Account of the Discovery of the Structure of DNA ',
    author: 'James D. Watson ',
    genre: 'Non Fiction',
    description:
      'By identifying the structure of DNA, the molecule of life, Francis Crick and James Watson revolutionized biochemistry and won themselves a Nobel Prize.',
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/51AyqonNA3L._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    title: 'Freakonomics',
    author: ' Steven D. Levitt, Stephen J Dubner ',
    genre: 'Non Fiction',
    description:
      'Freakonomics is a groundbreaking collaboration between Levitt and Stephen J. Dubner, an award-winning author and journalist. They set out to explore the inner workings of a crack gang, the truth about real estate agents, the secrets of the Ku Klux Klan, and much more.',
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/51nyohMG0cL._SX326_BO1,204,203,200_.jpg',
  },
  {
    title: "A Room of One's Own",
    author: 'Virginia Woolf',
    genre: 'Non Fiction',
    description:
      "First published in 1929, the essay was based on a series of lectures she delivered at Newnham College and Girton College, two women's colleges at Cambridge University in October 1928. ",
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/41M8TLKnZDL._SX331_BO1,204,203,200_.jpg',
  },
  {
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Non Fiction',
    description:
      'A Brief History of Time plunges into the exotic realms of black holes and quarks, of antimatter and “arrows of time,” of the big bang and a bigger God—where the possibilities are wondrous and unexpected.',
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/51xE6ZCQdqS._SX331_BO1,204,203,200_.jpg',
  },
];

const psych = [
  {
    title: 'Blink',
    author: ' Malcolm Gladwell',
    genre: 'psych',
    description:
      "Blink is a book about how we think without thinking, about choices that seem to be made in an instant-in the blink of an eye-that actually aren't as simple as they seem. ",
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/41vkrXtFeZL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    title: 'The Paradox of Choice',
    author: 'Barry Schwartz, Ken Kliban',
    genre: 'psych',
    description:
      "In the spirit of Alvin Tofflers' Future Shock, a social critique of our obsession with choice, and how it contributes to anxiety, dissatisfaction and regret.",
    coverImg: 'https://m.media-amazon.com/images/I/41rJvsNboFL.jpg',
  },
  {
    title: 'Drive',
    author: ' Daniel H. Pink ',
    genre: 'psych',
    description:
      'Drawing on four decades of scientific research on human motivation, Pink exposes the mismatch between what science knows and what business does—and how that affects every aspect of life.',
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/41ef9z7YKnL._SX331_BO1,204,203,200_.jpg',
  },
  {
    title: 'Incognito',
    author: 'David Eagleman',
    genre: 'psych',
    description:
      'renowned neuroscientist David Eagleman navigates the depths of the subconscious brain to illuminate its surprising mysteries. ',
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/41eUHJZtmTL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg',
  },
  {
    title: 'Quiet',
    author: 'Susan Cain',
    genre: 'psych',
    description:
      'In Quiet, Susan Cain argues that we dramatically undervalue introverts and shows how much we lose in doing so.',
    coverImg: 'https://images-na.ssl-images-amazon.com/images/I/41hUEwpRWKL._SX307_BO1,204,203,200_.jpg',
  },
];



const horror = [
  {
    title: "The Haunting of Hill House" ,
    author: "Shirley Jackson",
    genre: "Horror",
    description: `It is the story of four seekers who arrive at a notoriously unfriendly pile called Hill House: Dr. Montague, an occult scholar looking for solid evidence of a "haunting"; Theodora, his lighthearted assistant; Eleanor, a friendless, fragile young woman well acquainted with poltergeists; and Luke, the future heir of Hill House. At first, their stay seems destined to be merely a spooky encounter with inexplicable phenomena.`,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51Otp57vz+L._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Exorcist",
    author: "William Peter Blatty" ,
    genre: "Horror",
    description: " Inspired by a true story of a child’s demonic possession in the 1940s, William Peter Blatty created an iconic novel that focuses on Regan, the eleven-year-old daughter of a movie actress residing in Washington, D.C. A small group of overwhelmed yet determined individuals must rescue Regan from her unspeakable fate, and the drama that ensues is gripping and unfailingly terrifying.",
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/41lfCsCLlzL._SX306_BO1,204,203,200_.jpg"
  },
  {
    title: "Hell House",
    author: "Richard Matheson",
    genre: "Horror",
    description: "Rolf Rudolph Deutsch is going die. But when Deutsch, a wealthy magazine and newpaper publisher, starts thinking seriously about his impending death, he offers to pay a physicist and two mediums, one physical and one mental, $100,000 each to establish the facts of life after death.",
    coverImg:"https://images-na.ssl-images-amazon.com/images/I/419R8w5C3EL._SX331_BO1,204,203,200_.jpg"
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    genre: "Horror",
    description: "The story of Victor Frankenstein's terrible creation and the havoc it caused has enthralled generations of readers and inspired countless writers of horror and suspense. Considering the novel's enduring success, it is remarkable that it began merely as a whim of Lord Byron's.",
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/416QjTxduzL._SX311_BO1,204,203,200_.jpg"
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    genre: "Horror",
    description: " Dr. Hannibal Lecter, is a former psychiatrist with unusual tastes and an intense curiosity about the darker corners of the mind. His intimate understanding of the killer and of Clarice herself form the core of Thomas Harris' The Silence of the Lambs--an unforgettable classic of suspense fiction.",
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51bteLQSJ8L._SX306_BO1,204,203,200_.jpg"
  },
];

// Tony List
const kids = [
  {
    title: "Charlotte's Web" ,
    author: "E. B White",
    genre: "kids",
    description: "Charlotte's spiderweb tells of her feelings for a little pig named Wilbur, who simply wants a friend. They also express the love of a girl named Fern, who saved Wilbur's life when he was born the runt of his litter." ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/61+3z1o4oUL._SX334_BO1,204,203,200_.jpg"
  },
  {
    title: "Green Eggs and Ham" ,
    author: "Dr.Seuss",
    genre: "kids",
    description: "With unmistakable characters and signature rhymes, Dr. Seuss’s beloved favorite has cemented its place as a children’s classic." ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51LO6d10iVL._SX355_BO1,204,203,200_.jpg"
  },
  {
    title: "The Cat in the Hat" ,
    author: "Dr.Seuss",
    genre: "kids",
    description: "A dreary day turns into a wild romp when this beloved story introduces readers to the Cat in the Hat and his troublemaking friends, Thing 1 and Thing 2. " ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51NpGEKBQoL._SX361_BO1,204,203,200_.jpg"
  },
  {
    title: "The Phantom Tollbooth" ,
    author: " Norton Juster",
    genre: "kids",
    description: "For Milo, everything’s a bore. When a tollbooth mysteriously appears in his room, he drives through only because he’s got nothing better to do. But on the other side, things seem different. Milo visits the Island of Conclusions (you get there by jumping), learns about time from a ticking watchdog named Tock, and even embarks on a quest to rescue Rhyme and Reason. For Milo, everything’s a bore. When a tollbooth mysteriously appears in his room, he drives through only because he’s got nothing better to do. But on the other side, things seem different. Milo visits the Island of Conclusions (you get there by jumping), learns about time from a ticking watchdog named Tock, and even embarks on a quest to rescue Rhyme and Reason. For Milo, everything’s a bore. When a tollbooth mysteriously appears in his room, he drives through only because he’s got nothing better to do. But on the other side, things seem different. Milo visits the Island of Conclusions (you get there by jumping), learns about time from a ticking watchdog named Tock, and even embarks on a quest to rescue Rhyme and Reason. " ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51QC8X+TDyL._SX340_BO1,204,203,200_.jpg"
  },
  {
    title: "Corduroy" ,
    author: "Don Freeman",
    genre: "kids",
    description: " Don Freeman’s classic character is even more popular today than he was when he first came on the scene. Now his original story is available in an unabridged, sturdy board book format, perfect for even the youngest readers." ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51g9OQDCVKL._SY382_BO1,204,203,200_.jpg",
  },
];
const teens = [
  {
    title: "To Kill a Mockingbird" ,
    author: "Harper Lee",
    genre: "teens",
    description: "To Kill A Mockingbird takes readers to the roots of human behavior - to innocence and experience, kindness and cruelty, love and hatred, humor and pathos." ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg"
  },
  {
    title: "The Catcher in the Rye" ,
    author: "J.D. Salinger",
    genre: "teens",
    description: "The hero-narrator of The Catcher in the Rye is an ancient child of sixteen, a native New Yorker named Holden Caufield. Through circumstances that tend to preclude adult, secondhand description, he leaves his prep school in Pennsylvania and goes underground in New York City for three days." ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51EqnTkohBL._SX307_BO1,204,203,200_.jpg"
  },
  {
    title: "Anne Frank: The Diary of a Young Girl" ,
    author: "Anne Frank",
    genre: "teens",
    description: "In 1942, with the Nazis occupying Holland, a thirteen-year-old Jewish girl and her family fled their home in Amsterdam and went into hiding." ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51Vps1OxJPL._SX303_BO1,204,203,200_.jpg"
  },
  {
    title: "Lord of the Flies" ,
    author: "William Golding",
    genre: "teens",
    description: "At the dawn of the next world war, a plane crashes on an uncharted island, stranding a group of schoolboys. At first, with no adult supervision, their freedom is something to celebrate. " ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/51eeAWItwbL._SX281_BO1,204,203,200_.jpg"
  },
  {
    title: "The Hunger Games" ,
    author: "Suzanne Collins",
    genre: "teens",
    description: " a shining Capitol surrounded by twelve outlying districts. The Capitol is harsh and cruel and keeps the districts in line by forcing them all to send one boy and one girl between the ages of twelve and eighteen to participate in the annual Hunger Games, a fight to the death on live TV." ,
    coverImg: "https://images-na.ssl-images-amazon.com/images/I/41V56ye3PrL._SX328_BO1,204,203,200_.jpg",
  },
];


