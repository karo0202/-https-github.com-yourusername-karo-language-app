import { createContext, useState, useContext, ReactNode } from 'react';

export interface QuizResult {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  score: number;
  totalQuestions: number;
  date: Date;
}

interface ProgressContextType {
  quizHistory: QuizResult[];
  addQuizResult: (result: QuizResult) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const initialQuizHistory: QuizResult[] = [];

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>(initialQuizHistory);

  const addQuizResult = (result: QuizResult) => {
    setQuizHistory(prevHistory => [...prevHistory, result]);
  };

  return (
    <ProgressContext.Provider value={{ quizHistory, addQuizResult }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
} 