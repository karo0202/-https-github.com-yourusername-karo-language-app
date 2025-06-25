export interface DialogLine {
  speaker: 'ai' | 'user';
  text: string;
  responses?: string[];
}

export interface Scenario {
  title: string;
  description: string;
  dialog: DialogLine[];
}

export interface ConversationData {
  Beginner: Scenario[];
  Intermediate: Scenario[];
  Advanced: Scenario[];
}

export const conversationData: ConversationData = {
  Beginner: [
    // 1
    {
      title: "Ordering a Coffee",
      description: "Practice ordering a drink at a coffee shop.",
      dialog: [
        { speaker: 'ai', text: "Hello! What can I get for you today?", responses: ["I'd like a coffee, please.", "Just water for me.", "What do you recommend?"] },
        { speaker: 'user', text: "I'd like a coffee, please." },
        { speaker: 'ai', text: "Great. What size would you like?", responses: ["Small.", "Medium.", "Large."] },
        { speaker: 'user',text: "Medium." },
        { speaker: 'ai', text: "Anything else for you?" , responses: ["No, that's all.", "Yes, a cookie please."]},
        { speaker: 'user',text: "No, that's all." },
        { speaker: 'ai', text: "Okay, that will be $3.50." }
      ]
    },
    // 2
    {
      title: "Introducing Yourself",
      description: "Practice basic greetings and introductions.",
      dialog: [
        { speaker: 'ai', text: "Hi! What's your name?", responses: ["My name is Alex.", "I'm Maria."] },
        { speaker: 'user', text: "My name is Alex." },
        { speaker: 'ai', text: "Nice to meet you, Alex! Where are you from?", responses: ["I'm from Spain.", "I'm from the US."] },
        { speaker: 'user', text: "I'm from Spain." },
        { speaker: 'ai', text: "Welcome! How long have you been learning English?", responses: ["For six months.", "Just started."] },
        { speaker: 'user', text: "For six months." },
        { speaker: 'ai', text: "That's great! Keep practicing." }
      ]
    },
    // 3
    {
      title: "Shopping for Clothes",
      description: "Practice buying clothes at a store.",
      dialog: [
        { speaker: 'ai', text: "Can I help you find something?", responses: ["Yes, I'm looking for a shirt.", "No, just looking, thanks."] },
        { speaker: 'user', text: "Yes, I'm looking for a shirt." },
        { speaker: 'ai', text: "What size do you need?", responses: ["Medium.", "Large."] },
        { speaker: 'user', text: "Medium." },
        { speaker: 'ai', text: "Here you go. Would you like to try it on?", responses: ["Yes, please.", "No, thank you."] },
        { speaker: 'user', text: "Yes, please." },
        { speaker: 'ai', text: "The fitting room is over there." }
      ]
    },
    // 4
    {
      title: "At the Supermarket",
      description: "Practice asking for help at a supermarket.",
      dialog: [
        { speaker: 'ai', text: "Can I help you find something?", responses: ["Where is the bread?", "No, thank you."] },
        { speaker: 'user', text: "Where is the bread?" },
        { speaker: 'ai', text: "It's in aisle three.", responses: ["Thank you!", "Is it fresh?"] },
        { speaker: 'user', text: "Thank you!" },
        { speaker: 'ai', text: "You're welcome!" }
      ]
    },
    // 5
    {
      title: "Taking a Taxi",
      description: "Practice telling a taxi driver your destination.",
      dialog: [
        { speaker: 'ai', text: "Where to?", responses: ["To the airport, please.", "Downtown, please."] },
        { speaker: 'user', text: "To the airport, please." },
        { speaker: 'ai', text: "No problem. Do you have a flight soon?", responses: ["Yes, in two hours.", "No, just picking someone up."] },
        { speaker: 'user', text: "Yes, in two hours." },
        { speaker: 'ai', text: "I'll get you there as fast as I can!" }
      ]
    },
    // 6
    {
      title: "At the Library",
      description: "Practice asking for help finding a book.",
      dialog: [
        { speaker: 'ai', text: "Can I help you find something?", responses: ["Yes, I'm looking for a book.", "No, just browsing."] },
        { speaker: 'user', text: "Yes, I'm looking for a book." },
        { speaker: 'ai', text: "What is the title?", responses: ["Harry Potter.", "The Great Gatsby."] },
        { speaker: 'user', text: "Harry Potter." },
        { speaker: 'ai', text: "It's in the fiction section, aisle four." }
      ]
    },
    // 7
    {
      title: "Making a Reservation",
      description: "Practice reserving a table at a restaurant.",
      dialog: [
        { speaker: 'ai', text: "Hello, how can I help you?", responses: ["I'd like to make a reservation.", "Do you have any tables for two?"] },
        { speaker: 'user', text: "I'd like to make a reservation." },
        { speaker: 'ai', text: "For how many people?", responses: ["Two.", "Four."] },
        { speaker: 'user', text: "Two." },
        { speaker: 'ai', text: "What time would you like?", responses: ["7 PM.", "8 PM."] },
        { speaker: 'user', text: "7 PM." },
        { speaker: 'ai', text: "You're all set for 7 PM." }
      ]
    },
    // 8
    {
      title: "At the Pharmacy",
      description: "Practice asking for medicine at a pharmacy.",
      dialog: [
        { speaker: 'ai', text: "How can I help you today?", responses: ["I need something for a headache.", "Do you have vitamins?"] },
        { speaker: 'user', text: "I need something for a headache." },
        { speaker: 'ai', text: "We have several options. Would you like tablets or syrup?", responses: ["Tablets.", "Syrup."] },
        { speaker: 'user', text: "Tablets." },
        { speaker: 'ai', text: "Here you go. Take one every six hours." }
      ]
    },
    // 9
    {
      title: "At the Bank",
      description: "Practice basic banking tasks.",
      dialog: [
        { speaker: 'ai', text: "How can I assist you today?", responses: ["I'd like to open an account.", "I want to withdraw money."] },
        { speaker: 'user', text: "I'd like to open an account." },
        { speaker: 'ai', text: "Do you have identification with you?", responses: ["Yes, I do.", "No, I forgot it."] },
        { speaker: 'user', text: "Yes, I do." },
        { speaker: 'ai', text: "Great, please fill out this form." }
      ]
    },
    // 10
    {
      title: "At the Bus Stop",
      description: "Practice asking about bus routes and times.",
      dialog: [
        { speaker: 'ai', text: "Which bus are you waiting for?", responses: ["The number 10.", "I'm not sure."] },
        { speaker: 'user', text: "The number 10." },
        { speaker: 'ai', text: "It should arrive in 5 minutes.", responses: ["Thank you!", "Is it usually on time?"] },
        { speaker: 'user', text: "Thank you!" },
        { speaker: 'ai', text: "You're welcome!" }
      ]
    },
    // Placeholders for 11-50
    ...Array.from({length: 40}, (_, i) => ({
      title: `Beginner Scenario ${i+11}`,
      description: `Placeholder scenario for beginner level, number ${i+11}.`,
      dialog: [
        { speaker: 'ai' as const, text: "This is a placeholder conversation. Ready to practice?", responses: ["Yes!", "Maybe later."] },
        { speaker: 'user' as const, text: "Yes!" },
        { speaker: 'ai' as const, text: "Great! Let's continue practicing." }
      ]
    }))
  ],
  Intermediate: [
    // 1
    {
      title: "Asking for Directions",
      description: "Practice asking for and understanding directions.",
      dialog: [
        { speaker: 'ai', text: "Excuse me, are you from around here?", responses: ["Yes, I am. How can I help?", "Sorry, I'm not from here either."] },
        { speaker: 'user', text: "Yes, I am. How can I help?" },
        { speaker: 'ai', text: "I'm looking for the nearest train station. Could you point me in the right direction?", responses: ["Of course. It's just down this street.", "I'm not sure, let me check my map."] },
        { speaker: 'user', text: "Of course. It's just down this street." },
        { speaker: 'ai', text: "Is it far from here?", responses: ["Not at all, it's about a five-minute walk.", "It's a bit of a walk, maybe 15 minutes."] },
        { speaker: 'user', text: "Not at all, it's about a five-minute walk." },
        { speaker: 'ai', text: "Thank you so much for your help!" }
      ]
    },
    // 2
    {
      title: "Making a Doctor's Appointment",
      description: "Practice scheduling a doctor's visit over the phone.",
      dialog: [
        { speaker: 'ai', text: "Good morning, how can I help you?", responses: ["I'd like to make an appointment.", "Is Dr. Smith available?"] },
        { speaker: 'user', text: "I'd like to make an appointment." },
        { speaker: 'ai', text: "What day works best for you?", responses: ["Friday.", "Monday."] },
        { speaker: 'user', text: "Friday." },
        { speaker: 'ai', text: "We have an opening at 10am. Does that work?", responses: ["Yes, that's perfect.", "Do you have anything later?"] },
        { speaker: 'user', text: "Yes, that's perfect." },
        { speaker: 'ai', text: "You're all set for Friday at 10am." }
      ]
    },
    // 3
    {
      title: "Booking a Hotel Room",
      description: "Practice reserving a hotel room.",
      dialog: [
        { speaker: 'ai', text: "Welcome! Do you have a reservation?", responses: ["No, I'd like to book a room.", "Yes, under the name Lee."] },
        { speaker: 'user', text: "No, I'd like to book a room." },
        { speaker: 'ai', text: "What kind of room would you like?", responses: ["Single.", "Double."] },
        { speaker: 'user', text: "Single." },
        { speaker: 'ai', text: "How many nights will you be staying?", responses: ["Two nights.", "Just one night."] },
        { speaker: 'user', text: "Two nights." },
        { speaker: 'ai', text: "Your room is ready!" }
      ]
    },
    // 4
    {
      title: "At the Post Office",
      description: "Practice mailing a package.",
      dialog: [
        { speaker: 'ai', text: "How can I help you today?", responses: ["I'd like to mail this package.", "I need some stamps."] },
        { speaker: 'user', text: "I'd like to mail this package." },
        { speaker: 'ai', text: "Domestic or international?", responses: ["Domestic.", "International."] },
        { speaker: 'user', text: "Domestic." },
        { speaker: 'ai', text: "Please place it on the scale." }
      ]
    },
    // 5
    {
      title: "Ordering Food Delivery",
      description: "Practice ordering food over the phone.",
      dialog: [
        { speaker: 'ai', text: "Hello, what would you like to order?", responses: ["A large pizza, please.", "Do you have vegetarian options?"] },
        { speaker: 'user', text: "A large pizza, please." },
        { speaker: 'ai', text: "What toppings would you like?", responses: ["Pepperoni.", "Vegetables."] },
        { speaker: 'user', text: "Vegetables." },
        { speaker: 'ai', text: "Your order will arrive in 30 minutes." }
      ]
    },
    // 6
    {
      title: "Returning an Item",
      description: "Practice returning a purchase at a store.",
      dialog: [
        { speaker: 'ai', text: "How can I help you?", responses: ["I'd like to return this item.", "Do you accept returns?"] },
        { speaker: 'user', text: "I'd like to return this item." },
        { speaker: 'ai', text: "Do you have the receipt?", responses: ["Yes, here it is.", "No, I lost it."] },
        { speaker: 'user', text: "Yes, here it is." },
        { speaker: 'ai', text: "Thank you. I'll process your return." }
      ]
    },
    // 7
    {
      title: "At the Airport",
      description: "Practice checking in for a flight.",
      dialog: [
        { speaker: 'ai', text: "May I see your passport, please?", responses: ["Here you go.", "I can't find it."] },
        { speaker: 'user', text: "Here you go." },
        { speaker: 'ai', text: "Do you have any bags to check?", responses: ["Yes, one bag.", "No, just carry-on."] },
        { speaker: 'user', text: "Yes, one bag." },
        { speaker: 'ai', text: "Your gate is B12. Have a nice flight!" }
      ]
    },
    // 8
    {
      title: "At the Dentist",
      description: "Practice making a dental appointment.",
      dialog: [
        { speaker: 'ai', text: "How can I help you?", responses: ["I need to see a dentist.", "Do you have any openings today?"] },
        { speaker: 'user', text: "I need to see a dentist." },
        { speaker: 'ai', text: "What seems to be the problem?", responses: ["I have a toothache.", "I need a cleaning."] },
        { speaker: 'user', text: "I have a toothache." },
        { speaker: 'ai', text: "We can see you at 3 PM." }
      ]
    },
    // 9
    {
      title: "At the Gym",
      description: "Practice signing up for a gym membership.",
      dialog: [
        { speaker: 'ai', text: "Are you interested in a membership?", responses: ["Yes, I am.", "Just looking around."] },
        { speaker: 'user', text: "Yes, I am." },
        { speaker: 'ai', text: "Would you like a tour?", responses: ["Yes, please.", "No, thank you."] },
        { speaker: 'user', text: "Yes, please." },
        { speaker: 'ai', text: "Follow me, I'll show you around." }
      ]
    },
    // 10
    {
      title: "At the Cinema",
      description: "Practice buying movie tickets.",
      dialog: [
        { speaker: 'ai', text: "What movie would you like to see?", responses: ["The new action movie.", "A comedy, please."] },
        { speaker: 'user', text: "The new action movie." },
        { speaker: 'ai', text: "How many tickets?", responses: ["Two.", "Just one."] },
        { speaker: 'user', text: "Two." },
        { speaker: 'ai', text: "Here are your tickets. Enjoy the movie!" }
      ]
    },
    // Placeholders for 11-50
    ...Array.from({length: 40}, (_, i) => ({
      title: `Intermediate Scenario ${i+11}`,
      description: `Placeholder scenario for intermediate level, number ${i+11}.`,
      dialog: [
        { speaker: 'ai' as const, text: "This is a placeholder conversation. Ready to practice?", responses: ["Yes!", "Maybe later."] },
        { speaker: 'user' as const, text: "Yes!" },
        { speaker: 'ai' as const, text: "Great! Let's continue practicing." }
      ]
    }))
  ],
  Advanced: [
    // 1
    {
      title: "Job Interview",
      description: "Practice answering common job interview questions.",
      dialog: [
        { speaker: 'ai', text: "Thank you for coming in today. To start, could you tell me a little bit about yourself?", responses: ["Certainly. I have over five years of experience in...", "I recently graduated with a degree in..."] },
        { speaker: 'user', text: "Certainly. I have over five years of experience in..." },
        { speaker: 'ai', text: "That's impressive. What would you say is your greatest strength?", responses: ["My greatest strength is my ability to problem-solve.", "I'm very detail-oriented and organized."] },
        { speaker: 'user', text: "My greatest strength is my ability to problem-solve." },
        { speaker: 'ai', text: "Could you provide an example of a time you used that skill?", responses: ["Of course, in my previous role...", "Yes, there was a situation where..."] },
        { speaker: 'user', text: "Of course, in my previous role..." },
        { speaker: 'ai', text: "That's a great example. Do you have any questions for me?" }
      ]
    },
    // 2
    {
      title: "Debating a Social Issue",
      description: "Practice discussing and debating a current event.",
      dialog: [
        { speaker: 'ai', text: "What is your opinion on climate change?", responses: ["I think it's a serious problem.", "I'm not sure, I need to learn more."] },
        { speaker: 'user', text: "I think it's a serious problem." },
        { speaker: 'ai', text: "What actions do you think individuals can take?", responses: ["Reduce energy use.", "Recycle more."] },
        { speaker: 'user', text: "Reduce energy use." },
        { speaker: 'ai', text: "That's a good point. Thank you for sharing your thoughts." }
      ]
    },
    // 3
    {
      title: "Negotiating a Contract",
      description: "Practice negotiating terms in a business setting.",
      dialog: [
        { speaker: 'ai', text: "Let's discuss the terms of our agreement. What is most important to you?", responses: ["The delivery timeline.", "The price."] },
        { speaker: 'user', text: "The delivery timeline." },
        { speaker: 'ai', text: "We can deliver in two weeks. Does that work?", responses: ["Yes, that's fine.", "Can it be sooner?"] },
        { speaker: 'user', text: "Yes, that's fine." },
        { speaker: 'ai', text: "Great, let's finalize the contract." }
      ]
    },
    // 4
    {
      title: "Presenting a Project",
      description: "Practice presenting a project to colleagues.",
      dialog: [
        { speaker: 'ai', text: "Can you give us an overview of your project?", responses: ["Certainly. Our project focuses on...", "Yes, I'd be happy to."] },
        { speaker: 'user', text: "Certainly. Our project focuses on..." },
        { speaker: 'ai', text: "What challenges did you face?", responses: ["Time management.", "Technical issues."] },
        { speaker: 'user', text: "Time management." },
        { speaker: 'ai', text: "How did you overcome them?", responses: ["By prioritizing tasks.", "By asking for help."] },
        { speaker: 'user', text: "By prioritizing tasks." },
        { speaker: 'ai', text: "Thank you for your presentation." }
      ]
    },
    // 5
    {
      title: "Handling a Customer Complaint",
      description: "Practice resolving a complaint in a professional manner.",
      dialog: [
        { speaker: 'ai', text: "I'm not happy with this product.", responses: ["I'm sorry to hear that. What seems to be the problem?", "Can you tell me more about the issue?"] },
        { speaker: 'user', text: "I'm sorry to hear that. What seems to be the problem?" },
        { speaker: 'ai', text: "It stopped working after a week.", responses: ["Let me see what I can do.", "Would you like a replacement?"] },
        { speaker: 'user', text: "Let me see what I can do." },
        { speaker: 'ai', text: "Thank you for your help." }
      ]
    },
    // 6
    {
      title: "Business Meeting",
      description: "Practice participating in a business meeting.",
      dialog: [
        { speaker: 'ai', text: "Let's start the meeting. Do you have the agenda?", responses: ["Yes, here it is.", "No, I don't."] },
        { speaker: 'user', text: "Yes, here it is." },
        { speaker: 'ai', text: "Thank you. Let's review the first item.", responses: ["Sure.", "Can we skip to the second item?"] },
        { speaker: 'user', text: "Sure." },
        { speaker: 'ai', text: "Any questions before we move on?" }
      ]
    },
    // 7
    {
      title: "Giving a Tour",
      description: "Practice giving a tour of your workplace.",
      dialog: [
        { speaker: 'ai', text: "Welcome! Would you like a tour of our office?", responses: ["Yes, please.", "Maybe later."] },
        { speaker: 'user', text: "Yes, please." },
        { speaker: 'ai', text: "This is our main workspace.", responses: ["It's very nice.", "How many people work here?"] },
        { speaker: 'user', text: "It's very nice." },
        { speaker: 'ai', text: "Thank you! Let me show you the conference room." }
      ]
    },
    // 8
    {
      title: "Discussing a News Article",
      description: "Practice discussing current events.",
      dialog: [
        { speaker: 'ai', text: "Did you read the news today?", responses: ["Yes, I did.", "No, what happened?"] },
        { speaker: 'user', text: "Yes, I did." },
        { speaker: 'ai', text: "What did you think about the main story?", responses: ["It was surprising.", "I expected it."] },
        { speaker: 'user', text: "It was surprising." },
        { speaker: 'ai', text: "I agree, it was unexpected." }
      ]
    },
    // 9
    {
      title: "Handling a Difficult Customer",
      description: "Practice resolving a challenging customer service situation.",
      dialog: [
        { speaker: 'ai', text: "I'm very upset about my order.", responses: ["I'm sorry to hear that. What happened?", "Can you tell me more?"] },
        { speaker: 'user', text: "I'm sorry to hear that. What happened?" },
        { speaker: 'ai', text: "It arrived late and was damaged.", responses: ["I'll look into it right away.", "Would you like a refund?"] },
        { speaker: 'user', text: "I'll look into it right away." },
        { speaker: 'ai', text: "Thank you for your help." }
      ]
    },
    // 10
    {
      title: "Academic Advising Session",
      description: "Practice discussing academic plans with an advisor.",
      dialog: [
        { speaker: 'ai', text: "What are your academic goals?", responses: ["I want to improve my grades.", "I'm planning to study abroad."] },
        { speaker: 'user', text: "I want to improve my grades." },
        { speaker: 'ai', text: "What subjects do you find most challenging?", responses: ["Math.", "Science."] },
        { speaker: 'user', text: "Math." },
        { speaker: 'ai', text: "Let's make a plan to help you succeed." }
      ]
    },
    // Placeholders for 11-50
    ...Array.from({length: 40}, (_, i) => ({
      title: `Advanced Scenario ${i+11}`,
      description: `Placeholder scenario for advanced level, number ${i+11}.`,
      dialog: [
        { speaker: 'ai' as const, text: "This is a placeholder conversation. Ready to practice?", responses: ["Yes!", "Maybe later."] },
        { speaker: 'user' as const, text: "Yes!" },
        { speaker: 'ai' as const, text: "Great! Let's continue practicing." }
      ]
    }))
  ]
}; 