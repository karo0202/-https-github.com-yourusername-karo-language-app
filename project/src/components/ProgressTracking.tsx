import React from 'react';
import { TrendingUp, Calendar, Target, Award, BookOpen, MessageCircle, Trophy, Flame } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

interface ProgressTrackingProps {
  userProgress: {
    xp: number;
    streak: number;
    wordsLearned: number;
    conversationsCompleted: number;
    quizzesCompleted: number;
    totalLessons: number;
  };
}

function ProgressTracking({ userProgress }: ProgressTrackingProps) {
  const weeklyProgress = [
    { day: 'Mon', xp: 120, lessons: 3, words: 8 },
    { day: 'Tue', xp: 150, lessons: 4, words: 12 },
    { day: 'Wed', xp: 90, lessons: 2, words: 6 },
    { day: 'Thu', xp: 200, lessons: 5, words: 15 },
    { day: 'Fri', xp: 180, lessons: 4, words: 11 },
    { day: 'Sat', xp: 250, lessons: 6, words: 18 },
    { day: 'Sun', xp: 160, lessons: 3, words: 9 }
  ];

  const skillsData = [
    { skill: 'Vocabulary', progress: 85, color: '#3B82F6' },
    { skill: 'Grammar', progress: 72, color: '#10B981' },
    { skill: 'Pronunciation', progress: 68, color: '#F59E0B' },
    { skill: 'Listening', progress: 79, color: '#8B5CF6' },
    { skill: 'Speaking', progress: 63, color: '#EF4444' }
  ];

  const achievementsData = [
    { name: 'Vocabulary', value: 35, color: '#3B82F6' },
    { name: 'Grammar', value: 25, color: '#10B981' },
    { name: 'Speaking', value: 20, color: '#F59E0B' },
    { name: 'Listening', value: 20, color: '#8B5CF6' }
  ];

  const achievements = [
    { title: 'Word Master', description: 'Learned 100 new words', icon: BookOpen, earned: true, date: '3 days ago' },
    { title: 'Conversation Starter', description: 'Completed 10 conversations', icon: MessageCircle, earned: true, date: '1 week ago' },
    { title: 'Quiz Champion', description: 'Perfect score on 5 quizzes', icon: Trophy, earned: false, progress: 3 },
    { title: 'Streak Master', description: 'Maintain 30-day learning streak', icon: Flame, earned: false, progress: 7 }
  ];

  const goals = [
    { title: 'Daily Learning Goal', target: 30, current: 22, unit: 'minutes', color: 'bg-blue-500' },
    { title: 'Weekly XP Target', target: 1000, current: 850, unit: 'XP', color: 'bg-green-500' },
    { title: 'Monthly Vocabulary', target: 100, current: 67, unit: 'words', color: 'bg-purple-500' },
    { title: 'Conversation Practice', target: 20, current: 12, unit: 'sessions', color: 'bg-orange-500' }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Progress Tracking</h2>
        <p className="text-gray-600 mt-2">Monitor your learning journey with detailed analytics and insights</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm">Total XP</p>
              <p className="text-3xl font-bold">{userProgress.xp}</p>
            </div>
            <TrendingUp className="w-8 h-8 text-blue-200" />
          </div>
          <div className="mt-4 text-blue-100 text-sm">
            +180 XP this week
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm">Learning Streak</p>
              <p className="text-3xl font-bold">{userProgress.streak}</p>
            </div>
            <Flame className="w-8 h-8 text-green-200" />
          </div>
          <div className="mt-4 text-green-100 text-sm">
            Personal best: 15 days
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm">Words Learned</p>
              <p className="text-3xl font-bold">{userProgress.wordsLearned}</p>
            </div>
            <BookOpen className="w-8 h-8 text-purple-200" />
          </div>
          <div className="mt-4 text-purple-100 text-sm">
            Target: 100 words
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-orange-100 text-sm">Lessons Completed</p>
              <p className="text-3xl font-bold">{userProgress.totalLessons}</p>
            </div>
            <Target className="w-8 h-8 text-orange-200" />
          </div>
          <div className="mt-4 text-orange-100 text-sm">
            Average: 5 per week
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Weekly Progress Chart */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Weekly Progress</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="xp" 
                stroke="#3B82F6" 
                strokeWidth={3}
                dot={{ fill: '#3B82F6', strokeWidth: 2, r:  6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Skills Progress */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Skills Progress</h3>
          <div className="space-y-4">
            {skillsData.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                  <span className="text-sm font-bold text-gray-900">{skill.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="h-3 rounded-full transition-all duration-500"
                    style={{ 
                      width: `${skill.progress}%`,
                      backgroundColor: skill.color 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Learning Activity & Time Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Daily Activity */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Daily Learning Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={weeklyProgress}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="lessons" fill="#10B981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Time Distribution */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Learning Time Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={achievementsData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={120}
                paddingAngle={5}
                dataKey="value"
              >
                {achievementsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="grid grid-cols-2 gap-2 mt-4">
            {achievementsData.map((item, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-gray-600">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Goals */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Current Goals</h3>
          <div className="space-y-4">
            {goals.map((goal, index) => {
              const percentage = Math.round((goal.current / goal.target) * 100);
              return (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                    <span className="text-sm text-gray-600">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${goal.color} transition-all duration-500`}
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {percentage}% complete
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Achievements</h3>
          <div className="space-y-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className={`p-4 rounded-lg border-2 ${
                  achievement.earned 
                    ? 'border-green-200 bg-green-50' 
                    : 'border-gray-200 bg-gray-50'
                }`}>
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${
                      achievement.earned ? 'bg-green-500' : 'bg-gray-400'
                    }`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{achievement.title}</h4>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      {achievement.earned ? (
                        <span className="text-xs text-green-600 font-medium">
                          Earned {achievement.date}
                        </span>
                      ) : (
                        <div className="text-xs text-gray-500">
                          Progress: {achievement.progress}/
                          {achievement.title.includes('30-day') ? '30' : '5'}
                        </div>
                      )}
                    </div>
                    {achievement.earned && (
                      <Award className="w-6 h-6 text-green-500" />
                    )}
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

export default ProgressTracking;