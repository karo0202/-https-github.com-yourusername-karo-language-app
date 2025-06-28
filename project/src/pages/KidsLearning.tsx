import React, { useState } from 'react';
import { kidsLearningData, KidsLesson } from '../data/kidsLearningData';
import { Star, Trophy, Award, Play, Volume2, BookOpen, Music, Gamepad2, PenTool } from 'lucide-react';
import voiceService from '../services/voiceService';

const KidsLearning: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<KidsLesson>(kidsLearningData[0]);
  const [currentSection, setCurrentSection] = useState<'overview' | 'story' | 'vocabulary' | 'song' | 'writing' | 'games' | 'translations'>('overview');
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [showRewards, setShowRewards] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleLessonSelect = (lesson: KidsLesson) => {
    setSelectedLesson(lesson);
    setCurrentSection('overview');
    setCurrentCharacterIndex(0);
    setCurrentStoryIndex(0);
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
      <h3 className="text-2xl font-bold text-center mb-6">✍️ Writing Practice</h3>
      
      {/* Letters */}
      <div className="bg-yellow-50 rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-4 text-center">Practice Letters</h4>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {selectedLesson.writingPractice.letters.map((letter, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">{letter}</div>
              <div className="text-sm text-gray-600">
                {selectedLesson.writingPractice.instructions[index % selectedLesson.writingPractice.instructions.length]}
              </div>
              <button
                onClick={() => playVoiceLine(letter)}
                className="mt-2 text-primary hover:text-primary/80 text-sm"
              >
                <Volume2 className="w-3 h-3 inline mr-1" />
                Listen
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Words */}
      <div className="bg-blue-50 rounded-xl p-6">
        <h4 className="text-xl font-semibold mb-4 text-center">Practice Words</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedLesson.writingPractice.words.map((word, index) => (
            <div key={index} className="bg-white rounded-lg p-4 text-center shadow hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary mb-2">{word}</div>
              <div className="text-sm text-gray-600">
                Trace the letters carefully
              </div>
              <button
                onClick={() => playVoiceLine(word)}
                className="mt-2 text-primary hover:text-primary/80 text-sm"
              >
                <Volume2 className="w-3 h-3 inline mr-1" />
                Listen
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGames = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-center mb-6">🎮 Interactive Games</h3>
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
            </div>
            
            <div className="space-y-2 mb-4">
              {game.instructions.map((instruction, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{instruction}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
              <Gamepad2 className="w-5 h-5 mr-2" />
              Play Game
            </button>
          </div>
        ))}
      </div>
    </div>
  );

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