import { FormatOptionLabelMeta } from "react-select";

interface ISelectedLogoOption {
  label: string;
  value: string | number;
  logo: string;
}
interface ISelectProps {
  containerClassName?: string;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  title?: string;
  options: ISelectedLogoOption[];
  value: ISelectedLogoOption | null;
  onChange: (value: ISelectedLogoOption) => void;
  isClearable?: boolean;
  isLoading?: boolean;
  isSearchable?: boolean;
  required?: boolean;
  formatOptionLabel?: (
    data: ISelectedLogoOption,
    formatOptionLabelMeta: FormatOptionLabelMeta<ISelectedLogoOption>
  ) => React.ReactNode;
}

export type { ISelectProps, ISelectedLogoOption };
