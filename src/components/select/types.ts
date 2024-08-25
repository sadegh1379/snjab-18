import { FormatOptionLabelMeta } from "react-select";

interface ISelectProps {
  containerClassName?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  title?: string;
  options: IGSelectOption[];
  value: IGSelectOption | null;
  onChange: (value: IGSelectOption) => void;
  isClearable?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  required?: boolean;
  formatOptionLabel?: (
    data: IGSelectOption,
    formatOptionLabelMeta: FormatOptionLabelMeta<IGSelectOption>
  ) => React.ReactNode;
}

export type { ISelectProps };
