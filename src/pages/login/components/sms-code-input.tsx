import React, {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { SmsCodeInputContainer } from "../css/sms-code-input.style";

interface SmsCodeInputProps {
  length?: number;
  onComplete: (code: string) => void;
  hasError?: boolean;
}

const SmsCodeInput: React.FC<SmsCodeInputProps> = ({
  length = 6,
  onComplete,
  hasError = false,
}) => {
  const [code, setCode] = useState<string[]>(new Array(length).fill(""));
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    // Focus on the first input on initial render
    inputsRef.current[0]?.focus();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      } else {
        onComplete(newCode.join(""));
      }
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && code[index] === "") {
      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  return (
    <SmsCodeInputContainer>
      {code.map((digit, index) => (
        <input
          key={index}
          className={`sms_input ${hasError ? "error" : ""}`}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          ref={(el) => (inputsRef.current[index] = el)}
        />
      ))}
    </SmsCodeInputContainer>
  );
};

export default SmsCodeInput;
