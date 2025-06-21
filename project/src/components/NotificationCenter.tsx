import React from 'react';
import { X, Bell, CheckCircle, Clock, Trophy, MessageCircle, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationCenterProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
}

function NotificationCenter({ isOpen, onClose, darkMode }: NotificationCenterProps) {
  const notifications = [
    {
      id: 1,
      type: 'achievement',
      title: 'New Achievement Unlocked!',
      message: 'You\'ve completed your 7-day learning streak!',
      time: '5 minutes ago',
      icon: Trophy,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-50',
      unread: true
    },
    {
      id: 2,
      type: 'reminder',
      title: 'Study Session Reminder',
      message: 'Your conversation practice with Sarah is starting in 15 minutes.',
      time: '15 minutes ago',
      icon: Clock,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
      unread: true
    },
    {
      id: 3,
      type: 'community',
      title: 'New Reply in Discussion',
      message: 'Maria Santos replied to your question about pronunciation.',
      time: '1 hour ago',
      icon: MessageCircle,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
      unread: false
    },
    {
      id: 4,
      type: 'lesson',
      title: 'Lesson Complete',
      message: 'Great job! You\'ve completed "Business Email Writing" lesson.',
      time: '2 hours ago',
      icon: CheckCircle,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
      unread: false
    },
    {
      id: 5,
      type: 'schedule',
      title: 'Weekly Goal Update',
      message: 'You\'re 80% towards your weekly XP goal. Keep it up!',
      time: '1 day ago',
      icon: Calendar,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
      unread: false
    }
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={`fixed right-8 top-24 w-96 max-h-[600px] rounded-2xl shadow-2xl border z-50 ${
          darkMode 
            ? 'bg-gray-800 border-gray-700' 
            : 'bg-white border-gray-200'
        }`}
      >
        {/* Header */}
        <div className={`p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${
                darkMode ? 'bg-blue-600' : 'bg-blue-100'
              }`}>
                <Bell className={`w-5 h-5 ${
                  darkMode ? 'text-white' : 'text-blue-600'
                }`} />
              </div>
              <div>
                <h3 className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Notifications
                </h3>
                <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {notifications.filter(n => n.unread).length} unread
                </p>
              </div>
            </div>
            <motion.button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${
                darkMode 
                  ? 'hover:bg-gray-700 text-gray-400' 
                  : 'hover:bg-gray-100 text-gray-600'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-h-96 overflow-y-auto">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <motion.div
                key={notification.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`p-4 border-b transition-colors cursor-pointer ${
                  darkMode 
                    ? 'border-gray-700 hover:bg-gray-700' 
                    : 'border-gray-100 hover:bg-gray-50'
                } ${notification.unread ? (darkMode ? 'bg-gray-750' : 'bg-blue-25') : ''}`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-3">
                  <div className={`p-2 rounded-lg ${
                    darkMode ? 'bg-gray-600' : notification.bgColor
                  }`}>
                    <Icon className={`w-4 h-4 ${notification.color}`} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className={`font-medium text-sm ${
                        darkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {notification.title}
                      </h4>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-500 rounded-full" />
                      )}
                    </div>
                    
                    <p className={`text-sm ${
                      darkMode ? 'text-gray-300' : 'text-gray-600'
                    } mb-2`}>
                      {notification.message}
                    </p>
                    
                    <p className={`text-xs ${
                      darkMode ? 'text-gray-500' : 'text-gray-500'
                    }`}>
                      {notification.time}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center justify-between">
            <motion.button
              className={`text-sm font-medium ${
                darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              Mark all as read
            </motion.button>
            
            <motion.button
              className={`text-sm font-medium ${
                darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-800'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              View all
            </motion.button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default NotificationCenter;