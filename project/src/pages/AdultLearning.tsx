import React from 'react';
import { useNavigate } from 'react-router-dom';

const levels = [
  {
    key: 'level-1',
    title: 'Beginner (A1–A2)',
    goal: 'Build foundational English fluency in vocabulary, grammar, and conversation.',
    color: 'bg-blue-100',
    description: 'Start speaking, understanding, and using English in daily life.'
  },
  {
    key: 'level-2',
    title: 'Intermediate (B1–B2)',
    goal: 'Improve confidence in real-life conversations, grammar, reading, and writing.',
    color: 'bg-orange-100',
    description: 'Handle travel, work, and social situations with ease.'
  },
  {
    key: 'level-3',
    title: 'Advanced (C1–C2)',
    goal: 'Reach professional, academic, and fluent-level English for work, study, or global travel.',
    color: 'bg-red-100',
    description: 'Master English for career, exams, and global opportunities.'
  }
];

const AdultLearning: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary mb-6 text-center">Adult English Learning</h1>
      <p className="text-lg text-gray-700 mb-10 text-center">Choose your level to unlock personalized lessons, premium features, and real progress.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map(level => (
          <div key={level.key} className={`rounded-xl shadow-lg p-6 flex flex-col items-center ${level.color}`}>
            <h2 className="text-2xl font-bold mb-2">{level.title}</h2>
            <p className="text-gray-700 mb-4 text-center">{level.goal}</p>
            <p className="text-gray-500 mb-6 text-center">{level.description}</p>
            <button
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
              onClick={() => navigate(`/adult-learning/${level.key}`)}
            >
              Start
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdultLearning; 