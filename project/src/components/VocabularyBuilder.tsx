import React, { useState } from 'react';
import { BookOpen, Volume2, Star, RefreshCw, Play, CheckCircle, X } from 'lucide-react';

interface VocabularyBuilderProps {
  userLevel: string;
}

function VocabularyBuilder({ userLevel }: VocabularyBuilderProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [showDefinition, setShowDefinition] = useState(false);
  const [studyMode, setStudyMode] = useState<'learn' | 'review' | 'quiz'>('learn');

  const vocabularyData = {
    beginner: [
      {
        word: 'Delicious',
        pronunciation: '/dɪˈlɪʃəs/',
        definition: 'Having a very pleasant taste or smell',
        examples: [
          'The cake was absolutely delicious.',
          'She cooked a delicious meal for us.',
          'This restaurant serves delicious food.',
          'The delicious aroma filled the kitchen.',
          'We had a delicious dinner last night.'
        ],
        difficulty: 'easy',
        category: 'Food & Dining',
        learned: false
      },
      {
        word: 'Adventure',
        pronunciation: '/ədˈventʃər/',
        definition: 'An exciting or dangerous experience or activity',
        examples: [
          'Their trip to the mountains was quite an adventure.',
          'She loves reading adventure stories.',
          'Life is full of unexpected adventures.',
          'The children went on an adventure in the forest.',
          'He decided to embark on a new adventure.'
        ],
        difficulty: 'medium',
        category: 'Travel & Experience',
        learned: true
      }
    ]
  };

  const words = vocabularyData[userLevel as keyof typeof vocabularyData] || vocabularyData.beginner;
  const word = words[currentWord];

  const nextWord = () => {
    setCurrentWord((prev) => (prev + 1) % words.length);
    setShowDefinition(false);
  };

  const previousWord = () => {
    setCurrentWord((prev) => (prev - 1 + words.length) % words.length);  
    setShowDefinition(false);
  };

  const playPronunciation = () => {
    // In a real app, this would use Text-to-Speech API
    console.log('Playing pronunciation for:', word.word);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Vocabulary Builder</h2>
          <p className="text-gray-600 mt-2">Expand your vocabulary with spaced repetition learning</p>
        </div>
        
        {/* Study Mode Selector */}
        <div className="flex bg-white rounded-lg p-1 shadow-lg">
          {['learn', 'review', 'quiz'].map((mode) => (
            <button
              key={mode}
              onClick={() => setStudyMode(mode as any)}
              className={`px-4 py-2 rounded-md font-medium capitalize transition-colors ${
                studyMode === mode
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">Progress</span>
          <span className="text-sm font-medium text-gray-900">{currentWord + 1} of {words.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentWord + 1) / words.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Main Vocabulary Card */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Word Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <BookOpen className="w-8 h-8" />
              <div>
                <h3 className="text-3xl font-bold">{word.word}</h3>
                <p className="text-blue-100">{word.pronunciation}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={playPronunciation}
                className="bg-white/20 hover:bg-white/30 p-3 rounded-lg transition-colors"
              >
                <Volume2 className="w-6 h-6" />
              </button>
              
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                word.learned ? 'bg-green-500' : 'bg-white/20'
              }`}>
                {word.learned ? <CheckCircle className="w-4 h-4" /> : <Star className="w-4 h-4" />}
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
              {word.category}
            </span>
            <span className={`px-3 py-1 rounded-full text-sm ${
              word.difficulty === 'easy' ? 'bg-green-500' :
              word.difficulty === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
            }`}>
              {word.difficulty}
            </span>
          </div>
        </div>

        {/* Definition & Examples */}
        <div className="p-8">
          <button
            onClick={() => setShowDefinition(!showDefinition)}
            className="w-full mb-6 p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
          >
            <div className="flex items-center justify-between">
              <span className="font-medium text-gray-900">
                {showDefinition ? 'Hide Definition' : 'Show Definition'}
              </span>
              <div className={`transform transition-transform ${showDefinition ? 'rotate-180' : ''}`}>
                <Play className="w-5 h-5 text-gray-600" />
              </div>
            </div>
          </button>

          {showDefinition && (
            <div className="space-y-6 animate-fadeIn">
              {/* Definition */}
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Definition</h4>
                <p className="text-blue-800">{word.definition}</p>
              </div>

              {/* Examples */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Example Sentences</h4>
                <div className="space-y-3">
                  {word.examples.map((example, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {index + 1}
                      </span>
                      <div className="flex-1">
                        <p className="text-gray-800">{example}</p>
                        <button className="text-blue-600 hover:text-blue-800 text-sm mt-1 flex items-center space-x-1">
                          <Volume2 className="w-4 h-4" />
                          <span>Listen</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="bg-gray-50 p-6 flex items-center justify-between">
          <button
            onClick={previousWord}
            className="flex items-center space-x-2 px-4 py-2 bg-white text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <span>Previous</span>
          </button>
          
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
              <CheckCircle className="w-4 h-4" />
              <span>Mark as Learned</span>
            </button>
            
            <button className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
              <RefreshCw className="w-4 h-4" />
              <span>Review Later</span>
            </button>
          </div>
          
          <button
            onClick={nextWord}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span>Next</span>
          </button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">89</p>
              <p className="text-sm text-gray-600">Words Learned</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <RefreshCw className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">23</p>
              <p className="text-sm text-gray-600">Due for Review</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center space-x-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">7</p>
              <p className="text-sm text-gray-600">Day Streak</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VocabularyBuilder;