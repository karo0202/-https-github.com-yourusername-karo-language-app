import { useLevel } from '../context/LevelContext';
import { CheckCircle, Star, Target, Trophy } from 'lucide-react';

const levels = [
  {
    id: 'Beginner',
    title: 'Beginner',
    description: 'Start with basic vocabulary and simple conversations.',
    icon: Star,
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'Intermediate',
    title: 'Intermediate',
    description: 'Build confidence with more complex sentences.',
    icon: Target,
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'Advanced',
    title: 'Advanced',
    description: 'Master nuanced expressions and professional topics.',
    icon: Trophy,
    color: 'from-purple-500 to-purple-600',
  },
];

function LevelSelection() {
  const { level, setLevel } = useLevel();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Choose Your Learning Path</h1>
        <p className="text-lg text-gray-600">Select the level that best matches your current ability.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((levelOption) => (
          <button
            key={levelOption.id}
            onClick={() => setLevel(levelOption.id as 'Beginner' | 'Intermediate' | 'Advanced')}
            className={`bg-gradient-to-br ${levelOption.color} text-white p-8 rounded-2xl shadow-lg hover:scale-105 transform transition-transform duration-300 text-left relative`}
          >
            {level === levelOption.id && (
              <div className="absolute top-4 right-4 bg-white text-green-500 rounded-full p-1">
                <CheckCircle className="w-6 h-6" />
              </div>
            )}
            <levelOption.icon className="w-12 h-12 mb-4" />
            <h2 className="text-2xl font-bold mb-2">{levelOption.title}</h2>
            <p className="opacity-90">{levelOption.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default LevelSelection;