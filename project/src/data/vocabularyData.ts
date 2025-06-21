export interface Word {
  word: string;
  pronunciation: string;
  definition: string;
  example: string;
}

export interface VocabularyData {
  Beginner: Word[];
  Intermediate: Word[];
  Advanced: Word[];
}

export const vocabularyData: VocabularyData = {
  Beginner: [
    {
      word: "Apple",
      pronunciation: "/ˈæpəl/",
      definition: "A round fruit with red or green skin and a whitish inside.",
      example: "She eats an apple every day."
    },
    {
      word: "House",
      pronunciation: "/haʊs/",
      definition: "A building for human habitation.",
      example: "They live in a big house."
    },
    {
      word: "Happy",
      pronunciation: "/ˈhæpi/",
      definition: "Feeling or showing pleasure or contentment.",
      example: "The happy children were playing in the park."
    }
  ],
  Intermediate: [
    {
      word: "Essential",
      pronunciation: "/ɪˈsɛnʃəl/",
      definition: "Absolutely necessary; extremely important.",
      example: "Water is essential for life."
    },
    {
      word: "Accommodate",
      pronunciation: "/əˈkɒmədeɪt/",
      definition: "To provide lodging or sufficient space for.",
      example: "The hotel can accommodate up to 500 guests."
    },
    {
      word: "Analyze",
      pronunciation: "/ˈænəlaɪz/",
      definition: "To examine something methodically and in detail.",
      example: "The scientist will analyze the data."
    }
  ],
  Advanced: [
    {
      word: "Conundrum",
      pronunciation: "/kəˈnʌndrəm/",
      definition: "A confusing and difficult problem or question.",
      example: "The team faced the conundrum of having to cut costs without sacrificing quality."
    },
    {
      word: "Alacrity",
      pronunciation: "/əˈlækrɪti/",
      definition: "Br brisk and cheerful readiness.",
      example: "She accepted the invitation with alacrity."
    },
    {
      word: "Pulchritudinous",
      pronunciation: "/ˌpʌlkrɪˈtjuːdɪnəs/",
      definition: "Having great physical beauty.",
      example: "The pulchritudinous landscape was breathtaking."
    }
  ]
}; 