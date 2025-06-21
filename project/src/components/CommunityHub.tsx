import React, { useState } from 'react';
import { MessageCircle, Users, Trophy, ThumbsUp, Share, BookOpen, Globe, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface CommunityHubProps {
  userLevel: string;
}

function CommunityHub({ userLevel }: CommunityHubProps) {
  const [activeTab, setActiveTab] = useState('discussions');

  const discussions = [
    {
      id: 1,
      title: 'Best strategies for improving pronunciation?',
      author: 'Maria Santos',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50',
      level: 'Intermediate',
      replies: 23,
      likes: 45,
      time: '2 hours ago',
      category: 'Pronunciation',
      preview: 'I\'ve been struggling with the "th" sound and would love to hear what techniques have worked for others...'
    },
    {
      id: 2,
      title: 'Business English phrases that actually work',
      author: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50',
      level: 'Advanced',
      replies: 31,
      likes: 67,
      time: '4 hours ago',
      category: 'Business',
      preview: 'After 5 years in international business, here are the phrases that have served me well in meetings...'
    },
    {
      id: 3,
      title: 'Study buddy wanted for IELTS preparation',
      author: 'Priya Sharma',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50',
      level: 'Intermediate',
      replies: 12,
      likes: 28,
      time: '6 hours ago',
      category: 'Study Groups',
      preview: 'Looking for someone to practice speaking with. I\'m aiming for band 7 and would love mutual support...'
    }
  ];

  const studyGroups = [
    {
      id: 1,
      name: 'Business English Professionals',
      members: 234,
      description: 'For professionals looking to improve their business communication skills',
      category: 'Business',
      level: 'Intermediate-Advanced',
      activity: 'Very Active',
      nextEvent: 'Mock Interview Session - Tomorrow 7 PM EST'
    },
    {
      id: 2,
      name: 'IELTS Study Circle',
      members: 189,
      description: 'Collaborative preparation for IELTS exam with practice tests and tips',
      category: 'Test Prep',
      level: 'All Levels',
      activity: 'Active',
      nextEvent: 'Speaking Practice - Friday 6 PM EST'
    },
    {
      id: 3,
      name: 'Conversation Club',
      members: 156,
      description: 'Daily conversation practice in a supportive environment',
      category: 'Speaking',
      level: 'Beginner-Intermediate',
      activity: 'Very Active',
      nextEvent: 'Daily Chat - Every day 8 PM EST'
    }
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', xp: 12450, streak: 45, avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50' },
    { rank: 2, name: 'Sarah Johnson', xp: 11890, streak: 32, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50' },
    { rank: 3, name: 'Miguel Rodriguez', xp: 11234, streak: 28, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50' },
    { rank: 4, name: 'Emma Wilson', xp: 10567, streak: 25, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50' },
    { rank: 5, name: 'You', xp: 9890, streak: 22, avatar: null, isCurrentUser: true }
  ];

  const tabs = [
    { id: 'discussions', label: 'Discussions', icon: MessageCircle },
    { id: 'groups', label: 'Study Groups', icon: Users },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Community Hub</h2>
          <p className="text-gray-600 mt-2">Connect with fellow learners and share your English journey</p>
        </div>
        
        <motion.button
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Share className="w-5 h-5" />
          <span>Share Progress</span>
        </motion.button>
      </motion.div>

      {/* Community Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
      >
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Active Members</p>
              <p className="text-3xl font-bold">12,847</p>
            </div>
            <Users className="w-8 h-8 text-blue-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Study Groups</p>
              <p className="text-3xl font-bold">156</p>
            </div>
            <BookOpen className="w-8 h-8 text-green-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Discussions</p>
              <p className="text-3xl font-bold">2,341</p>
            </div>
            <MessageCircle className="w-8 h-8 text-purple-200" />
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Countries</p>
              <p className="text-3xl font-bold">89</p>
            </div>
            <Globe className="w-8 h-8 text-orange-200" />
          </div>
        </div>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl p-2 shadow-lg"
      >
        <div className="flex space-x-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-5 h-5" />
                <span>{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === 'discussions' && (
          <div className="space-y-6">
            {discussions.map((discussion, index) => (
              <motion.div
                key={discussion.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <img
                    src={discussion.avatar}
                    alt={discussion.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-bold text-gray-900 text-lg">{discussion.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        discussion.level === 'Beginner' ? 'bg-green-100 text-green-600' :
                        discussion.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-red-100 text-red-600'
                      }`}>
                        {discussion.level}
                      </span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                        {discussion.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{discussion.preview}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>by {discussion.author}</span>
                        <span>{discussion.time}</span>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <ThumbsUp className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{discussion.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">{discussion.replies}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'groups' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {studyGroups.map((group, index) => (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-200"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">{group.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{group.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    group.activity === 'Very Active' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {group.activity}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Members:</span>
                    <span className="font-medium">{group.members}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Level:</span>
                    <span className="font-medium">{group.level}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">{group.category}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-blue-800">
                    <strong>Next Event:</strong> {group.nextEvent}
                  </p>
                </div>

                <motion.button
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Join Group
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Leaderboard</h3>
            
            <div className="space-y-4">
              {leaderboard.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center space-x-4 p-4 rounded-lg ${
                    user.isCurrentUser 
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200' 
                      : 'bg-gray-50'
                  }`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full font-bold text-sm ${
                    user.rank === 1 ? 'bg-yellow-500 text-white' :
                    user.rank === 2 ? 'bg-gray-400 text-white' :
                    user.rank === 3 ? 'bg-orange-500 text-white' :
                    'bg-gray-200 text-gray-600'
                  }`}>
                    {user.rank}
                  </div>

                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                      You
                    </div>
                  )}

                  <div className="flex-1">
                    <h4 className={`font-medium ${user.isCurrentUser ? 'text-blue-900' : 'text-gray-900'}`}>
                      {user.name}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>{user.xp.toLocaleString()} XP</span>
                      <div className="flex items-center space-x-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>{user.streak} day streak</span>
                      </div>
                    </div>
                  </div>

                  {user.rank <= 3 && (
                    <Trophy className={`w-6 h-6 ${
                      user.rank === 1 ? 'text-yellow-500' :
                      user.rank === 2 ? 'text-gray-400' :
                      'text-orange-500'
                    }`} />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}

export default CommunityHub;