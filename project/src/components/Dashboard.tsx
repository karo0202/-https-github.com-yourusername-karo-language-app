import { Link } from 'react-router-dom';
import { BookOpen, Brain, MessageCircle, Trophy, Users, Calendar, BarChart2 } from 'lucide-react';
import { useLevel } from '../context/LevelContext';

const featureCards = [
  { path: '/level-selection', title: 'Select Your Level', description: 'Choose a difficulty that suits you.', icon: Trophy, color: 'from-blue-500 to-blue-600' },
  { path: '/vocabulary-builder', title: 'Vocabulary Builder', description: 'Learn and master new words.', icon: BookOpen, color: 'from-green-500 to-green-600' },
  { path: '/quiz', title: 'Take a Quiz', description: 'Test your knowledge and skills.', icon: Brain, color: 'from-purple-500 to-purple-600' },
  { path: '/conversation-practice', title: 'Conversation Practice', description: 'Hone your speaking abilities.', icon: MessageCircle, color: 'from-orange-500 to-orange-600' },
  { path: '/study-planner', title: 'Study Planner', description: 'Organize your learning schedule.', icon: Calendar, color: 'from-teal-500 to-teal-600' },
  { path: '/progress-tracking', title: 'Track Progress', description: 'Monitor your achievements.', icon: BarChart2, color: 'from-indigo-500 to-indigo-600' },
  { path: '/community-hub', title: 'Community Hub', description: 'Connect with other learners.', icon: Users, color: 'from-pink-500 to-pink-600' },
];

function Dashboard() {
  const { level } = useLevel();

  return (
    <div>
      <div className="mb-8 p-6 bg-white rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back!</h1>
        <p className="text-gray-600">
          Your current learning level is set to <span className="font-bold text-blue-600">{level}</span>.
        </p>
        <p className="text-gray-600">Let's continue your language learning journey.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featureCards.map((card) => (
          <Link to={card.path} key={card.path} className={`bg-gradient-to-br ${card.color} text-white p-6 rounded-xl shadow-lg hover:scale-105 transform transition-transform duration-300 flex flex-col justify-between`}>
            <div>
              <card.icon className="w-12 h-12 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{card.title}</h2>
              <p className="opacity-90">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;