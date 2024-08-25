import { FC } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { FaRegWindowRestore } from "react-icons/fa";
import DatePicker from "react-multi-date-picker";
import { useTheme } from "styled-components";
import { DateContainer } from "./date-picker.style";
import { IDatePickerProps } from "./types";

export const DatePickerInput: FC<IDatePickerProps> = ({
  className,
  onChange,
  value,
  disabled = false,
  format = "YYYY-MM-DD",
  placeholder,
  containerClassName,
  title,
  required = false,
}) => {
  const { mode } = useTheme();

  return (
    <DateContainer className={`${containerClassName || ""}`}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}
      <div className="input_container">
        <DatePicker
          className={`${mode === "dark" ? "bg-dark" : ""} ${className || ""}`}
          value={value}
          onChange={(val) => onChange(val)}
          containerClassName="date_picker_container"
          inputClass="date_picker"
          disabled={disabled}
          calendar={persian}
          locale={persian_fa}
          showOtherDays={true}
          format={format}
          monthYearSeparator="-"
          placeholder={placeholder || ""}
        />
        <span className="left_icon">
          <FaRegWindowRestore className="date_icon" size={20} />
        </span>
      </div>
    </DateContainer>
  );
};
