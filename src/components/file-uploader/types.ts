interface IFile {
  path: string;
  lastModified: number;
  lastModifiedDate: Date;
  name: string;
  size: number;
  type: string;
  webkitRelativePath: string;
}

type TAccepts = "images" | "pdf" | "text" | "zip" | "excel";

interface IStaticFile {
  name: string;
  url: string;
  id: number;
}

interface IFileUploaderProps {
  title?: string;
  files: File[];
  staticFiles?: IStaticFile[];
  disabledRemoveStaticFiles?: boolean;
  disabledRemoveFiles?: boolean;
  onRemoveStaticFile?: (id: number) => void;
  caption?: string;
  onChangeFiles: (files: File[]) => void;
  onRemoveFile?: (name: string) => void;
  containerClassName?: string;
  disabled?: boolean;
  placeholder?: string;
  accepts?: TAccepts[];
  maxFiles?: number;
  maxSize?: number;
  multiple?: boolean;
  showDropContainer?: boolean;
}

export type { IFile, IFileUploaderProps, IStaticFile };
