import { FC } from "react";
import { DotLoaderContainer } from "./dot.style";

export const DotLoader: FC<{ className?: string }> = ({ className }) => {
  return (
    <DotLoaderContainer className={className || ""}>
      <div className="dot"></div>
      <div className="dot"></div>
      <div className="dot"></div>
    </DotLoaderContainer>
  );
};
