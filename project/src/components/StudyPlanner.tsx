import React, { useState } from 'react';
import { Calendar, Clock, Target, TrendingUp, CheckCircle, Plus, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface StudyPlannerProps {
  userProgress: {
    xp: number;
    streak: number;
    totalStudyTime: number;
    weeklyGoal: number;
    weeklyProgress: number;
  };
}

function StudyPlanner({ userProgress }: StudyPlannerProps) {
  const [selectedDay, setSelectedDay] = useState(new Date().getDay());
  const [showAddGoal, setShowAddGoal] = useState(false);

  const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  const studyPlan = {
    Monday: [
      { time: '09:00', activity: 'Vocabulary Review', duration: 15, completed: true },
      { time: '14:00', activity: 'Grammar Practice', duration: 20, completed: true },
      { time: '19:00', activity: 'Conversation Practice', duration: 30, completed: false }
    ],
    Tuesday: [
      { time: '08:30', activity: 'Pronunciation Training', duration: 25, completed: false },
      { time: '13:00', activity: 'Reading Comprehension', duration: 20, completed: false },
      { time: '18:30', activity: 'Quiz Challenge', duration: 15, completed: false }
    ],
    Wednesday: [
      { time: '10:00', activity: 'Listening Practice', duration: 30, completed: false },
      { time: '15:30', activity: 'Writing Exercise', duration: 25, completed: false }
    ],
    Thursday: [
      { time: '09:15', activity: 'Vocabulary Builder', duration: 20, completed: false },
      { time: '16:00', activity: 'Speaking Practice', duration: 35, completed: false }
    ],
    Friday: [
      { time: '11:00', activity: 'Grammar Review', duration: 15, completed: false },
      { time: '17:00', activity: 'Conversation Simulation', duration: 40, completed: false }
    ],
    Saturday: [
      { time: '10:30', activity: 'Weekly Review', duration: 45, completed: false },
      { time: '14:00', activity: 'Fun Learning Games', duration: 30, completed: false }
    ],
    Sunday: [
      { time: '09:00', activity: 'Planning Next Week', duration: 20, completed: false },
      { time: '15:00', activity: 'Relaxed Reading', duration: 25, completed: false }
    ]
  };

  const goals = [
    { title: 'Complete Daily Vocabulary', target: 20, current: 15, unit: 'words', color: 'bg-blue-500' },
    { title: 'Practice Speaking', target: 30, current: 22, unit: 'minutes', color: 'bg-green-500' },
    { title: 'Weekly XP Target', target: 500, current: 320, unit: 'XP', color: 'bg-purple-500' },
    { title: 'Conversation Sessions', target: 5, current: 3, unit: 'sessions', color: 'bg-orange-500' }
  ];

  const currentDayPlan = studyPlan[weekDays[selectedDay] as keyof typeof studyPlan] || [];

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Study Planner</h2>
          <p className="text-gray-600 mt-2">Organize your learning journey with personalized study schedules</p>
        </div>
        
        <motion.button
          onClick={() => setShowAddGoal(true)}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:shadow-lg transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Plus className="w-5 h-5" />
          <span>Add Goal</span>
        </motion.button>
      </motion.div>

      {/* Weekly Overview */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-2xl p-6 shadow-lg"
      >
        <h3 className="text-xl font-bold text-gray-900 mb-6">Weekly Schedule</h3>
        
        <div className="grid grid-cols-7 gap-2 mb-6">
          {weekDays.map((day, index) => {
            const dayPlan = studyPlan[day as keyof typeof studyPlan] || [];
            const completedTasks = dayPlan.filter(task => task.completed).length;
            const totalTasks = dayPlan.length;
            const isToday = index === new Date().getDay();
            
            return (
              <motion.button
                key={day}
                onClick={() => setSelectedDay(index)}
                className={`p-4 rounded-xl text-center transition-all duration-200 ${
                  selectedDay === index
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : isToday
                      ? 'bg-blue-50 text-blue-600 border-2 border-blue-200'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-sm font-medium mb-1">{day.slice(0, 3)}</div>
                <div className="text-xs opacity-75">
                  {completedTasks}/{totalTasks}
                </div>
                {isToday && (
                  <motion.div
                    className="w-2 h-2 bg-blue-500 rounded-full mx-auto mt-1"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Daily Schedule */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900 mb-4">
            {weekDays[selectedDay]} Schedule
          </h4>
          
          {currentDayPlan.length > 0 ? (
            currentDayPlan.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all duration-200 ${
                  task.completed
                    ? 'bg-green-50 border-green-200'
                    : 'bg-gray-50 border-gray-200 hover:border-blue-200'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-2 rounded-lg ${
                    task.completed ? 'bg-green-500' : 'bg-blue-500'
                  }`}>
                    {task.completed ? (
                      <CheckCircle className="w-5 h-5 text-white" />
                    ) : (
                      <Clock className="w-5 h-5 text-white" />
                    )}
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900">{task.activity}</h5>
                    <p className="text-sm text-gray-600">
                      {task.time} • {task.duration} minutes
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Edit className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">
              <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>No activities scheduled for this day</p>
              <button className="mt-2 text-blue-600 hover:text-blue-800">
                Add Activity
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Goals & Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Current Goals */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Current Goals</h3>
          <div className="space-y-4">
            {goals.map((goal, index) => {
              const percentage = Math.min((goal.current / goal.target) * 100, 100);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{goal.title}</h4>
                    <span className="text-sm text-gray-600">
                      {goal.current}/{goal.target} {goal.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div 
                      className={`h-2 rounded-full ${goal.color} transition-all duration-500`}
                      initial={{ width: 0 }}
                      animate={{ width: `${percentage}%` }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                    />
                  </div>
                  <div className="mt-1 text-xs text-gray-500">
                    {Math.round(percentage)}% complete
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Study Statistics */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl p-6 shadow-lg"
        >
          <h3 className="text-xl font-bold text-gray-900 mb-6">Study Statistics</h3>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Total Study Time</p>
                  <p className="text-sm text-gray-600">This week</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">
                  {Math.floor(userProgress.totalStudyTime / 60)}h {userProgress.totalStudyTime % 60}m
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-lg">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Goals Completed</p>
                  <p className="text-sm text-gray-600">This month</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">12/15</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Average Score</p>
                  <p className="text-sm text-gray-600">Last 10 sessions</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">87%</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h4 className="font-medium text-gray-900 mb-3">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-3">
              <motion.button
                className="p-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Study Session
              </motion.button>
              <motion.button
                className="p-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Review Progress
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default StudyPlanner;