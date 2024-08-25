import { KeyboardEventHandler } from "react";

interface IInputProps {
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: (val: string) => void;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
  autoComplete?: string;
  value: string | number;
  title?: string;
  required?: boolean;
  type?: string;
  autoFocus?: boolean;
  icon?: React.ReactNode;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  justNumber?: boolean;
}

export type { IInputProps };
