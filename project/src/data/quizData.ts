export interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface QuizData {
  Beginner: Question[];
  Intermediate: Question[];
  Advanced: Question[];
}

export const quizData: QuizData = {
  Beginner: [
    {
      question: "Which of these is a fruit?",
      options: ["Carrot", "Apple", "Broccoli", "Potato"],
      correct: 1,
      explanation: "'Apple' is a fruit. The others are vegetables."
    },
    {
      question: "How do you say 'hello' in English?",
      options: ["Goodbye", "Thank you", "Hello", "Sorry"],
      correct: 2,
      explanation: "The standard greeting in English is 'Hello'."
    },
    {
      question: "What is the plural of 'cat'?",
      options: ["Cats", "Cates", "Catz", "Caties"],
      correct: 0,
      explanation: "The plural of 'cat' is 'cats'. We usually add 's' to make a noun plural."
    }
  ],
  Intermediate: [
    {
      question: "Which sentence uses the correct grammar?",
      options: ["She have a book.", "She has a book.", "She are having a book.", "She has a books."],
      correct: 1,
      explanation: "For the third person singular ('She'), we use 'has'."
    },
    {
      question: "What does the idiom 'break a leg' mean?",
      options: ["To physically hurt someone", "A type of injury", "Good luck", "To be clumsy"],
      correct: 2,
      explanation: "'Break a leg' is a common idiom used to wish someone good luck, especially before a performance."
    },
    {
      question: "Choose the synonym for 'happy'.",
      options: ["Sad", "Joyful", "Angry", "Tired"],
      correct: 1,
      explanation: "'Joyful' is a synonym for 'happy', meaning feeling great happiness."
    }
  ],
  Advanced: [
    {
      question: "What is the meaning of the word 'ephemeral'?",
      options: ["Long-lasting", "Beautiful", "Lasting for a very short time", "Complex"],
      correct: 2,
      explanation: "'Ephemeral' describes something that is fleeting or lasts for a very short time."
    },
    {
      question: "Which of the following is a tautology?",
      options: ["The sun is hot.", "It is what it is.", "I think, therefore I am.", "To be or not to be."],
      correct: 1,
      explanation: "A tautology is a statement that is true by necessity or by virtue of its logical form. 'It is what it is' is a classic example."
    },
    {
      question: "What does the term 'ubiquitous' mean?",
      options: ["Rare", "Present, appearing, or found everywhere", "Complicated", "Expensive"],
      correct: 1,
      explanation: "'Ubiquitous' means being present everywhere at once."
    }
  ]
}; 