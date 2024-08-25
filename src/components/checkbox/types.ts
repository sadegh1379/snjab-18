interface ICheckBoxProps {
  title?: string;
  className?: string;
  disabled?: boolean;
  checked: boolean;
  onClick: () => void;
}

export type { ICheckBoxProps };
