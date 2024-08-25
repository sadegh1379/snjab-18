import { FC } from "react";
import Select from "react-select";
import { useTheme } from "styled-components";
import { MultiSelectContainer } from "./multi-select.style";
import { IMultiSelectProps } from "./types";

export const MultiSelectInput: FC<IMultiSelectProps> = ({
  containerClassName,
  className,
  placeholder,
  title,
  disabled = false,
  options,
  onChange,
  value,
  isClearable,
  isLoading,
  isSearchable = true,
  required = false,
}) => {
  const { mode, colors } = useTheme();
  return (
    <MultiSelectContainer className={`${containerClassName || ""}`}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}
      <Select
        onChange={(selectedOption) =>
          onChange(selectedOption as IGSelectOption[])
        }
        value={value}
        styles={{
          control: (styles, { isDisabled }) => ({
            ...styles,
            backgroundColor: isDisabled
              ? colors.background.secondary
              : colors.background.primary,
            borderRadius: "9px",
            borderColor: colors.border.primary,
            boxShadow: "none",
            padding: "8px 16px 8px 5px",
            ":hover": {
              borderColor: colors.border.primary,
            },
            "@media (max-width: 768px)": {
              padding: "5px 3px 4px 3px",
            },
          }),
          input: (styles) => ({
            ...styles,
            color: colors.text.primary,
          }),
          singleValue: (styles) => ({
            ...styles,
            color: colors.text.primary,
          }),
          option: (styles) => ({
            ...styles,
            backgroundColor:
              mode === "light" ? colors.background.primary : "#3a3a3c",
            marginTop: 1,
            color: colors.text.primary,
            cursor: "pointer",
            "&:hover": {
              backgroundColor: colors.background.secondary,
            },
          }),
          menu: (styles) => ({
            ...styles,
            backgroundColor: mode === "light" ? "#FAFAFA" : "#272729",
            padding: "3px 6px",
          }),
          menuList: (styles) => ({
            ...styles,
            "&::-webkit-scrollbar": {
              width: "3px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: mode === "light" ? "#e2e2e2" : "#3a3a3c",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#1a6edb",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#1a6edb",
            },
          }),
          multiValue: (styles) => ({
            ...styles,
            backgroundColor: mode === "light" ? "#e6e6e6" : "#3a3a3c",
            padding: "3px 6px",
          }),
          multiValueLabel: (styles) => ({
            ...styles,
            color: colors.text.primary,
          }),
        }}
        className={`select ${className || ""}`}
        options={options}
        isDisabled={disabled}
        placeholder={placeholder || ""}
        isClearable={isClearable}
        isMulti
        isLoading={isLoading}
        isSearchable={isSearchable}
        noOptionsMessage={() => "موردی یافت نشد"}
        loadingMessage={() => "در حال دریافت..."}
      />
    </MultiSelectContainer>
  );
};
