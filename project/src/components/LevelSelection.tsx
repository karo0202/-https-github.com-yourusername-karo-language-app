import React from 'react';
import { CheckCircle, Star, Target, Trophy, ArrowRight } from 'lucide-react';

interface LevelSelectionProps {
  currentLevel: string;
  onLevelSelect: (level: string) => void;
}

function LevelSelection({ currentLevel, onLevelSelect }: LevelSelectionProps) {
  const levels = [
    {
      id: 'beginner',
      title: 'Beginner',
      description: 'Start your English journey with basic vocabulary and simple conversations',
      features: ['Basic vocabulary (500+ words)', 'Simple conversations', 'Pronunciation basics', 'Grammar fundamentals'],
      progress: 85,
      icon: Star,
      color: 'bg-green-500',
      borderColor: 'border-green-200'
    },
    {
      id: 'intermediate',
      title: 'Intermediate',
      description: 'Build confidence with complex sentences and everyday conversations',
      features: ['Advanced vocabulary (1500+ words)', 'Complex conversations', 'Fluency practice', 'Business English basics'],
      progress: 45,
      icon: Target,
      color: 'bg-blue-500',
      borderColor: 'border-blue-200'
    },
    {
      id: 'advanced',
      title: 'Advanced',
      description: 'Master English with nuanced expressions and professional communication',
      features: ['Professional vocabulary (3000+ words)', 'Nuanced expressions', 'Debate & discussion', 'Academic English'],
      progress: 12,
      icon: Trophy,
      color: 'bg-purple-500',
      borderColor: 'border-purple-200'
    }
  ];

  const placementTest = {
    title: 'Not sure about your level?',
    description: 'Take our AI-powered placement test to find your perfect starting point',
    duration: '10 minutes'
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Select the level that matches your current English proficiency and start your personalized learning journey
        </p>
      </div>

      {/* Placement Test Card */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">{placementTest.title}</h3>
            <p className="text-orange-100 mb-4">{placementTest.description}</p>
            <div className="flex items-center space-x-4">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                📊 {placementTest.duration}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                🎯 Personalized results
              </span>
            </div>
          </div>
          <button className="bg-white text-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center space-x-2">
            <span>Take Test</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Level Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((level) => {
          const Icon = level.icon;
          const isCurrentLevel = currentLevel === level.id;
          
          return (
            <div
              key={level.id}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 ${
                isCurrentLevel ? level.borderColor : 'border-gray-100'
              }`}
              onClick={() => onLevelSelect(level.id)}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`${level.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {isCurrentLevel && (
                  <div className="flex items-center space-x-1 bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                    <CheckCircle className="w-3 h-3" />
                    <span>Current</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{level.title}</h3>
              <p className="text-gray-600 mb-4">{level.description}</p>

              {/* Progress */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-semibold text-gray-900">{level.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${level.color}`}
                    style={{ width: `${level.progress}%` }}
                  />
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2">
                {level.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button 
                className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                  isCurrentLevel 
                    ? 'bg-gray-100 text-gray-600 cursor-default' 
                    : `${level.color} text-white hover:opacity-90`
                }`}
                disabled={isCurrentLevel}
              >
                {isCurrentLevel ? 'Currently Active' : 'Select Level'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default LevelSelection;