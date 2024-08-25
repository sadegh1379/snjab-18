import { GETSuggestionDetail } from "api/crm";
import { Card, Container, Helmet, PublicHeader } from "components";
import {
  PriorityHighIcon,
  PriorityLowIcon,
  PriorityMediumIcon,
  TickSuccessIcon,
} from "components/icons";
import { useEffect, useState, type FC } from "react";
import persian_fa from "react-date-object/calendars/persian";
import { FaHandshake, FaUsersCog, FaUsersSlash } from "react-icons/fa";
import { DateObject } from "react-multi-date-picker";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { ReportForm } from "./components";
import { DetailsContainer } from "./css/details.style";
import { IDetailFormValues } from "./types";
const baseUrl = process.env.REACT_APP_SERVER_URL_2;

const CrmReferralDetailsPage: FC = () => {
  const { suggestionId } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<IDetailFormValues>({
    is_criticism: null,
    priority: null,
    referral_capability: null,
    cause: null,
    cause_detail: null,
    description: "",
    hospitalization_date: null,
    hospitalization_ward: null,
    patient_relation: "",
    target_group: null,
    target_person: "",
    target_ward: null,
    submitted_by: "",
    first_name: "",
    last_name: "",
    phone: "",
    created_at: null,
    related_field: [],
    static_files: [],
  });

  const priorities = [
    {
      title: "رسیـدگـی آنـی",
      subtitle: "(به صورت حضـوری در صحنـه / بازدیـد میدانـی)",
      icon: <PriorityHighIcon className="right_icon" />,
      value: "high",
    },
    {
      title: "رسیـدگـی فـوری",
      subtitle: "(به صورت تلفنـی بلافاصلـه پیگیـری شـود)",
      icon: <PriorityMediumIcon className="right_icon" />,
      value: "medium",
    },
    {
      title: "رسیـدگـی در اولویت",
      subtitle: "(تا پایـان روز کاری پیگیـری شـود)",
      icon: <PriorityLowIcon className="right_icon" />,
      value: "low",
    },
  ];

  const referrals = [
    {
      title: "نیـاز بـه ارجـاع دارد",
      subtitle: "(به نظـام ارجـاع منتقـل می شـود)",
      icon: <FaUsersCog size={24} />,
      value: true,
    },
    {
      title: "نیـاز بـه ارجـاع ندارد",
      subtitle: "(به صفحه ثبت بازخورد ارسال می گردد)",
      icon: <FaUsersSlash size={24} />,
      value: false,
    },
  ];

  useEffect(() => {
    if (suggestionId) {
      GETSuggestionDetail(suggestionId)
        .then(({ suggestion }) => {
          setFormValues({
            ...formValues,
            is_criticism: suggestion.is_criticism,
            cause: {
              label: suggestion.cause,
              value: suggestion.cause,
            },
            cause_detail: {
              label: suggestion.cause_detail,
              value: suggestion.cause_detail,
            },
            description: suggestion.description,
            patient_relation: suggestion.patient_relation,
            target_person: suggestion.target_person,
            first_name: suggestion.first_name,
            last_name: suggestion.last_name,
            phone: suggestion.phone,
            submitted_by: suggestion.submitted_by,
            created_at: new DateObject(suggestion.created_at),
            hospitalization_date: new DateObject({
              date: suggestion.hospitalization_date,
              calendar: persian_fa,
            }),
            target_ward: {
              label: suggestion.target_ward,
              value: suggestion.target_ward,
            },
            target_group: {
              label: suggestion.target_group,
              value: suggestion.target_group,
            },
            hospitalization_ward: suggestion.hospitalization_ward,
            priority: suggestion.priority,
            referral_capability: suggestion.referral_capability,
            static_files: suggestion.files.map((file) => ({
              name: file.name,
              id: file.id,
              url: `${baseUrl}${file.file.url}`,
              related_field:
                suggestion.related_field?.map((related) => ({
                  label: related,
                  value: related,
                })) ?? [],
            })),
          });
        })
        .catch((err) => {
          if (err?.response?.data?.status === 404) {
            navigate("/crm/referral");
            toast.error(" گزارش یافت نشد");
          }
        });
    } else {
      toast.error(" گزارش یافت نشد");
      navigate("/crm/referral");
    }
  }, [suggestionId]);

  return (
    <DetailsContainer>
      <Helmet title="Details" />
      <PublicHeader
        title="ماژول انتقادات و پیشنهادات"
        icon={<FaHandshake size={24} />}
        backPath="crm/referral"
      />
      <Container>
        <Card title="شمـاره پیگیـری 140303010109" className="report_form">
          <ReportForm formValues={formValues} />
        </Card>
        <div className="status_container">
          <Card title="اولویت بررسی" className="status_card">
            <div>
              <p className="title_container">
                شمـا می توانیـد شکایات و پیشنهادات دریافتی را بر اساس اولویت
                بررسی، برچسب گذاری نمایید
              </p>
              {priorities.map((priority, index) => (
                <div className="status_box my-3" key={index}>
                  <div className="right_container">
                    {priority.icon}
                    <p className="title">{priority.title}</p>
                    <p className="text f_yekan_bold">{priority.subtitle}</p>
                  </div>
                  <div>
                    {formValues.priority === priority.value ? (
                      <TickSuccessIcon className="logo_status" />
                    ) : (
                      <div className="circle"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card title="وضعیت ارجـاع" className="status_card">
            <div>
              <p className="title_container">
                در صورتـی که این شکـایت نیـاز بـه ارجـاع دارد، بـا انتخـاب وضعیت
                (نیـاز بـه ارجـاع دارد) آن را بـه سامـانـه نظـام ارجـاع منتقـل
                نماییـد. در غیـر اینصـورت نظـرات کارشنـاسـی خـود را ثبت نماییـد
              </p>
              {referrals.map((referral, index) => (
                <div className="status_box my-3" key={index}>
                  <div className="right_container">
                    {referral.icon}
                    <p className="title">{referral.title}</p>
                    <p className="text">{referral.subtitle}</p>
                  </div>
                  <div>
                    {formValues.referral_capability === referral.value ? (
                      <TickSuccessIcon className="logo_status" />
                    ) : (
                      <div className="circle"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Container>
    </DetailsContainer>
  );
};

export default CrmReferralDetailsPage;
