import { useState, useMemo } from 'react';
import { useLevel } from '../context/LevelContext';
import { useProgress } from '../context/ProgressContext';
import { quizData } from '../data/quizData';
import { CheckCircle, XCircle, ChevronRight } from 'lucide-react';

function QuizSystem() {
  const { level } = useLevel();
  const { addQuizResult } = useProgress();

  const questions = useMemo(() => quizData[level].sort(() => 0.5 - Math.random()).slice(0, 10), [level]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    if (isAnswered) return;

    setSelectedAnswer(answerIndex);
    setIsAnswered(true);

    if (answerIndex === questions[currentQuestionIndex].correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      addQuizResult({ level, score, totalQuestions: questions.length, date: new Date() });
      setIsFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setIsAnswered(false);
    setIsFinished(false);
  };

  if (isFinished) {
    return (
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white p-8 rounded-2xl shadow-card">
          <h1 className="text-4xl font-bold mb-4">Quiz Complete!</h1>
          <p className="text-2xl text-text-secondary mb-6">
            Your score: <span className="font-bold text-primary">{score}</span> / {questions.length}
          </p>
          <button
            onClick={restartQuiz}
            className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors text-lg"
          >
            Take Another Quiz
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Language Quiz</h1>
        <p className="text-lg text-text-secondary mt-2">Level: {level}</p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-card">
        <div className="mb-6">
          <p className="text-lg text-text-secondary mb-2">Question {currentQuestionIndex + 1} of {questions.length}</p>
          <h2 className="text-2xl font-bold text-text-primary">{currentQuestion.question}</h2>
        </div>

        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isCorrect = index === currentQuestion.correct;
            const isSelected = selectedAnswer === index;
            let buttonClass = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-300';

            if (isAnswered) {
              if (isCorrect) {
                buttonClass += ' bg-green-100 border-green-500 text-green-800';
              } else if (isSelected) {
                buttonClass += ' bg-red-100 border-red-500 text-red-800';
              } else {
                buttonClass += ' border-gray-200 opacity-60';
              }
            } else {
              buttonClass += ' border-gray-200 hover:bg-secondary hover:border-primary';
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={isAnswered}
                className={buttonClass}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium">{option}</span>
                  {isAnswered && isCorrect && <CheckCircle className="text-green-600" />}
                  {isAnswered && isSelected && !isCorrect && <XCircle className="text-red-600" />}
                </div>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-8">
            <div className="bg-secondary p-4 rounded-lg">
              <p className="font-semibold text-text-primary">Explanation:</p>
              <p className="text-text-secondary">{currentQuestion.explanation}</p>
            </div>
            <div className="text-right mt-4">
              <button
                onClick={handleNextQuestion}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                <span>{currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}</span>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizSystem;