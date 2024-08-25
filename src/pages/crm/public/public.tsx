import { POSTSuggestion } from "api/crm";
import { GETOrganizations } from "api/hospital";
import { IHospital } from "api/hospital/types";
import { Button, Card, Helmet, PublicHeader } from "components";
import { useModal } from "hooks";
import { useEffect, useState, type FC } from "react";
import { Fade } from "react-awesome-reveal";
import { Container } from "react-bootstrap";
import persian_fa from "react-date-object/calendars/persian";
import en from "react-date-object/locales/gregorian_en";
import { FaHandshake } from "react-icons/fa";
import { DateObject } from "react-multi-date-picker";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { changeHospitalId } from "state-manager/reducer/hospital";
import { fileToBase64 } from "utils";
import {
  HospitalInfo,
  ReportAdditionalForm,
  ReportBaseForm,
  RewardAdditionalForm,
  RewardBaseForm,
  SubmitSuccessModal,
} from "./components";
import { CrmContainer } from "./css/crm.style";
import { ISuggestionReportFormValues } from "./types";

const CrmPublicPage: FC = () => {
  const [isOpenSuccessSubmit, openSuccessSubmitModal, closeSuccessSubmitModal] =
    useModal();
  const [trackingCode, setTrackingCode] = useState("");
  const [hospitalInfo, setHospitalInfo] = useState<IHospital | null>(null);
  const [activeStep, setActiveStep] = useState("report");
  const [isLoading, setISLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [reportFormValues, setReportFormValues] =
    useState<ISuggestionReportFormValues>({
      organisation_id: "",
      subject: "",
      first_name: "",
      last_name: "",
      phone: "",
      birth_date: "",
      gender: "",
      submitted_by: "",
      description: "",
      target_person: "",
      hospitalization_ward: null,
      target_ward: null,
      target_group: null,
      hospitalization_date: null,
      occurrence_date: null,
      occurrence_time: "",
      priority: "",
      is_criticism: true,
      patient_relation: "",
      cause: "",
      cause_detail: "",
      files: [],
    });
  const [rewardFormValues, setRewardFormValues] =
    useState<ISuggestionReportFormValues>({
      organisation_id: "",
      subject: "",
      first_name: "",
      last_name: "",
      phone: "",
      birth_date: "",
      gender: "",
      submitted_by: "",
      description: "",
      target_person: "",
      hospitalization_ward: null,
      target_ward: null,
      target_group: null,
      hospitalization_date: null,
      occurrence_date: null,
      occurrence_time: "",
      priority: "",
      is_criticism: false,
      patient_relation: "",
      cause: "",
      cause_detail: "",
      files: [],
    });

  const onChangeReportForm = (
    name: keyof ISuggestionReportFormValues,
    value: string | File[] | DateObject | IGSelectOption | null,
    isRemoveFile = false
  ) => {
    switch (name) {
      case "target_ward":
        setReportFormValues({
          ...reportFormValues,
          target_ward: value as IGSelectOption,
          hospitalization_ward: null,
          hospitalization_date: null,
        });
        break;
      case "files":
        if (isRemoveFile) {
          setReportFormValues({
            ...reportFormValues,
            files: value as File[],
          });
        } else {
          setReportFormValues({
            ...reportFormValues,
            files: [...(value as File[]), ...reportFormValues.files] as File[],
          });
        }
        break;
      case "submitted_by":
        setReportFormValues({
          ...reportFormValues,
          patient_relation:
            value !== "همراه بیمار" ? "" : reportFormValues.patient_relation,
          [name]: value as string,
        });
        break;
      default:
        setReportFormValues({
          ...reportFormValues,
          [name]: value,
        });
        break;
    }
  };
  const onChangeRewardForm = (
    name: keyof ISuggestionReportFormValues,
    value: string | DateObject | File[] | IGSelectOption | null,
    isRemoveFile = false
  ) => {
    switch (name) {
      case "target_ward":
        setRewardFormValues({
          ...rewardFormValues,
          target_ward: value as IGSelectOption,
          hospitalization_ward: null,
          hospitalization_date: null,
        });
        break;
      case "files":
        if (isRemoveFile) {
          setRewardFormValues({
            ...rewardFormValues,
            files: value as File[],
          });
        } else {
          setRewardFormValues({
            ...rewardFormValues,
            files: [...(value as File[]), ...rewardFormValues.files] as File[],
          });
        }
        break;
      case "submitted_by":
        setRewardFormValues({
          ...rewardFormValues,
          patient_relation:
            value !== "همراه بیمار" ? "" : rewardFormValues.patient_relation,
          [name]: value as string,
        });
        break;
      default:
        setRewardFormValues({
          ...rewardFormValues,
          [name]: value,
        });
        break;
    }
  };

  const formValidation = (type: "report" | "reward") => {
    const formValues = type === "report" ? reportFormValues : rewardFormValues;

    if (!formValues.gender) {
      toast.error("جنسیت بیمار را وارد کنید.");
      return false;
    }

    if (!formValues.target_ward) {
      toast.error("واحد مورد نظر را وارد کنید.");
      return false;
    }

    if (
      !formValues.hospitalization_ward &&
      formValues.target_ward?.value === "بخش های بستری/ اداری"
    ) {
      toast.error("بخش مورد نظر را وارد کنید.");
      return false;
    }
    if (
      !formValues.hospitalization_date &&
      formValues.target_ward?.value === "بخش های بستری/ اداری"
    ) {
      toast.error("تاریخ بستری مورد نظر را وارد کنید.");
      return false;
    }
    if (!formValues.occurrence_date) {
      toast.error("تاریخ وقوع را وارد کنید.");
      return false;
    }
    if (!formValues.description) {
      toast.error("متن را وارد کنید.");
      return false;
    }

    return true;
  };

  const submitForm = async () => {
    if (!formValidation(activeStep === "report" ? "report" : "reward")) return;
    const formValues =
      activeStep === "report" ? reportFormValues : rewardFormValues;

    const data = {
      organisation_id: searchParams.get("hospital_id")!,
      subject: formValues.subject,
      first_name: formValues.first_name,
      last_name: formValues.last_name,
      phone: formValues.phone,
      birth_date: formValues.birth_date,
      gender: formValues.gender,
      submitted_by: formValues.submitted_by,
      description: formValues.description,
      target_person: formValues.target_person,
      target_ward: formValues.target_ward?.value ?? "",
      hospitalization_ward: formValues.hospitalization_ward ?? "",
      target_group: formValues.target_group?.value ?? "",
      hospitalization_date:
        formValues.hospitalization_date
          ?.convert(persian_fa, en)
          .format("YYYY-MM-DD") ?? "",
      occurrence_date:
        formValues.occurrence_date
          ?.convert(persian_fa, en)
          .format("YYYY-MM-DD") ?? "",
      occurrence_time: formValues.occurrence_time,
      priority: formValues.priority,
      is_criticism: formValues.is_criticism ? true : false,
      patient_relation: formValues.patient_relation,
      cause: formValues.cause,
      cause_detail: formValues.cause_detail,
      files: [] as any[],
    };

    if (formValues.files.length) {
      const base64Files = await Promise.all(
        formValues.files.map(async (file) => {
          const { base64, error } = await fileToBase64(file);
          if (!error) {
            return {
              name: file.name,
              data: base64,
            };
          }
          return null;
        })
      );
      data.files = base64Files.filter((file) => file !== null);
    }

    setISLoading(true);

    POSTSuggestion(data)
      .then((res) => {
        resetForm();
        setTrackingCode(res.tracking_code);
        openSuccessSubmitModal();
      })
      .finally(() => setISLoading(false));
  };

  const resetForm = () => {
    const resetState = {
      organisation_id: "",
      subject: "",
      first_name: "",
      last_name: "",
      phone: "",
      birth_date: "",
      gender: "",
      submitted_by: "",
      description: "",
      target_person: "",
      hospitalization_ward: null,
      target_ward: null,
      target_group: null,
      hospitalization_date: null,
      occurrence_date: null,
      occurrence_time: "",
      priority: "",
      is_criticism: true,
      patient_relation: "",
      cause: "",
      cause_detail: "",
      files: [],
    };
    setReportFormValues(resetState);
    setRewardFormValues(resetState);
  };

  useEffect(() => {
    const hospitalId = searchParams.get("hospital_id");
    if (hospitalId) {
      dispatch(changeHospitalId(hospitalId));
      GETOrganizations().then((res) => {
        const hospital = res.find(({ id }) => id === hospitalId) || null;
        setHospitalInfo(hospital);
      });
    } else {
      toast.error("بیمارستان یافت نشد.");
      navigate("/");
    }
  }, []);

  return (
    <CrmContainer>
      <Helmet title="CRM" />
      <PublicHeader
        title="فرم انتقاد و پیشنهاد "
        icon={<FaHandshake size={26} />}
        backPath="login"
      />
      <Container>
        <HospitalInfo
          hospitalLogo={hospitalInfo?.logo || null}
          hospitalName={hospitalInfo?.name || null}
          activeStep={activeStep}
          onChangeStep={setActiveStep}
        />
        {activeStep === "report" ? (
          <Fade direction="right" duration={300} triggerOnce>
            <Card title="اطلاعـات پایه" className="mt-5">
              <ReportBaseForm
                formValues={reportFormValues}
                onChangeForm={onChangeReportForm}
              />
            </Card>
            <Card title="اطلاعـات تکمیلی" className="my-5">
              <ReportAdditionalForm
                formValues={reportFormValues}
                onChangeForm={onChangeReportForm}
              />
            </Card>
            <div className="submit_container">
              <Button
                isLoading={isLoading}
                size="large"
                className="button"
                onClick={submitForm}
              >
                ثبت
              </Button>
              <Button
                size="large"
                className="button"
                onClick={() => navigate("/login")}
              >
                انصـراف
              </Button>
            </div>
          </Fade>
        ) : (
          <Fade direction="left" duration={300} triggerOnce>
            <Card title="اطلاعـات پایه" className="mt-5">
              <RewardBaseForm
                formValues={rewardFormValues}
                onChangeForm={onChangeRewardForm}
              />
            </Card>
            <Card title="اطلاعـات تکمیلی" className="my-5">
              <RewardAdditionalForm
                formValues={rewardFormValues}
                onChangeForm={onChangeRewardForm}
              />
            </Card>
            <div className="submit_container">
              <Button size="large" className="button" onClick={submitForm}>
                ثبت
              </Button>
              <Button
                size="large"
                variant="outlined"
                className="button"
                onClick={() => navigate("/login")}
              >
                انصـراف
              </Button>
            </div>
          </Fade>
        )}
      </Container>
      {isOpenSuccessSubmit && (
        <SubmitSuccessModal
          type={
            activeStep === "report"
              ? reportFormValues.is_criticism
              : rewardFormValues.is_criticism
          }
          trackingCode={trackingCode}
          onClose={closeSuccessSubmitModal}
        />
      )}
    </CrmContainer>
  );
};

export default CrmPublicPage;
