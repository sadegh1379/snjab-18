import {
  DatePickerInput,
  FileUploader,
  Input,
  SelectInput,
  Textarea,
  WardSelect,
} from "components";
import { type FC } from "react";
import { DateObject } from "react-multi-date-picker";
import { useSearchParams } from "react-router-dom";
import { RewardAdditionalContainer } from "../css/reward-Additional-form";
import { ISuggestionReportFormValues } from "../types";

interface IRewardAdditionalProps {
  formValues: ISuggestionReportFormValues;
  onChangeForm: (
    name: keyof ISuggestionReportFormValues,
    value: string | DateObject | File[] | IGSelectOption | null,
    isRemoveFile?: boolean
  ) => void;
}

const RewardAdditionalForm: FC<IRewardAdditionalProps> = ({
  formValues,
  onChangeForm,
}) => {
  const [searchParams] = useSearchParams();
  const organizationId = searchParams.get("hospital_id");
  const onRemoveFile = (name: string) => {
    onChangeForm(
      "files",
      formValues.files.filter((f) => f.name !== name),
      true
    );
  };

  return (
    <RewardAdditionalContainer>
      <div className="form_group">
        <SelectInput
          title="واحد مورد نظر"
          onChange={(ob) => onChangeForm("target_ward", ob)}
          value={formValues.target_ward}
          placeholder="واحد مورد نظر را انتخاب کنید"
          required
          options={[
            {
              label: "بخش های بستری/ اداری",
              value: "بخش های بستری/ اداری",
            },
            {
              label: "پذیرش",
              value: "پذیرش",
            },
            {
              label: "ترخیص",
              value: "ترخیص",
            },
            {
              label: "مدیریت",
              value: "مدیریت",
            },
            {
              label: "مالی",
              value: "مالی",
            },
          ]}
        />
        <WardSelect
          title="بخش مورد نظر"
          onChange={(id) => onChangeForm("hospitalization_ward", id)}
          wardId={formValues.hospitalization_ward}
          placeholder="بخش مورد نظر را انتخاب کنید"
          disabled={formValues.target_ward?.value !== "بخش های بستری/ اداری"}
          organizationId={organizationId!}
          required
        />
        <DatePickerInput
          title="تاریخ بستری"
          required
          placeholder="تاریخ بستری را انتخاب کنید "
          onChange={(date) => {
            onChangeForm("hospitalization_date", date);
          }}
          disabled={formValues.target_ward?.value !== "بخش های بستری/ اداری"}
          value={formValues.hospitalization_date}
        />
        <Input
          onChange={(v) => onChangeForm("target_person", v)}
          value={formValues.target_person}
          title="فرد مورد شکایت"
          placeholder="فرد مورد نظر"
        />
        <DatePickerInput
          title="تاریخ ثبت شکایت"
          required
          placeholder="تاریخ ثبت شکایت را وارد کنید"
          onChange={(date) => {
            onChangeForm("occurrence_date", date);
          }}
          value={formValues.occurrence_date}
        />
      </div>
      <Textarea
        title="متن شکایت"
        onChange={(v) => onChangeForm("description", v)}
        value={formValues.description}
        required
        rows={5}
      />
      {/* TODO: add files state */}
      <FileUploader
        files={formValues.files}
        onRemoveFile={onRemoveFile}
        onChangeFiles={(files) => onChangeForm("files", files)}
        caption="حداکثر حجم مجاز 5 مگابایت می باشد"
        title="ارسال پیوست"
      />
    </RewardAdditionalContainer>
  );
};

export default RewardAdditionalForm;
