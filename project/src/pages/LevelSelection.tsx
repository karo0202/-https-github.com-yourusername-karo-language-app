import { useLevel } from '../context/LevelContext';
import { Zap, Shield, BarChart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

type Level = 'Beginner' | 'Intermediate' | 'Advanced';

const levels: { name: Level, icon: React.ElementType, description: string }[] = [
  { name: 'Beginner', icon: Zap, description: 'Start with the basics. Learn essential vocabulary and grammar.' },
  { name: 'Intermediate', icon: Shield, description: 'Build on your foundation. Tackle more complex sentences.' },
  { name: 'Advanced', icon: BarChart, description: 'Master the language. Engage in nuanced conversations.' },
];

function LevelSelection() {
  const { setLevel } = useLevel();
  const navigate = useNavigate();

  const handleLevelSelect = (level: Level) => {
    setLevel(level);
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Choose Your Level</h1>
        <p className="text-lg text-text-secondary mt-2">Select your current proficiency to personalize your learning experience.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((level) => (
          <div 
            key={level.name} 
            onClick={() => handleLevelSelect(level.name)}
            className="group bg-white p-8 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mx-auto mb-6">
              <level.icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-2">{level.name}</h2>
            <p className="text-text-secondary mb-6">{level.description}</p>
            <span className="font-semibold text-primary group-hover:underline">
              Select Level
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LevelSelection;