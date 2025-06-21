import React, { useState } from 'react';
import { Brain, Clock, Trophy, Star, CheckCircle, X, ArrowRight } from 'lucide-react';

interface QuizSystemProps {
  userLevel: string;
}

function QuizSystem({ userLevel }: QuizSystemProps) {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);

  const quizzes = [
    {
      title: 'Vocabulary Challenge',
      description: 'Test your knowledge of common English words',
      difficulty: 'Beginner',
      questions: 10,
      time: 15,
      icon: Brain,
      color: 'bg-blue-500'
    },
    {
      title: 'Grammar Fundamentals',
      description: 'Practice basic grammar rules and sentence structure',
      difficulty: 'Beginner',
      questions: 12,
      time: 20,
      icon: CheckCircle,
      color: 'bg-green-500'
    },
    {
      title: 'Pronunciation Practice',
      description: 'Identify correct pronunciation and stress patterns',
      difficulty: 'Intermediate',
      questions: 8,
      time: 12,
      icon: Star,
      color: 'bg-purple-500'
    },
    {
      title: 'Business English',
      description: 'Professional communication and workplace vocabulary',
      difficulty: 'Advanced',
      questions: 15,
      time: 25,
      icon: Trophy,
      color: 'bg-orange-500'
    }
  ];

  const questions = [
    {
      question: "What is the correct meaning of 'delicious'?",
      options: [
        "Very cold",
        "Having a pleasant taste",
        "Difficult to understand",
        "Making a loud noise"
      ],
      correct: 1,
      explanation: "'Delicious' means having a very pleasant taste or smell, especially of food or drink."
    },
    {
      question: "Choose the correct sentence:",
      options: [
        "I have went to the store yesterday",
        "I went to the store yesterday",
        "I go to the store yesterday",
        "I going to the store yesterday"
      ],
      correct: 1,
      explanation: "The correct form uses simple past tense 'went' for a completed action in the past."
    },
    {
      question: "What does 'adventure' mean?",
      options: [
        "A boring routine",
        "An exciting or dangerous experience",
        "A type of food",
        "A piece of furniture"
      ],
      correct: 1,
      explanation: "An adventure is an exciting, unusual, or dangerous experience or activity."
    }
  ];

  const selectedQuiz = quizzes[currentQuiz];
  const question = questions[currentQuestion];

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowResult(false);
  };

  const selectAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const nextQuestion = () => {
    if (selectedAnswer === question.correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz completed
      setQuizStarted(false);
      setShowResult(true);
    }
  };

  const showAnswerResult = () => {
    setShowResult(true);
  };

  if (quizStarted) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Quiz Header */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{selectedQuiz.title}</h2>
              <p className="text-gray-600">Question {currentQuestion + 1} of {questions.length}</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-3 py-2 rounded-lg">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium">2:45</span>
              </div>
              
              <div className="text-right">
                <p className="text-sm text-gray-600">Score</p>
                <p className="text-xl font-bold text-gray-900">{score}/{currentQuestion + (showResult ? 1 : 0)}</p>
              </div>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">{question.question}</h3>
          
          <div className="space-y-3 mb-6">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => selectAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${
                  selectedAnswer === index
                    ? showResult
                      ? index === question.correct
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : 'border-red-500 bg-red-50 text-red-800'
                      : 'border-blue-500 bg-blue-50 text-blue-800'
                    : showResult && index === question.correct
                      ? 'border-green-500 bg-green-50 text-green-800'
                      : 'border-gray-300 hover:border-gray-400 text-gray-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showResult && (
                    <div>
                      {index === question.correct ? (
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      ) : selectedAnswer === index ? (
                        <X className="w-5 h-5 text-red-600" />
                      ) : null}
                    </div>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showResult && (
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Explanation</h4>
              <p className="text-blue-800">{question.explanation}</p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button className="px-6 py-2 text-gray-600 hover:text-gray-800">
              Skip Question
            </button>
            
            {!showResult ? (
              <button
                onClick={showAnswerResult}
                disabled={selectedAnswer === null}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
              >
                <span>Check Answer</span>
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center space-x-2"
              >
                <span>{currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl p-8 shadow-lg text-center">
          <div className="mb-6">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trophy className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Quiz Completed!</h2>
            <p className="text-gray-600">Great job on completing the {selectedQuiz.title}</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-6 rounded-lg mb-6">
            <div className="text-4xl font-bold mb-2">{percentage}%</div>
            <div className="text-green-100">
              You scored {score} out of {questions.length} questions correctly
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">{score}</div>
              <div className="text-sm text-gray-600">Correct Answers</div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="text-2xl font-bold text-gray-900">+{score * 10}</div>
              <div className="text-sm text-gray-600">XP Earned</div>
            </div>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => setCurrentQuiz((currentQuiz + 1) % quizzes.length)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Try Another Quiz
            </button>
            <button
              onClick={startQuiz}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Retake This Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900">Quiz System</h2>
        <p className="text-gray-600 mt-2">Test your knowledge with gamified quizzes and instant feedback</p>
      </div>

      {/* Quiz Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {quizzes.map((quiz, index) => {
          const Icon = quiz.icon;
          
          return (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                currentQuiz === index ? 'ring-2 ring-blue-500' : ''
              }`}
              onClick={() => setCurrentQuiz(index)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`${quiz.color} p-3 rounded-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  quiz.difficulty === 'Beginner' ? 'bg-green-100 text-green-600' :
                  quiz.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-red-100 text-red-600'
                }`}>
                  {quiz.difficulty}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>

              <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                <span>{quiz.questions} questions</span>
                <span>{quiz.time} minutes</span>
              </div>

              {currentQuiz === index && (
                <button
                  onClick={startQuiz}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                >
                  Start Quiz
                </button>
              )}
            </div>
          );
        })}
      </div>

      {/* Recent Scores */}
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Quiz Results</h3>
        <div className="space-y-3">
          {[
            { quiz: 'Vocabulary Challenge', score: 85, date: '2 hours ago', badge: 'Good Job!' },
            { quiz: 'Grammar Fundamentals', score: 92, date: '1 day ago', badge: 'Excellent!' },
            { quiz: 'Pronunciation Practice', score: 78, date: '3 days ago', badge: 'Keep Practicing' },
            { quiz: 'Business English', score: 88, date: '1 week ago', badge: 'Well Done!' }
          ].map((result, index) => (
            <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">{result.quiz}</h4>
                <p className="text-sm text-gray-600">{result.date}</p>
              </div>
              <div className="text-right">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-gray-900">{result.score}%</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    result.score >= 90 ? 'bg-green-100 text-green-600' :
                    result.score >= 80 ? 'bg-blue-100 text-blue-600' :
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    {result.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default QuizSystem;