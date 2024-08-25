import { Button, Modal } from "components";

import { type FC } from "react";
import { IntroductionModuleModalContainer } from "../css/introduction-modal.style";

interface IIntroductionModuleModalProps {
  onClose: () => void;
  description: string;
  introVideo: string;
}

const IntroductionModuleModal: FC<IIntroductionModuleModalProps> = ({
  onClose,
  description,
  introVideo,
}) => {
  return (
    <Modal isOpen={true} onClose={onClose} title="معرفی">
      <IntroductionModuleModalContainer>
        <div className="d-flex flex-column align-items-center">
          <video
            className="introduction_video_container"
            width="100%"
            height="400"
            controls
          >
            <source src={introVideo} type="video/mp4" />{" "}
          </video>
          <p className="introduction_video_description">{description}</p>
          <Button className="close_button" onClick={onClose}>
            بستن
          </Button>
        </div>
      </IntroductionModuleModalContainer>
    </Modal>
  );
};

export default IntroductionModuleModal;
