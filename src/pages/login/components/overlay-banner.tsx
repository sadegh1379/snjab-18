import type { FC } from "react";
import { Fade } from "react-awesome-reveal";
import { OverlayBannerContainer } from "../css/overlay-banner.style";

interface IOverlayBannerProps {}

const overlayBanner: FC<IOverlayBannerProps> = () => {
  return (
    <Fade triggerOnce direction="left" duration={500}>
      <OverlayBannerContainer></OverlayBannerContainer>;
    </Fade>
  );
};

export default overlayBanner;
