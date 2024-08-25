import { Button, Modal } from "components";

import { type FC } from "react";

interface IActivateModuleModalProps {
  onClose: () => void;
}

const ActivateModuleModal: FC<IActivateModuleModalProps> = ({ onClose }) => {
  return (
    <Modal isOpen={true} onClose={onClose} title="فعالسازی">
      <div className="d-flex flex-column align-items-center gap-1">
        <strong className="mt-3 text-center lh-base mx-3">
          همراه همیشگی سنجاب، متاسفانه این ماژول در بیمارستان شما فعال نمی باشد
          جهت اطلاع از قیمت و نحوه فعالسازی با ما در تماس باشید .
        </strong>
        <div className="d-flex align-items-center f_iran_sans my-5 gap-3">
          <h3>
            <strong>09101666691</strong>
          </h3>
          -
          <h3>
            <strong>09354192487</strong>
          </h3>
        </div>
        <small className="mt-4">24 ساعته پاسخگوی شما هستیم.</small>
        <p className="mt-1 tracking-widest text-center">
          روابط عمومی سامانه نوین جامع اطلاعات بیمارستان (سنجاب)
        </p>

        <Button className="w-25 mt-3" onClick={onClose}>
          متوجه شدم
        </Button>
      </div>
    </Modal>
  );
};

export default ActivateModuleModal;
