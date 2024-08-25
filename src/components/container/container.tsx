import { forwardRef, HTMLAttributes } from "react";
import { ContainerStyle } from "./container-style";

export const Container = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, className, ...rest }, ref) => {
  return (
    <ContainerStyle ref={ref} className={`${className || ""}`} {...rest}>
      {children}
    </ContainerStyle>
  );
});
