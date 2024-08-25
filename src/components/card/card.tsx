import type { FC } from "react";
import { CardContainer } from "./card.style";

interface ICardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const Card: FC<ICardProps> = ({ children, title, className }) => {
  return (
    <CardContainer className={className || ""}>
      {title && <span className="info_title">{title}</span>}
      {children}
    </CardContainer>
  );
};
