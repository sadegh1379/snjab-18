import { GETSuggestionReferee } from "api/crm";
import { IReferralsResponse } from "api/crm/types";
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
import { useEffect, useMemo, useState, type FC } from "react";
import { CgMoreVerticalO } from "react-icons/cg";
import { FcRefresh } from "react-icons/fc";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { RootState } from "state-manager/store";
import { FilterBox } from "./components";
import { CrmContainer } from "./css/crm.style";
import { IFilterValues } from "./types";

const headers = [
  {
    child: "ردیـف",
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

const CrmReferralPage: FC = () => {
  const { selectedYear } = useSelector((state: RootState) => state.profile);
  const navigate = useNavigate();

  const [suggestions, setSuggestions] = useState<
    IReferralsResponse["referrals"] | null
  >(null);
  const [page, setPage] = useState({
    currentPage: 1,
    totalPages: 1,
  });
  const [filterValues, setFilterValues] = useState<IFilterValues>({
    query: "",
    is_criticism: null,
    status: null,
    target_ward: null,
    target_group: null,
  });

  useEffect(() => {
    setSuggestions(null);
    const { is_criticism, query, status, target_group, target_ward } =
      filterValues;
    GETSuggestionReferee({
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
      setSuggestions(res.referrals);
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
        suggestion.first_name + " " + suggestion.last_name || "-",
        suggestion.target_ward || "-",
        suggestion.target_group || "-",
        suggestion.target_person || "-",

        <p className={`status_button ${suggestion.status}`}>
          {suggestion.status === "pending"
            ? "در دست بررسی"
            : suggestion.status === "done"
              ? " خاتمه یافته"
              : " ارسال شده"}
        </p>,
        <Tooltip text="جزییـات">
          <CgMoreVerticalO
            onClick={() => navigate(`/crm/referral/${suggestion.id}`)}
            role="button"
            size={24}
          />
        </Tooltip>,
        <div className="icons_container">
          <Tooltip text="ارجـاعات">
            <FcRefresh
              onClick={() =>
                navigate(`/crm/referral/${suggestion.id}/referrer`)
              }
              role="button"
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
        backPath="crm"
      />
      <YearSelectSection />
      <Container>
        <FilterBox
          filterValues={filterValues}
          onChangeFilter={onChangeFilter}
        />
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
    </CrmContainer>
  );
};

export default CrmReferralPage;
