import { GETSuggestionReferrals } from "api/crm";
import { ISuggestionReferralsResponse } from "api/crm/types";
import {
  Container,
  Helmet,
  Pagination,
  PublicHeader,
  Table,
  YearSelectSection,
} from "components";
import { useModal } from "hooks";
import moment from "moment-jalaali";
import { useEffect, useMemo, useState, type FC } from "react";
import { ImBullhorn } from "react-icons/im";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { RootState } from "state-manager/store";
import { FeedbackResultModal } from "./components";
import { ReferrerContainer } from "./css/referrer.style";

const headers = [
  { child: "ردیف" },
  { child: "گیرنده" },
  { child: "تاریخ و ساعت" },
  { child: "موضوع" },
  { child: "نتیجه بازخورد" },
];

const CrmReferralReferrerPage: FC = () => {
  const [
    isOpenCreateReferrer,
    openCreateReferrerModal,
    closeCreateReferrerModal,
  ] = useModal();
  const { selectedYear } = useSelector((state: RootState) => state.profile);
  const { suggestionId } = useParams();
  const [isOpenFeedbackResult, openFeedbackResult, closeFeedbackResult] =
    useModal();
  const [referrer, setReferrer] = useState<
    ISuggestionReferralsResponse["referrals"] | null
  >(null);
  const [referrerMessages, setReferrerMessages] = useState<
    ISuggestionReferralsResponse["referrals"][0]["messages"] | null
  >(null);
  const [haveChangeRefer, setHaveChangeRefer] = useState(false);

  const [page, setPage] = useState({
    currentPage: 1,
    totalPages: 1,
  });

  useEffect(() => {
    setReferrer(null);
    GETSuggestionReferrals({
      id: suggestionId as string,
      year: selectedYear,
      page: page.currentPage,
    }).then((res) => {
      setReferrer(res.referrals);
      setPage({
        ...page,
        totalPages: res.meta.total_page,
      });
    });
  }, [suggestionId, page.currentPage, selectedYear, haveChangeRefer]);

  const referrerData = useMemo(() => {
    if (referrer) {
      return referrer.map((referrer, i) => [
        <span className="f_iran_sans">{i + 1}</span>,
        referrer.user.firstName + " " + referrer.user.lastName,
        <span className="f_iran_sans">
          {moment(referrer.created_at).format("jYYYY/jMM/jDD")}
        </span>,
        referrer.description || "-",
        <div className="wrapper">
          {/* <div className="notification" role="button">
            {referrer.messages.length}
          </div> */}
          <ImBullhorn
            onClick={() => {
              setReferrerMessages(referrer.messages);
              openFeedbackResult();
            }}
            role="button"
            size={24}
          ></ImBullhorn>
        </div>,
      ]);
    }
    return null;
  }, [referrer]);

  const changePageHandler = (_page: number) => {
    setPage({
      ...page,
      currentPage: _page,
    });
  };

  return (
    <ReferrerContainer>
      <Helmet title="CRM" />
      <PublicHeader
        title="نظام انتقادات و پیشنهادات"
        icon={<img className="app_logo" src="/img/crm/crm.webp" alt="" />}
        backPath="crm/referral"
      />
      <YearSelectSection />
      <Container>
        <div className="referrer_action">
          <p className="code">ارجاعات فرم</p>
        </div>
        <Table
          tableClassName="referrer_list"
          data={referrerData}
          headers={headers}
        />
        <div className="pagination_container">
          <Pagination
            currentPage={page.currentPage}
            totalPages={page.totalPages}
            onChange={changePageHandler}
            className="pagination"
          />
        </div>
      </Container>

      {isOpenFeedbackResult && (
        <FeedbackResultModal
          referrerMessages={referrerMessages}
          onClose={closeFeedbackResult}
          setHaveChangeRefer={setHaveChangeRefer}
        />
      )}
    </ReferrerContainer>
  );
};

export default CrmReferralReferrerPage;
