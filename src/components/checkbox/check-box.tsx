import type { FC } from "react";
import Form from "react-bootstrap/Form";
import { CheckBoxContainer } from "./check-box.style";
import { ICheckBoxProps } from "./types";

export const CheckBox: FC<ICheckBoxProps> = ({
  title,
  className,
  disabled = false,
  checked = false,
  onClick,
}) => {
  return (
    <CheckBoxContainer className={className || ""}>
      <Form.Check
        type="checkbox"
        id="default-checkbox"
        className="checkbox_input"
        label={title}
        disabled={disabled}
        checked={checked}
        onClick={() => onClick?.()}
      />
    </CheckBoxContainer>
  );
};
