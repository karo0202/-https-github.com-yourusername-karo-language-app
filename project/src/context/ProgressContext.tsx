import { createContext, useState, useContext, ReactNode } from 'react';

export interface QuizResult {
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  score: number;
  totalQuestions: number;
  date: Date;
}

export type Level = 'Beginner' | 'Intermediate' | 'Advanced';

interface ProgressContextType {
  quizHistory: QuizResult[];
  addQuizResult: (result: QuizResult) => void;
  completedScenarios: Record<Level, Set<number>>;
  markScenarioComplete: (level: Level, scenarioIndex: number) => void;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const initialQuizHistory: QuizResult[] = [];
const initialCompletedScenarios: Record<Level, Set<number>> = {
  Beginner: new Set(),
  Intermediate: new Set(),
  Advanced: new Set(),
};

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [quizHistory, setQuizHistory] = useState<QuizResult[]>(initialQuizHistory);
  const [completedScenarios, setCompletedScenarios] = useState<Record<Level, Set<number>>>(initialCompletedScenarios);

  const addQuizResult = (result: QuizResult) => {
    setQuizHistory(prevHistory => [...prevHistory, result]);
  };

  const markScenarioComplete = (level: Level, scenarioIndex: number) => {
    setCompletedScenarios(prev => ({
      ...prev,
      [level]: new Set([...prev[level], scenarioIndex]),
    }));
  };

  return (
    <ProgressContext.Provider value={{ quizHistory, addQuizResult, completedScenarios, markScenarioComplete }}>
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