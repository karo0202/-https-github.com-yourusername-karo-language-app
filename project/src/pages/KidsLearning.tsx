import React, { useState } from 'react';
import { kidsLearningData, KidsLesson } from '../data/kidsLearningData';
import { Star, Trophy, Award, Play, Volume2, BookOpen, Music, Gamepad2, PenTool } from 'lucide-react';
import voiceService from '../services/voiceService';
import { TapGame, DragGame, MatchingGame, ColorMatchGame } from '../components/KidsGames';
import WritingPractice from '../components/KidsWriting';

const KidsLearning: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<KidsLesson>(kidsLearningData[0]);
  const [currentSection, setCurrentSection] = useState<'overview' | 'story' | 'vocabulary' | 'song' | 'writing' | 'games' | 'translations'>('overview');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showRewards, setShowRewards] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [currentGame, setCurrentGame] = useState<string | null>(null);
  const [gameScore, setGameScore] = useState(0);
  const [completedGames, setCompletedGames] = useState<string[]>([]);
  const [writingCompleted, setWritingCompleted] = useState(false);

  const handleLessonSelect = (lesson: KidsLesson) => {
    setSelectedLesson(lesson);
    setCurrentSection('overview');
    setCurrentCharacterIndex(0);
    setCurrentStoryIndex(0);
    setCurrentGame(null);
    setGameScore(0);
    setCompletedGames([]);
    setWritingCompleted(false);
  };

  const nextCharacter = () => {
    setCurrentCharacterIndex((prev) => 
      prev < selectedLesson.cartoonCharacters.length - 1 ? prev + 1 : 0
    );
  };

  const nextStoryLine = () => {
    setCurrentStoryIndex((prev) => 
      prev < selectedLesson.story.length - 1 ? prev + 1 : 0
    );
  };

  const playVoiceLine = (text: string, characterName?: string) => {
    if (isSpeaking) {
      voiceService.stop();
      setIsSpeaking(false);
      return;
    }

    setIsSpeaking(true);
    
    if (characterName) {
      voiceService.speakAsCharacter(text, characterName, () => {
        setIsSpeaking(false);
      });
    } else {
      voiceService.speakForKids(text, () => {
        setIsSpeaking(false);
      });
    }
  };

  const playCharacterVoice = () => {
    const character = selectedLesson.cartoonCharacters[currentCharacterIndex];
    const voiceLine = character.voiceLines[0];
    playVoiceLine(voiceLine, character.name);
  };

  const startGame = (gameType: string) => {
    setCurrentGame(gameType);
    setGameScore(0);
    voiceService.speakForKids(`Let's play ${gameType}! Have fun!`);
  };

  const handleGameComplete = (gameType: string) => {
    setCompletedGames(prev => [...prev, gameType]);
    setCurrentGame(null);
    setGameScore(prev => prev + 10);
    
    // Award rewards based on completed games
    if (completedGames.length + 1 >= selectedLesson.interactiveGames.length) {
      voiceService.speakForKids("Amazing! You completed all the games! You're a superstar!", () => {
        setShowRewards(true);
      });
    } else {
      voiceService.speakForKids("Great job! You completed the game!");
    }
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Cartoon Characters */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">🌟 Meet Your Friends!</h3>
        <div className="flex justify-center mb-4">
          <button
            onClick={nextCharacter}
            className="text-6xl hover:scale-110 transition-transform cursor-pointer"
          >
            {selectedLesson.cartoonCharacters[currentCharacterIndex].emoji}
          </button>
        </div>
        <div className="text-center">
          <h4 className="text-xl font-semibold mb-2">
            {selectedLesson.cartoonCharacters[currentCharacterIndex].name}
          </h4>
          <p className="text-gray-600 mb-3">
            {selectedLesson.cartoonCharacters[currentCharacterIndex].personality}
          </p>
          <button
            onClick={playCharacterVoice}
            className={`px-4 py-2 rounded-lg transition-colors flex items-center mx-auto ${
              isSpeaking 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-primary text-white hover:bg-primary/90'
            }`}
          >
            <Volume2 className={`w-4 h-4 mr-2 ${isSpeaking ? 'animate-pulse' : ''}`} />
            {isSpeaking ? 'Stop' : `Listen to ${selectedLesson.cartoonCharacters[currentCharacterIndex].name}`}
          </button>
        </div>
      </div>

      {/* Learning Objective */}
      <div className="bg-green-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">🎯 What You'll Learn</h3>
        <p className="text-lg text-center text-gray-700">
          {selectedLesson.learningObjective}
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-yellow-50 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">📚</div>
          <div className="font-semibold">{selectedLesson.vocabulary.length}</div>
          <div className="text-sm text-gray-600">Words</div>
        </div>
        <div className="bg-blue-50 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🎵</div>
          <div className="font-semibold">1</div>
          <div className="text-sm text-gray-600">Song</div>
        </div>
        <div className="bg-purple-50 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🎮</div>
          <div className="font-semibold">{selectedLesson.interactiveGames.length}</div>
          <div className="text-sm text-gray-600">Games</div>
        </div>
        <div className="bg-red-50 rounded-lg p-4 text-center">
          <div className="text-2xl mb-2">🏅</div>
          <div className="font-semibold">{selectedLesson.rewards.length}</div>
          <div className="text-sm text-gray-600">Rewards</div>
        </div>
      </div>

      {/* Progress Section */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-center">🎮 Your Progress</h3>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-2">{gameScore} Points</div>
          <div className="text-sm text-gray-600 mb-4">
            Completed Games: {completedGames.length}/{selectedLesson.interactiveGames.length}
          </div>
          <div className="flex justify-center space-x-2 mb-4">
            {selectedLesson.interactiveGames.map((game, index) => (
              <div
                key={index}
                className={`w-4 h-4 rounded-full ${
                  completedGames.includes(game.title)
                    ? 'bg-green-500'
                    : 'bg-gray-300'
                }`}
                title={game.title}
              />
            ))}
          </div>
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${writingCompleted ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span className="text-sm text-gray-600">Writing</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${completedGames.length >= selectedLesson.interactiveGames.length ? 'bg-green-500' : 'bg-gray-300'}`}></div>
              <span className="text-sm text-gray-600">Games</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStory = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">📚 Story Time!</h3>
        <div className="max-w-2xl mx-auto">
          {selectedLesson.story.map((line, index) => (
            <div
              key={index}
              className={`mb-4 p-4 rounded-lg ${
                index === currentStoryIndex 
                  ? 'bg-white shadow-lg scale-105 transition-transform' 
                  : 'bg-white/50'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className="text-3xl">{line.emoji}</div>
                <div className="flex-1">
                  <div className="font-semibold text-primary">{line.speaker}</div>
                  <div className="text-lg">{line.text}</div>
                </div>
                <button
                  onClick={() => playVoiceLine(line.text, line.speaker)}
                  className={`text-primary hover:text-primary/80 p-2 rounded-full ${
                    isSpeaking ? 'bg-red-100' : 'hover:bg-gray-100'
                  }`}
                >
                  <Volume2 className={`w-5 h-5 ${isSpeaking ? 'animate-pulse' : ''}`} />
                </button>
              </div>
            </div>
          ))}
          <div className="text-center mt-4">
            <button
              onClick={nextStoryLine}
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Next Line
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderVocabulary = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center mb-6">🔤 Vocabulary Flashcards</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {selectedLesson.vocabulary.map((word, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="text-center">
              <div className="text-4xl mb-3">{word.emoji}</div>
              <h4 className="text-2xl font-bold text-primary mb-2">{word.english}</h4>
              <p className="text-gray-600 mb-4">{word.definition}</p>
              
              {/* Translations */}
              <div className="space-y-2 text-sm">
                {word.translations.arabic && (
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-semibold">Arabic:</span> {word.translations.arabic}
                  </div>
                )}
                {word.translations.spanish && (
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-semibold">Spanish:</span> {word.translations.spanish}
                  </div>
                )}
                {word.translations.kurdish && (
                  <div className="bg-gray-50 p-2 rounded">
                    <span className="font-semibold">Kurdish:</span> {word.translations.kurdish}
                  </div>
                )}
              </div>
              
              <button
                onClick={() => playVoiceLine(word.english)}
                className={`mt-4 px-4 py-2 rounded-lg transition-colors flex items-center mx-auto ${
                  isSpeaking 
                    ? 'bg-red-500 text-white hover:bg-red-600' 
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                <Volume2 className={`w-4 h-4 mr-2 ${isSpeaking ? 'animate-pulse' : ''}`} />
                {isSpeaking ? 'Stop' : 'Listen'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSong = () => (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">🎵 Let's Sing!</h3>
        <div className="max-w-2xl mx-auto">
          <h4 className="text-xl font-semibold text-center mb-4">{selectedLesson.song.title}</h4>
          <div className="bg-white rounded-lg p-6 shadow-lg">
            {selectedLesson.song.lyrics.map((line, index) => (
              <div key={index} className="text-center mb-3 text-lg">
                {line}
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => playVoiceLine(selectedLesson.song.lyrics.join(' '))}
              className={`px-6 py-3 rounded-lg transition-colors flex items-center mx-auto ${
                isSpeaking 
                  ? 'bg-red-500 text-white hover:bg-red-600' 
                  : 'bg-primary text-white hover:bg-primary/90'
              }`}
            >
              <Music className={`w-5 h-5 mr-2 ${isSpeaking ? 'animate-pulse' : ''}`} />
              {isSpeaking ? 'Stop Singing' : 'Sing Along!'}
            </button>
          </div>
          <p className="text-center text-gray-600 mt-2">
            Rhythm: {selectedLesson.song.rhythm}
          </p>
        </div>
      </div>
    </div>
  );

  const renderWriting = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center mb-6">✍️ Interactive Writing Practice</h3>
      
      {!writingCompleted ? (
        <div className="bg-white rounded-xl shadow-lg p-6">
          <WritingPractice
            letters={selectedLesson.writingPractice.letters}
            words={selectedLesson.writingPractice.words}
            onComplete={() => {
              setWritingCompleted(true);
              voiceService.speakForKids("Amazing! You completed all the writing practice! You're a great writer!", () => {
                setGameScore(prev => prev + 20);
              });
            }}
          />
        </div>
      ) : (
        <div className="text-center p-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold mb-2">Writing Master!</h3>
          <p className="text-lg text-gray-600 mb-4">You completed all the writing practice!</p>
          <div className="text-3xl font-bold text-primary mb-4">+20 Points!</div>
          <button
            onClick={() => setWritingCompleted(false)}
            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Practice Again
          </button>
        </div>
      )}

      {/* Writing Instructions */}
      <div className="bg-yellow-50 rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-4 text-center">📝 Writing Tips</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <h5 className="font-semibold">For Letters:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Start at the top and go down</li>
              <li>• Follow the guide lines</li>
              <li>• Make big, clear strokes</li>
              <li>• Take your time</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h5 className="font-semibold">For Words:</h5>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Write each letter carefully</li>
              <li>• Leave space between letters</li>
              <li>• Follow the tracing guide</li>
              <li>• Practice makes perfect!</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Writing Tools Info */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-4 text-center">🛠️ How to Use</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl mb-2">🖱️</div>
            <h5 className="font-semibold">Mouse</h5>
            <p className="text-sm text-gray-600">Click and drag to write</p>
          </div>
          <div>
            <div className="text-2xl mb-2">👆</div>
            <h5 className="font-semibold">Touch</h5>
            <p className="text-sm text-gray-600">Use your finger on tablets</p>
          </div>
          <div>
            <div className="text-2xl mb-2">🗑️</div>
            <h5 className="font-semibold">Clear</h5>
            <p className="text-sm text-gray-600">Start over anytime</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderGames = () => {
    // If a game is currently active, render it
    if (currentGame) {
      const gameData = selectedLesson.interactiveGames.find(g => g.title === currentGame);
      
      if (!gameData) return null;

      // Prepare vocabulary data for games
      const vocabularyForGames = selectedLesson.vocabulary.map(word => ({
        english: word.english,
        emoji: word.emoji,
        definition: word.definition
      }));

      return (
        <div className="space-y-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">🎮 {currentGame}</h3>
            <button
              onClick={() => setCurrentGame(null)}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              Back to Games
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            {currentGame === 'Tap the Animal' && (
              <TapGame
                vocabulary={vocabularyForGames}
                onComplete={() => handleGameComplete(currentGame)}
              />
            )}
            
            {currentGame === 'Drag and Match' && (
              <DragGame
                vocabulary={vocabularyForGames}
                onComplete={() => handleGameComplete(currentGame)}
              />
            )}
            
            {currentGame === 'Memory Match' && (
              <MatchingGame
                vocabulary={vocabularyForGames}
                onComplete={() => handleGameComplete(currentGame)}
              />
            )}

            {currentGame === 'Animal Sounds' && (
              <DragGame
                vocabulary={vocabularyForGames}
                onComplete={() => handleGameComplete(currentGame)}
              />
            )}

            {currentGame === 'Color the Picture' && (
              <DragGame
                vocabulary={vocabularyForGames}
                onComplete={() => handleGameComplete(currentGame)}
              />
            )}

            {currentGame === 'Color Match' && (
              <DragGame
                vocabulary={vocabularyForGames}
                onComplete={() => handleGameComplete(currentGame)}
              />
            )}

            {currentGame === 'Find the Color' && (
              <ColorMatchGame
                vocabulary={vocabularyForGames}
                onComplete={() => handleGameComplete(currentGame)}
              />
            )}
          </div>
        </div>
      );
    }

    // Render game selection
    return (
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-center mb-6">🎮 Interactive Games</h3>
        
        {/* Game Progress */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-6">
          <h4 className="text-xl font-semibold text-center mb-4">Your Progress</h4>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">{gameScore} Points</div>
            <div className="text-sm text-gray-600">
              Completed: {completedGames.length}/{selectedLesson.interactiveGames.length} Games
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedLesson.interactiveGames.map((game, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3">
                  {game.type === 'tap' && '👆'}
                  {game.type === 'drag' && '🖱️'}
                  {game.type === 'match' && '🔗'}
                  {game.type === 'trace' && '✏️'}
                </div>
                <h4 className="text-xl font-semibold">{game.title}</h4>
                <p className="text-gray-600">{game.description}</p>
                
                {/* Completion Status */}
                {completedGames.includes(game.title) && (
                  <div className="mt-2 text-green-600 font-semibold">
                    ✅ Completed!
                  </div>
                )}
              </div>
              
              <div className="space-y-2 mb-4">
                {game.instructions.map((instruction, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>{instruction}</span>
                  </div>
                ))}
              </div>
              
              <button
                onClick={() => startGame(game.title)}
                className={`w-full py-3 rounded-lg transition-colors flex items-center justify-center ${
                  completedGames.includes(game.title)
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                <Gamepad2 className="w-5 h-5 mr-2" />
                {completedGames.includes(game.title) ? 'Play Again' : 'Play Game'}
              </button>
            </div>
          ))}
        </div>

        {/* All Games Completed Celebration */}
        {completedGames.length >= selectedLesson.interactiveGames.length && (
          <div className="text-center p-8 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold mb-2">Congratulations!</h3>
            <p className="text-lg text-gray-600 mb-4">You've completed all the games!</p>
            <button
              onClick={() => setShowRewards(true)}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all"
            >
              <Trophy className="w-5 h-5 inline mr-2" />
              View Rewards
            </button>
          </div>
        )}
      </div>
    );
  };

  const renderTranslations = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center mb-6">🌍 Translations</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Arabic */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold mb-4 text-center">العربية</h4>
          <div className="space-y-2">
            {Object.entries(selectedLesson.translations.arabic).map(([english, arabic]) => (
              <div key={english} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{english}</span>
                <span className="text-right">{arabic}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Spanish */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold mb-4 text-center">Español</h4>
          <div className="space-y-2">
            {Object.entries(selectedLesson.translations.spanish).map(([english, spanish]) => (
              <div key={english} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{english}</span>
                <span className="text-right">{spanish}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Kurdish */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold mb-4 text-center">کوردی</h4>
          <div className="space-y-2">
            {Object.entries(selectedLesson.translations.kurdish).map(([english, kurdish]) => (
              <div key={english} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span className="font-medium">{english}</span>
                <span className="text-right">{kurdish}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderRewards = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center mb-6">🏅 Your Rewards</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {selectedLesson.rewards.map((reward, index) => (
          <div key={index} className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 text-center">
            <div className="text-4xl mb-3">{reward.emoji}</div>
            <h4 className="text-xl font-semibold mb-2">{reward.name}</h4>
            <p className="text-gray-600">{reward.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSection = () => {
    switch (currentSection) {
      case 'overview':
        return renderOverview();
      case 'story':
        return renderStory();
      case 'vocabulary':
        return renderVocabulary();
      case 'song':
        return renderSong();
      case 'writing':
        return renderWriting();
      case 'games':
        return renderGames();
      case 'translations':
        return renderTranslations();
      default:
        return renderOverview();
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">🌟 Kids' English Learning</h1>
        <p className="text-xl text-gray-600">Fun and interactive lessons for young learners!</p>
      </div>

      {/* Lesson Selection */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Choose Your Lesson</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {kidsLearningData.map((lesson) => (
            <button
              key={lesson.id}
              onClick={() => handleLessonSelect(lesson)}
              className={`p-4 rounded-xl border-2 transition-all ${
                selectedLesson.id === lesson.id
                  ? 'border-primary bg-primary/10'
                  : 'border-gray-200 hover:border-primary/50'
              }`}
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{lesson.topic === 'Animals' ? '🐾' : '🌈'}</div>
                <h3 className="font-semibold">{lesson.title}</h3>
                <p className="text-sm text-gray-600">Age {lesson.ageGroup} • {lesson.difficulty}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap justify-center gap-2">
          {[
            { key: 'overview', label: 'Overview', icon: BookOpen },
            { key: 'story', label: 'Story', icon: BookOpen },
            { key: 'vocabulary', label: 'Vocabulary', icon: BookOpen },
            { key: 'song', label: 'Song', icon: Music },
            { key: 'writing', label: 'Writing', icon: PenTool },
            { key: 'games', label: 'Games', icon: Gamepad2 },
            { key: 'translations', label: 'Translations', icon: BookOpen },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setCurrentSection(key as any)}
              className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                currentSection === key
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Icon className="w-4 h-4 mr-2" />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="mb-8">
        {renderSection()}
      </div>

      {/* Rewards Button */}
      <div className="text-center">
        <button
          onClick={() => setShowRewards(!showRewards)}
          className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-6 py-3 rounded-lg hover:from-yellow-500 hover:to-orange-600 transition-all flex items-center mx-auto"
        >
          <Trophy className="w-5 h-5 mr-2" />
          {showRewards ? 'Hide Rewards' : 'Show Rewards'}
        </button>
      </div>

      {/* Rewards Modal */}
      {showRewards && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            {renderRewards()}
            <div className="text-center mt-6">
              <button
                onClick={() => setShowRewards(false)}
                className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default KidsLearning; 