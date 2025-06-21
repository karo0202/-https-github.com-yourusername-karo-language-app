import React from 'react';
import { Bot, Flame, Star, Zap, Bell, Moon, Sun, Settings, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { BookOpen, Brain, MessageCircle, Trophy, Users, Calendar, BarChart2, MessageSquare, GraduationCap } from 'lucide-react';

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
  const navLinkClasses = "flex items-center px-4 py-2 rounded-lg text-text-secondary hover:bg-secondary hover:text-primary transition-colors";
  const activeNavLinkClasses = "bg-primary text-white";

  return (
    <header className="bg-white/70 backdrop-blur-lg sticky top-0 z-50 border-b border-gray-200/80">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <NavLink to="/" className="text-3xl font-bold font-display text-primary">
          Karo
        </NavLink>
        <div className="hidden md:flex items-center space-x-2">
          <NavLink to="/" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`} end>
            <BarChart2 className="w-5 h-5 mr-2" />
            Dashboard
          </NavLink>
          <NavLink to="/levels" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
            <GraduationCap className="w-5 h-5 mr-2" />
            Levels
          </NavLink>
          <NavLink to="/vocabulary" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
            <BookOpen className="w-5 h-5 mr-2" />
            Vocabulary
          </NavLink>
          <NavLink to="/quiz" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
            <MessageSquare className="w-5 h-5 mr-2" />
            Quiz
          </NavLink>
          <NavLink to="/practice" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
            <Bot className="w-5 h-5 mr-2" />
            Practice
          </NavLink>
          <NavLink to="/planner" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
            <Calendar className="w-5 h-5 mr-2" />
            Planner
          </NavLink>
          <NavLink to="/community" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}>
            <Users className="w-5 h-5 mr-2" />
            Community
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <button className="text-text-secondary hover:text-primary transition-colors">
            <Bell className="w-6 h-6" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;