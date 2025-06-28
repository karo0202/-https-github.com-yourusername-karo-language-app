import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ErrorBoundary from './components/ErrorBoundary';
import Dashboard from './pages/Dashboard';
import AIAssistant from './pages/AIAssistant';
import CommunityHub from './pages/CommunityHub';
import LiveTutoring from './pages/LiveTutoring';
import NotificationCenter from './pages/NotificationCenter';
import ProgressTracking from './pages/ProgressTracking';
import StudyPlanner from './pages/StudyPlanner';
import KidsLearning from './pages/KidsLearning';
import { EventProvider } from './context/EventContext';
import { ProgressProvider } from './context/ProgressContext';

function App() {
  return (
    <ErrorBoundary>
      <ProgressProvider>
        <EventProvider>
          <div className="min-h-screen flex flex-col bg-background">
            <Header />
            <main className="flex-grow container mx-auto p-6 lg:p-8">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/ai-assistant" element={<AIAssistant />} />
                <Route path="/community-hub" element={<CommunityHub />} />
                <Route path="/live-tutoring" element={<LiveTutoring />} />
                <Route path="/notification-center" element={<NotificationCenter />} />
                <Route path="/progress-tracking" element={<ProgressTracking />} />
                <Route path="/study-planner" element={<StudyPlanner />} />
                <Route path="/kids-learning" element={<KidsLearning />} />
              </Routes>
            </main>
            </div>
        </EventProvider>
      </ProgressProvider>
    </ErrorBoundary>
  );
}

export default App;