import { FC } from "react";
import Select from "react-select";
import { useTheme } from "styled-components";
import { SelectWithLogoContainer } from "./select-with-logo.style";
import { ISelectProps, ISelectedLogoOption } from "./types";

export const SelectWithLogoInput: FC<ISelectProps> = ({
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
    <SelectWithLogoContainer className={`${containerClassName || ""}`}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}
      <Select
        onChange={(selectedOption) =>
          onChange(selectedOption as ISelectedLogoOption)
        }
        value={value}
        formatOptionLabel={(item) => (
          <div className="option_container">
            <img className="logo" src={item.logo} alt="" />
            <p className="title">{item.label}</p>
          </div>
        )}
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
          placeholder: (styles) => ({
            ...styles,
            fontSize: "12px",
            color: colors.text.secondary,
          }),
          input: (styles) => ({
            ...styles,
            color: colors.text.primary,
            fontSize: "12px",
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
            fontSize: 14,
          }),
        }}
        className={`select ${className || ""}`}
        options={options}
        isDisabled={disabled}
        placeholder={placeholder || ""}
        isClearable={isClearable}
        isLoading={isLoading}
        isSearchable={isSearchable}
        noOptionsMessage={() => "موردی یافت نشد"}
        loadingMessage={() => "در حال دریافت..."}
      />
    </SelectWithLogoContainer>
  );
};
