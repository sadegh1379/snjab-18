import { DateObject } from "react-multi-date-picker";

interface IDatePickerProps {
  className?: string;
  containerClassName?: string;
  onChange: (val: DateObject | null) => void;
  disabled?: boolean;
  value: DateObject | null;
  format?: string;
  placeholder?: string;
  title?: string;
  required?: boolean;
}

export type { IDatePickerProps };
