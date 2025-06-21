import { useState, useEffect } from 'react';
import { useLevel } from '../context/LevelContext';
import { vocabularyData } from '../data/vocabularyData';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react';

function VocabularyBuilder() {
  const { level } = useLevel();
  const [words, setWords] = useState(vocabularyData[level]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    setWords(vocabularyData[level]);
    setCurrentWordIndex(0);
    setIsFlipped(false);
  }, [level]);

  const currentWord = words[currentWordIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentWordIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Vocabulary Builder</h1>
        <p className="text-gray-600">Level: <span className="font-semibold text-blue-600">{level}</span></p>
      </div>

      <div className="perspective-1000">
        <div 
          className={`relative w-full h-64 transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          {/* Card Front */}
          <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-blue-500 to-purple-600 text-white flex items-center justify-center rounded-2xl shadow-lg cursor-pointer">
            <h2 className="text-5xl font-bold">{currentWord.word}</h2>
          </div>

          {/* Card Back */}
          <div className="absolute w-full h-full backface-hidden bg-white text-gray-800 flex flex-col justify-center p-8 rounded-2xl shadow-lg cursor-pointer rotate-y-180">
            <h3 className="text-2xl font-bold mb-2">{currentWord.word} <span className="text-lg font-normal text-gray-500">{currentWord.pronunciation}</span></h3>
            <p className="text-lg mb-4">{currentWord.definition}</p>
            <p className="text-md italic text-gray-600">"{currentWord.example}"</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8">
        <button onClick={handlePrev} className="flex items-center px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Previous
        </button>
        <p className="text-gray-600">{currentWordIndex + 1} / {words.length}</p>
        <button onClick={handleNext} className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Next
          <ArrowRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
}

export default VocabularyBuilder;