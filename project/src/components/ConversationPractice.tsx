import React, { useState } from 'react';
import { conversationData, Scenario, DialogLine } from '../data/conversationData';

const level = 'Beginner'; // You can make this dynamic if needed

const ConversationPractice: React.FC = () => {
  const scenarios = conversationData[level];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedScenario: Scenario = scenarios[selectedIndex];

  return (
    <div className="max-w-3xl mx-auto mt-8 p-6 bg-white rounded-xl shadow">
      <h2 className="text-3xl font-bold mb-2 text-center">Conversation Practice</h2>
      <div className="flex flex-col items-center mb-4">
        <select
          className="border rounded px-4 py-2 mb-2 text-lg"
          value={selectedIndex}
          onChange={e => setSelectedIndex(Number(e.target.value))}
        >
          {scenarios.map((scenario, idx) => (
            <option value={idx} key={scenario.title}>{scenario.title}</option>
          ))}
        </select>
        <p className="text-gray-600 text-center">{selectedScenario.description}</p>
      </div>
      <div className="space-y-4 mt-6">
        {selectedScenario.dialog.map((line: DialogLine, idx: number) => (
          <div
            key={idx}
            className={`flex ${line.speaker === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[70%] text-base shadow ${
                line.speaker === 'user'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              {line.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationPractice; 