interface IMultiSelectProps {
  containerClassName?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  title?: string;
  options: IGSelectOption[];
  value: IGSelectOption[] | null;
  onChange: (value: IGSelectOption[]) => void;
  isClearable?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  required?: boolean;
}

export type { IMultiSelectProps };
