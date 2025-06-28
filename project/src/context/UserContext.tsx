import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface User {
  id: string;
  name: string;
  avatar: string;
  premium: boolean;
  goal: string;
  streak: number;
  progress: number;
  wordsMastered: number;
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  setGoal: (goal: string) => void;
  upgradeToPremium: () => Promise<void>;
}

const mockFetchUser = async (): Promise<User> => {
  return new Promise(resolve => setTimeout(() => resolve({
    id: 'user123',
    name: 'Alex',
    avatar: '🧑‍🎓',
    premium: false,
    goal: 'Travel',
    streak: 3,
    progress: 40,
    wordsMastered: 25,
  }), 500));
};

const mockUpgradeToPremium = async () => {
  return new Promise(resolve => setTimeout(() => resolve(true), 500));
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mockFetchUser().then(data => {
      setUser(data);
      setLoading(false);
    });
  }, []);

  const setGoal = (goal: string) => {
    setUser(u => (u ? { ...u, goal } : u));
  };

  const upgradeToPremium = async () => {
    setLoading(true);
    await mockUpgradeToPremium();
    setUser(u => (u ? { ...u, premium: true } : u));
    setLoading(false);
  };

  return (
    <UserContext.Provider value={{ user, loading, setGoal, upgradeToPremium }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error('useUser must be used within a UserProvider');
  return ctx;
}; 