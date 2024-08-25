import { FC } from "react";
import { TextareaContainer } from "./textarea.style";
import { ITextareaProps } from "./types";

export const Textarea: FC<ITextareaProps> = ({
  containerClassName,
  className,
  placeholder,
  onChange,
  value,
  disabled = false,
  title,
  readOnly = false,
  required = false,
  rows,
}) => {
  return (
    <TextareaContainer className={`${containerClassName || ""}`}>
      {title && (
        <p className="title">
          {title}
          {required && <span className="required">*</span>}
        </p>
      )}
      <textarea
        readOnly={readOnly}
        disabled={disabled}
        rows={rows}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          onChange(e.target.value)
        }
        value={value}
        placeholder={placeholder || ""}
        className={`textarea ${className || ""}`}
      />
    </TextareaContainer>
  );
};
