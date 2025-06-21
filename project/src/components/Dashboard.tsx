import React from 'react';
import { BookOpen, MessageCircle, Trophy, TrendingUp, Clock, Target } from 'lucide-react';

interface DashboardProps {
  userProgress: {
    xp: number;
    streak: number;
    wordsLearned: number;
    conversationsCompleted: number;
    quizzesCompleted: number;
    totalLessons: number;
  };
  userLevel: string;
}

function Dashboard({ userProgress, userLevel }: DashboardProps) {
  const stats = [
    { label: 'Words Learned', value: userProgress.wordsLearned, icon: BookOpen, color: 'bg-blue-500' },
    { label: 'Conversations', value: userProgress.conversationsCompleted, icon: MessageCircle, color: 'bg-green-500' },
    { label: 'Quizzes Completed', value: userProgress.quizzesCompleted, icon: Trophy, color: 'bg-purple-500' },
    { label: 'Total Lessons', value: userProgress.totalLessons, icon: Target, color: 'bg-orange-500' }
  ];

  const recentActivities = [
    { activity: 'Completed "Daily Conversation" lesson', time: '2 hours ago', icon: MessageCircle },
    { activity: 'Learned 5 new vocabulary words', time: '4 hours ago', icon: BookOpen },
    { activity: 'Achieved 7-day learning streak!', time: '1 day ago', icon: Trophy },
    { activity: 'Completed Pronunciation Quiz', time: '2 days ago', icon: TrendingUp }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
        <h2 className="text-3xl font-bold mb-2">Welcome back!</h2>
        <p className="text-blue-100 mb-4">Ready to continue your English learning journey?</p>
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 px-4 py-2 rounded-lg">
            <span className="text-sm">Current Level: </span>
            <span className="font-semibold capitalize">{userLevel}</span>
          </div>
          <div className="bg-white/20 px-4 py-2 rounded-lg">
            <span className="text-sm">Today's Goal: </span>
            <span className="font-semibold">15 min left</span>
          </div>
        </div>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Today's Recommendations & Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Recommendations */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Today's Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors cursor-pointer">
              <div className="bg-blue-500 p-2 rounded-lg">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Practice Business Vocabulary</h4>
                <p className="text-sm text-gray-600">15 new words to learn</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors cursor-pointer">
              <div className="bg-green-500 p-2 rounded-lg">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Job Interview Conversation</h4>
                <p className="text-sm text-gray-600">Practice professional dialogue</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
              <div className="bg-purple-500 p-2 rounded-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Grammar Challenge Quiz</h4>
                <p className="text-sm text-gray-600">Test your knowledge</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gray-100 p-2 rounded-lg">
                    <Icon className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{activity.activity}</p>
                    <p className="text-xs text-gray-500 flex items-center mt-1">
                      <Clock className="w-3 h-3 mr-1" />
                      {activity.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;