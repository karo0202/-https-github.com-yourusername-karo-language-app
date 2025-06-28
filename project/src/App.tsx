import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import AIAssistant from './pages/AIAssistant';
import CommunityHub from './pages/CommunityHub';
import ConversationPractice from './pages/ConversationPractice';
import LevelSelection from './pages/LevelSelection';
import LiveTutoring from './pages/LiveTutoring';
import NotificationCenter from './pages/NotificationCenter';
import ProgressTracking from './pages/ProgressTracking';
import QuizSystem from './pages/QuizSystem';
import StudyPlanner from './pages/StudyPlanner';
import VocabularyBuilder from './pages/VocabularyBuilder';
import { LevelProvider } from './context/LevelContext';
import { EventProvider } from './context/EventContext';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  return (
    <LevelProvider>
      <ProgressProvider>
        <EventProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-grow container mx-auto p-6 lg:p-8">
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
        </EventProvider>
      </ProgressProvider>
    </LevelProvider>
  );
}

export default App;