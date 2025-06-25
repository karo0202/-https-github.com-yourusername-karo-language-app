import React from 'react';
import { useState, useMemo, useEffect, useRef } from 'react';
import { useLevel } from '../context/LevelContext';
import { conversationData } from '../data/conversationData';
import { Bot, User, CheckCircle, Volume2 } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

function ConversationPractice() {
  const { level } = useLevel();
  const scenarios = conversationData[level];
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const scenario = useMemo(() => scenarios[selectedScenarioIndex], [scenarios, selectedScenarioIndex]);

  const [messages, setMessages] = useState(() => [scenario.dialog[0]]);
  const [currentDialogIndex, setCurrentDialogIndex] = useState(0);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const { completedScenarios, markScenarioComplete } = useProgress();
  const isCompleted = completedScenarios[level].has(selectedScenarioIndex);

  // Voice feature: get American English voice
  const getAmericanVoice = () => {
    if (!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices();
    // Prefer Google US English or any en-US
    return (
      voices.find(v => v.name.includes('Google US English')) ||
      voices.find(v => v.lang === 'en-US') ||
      voices.find(v => v.lang.startsWith('en')) ||
      null
    );
  };

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      const voice = getAmericanVoice();
      if (voice) utterance.voice = voice;
      utterance.lang = 'en-US';
      utterance.rate = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    // Reset when level or scenario changes
    setMessages([scenario.dialog[0]]);
    setCurrentDialogIndex(0);
  }, [scenario]);
  
  const handleResponse = (responseText: string) => {
    const userMessage = { speaker: 'user' as const, text: responseText };
    setMessages(prev => [...prev, userMessage]);

    const nextDialogEntry = scenario.dialog.find(d => d.speaker === 'ai' && scenario.dialog.indexOf(d) > scenario.dialog.indexOf(messages[messages.length-1]));
    
    if (nextDialogEntry) {
       setTimeout(() => {
        setMessages(prev => [...prev, nextDialogEntry]);
      }, 800);
    } else {
       // End of conversation
       setCurrentDialogIndex(-1);
       if (!isCompleted) {
         markScenarioComplete(level, selectedScenarioIndex);
       }
    }
  };
  
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const currentOptions = messages[messages.length - 1]?.responses || [];
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Conversation Practice</h1>
        <div className="mt-4 flex justify-center">
          <select
            className="p-2 rounded-lg border border-gray-300 text-lg"
            value={selectedScenarioIndex}
            onChange={e => setSelectedScenarioIndex(Number(e.target.value))}
          >
            {scenarios.map((sc, idx) => (
              <option key={idx} value={idx}>
                {sc.title} {completedScenarios[level].has(idx) ? '✓' : ''}
              </option>
            ))}
          </select>
        </div>
        <p className="text-lg text-text-secondary mt-2">{scenario.description}</p>
        {isCompleted && (
          <div className="flex items-center justify-center mt-2 text-green-600 gap-2">
            <CheckCircle className="inline w-5 h-5" />
            <span className="font-semibold">Completed</span>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl shadow-card p-6 min-h-[60vh] flex flex-col">
        <div className="flex-grow space-y-6 overflow-y-auto pr-4 mb-6">
          {messages.map((msg, index) => (
             <div key={index} className={`flex items-start gap-4 ${msg.speaker === 'user' ? 'justify-end' : ''}`}>
              {msg.speaker === 'ai' && (
                <div className="w-10 h-10 rounded-full bg-primary text-white flex-shrink-0 flex items-center justify-center relative">
                  <Bot size={24} />
                  <button
                    onClick={() => handleSpeak(msg.text)}
                    className="absolute -right-3 -bottom-3 bg-white rounded-full p-1 shadow hover:bg-primary hover:text-white transition-colors"
                    title="Listen"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>
              )}
              <div className={`max-w-lg p-4 rounded-2xl ${msg.speaker === 'user' ? 'bg-primary text-white rounded-br-none' : 'bg-secondary text-text-primary rounded-bl-none'}`}>
                <p>{msg.text}</p>
              </div>
              {msg.speaker === 'user' && (
                <div className="w-10 h-10 rounded-full bg-gray-200 text-text-secondary flex-shrink-0 flex items-center justify-center relative">
                  <User size={24} />
                  <button
                    onClick={() => handleSpeak(msg.text)}
                    className="absolute -right-3 -bottom-3 bg-white rounded-full p-1 shadow hover:bg-primary hover:text-white transition-colors"
                    title="Listen"
                  >
                    <Volume2 size={18} />
                  </button>
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
            <p className="text-lg font-bold text-green-600 flex items-center justify-center gap-2">
              <CheckCircle className="inline w-5 h-5" /> Scenario Complete!
            </p>
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