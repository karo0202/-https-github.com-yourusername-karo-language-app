class VoiceService {
  private speechSynthesis: SpeechSynthesis;
  private voices: SpeechSynthesisVoice[] = [];
  private currentUtterance: SpeechSynthesisUtterance | null = null;
  private isSpeaking = false;

  constructor() {
    this.speechSynthesis = window.speechSynthesis;
    this.loadVoices();
  }

  private loadVoices() {
    // Load voices when they become available
    if (this.speechSynthesis.getVoices().length > 0) {
      this.voices = this.speechSynthesis.getVoices();
    } else {
      this.speechSynthesis.onvoiceschanged = () => {
        this.voices = this.speechSynthesis.getVoices();
      };
    }
  }

  private getPreferredVoice(): SpeechSynthesisVoice | null {
    // Try to find a female voice first, then any available voice
    const voice = this.voices.find(v => 
      v.name.includes('Female') || 
      v.name.includes('female') ||
      v.name.includes('Samantha') ||
      v.name.includes('Victoria')
    ) || this.voices[0];
    
    return voice || null;
  }

  // Filter out emojis and special characters, keep only readable text
  private filterText(text: string): string {
    // Remove emojis and special characters, keep letters, numbers, spaces, and basic punctuation
    return text
      .replace(/[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu, '') // Remove emojis
      .replace(/[^\w\s.,!?;:'"()-]/g, '') // Keep only letters, numbers, spaces, and basic punctuation
      .replace(/\s+/g, ' ') // Replace multiple spaces with single space
      .trim(); // Remove leading/trailing spaces
  }

  public speak(text: string, options: {
    rate?: number;
    pitch?: number;
    volume?: number;
    onStart?: () => void;
    onEnd?: () => void;
    onError?: (error: any) => void;
  } = {}) {
    if (this.isSpeaking) {
      this.stop();
    }

    const filteredText = this.filterText(text);
    
    if (!filteredText) {
      console.log('No readable text found after filtering emojis');
      if (options.onEnd) options.onEnd();
      return;
    }

    // Stop any current speech
    this.stop();

    const utterance = new SpeechSynthesisUtterance(filteredText);
    
    // Set voice
    const preferredVoice = this.getPreferredVoice();
    if (preferredVoice) {
      utterance.voice = preferredVoice;
    }

    // Set properties
    utterance.rate = options.rate || 0.9;
    utterance.pitch = options.pitch || 1.0;
    utterance.volume = options.volume || 1.0;

    // Set event handlers
    utterance.onstart = () => {
      console.log('Started speaking:', filteredText);
      if (options.onStart) options.onStart();
    };

    utterance.onend = () => {
      console.log('Finished speaking:', filteredText);
      this.isSpeaking = false;
      if (options.onEnd) options.onEnd();
    };

    utterance.onerror = (event) => {
      console.error('Speech synthesis error:', event);
      this.isSpeaking = false;
      if (options.onError) options.onError(event);
    };

    // Store current utterance and speak
    this.currentUtterance = utterance;
    this.isSpeaking = true;
    this.speechSynthesis.speak(utterance);
  }

  public stop() {
    if (this.speechSynthesis.speaking) {
      this.speechSynthesis.cancel();
    }
    if (this.currentUtterance) {
      this.currentUtterance = null;
    }
    this.isSpeaking = false;
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.voices;
  }

  // Special method for kids' learning with slower, clearer speech
  public speakForKids(text: string, onComplete?: () => void) {
    if (this.isSpeaking) {
      this.stop();
    }

    const filteredText = this.filterText(text);
    
    if (!filteredText) {
      console.log('No readable text found after filtering emojis');
      if (onComplete) onComplete();
      return;
    }

    this.speak(filteredText, {
      rate: 0.8, // Slower for kids
      pitch: 1.2, // Higher pitch for kids
      volume: 1.0,
      onStart: () => {
        console.log('Started speaking:', filteredText);
      },
      onEnd: () => {
        console.log('Finished speaking:', filteredText);
        if (onComplete) onComplete();
      },
      onError: (error) => {
        console.error('Speech error:', error);
        if (onComplete) onComplete();
      }
    });
  }

  // Method for character voices with different personalities
  public speakAsCharacter(text: string, characterName: string, onComplete?: () => void) {
    if (this.isSpeaking) {
      this.stop();
    }

    const filteredText = this.filterText(text);
    
    if (!filteredText) {
      console.log('No readable text found after filtering emojis');
      if (onComplete) onComplete();
      return;
    }

    this.speak(filteredText, {
      rate: 0.8,
      pitch: 1.0,
      volume: 1.0,
      onStart: () => {
        console.log(`${characterName} is speaking:`, filteredText);
      },
      onEnd: () => {
        console.log(`${characterName} finished speaking:`, filteredText);
        if (onComplete) onComplete();
      },
      onError: (error) => {
        console.error('Character speech error:', error);
        if (onComplete) onComplete();
      }
    });
  }

  public isCurrentlySpeaking(): boolean {
    return this.isSpeaking;
  }

  public setVoice(voice: SpeechSynthesisVoice): void {
    if (this.currentUtterance) {
      this.currentUtterance.voice = voice;
    }
  }

  public setRate(rate: number): void {
    if (this.currentUtterance) {
      this.currentUtterance.rate = rate;
    }
  }

  public setPitch(pitch: number): void {
    if (this.currentUtterance) {
      this.currentUtterance.pitch = pitch;
    }
  }

  public setVolume(volume: number): void {
    if (this.currentUtterance) {
      this.currentUtterance.volume = volume;
    }
  }
}

const voiceService = new VoiceService();
export default voiceService; 