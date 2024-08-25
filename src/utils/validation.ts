interface ValidationFunctions {
  isIranianPhoneNumber: (value: string) => boolean;
  isEnglishChars: (value: string) => boolean;
  isPersianChars: (value: string) => boolean;
  isNumeric: (value: string) => boolean;
  isLengthValid: (
    value: string,
    minLength: number,
    maxLength: number
  ) => boolean;
  startsWith: (value: string, startValue: string) => boolean;
}

export const validation: ValidationFunctions = {
  isIranianPhoneNumber: (value: string) => {
    const iranPhoneRegex: RegExp = /^(?:\+98|0)?9[0-9]{9}$/;
    return iranPhoneRegex.test(value);
  },

  isEnglishChars: (value: string) => {
    const englishRegex: RegExp = /^[a-zA-Z\s]+$/;
    return englishRegex.test(value);
  },

  isPersianChars: (value: string) => {
    const persianRegex: RegExp = /^[\u0600-\u06FF\s]+$/;
    return persianRegex.test(value);
  },

  isNumeric: (value: string) => {
    const numericRegex: RegExp = /^[0-9]+$/;
    return numericRegex.test(value);
  },

  isLengthValid: (value: string, minLength: number, maxLength: number) => {
    return value.length >= minLength && value.length <= maxLength;
  },

  startsWith: (value: string, startValue: string) => {
    return value.startsWith(startValue);
  },
};

export default validation;
