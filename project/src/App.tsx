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
import { EventProvider } from './context/EventContext';
import { ProgressProvider } from './context/ProgressContext';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <LevelProvider>
      <ProgressProvider>
        <EventProvider>
          <Router basename="/karo-.language-.l">
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
          </Router>
        </EventProvider>
      </ProgressProvider>
    </LevelProvider>
  );
}

export default App;