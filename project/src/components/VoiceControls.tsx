import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Settings, Play, Pause } from 'lucide-react';
import voiceService from '../services/voiceService';

interface VoiceControlsProps {
  className?: string;
}

const VoiceControls: React.FC<VoiceControlsProps> = ({ className = '' }) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<string>('');
  const [speechRate, setSpeechRate] = useState(0.8);
  const [speechPitch, setSpeechPitch] = useState(1.1);

  useEffect(() => {
    // Load available voices
    const loadVoices = () => {
      const voices = voiceService.getAvailableVoices();
      setAvailableVoices(voices);
      
      // Set default voice (prefer English)
      const englishVoice = voices.find(v => v.lang.startsWith('en'));
      if (englishVoice) {
        setSelectedVoice(englishVoice.name);
      } else if (voices.length > 0) {
        setSelectedVoice(voices[0].name);
      }
    };

    loadVoices();
    
    // Listen for voices to be loaded
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
    
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', loadVoices);
    };
  }, []);

  const toggleMute = () => {
    if (isMuted) {
      setIsMuted(false);
      voiceService.resume();
    } else {
      setIsMuted(true);
      voiceService.stop();
    }
  };

  const togglePause = () => {
    if (isPaused) {
      setIsPaused(false);
      voiceService.resume();
    } else {
      setIsPaused(true);
      voiceService.pause();
    }
  };

  const testVoice = () => {
    voiceService.speak("Hello! This is a test of the voice system.", {
      rate: speechRate,
      pitch: speechPitch,
      onEnd: () => {
        console.log('Voice test completed');
      }
    });
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Mute/Unmute Button */}
      <button
        onClick={toggleMute}
        className={`p-2 rounded-full transition-colors ${
          isMuted 
            ? 'bg-red-500 text-white hover:bg-red-600' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
        title={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
      </button>

      {/* Pause/Resume Button */}
      {voiceService.isSpeaking() && (
        <button
          onClick={togglePause}
          className={`p-2 rounded-full transition-colors ${
            isPaused 
              ? 'bg-green-500 text-white hover:bg-green-600' 
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
          title={isPaused ? 'Resume' : 'Pause'}
        >
          {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
        </button>
      )}

      {/* Settings Button */}
      <button
        onClick={() => setShowSettings(!showSettings)}
        className="p-2 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
        title="Voice Settings"
      >
        <Settings className="w-4 h-4" />
      </button>

      {/* Settings Panel */}
      {showSettings && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border p-4 min-w-64 z-50">
          <h3 className="font-semibold mb-3">Voice Settings</h3>
          
          {/* Voice Selection */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Voice
            </label>
            <select
              value={selectedVoice}
              onChange={(e) => setSelectedVoice(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md text-sm"
            >
              {availableVoices.map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name} ({voice.lang})
                </option>
              ))}
            </select>
          </div>

          {/* Speech Rate */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Speed: {speechRate.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={speechRate}
              onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Speech Pitch */}
          <div className="mb-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Pitch: {speechPitch.toFixed(1)}x
            </label>
            <input
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={speechPitch}
              onChange={(e) => setSpeechPitch(parseFloat(e.target.value))}
              className="w-full"
            />
          </div>

          {/* Test Button */}
          <button
            onClick={testVoice}
            className="w-full bg-primary text-white py-2 px-3 rounded-md text-sm hover:bg-primary/90 transition-colors"
          >
            Test Voice
          </button>

          {/* Close Button */}
          <button
            onClick={() => setShowSettings(false)}
            className="w-full mt-2 bg-gray-200 text-gray-700 py-2 px-3 rounded-md text-sm hover:bg-gray-300 transition-colors"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default VoiceControls; 