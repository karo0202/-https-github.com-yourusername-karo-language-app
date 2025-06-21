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
    }
  ],
  Intermediate: [
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
    }
  ],
  Advanced: [
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
    }
  ]
}; 