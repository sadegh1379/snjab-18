import { Button, Modal } from "components";
import { type FC } from "react";
import { BsCheckCircle } from "react-icons/bs";
import { SubmitSuccessContainer } from "../css/submit-success-modal.style";

interface ISubmitSuccessModalProps {
  onClose: () => void;
  type: boolean;
  trackingCode: string;
}

const SubmitSuccessModal: FC<ISubmitSuccessModalProps> = ({
  onClose,
  trackingCode,
  type,
}) => {
  return (
    <Modal isOpen={true} onClose={onClose}>
      <SubmitSuccessContainer>
        <BsCheckCircle className="icon_success" size={90} />
        <p className="subject">
          {type ? "شکایت" : "تقدیر"} شمـا با مـوفقیت ثبت گردیـد.{" "}
        </p>
        <p>کـد پیگیـری</p>
        <p className="tracking_code">{trackingCode}</p>
        <p className="text">ایـن کـد را برای پیگیـری نزد خـود حفظ کنیـد</p>
        <Button className="close_button" onClick={onClose}>
          بستن
        </Button>
      </SubmitSuccessContainer>
    </Modal>
  );
};

export default SubmitSuccessModal;
