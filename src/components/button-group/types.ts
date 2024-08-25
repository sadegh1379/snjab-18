interface IButtonGroups {
  items: {
    title: string;
    value: string;
  }[];
  containerClassName?: string;
  buttonsClassName?: string;
  value: string;
  onClick: (value: string) => void;
  title?: string;
  required?: boolean;
}

export type { IButtonGroups };
