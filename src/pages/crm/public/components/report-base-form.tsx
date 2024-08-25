import { ButtonGroup, Input, SelectInput } from "components";
import { type FC } from "react";
import { ReportBaseFormContainer } from "../css/report-base-form.style";
import { ISuggestionReportFormValues } from "../types";

interface IReportBaseFormProps {
  formValues: ISuggestionReportFormValues;
  onChangeForm: (
    name: keyof ISuggestionReportFormValues,
    value: string
  ) => void;
}

const ReportBaseForm: FC<IReportBaseFormProps> = ({
  formValues,
  onChangeForm,
}) => {
  return (
    <ReportBaseFormContainer>
      <Input
        onChange={(v) => onChangeForm("first_name", v)}
        value={formValues.first_name}
        title="نام بیمار"
        placeholder="نام بیمار را وارد کنید"
      />
      <Input
        onChange={(v) => onChangeForm("last_name", v)}
        value={formValues.last_name}
        title="نام خانوادگی بیمار"
        placeholder="نام خانوادگی بیمار را وارد کنید"
      />
      <Input
        onChange={(v) => onChangeForm("phone", v)}
        value={formValues.phone}
        title="تلفن تماس (درصورت ورود نتیجه پیامک می گردد)"
        placeholder=" تلفن تماس را وارد کنید"
      />
      <ButtonGroup
        required
        items={[
          { title: "مرد", value: "مرد" },
          { title: "زن", value: "زن" },
        ]}
        title="جنسیت بیمار"
        onClick={(gender) => onChangeForm("gender", gender)}
        value={formValues.gender}
      />
      <SelectInput
        title="تکمیل کننده فرم"
        placeholder="تکمیل کننده فرم"
        onChange={(ob) => onChangeForm("submitted_by", ob.value as string)}
        value={{
          label: formValues.submitted_by,
          value: formValues.submitted_by,
        }}
        options={[
          {
            label: "بیمار",
            value: "بیمار",
          },
          {
            label: "همراه بیمار",
            value: "همراه بیمار",
          },
          {
            label: "مسئـول پیگیـری امـور بیمـار",
            value: "مسئول پیگیری امور بیمار",
          },
        ]}
      />
      <Input
        onChange={(v) => onChangeForm("patient_relation", v)}
        value={formValues.patient_relation}
        disabled={formValues.submitted_by !== "همراه بیمار"}
        title="نسبت با بیمار "
        placeholder=" نسبت با بیمار را وارد کنید"
      />
    </ReportBaseFormContainer>
  );
};

export default ReportBaseForm;
