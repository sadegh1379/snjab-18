import { GETSuggestionDetail, PUTSuggestion } from "api/crm";
import { ISuggestionDetailResponse } from "api/crm/types";
import { Button, Card, Container, Helmet, PublicHeader } from "components";
import {
  PriorityHighIcon,
  PriorityLowIcon,
  PriorityMediumIcon,
  TickSuccessIcon,
} from "components/icons";
import { useEffect, useState, type FC } from "react";
import persian_fa from "react-date-object/calendars/persian";
import en from "react-date-object/locales/gregorian_en";
import { FaHandshake, FaUsersCog, FaUsersSlash } from "react-icons/fa";
import { DateObject } from "react-multi-date-picker";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { fileToBase64 } from "utils";
import { ReportForm } from "./components";
import { DetailsContainer } from "./css/details.style";
import { IDetailFormValues } from "./types";

const baseUrl = process.env.REACT_APP_SERVER_URL_2;

const CrmDetailsPage: FC = () => {
  const [isLoading, setISLoading] = useState(false);

  const { suggestionId } = useParams();
  const [formValues, setFormValues] = useState<IDetailFormValues>({
    id: null,
    is_criticism: null,
    priority: null,
    referral_capability: null,
    cause: null,
    cause_detail: null,
    description: "",
    hospitalization_date: null,
    hospitalization_ward: "",
    patient_relation: "",
    target_group: null,
    target_person: "",
    target_ward: null,
    submitted_by: "",
    first_name: "",
    last_name: "",
    phone: "",
    created_at: null,
    static_files: [],
    files: [],
    related_field: [],
  });

  const navigate = useNavigate();
  const [SuggestionDetails, setSuggestionDetails] =
    useState<ISuggestionDetailResponse | null>(null);

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
          setSuggestionDetails(suggestion);
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
            static_files: suggestion.files.map((file) => ({
              name: file.name,
              id: file.id,
              url: `${baseUrl}${file.file.url}`,
            })),

            created_at: new DateObject(suggestion.created_at),
            hospitalization_date: new DateObject({
              date: suggestion.hospitalization_date,
              calendar: persian_fa,
            }),
            target_ward: {
              label: suggestion.target_ward,
              value: suggestion.target_ward,
            },
            hospitalization_ward: suggestion.hospitalization_ward,
            target_group: {
              label: suggestion.target_group,
              value: suggestion.target_group,
            },
            priority: suggestion.priority,
            referral_capability: suggestion.referral_capability,
            related_field:
              suggestion.related_field?.map((related) => ({
                label: related,
                value: related,
              })) ?? [],
          });
        })

        .catch((err) => {
          if (err?.response?.data?.status === 404) {
            navigate("/crm");
            toast.error(" گزارش یافت نشد");
          }
        });
    } else {
      toast.error(" گزارش یافت نشد");
      navigate("/crm");
    }
  }, [suggestionId]);

  const submitForm = async () => {
    setISLoading(true);

    const suggestionData = {
      id: suggestionId,
      hospitalization_ward: formValues.hospitalization_ward ?? "",
      patient_relation: formValues.patient_relation,
      target_person: formValues.target_person,
      submitted_by: formValues.submitted_by,
      is_criticism: formValues.is_criticism,
      priority: formValues.priority,
      referral_capability: formValues.referral_capability,
      cause: formValues.cause?.label ?? "",
      cause_detail: formValues.cause_detail?.label ?? "",
      description: formValues.description,
      target_group: formValues.target_group?.value ?? "",
      target_ward: formValues.target_ward?.value ?? "",
      related_field: formValues.related_field.map((related) => related.value),
      files: [] as any[],
      hospitalization_date:
        formValues.hospitalization_date
          ?.convert(persian_fa, en)
          .format("YYYY-MM-DD") ?? "",
    };

    if (formValues.files.length) {
      const base64Files = await Promise.all(
        formValues.files.map(async (file) => {
          const { base64, error } = await fileToBase64(file);
          if (!error) {
            return {
              name: file.name,
              data: base64 as string,
            };
          }
          return null;
        })
      );
      suggestionData.files = base64Files.filter((file) => file !== null);
    }
    PUTSuggestion(suggestionData).then((res) => {
      setISLoading(false);
      toast.success(" با موفقیت انجام شد");
      navigate("/crm");
    });
  };

  const onChangeForm = (
    name: keyof IDetailFormValues,
    value:
      | string
      | DateObject
      | IGSelectOption
      | IGSelectOption[]
      | boolean
      | File[]
      | null,
    isRemoveFile?: boolean
  ) => {
    switch (name) {
      case "cause":
        setFormValues({
          ...formValues,
          [name]: value as IGSelectOption,
          cause_detail: null,
        });
        break;
      case "files":
        if (isRemoveFile) {
          setFormValues({
            ...formValues,
            files: value as File[],
          });
        } else {
          setFormValues({
            ...formValues,
            files: [...(value as File[]), ...formValues.files] as File[],
          });
        }
        break;
      case "submitted_by":
        setFormValues({
          ...formValues,
          patient_relation:
            value !== "همراه بیمار" ? "" : formValues.patient_relation,
          [name]: value as string,
        });
        break;
      default:
        setFormValues({
          ...formValues,
          [name]: value,
        });
    }
  };

  return (
    <DetailsContainer>
      <Helmet title="Details" />
      <PublicHeader
        title="فرم انتقاد و پیشنهاد "
        icon={<FaHandshake size={26} />}
        backPath="crm"
      />
      <Container>
        <Card
          title={`شمـاره پیگیـری ${SuggestionDetails?.tracking_code}`}
          className="report_form"
        >
          <ReportForm formValues={formValues} onChangeForm={onChangeForm} />
        </Card>
        <div className="status_container">
          <Card title="اولویت بررسی" className="status_card">
            <div>
              <p className="title_container f_yekan_bold">
                شمـا می توانیـد شکایات و پیشنهادات دریافتی را بر اساس اولویت
                بررسی، برچسب گذاری نمایید
              </p>
              {priorities.map((priority, index) => (
                <div
                  className="status_box my-3"
                  onClick={() => onChangeForm("priority", priority.value)}
                  role="button"
                  key={index}
                >
                  <div className="right_container">
                    {priority.icon}
                    <p className="title f_yekan_bold">{priority.title}</p>
                    <p className="text f_yekan_bold">{priority.subtitle}</p>
                  </div>
                  <div>
                    {formValues.priority == priority.value ? (
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
              <p className="title_container f_yekan_bold">
                در صورتـی که این شکـایت نیـاز بـه ارجـاع دارد، بـا انتخـاب وضعیت
                (نیـاز بـه ارجـاع دارد) آن را بـه سامـانـه نظـام ارجـاع منتقـل
                نماییـد. در غیـر اینصـورت نظـرات کارشنـاسـی خـود را ثبت نماییـد
              </p>
              {referrals.map((referral, index) => (
                <div
                  className="status_box my-3"
                  onClick={() =>
                    onChangeForm("referral_capability", referral.value)
                  }
                  role="button"
                  key={index}
                >
                  <div className="right_container">
                    {referral.icon}
                    <p className="title">{referral.title}</p>
                    <p className="text">{referral.subtitle}</p>
                  </div>
                  <div>
                    {formValues.referral_capability == referral.value ? (
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
        <div className="submit_container">
          <Button
            size="large"
            className="button"
            isLoading={isLoading}
            onClick={submitForm}
          >
            بروز رســانی
          </Button>
          <Button
            size="large"
            variant="outlined"
            className="button"
            onClick={() => navigate("/crm")}
          >
            انصـراف
          </Button>
        </div>
      </Container>
    </DetailsContainer>
  );
};

export default CrmDetailsPage;
