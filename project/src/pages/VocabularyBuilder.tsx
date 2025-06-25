import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLevel } from '../context/LevelContext';
import { vocabularyData } from '../data/vocabularyData';
import { Volume2, Zap } from 'lucide-react';
import { addDays, isBefore, startOfToday } from 'date-fns';

// Define interface here as a workaround
interface VocabularyWord {
  word: string;
  pronunciation: string;
  definition: string;
  example: string;
}

interface SRSTrackedWord extends VocabularyWord {
  srsLevel: number;
  nextReview: string; 
}

const getInitialWords = (level: string): SRSTrackedWord[] => {
  const storedWords = localStorage.getItem(`srs-vocab-${level}`);
  if (storedWords) {
    try {
      const parsed = JSON.parse(storedWords);
      if (Array.isArray(parsed) && parsed.length > 0 && 'srsLevel' in parsed[0]) {
        return parsed;
      }
    } catch (e) {
      console.error("Failed to parse SRS data from localStorage", e);
    }
  }
  return (vocabularyData[level] || []).map((word: VocabularyWord) => ({
    ...word,
    srsLevel: 0,
    nextReview: new Date().toISOString(),
  }));
};

function VocabularyBuilder() {
  const { level } = useLevel();
  const [allWords, setAllWords] = useState<SRSTrackedWord[]>(() => getInitialWords(level));
  const [sessionWords, setSessionWords] = useState<SRSTrackedWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(false);

  useEffect(() => {
    const initialWords = getInitialWords(level);
    setAllWords(initialWords);
    setIsSessionActive(false);
  }, [level]);

  useEffect(() => {
    localStorage.setItem(`srs-vocab-${level}`, JSON.stringify(allWords));
  }, [allWords, level]);

  const startSession = useCallback(() => {
    const today = startOfToday();
    const dueWords = allWords.filter(word => isBefore(new Date(word.nextReview), today) || word.srsLevel === 0);
    const newWords = allWords.filter(word => word.srsLevel === 0).slice(0, 10);
    const reviewWords = dueWords.filter(word => word.srsLevel > 0);
    
    const session = [...new Set([...reviewWords, ...newWords])].sort(() => Math.random() - 0.5).slice(0, 20);
    
    if (session.length > 0) {
      setSessionWords(session);
      setCurrentIndex(0);
      setIsSessionActive(true);
    } else {
      alert("No words to review today! Come back tomorrow.");
    }
  }, [allWords]);

  const handleFeedback = (rating: 'Hard' | 'Good' | 'Easy') => {
    const word = sessionWords[currentIndex];
    let nextSrsLevel = word.srsLevel;
    let nextReviewDate: Date;

    switch (rating) {
      case 'Hard':
        nextSrsLevel = Math.max(0, nextSrsLevel - 1);
        nextReviewDate = addDays(new Date(), 1);
        break;
      case 'Good':
        nextSrsLevel += 1;
        nextReviewDate = addDays(new Date(), Math.pow(2, nextSrsLevel));
        break;
      case 'Easy':
        nextSrsLevel += 2;
        nextReviewDate = addDays(new Date(), Math.pow(2, nextSrsLevel) * 2);
        break;
    }

    const updatedWord: SRSTrackedWord = { ...word, srsLevel: nextSrsLevel, nextReview: nextReviewDate.toISOString() };
    
    setAllWords(prev => prev.map(w => w.word === updatedWord.word ? updatedWord : w));

    if (currentIndex < sessionWords.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsSessionActive(false);
      alert("Session complete!");
    }
  };

  const handleSpeak = () => {
    const currentWord = sessionWords[currentIndex];
    if (currentWord && 'speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(currentWord.word);
      speechSynthesis.speak(utterance);
    }
  };

  if (!isSessionActive) {
    const today = startOfToday();
    const reviewCount = allWords.filter(word => isBefore(new Date(word.nextReview), today) && word.srsLevel > 0).length;
    const newCount = allWords.filter(word => word.srsLevel === 0).length;

    return (
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold">Vocabulary Builder</h1>
        <p className="text-xl text-blue-600 font-semibold mb-8">{level}</p>
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Ready for your practice session?</h2>
          <p className="text-gray-600 mb-2">Words to review: <span className="font-bold">{reviewCount}</span></p>
          <p className="text-gray-600 mb-6">New words to learn: <span className="font-bold">{newCount}</span></p>
          <button
            onClick={startSession}
            className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
          >
            <Zap size={24} />
            Start Session
          </button>
        </div>
      </div>
    );
  }

  const currentWord = sessionWords[currentIndex];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Vocabulary Builder</h1>
        <p className="text-xl text-blue-600 font-semibold">{level}</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[250px] flex flex-col justify-center items-center text-center relative">
        <div className="flex items-center gap-4">
          <h2 className="text-5xl font-bold">{currentWord.word}</h2>
          <button onClick={handleSpeak} className="text-gray-500 hover:text-blue-600 transition-colors">
            <Volume2 size={32} />
          </button>
        </div>
        <p className="text-gray-500 text-xl mt-2">{currentWord.pronunciation}</p>
        <p className="text-gray-800 text-lg mt-4 max-w-lg">{currentWord.definition}</p>
        <p className="text-gray-500 italic mt-4 max-w-lg">"{currentWord.example}"</p>
      </div>

      <div className="mt-8 text-center">
        <p className="text-lg font-medium mb-4">How well did you know this word?</p>
        <div className="flex justify-center items-center gap-4">
          <button 
            onClick={() => handleFeedback('Hard')}
            className="px-6 py-3 bg-red-500 text-white rounded-lg font-semibold hover:bg-red-600 transition-colors"
          >
            Hard
          </button>
          <button 
            onClick={() => handleFeedback('Good')}
            className="px-6 py-3 bg-yellow-500 text-white rounded-lg font-semibold hover:bg-yellow-600 transition-colors"
          >
            Good
          </button>
          <button 
            onClick={() => handleFeedback('Easy')}
            className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors"
          >
            Easy
          </button>
        </div>
        <p className="text-gray-600 mt-4">{currentIndex + 1} / {sessionWords.length}</p>
      </div>
    </div>
  );
}

export default VocabularyBuilder;