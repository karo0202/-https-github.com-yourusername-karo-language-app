import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AIAssistant from './components/AIAssistant';
import CommunityHub from './components/CommunityHub';
import ConversationPractice from './components/ConversationPractice';
import LevelSelection from './components/LevelSelection';
import LiveTutoring from './components/LiveTutoring';
import NotificationCenter from './components/NotificationCenter';
import ProgressTracking from './components/ProgressTracking';
import QuizSystem from './components/QuizSystem';
import StudyPlanner from './components/StudyPlanner';
import VocabularyBuilder from './components/VocabularyBuilder';
import { LevelProvider } from './context/LevelContext';

function App() {
  return (
    <LevelProvider>
      <div className="min-h-screen bg-gray-100 font-sans">
        <Header />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/ai-assistant" element={<AIAssistant />} />
            <Route path="/community-hub" element={<CommunityHub />} />
            <Route path="/conversation-practice" element={<ConversationPractice />} />
            <Route path="/level-selection" element={<LevelSelection />} />
            <Route path="/live-tutoring" element={<LiveTutoring />} />
            <Route path="/notification-center" element={<NotificationCenter />} />
            <Route path="/progress-tracking" element={<ProgressTracking />} />
            <Route path="/quiz" element={<QuizSystem />} />
            <Route path="/study-planner" element={<StudyPlanner />} />
            <Route path="/vocabulary-builder" element={<VocabularyBuilder />} />
          </Routes>
        </main>
      </div>
    </LevelProvider>
  );
}

export default App;