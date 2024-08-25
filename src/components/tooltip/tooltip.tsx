import { FC } from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import { default as BTooltip } from "react-bootstrap/Tooltip";
import { TooltipContainer } from "./tooltip.style";
import { ITooltipProps } from "./types";

export const Tooltip: FC<ITooltipProps> = ({
  children,
  containerClassName,
  className,
  placement = "top",
  show,
  text,
}) => {
  return (
    <TooltipContainer className={`${containerClassName || ""}`}>
      <OverlayTrigger
        show={show ? true : undefined}
        placement={placement}
        overlay={(props) => (
          <BTooltip id={`tooltip-${placement}`} {...props}>
            {text}
          </BTooltip>
        )}
      >
        <span className={className || ""}>{children}</span>
      </OverlayTrigger>
    </TooltipContainer>
  );
};
