import React, { useRef, useEffect, useState } from 'react';
import { RotateCcw, Check, X, Volume2 } from 'lucide-react';
import voiceService from '../services/voiceService';

interface WritingCanvasProps {
  letter?: string;
  word?: string;
  onComplete?: () => void;
  showGuide?: boolean;
}

const WritingCanvas: React.FC<WritingCanvasProps> = ({ 
  letter, 
  word, 
  onComplete, 
  showGuide = true 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Set drawing styles
    ctx.strokeStyle = '#3B82F6'; // Blue color
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw guide lines if enabled
    if (showGuide) {
      drawGuideLines(ctx, canvas.width, canvas.height);
    }

    // Draw the letter/word to trace
    if (letter || word) {
      drawTraceGuide(ctx, canvas.width, canvas.height, letter || word || '');
    }
  }, [letter, word, showGuide]);

  const drawGuideLines = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    ctx.strokeStyle = '#E5E7EB'; // Light gray
    ctx.lineWidth = 1;
    
    // Top line
    ctx.beginPath();
    ctx.moveTo(50, height * 0.3);
    ctx.lineTo(width - 50, height * 0.3);
    ctx.stroke();
    
    // Middle line
    ctx.beginPath();
    ctx.moveTo(50, height * 0.5);
    ctx.lineTo(width - 50, height * 0.5);
    ctx.stroke();
    
    // Bottom line
    ctx.beginPath();
    ctx.moveTo(50, height * 0.7);
    ctx.lineTo(width - 50, height * 0.7);
    ctx.stroke();
    
    // Reset stroke style for drawing
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 4;
  };

  const drawTraceGuide = (ctx: CanvasRenderingContext2D, width: number, height: number, text: string) => {
    ctx.fillStyle = '#D1D5DB'; // Light gray for guide
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    
    const x = width / 2;
    const y = height / 2;
    
    ctx.fillText(text, x, y);
  };

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    setHasDrawn(true);
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e as any).clientX - rect.left || (e as any).touches[0].clientX - rect.left;
    const y = (e as any).clientY - rect.top || (e as any).touches[0].clientY - rect.top;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const rect = canvas.getBoundingClientRect();
    const x = (e as any).clientX - rect.left || (e as any).touches[0].clientX - rect.left;
    const y = (e as any).clientY - rect.top || (e as any).touches[0].clientY - rect.top;
    
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Redraw guide lines and trace guide
    if (showGuide) {
      drawGuideLines(ctx, canvas.width, canvas.height);
    }
    if (letter || word) {
      drawTraceGuide(ctx, canvas.width, canvas.height, letter || word || '');
    }
    
    setHasDrawn(false);
  };

  const playSound = () => {
    if (isSpeaking) {
      voiceService.stop();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = letter || word || '';
    if (!textToSpeak) return;

    setIsSpeaking(true);
    voiceService.speakForKids(`Write the letter ${textToSpeak}`, () => {
      setIsSpeaking(false);
    });
  };

  const handleComplete = () => {
    if (hasDrawn) {
      voiceService.speakForKids("Great job writing! Well done!", () => {
        if (onComplete) onComplete();
      });
    } else {
      voiceService.speakForKids("Try writing something first!");
    }
  };

  return (
    <div className="space-y-4">
      <div className="text-center">
        <h3 className="text-xl font-bold mb-2">
          {letter ? `Write the letter: ${letter}` : `Write the word: ${word}`}
        </h3>
        <div className="flex items-center justify-center space-x-2 mb-4">
          <button
            onClick={playSound}
            className={`p-2 rounded-full transition-colors ${
              isSpeaking 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            <Volume2 className={`w-4 h-4 ${isSpeaking ? 'animate-pulse' : ''}`} />
          </button>
          <button
            onClick={clearCanvas}
            className="p-2 bg-gray-500 text-white rounded-full hover:bg-gray-600 transition-colors"
            title="Clear canvas"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
        <canvas
          ref={canvasRef}
          className="w-full h-64 bg-white cursor-crosshair touch-none"
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
        />
      </div>

      <div className="flex justify-center space-x-4">
        <button
          onClick={clearCanvas}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors flex items-center"
        >
          <X className="w-4 h-4 mr-2" />
          Clear
        </button>
        <button
          onClick={handleComplete}
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center"
        >
          <Check className="w-4 h-4 mr-2" />
          I'm Done!
        </button>
      </div>

      <div className="text-center text-sm text-gray-600">
        <p>Use your mouse or finger to write on the canvas</p>
        {showGuide && <p>Follow the gray guide lines and trace the letter</p>}
      </div>
    </div>
  );
};

interface WritingPracticeProps {
  letters: string[];
  words: string[];
  onComplete?: () => void;
}

const WritingPractice: React.FC<WritingPracticeProps> = ({ letters, words, onComplete }) => {
  const [currentMode, setCurrentMode] = useState<'letters' | 'words'>('letters');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [completedItems, setCompletedItems] = useState<string[]>([]);

  const currentItems = currentMode === 'letters' ? letters : words;
  const currentItem = currentItems[currentIndex];

  const handleItemComplete = () => {
    setCompletedItems(prev => [...prev, currentItem]);
    
    if (currentIndex < currentItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // All items in current mode completed
      if (currentMode === 'letters' && completedItems.length + 1 >= letters.length) {
        // Switch to words mode
        setCurrentMode('words');
        setCurrentIndex(0);
        setCompletedItems([]);
      } else if (currentMode === 'words' && completedItems.length + 1 >= words.length) {
        // All completed
        if (onComplete) onComplete();
      }
    }
  };

  const resetPractice = () => {
    setCurrentMode('letters');
    setCurrentIndex(0);
    setCompletedItems([]);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Writing Practice</h2>
        
        {/* Progress indicator */}
        <div className="mb-4">
          <div className="flex justify-center space-x-2 mb-2">
            {currentItems.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex
                    ? 'bg-primary'
                    : index < currentIndex
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">
            {currentMode === 'letters' ? 'Letters' : 'Words'}: {currentIndex + 1} of {currentItems.length}
          </p>
        </div>

        {/* Mode selector */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => {
              setCurrentMode('letters');
              setCurrentIndex(0);
              setCompletedItems([]);
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentMode === 'letters'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Letters
          </button>
          <button
            onClick={() => {
              setCurrentMode('words');
              setCurrentIndex(0);
              setCompletedItems([]);
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentMode === 'words'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Words
          </button>
        </div>
      </div>

      <WritingCanvas
        letter={currentMode === 'letters' ? currentItem : undefined}
        word={currentMode === 'words' ? currentItem : undefined}
        onComplete={handleItemComplete}
        showGuide={true}
      />

      <div className="text-center">
        <button
          onClick={resetPractice}
          className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export { WritingCanvas, WritingPractice };
export default WritingPractice; 