class VoiceService {
  private speechSynthesis: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.loadVoices();
    
    // Listen for voices to be loaded
    this.speechSynthesis.addEventListener('voiceschanged', () => {
      this.loadVoices();
    });
  }

  private loadVoices() {
    this.voices = this.speechSynthesis.getVoices();
  }

  private getVoice(preferredLanguage: string = 'en-US'): SpeechSynthesisVoice | null {
    // Try to find a voice in the preferred language
    let voice = this.voices.find(v => v.lang.startsWith(preferredLanguage));
    
    // If not found, try to find any English voice
    if (!voice) {
      voice = this.voices.find(v => v.lang.startsWith('en'));
    }
    
    // If still not found, use the first available voice
    if (!voice && this.voices.length > 0) {
      voice = this.voices[0];
    }
    
    return voice || null;
  }

  public speak(text: string, options: {
    rate?: number;
    pitch?: number;
    volume?: number;
    language?: string;
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (error: any) => void;
  } = {}) {
    // Stop any current speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set voice
    const voice = this.getVoice(options.language);
    if (voice) {
      utterance.voice = voice;
    }

    // Set properties
    utterance.rate = options.rate || 0.8; // Slightly slower for kids
    utterance.pitch = options.pitch || 1.1; // Slightly higher pitch for kids
    utterance.volume = options.volume || 1.0;

    // Set event handlers
    if (options.onStart) {
      utterance.onstart = options.onStart;
    }
    
    if (options.onEnd) {
      utterance.onend = options.onEnd;
    }
    
    if (options.onError) {
      utterance.onerror = options.onError;
    }

    // Store current utterance and speak
    this.currentUtterance = utterance;
    this.speechSynthesis.speak(utterance);
  }

  public stop() {
    if (this.currentUtterance) {
      this.speechSynthesis.cancel();
      this.currentUtterance = null;
    }
  }

  public pause() {
    this.speechSynthesis.pause();
  }

  public resume() {
    this.speechSynthesis.resume();
  }

  public isSpeaking(): boolean {
    return this.speechSynthesis.speaking;
  }

  public getAvailableVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  // Special method for kids' learning with slower, clearer speech
  public speakForKids(text: string, onComplete?: () => void) {
    this.speak(text, {
      rate: 0.7, // Slower for kids
      pitch: 1.2, // Higher pitch for kids
      volume: 1.0,
      onStart: () => {
        console.log('Started speaking:', text);
      },
      onEnd: () => {
        console.log('Finished speaking:', text);
        if (onComplete) onComplete();
      },
      onError: (error) => {
        console.error('Speech error:', error);
      }
    });
  }

  // Method for character voices with different personalities
  public speakAsCharacter(text: string, characterName: string, onComplete?: () => void) {
    let rate = 0.8;
    let pitch = 1.1;

    // Adjust voice based on character
    switch (characterName.toLowerCase()) {
      case 'leo':
        rate = 0.7; // Slower, more deliberate
        pitch = 1.0; // Deeper voice
        break;
      case 'zoe':
        rate = 0.9; // Faster, more energetic
        pitch = 1.3; // Higher pitch
        break;
      case 'rainbow ray':
        rate = 0.8; // Medium speed
        pitch = 1.4; // Very high pitch for colorful character
        break;
      default:
        rate = 0.8;
        pitch = 1.1;
    }

    this.speak(text, {
      rate,
      pitch,
      volume: 1.0,
      onStart: () => {
        console.log(`${characterName} is speaking:`, text);
      },
      onEnd: () => {
        console.log(`${characterName} finished speaking`);
        if (onComplete) onComplete();
      },
      onError: (error) => {
        console.error('Character speech error:', error);
      }
    });
  }
}

// Create a singleton instance
const voiceService = new VoiceService();

export default voiceService; 