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
      title: "Ordering at a Café",
      description: "Practice ordering a drink and food at a café.",
      dialog: [
        { speaker: 'user', text: "Hi there! I'd like a cup of coffee, please." },
        { speaker: 'ai', text: "Sure! What size would you like — small, medium, or large?" },
        { speaker: 'user', text: "Medium, please. Can I also get it with almond milk?" },
        { speaker: 'ai', text: "Yes, we have almond milk. Would you like sugar?" },
        { speaker: 'user', text: "Just one spoon of sugar, please." },
        { speaker: 'ai', text: "Got it. Would you like anything to eat with that?" },
        { speaker: 'user', text: "Hmm... What pastries do you have?" },
        { speaker: 'ai', text: "We have muffins, croissants, and banana bread." },
        { speaker: 'user', text: "I'll take a blueberry muffin." },
        { speaker: 'ai', text: "Great choice. Would you like it warmed up?" },
        { speaker: 'user', text: "Yes, that would be nice." },
        { speaker: 'ai', text: "Alright, that's one medium coffee with almond milk and sugar, and one warm blueberry muffin. That'll be 5.25." },
        { speaker: 'user', text: "Here's 6. Keep the change." },
        { speaker: 'ai', text: "Thanks! Your order will be ready in just a minute." },
        { speaker: 'user', text: "Perfect. Thanks so much!" }
      ],
      vocabulary: [
        { word: "almond milk", definition: "milk made from almonds" },
        { word: "pastries", definition: "baked goods like muffins or croissants" },
        { word: "spoon (of sugar)", definition: "a small amount, measured with a spoon" },
        { word: "warmed up", definition: "made hot again" },
        { word: "keep the change", definition: "don't return the extra money" }
      ],
      practiceQuestions: [
        "What kind of milk did Anna want?",
        "What pastry did she order?",
        "How much did the total cost?",
        "What does 'keep the change' mean?",
        "What kind of customer service phrases did Tom use?"
      ]
    },
    {
      title: "Asking for Directions",
      description: "Practice asking for and giving directions.",
      dialog: [
        { speaker: 'user', text: "Excuse me, could you help me?" },
        { speaker: 'ai', text: "Of course! What are you looking for?" },
        { speaker: 'user', text: "I'm trying to find the main library. Is it far from here?" },
        { speaker: 'ai', text: "Not at all. It's just a few blocks away." },
        { speaker: 'user', text: "Oh, good. Can you tell me how to get there?" },
        { speaker: 'ai', text: "Sure. Go straight down this street until you see a big park on your left." },
        { speaker: 'user', text: "A park, got it." },
        { speaker: 'ai', text: "Then, turn right at the traffic light after the park. The library will be on your left." },
        { speaker: 'user', text: "So, straight, then right after the park. Is there a specific landmark I should look for?" },
        { speaker: 'ai', text: "Yes, there's a large statue of a horse right in front of the library entrance." },
        { speaker: 'user', text: "A horse statue. Perfect! Thank you so much for your help." },
        { speaker: 'ai', text: "You're welcome! Have a good day." },
        { speaker: 'user', text: "You too!" }
      ],
      vocabulary: [
        { word: "far from here", definition: "a long distance away" },
        { word: "a few blocks away", definition: "a short distance, usually referring to city blocks" },
        { word: "traffic light", definition: "a signal that controls traffic" },
        { word: "landmark", definition: "an easily recognizable feature of a landscape or town" },
        { word: "entrance", definition: "a door or gate by which you can enter a place" }
      ],
      practiceQuestions: [
        "What is David looking for?",
        "How far is the library from their current location?",
        "What should David do after seeing the park?",
        "What landmark is in front of the library?",
        "What does Sarah say to end the conversation?"
      ]
    },
    {
      title: "Buying Groceries",
      description: "Practice asking for and finding items in a grocery store.",
      dialog: [
        { speaker: 'user', text: "Hello! Where can I find fresh vegetables?" },
        { speaker: 'ai', text: "Good morning! The fresh produce section is right over there, to your left." },
        { speaker: 'user', text: "Thank you. Do you have organic carrots?" },
        { speaker: 'ai', text: "Yes, we do. They are on the top shelf, next to the regular carrots." },
        { speaker: 'user', text: "Great! And what about milk? Is it near the back?" },
        { speaker: 'ai', text: "The dairy section is indeed at the very back of the store, on the right side." },
        { speaker: 'user', text: "Perfect. I also need some bread. Do you have any fresh-baked?" },
        { speaker: 'ai', text: "Our bakery is just past the dairy section, on your left. We bake fresh bread every morning." },
        { speaker: 'user', text: "Wonderful! I'll go check that out. Do you have self-checkout lanes?" },
        { speaker: 'ai', text: "Yes, we have several self-checkout machines near the front entrance, on your right." },
        { speaker: 'user', text: "Excellent! This store is very well organized. Thanks for your help." },
        { speaker: 'ai', text: "You're most welcome! Let me know if you need anything else." },
        { speaker: 'user', text: "I will. Have a good day!" }
      ],
      vocabulary: [
        { word: "fresh produce", definition: "fruits and vegetables that are newly picked" },
        { word: "organic", definition: "grown without artificial chemicals" },
        { word: "dairy section", definition: "the part of a store where milk, cheese, and yogurt are sold" },
        { word: "fresh-baked", definition: "recently cooked in an oven" },
        { word: "self-checkout", definition: "a system where customers scan and pay for their own items" }
      ],
      practiceQuestions: [
        "Where can Maria find fresh vegetables?",
        "Are the organic carrots on the top or bottom shelf?",
        "Where is the dairy section located?",
        "What kind of bread does the store offer?",
        "What does Maria say about the store's organization?"
      ]
    },
    {
      title: "Making a Phone Call",
      description: "Practice making a formal phone call to an office.",
      dialog: [
        { speaker: 'user', text: "Good morning. I'd like to speak with Mr. Davis, please." },
        { speaker: 'ai', text: "Good morning. May I ask who's calling?" },
        { speaker: 'user', text: "My name is John Smith. I have an appointment with him today." },
        { speaker: 'ai', text: "One moment, please, Mr. Smith. I'll connect you." },
        { speaker: 'user', text: "Thank you. I hope I'm not calling too early." },
        { speaker: 'ai', text: "Not at all. He's just arrived. Please hold." },
        { speaker: 'user', text: "(after a short pause) Hello? Is Mr. Davis there?" },
        { speaker: 'ai', text: "I'm sorry, Mr. Smith. It seems he's stepped away from his desk for a moment. Would you like to leave a message?" },
        { speaker: 'user', text: "Oh, that's alright. Could you please tell him John Smith called and that I'll be there for our 10 AM meeting?" },
        { speaker: 'ai', text: "Certainly. I'll make sure he gets the message. Is there anything else?" },
        { speaker: 'user', text: "No, that's all. Thank you for your help." },
        { speaker: 'ai', text: "You're welcome. Goodbye." },
        { speaker: 'user', text: "Goodbye." }
      ],
      vocabulary: [
        { word: "connect you", definition: "to put you in touch by phone" },
        { word: "hold", definition: "to wait on the phone" },
        { word: "stepped away", definition: "left for a short time" },
        { word: "leave a message", definition: "to give information for someone who is not available" },
        { word: "certainly", definition: "definitely, without a doubt" }
      ],
      practiceQuestions: [
        "Who is John trying to speak with?",
        "What is John's name?",
        "Why does Mr. Davis not answer the phone?",
        "What message does John leave?",
        "What time is John's meeting?"
      ]
    },
    {
      title: "At the Doctor's Office",
      description: "Practice checking in and describing symptoms at a doctor's office.",
      dialog: [
        { speaker: 'user', text: "Good morning. I have an appointment with Dr. Lee at 10:30." },
        { speaker: 'ai', text: "Good morning, Emily. Please sign in here. Have you been here before?" },
        { speaker: 'user', text: "Yes, I have. My last visit was about six months ago." },
        { speaker: 'ai', text: "Alright. And what brings you in today?" },
        { speaker: 'user', text: "I haven't been feeling well. I have a sore throat and a cough." },
        { speaker: 'ai', text: "I see. Have you had a fever?" },
        { speaker: 'user', text: "A low-grade one, yes. It started yesterday evening." },
        { speaker: 'ai', text: "Okay. Please take a seat in the waiting area. Dr. Lee will be with you shortly." },
        { speaker: 'user', text: "Thank you. How long do you think the wait will be?" },
        { speaker: 'ai', text: "It shouldn't be too long, maybe 10 or 15 minutes. The doctor is just finishing up with another patient." },
        { speaker: 'user', text: "Alright. I appreciate it." },
        { speaker: 'ai', text: "No problem. We'll call your name when it's your turn." },
        { speaker: 'user', text: "Sounds good. Thank you." }
      ],
      vocabulary: [
        { word: "sign in", definition: "to write your name on a list to show you have arrived" },
        { word: "brings you in", definition: "the reason for your visit" },
        { word: "sore throat", definition: "pain in the throat" },
        { word: "low-grade fever", definition: "a slight fever, not very high" },
        { word: "waiting area", definition: "a room where people wait" }
      ],
      practiceQuestions: [
        "What time is Emily's appointment?",
        "What are Emily's symptoms?",
        "Has Emily had a fever?",
        "How long does the nurse expect Emily to wait?",
        "What does the nurse say to indicate when Emily will be seen?"
      ]
    },
    {
      title: "At the Bank",
      description: "Practice making a deposit and asking about account services at a bank.",
      dialog: [
        { speaker: 'user', text: "Good afternoon. I'd like to deposit some money, please." },
        { speaker: 'ai', text: "Good afternoon. Do you have your account number or debit card with you?" },
        { speaker: 'user', text: "Yes, here's my debit card. I want to deposit $200 into my checking account." },
        { speaker: 'ai', text: "Alright. Can you please confirm your name and the last four digits of your account number?" },
        { speaker: 'user', text: "Robert Johnson, and the last four are 1234." },
        { speaker: 'ai', text: "Thank you, Mr. Johnson. And how would you like to deposit this? Cash or check?" },
        { speaker: 'user', text: "It's cash. Two one-hundred dollar bills." },
        { speaker: 'ai', text: "Okay. I'm processing that now. Just a moment." },
        { speaker: 'user', text: "No problem. Is there a way to check my balance at the ATM outside?" },
        { speaker: 'ai', text: "Yes, you can check your balance and withdraw cash at any of our ATMs. Your deposit will show up in your account very soon." },
        { speaker: 'user', text: "Great. Thank you." },
        { speaker: 'ai', text: "Your deposit is complete, Mr. Johnson. Here's your receipt. Is there anything else I can help you with today?" },
        { speaker: 'user', text: "No, that's all. Have a good day." },
        { speaker: 'ai', text: "You too." }
      ],
      vocabulary: [
        { word: "deposit", definition: "to put money into a bank account" },
        { word: "debit card", definition: "a card used to withdraw money or make purchases directly from a bank account" },
        { word: "checking account", definition: "a bank account that allows easy access to funds for daily transactions" },
        { word: "cash", definition: "money in the form of bills or coins" },
        { word: "receipt", definition: "a piece of paper that shows you have paid for something" }
      ],
      practiceQuestions: [
        "What does Robert want to do at the bank?",
        "How much money is Robert depositing?",
        "What form of money is he depositing?",
        "How can Robert check his balance?",
        "What does the teller give Robert at the end of the transaction?"
      ]
    },
    {
      title: "Ordering Food at a Restaurant",
      description: "Practice ordering a meal and asking about menu items at a restaurant.",
      dialog: [
        { speaker: 'user', text: "Hello! Can I see the menu, please?" },
        { speaker: 'ai', text: "Of course, here you go. Are you ready to order, or do you need a few more minutes?" },
        { speaker: 'user', text: "I think I'm ready. I'll have the grilled chicken with mashed potatoes." },
        { speaker: 'ai', text: "Excellent choice. Would you like a soup or a salad to start?" },
        { speaker: 'user', text: "I'll take the garden salad, please." },
        { speaker: 'ai', text: "And for your drink?" },
        { speaker: 'user', text: "Just water, please. Still water is fine." },
        { speaker: 'ai', text: "Alright. So, that's grilled chicken, mashed potatoes, a garden salad, and still water. Anything else?" },
        { speaker: 'user', text: "No, that's all for now. Thank you." },
        { speaker: 'ai', text: "Your food will be out shortly. Enjoy your meal!" },
        { speaker: 'user', text: "Thank you. Oh, one more thing, is the chicken spicy?" },
        { speaker: 'ai', text: "No, it's not spicy at all. It's seasoned with herbs." },
        { speaker: 'user', text: "Perfect. I don't like spicy food." },
        { speaker: 'ai', text: "Not a problem. I'll be right back with your salad." }
      ],
      vocabulary: [
        { word: "menu", definition: "a list of food and drinks available at a restaurant" },
        { word: "grilled", definition: "cooked on a grill with direct heat" },
        { word: "mashed potatoes", definition: "potatoes that have been boiled and crushed until smooth" },
        { word: "still water", definition: "water that is not carbonated" },
        { word: "seasoned", definition: "flavored with spices or herbs" }
      ],
      practiceQuestions: [
        "What does Sophia order for her main course?",
        "What does she choose to start her meal?",
        "What does Sophia want to drink?",
        "Is the chicken spicy?",
        "What does the waiter say about the chicken's seasoning?"
      ]
    },
    {
      title: "Checking into a Hotel",
      description: "Practice checking in and asking about hotel amenities.",
      dialog: [
        { speaker: 'user', text: "Good evening. I have a reservation under the name Michael Brown." },
        { speaker: 'ai', text: "Good evening, Mr. Brown. Welcome to the Grand Hotel. Can I see your ID and credit card, please?" },
        { speaker: 'user', text: "Certainly. Here you go." },
        { speaker: 'ai', text: "Thank you. Your reservation is for a single room for three nights. Is that correct?" },
        { speaker: 'user', text: "Yes, that's right. Is breakfast included?" },
        { speaker: 'ai', text: "Yes, breakfast is complimentary and served from 7 AM to 10 AM in the dining area on the ground floor." },
        { speaker: 'user', text: "Excellent. What about Wi-Fi?" },
        { speaker: 'ai', text: "Wi-Fi is also complimentary. The network name is 'GrandHotel_Guest' and the password is 'welcome2025'. You'll find it on your key card holder as well." },
        { speaker: 'user', text: "Perfect. What time is check-out?" },
        { speaker: 'ai', text: "Check-out is at 11 AM. If you need a late check-out, please inform us in advance." },
        { speaker: 'user', text: "I understand. Which floor is my room on?" },
        { speaker: 'ai', text: "Your room is on the fifth floor, room 507. Here is your key card. Enjoy your stay, Mr. Brown." },
        { speaker: 'user', text: "Thank you very much." }
      ],
      vocabulary: [
        { word: "reservation", definition: "a booking made in advance" },
        { word: "ID", definition: "identification document, like a passport or driver's license" },
        { word: "complimentary", definition: "free of charge" },
        { word: "dining area", definition: "a place where meals are eaten" },
        { word: "check-out", definition: "the time by which you must leave the hotel room" }
      ],
      practiceQuestions: [
        "What is the guest's name?",
        "How many nights is Michael staying?",
        "Is breakfast included in his stay?",
        "What is the Wi-Fi password?",
        "What time is check-out?"
      ]
    },
    {
      title: "Asking About Hobbies",
      description: "Practice asking and answering questions about hobbies.",
      dialog: [
        { speaker: 'user', text: "Hey Ben, what do you usually do in your free time?" },
        { speaker: 'ai', text: "Hi Lisa! I enjoy reading a lot. I usually read novels or history books." },
        { speaker: 'user', text: "That's interesting. How often do you read?" },
        { speaker: 'ai', text: "Almost every day, especially in the evenings before bed. It helps me relax." },
        { speaker: 'user', text: "I can imagine. Do you have any other hobbies?" },
        { speaker: 'ai', text: "Yes, I also like to go hiking on weekends when the weather is nice." },
        { speaker: 'user', text: "Hiking sounds fun! Where do you usually go?" },
        { speaker: 'ai', text: "There's a nice trail near the lake, about an hour's drive from here. The views are amazing." },
        { speaker: 'user', text: "I love nature. Maybe I should try hiking sometime." },
        { speaker: 'ai', text: "You definitely should! It's a great way to stay active and enjoy the outdoors." },
        { speaker: 'user', text: "Do you go alone or with friends?" },
        { speaker: 'ai', text: "Sometimes alone, sometimes with a small group of friends. It depends." },
        { speaker: 'user', text: "That's cool. I mostly watch movies and listen to music in my free time." },
        { speaker: 'ai', text: "Those are good ways to relax too. Maybe we can go hiking together sometime?" },
        { speaker: 'user', text: "I'd like that!" }
      ],
      vocabulary: [
        { word: "free time", definition: "time when you are not working or studying" },
        { word: "novels", definition: "long written stories about imaginary people and events" },
        { word: "hiking", definition: "the activity of going for long walks in the countryside" },
        { word: "trail", definition: "a path or track made across open country or through woods" },
        { word: "outdoors", definition: "outside, not inside a building" }
      ],
      practiceQuestions: [
        "What is Ben's main hobby?",
        "How often does Ben read?",
        "What other hobby does Ben have?",
        "Where does Ben usually go hiking?",
        "What does Lisa do in her free time?"
      ]
    },
    {
      title: "Talking About Weather",
      description: "Practice talking about the weather and making small talk.",
      dialog: [
        { speaker: 'user', text: "Good morning, Sarah. Beautiful day, isn't it?" },
        { speaker: 'ai', text: "Good morning, Tom. Yes, it's lovely! The sun is shining, and it's not too hot." },
        { speaker: 'user', text: "I agree. It's perfect weather for a walk in the park." },
        { speaker: 'ai', text: "Absolutely. I heard it's going to be warm all week." },
        { speaker: 'user', text: "That's great news! I'm tired of the rain we had last week." },
        { speaker: 'ai', text: "Me too. The constant rain was a bit depressing." },
        { speaker: 'user', text: "Do you think it will rain again soon?" },
        { speaker: 'ai', text: "The forecast says clear skies for the next few days, but you never know with the weather." },
        { speaker: 'user', text: "That's true. I hope it stays like this for the weekend." },
        { speaker: 'ai', text: "Me too! Are you planning anything special for the weekend?" },
        { speaker: 'user', text: "I might go for a bike ride if the weather holds up." },
        { speaker: 'ai', text: "Sounds like a good plan. I'm just hoping for some sunshine to do laundry." },
        { speaker: 'user', text: "Haha, practical plans are good too. Enjoy the sunshine!" },
        { speaker: 'ai', text: "You too, Tom!" }
      ],
      vocabulary: [
        { word: "lovely", definition: "very pleasant or enjoyable" },
        { word: "perfect weather", definition: "ideal conditions for outdoor activities" },
        { word: "forecast", definition: "a prediction of future weather conditions" },
        { word: "clear skies", definition: "no clouds in the sky" },
        { word: "holds up", definition: "remains good or stable" }
      ],
      practiceQuestions: [
        "What kind of weather are Tom and Sarah discussing?",
        "What was the weather like last week?",
        "What does the forecast say for the next few days?",
        "What is Tom planning for the weekend?",
        "What is Sarah hoping to do if the weather stays nice?"
      ]
    },
    {
      title: "Making Plans for the Evening",
      description: "Practice making and responding to plans with a friend.",
      dialog: [
        { speaker: 'user', text: "Hey Chloe, what are you doing tonight?" },
        { speaker: 'ai', text: "Hi Alex! I don't have any specific plans yet. Why do you ask?" },
        { speaker: 'user', text: "I was thinking of going to see that new action movie. Are you interested?" },
        { speaker: 'ai', text: "Oh, I heard about that one! It looks really exciting. What time is the show?" },
        { speaker: 'user', text: "There's a showing at 7:00 PM at the downtown cinema." },
        { speaker: 'ai', text: "7:00 PM works for me. Should we meet there, or do you want to grab dinner beforehand?" },
        { speaker: 'user', text: "Dinner sounds good! There's a new pizza place near the cinema that I've been wanting to try." },
        { speaker: 'ai', text: "Perfect! What time should we meet for pizza?" },
        { speaker: 'user', text: "How about 5:30 PM? That gives us plenty of time to eat before the movie starts." },
        { speaker: 'ai', text: "5:30 PM, got it. Do you know if the pizza place takes reservations?" },
        { speaker: 'user', text: "I don't think so, it's pretty casual. But we can always get a table, it's not usually too crowded early." },
        { speaker: 'ai', text: "Sounds good to me. I'm looking forward to it!" },
        { speaker: 'user', text: "Me too! See you later then." },
        { speaker: 'ai', text: "See you!" }
      ],
      vocabulary: [
        { word: "specific plans", definition: "definite arrangements" },
        { word: "action movie", definition: "a film genre with a lot of excitement and fighting" },
        { word: "showing", definition: "a scheduled time for a movie to be played" },
        { word: "grab dinner", definition: "to eat dinner quickly or informally" },
        { word: "plenty of time", definition: "more than enough time" }
      ],
      practiceQuestions: [
        "What does Alex suggest they do tonight?",
        "What time is the movie showing?",
        "Where do they plan to eat dinner?",
        "What time are they meeting for dinner?",
        "What kind of pizza place is it?"
      ]
    },
    {
      title: "Describing Your Family",
      description: "Practice talking about family members and relationships.",
      dialog: [
        { speaker: 'user', text: "So David, tell me a little about your family." },
        { speaker: 'ai', text: "Well, I have a pretty small family. It's just my parents, my older sister, and me." },
        { speaker: 'user', text: "Oh, that's nice. What does your sister do?" },
        { speaker: 'ai', text: "She's a teacher. She teaches English at a high school." },
        { speaker: 'user', text: "That's interesting! And what about your parents?" },
        { speaker: 'ai', text: "My dad is an engineer, and my mom is a nurse. They're both very busy." },
        { speaker: 'user', text: "I can imagine. Do you all live in the same city?" },
        { speaker: 'ai', text: "My sister lives in a different city now, but my parents and I live in the same town." },
        { speaker: 'user', text: "That's good. Do you see your sister often?" },
        { speaker: 'ai', text: "We try to. She comes home for holidays, and I visit her sometimes too." },
        { speaker: 'user', text: "It's nice to have a close family." },
        { speaker: 'ai', text: "Yes, it is. We have dinner together every Sunday." },
        { speaker: 'user', text: "That's a lovely tradition. My family is much bigger. I have two brothers and a younger sister." },
        { speaker: 'ai', text: "Wow, that's a lot of siblings! Do you all get along?" },
        { speaker: 'user', text: "Mostly, yes! It can be noisy, but it's always fun." }
      ],
      vocabulary: [
        { word: "small family", definition: "a family with few members" },
        { word: "older sister", definition: "a sister who is older than you" },
        { word: "engineer", definition: "a person who designs, builds, or maintains engines, machines, or structures" },
        { word: "nurse", definition: "a person trained to care for the sick or infirm" },
        { word: "siblings", definition: "brothers and sisters" }
      ],
      practiceQuestions: [
        "How many people are in David's immediate family?",
        "What does David's sister do for a living?",
        "What are David's parents' professions?",
        "Do all of David's family members live in the same city?",
        "How often does David's family have dinner together?"
      ]
    },
    {
      title: "Talking About Your Favorite Food",
      description: "Practice talking about your favorite food and why you like it.",
      dialog: [
        { speaker: 'user', text: "Carlos, what's your favorite food?" },
        { speaker: 'ai', text: "That's an easy one! Tacos, definitely tacos." },
        { speaker: 'user', text: "Oh, I love tacos too! What kind do you like?" },
        { speaker: 'ai', text: "I'm a big fan of al pastor tacos, with a lot of pineapple and cilantro." },
        { speaker: 'user', text: "Sounds delicious! Do you make them yourself or do you have a favorite restaurant?" },
        { speaker: 'ai', text: "I try to make them at home sometimes, but my favorite place is a small taqueria downtown. Their al pastor is unbeatable." },
        { speaker: 'user', text: "I'll have to check that out! What do you like about tacos so much?" },
        { speaker: 'ai', text: "I love the combination of flavors and textures – the savory meat, the fresh salsa, the soft tortilla. And you can customize them so much!" },
        { speaker: 'user', text: "That's true. What about other Mexican food? Do you like burritos or enchiladas?" },
        { speaker: 'ai', text: "Yes, I like them, but tacos are my absolute favorite. What about you, Maria? What's your go-to food?" },
        { speaker: 'user', text: "I'm a big pasta lover. Especially lasagna." },
        { speaker: 'ai', text: "Lasagna is great! Do you make it from scratch?" },
        { speaker: 'user', text: "I do! It takes a while, but it's worth it. My family loves it." },
        { speaker: 'ai', text: "I can imagine. Maybe you can share your recipe sometime!" },
        { speaker: 'user', text: "I'd be happy to!" }
      ],
      vocabulary: [
        { word: "tacos", definition: "a traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling" },
        { word: "al pastor", definition: "a type of marinated pork cooked on a vertical spit" },
        { word: "cilantro", definition: "a herb with a strong, fresh taste, also known as coriander" },
        { word: "taqueria", definition: "a Mexican restaurant specializing in tacos" },
        { word: "customize", definition: "to modify something to suit a particular individual or task" }
      ],
      practiceQuestions: [
        "What is Carlos's favorite food?",
        "What kind of tacos does Carlos prefer?",
        "Where does Carlos like to eat tacos?",
        "What does Carlos like about tacos?",
        "What is Maria's favorite food?"
      ]
    },
    {
      title: "Describing a Simple Wish or Dream",
      description: "Practice talking about a wish or dream for the future.",
      dialog: [
        { speaker: 'user', text: "Do you have a wish or dream, Olivia?" },
        { speaker: 'ai', text: "Yes, I wish to travel to Japan one day." },
        { speaker: 'user', text: "Why Japan?" },
        { speaker: 'ai', text: "I love Japanese food and culture. I want to see the cherry blossoms." },
        { speaker: 'user', text: "That sounds amazing!" },
        { speaker: 'ai', text: "It is my dream to visit Tokyo and Kyoto." },
        { speaker: 'user', text: "I hope your dream comes true!" },
        { speaker: 'ai', text: "Thank you! What's your wish?" },
        { speaker: 'user', text: "I want to learn to play the guitar." }
      ],
      vocabulary: [
        { word: "wish", definition: "a hope for something that you want to happen" },
        { word: "dream", definition: "something you want very much to do or have in the future" },
        { word: "cherry blossom", definition: "a flower from a cherry tree, especially popular in Japan" },
        { word: "culture", definition: "the ideas, customs, and social behavior of a particular people or society" },
        { word: "come true", definition: "to become real or happen as hoped" }
      ],
      practiceQuestions: [
        "What is Olivia's wish?",
        "Why does Olivia want to visit Japan?",
        "What does Olivia want to see in Japan?",
        "What is the user's wish?",
        "What does 'come true' mean?"
      ]
    },
    {
      title: "Describing a Daily Routine",
      description: "Practice talking about your daily routine and habits.",
      dialog: [
        { speaker: 'user', text: "What does your typical day look like, Anna?" },
        { speaker: 'ai', text: "I usually wake up at 6:30 AM, have breakfast, and then go to work." },
        { speaker: 'user', text: "What do you have for breakfast?" },
        { speaker: 'ai', text: "Just some toast and coffee. I like to keep it simple." },
        { speaker: 'user', text: "How do you get to work?" },
        { speaker: 'ai', text: "I take the bus. It takes about 20 minutes." },
        { speaker: 'user', text: "What do you do after work?" },
        { speaker: 'ai', text: "I usually cook dinner, watch some TV, and then read before bed." },
        { speaker: 'user', text: "Sounds relaxing! What time do you go to bed?" },
        { speaker: 'ai', text: "Around 10:30 PM. I need my sleep!" },
        { speaker: 'user', text: "Me too. Thanks for sharing!" }
      ],
      vocabulary: [
        { word: "routine", definition: "a regular way of doing things in a particular order" },
        { word: "toast", definition: "sliced bread browned on both sides by heat" },
        { word: "keep it simple", definition: "not make something complicated" },
        { word: "cook dinner", definition: "prepare the evening meal" },
        { word: "relaxing", definition: "helping you to rest and feel calm" }
      ],
      practiceQuestions: [
        "What time does Anna wake up?",
        "How does Anna get to work?",
        "What does Anna do after work?",
        "What time does Anna go to bed?",
        "What does Anna have for breakfast?"
      ]
    },
    {
      title: "Describing a Friend",
      description: "Practice describing a friend's appearance and personality.",
      dialog: [
        { speaker: 'user', text: "Can you tell me about your best friend, Mark?" },
        { speaker: 'ai', text: "Sure! My best friend is Jake. He's tall and has short brown hair." },
        { speaker: 'user', text: "What is he like?" },
        { speaker: 'ai', text: "He's very friendly and always makes people laugh. He's also a good listener." },
        { speaker: 'user', text: "What do you like to do together?" },
        { speaker: 'ai', text: "We play basketball and sometimes go to the movies." },
        { speaker: 'user', text: "Sounds like fun!" },
        { speaker: 'ai', text: "It is! I'm lucky to have him as a friend." }
      ],
      vocabulary: [
        { word: "appearance", definition: "the way that someone looks" },
        { word: "personality", definition: "the type of person you are, shown by the way you behave" },
        { word: "friendly", definition: "kind and pleasant" },
        { word: "good listener", definition: "someone who listens carefully and sympathetically" },
        { word: "lucky", definition: "having good things happen by chance" }
      ],
      practiceQuestions: [
        "What does Jake look like?",
        "What kind of personality does Jake have?",
        "What activities do Mark and Jake do together?",
        "Why does Mark feel lucky?",
        "What does it mean to be a good listener?"
      ]
    },
    {
      title: "Describing a Place in Your Town",
      description: "Practice describing a favorite place in your town.",
      dialog: [
        { speaker: 'user', text: "Do you have a favorite place in your town, Lisa?" },
        { speaker: 'ai', text: "Yes! I love the city park. It's big and has lots of trees and flowers." },
        { speaker: 'user', text: "What do you do there?" },
        { speaker: 'ai', text: "I like to walk my dog and sometimes have picnics with friends." },
        { speaker: 'user', text: "Is it crowded?" },
        { speaker: 'ai', text: "Not usually, except on weekends. It's very peaceful in the mornings." },
        { speaker: 'user', text: "It sounds lovely!" },
        { speaker: 'ai', text: "It is! You should visit sometime." }
      ],
      vocabulary: [
        { word: "park", definition: "a large public green area in a town, used for recreation" },
        { word: "picnic", definition: "a meal eaten outdoors, usually in a park" },
        { word: "peaceful", definition: "calm and quiet" },
        { word: "crowded", definition: "full of people" },
        { word: "visit", definition: "to go to see a person or place for pleasure" }
      ],
      practiceQuestions: [
        "What is Lisa's favorite place?",
        "What does Lisa do at the park?",
        "When is the park crowded?",
        "What does peaceful mean?",
        "Who does Lisa have picnics with?"
      ]
    },
    {
      title: "Describing a Weekend Activity",
      description: "Practice talking about what you did last weekend.",
      dialog: [
        { speaker: 'user', text: "What did you do last weekend, Ben?" },
        { speaker: 'ai', text: "I went hiking in the mountains with my family." },
        { speaker: 'user', text: "That sounds exciting! How was the weather?" },
        { speaker: 'ai', text: "It was sunny and warm, perfect for hiking." },
        { speaker: 'user', text: "Did you take any photos?" },
        { speaker: 'ai', text: "Yes, I took lots of pictures of the views and the trees." },
        { speaker: 'user', text: "What did you do after hiking?" },
        { speaker: 'ai', text: "We had a picnic by a lake. It was very relaxing." },
        { speaker: 'user', text: "Sounds like a great weekend!" },
        { speaker: 'ai', text: "It was! I love spending time outdoors." }
      ],
      vocabulary: [
        { word: "hiking", definition: "the activity of going for long walks in the countryside or mountains" },
        { word: "mountains", definition: "large natural elevations of the earth's surface" },
        { word: "views", definition: "scenery or sights you can see from a place" },
        { word: "picnic", definition: "a meal eaten outdoors" },
        { word: "outdoors", definition: "outside, not in a building" }
      ],
      practiceQuestions: [
        "Where did Ben go last weekend?",
        "What was the weather like?",
        "What did Ben take photos of?",
        "Where did Ben have a picnic?",
        "What does Ben enjoy about weekends?"
      ]
    },
    {
      title: "Describing a Family Tradition",
      description: "Practice talking about a family tradition or celebration.",
      dialog: [
        { speaker: 'user', text: "Does your family have any special traditions, Maria?" },
        { speaker: 'ai', text: "Yes, every year we celebrate Lunar New Year together." },
        { speaker: 'user', text: "What do you do for the celebration?" },
        { speaker: 'ai', text: "We clean the house, cook special food, and visit relatives." },
        { speaker: 'user', text: "What kind of food do you make?" },
        { speaker: 'ai', text: "We make dumplings, rice cakes, and lots of sweets." },
        { speaker: 'user', text: "That sounds delicious!" },
        { speaker: 'ai', text: "It is! We also give red envelopes with money to children for good luck." },
        { speaker: 'user', text: "That's a wonderful tradition." },
        { speaker: 'ai', text: "Thank you! I look forward to it every year." }
      ],
      vocabulary: [
        { word: "tradition", definition: "a custom or belief passed down from generation to generation" },
        { word: "celebrate", definition: "to do something special for an important event" },
        { word: "dumplings", definition: "small pieces of dough filled with meat or vegetables" },
        { word: "red envelope", definition: "a red packet containing money, given during celebrations for good luck" },
        { word: "relatives", definition: "members of your family" }
      ],
      practiceQuestions: [
        "What tradition does Maria's family celebrate?",
        "What foods are made for Lunar New Year?",
        "What is the purpose of the red envelope?",
        "Who does Maria's family visit during the celebration?",
        "What does Maria look forward to every year?"
      ]
    },
    {
      title: "Describing a Holiday",
      description: "Practice talking about a holiday you celebrate.",
      dialog: [
        { speaker: 'user', text: "What is your favorite holiday, Tom?" },
        { speaker: 'ai', text: "My favorite holiday is Christmas. I love the decorations and spending time with family." },
        { speaker: 'user', text: "What do you do on Christmas?" },
        { speaker: 'ai', text: "We decorate the house, exchange gifts, and have a big dinner together." },
        { speaker: 'user', text: "What kind of food do you eat?" },
        { speaker: 'ai', text: "We usually have roast chicken, potatoes, and lots of desserts." },
        { speaker: 'user', text: "That sounds delicious!" },
        { speaker: 'ai', text: "It is! I look forward to it every year." }
      ],
      vocabulary: [
        { word: "holiday", definition: "a special day of celebration" },
        { word: "decorations", definition: "items used to make a place look festive" },
        { word: "exchange gifts", definition: "to give and receive presents" },
        { word: "roast", definition: "to cook food, especially meat, in an oven or over a fire" },
        { word: "look forward to", definition: "to feel excited about something that is going to happen" }
      ],
      practiceQuestions: [
        "What is Tom's favorite holiday?",
        "What does Tom's family do on Christmas?",
        "What food do they eat?",
        "What does 'exchange gifts' mean?",
        "What does Tom look forward to every year?"
      ]
    },
    {
      title: "Describing a School Day",
      description: "Practice talking about a typical day at school.",
      dialog: [
        { speaker: 'user', text: "Can you tell me about your school day, Sarah?" },
        { speaker: 'ai', text: "Sure! I get to school at 8 AM. My first class is math." },
        { speaker: 'user', text: "What other subjects do you have?" },
        { speaker: 'ai', text: "I have English, science, and art. My favorite is art because I love drawing." },
        { speaker: 'user', text: "What do you do at lunchtime?" },
        { speaker: 'ai', text: "I eat with my friends in the cafeteria. We talk and sometimes play games." },
        { speaker: 'user', text: "When does school finish?" },
        { speaker: 'ai', text: "At 3 PM. Then I go home and do my homework." }
      ],
      vocabulary: [
        { word: "subject", definition: "an area of knowledge studied in school" },
        { word: "cafeteria", definition: "a place in a school where students eat" },
        { word: "lunchtime", definition: "the time in the middle of the day when people eat lunch" },
        { word: "homework", definition: "work that a student does at home" },
        { word: "drawing", definition: "making pictures with a pen, pencil, or crayon" }
      ],
      practiceQuestions: [
        "What time does Sarah get to school?",
        "What is Sarah's favorite subject?",
        "Where does Sarah eat lunch?",
        "What does Sarah do after school?",
        "What does Sarah like about art class?"
      ]
    },
    {
      title: "Describing a Pet",
      description: "Practice talking about a pet and how you take care of it.",
      dialog: [
        { speaker: 'user', text: "Do you have any pets, Alex?" },
        { speaker: 'ai', text: "Yes, I have a dog named Max. He's small and very playful." },
        { speaker: 'user', text: "What does Max look like?" },
        { speaker: 'ai', text: "He has white fur and big brown eyes." },
        { speaker: 'user', text: "What do you do to take care of him?" },
        { speaker: 'ai', text: "I feed him, take him for walks, and play with him every day." },
        { speaker: 'user', text: "Does he know any tricks?" },
        { speaker: 'ai', text: "Yes! He can sit, shake hands, and roll over." }
      ],
      vocabulary: [
        { word: "pet", definition: "an animal kept for companionship" },
        { word: "playful", definition: "full of fun and energy" },
        { word: "fur", definition: "the thick hair that covers the bodies of some animals" },
        { word: "feed", definition: "to give food to" },
        { word: "trick", definition: "something that an animal is taught to do" }
      ],
      practiceQuestions: [
        "What kind of pet does Alex have?",
        "What does Max look like?",
        "How does Alex take care of Max?",
        "What tricks can Max do?",
        "What does playful mean?"
      ]
    },
    {
      title: "Describing a Meal",
      description: "Practice talking about a meal you enjoyed.",
      dialog: [
        { speaker: 'user', text: "Can you tell me about a meal you enjoyed, Emma?" },
        { speaker: 'ai', text: "Sure! Last weekend, I went to a restaurant with my family." },
        { speaker: 'user', text: "What did you eat?" },
        { speaker: 'ai', text: "I had grilled fish with rice and vegetables. It was delicious!" },
        { speaker: 'user', text: "Did you have dessert?" },
        { speaker: 'ai', text: "Yes, we shared a big chocolate cake." },
        { speaker: 'user', text: "That sounds wonderful!" },
        { speaker: 'ai', text: "It was! I want to go back again soon." }
      ],
      vocabulary: [
        { word: "meal", definition: "an occasion when you eat food, or the food that is eaten at that time" },
        { word: "grilled", definition: "cooked over direct heat" },
        { word: "vegetables", definition: "plants or parts of plants used as food" },
        { word: "delicious", definition: "tasting very good" },
        { word: "dessert", definition: "sweet food eaten at the end of a meal" }
      ],
      practiceQuestions: [
        "Where did Emma go for her meal?",
        "What did Emma eat?",
        "What did Emma have for dessert?",
        "Who did Emma go with?",
        "What does Emma want to do again soon?"
      ]
    },
    {
      title: "Describing a Simple Problem and Solution",
      description: "Practice talking about a simple problem and how you solved it.",
      dialog: [
        { speaker: 'user', text: "Have you had any problems recently, David?" },
        { speaker: 'ai', text: "Yes, yesterday my bike had a flat tire." },
        { speaker: 'user', text: "Oh no! What did you do?" },
        { speaker: 'ai', text: "I took it to the repair shop and they fixed it in 10 minutes." },
        { speaker: 'user', text: "That's quick! Did you have to wait long?" },
        { speaker: 'ai', text: "No, there was no line. I was lucky." },
        { speaker: 'user', text: "I'm glad it was fixed so fast." },
        { speaker: 'ai', text: "Me too! Now I can ride my bike again." }
      ],
      vocabulary: [
        { word: "flat tire", definition: "a tire that has lost all its air" },
        { word: "repair shop", definition: "a place where things are fixed" },
        { word: "fixed", definition: "repaired, made to work again" },
        { word: "wait", definition: "to stay in one place until something happens" },
        { word: "lucky", definition: "having good things happen by chance" }
      ],
      practiceQuestions: [
        "What problem did David have?",
        "How did David solve the problem?",
        "How long did the repair take?",
        "Did David have to wait in line?",
        "What does David use his bike for?"
      ]
    },
    {
      title: "Describing a Favorite Season",
      description: "Practice talking about your favorite season and why you like it.",
      dialog: [
        { speaker: 'user', text: "What's your favorite season, Mia?" },
        { speaker: 'ai', text: "I love spring. The weather is warm, and the flowers start to bloom." },
        { speaker: 'user', text: "What do you like to do in spring?" },
        { speaker: 'ai', text: "I enjoy going for walks in the park and having picnics with friends." },
        { speaker: 'user', text: "Do you have a favorite spring holiday?" },
        { speaker: 'ai', text: "Yes, I like Easter because we have a big family lunch." },
        { speaker: 'user', text: "That sounds nice!" },
        { speaker: 'ai', text: "It is! What's your favorite season?" },
        { speaker: 'user', text: "I like autumn because of the colorful leaves." }
      ],
      vocabulary: [
        { word: "season", definition: "one of the four periods of the year: spring, summer, autumn, winter" },
        { word: "bloom", definition: "to produce flowers" },
        { word: "picnic", definition: "a meal eaten outdoors" },
        { word: "Easter", definition: "a spring holiday celebrated by many people" },
        { word: "autumn", definition: "the season between summer and winter" }
      ],
      practiceQuestions: [
        "What is Mia's favorite season?",
        "What does Mia like to do in spring?",
        "What holiday does Mia enjoy in spring?",
        "What does the user like about autumn?",
        "What does 'bloom' mean?"
      ]
    },
    {
      title: "Describing a Simple Shopping Experience",
      description: "Practice talking about shopping for something simple.",
      dialog: [
        { speaker: 'user', text: "Did you go shopping recently, Leo?" },
        { speaker: 'ai', text: "Yes, I went to the store to buy a new notebook." },
        { speaker: 'user', text: "Did you find what you needed?" },
        { speaker: 'ai', text: "Yes, there were many choices. I picked a blue one." },
        { speaker: 'user', text: "Did you buy anything else?" },
        { speaker: 'ai', text: "Just a pen to go with the notebook." },
        { speaker: 'user', text: "Was it expensive?" },
        { speaker: 'ai', text: "No, it was very cheap. I paid with cash." },
        { speaker: 'user', text: "Great!" }
      ],
      vocabulary: [
        { word: "notebook", definition: "a small book with blank or lined pages for writing notes" },
        { word: "choices", definition: "options or things you can choose from" },
        { word: "pen", definition: "an instrument for writing with ink" },
        { word: "cheap", definition: "not expensive" },
        { word: "cash", definition: "money in the form of bills and coins" }
      ],
      practiceQuestions: [
        "What did Leo buy?",
        "What color notebook did Leo choose?",
        "Did Leo buy anything else?",
        "How did Leo pay?",
        "What does 'cheap' mean?"
      ]
    },
    {
      title: "Describing a Simple Invitation",
      description: "Practice inviting someone to do something simple.",
      dialog: [
        { speaker: 'user', text: "Do you want to go for coffee after class, Emma?" },
        { speaker: 'ai', text: "I'd love to! Where should we go?" },
        { speaker: 'user', text: "There's a nice café near the library." },
        { speaker: 'ai', text: "Sounds perfect. What time?" },
        { speaker: 'user', text: "How about 4 PM?" },
        { speaker: 'ai', text: "4 PM works for me. See you then!" },
        { speaker: 'user', text: "See you!" }
      ],
      vocabulary: [
        { word: "invitation", definition: "a request to someone to do something or go somewhere" },
        { word: "café", definition: "a small restaurant where you can buy drinks and simple meals" },
        { word: "library", definition: "a place where you can borrow books" },
        { word: "perfect", definition: "exactly right for a particular purpose" },
        { word: "see you", definition: "a way to say goodbye when you will meet again soon" }
      ],
      practiceQuestions: [
        "Who does Emma invite?",
        "Where do they plan to go?",
        "What time do they agree to meet?",
        "What does 'café' mean?",
        "What does 'see you' mean?"
      ]
    },
    {
      title: "Describing a Simple Plan for the Weekend",
      description: "Practice talking about your plans for the weekend.",
      dialog: [
        { speaker: 'user', text: "Do you have any plans for the weekend, Sam?" },
        { speaker: 'ai', text: "Yes, I'm going to visit my grandparents." },
        { speaker: 'user', text: "Where do they live?" },
        { speaker: 'ai', text: "They live in a small town by the sea." },
        { speaker: 'user', text: "What will you do there?" },
        { speaker: 'ai', text: "We'll go for walks, cook together, and play board games." },
        { speaker: 'user', text: "That sounds fun!" },
        { speaker: 'ai', text: "It is! I love spending time with them." }
      ],
      vocabulary: [
        { word: "plan", definition: "something you intend to do" },
        { word: "grandparents", definition: "the parents of your mother or father" },
        { word: "sea", definition: "a large area of salt water" },
        { word: "board game", definition: "a game played on a board, often with pieces or cards" },
        { word: "spend time", definition: "to use time doing something or being with someone" }
      ],
      practiceQuestions: [
        "Where is Sam going this weekend?",
        "Who is Sam visiting?",
        "What activities will Sam do?",
        "What does 'board game' mean?",
        "What does Sam enjoy about weekends?"
      ]
    },
    {
      title: "Describing a Simple Wish or Dream",
      description: "Practice talking about a wish or dream for the future.",
      dialog: [
        { speaker: 'user', text: "Do you have a wish or dream, Olivia?" },
        { speaker: 'ai', text: "Yes, I wish to travel to Japan one day." },
        { speaker: 'user', text: "Why Japan?" },
        { speaker: 'ai', text: "I love Japanese food and culture. I want to see the cherry blossoms." },
        { speaker: 'user', text: "That sounds amazing!" },
        { speaker: 'ai', text: "It is my dream to visit Tokyo and Kyoto." },
        { speaker: 'user', text: "I hope your dream comes true!" },
        { speaker: 'ai', text: "Thank you! What's your wish?" },
        { speaker: 'user', text: "I want to learn to play the guitar." }
      ],
      vocabulary: [
        { word: "wish", definition: "a hope for something that you want to happen" },
        { word: "dream", definition: "something you want very much to do or have in the future" },
        { word: "cherry blossom", definition: "a flower from a cherry tree, especially popular in Japan" },
        { word: "culture", definition: "the ideas, customs, and social behavior of a particular people or society" },
        { word: "come true", definition: "to become real or happen as hoped" }
      ],
      practiceQuestions: [
        "What is Olivia's wish?",
        "Why does Olivia want to visit Japan?",
        "What does Olivia want to see in Japan?",
        "What is the user's wish?",
        "What does 'come true' mean?"
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