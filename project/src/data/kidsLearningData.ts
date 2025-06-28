export interface CartoonCharacter {
  name: string;
  personality: string;
  voiceLines: string[];
  emoji: string;
}

export interface VocabularyWord {
  english: string;
  definition: string;
  emoji: string;
  translations: {
    arabic?: string;
    spanish?: string;
    kurdish?: string;
  };
}

export interface StoryLine {
  speaker: string;
  text: string;
  emoji?: string;
}

export interface WritingPractice {
  letters: string[];
  words: string[];
  instructions: string[];
}

export interface InteractiveGame {
  type: 'drag' | 'tap' | 'match' | 'trace';
  title: string;
  description: string;
  instructions: string[];
}

export interface VoiceLine {
  type: 'narration' | 'praise' | 'instruction' | 'correction';
  text: string;
}

export interface Reward {
  type: 'star' | 'badge' | 'sticker';
  name: string;
  description: string;
  emoji: string;
}

export interface KidsLesson {
  id: string;
  title: string;
  topic: string;
  ageGroup: '4-6' | '6-8';
  difficulty: 'beginner' | 'intermediate';
  learningObjective: string;
  cartoonCharacters: CartoonCharacter[];
  story: StoryLine[];
  vocabulary: VocabularyWord[];
  song: {
    title: string;
    lyrics: string[];
    rhythm: string;
  };
  writingPractice: WritingPractice;
  interactiveGames: InteractiveGame[];
  voiceLines: VoiceLine[];
  rewards: Reward[];
  translations: {
    arabic: Record<string, string>;
    spanish: Record<string, string>;
    kurdish: Record<string, string>;
  };
}

export const kidsLearningData: KidsLesson[] = [
  {
    id: 'animals-1',
    title: 'Fun with Animals! 🐾',
    topic: 'Animals',
    ageGroup: '4-6',
    difficulty: 'beginner',
    learningObjective: 'By the end of this lesson, the child can say and write 5 animal names',
    cartoonCharacters: [
      {
        name: 'Leo the Lion',
        personality: 'Friendly and brave, loves to roar and help friends learn',
        voiceLines: [
          "Hello, little friend! I'm Leo the Lion! 🦁",
          "Let's learn about animals together!",
          "You're doing great! Keep going!",
          "Roar! That's how I say hello!"
        ],
        emoji: '🦁'
      },
      {
        name: 'Zoe the Zebra',
        personality: 'Smart and gentle, loves to teach with stripes',
        voiceLines: [
          "Hi there! I'm Zoe the Zebra! 🦓",
          "Look at my beautiful stripes!",
          "You're learning so fast!",
          "Let's have fun learning!"
        ],
        emoji: '🦓'
      }
    ],
    story: [
      {
        speaker: 'Leo',
        text: "Hello! I'm Leo the Lion! 🦁",
        emoji: '🦁'
      },
      {
        speaker: 'Zoe',
        text: "Hi Leo! I'm Zoe the Zebra! 🦓",
        emoji: '🦓'
      },
      {
        speaker: 'Leo',
        text: "Let's meet our animal friends!",
        emoji: '🐾'
      },
      {
        speaker: 'Zoe',
        text: "Yes! Let's learn together!",
        emoji: '✨'
      }
    ],
    vocabulary: [
      {
        english: 'Cat',
        definition: 'A small furry animal that says "meow"',
        emoji: '🐱',
        translations: {
          arabic: 'قط',
          spanish: 'gato',
          kurdish: 'پشیلە'
        }
      },
      {
        english: 'Dog',
        definition: 'A friendly animal that says "woof"',
        emoji: '🐕',
        translations: {
          arabic: 'كلب',
          spanish: 'perro',
          kurdish: 'سەگ'
        }
      },
      {
        english: 'Bird',
        definition: 'An animal that can fly and sings',
        emoji: '🐦',
        translations: {
          arabic: 'طائر',
          spanish: 'pájaro',
          kurdish: 'باڵندە'
        }
      },
      {
        english: 'Fish',
        definition: 'An animal that swims in water',
        emoji: '🐠',
        translations: {
          arabic: 'سمك',
          spanish: 'pez',
          kurdish: 'ماسی'
        }
      },
      {
        english: 'Rabbit',
        definition: 'A small animal with long ears that hops',
        emoji: '🐰',
        translations: {
          arabic: 'أرنب',
          spanish: 'conejo',
          kurdish: 'کەروێشک'
        }
      }
    ],
    song: {
      title: 'Animal Friends Song',
      lyrics: [
        "Cat, cat, meow, meow! 🐱",
        "Dog, dog, woof, woof! 🐕",
        "Bird, bird, tweet, tweet! 🐦",
        "Fish, fish, swim, swim! 🐠",
        "Rabbit, rabbit, hop, hop! 🐰",
        "We are animal friends! 🐾"
      ],
      rhythm: "Simple 4/4 beat with clapping"
    },
    writingPractice: {
      letters: ['C', 'D', 'B', 'F', 'R'],
      words: ['Cat', 'Dog', 'Bird', 'Fish', 'Rabbit'],
      instructions: [
        "Start at the top, go down",
        "Make a big curve",
        "Go straight down",
        "Make a circle",
        "Jump up and down"
      ]
    },
    interactiveGames: [
      {
        type: 'tap',
        title: 'Tap the Animal',
        description: 'Tap the animal when you hear its name',
        instructions: [
          "Listen carefully to the word",
          "Tap the correct animal picture",
          "You'll hear a happy sound when you're right!"
        ]
      },
      {
        type: 'match',
        title: 'Memory Match',
        description: 'Find matching pairs of animals',
        instructions: [
          "Click cards to flip them",
          "Find two matching animals",
          "Remember where each animal is!"
        ]
      },
      {
        type: 'drag',
        title: 'Animal Sounds',
        description: 'Match animals to their sounds',
        instructions: [
          "Listen to the animal sound",
          "Drag it to the correct animal",
          "Learn what each animal says!"
        ]
      }
    ],
    voiceLines: [
      {
        type: 'narration',
        text: "Welcome to our animal lesson!"
      },
      {
        type: 'praise',
        text: "You got it right! Great job!"
      },
      {
        type: 'instruction',
        text: "Tap the cat picture"
      },
      {
        type: 'correction',
        text: "Try again, you can do it!"
      }
    ],
    rewards: [
      {
        type: 'star',
        name: 'Animal Expert Star',
        description: 'You learned all the animals!',
        emoji: '⭐'
      },
      {
        type: 'badge',
        name: 'Friend of Animals Badge',
        description: 'You can name 5 animals!',
        emoji: '🏅'
      },
      {
        type: 'sticker',
        name: 'Lion Sticker',
        description: 'You completed the lesson!',
        emoji: '🦁'
      }
    ],
    translations: {
      arabic: {
        'Cat': 'قط',
        'Dog': 'كلب',
        'Bird': 'طائر',
        'Fish': 'سمك',
        'Rabbit': 'أرنب'
      },
      spanish: {
        'Cat': 'gato',
        'Dog': 'perro',
        'Bird': 'pájaro',
        'Fish': 'pez',
        'Rabbit': 'conejo'
      },
      kurdish: {
        'Cat': 'پشیلە',
        'Dog': 'سەگ',
        'Bird': 'باڵندە',
        'Fish': 'ماسی',
        'Rabbit': 'کەروێشک'
      }
    }
  },
  {
    id: 'colors-1',
    title: 'Rainbow Colors! 🌈',
    topic: 'Colors',
    ageGroup: '4-6',
    difficulty: 'beginner',
    learningObjective: 'By the end of this lesson, the child can name and identify 6 basic colors',
    cartoonCharacters: [
      {
        name: 'Rainbow Ray',
        personality: 'Colorful and cheerful, loves to paint and create',
        voiceLines: [
          "Hello! I'm Rainbow Ray! 🌈",
          "Let's paint with beautiful colors!",
          "Colors make the world beautiful!",
          "You're an amazing artist!"
        ],
        emoji: '🌈'
      }
    ],
    story: [
      {
        speaker: 'Rainbow Ray',
        text: "Look at my beautiful rainbow! 🌈",
        emoji: '🌈'
      },
      {
        speaker: 'Rainbow Ray',
        text: "Red, orange, yellow, green, blue, purple!",
        emoji: '🎨'
      },
      {
        speaker: 'Rainbow Ray',
        text: "Let's learn all the colors together!",
        emoji: '✨'
      }
    ],
    vocabulary: [
      {
        english: 'Red',
        definition: 'The color of apples and fire trucks',
        emoji: '🔴',
        translations: {
          arabic: 'أحمر',
          spanish: 'rojo',
          kurdish: 'سور'
        }
      },
      {
        english: 'Blue',
        definition: 'The color of the sky and ocean',
        emoji: '🔵',
        translations: {
          arabic: 'أزرق',
          spanish: 'azul',
          kurdish: 'شین'
        }
      },
      {
        english: 'Yellow',
        definition: 'The color of the sun and bananas',
        emoji: '🟡',
        translations: {
          arabic: 'أصفر',
          spanish: 'amarillo',
          kurdish: 'زەرد'
        }
      },
      {
        english: 'Green',
        definition: 'The color of grass and trees',
        emoji: '🟢',
        translations: {
          arabic: 'أخضر',
          spanish: 'verde',
          kurdish: 'سەوز'
        }
      },
      {
        english: 'Purple',
        definition: 'The color of grapes and flowers',
        emoji: '🟣',
        translations: {
          arabic: 'بنفسجي',
          spanish: 'morado',
          kurdish: 'مۆر'
        }
      },
      {
        english: 'Orange',
        definition: 'The color of oranges and carrots',
        emoji: '🟠',
        translations: {
          arabic: 'برتقالي',
          spanish: 'naranja',
          kurdish: 'پرتەقاڵی'
        }
      }
    ],
    song: {
      title: 'Colors Song',
      lyrics: [
        "Red and yellow and pink and green, 🎨",
        "Purple and orange and blue!",
        "I can sing a rainbow, sing a rainbow, sing a rainbow too!",
        "Listen with your eyes, listen with your eyes, and sing everything you see!",
        "I can sing a rainbow, sing a rainbow, sing along with me!"
      ],
      rhythm: "Gentle melody with hand movements"
    },
    writingPractice: {
      letters: ['R', 'B', 'Y', 'G', 'P', 'O'],
      words: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      instructions: [
        "Start at the top, go down",
        "Make a big curve",
        "Go straight down",
        "Make a circle",
        "Jump up and down"
      ]
    },
    interactiveGames: [
      {
        type: 'drag',
        title: 'Color the Picture',
        description: 'Drag colors to paint the picture',
        instructions: [
          "Choose a color from the palette",
          "Drag it to the picture",
          "Paint the whole picture!"
        ]
      },
      {
        type: 'match',
        title: 'Color Match',
        description: 'Match objects to their colors',
        instructions: [
          "Look at the object",
          "Tap the correct color",
          "Great matching!"
        ]
      },
      {
        type: 'tap',
        title: 'Find the Color',
        description: 'Tap the color when you hear its name',
        instructions: [
          "Listen to the color name",
          "Tap the correct color",
          "Learn all the colors!"
        ]
      }
    ],
    voiceLines: [
      {
        type: 'narration',
        text: "Let's learn about colors!"
      },
      {
        type: 'praise',
        text: "Beautiful coloring! Well done!"
      },
      {
        type: 'instruction',
        text: "Paint the apple red"
      },
      {
        type: 'correction',
        text: "Try a different color!"
      }
    ],
    rewards: [
      {
        type: 'star',
        name: 'Color Master Star',
        description: 'You know all the colors!',
        emoji: '⭐'
      },
      {
        type: 'badge',
        name: 'Rainbow Artist Badge',
        description: 'You can name 6 colors!',
        emoji: '🏅'
      },
      {
        type: 'sticker',
        name: 'Rainbow Sticker',
        description: 'You completed the lesson!',
        emoji: '🌈'
      }
    ],
    translations: {
      arabic: {
        'Red': 'أحمر',
        'Blue': 'أزرق',
        'Yellow': 'أصفر',
        'Green': 'أخضر',
        'Purple': 'بنفسجي',
        'Orange': 'برتقالي'
      },
      spanish: {
        'Red': 'rojo',
        'Blue': 'azul',
        'Yellow': 'amarillo',
        'Green': 'verde',
        'Purple': 'morado',
        'Orange': 'naranja'
      },
      kurdish: {
        'Red': 'سور',
        'Blue': 'شین',
        'Yellow': 'زەرد',
        'Green': 'سەوز',
        'Purple': 'مۆر',
        'Orange': 'پرتەقاڵی'
      }
    }
  }
]; 