import { Button, Modal } from "components";
import { FC } from "react";
import { CiWarning } from "react-icons/ci";
import { useTheme } from "styled-components";
import { IConfirmationModalProps } from "./types";

export const ConfirmationModal: FC<IConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  confirmText = "بله",
  cancelText = "خیر",
  confirmButtonColorType,
  closeButtonColorType,
  confirmButtonVariant = "primary",
  closeButtonVariant = "outlined",
  size = "sm",
  isLoading = false,
  className,
}) => {
  const { colors } = useTheme();
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="اخطار"
      className={className}
      size={size}
    >
      <div>
        <div className="d-flex flex-column gap-2 justify-content-center align-items-center mt-2 text-center">
          <CiWarning
            style={{ color: colors.background.warningLight }}
            size={100}
          />
          <p style={{ fontSize: 16 }}>{title}</p>
        </div>
        <div className="d-flex align-items-center mt-4 gap-2 ">
          <Button
            colorType={closeButtonColorType}
            variant={closeButtonVariant}
            onClick={onClose}
          >
            {cancelText}
          </Button>
          <Button
            colorType={confirmButtonColorType}
            variant={confirmButtonVariant}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
