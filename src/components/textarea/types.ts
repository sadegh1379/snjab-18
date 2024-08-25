interface ITextareaProps {
  containerClassName?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  onChange: (val: string) => void;
  value: string;
  readOnly?: boolean;
  title?: string;
  required?: boolean;
  rows?: number;
}

export type { ITextareaProps };
