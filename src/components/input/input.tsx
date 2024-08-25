import React, { forwardRef } from "react";
import { InputContainer } from "./input.style";
import { IInputProps } from "./types";

const Input = forwardRef<HTMLInputElement, IInputProps>(
  (
    {
      className,
      containerClassName,
      placeholder,
      required = false,
      onChange,
      value,
      title,
      type = "text",
      disabled = false,
      autoFocus = false,
      autoComplete,
      icon,
      inputMode,
      justNumber = false,
    },
    ref
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (!justNumber || /^\d*$/.test(newValue)) {
        onChange(newValue);
      }
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (justNumber && (e.key < "0" || e.key > "9")) {
        e.preventDefault();
      }
    };

    return (
      <InputContainer className={`${containerClassName || ""}`}>
        {title && (
          <p className="title">
            {title}
            {required && <span className="required">*</span>}
          </p>
        )}
        <div className="input_container">
          <input
            type={type}
            disabled={disabled}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            autoFocus={autoFocus}
            className={`input ${className || ""}`}
            value={value}
            placeholder={placeholder || ""}
            ref={ref}
            inputMode={inputMode}
          />
          {icon && <span className="left_icon">{icon}</span>}
        </div>
      </InputContainer>
    );
  }
);

export { Input };
