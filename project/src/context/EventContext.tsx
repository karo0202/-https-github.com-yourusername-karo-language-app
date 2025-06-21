import { createContext, useState, useContext, ReactNode } from 'react';

export interface StudyEvent {
  date: Date;
  title: string;
}

interface EventContextType {
  events: StudyEvent[];
  addEvent: (event: StudyEvent) => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

const initialEvents: StudyEvent[] = [
    { date: new Date(), title: 'Practice Vocabulary' },
    { date: new Date(new Date().setDate(new Date().getDate() + 2)), title: 'Take a Quiz' },
];

export function EventProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<StudyEvent[]>(initialEvents);

  const addEvent = (event: StudyEvent) => {
    setEvents([...events, event]);
  };

  return (
    <EventContext.Provider value={{ events, addEvent }}>
      {children}
    </EventContext.Provider>
  );
}

export function useEvents() {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventProvider');
  }
  return context;
} 