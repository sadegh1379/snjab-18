import { IButtonProps } from "components/button/types";
import { IModalProps } from "components/modal/types";

interface IConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonColorType?: IButtonProps["colorType"];
  closeButtonColorType?: IButtonProps["colorType"];
  confirmButtonVariant?: IButtonProps["variant"];
  closeButtonVariant?: IButtonProps["variant"];
  size?: IModalProps["size"];
  className?: string;
  isLoading?: boolean;
}

export type { IConfirmationModalProps };
