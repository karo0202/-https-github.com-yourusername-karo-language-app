import { useState } from 'react';
import { Bot, User, Send } from 'lucide-react';

interface Message {
  text: string;
  sender: 'user' | 'ai';
}

function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    const userMessage: Message = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');

    // Mock AI response
    setTimeout(() => {
      const aiResponse: Message = { text: `I am a friendly AI assistant. You said: "${input}"`, sender: 'ai' };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto h-[70vh] flex flex-col">
      <h1 className="text-4xl font-bold text-center mb-6">AI Assistant</h1>
      
      <div className="flex-grow bg-white rounded-2xl shadow-card p-6 overflow-y-auto mb-6">
        <div className="space-y-6">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-4 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
              {msg.sender === 'ai' && (
                <div className="w-10 h-10 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center">
                  <Bot size={24} />
                </div>
              )}
              <div className={`max-w-lg p-4 rounded-2xl ${msg.sender === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-secondary text-text-primary rounded-bl-none'}`}>
                <p>{msg.text}</p>
              </div>
              {msg.sender === 'user' && (
                <div className="w-10 h-10 rounded-full bg-gray-200 text-text-secondary flex-shrink-0 flex items-center justify-center">
                  <User size={24} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center bg-white rounded-2xl shadow-card p-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Ask the AI anything..."
          className="w-full p-3 bg-transparent focus:outline-none text-lg"
        />
        <button
          onClick={handleSend}
          className="p-3 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-colors disabled:bg-gray-300"
          disabled={!input.trim()}
        >
          <Send size={24} />
        </button>
      </div>
    </div>
  );
}

export default AIAssistant;