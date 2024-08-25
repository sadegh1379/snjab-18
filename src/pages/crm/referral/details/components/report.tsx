import {
  DatePickerInput,
  FileUploader,
  Input,
  MultiSelectInput,
  SelectInput,
  Textarea,
  WardSelect,
} from "components";
import { type FC } from "react";
import { ReportContainer } from "../css/report.style";
import { IDetailFormValues } from "../types";

interface IReportProps {
  formValues: IDetailFormValues;
}

const ReportAdditionalForm: FC<IReportProps> = ({ formValues }) => {
  const type = formValues.is_criticism ? "شکایت" : "تشکر";

  const getReportType = () => {
    if (type === "تشکر") {
      return {
        label: "تشکر",
        value: "no_criticism",
      };
    } else {
      return {
        label: "شکایت",
        value: "is_criticism",
      };
    }
  };

  return (
    <ReportContainer>
      <div className="report_select">
        <div></div>
        <SelectInput
          title="نوع گزارش"
          onChange={() => {}}
          value={getReportType()}
          placeholder="شکایت"
          disabled
          options={[
            {
              label: "شکایت",
              value: "report",
            },
            {
              label: "تشکر",
              value: "reward",
            },
          ]}
        />
        <div></div>
      </div>
      <div className="form_group">
        <DatePickerInput
          title="تاریـخ تکمیل فرم"
          value={formValues.created_at}
          onChange={() => {}}
          disabled
        />
        <Input
          onChange={() => {}}
          value={formValues.first_name + " " + formValues.last_name}
          title="نـام و نـام خانوادگـی بیمـار"
          disabled
        />
        <Input
          onChange={() => {}}
          value={formValues.phone}
          title="تلفن تماس (درصورت ورود نتیجه پیامک می گردد)"
          disabled
        />

        <Input
          onChange={() => {}}
          value={formValues.submitted_by}
          title="تکمیل کننده فرم"
          disabled
        />
        <Input
          onChange={() => {}}
          value={formValues.patient_relation}
          title="نسبت با بیمـار"
          disabled
        />
        <SelectInput
          title="واحـد مورد نظـر"
          onChange={() => {}}
          value={formValues.target_ward}
          disabled
          options={[
            {
              label: "بیمارستان رضا",
              value: "1",
            },
            {
              label: "بیمارستان ساسان",
              value: "2",
            },
          ]}
        />
        <WardSelect
          title="بخش مورد نظر"
          onChange={() => {}}
          wardId={formValues.hospitalization_ward}
          placeholder="بخش مورد نظر را انتخاب کنید"
          required
          disabled
        />
        <DatePickerInput
          title="تاریـخ بستـری"
          required
          value={formValues.hospitalization_date}
          disabled
          onChange={() => {}}
        />
        <SelectInput
          title={`گروه مورد ${type}`}
          onChange={() => {}}
          value={formValues.target_group}
          disabled
          options={[
            {
              label: "بیمارستان رضا",
              value: "1",
            },
            {
              label: "بیمارستان ساسان",
              value: "2",
            },
          ]}
        />
        <Input
          onChange={() => {}}
          value={formValues.target_person}
          disabled
          title={`فرد مورد ${type}`}
        />
        <SelectInput
          title={`دسته بندی ${type}`}
          onChange={() => {}}
          value={formValues.cause}
          disabled
          placeholder="انتخاب دسته بندی"
          options={[
            {
              label: "بیمارستان رضا",
              value: "1",
            },
            {
              label: "بیمارستان ساسان",
              value: "2",
            },
          ]}
        />
        <SelectInput
          title={`علل ${type}`}
          onChange={() => {}}
          value={formValues.cause_detail}
          disabled
          placeholder="علل را انتخاب کنید"
          options={[
            {
              label: "بیمارستان رضا",
              value: "1",
            },
            {
              label: "بیمارستان ساسان",
              value: "2",
            },
          ]}
        />
      </div>
      <MultiSelectInput
        className="select_input"
        title="حوزه مربوطه"
        onChange={() => {}}
        value={formValues.related_field}
        options={[]}
        disabled
      />
      <Textarea
        title={`شرح ${type}`}
        onChange={() => {}}
        value={formValues.description}
        required
        disabled
        rows={5}
      />

      <FileUploader
        staticFiles={formValues.static_files}
        onChangeFiles={() => {}}
        disabled
        files={[]}
        disabledRemoveStaticFiles
      />
    </ReportContainer>
  );
};

export default ReportAdditionalForm;
