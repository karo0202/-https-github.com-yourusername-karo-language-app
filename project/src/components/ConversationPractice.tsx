import { useState, useMemo, useEffect, useRef } from 'react';
import { useLevel } from '../context/LevelContext';
import { conversationData } from '../data/conversationData';
import { Bot, User } from 'lucide-react';

function ConversationPractice() {
  const { level } = useLevel();
  const scenario = useMemo(() => conversationData[level][0], [level]);

  const [messages, setMessages] = useState(() => [scenario.dialog[0]]);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reset when level changes
    setMessages([scenario.dialog[0]]);
    setCurrentDialogIndex(0);
  }, [scenario]);
  
  const handleResponse = (responseText: string) => {
    const userMessage = { speaker: 'user' as const, text: responseText };
    setMessages(prev => [...prev, userMessage]);

    const nextBotIndex = messages.filter(m => m.speaker === 'ai').length;
    const nextDialogEntry = scenario.dialog.find(d => d.speaker === 'ai' && scenario.dialog.indexOf(d) > scenario.dialog.indexOf(messages[messages.length-1]));
    
    if (nextDialogEntry) {
       setTimeout(() => {
        setMessages(prev => [...prev, nextDialogEntry]);
      }, 800);
    } else {
       // End of conversation
       setCurrentDialogIndex(-1);
    }
  };
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const currentOptions = messages[messages.length - 1]?.responses || [];
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">{scenario.title}</h1>
        <p className="text-lg text-text-secondary mt-2">{scenario.description}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6 min-h-[60vh] flex flex-col">
        <div className="flex-grow space-y-6 overflow-y-auto pr-4 mb-6">
          {messages.map((msg, index) => (
             <div key={index} className={`flex items-start gap-4 ${msg.speaker === 'user' ? 'justify-end' : ''}`}>
              {msg.speaker === 'ai' && (
                <div className="w-10 h-10 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center">
                  <Bot size={24} />
                </div>
              )}
              <div className={`max-w-lg p-4 rounded-2xl ${msg.speaker === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-secondary text-text-primary rounded-bl-none'}`}>
                <p>{msg.text}</p>
              </div>
              {msg.speaker === 'user' && (
                <div className="w-10 h-10 rounded-full bg-gray-200 text-text-secondary flex-shrink-0 flex items-center justify-center">
                  <User size={24} />
                </div>
              )}
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>

        {currentOptions.length > 0 && (
          <div className="mt-auto border-t pt-6">
            <p className="text-lg font-semibold text-center mb-4 text-text-primary">Choose your response:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {currentOptions.map((response, index) => (
                <button
                  key={index}
                  onClick={() => handleResponse(response)}
                  className="w-full text-left p-4 bg-secondary rounded-lg hover:bg-primary hover:text-white transition-colors"
                >
                  {response}
                </button>
              ))}
            </div>
          </div>
        )}

        {currentDialogIndex === -1 && (
           <div className="mt-6 text-center">
            <p className="text-lg font-bold text-green-600">Conversation Complete!</p>
            <button onClick={() => { setMessages([scenario.dialog[0]]); setCurrentDialogIndex(0); }} className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90">
              Practice Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConversationPractice;