import { GETSuggestions } from "api/crm";
import { ISuggestionResponse } from "api/crm/types";
import {
  Button,
  Container,
  Helmet,
  Pagination,
  PublicHeader,
  Table,
  Tooltip,
  YearSelectSection,
} from "components";
import {
  PriorityHighIcon,
  PriorityLowIcon,
  PriorityMediumIcon,
} from "components/icons";
import { useModal } from "hooks";
import { useEffect, useMemo, useState, type FC } from "react";
import { CgMoreVerticalO } from "react-icons/cg";
import { FcFeedback, FcRefresh } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "state-manager/store";
import { FilterBox, FinalFeedbackModal } from "./components";
import { CrmContainer } from "./css/crm.style";
import { IFilterValues } from "./types";

const headers = [
  {
    child: "ردیف",
  },
  {
    child: "اولویت",
  },
  { child: "کد پیگیـری" },
  { child: "تاریـخ شکایت" },
  { child: "نوع گزارش" },
  {
    child: "نام و نام خانوادگی بیمار",
  },
  {
    child: "واحد مورد نظـر",
  },
  {
    child: "گروه مورد شکایت / تقدیر",
  },
  {
    child: "فرد مورد شکایت / تقدیر",
  },

  {
    child: "وضعیت",
  },
  {
    child: "جزییات",
  },
  {
    child: "عملیات",
  },
];

const CrmPage: FC = () => {
  const [isOpenFeedbackModal, openFeedbackModal, closeFeedbackModal] =
    useModal();
  const { selectedYear } = useSelector((state: RootState) => state.profile);
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState<
    ISuggestionResponse["suggestions"] | null
  >(null);
  const [suggestionId, setSuggestionId] = useState("");
  const [page, setPage] = useState({
    currentPage: 1,
    totalPages: 1,
  });
  const [filterValues, setFilterValues] = useState<IFilterValues>({
    query: "",
    is_criticism: null,
    status: null,
    target_ward: "",
    target_group: null,
  });

  useEffect(() => {
    setSuggestions(null);
    const { is_criticism, query, status, target_group, target_ward } =
      filterValues;
    GETSuggestions({
      year: selectedYear,
      page: page.currentPage,
      is_criticism:
        is_criticism?.value === "is_criticism"
          ? true
          : is_criticism?.value === "no_criticism"
            ? false
            : undefined,
      query,
      status: status?.value || "",
      target_group: target_group?.value || "",
      target_ward: target_ward || "",
    }).then((res) => {
      setSuggestions(res.suggestions);
      setPage({
        ...page,
        totalPages: res.meta.total_page,
      });
    });
  }, [page.currentPage, selectedYear, filterValues]);

  const changePageHandler = (_page: number) => {
    setPage({
      ...page,
      currentPage: _page,
    });
  };

  const suggestionsData = useMemo(() => {
    if (suggestions) {
      return suggestions.map((suggestion, i) => [
        <span className="f_iran_sans">{i + 1}</span>,
        suggestion.priority === "high" ? (
          <PriorityHighIcon />
        ) : suggestion.priority === "low" ? (
          <PriorityLowIcon />
        ) : suggestion.priority === "medium" ? (
          <PriorityMediumIcon />
        ) : (
          "-"
        ),
        <Button className="f_iran_sans">{suggestion.tracking_code}</Button>,
        <span className="f_iran_sans">
          {suggestion.occurrence_date || "-"}
        </span>,
        suggestion.is_criticism ? " شکایت" : "تقدیر",
        suggestion.first_name || suggestion.last_name
          ? suggestion.first_name + " " + suggestion.last_name
          : "-",
        suggestion.target_ward || "-",
        suggestion.target_group || "-",
        suggestion.target_person || "-",

        <p className={`status_button ${suggestion.status}`}>
          {suggestion.status === "pending"
            ? "در حال بررسی"
            : suggestion.status === "done"
              ? " خاتمه یافته"
              : "مشاهده نشده"}
        </p>,
        <Tooltip text="جزییـات">
          <CgMoreVerticalO
            onClick={() => navigate(`/crm/${suggestion.id}`)}
            role="button"
            size={24}
          />
        </Tooltip>,
        <div className="icons_container">
          <Tooltip text="ارجـاعات">
            <FcRefresh
              onClick={() => navigate(`/crm/${suggestion.id}/referrer`)}
              role="button"
              size={24}
            />
          </Tooltip>
          <Tooltip text="بازخـورد نهـایی">
            <FcFeedback
              role="button"
              onClick={() => {
                setSuggestionId(suggestion.id);
                openFeedbackModal();
              }}
              size={24}
            />
          </Tooltip>
        </div>,
        suggestion.status === "submitted",
      ]);
    }
    return null;
  }, [suggestions]);

  const onChangeFilter = (
    name: keyof IFilterValues,
    value: string | IGSelectOption | null
  ) => {
    setFilterValues({
      ...filterValues,
      [name]: value,
    });
  };

  return (
    <CrmContainer>
      <Helmet title="CRM" />
      <PublicHeader
        title="نظام انتقادات و پیشنهادات"
        icon={<img className="app_logo" src="/img/crm/crm.webp" alt="" />}
        backPath="applications"
      />
      <YearSelectSection />
      <Container>
        <FilterBox
          filterValues={filterValues}
          onChangeFilter={onChangeFilter}
        />
        <div className="reports">
          {/* <Button disabled className="reports_excel">
            <BsFileEarmarkX size={24} />
          </Button>
          <Button className="reports_status">گزارش آماری</Button> */}
        </div>
        <Table
          tableClassName="list"
          data={suggestionsData}
          headers={headers}
          enableRowHighlight
        />
        <div className="pagination_container">
          <Pagination
            currentPage={page.currentPage}
            totalPages={page.totalPages}
            onChange={changePageHandler}
          />
        </div>
      </Container>
      {isOpenFeedbackModal && (
        <FinalFeedbackModal
          suggestionId={suggestionId}
          onClose={closeFeedbackModal}
        />
      )}
    </CrmContainer>
  );
};

export default CrmPage;
