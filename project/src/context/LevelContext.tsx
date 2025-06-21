import { createContext, useState, useContext, ReactNode } from 'react';

type Level = 'Beginner' | 'Intermediate' | 'Advanced';

interface LevelContextType {
  level: Level;
  setLevel: (level: Level) => void;
}

const LevelContext = createContext<LevelContextType | undefined>(undefined);

export function LevelProvider({ children }: { children: ReactNode }) {
  const [level, setLevel] = useState<Level>('Beginner');

  return (
    <LevelContext.Provider value={{ level, setLevel }}>
      {children}
    </LevelContext.Provider>
  );
}

export function useLevel() {
  const context = useContext(LevelContext);
  if (context === undefined) {
    throw new Error('useLevel must be used within a LevelProvider');
  }
  return context;
} 