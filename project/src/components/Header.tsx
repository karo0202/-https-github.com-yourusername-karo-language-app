import React from 'react';
import { Bot, Flame, Star, Zap, Bell, Moon, Sun, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { BookOpen, Brain, MessageCircle, Trophy, Users, Calendar, BarChart2 } from 'lucide-react';

const navigationItems = [
  { path: '/', label: 'Dashboard', icon: BarChart2 },
  { path: '/level-selection', label: 'Levels', icon: Trophy },
  { path: '/vocabulary-builder', label: 'Vocabulary', icon: BookOpen },
  { path: '/quiz', label: 'Quiz', icon: Brain },
  { path: '/conversation-practice', label: 'Practice', icon: MessageCircle },
  { path: '/study-planner', label: 'Planner', icon: Calendar },
  { path: '/community-hub', label: 'Community', icon: Users },
];

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">
            <NavLink to="/">Karo</NavLink>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
          <div className="flex items-center space-x-4">
             <NavLink to="/notification-center" className="text-gray-600 hover:text-blue-600 p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Bell className="w-6 h-6" />
            </NavLink>
            {/* Add user profile/settings icon here later */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;