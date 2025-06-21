export interface VocabularyWord {
  word: string;
  pronunciation: string;
  definition: string;
  example: string;
}

export interface VocabularyData {
  [key: string]: VocabularyWord[];
}

export const vocabularyData: VocabularyData = {
  Beginner: [
    { word: "Apple", pronunciation: "/ˈæpəl/", definition: "A round fruit with red or green skin and a whitish inside.", example: "She eats an apple every day." },
    { word: "House", pronunciation: "/haʊs/", definition: "A building for human habitation.", example: "They live in a big blue house." },
    { word: "Book", pronunciation: "/bʊk/", definition: "A written or printed work consisting of pages glued or sewn together along one side and bound in covers.", example: "I am reading a good book." },
    { word: "Cat", pronunciation: "/kæt/", definition: "A small domesticated carnivorous mammal with soft fur.", example: "My cat loves to sleep." },
    { word: "Sun", pronunciation: "/sʌn/", definition: "The star at the center of the Solar System.", example: "The sun is very bright." },
    { word: "Water", pronunciation: "/ˈwɔːtər/", definition: "A colorless, transparent, odorless liquid.", example: "I need a glass of water." },
    { word: "Friend", pronunciation: "/frɛnd/", definition: "A person with whom one has a bond of mutual affection.", example: "He is my best friend." },
    { word: "Happy", pronunciation: "/ˈhæpi/", definition: "Feeling or showing pleasure or contentment.", example: "She looks very happy today." },
    { word: "School", pronunciation: "/skuːl/", definition: "An institution for educating children.", example: "The children are at school." },
    { word: "Teacher", pronunciation: "/ˈtiːtʃər/", definition: "A person who teaches, especially in a school.", example: "The teacher is very kind." },
    { word: "Student", pronunciation: "/ˈstjuːdənt/", definition: "A person who is studying at a school or college.", example: "I am a student." },
    { word: "Money", pronunciation: "/ˈmʌni/", definition: "A current medium of exchange in the form of coins and banknotes.", example: "I need to save more money." },
    { word: "Time", pronunciation: "/taɪm/", definition: "The indefinite continued progress of existence and events.", example: "What time is it?" },
    { word: "Family", pronunciation: "/ˈfæməli/", definition: "A group consisting of parents and children living together in a household.", example: "My family is very important to me." },
    { word: "Food", pronunciation: "/fuːd/", definition: "Any nutritious substance that people or animals eat or drink.", example: "I love Italian food." }
  ],
  Intermediate: [
    { word: "Culture", pronunciation: "/ˈkʌltʃər/", definition: "The ideas, customs, and social behavior of a particular people or society.", example: "I love learning about new cultures." },
    { word: "Environment", pronunciation: "/ɪnˈvaɪrənmənt/", definition: "The surroundings or conditions in which a person, animal, or plant lives.", example: "We must protect the environment." },
    { word: "Government", pronunciation: "/ˈɡʌvərnmənt/", definition: "The system by which a state or community is governed.", example: "The government passed a new law." },
    { word: "Knowledge", pronunciation: "/ˈnɒlɪdʒ/", definition: "Facts, information, and skills acquired through experience or education.", example: "Knowledge is power." },
    { word: "Negotiate", pronunciation: "/nəˈɡoʊʃieɪt/", definition: "To have a formal discussion with someone in order to reach an agreement.", example: "They had to negotiate the terms of the contract." },
    { word: "Opportunity", pronunciation: "/ˌɒpərˈtuːnəti/", definition: "A time or set of circumstances that makes it possible to do something.", example: "This job is a great opportunity." },
    { word: "Significant", pronunciation: "/sɪɡˈnɪfɪkənt/", definition: "Sufficiently great or important to be worthy of attention.", example: "It was a significant discovery." },
    { word: "Technology", pronunciation: "/tɛkˈnɒlədʒi/", definition: "The application of scientific knowledge for practical purposes.", example: "Technology makes life easier." },
    { word: "Communication", pronunciation: "/kəˌmjuːnɪˈkeɪʃn/", definition: "The imparting or exchanging of information or news.", example: "Good communication is key." },
    { word: "Development", pronunciation: "/dɪˈvɛləpmənt/", definition: "The process of developing or being developed.", example: "The company is focused on product development." },
    { word: "Industry", pronunciation: "/ˈɪndəstri/", definition: "Economic activity concerned with the processing of raw materials and manufacture of goods in factories.", example: "The tech industry is booming." },
    { word: "Investment", pronunciation: "/ɪnˈvɛstmənt/", definition: "The action or process of investing money for profit.", example: "Real estate is a good investment." },
    { word: "Research", pronunciation: "/rɪˈsɜːrtʃ/", definition: "The systematic investigation into and study of materials and sources in order to establish facts and reach new conclusions.", example: "She is conducting research on climate change." },
    { word: "Strategy", pronunciation: "/ˈstrætədʒi/", definition: "A plan of action designed to achieve a long-term or overall aim.", example: "We need a new marketing strategy." },
    { word: "Structure", pronunciation: "/ˈstrʌktʃər/", definition: "The arrangement of and relations between the parts or elements of something complex.", example: "The structure of the building is very solid." }
  ],
  Advanced: [
    { word: "Acquiesce", pronunciation: "/ˌækwiˈɛs/", definition: "To accept something reluctantly but without protest.", example: "He will acquiesce in this decision." },
    { word: "Capricious", pronunciation: "/kəˈprɪʃəs/", definition: "Given to sudden and unaccountable changes of mood or behavior.", example: "The weather is notoriously capricious." },
    { word: "Ephemeral", pronunciation: "/ɪˈfɛmərəl/", definition: "Lasting for a very short time.", example: "Fame in the world of pop music is largely ephemeral." },
    { word: "Juxtaposition", pronunciation: "/ˌdʒʌkstəpəˈzɪʃn/", definition: "The fact of two things being seen or placed close together with contrasting effect.", example: "The juxtaposition of old and new architecture is stunning." },
    { word: "Meticulous", pronunciation: "/məˈtɪkjələs/", definition: "Showing great attention to detail; very careful and precise.", example: "He was meticulous in his work." },
    { word: "Plethora", pronunciation: "/ˈplɛθərə/", definition: "A large or excessive amount of something.", example: "The library has a plethora of books." },
    { word: "Ubiquitous", pronunciation: "/juːˈbɪkwɪtəs/", definition: "Present, appearing, or found everywhere.", example: "Coffee shops are ubiquitous these days." },
    { word: "Zeitgeist", pronunciation: "/ˈzaɪtɡaɪst/", definition: "The defining spirit or mood of a particular period of history.", example: "His songs perfectly captured the zeitgeist of the 1960s." },
    { word: "Anachronism", pronunciation: "/əˈnækrənɪzəm/", definition: "A thing belonging or appropriate to a period other than that in which it exists.", example: "Everything seemed like an anachronism in the modern city." },
    { word: "Eschew", pronunciation: "/ɪsˈtʃuː/", definition: "Deliberately avoid using; abstain from.", example: "He appealed to the crowd to eschew violence." },
    { word: "Fastidious", pronunciation: "/fæˈstɪdiəs/", definition: "Very attentive to and concerned about accuracy and detail.", example: "She was too fastidious to do anything that might get her dirty." },
    { word: "Idiosyncrasy", pronunciation: "/ˌɪdiəˈsɪŋkrəsi/", definition: "A mode of behavior or way of thought peculiar to an individual.", example: "One of his little idiosyncrasies was always wearing a red tie." },
    { word: "Nefarious", pronunciation: "/nəˈfɛəriəs/", definition: "Wicked or criminal.", example: "The nefarious activities of the organized crime syndicate." },
    { word: "Pulchritudinous", pronunciation: "/ˌpʌlkrɪˈtjuːdɪnəs/", definition: "Having great physical beauty.", example: "She was a pulchritudinous young woman." },
    { word: "Sycophant", pronunciation: "/ˈsɪkəfænt/", definition: "A person who acts obsequiously toward someone important in order to gain advantage.", example: "The king was surrounded by sycophants." }
  ]
}; 