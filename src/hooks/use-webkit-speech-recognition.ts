import { MutableRefObject, useEffect, useRef, useState } from "react";

interface UseWebkitSpeechRecognitionProps {
  language?: string;
  onResult?: (transcript: string) => void;
  onError?: (event: SpeechRecognitionErrorEvent) => void;
  interimResults?: boolean;
}

interface UseWebkitSpeechRecognitionReturn {
  isListening: boolean;
  startListening: () => void;
  stopListening: () => void;
}

export const useWebkitSpeechRecognition = ({
  language = "en-US",
  onResult,
  onError,
  interimResults = false,
}: UseWebkitSpeechRecognitionProps): UseWebkitSpeechRecognitionReturn => {
  const [isListening, setIsListening] = useState(false);
  const recognitionRef: MutableRefObject<null | SpeechRecognition> =
    useRef(null);

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.error("Browser doesn't support Web Speech API");
      return;
    }

    const recognition = new (
      window as any
    ).webkitSpeechRecognition() as SpeechRecognition;
    recognition.continuous = false;
    recognition.interimResults = interimResults;
    recognition.lang = language;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0].transcript)
        .join("");
      onResult && onResult(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.error("Speech recognition error:", event.error, event.message);
      onError && onError(event);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current = recognition;

    return () => {
      recognition.stop();
    };
  }, [language, interimResults, onResult, onError]);

  const startListening = () => {
    if (recognitionRef.current && !isListening) {
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
    }
  };

  return { isListening, startListening, stopListening };
};
