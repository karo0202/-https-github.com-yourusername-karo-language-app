import React, { useState } from 'react';
import { MessageCircle, Mic, MicOff, Volume2, Play, RotateCcw, Settings } from 'lucide-react';

interface ConversationPracticeProps {
  userLevel: string;
}

function ConversationPractice({ userLevel }: ConversationPracticeProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [messages, setMessages] = useState([
    { id: 1, type: 'ai', content: "Hello! I'm excited to practice English conversation with you today. What would you like to talk about?", timestamp: new Date() }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const scenarios = [
    {
      title: 'Restaurant Ordering',
      description: 'Practice ordering food and drinks at a restaurant',
      icon: '🍽️',
      difficulty: 'Beginner',
      context: 'You are at a restaurant with an AI waiter. Practice ordering your meal!'
    },
    {
      title: 'Job Interview',
      description: 'Prepare for professional interviews with common questions',
      icon: '💼',
      difficulty: 'Intermediate',
      context: 'You are in a job interview. Answer questions professionally and ask your own!'
    },
    {
      title: 'Travel Planning',
      description: 'Discuss travel plans, destinations, and activities',
      icon: '✈️',
      difficulty: 'Intermediate',
      context: 'Plan a trip with your AI travel companion. Discuss destinations and activities!'
    },
    {
      title: 'Business Meeting',
      description: 'Practice formal business communication and presentations',
      icon: '📊',
      difficulty: 'Advanced',
      context: 'You are in a business meeting. Present ideas and participate in discussions!'
    }
  ];

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // In a real app, this would start/stop speech recognition
  };

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
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = {
          id: messages.length + 2,
          type: 'ai',
          content: "That's a great point! I can see you're improving your English skills. Let me help you with some suggestions...",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 1500);
    }
  };

  const playAudio = (text: string) => {
    // In a real app, this would use Text-to-Speech API
    console.log('Playing audio for:', text);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Conversation Practice</h2>
          <p className="text-gray-600 mt-2">Practice real-world conversations with AI partners</p>
        </div>
        
        <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
          <Settings className="w-4 h-4" />
          <span>Settings</span>
        </button>
      </div>

      {/* Scenario Selection */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Choose a Scenario</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {scenarios.map((scenario, index) => (
            <button
              key={index}
              onClick={() => setCurrentScenario(index)}
              className={`p-4 rounded-lg text-left transition-all duration-200 ${
                currentScenario === index
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-900'
              }`}
            >
              <div className="text-2xl mb-2">{scenario.icon}</div>
              <h4 className="font-semibold mb-1">{scenario.title}</h4>
              <p className={`text-sm mb-2 ${
                currentScenario === index ? 'text-blue-100' : 'text-gray-600'
              }`}>
                {scenario.description}
              </p>
              <span className={`text-xs px-2 py-1 rounded-full ${
                currentScenario === index 
                  ? 'bg-white/20 text-white' 
                  : scenario.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                    scenario.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                    'bg-red-100 text-red-600'
              }`}>
                {scenario.difficulty}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Conversation Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chat Area */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg flex flex-col h-96">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-t-xl text-white">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold">{scenarios[currentScenario].title}</h4>
                <p className="text-blue-100 text-sm">{scenarios[currentScenario].context}</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 p-2 rounded-lg transition-colors">
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.type === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}>
                  <p>{message.content}</p>
                  {message.type === 'ai' && (
                    <button
                      onClick={() => playAudio(message.content)}
                      className="mt-2 text-blue-600 hover:text-blue-800 flex items-center space-x-1 text-sm"
                    >
                      <Volume2 className="w-3 h-3" />
                      <span>Listen</span>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 border-t bg-gray-50 rounded-b-xl">
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleRecording}
                className={`p-3 rounded-full transition-all duration-200 ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
              </button>
              
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message or use voice..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              
              <button
                onClick={sendMessage}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Conversation Tips */}
        <div className="space-y-6">
          {/* Real-time Feedback */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-4">Real-time Feedback</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 p-1 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Pronunciation</p>
                  <p className="text-xs text-gray-600">Great clarity in your speech!</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-yellow-100 p-1 rounded-full">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Grammar</p>
                  <p className="text-xs text-gray-600">Try using past tense consistently</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 p-1 rounded-full">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">Fluency</p>
                  <p className="text-xs text-gray-600">Good pace and rhythm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Conversation Tips */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-4">Tips for This Scenario</h4>
            <div className="space-y-3">
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">💡 Use polite expressions like "Could I have..." when ordering</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-green-800">📝 Practice asking follow-up questions</p>
              </div>
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-purple-800">🎯 Focus on clear pronunciation of food names</p>
              </div>
            </div>
          </div>

          {/* Session Stats */}
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-gray-900 mb-4">Session Progress</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Speaking Time</span>
                <span className="text-sm font-semibold">3:45</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Words Spoken</span>
                <span className="text-sm font-semibold">127</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Accuracy</span>
                <span className="text-sm font-semibold text-green-600">92%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConversationPractice;