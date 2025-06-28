export interface DialogLine {
  speaker: 'ai' | 'user';
  text: string;
  responses?: string[];
}

export interface Scenario {
  title: string;
  description: string;
  dialog: DialogLine[];
  vocabulary?: { word: string; definition: string }[];
  practiceQuestions?: string[];
}

export interface ConversationData {
  Beginner: Scenario[];
  Intermediate: Scenario[];
  Advanced: Scenario[];
}

export const conversationData: ConversationData = {
  Beginner: [
    {
      "title": "Greetings and Introductions",
      "description": "Practice introducing yourself and greeting someone.",
      "dialog": [
        { "speaker": "ai", "text": "Hello! What's your name?" },
        { "speaker": "user", "text": "Hi! My name is [Your Name]. What's yours?" },
        { "speaker": "ai", "text": "I'm Alex. Nice to meet you!" },
        { "speaker": "user", "text": "Nice to meet you too!" }
      ],
      "vocabulary": [
        { "word": "greetings", "definition": "polite words used when meeting someone" },
        { "word": "introduce", "definition": "to tell someone your name" }
      ],
      "practiceQuestions": [
        "How do you greet someone in English?",
        "What do you say when you meet someone for the first time?"
      ]
    },
    {
      "title": "Asking How Someone Is",
      "description": "Learn how to ask and respond to 'How are you?'",
      "dialog": [
        { "speaker": "ai", "text": "Hi! How are you today?" },
        { "speaker": "user", "text": "I'm good, thank you! How about you?" },
        { "speaker": "ai", "text": "I'm doing well, thanks for asking!" }
      ],
      "vocabulary": [
        { "word": "feeling", "definition": "emotion or physical state" },
        { "word": "response", "definition": "an answer or reply" }
      ],
      "practiceQuestions": [
        "What are different ways to say 'I'm fine'?",
        "How do you ask someone about their well-being?"
      ]
    },
    {
      "title": "Talking About Hobbies",
      "description": "Discuss what you like to do in your free time.",
      "dialog": [
        { "speaker": "ai", "text": "What do you like to do for fun?" },
        { "speaker": "user", "text": "I enjoy reading books and playing soccer." },
        { "speaker": "ai", "text": "That sounds interesting! I love playing soccer too." }
      ],
      "vocabulary": [
        { "word": "hobby", "definition": "an activity done for enjoyment" },
        { "word": "interest", "definition": "something you like or enjoy" }
      ],
      "practiceQuestions": [
        "What are some common hobbies in your country?",
        "How do you ask someone about their hobbies?"
      ]
    },
    {
      "title": "Ordering Food at a Restaurant",
      "description": "Practice how to order food in English.",
      "dialog": [
        { "speaker": "ai", "text": "Welcome! What would you like to order?" },
        { "speaker": "user", "text": "I'd like a hamburger and a soda, please." },
        { "speaker": "ai", "text": "Sure! Anything else?" },
        { "speaker": "user", "text": "No, that's all. Thank you!" }
      ],
      "vocabulary": [
        { "word": "menu", "definition": "a list of food options" },
        { "word": "order", "definition": "to request food or drinks" }
      ],
      "practiceQuestions": [
        "How do you ask for the menu in a restaurant?",
        "What polite phrases can you use when ordering?"
      ]
    },
    {
      "title": "Asking for Directions",
      "description": "Learn how to ask where places are.",
      "dialog": [
        { "speaker": "ai", "text": "Excuse me, where is the nearest bank?" },
        { "speaker": "user", "text": "It's two blocks straight ahead, on the left." },
        { "speaker": "ai", "text": "Thank you for your help!" }
      ],
      "vocabulary": [
        { "word": "directions", "definition": "instructions on how to go somewhere" },
        { "word": "location", "definition": "a place or position" }
      ],
      "practiceQuestions": [
        "How do you politely ask for directions?",
        "What words describe location (left, right, straight)?"
      ]
    },
    {
      "title": "Shopping for Clothes",
      "description": "Practice conversations in a clothing store.",
      "dialog": [
        { "speaker": "ai", "text": "Can I help you find anything?" },
        { "speaker": "user", "text": "Yes, I'm looking for a blue shirt." },
        { "speaker": "ai", "text": "We have these in different sizes. Would you like to try one?" }
      ],
      "vocabulary": [
        { "word": "size", "definition": "how big or small something is" },
        { "word": "try on", "definition": "to test if clothes fit" }
      ],
      "practiceQuestions": [
        "How do you ask for a different size?",
        "What phrases can you use when paying for clothes?"
      ]
    },
    {
      "title": "Talking About the Weather",
      "description": "Discuss weather conditions.",
      "dialog": [
        { "speaker": "ai", "text": "It's really hot today, isn't it?" },
        { "speaker": "user", "text": "Yes, I hope it rains soon to cool down." },
        { "speaker": "ai", "text": "Me too! The weather forecast says it might rain tomorrow." }
      ],
      "vocabulary": [
        { "word": "forecast", "definition": "a weather prediction" },
        { "word": "temperature", "definition": "how hot or cold it is" }
      ],
      "practiceQuestions": [
        "How do you describe sunny, rainy, or cold weather?",
        "What do you say when it's very windy?"
      ]
    },
    {
      "title": "At the Doctor's Office",
      "description": "Practice talking about health issues.",
      "dialog": [
        { "speaker": "ai", "text": "What seems to be the problem?" },
        { "speaker": "user", "text": "I have a headache and a sore throat." },
        { "speaker": "ai", "text": "Let me check your temperature first." }
      ],
      "vocabulary": [
        { "word": "symptom", "definition": "a sign of illness" },
        { "word": "prescription", "definition": "medicine given by a doctor" }
      ],
      "practiceQuestions": [
        "How do you describe pain in English?",
        "What do you say when you need medicine?"
      ]
    },
    {
      "title": "Making a Phone Call",
      "description": "Learn how to speak on the phone in English.",
      "dialog": [
        { "speaker": "ai", "text": "Hello, this is Sarah speaking. How can I help you?" },
        { "speaker": "user", "text": "Hi Sarah, I'd like to speak with Mr. Johnson, please." },
        { "speaker": "ai", "text": "One moment, I'll connect you." }
      ],
      "vocabulary": [
        { "word": "caller", "definition": "the person making the phone call" },
        { "word": "message", "definition": "information left for someone" }
      ],
      "practiceQuestions": [
        "How do you answer a phone call politely?",
        "What do you say if the person isn't available?"
      ]
    },
    {
      "title": "Asking for the Time",
      "description": "Practice telling time and asking for it.",
      "dialog": [
        { "speaker": "ai", "text": "Excuse me, do you have the time?" },
        { "speaker": "user", "text": "Yes, it's 3:45 PM." },
        { "speaker": "ai", "text": "Thank you so much!" }
      ],
      "vocabulary": [
        { "word": "clock", "definition": "a device that shows time" },
        { "word": "hour", "definition": "60 minutes" }
      ],
      "practiceQuestions": [
        "How do you say 1:30 in English?",
        "What's the difference between AM and PM?"
      ]
    },
    {
      "title": "Family and Friends",
      "description": "Talk about your family and close friends.",
      "dialog": [
        { "speaker": "ai", "text": "Do you have any brothers or sisters?" },
        { "speaker": "user", "text": "Yes, I have one brother and two sisters." },
        { "speaker": "ai", "text": "That's a big family! Are you the oldest?" }
      ],
      "vocabulary": [
        { "word": "sibling", "definition": "a brother or sister" },
        { "word": "relative", "definition": "a family member" }
      ],
      "practiceQuestions": [
        "How do you describe your family in English?",
        "What words are used for family members (aunt, uncle, cousin)?"
      ]
    },
    {
      "title": "Daily Routine",
      "description": "Discuss your everyday activities.",
      "dialog": [
        { "speaker": "ai", "text": "What time do you wake up in the morning?" },
        { "speaker": "user", "text": "I usually wake up at 7 AM." },
        { "speaker": "ai", "text": "Do you have breakfast right away?" }
      ],
      "vocabulary": [
        { "word": "routine", "definition": "regular daily activities" },
        { "word": "habit", "definition": "something you do often" }
      ],
      "practiceQuestions": [
        "How do you describe your morning routine?",
        "What verbs are common in daily routines (eat, work, sleep)?"
      ]
    },
    {
      "title": "Favorite Foods",
      "description": "Talk about foods you like or dislike.",
      "dialog": [
        { "speaker": "ai", "text": "What's your favorite food?" },
        { "speaker": "user", "text": "I love pizza! How about you?" },
        { "speaker": "ai", "text": "I like pasta, especially with cheese." }
      ],
      "vocabulary": [
        { "word": "cuisine", "definition": "a style of cooking" },
        { "word": "dish", "definition": "a prepared food item" }
      ],
      "practiceQuestions": [
        "How do you describe food tastes (sweet, spicy, salty)?",
        "What foods are popular in your country?"
      ]
    },
    {
      "title": "Travel Plans",
      "description": "Discuss future trips or vacations.",
      "dialog": [
        { "speaker": "ai", "text": "Are you planning any trips soon?" },
        { "speaker": "user", "text": "Yes, I want to visit Paris next year." },
        { "speaker": "ai", "text": "That sounds amazing! How long will you stay?" }
      ],
      "vocabulary": [
        { "word": "destination", "definition": "a place to travel to" },
        { "word": "itinerary", "definition": "travel plan" }
      ],
      "practiceQuestions": [
        "How do you ask someone about their travel plans?",
        "What words are related to traveling (airport, ticket, hotel)?"
      ]
    },
    {
      "title": "At the Supermarket",
      "description": "Practice shopping for groceries.",
      "dialog": [
        { "speaker": "ai", "text": "Can I help you find anything?" },
        { "speaker": "user", "text": "Where can I find the milk?" },
        { "speaker": "ai", "text": "It's in aisle 3, near the yogurt." }
      ],
      "vocabulary": [
        { "word": "aisle", "definition": "a row in a store" },
        { "word": "checkout", "definition": "place to pay for items" }
      ],
      "practiceQuestions": [
        "How do you ask for help in a supermarket?",
        "What phrases are useful when paying for groceries?"
      ]
    },
    {
      "title": "Describing People",
      "description": "Learn how to describe someone's appearance.",
      "dialog": [
        { "speaker": "ai", "text": "What does your best friend look like?" },
        { "speaker": "user", "text": "He's tall with short black hair and glasses." },
        { "speaker": "ai", "text": "Does he wear casual or formal clothes?" }
      ],
      "vocabulary": [
        { "word": "appearance", "definition": "how someone looks" },
        { "word": "feature", "definition": "a part of the face (eyes, nose)" }
      ],
      "practiceQuestions": [
        "How do you describe hair color and length?",
        "What adjectives describe height and build?"
      ]
    },
    {
      "title": "At the Hotel",
      "description": "Practice checking into a hotel.",
      "dialog": [
        { "speaker": "ai", "text": "Hello, do you have a reservation?" },
        { "speaker": "user", "text": "Yes, under the name Smith." },
        { "speaker": "ai", "text": "Great! Here's your key. Your room is on the 5th floor." }
      ],
      "vocabulary": [
        { "word": "reservation", "definition": "booking in advance" },
        { "word": "reception", "definition": "hotel front desk" }
      ],
      "practiceQuestions": [
        "How do you ask for a room in a hotel?",
        "What questions might the receptionist ask?"
      ]
    },
    {
      "title": "Talking About Jobs",
      "description": "Discuss occupations and workplaces.",
      "dialog": [
        { "speaker": "ai", "text": "What do you do for work?" },
        { "speaker": "user", "text": "I'm a teacher. What about you?" },
        { "speaker": "ai", "text": "I work in an office as a manager." }
      ],
      "vocabulary": [
        { "word": "occupation", "definition": "a person's job" },
        { "word": "workplace", "definition": "where someone works" }
      ],
      "practiceQuestions": [
        "How do you describe your job in English?",
        "What are common jobs in your country?"
      ]
    },
    {
      "title": "Making Plans",
      "description": "Practice arranging to meet someone.",
      "dialog": [
        { "speaker": "ai", "text": "Would you like to meet for coffee this weekend?" },
        { "speaker": "user", "text": "Sure! How about Saturday at 2 PM?" },
        { "speaker": "ai", "text": "Perfect! See you then." }
      ],
      "vocabulary": [
        { "word": "arrangement", "definition": "a planned meeting" },
        { "word": "schedule", "definition": "a plan of activities" }
      ],
      "practiceQuestions": [
        "How do you suggest a time and place to meet?",
        "What phrases can you use to accept or decline an invitation?"
      ]
    },
    {
      "title": "Giving Directions",
      "description": "Practice explaining how to get somewhere.",
      "dialog": [
        { "speaker": "ai", "text": "How do I get to the train station from here?" },
        { "speaker": "user", "text": "Go straight, then turn left at the traffic light." },
        { "speaker": "ai", "text": "Thank you! Is it far?" }
      ],
      "vocabulary": [
        { "word": "landmark", "definition": "an easily recognizable place" },
        { "word": "intersection", "definition": "where two roads meet" }
      ],
      "practiceQuestions": [
        "How do you give simple directions in English?",
        "What words describe movement (walk, turn, cross)?"
      ]
    }
  ],
  Intermediate: [
    // ... existing Intermediate scenarios ...
  ],
  Advanced: [
    // ... existing Advanced scenarios ...
  ]
}; 