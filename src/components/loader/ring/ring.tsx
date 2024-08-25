import { FC } from "react";
import { RingLoaderContainer } from "./ring.style";
import { IRingLoader } from "./types";

export const RingLoader: FC<IRingLoader> = ({ className }) => {
  return (
    <RingLoaderContainer className={className || ""}>
      <span className="ring_loader"></span>
    </RingLoaderContainer>
  );
};
