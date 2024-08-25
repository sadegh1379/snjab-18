import { DotLoader } from "components";
import { forwardRef } from "react";
import { ButtonContainer } from "./button.style";
import { IButtonProps } from "./types";

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  (
    {
      size = "medium",
      variant = "primary",
      className,
      colorType = "info",
      children,
      onClick,
      disabled = false,
      isLoading = false,
      type = "button",
    },
    ref
  ) => {
    return (
      <ButtonContainer
        role="button"
        ref={ref}
        className={`${size} ${variant} ${colorType} ${disabled && "disabled"} ${className || ""}`}
        disabled={isLoading || disabled}
        onClick={() => (isLoading ? {} : onClick?.())}
        type={type}
      >
        {isLoading ? <DotLoader /> : children}
      </ButtonContainer>
    );
  }
);
