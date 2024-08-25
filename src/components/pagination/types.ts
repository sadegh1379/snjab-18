
interface IPaginationProps {
  totalPages: number;
  currentPage: number;
  onChange: (page: number) => void;
  className?: string;
}


export type { IPaginationProps };
