import { RingLoader } from "components";
import { useMemo, useState } from "react";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

import { BsDatabaseExclamation } from "react-icons/bs";
import { MdOutlineSwapVert } from "react-icons/md";
import { TableContainer } from "./table.style";
import { ISort, ITableProps } from "./types";

export const Table = ({
  data,
  headers,
  onSort,
  defaultSort,
  className,
  headerClassName,
  tableClassName,
  noDataTitle,
  enableRowHighlight = false,
}: ITableProps) => {
  const [sort, setSort] = useState<ISort>(
    defaultSort
      ? { ...defaultSort }
      : {
          key: "",
          sortType: null,
        }
  );

  const memoizedHeaders = useMemo(() => headers, [headers]);

  const sortHandler = (key: string) => {
    if (key === sort.key) {
      const sortType = sort.sortType === "DESC" ? "ASC" : "DESC";
      setSort({
        key,
        sortType,
      });
      onSort?.(key, sortType);
    } else {
      setSort({
        key: key,
        sortType: "DESC",
      });
      onSort?.(key, "DESC");
    }
  };

  const renderRows = () => {
    return data?.map((row, rowIndex) => {
      const isSeen = enableRowHighlight ? row[row.length - 1] : false;
      return (
        <tr
          className={`tbody_tr ${isSeen ? "row_highlight" : ""}`}
          key={`tr-item-${rowIndex}`}
        >
          {row
            .slice(0, enableRowHighlight ? -1 : row.length)
            .map((cell, colIndex) => (
              <td className={`tbody_td`} key={`td-item-${colIndex}`}>
                {cell}
              </td>
            ))}
        </tr>
      );
    });
  };

  const sortViewHandler = (key: string) => {
    if (key === sort.key && sort.sortType !== null) {
      return sort.sortType === "DESC" ? (
        <IoIosArrowRoundDown size={20} color="#ffffff" />
      ) : (
        <IoIosArrowRoundUp size={20} color="#ffffff" />
      );
    }
    return <MdOutlineSwapVert size={20} color="#ffffff" />;
  };

  return (
    <TableContainer className={`${className || ""}`}>
      <table className={`table ${tableClassName || ""}`}>
        <thead className={`${headerClassName || ""}`}>
          <tr className={`${headerClassName || ""}`}>
            {memoizedHeaders.map((column, index) =>
              column.sortable && column.key ? (
                <th
                  key={`th-item-${index}`}
                  onClick={() => sortHandler(column.key as string)}
                  className="thead_th pointer"
                >
                  <div className="sortContainer">
                    {column.child}
                    {column.sortable && (
                      <span className="column_filter">
                        {sortViewHandler(column.key)}
                      </span>
                    )}
                  </div>
                </th>
              ) : (
                <th key={`th-item-${index}`} className="thead_th">
                  <div className={`sortContainer`}>{column.child}</div>
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>{data && data.length > 0 && renderRows()}</tbody>
      </table>
      {data === null && (
        <div className="loading_container">
          <RingLoader />
        </div>
      )}
      {data && data.length === 0 && (
        <div className="empty_container">
          <div>
            <p className="not_found_text">
              {noDataTitle || (
                <>
                  <BsDatabaseExclamation size={70} />
                  <p>موردی یافت نشد.</p>
                </>
              )}
            </p>
          </div>
        </div>
      )}
    </TableContainer>
  );
};
