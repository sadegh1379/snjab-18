import { useCallback, useState } from "react";

export const useModal = (
  initialStatus = false
): [boolean, () => void, () => void] => {
  const [isOpen, setIsOpen] = useState(initialStatus);

  const openModal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return [isOpen, openModal, closeModal];
};
