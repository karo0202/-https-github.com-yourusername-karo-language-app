import { useState } from 'react';
import { useLevel } from '../context/LevelContext';
import { quizData } from '../data/quizData';
import { CheckCircle, X, ArrowRight, RefreshCw, Trophy } from 'lucide-react';

function QuizSystem() {
  const { level } = useLevel();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const questions = quizData[level];
  const question = questions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    if (answerIndex === question.correct) {
      setScore(score + 1);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedAnswer(null);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
  };

  if (quizFinished) {
    return (
      <div className="max-w-2xl mx-auto text-center p-8 bg-white rounded-xl shadow-lg">
        <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h1>
        <p className="text-gray-600 mb-6">You scored {score} out of {questions.length}.</p>
        <button
          onClick={restartQuiz}
          className="flex items-center justify-center mx-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-sm font-medium text-blue-600 mb-1">Question {currentQuestion + 1} of {questions.length}</h2>
        <p className="text-xl font-semibold text-gray-800 mb-6">{question.question}</p>
        
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isCorrect = index === question.correct;
            const isSelected = index === selectedAnswer;
            let buttonClass = "w-full p-4 text-left rounded-lg border-2 transition-colors";

            if (showFeedback) {
              if (isCorrect) {
                buttonClass += " bg-green-100 border-green-500 text-green-800";
              } else if (isSelected) {
                buttonClass += " bg-red-100 border-red-500 text-red-800";
              } else {
                buttonClass += " border-gray-300";
              }
            } else {
              buttonClass += " border-gray-300 hover:bg-gray-100";
            }
            
            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showFeedback}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span>{option}</span>
                  {showFeedback && (
                    <>
                      {isCorrect && <CheckCircle className="w-6 h-6 text-green-500" />}
                      {isSelected && !isCorrect && <X className="w-6 h-6 text-red-500" />}
                    </>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="font-semibold">Explanation:</p>
            <p className="text-gray-700">{question.explanation}</p>
          </div>
        )}

        <div className="mt-6 text-right">
          {showFeedback && (
            <button 
              onClick={handleNextQuestion}
              className="flex items-center ml-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <span>{currentQuestion < questions.length - 1 ? "Next Question" : "Finish Quiz"}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuizSystem;