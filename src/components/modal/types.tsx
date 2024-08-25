import { ModalProps } from "react-bootstrap";

interface IModalProps {
  onClose: () => void;
  isOpen: boolean;
  title?: string;
  className?: string;
  children: React.ReactElement;
  size?: ModalProps["size"];
}

export type { IModalProps };
