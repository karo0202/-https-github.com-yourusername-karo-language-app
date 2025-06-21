import React, { useState, useEffect } from 'react';
import { Brain, Mic, BookOpen, MessageCircle, Trophy, User, Settings, Bell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LevelSelection from './components/LevelSelection';
import VocabularyBuilder from './components/VocabularyBuilder';
import ConversationPractice from './components/ConversationPractice';
import QuizSystem from './components/QuizSystem';
import ProgressTracking from './components/ProgressTracking';
import AIAssistant from './components/AIAssistant';
import StudyPlanner from './components/StudyPlanner';
import LiveTutoring from './components/LiveTutoring';
import CommunityHub from './components/CommunityHub';
import NotificationCenter from './components/NotificationCenter';

function App() {
  const [currentView, setCurrentView] = useState('dashboard');
  const [userLevel, setUserLevel] = useState('beginner');
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userProgress, setUserProgress] = useState({
    xp: 1250,
    streak: 7,
    wordsLearned: 89,
    conversationsCompleted: 12,
    quizzesCompleted: 23,
    totalLessons: 156,
    weeklyGoal: 300,
    weeklyProgress: 180,
    achievements: ['First Steps', 'Word Master', 'Conversation Starter'],
    currentStreak: 7,
    longestStreak: 15,
    totalStudyTime: 2340, // minutes
    averageAccuracy: 87
  });

  const navigationItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BookOpen, color: 'text-blue-600' },
    { id: 'levels', label: 'Learning Path', icon: Trophy, color: 'text-purple-600' },
    { id: 'vocabulary', label: 'Vocabulary', icon: Brain, color: 'text-green-600' },
    { id: 'conversation', label: 'Practice', icon: MessageCircle, color: 'text-orange-600' },
    { id: 'quiz', label: 'Quizzes', icon: Mic, color: 'text-red-600' },
    { id: 'progress', label: 'Progress', icon: User, color: 'text-indigo-600' },
    { id: 'planner', label: 'Study Plan', icon: Settings, color: 'text-teal-600' },
    { id: 'tutoring', label: 'Live Tutoring', icon: Bell, color: 'text-pink-600' },
    { id: 'community', label: 'Community', icon: MessageCircle, color: 'text-cyan-600' }
  ];

  const renderCurrentView = () => {
    const viewComponents = {
      dashboard: <Dashboard userProgress={userProgress} userLevel={userLevel} />,
      levels: <LevelSelection currentLevel={userLevel} onLevelSelect={setUserLevel} />,
      vocabulary: <VocabularyBuilder userLevel={userLevel} />,
      conversation: <ConversationPractice userLevel={userLevel} />,
      quiz: <QuizSystem userLevel={userLevel} />,
      progress: <ProgressTracking userProgress={userProgress} />,
      planner: <StudyPlanner userProgress={userProgress} />,
      tutoring: <LiveTutoring userLevel={userLevel} />,
      community: <CommunityHub userLevel={userLevel} />
    };

    return viewComponents[currentView as keyof typeof viewComponents] || viewComponents.dashboard;
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900' 
        : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
    }`}>
      <Header 
        onToggleAssistant={() => setIsAssistantOpen(!isAssistantOpen)}
        onToggleNotifications={() => setShowNotifications(!showNotifications)}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
        userProgress={userProgress}
        darkMode={darkMode}
      />
      
      <div className="flex">
        {/* Enhanced Sidebar Navigation */}
        <motion.div 
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={`w-72 shadow-2xl h-[calc(100vh-80px)] fixed left-0 top-20 z-10 transition-colors duration-300 ${
            darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
          } border-r`}
        >
          <nav className="p-6">
            <div className="space-y-2">
              {navigationItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setCurrentView(item.id)}
                    className={`w-full flex items-center space-x-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                      currentView === item.id
                        ? `${darkMode ? 'bg-blue-600' : 'bg-gradient-to-r from-blue-600 to-purple-600'} text-white shadow-lg transform scale-105`
                        : `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-blue-50'} hover:text-blue-600 hover:scale-102`
                    }`}
                    whileHover={{ scale: currentView === item.id ? 1.05 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className={`w-6 h-6 transition-colors ${
                      currentView === item.id ? 'text-white' : item.color
                    }`} />
                    <span className="font-semibold text-sm">{item.label}</span>
                    {currentView === item.id && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="ml-auto w-2 h-2 bg-white rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>

            {/* Quick Stats in Sidebar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className={`mt-8 p-4 rounded-xl ${
                darkMode ? 'bg-gray-700' : 'bg-gradient-to-r from-blue-50 to-purple-50'
              }`}
            >
              <h4 className={`font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Today's Progress
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Study Time
                  </span>
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    22 min
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    XP Earned
                  </span>
                  <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    +85 XP
                  </span>
                </div>
                <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  <motion.div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '73%' }}
                    transition={{ duration: 1, delay: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          </nav>
        </motion.div>

        {/* Enhanced Main Content */}
        <div className="flex-1 ml-72 p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentView}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderCurrentView()}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Enhanced AI Assistant */}
        <AIAssistant 
          isOpen={isAssistantOpen} 
          onClose={() => setIsAssistantOpen(false)}
          darkMode={darkMode}
        />

        {/* Notification Center */}
        <NotificationCenter 
          isOpen={showNotifications}
          onClose={() => setShowNotifications(false)}
          darkMode={darkMode}
        />
      </div>

      {/* Floating Action Button for Quick Actions */}
      <motion.div
        className="fixed bottom-8 right-8 z-40"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className={`w-16 h-16 rounded-full shadow-2xl flex items-center justify-center ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
              : 'bg-gradient-to-r from-blue-600 to-purple-600'
          } text-white`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAssistantOpen(true)}
        >
          <Brain className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </div>
  );
}

export default App;