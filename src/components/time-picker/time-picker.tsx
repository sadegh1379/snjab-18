import { FC } from "react";
import persian_fa from "react-date-object/locales/persian_fa";
import { ImAlarm } from "react-icons/im";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import { useTheme } from "styled-components";
import { TimeContainer } from "./time-picker.style";
import { IDatePickerProps } from "./types";

export const TimePickerInput: FC<IDatePickerProps> = ({
  className,
  onChange,
  value,
  disabled = false,
  placeholder,
  containerClassName,
  title,
  required = false,
}) => {
  const { mode } = useTheme();

  return (
    <TimeContainer className={`${containerClassName || ""}`}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}
      <div className="input_container">
        <DatePicker
          disableDayPicker
          plugins={[<TimePicker />]}
          className={`${mode === "dark" ? "bg-dark" : ""} ${className || ""}`}
          containerClassName="time_picker_container"
          value={value}
          onChange={(val) => onChange(val)}
          inputClass="date_picker"
          disabled={disabled}
          locale={persian_fa}
          format="HH:mm"
          placeholder={placeholder || ""}
        />
        <span className="left_icon">
          <ImAlarm size={20} />
        </span>
      </div>
    </TimeContainer>
  );
};
