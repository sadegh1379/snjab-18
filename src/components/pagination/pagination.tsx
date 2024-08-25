import { ChangeEvent, FC, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { toPersianNumber } from "utils/to-persian-number";
import { PaginationContainer } from "./pagination.style";
import { IPaginationProps } from "./types";

export const Pagination: FC<IPaginationProps> = ({
  className,
  totalPages,
  currentPage,
  onChange,
}) => {
  const [pagination, setPagination] = useState<{
    page: number | null;
    debounce: boolean;
  }>({ page: null, debounce: true });

  useEffect(() => {
    setPagination({ page: currentPage, debounce: true });
  }, []);

  useEffect(() => {
    if (
      pagination.page &&
      pagination.page !== currentPage &&
      pagination.debounce
    ) {
      const DelayedBouncer = setTimeout(() => {
        onChange(pagination.page!);
      }, 600);
      return () => clearTimeout(DelayedBouncer);
    }
  }, [pagination.page]);

  const onInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const data = e.target.value;
    if (data === "") {
      setPagination({ page: null, debounce: false });
    } else {
      if (+data < 1) {
        setPagination({ page: 1, debounce: true });
      } else if (+data > totalPages) {
        setPagination({ page: totalPages, debounce: true });
      } else {
        setPagination({ page: +data, debounce: true });
      }
    }
  };

  const onPrevClickHandler = () => {
    if (pagination.page && pagination.page > 1) {
      onChange(pagination.page - 1);
      setPagination({ page: pagination.page - 1, debounce: false });
    }
  };
  const onNextClickHandler = () => {
    if (pagination.page && pagination.page < totalPages) {
      onChange(pagination.page + 1);
      setPagination({ page: pagination.page + 1, debounce: false });
    } else if (!pagination.page) {
      if (currentPage !== 1) {
        onChange(1);
      }
      setPagination({ page: 1, debounce: false });
    }
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <PaginationContainer
      className={`d-flex align-items-center ${className || ""}`}
    >
      <IoIosArrowForward className="arrow" onClick={onPrevClickHandler} />
      <input
        type="number"
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        step={1}
        onWheel={(e) => e.currentTarget.blur()}
        onChange={onInputChangeHandler}
        value={pagination.page ?? ""}
        placeholder={`${toPersianNumber(totalPages)}`}
        className="text-center border-0 pagination"
      />
      <p className="text">الی</p>
      <p className="text">{toPersianNumber(totalPages)}</p>
      <IoIosArrowBack className="arrow" onClick={onNextClickHandler} />
    </PaginationContainer>
  );
};
