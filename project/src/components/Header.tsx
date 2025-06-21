import React from 'react';
import { Bot, Flame, Star, Zap, Bell, Moon, Sun, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeaderProps {
  onToggleAssistant: () => void;
  onToggleNotifications: () => void;
  onToggleDarkMode: () => void;
  darkMode: boolean;
  userProgress: {
    xp: number;
    streak: number;
    wordsLearned: number;
    weeklyGoal: number;
    weeklyProgress: number;
  };
}

function Header({ onToggleAssistant, onToggleNotifications, onToggleDarkMode, darkMode, userProgress }: HeaderProps) {
  const progressPercentage = (userProgress.weeklyProgress / userProgress.weeklyGoal) * 100;

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`shadow-xl border-b-2 h-20 fixed w-full top-0 z-50 transition-colors duration-300 ${
        darkMode 
          ? 'bg-gray-800 border-gray-700 backdrop-blur-lg bg-opacity-95' 
          : 'bg-white/95 border-blue-100 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Enhanced Logo */}
        <motion.div 
          className="flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 p-3 rounded-2xl shadow-lg">
              <Bot className="w-8 h-8 text-white" />
            </div>
            <motion.div
              className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
          <div>
            <h1 className={`text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent`}>
              LinguaAI
            </h1>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Master English with AI
            </p>
          </div>
        </motion.div>

        {/* Enhanced User Stats */}
        <div className="flex items-center space-x-6">
          {/* Weekly Progress */}
          <motion.div 
            className={`flex items-center space-x-3 px-4 py-2 rounded-xl ${
              darkMode ? 'bg-gray-700' : 'bg-blue-50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative w-12 h-12">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  className={darkMode ? "stroke-gray-600" : "stroke-gray-200"}
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <motion.path
                  className="stroke-blue-500"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  initial={{ strokeDasharray: "0 100" }}
                  animate={{ strokeDasharray: `${progressPercentage} 100` }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className={`text-xs font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {Math.round(progressPercentage)}%
                </span>
              </div>
            </div>
            <div>
              <p className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Weekly Goal
              </p>
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {userProgress.weeklyProgress}/{userProgress.weeklyGoal} XP
              </p>
            </div>
          </motion.div>

          {/* Streak */}
          <motion.div 
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
              darkMode ? 'bg-orange-900/30' : 'bg-orange-50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Flame className="w-6 h-6 text-orange-500" />
            </motion.div>
            <div>
              <span className={`font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>
                {userProgress.streak} day streak
              </span>
            </div>
          </motion.div>
          
          {/* XP */}
          <motion.div 
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl ${
              darkMode ? 'bg-yellow-900/30' : 'bg-yellow-50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            >
              <Star className="w-6 h-6 text-yellow-500" />
            </motion.div>
            <div>
              <span className={`font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>
                {userProgress.xp.toLocaleString()} XP
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <motion.button
              onClick={onToggleDarkMode}
              className={`p-3 rounded-xl transition-colors ${
                darkMode 
                  ? 'bg-gray-700 text-yellow-400 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </motion.button>

            {/* Notifications */}
            <motion.button
              onClick={onToggleNotifications}
              className={`relative p-3 rounded-xl transition-colors ${
                darkMode 
                  ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' 
                  : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Bell className="w-5 h-5" />
              <motion.div
                className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.button>

            {/* AI Assistant */}
            <motion.button
              onClick={onToggleAssistant}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl hover:shadow-xl transform transition-all duration-200 flex items-center space-x-2"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-5 h-5" />
              <span className="font-semibold">AI Assistant</span>
            </motion.button>

            {/* User Profile */}
            <motion.button
              className={`p-3 rounded-xl transition-colors ${
                darkMode 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <User className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Header;