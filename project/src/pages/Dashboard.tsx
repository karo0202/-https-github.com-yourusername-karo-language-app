import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BarChart2, BookOpen, MessageSquare, Users, GraduationCap, Calendar, Bot, Bell, Baby } from 'lucide-react';

const featureCards = [
  { title: "Kids Learning", icon: Baby, path: "/kids-learning", description: "Fun English lessons for children." },
  { title: "Study Planner", icon: Calendar, path: "/study-planner", description: "Organize your study schedule." },
  { title: "Community Hub", icon: Users, path: "/community-hub", description: "Connect with other learners." },
  { title: "Progress Tracking", icon: BarChart2, path: "/progress-tracking", description: "Track your learning progress." },
];

function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="p-8 bg-white rounded-2xl shadow-card">
        <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-text-secondary text-lg">Continue your learning journey and explore the features below.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featureCards.map((feature, index) => (
          <Link 
            to={feature.path} 
            key={index} 
            className="group bg-white p-6 rounded-2xl shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-lg mb-4">
              <feature.icon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold mb-1">{feature.title}</h2>
            <p className="text-text-secondary">{feature.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;