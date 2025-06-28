import React, { useState, useEffect } from 'react';
import { Volume2, Check, X, RotateCcw } from 'lucide-react';

interface TapGameProps {
  vocabulary: Array<{ english: string; emoji: string }>;
  onComplete: () => void;
}

export const TapGame: React.FC<TapGameProps> = ({ vocabulary, onComplete }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  useEffect(() => {
    if (vocabulary.length > 0) {
      const randomWord = vocabulary[Math.floor(Math.random() * vocabulary.length)];
      setCurrentWord(randomWord.english);
    }
  }, [vocabulary]);

  const handleTap = (word: string) => {
    if (word === currentWord) {
      setScore(score + 1);
      if (score + 1 >= vocabulary.length) {
        setGameComplete(true);
        onComplete();
      } else {
        const remainingWords = vocabulary.filter(v => v.english !== currentWord);
        const randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
        setCurrentWord(randomWord.english);
      }
    }
  };

  const playWord = () => {
    // In a real app, this would use text-to-speech
    console.log('Playing word:', currentWord);
  };

  if (gameComplete) {
    return (
      <div className="text-center p-8">
        <div className="text-6xl mb-4">🎉</div>
        <h3 className="text-2xl font-bold mb-2">Great Job!</h3>
        <p className="text-lg text-gray-600">You found all the words!</p>
        <div className="text-3xl font-bold text-primary mt-4">Score: {score}/{vocabulary.length}</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-4">Tap the Animal</h3>
        <div className="bg-blue-50 rounded-lg p-4 mb-4">
          <p className="text-lg mb-2">Listen and tap:</p>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl font-bold text-primary">{currentWord}</span>
            <button
              onClick={playWord}
              className="bg-primary text-white p-2 rounded-full hover:bg-primary/90"
            >
              <Volume2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-sm text-gray-600">Score: {score}/{vocabulary.length}</div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {vocabulary.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTap(item.english)}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-gray-200 hover:border-primary"
          >
            <div className="text-4xl mb-2">{item.emoji}</div>
            <div className="text-sm font-medium">{item.english}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

interface DragGameProps {
  vocabulary: Array<{ english: string; emoji: string; definition: string }>;
  onComplete: () => void;
}

export const DragGame: React.FC<DragGameProps> = ({ vocabulary, onComplete }) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);
  const [matches, setMatches] = useState<Record<string, string>>({});
  const [gameComplete, setGameComplete] = useState(false);

  const handleDragStart = (word: string) => {
    setDraggedItem(word);
  };

  const handleDrop = (definition: string) => {
    if (draggedItem) {
      const correctWord = vocabulary.find(v => v.definition === definition)?.english;
      if (correctWord === draggedItem) {
        setMatches(prev => ({ ...prev, [draggedItem]: definition }));
        if (Object.keys(matches).length + 1 >= vocabulary.length) {
          setGameComplete(true);
          onComplete();
        }
      }
      setDraggedItem(null);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  if (gameComplete) {
    return (
      <div className="text-center p-8">
        <div className="text-6xl mb-4">🎨</div>
        <h3 className="text-2xl font-bold mb-2">Perfect!</h3>
        <p className="text-lg text-gray-600">You matched everything correctly!</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-center">Drag and Match</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Words */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Words</h4>
          <div className="space-y-3">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                draggable={!matches[item.english]}
                onDragStart={() => handleDragStart(item.english)}
                className={`p-3 rounded-lg border-2 cursor-move transition-all ${
                  matches[item.english] 
                    ? 'bg-green-100 border-green-300 opacity-50' 
                    : 'bg-white border-gray-200 hover:border-primary'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{item.emoji}</div>
                  <div className="font-medium">{item.english}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Definitions */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Definitions</h4>
          <div className="space-y-3">
            {vocabulary.map((item, index) => (
              <div
                key={index}
                onDrop={() => handleDrop(item.definition)}
                onDragOver={handleDragOver}
                className={`p-3 rounded-lg border-2 transition-all ${
                  Object.values(matches).includes(item.definition)
                    ? 'bg-green-100 border-green-300'
                    : 'bg-white border-gray-200 hover:border-primary'
                }`}
              >
                <p className="text-sm text-gray-600">{item.definition}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MatchingGameProps {
  vocabulary: Array<{ english: string; emoji: string }>;
  onComplete: () => void;
}

export const MatchingGame: React.FC<MatchingGameProps> = ({ vocabulary, onComplete }) => {
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [lastFlipped, setLastFlipped] = useState<number | null>(null);

  // Create pairs of cards
  const cards = [...vocabulary, ...vocabulary].map((item, index) => ({
    ...item,
    id: index,
    pairId: index % vocabulary.length
  }));

  const handleCardClick = (index: number) => {
    if (flipped.includes(index) || matched.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (lastFlipped === null) {
      setLastFlipped(index);
    } else {
      // Check if cards match
      if (cards[lastFlipped].pairId === cards[index].pairId) {
        setMatched([...matched, lastFlipped, index]);
        if (matched.length + 2 >= cards.length) {
          onComplete();
        }
      } else {
        // Hide cards after a delay
        setTimeout(() => {
          setFlipped(flipped.filter(i => i !== lastFlipped && i !== index));
        }, 1000);
      }
      setLastFlipped(null);
    }
  };

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-center">Memory Match</h3>
      
      <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
        {cards.map((card, index) => {
          const isFlipped = flipped.includes(index) || matched.includes(index);
          const isMatched = matched.includes(index);
          
          return (
            <button
              key={index}
              onClick={() => handleCardClick(index)}
              className={`aspect-square rounded-lg border-2 transition-all duration-300 ${
                isMatched
                  ? 'bg-green-100 border-green-300'
                  : isFlipped
                  ? 'bg-white border-primary'
                  : 'bg-gray-200 border-gray-300 hover:border-primary'
              }`}
            >
              {isFlipped ? (
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="text-3xl mb-2">{card.emoji}</div>
                  <div className="text-sm font-medium">{card.english}</div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-2xl">❓</div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="text-center">
        <p className="text-sm text-gray-600">
          Matched: {matched.length / 2} / {vocabulary.length}
        </p>
      </div>
    </div>
  );
};

export default { TapGame, DragGame, MatchingGame }; 