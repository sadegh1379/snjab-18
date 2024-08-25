import { useWebkitSpeechRecognition } from "hooks/use-webkit-speech-recognition";
import React, { ChangeEvent, useEffect, useState } from "react";
import { FaMicrophone } from "react-icons/fa"; // وارد کردن آیکون‌ها
import { MdRecordVoiceOver } from "react-icons/md";
import { toast } from "react-toastify"; // وارد کردن تابع toast

interface VoiceInputProps {
  value: string;
  onChange: (text: string) => void;
  language?: string;
  placeholder?: string;
}

const VoiceInput: React.FC<VoiceInputProps> = ({
  value,
  onChange,
  language = "en-US",
  placeholder = "Type or use voice input",
}) => {
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleResult = (transcript: string) => {
    onChange(transcript);
  };

  const handleError = (event: SpeechRecognitionErrorEvent) => {
    console.error("Speech recognition error", event);
    toast.error("An error occurred with speech recognition. Please try again.");
  };

  const { startListening, stopListening } = useWebkitSpeechRecognition({
    language,
    onResult: handleResult,
    onError: handleError,
    interimResults: false,
  });

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      toast.error("Your browser does not support speech recognition.");
      return;
    }

    const checkMicrophonePermission = async () => {
      try {
        const result = await navigator.permissions.query({
          //@ts-ignore
          name: "microphone",
        });
        if (result.state === "denied") {
          toast.error(
            "Microphone access has been denied. Please enable it in your browser settings."
          );
        }
      } catch (err) {
        console.error("Permission query error", err);
        toast.error("An error occurred while checking microphone permissions.");
      }
    };

    checkMicrophonePermission();
  }, []);

  const handleVoiceClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
    setIsListening(!isListening);
  };

  return (
    <div
      style={{ position: "relative", display: "flex", alignItems: "center" }}
    >
      <input
        type="text"
        value={value}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        placeholder={placeholder}
        style={{ paddingRight: "30px", flex: 1 }}
      />
      {isListening ? (
        <MdRecordVoiceOver
          className="voice-icon listening"
          onClick={handleVoiceClick}
          style={{ position: "absolute", right: "10px", cursor: "pointer" }}
        />
      ) : (
        <FaMicrophone
          className="voice-icon"
          onClick={handleVoiceClick}
          style={{ position: "absolute", right: "10px", cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default VoiceInput;
