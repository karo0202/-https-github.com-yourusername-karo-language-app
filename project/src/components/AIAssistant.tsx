import React, { useState } from 'react';
import { X, Send, Bot, User, Lightbulb, BookOpen, MessageCircle, HelpCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

function AIAssistant({ isOpen, onClose, darkMode }: AIAssistantProps) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: "Hi! I'm your AI learning assistant powered by advanced language models. I can help you with English grammar, vocabulary, pronunciation tips, or answer any questions about your learning journey. What would you like to explore today?",
      timestamp: new Date(),
      suggestions: ['Explain grammar rule', 'Practice conversation', 'Learning tips', 'Pronunciation help']
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const quickActions = [
    { text: "Explain grammar rule", icon: BookOpen, color: 'bg-blue-500' },
    { text: "Practice conversation", icon: MessageCircle, color: 'bg-green-500' },
    { text: "Learning tips", icon: Lightbulb, color: 'bg-yellow-500' },
    { text: "Help with pronunciation", icon: HelpCircle, color: 'bg-purple-500' }
  ];

  const sendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: 'user',
        content: inputMessage,
        timestamp: new Date()
      };
      
      setMessages([...messages, newMessage]);
      setInputMessage('');
      setIsTyping(true);
      
      // Simulate AI response with enhanced responses
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai',
          content: getEnhancedAIResponse(inputMessage),
          timestamp: new Date(),
          suggestions: getContextualSuggestions(inputMessage)
        };
        setMessages(prev => [...prev, aiResponse]);
        setIsTyping(false);
      }, 1500);
    }
  };

  const getEnhancedAIResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('grammar')) {
      return "I'd be delighted to help with grammar! English grammar has many fascinating patterns. Let me break this down systematically:\n\n🔍 **Grammar Focus Areas:**\n• Verb tenses and their usage\n• Sentence structure and word order\n• Articles (a, an, the) and their rules\n• Prepositions and phrasal verbs\n\nWhich specific grammar topic interests you most? I can provide detailed explanations with practical examples and common mistakes to avoid.";
    } else if (message.includes('pronunciation')) {
      return "Excellent question about pronunciation! Here's a comprehensive approach:\n\n🎯 **Pronunciation Mastery Strategy:**\n1. **Sound Recognition**: Focus on phonemes that don't exist in your native language\n2. **Stress Patterns**: Learn word and sentence stress rules\n3. **Intonation**: Practice rising and falling tones\n4. **Connected Speech**: Understand linking, reduction, and rhythm\n\n💡 **Pro Tips:**\n• Record yourself and compare with native speakers\n• Use the International Phonetic Alphabet (IPA)\n• Practice tongue twisters daily\n• Focus on minimal pairs (ship/sheep, bit/beat)\n\nWould you like me to create a personalized pronunciation plan for you?";
    } else if (message.includes('vocabulary')) {
      return "Building vocabulary strategically is key to fluency! Here's my proven methodology:\n\n📚 **Vocabulary Building Framework:**\n1. **Contextual Learning**: Learn words in meaningful sentences\n2. **Spaced Repetition**: Review at increasing intervals\n3. **Active Usage**: Use new words in speaking and writing\n4. **Word Families**: Learn related words together (create, creative, creativity)\n\n🎯 **Advanced Techniques:**\n• Learn collocations (strong coffee, not powerful coffee)\n• Study etymology for better retention\n• Use visual associations and mnemonics\n• Focus on high-frequency words first\n\nWhat's your current vocabulary level, and what topics interest you most?";
    } else if (message.includes('conversation')) {
      return "Conversation practice is the heart of language learning! Let me guide you:\n\n💬 **Conversation Mastery Path:**\n1. **Foundation**: Start with structured dialogues\n2. **Fluency**: Focus on communication over perfection\n3. **Confidence**: Practice in low-pressure environments\n4. **Authenticity**: Learn natural expressions and idioms\n\n🚀 **Practical Strategies:**\n• Use the 'shadowing' technique with native speakers\n• Practice self-talk to build fluency\n• Learn conversation fillers (well, actually, you know)\n• Master question formation for better interaction\n\nShall we start a practice conversation right now? I can role-play different scenarios with you!";
    } else {
      return "That's a thoughtful question! As your AI learning companion, I'm here to provide personalized guidance across all aspects of English learning.\n\n🌟 **How I Can Help You:**\n• **Grammar**: Detailed explanations with examples\n• **Vocabulary**: Strategic word learning techniques\n• **Pronunciation**: Phonetic guidance and practice\n• **Conversation**: Interactive dialogue practice\n• **Writing**: Structure, style, and clarity improvement\n• **Listening**: Comprehension strategies and tips\n\n🎯 **My Approach:**\nI adapt to your learning style, provide immediate feedback, and create personalized learning paths based on your goals and progress.\n\nWhat specific challenge are you facing in your English learning journey today?";
    }
  };

  const getContextualSuggestions = (userMessage: string): string[] => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('grammar')) {
      return ['Practice verb tenses', 'Learn about conditionals', 'Understand passive voice', 'Master articles usage'];
    } else if (message.includes('pronunciation')) {
      return ['Practice difficult sounds', 'Work on word stress', 'Improve intonation', 'Learn connected speech'];
    } else if (message.includes('vocabulary')) {
      return ['Learn business terms', 'Study academic words', 'Practice idioms', 'Build topic vocabulary'];
    } else if (message.includes('conversation')) {
      return ['Role-play scenarios', 'Practice small talk', 'Learn debate skills', 'Improve storytelling'];
    } else {
      return ['Set learning goals', 'Take a level test', 'Create study plan', 'Track progress'];
    }
  };

  const sendQuickAction = (action: string) => {
    setInputMessage(action);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.9, x: 100 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        exit={{ opacity: 0, scale: 0.9, x: 100 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed right-8 bottom-8 w-[420px] h-[700px] rounded-2xl shadow-2xl border flex flex-col z-50 ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        {/* Enhanced Header */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-6 rounded-t-2xl text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div 
                  className="bg-white/20 p-3 rounded-xl backdrop-blur-sm"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                >
                  <Bot className="w-6 h-6" />
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg">AI Learning Assistant</h3>
                  <div className="flex items-center space-x-2">
                    <motion.div
                      className="w-2 h-2 bg-green-400 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ repeat: Infinity, duration: 2 }}
                    />
                    <p className="text-blue-100 text-sm">Always here to help</p>
                  </div>
                </div>
              </div>
              <motion.button
                onClick={onClose}
                className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                animate={{
                  x: [0, 100, 0],
                  y: [0, -50, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5
                }}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
              />
            ))}
          </div>
        </div>

        {/* Enhanced Messages */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`px-4 py-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                      : darkMode 
                        ? 'bg-gray-700 text-gray-100' 
                        : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="text-sm whitespace-pre-line">{message.content}</p>
                  </div>
                  
                  {/* AI Suggestions */}
                  {message.type === 'ai' && message.suggestions && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mt-3 space-y-2"
                    >
                      <p className={`text-xs font-medium ${
                        darkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        💡 Try these:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {message.suggestions.map((suggestion, idx) => (
                          <motion.button
                            key={idx}
                            onClick={() => sendQuickAction(suggestion)}
                            className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                              darkMode 
                                ? 'bg-gray-600 text-gray-200 hover:bg-gray-500' 
                                : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                            }`}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {suggestion}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
                
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ml-2 mr-2 ${
                  message.type === 'user' 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 order-1' 
                    : darkMode 
                      ? 'bg-gray-600 order-2' 
                      : 'bg-gray-300 order-2'
                }`}>
                  {message.type === 'user' ? (
                    <User className="w-4 h-4 text-white" />
                  ) : (
                    <Bot className={`w-4 h-4 ${darkMode ? 'text-gray-200' : 'text-gray-600'}`} />
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-start"
            >
              <div className={`px-4 py-3 rounded-2xl ${
                darkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full ${
                        darkMode ? 'bg-gray-400' : 'bg-gray-400'
                      }`}
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </div>

        {/* Enhanced Quick Actions */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-xs font-medium mb-3 ${
            darkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            ⚡ Quick actions:
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={index}
                  onClick={() => sendQuickAction(action.text)}
                  className={`flex items-center space-x-2 p-3 rounded-lg text-sm font-medium transition-all ${
                    darkMode 
                      ? 'bg-gray-700 hover:bg-gray-600 text-gray-200' 
                      : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`p-1 rounded ${action.color}`}>
                    <Icon className="w-3 h-3 text-white" />
                  </div>
                  <span className="truncate">{action.text}</span>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Enhanced Input */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Ask me anything about English..."
              className={`flex-1 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm transition-all ${
                darkMode 
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' 
                  : 'bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-500'
              }`}
            />
            <motion.button
              onClick={sendMessage}
              disabled={!inputMessage.trim()}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              whileHover={{ scale: inputMessage.trim() ? 1.05 : 1 }}
              whileTap={{ scale: inputMessage.trim() ? 0.95 : 1 }}
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default AIAssistant;