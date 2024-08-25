import React from "react";
import { OverlayTriggerProps } from "react-bootstrap";

interface ITooltipProps {
  className?: string | undefined;
  containerClassName?: string | undefined;
  children: React.ReactNode;
  placement?: OverlayTriggerProps["placement"];
  show?: boolean;
  text: string;
}

export type { ITooltipProps };
