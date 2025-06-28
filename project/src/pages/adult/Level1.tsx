import React, { useState } from 'react';
import { Lock, CheckCircle, Mic, BookOpen, MessageSquare, Image, Repeat, Download, Timer, Calendar, Globe, Brain, User } from 'lucide-react';
import PremiumModal from '../../components/adult/PremiumModal';
import { useUser } from '../../context/UserContext';

const features = [
  { title: 'AI Speaking Coach', premium: true, icon: <Mic className="w-6 h-6" />, description: 'Practice speaking and get instant AI feedback.', benefits: ['Real-time pronunciation feedback', 'Word-by-word analysis', 'Personalized tips'] },
  { title: 'Daily Personal Study Plan', premium: true, icon: <Calendar className="w-6 h-6" />, description: 'Get a daily plan based on your mistakes and time.', benefits: ['Adaptive study plan', 'Focus on weak areas', 'Fits your schedule'] },
  { title: 'Voice-enabled Chatbot', premium: false, icon: <MessageSquare className="w-6 h-6" />, description: '', benefits: [] },
  { title: 'Visual Stories Mode', premium: true, icon: <Image className="w-6 h-6" />, description: 'Learn with real-life scenarios, images, and audio.', benefits: ['Visual comic stories', 'Audio + subtitles', 'Real-life English'] },
  { title: 'Smart Flashcards (SRS)', premium: false, icon: <Repeat className="w-6 h-6" />, description: '', benefits: [] },
  { title: 'Offline Access & Packs', premium: true, icon: <Download className="w-6 h-6" />, description: 'Download vocabulary and exercises for offline learning.', benefits: ['Travel-friendly', 'No internet needed', 'Printable packs'] },
  { title: 'Learn in 5 Minutes', premium: false, icon: <Timer className="w-6 h-6" />, description: '', benefits: [] },
  { title: 'Progress Calendar + Streaks', premium: false, icon: <Calendar className="w-6 h-6" />, description: '', benefits: [] },
  { title: 'Dynamic Translation Toggle', premium: false, icon: <Globe className="w-6 h-6" />, description: '', benefits: [] },
  { title: 'Grammar AI Assistant', premium: true, icon: <Brain className="w-6 h-6" />, description: 'Ask grammar questions and get instant answers.', benefits: ['AI grammar help', 'Examples and explanations', 'Ask anything'] },
];

const goals = ['Travel', 'Work', 'IELTS', 'Everyday English'];

const Level1: React.FC = () => {
  const { user, loading, setGoal, upgradeToPremium } = useUser();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalFeature, setModalFeature] = useState({ feature: '', description: '', benefits: [] });

  const handleFeatureClick = (feature: any) => {
    if (feature.premium && !user?.premium) {
      setModalFeature({ feature: feature.title, description: feature.description, benefits: feature.benefits });
      setModalOpen(true);
    }
  };

  if (loading || !user) return <div className="text-center py-16 text-lg text-gray-500">Loading...</div>;

  return (
    <div className="max-w-5xl mx-auto p-8">
      {/* Avatar and Goal Customization */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-8">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-4xl">{user.avatar}</div>
          <div>
            <div className="font-bold text-lg">Welcome back, {user.name}!</div>
            <div className="text-gray-600">Your goal: <span className="font-semibold text-primary">{user.goal}</span></div>
          </div>
        </div>
        <div>
          <label className="mr-2 font-semibold">Set your goal:</label>
          <select
            className="border rounded px-3 py-2"
            value={user.goal}
            onChange={e => setGoal(e.target.value)}
          >
            {goals.map(goal => <option key={goal} value={goal}>{goal}</option>)}
          </select>
        </div>
      </div>
      {/* Progress Bar & Analytics */}
      <div className="mb-8">
        <div className="h-4 bg-gray-200 rounded-full overflow-hidden mb-2">
          <div className="h-4 bg-primary rounded-full" style={{ width: `${user.progress}%` }}></div>
        </div>
        <div className="flex justify-between text-sm text-gray-600">
          <span>Progress: {user.progress}%</span>
          <span>Streak: {user.streak} days 🔥</span>
          <span>Words mastered: {user.wordsMastered}</span>
        </div>
      </div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-primary mb-2">Beginner (A1–A2)</h1>
        <p className="text-lg text-gray-700 mb-2">Goal: Build foundational English fluency in vocabulary, grammar, and conversation.</p>
        <p className="text-gray-500">Unlock premium features for a complete learning experience!</p>
        {user.premium && <div className="mt-2 text-green-600 font-bold">Premium Unlocked!</div>}
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Skill Tracks</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <div className="bg-blue-100 px-4 py-2 rounded-lg font-semibold">Speaking</div>
          <div className="bg-green-100 px-4 py-2 rounded-lg font-semibold">Listening</div>
          <div className="bg-yellow-100 px-4 py-2 rounded-lg font-semibold">Grammar</div>
          <div className="bg-purple-100 px-4 py-2 rounded-lg font-semibold">Vocabulary</div>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-6 shadow flex flex-col items-center cursor-pointer ${feature.premium ? (user.premium ? 'bg-primary/10' : 'bg-gray-100 hover:bg-gray-200') : 'bg-white'}`}
              onClick={() => handleFeatureClick(feature)}
            >
              <div className="mb-2">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-center">{feature.title}</h3>
              {feature.premium ? (
                <div className={`flex items-center font-semibold ${user.premium ? 'text-primary' : 'text-primary'}`}>
                  <Lock className="w-4 h-4 mr-1" /> {user.premium ? 'Premium Unlocked' : 'Premium'}
                </div>
              ) : (
                <div className="flex items-center text-green-600 font-semibold"><CheckCircle className="w-4 h-4 mr-1" /> Free</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <PremiumModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        feature={modalFeature.feature}
        description={modalFeature.description}
        benefits={modalFeature.benefits}
        upgradeAction={async () => { await upgradeToPremium(); setModalOpen(false); }}
        isPremium={user.premium}
      />
    </div>
  );
};

export default Level1; 