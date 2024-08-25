import {
  DatePickerInput,
  FileUploader,
  Input,
  MultiSelectInput,
  SelectInput,
  Textarea,
  WardSelect,
} from "components";
import { useMemo, type FC } from "react";
import { DateObject } from "react-multi-date-picker";
import { ReportContainer } from "../css/report.style";
import { IDetailFormValues } from "../types";

interface IReportProps {
  formValues: IDetailFormValues;
  onChangeForm: (
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
  ) => void;
}

const ReportAdditionalForm: FC<IReportProps> = ({
  formValues,
  onChangeForm,
}) => {
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

  const groupOptions = [
    {
      id: 1,
      title: "کیفیت ارائه خدمات",
      items: [
        "بروز عاره",
        "عدم ویزیت اولیه توسط پزشک",
        "عدم ویزیت در طول مدت بستری توسط پزشک",
        "عدم ویزیت زمان ترخیص توسط پزشک",
        "در دسترس نبودن پرستار/ سایر کادر بالینی",
        "کمبود دارو و ملزومات مصرفی ",
      ],
    },
    {
      id: 2,
      title: "انطباق حریم خصوصی",
      items: [
        "عدم رعایت حریم بیمار در حین انجام پروسیجرها",
        "عدم رعایت طرح انطباق",
      ],
    },
    {
      id: 3,
      title: "مدت زمان انتظار",
      items: [
        "عدم حضور به موقع پزشک",
        "عدم حضور به موقع پرستار",
        "عدم حضور به موقع سایر کادر بالینی",
        "تاخیر در دریافت خدمات اداری / پشتیبانی ",
      ],
    },
    {
      id: 4,
      title: "اخلاقی و رفتاری",
      items: ["استفاده از الفاظ نامناسب و رکیک", "برخورد فیزیکی"],
    },
    {
      id: 5,
      title: "مالی و هزینه",
      items: [
        "بالا بودن هزینه ها",
        "دریافت هزینه خارج از صندوق بیمارستان",
        "تحت پوشش بیمه نبودن",
      ],
    },
    {
      id: 6,
      title: "اطلاع رسانی و راهنمایی",
      items: [
        "عدم راهنمایی درست",
        "عدم ارائه آموزش‌های بدو ورود",
        "عدم ارائه آموزش‌های حین بستری",
        "عدم ارائه آموزش‌های زمان ترخیص ",
      ],
    },
    {
      id: 7,
      title: "هتلینگ و امکانات رفاهی",
      items: [
        "کمبود امکانات",
        "خرابی وسایل/ تجهیزات",
        "گرم/ سرد بودن اتاق/ بخش",
        "تهویه نامناسب",
        "کیفیت نامناسب غذ",
        "کم بودن حجم غذا",
        "چینش و سرو نا مناسب غذا",
        "مناسب نبودن غذا برای بیمار و عدم توجه به رژیم غذایی",
      ],
    },
    {
      id: 8,
      title: "نظافت و بهداشت",
      items: [
        "نظافت نامناسب بخش",
        "نظافت نامناسب پتو/ ملحفه",
        "عدم رعایت بهداشت فردی",
        "عدم رعایت بهداشت محیط",
      ],
    },
  ];

  const groupDetailsOptions = useMemo(() => {
    if (formValues.cause && formValues.cause.value) {
      const options = groupOptions.find(
        (op) => op.title === formValues.cause?.label!
      );
      return options?.items?.map((op) => ({
        label: op,
        value: op,
      }));
    } else {
      return [];
    }
  }, [formValues.cause]);

  const onRemoveFile = (name: string) => {
    const files = formValues.files.filter((f) => f.name !== name);
    onChangeForm("files", files, true);
  };

  return (
    <ReportContainer>
      <div className="report_select">
        <div></div>
        <SelectInput
          title="نوع گزارش"
          onChange={(ob) => {
            onChangeForm(
              "is_criticism",
              ob.value === "is_criticism" ? true : false
            );
          }}
          value={getReportType()}
          placeholder="شکایت"
          options={[
            {
              label: "شکایت",
              value: "is_criticism",
            },
            {
              label: "تشکر",
              value: "no_criticism",
            },
          ]}
        />
        <div></div>
      </div>
      <div className="form_group">
        <DatePickerInput
          title="تاریـخ تکمیل فرم"
          value={formValues.created_at}
          onChange={(date) => onChangeForm("created_at", date)}
          disabled
        />
        <Input
          onChange={() => {}}
          value={formValues.first_name + " " + formValues.last_name}
          title="نـام و نـام خانوادگـی بیمـار"
          disabled
        />
        <Input
          onChange={(phone) => onChangeForm("phone", phone)}
          value={formValues.phone}
          title="تلفن تماس (درصورت ورود نتیجه پیامک می گردد)"
          disabled
        />

        <SelectInput
          title="تکمیل کننده فرم"
          placeholder="تکمیل کننده فرم را وارد کنید"
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
              value: "مسئـول پیگیـری امـور بیمـار",
            },
          ]}
        />
        <Input
          onChange={(v) => onChangeForm("patient_relation", v)}
          value={formValues.patient_relation}
          title="نسبت با بیمـار"
          disabled={formValues.submitted_by !== "همراه بیمار"}
        />
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
          onChange={(wardID) => onChangeForm("hospitalization_ward", wardID)}
          wardId={formValues.hospitalization_ward}
          placeholder="بخش مورد نظر را انتخاب کنید"
          required
        />
        <DatePickerInput
          title="تاریـخ بستـری"
          required
          value={formValues.hospitalization_date}
          onChange={(date) => onChangeForm("hospitalization_date", date)}
        />
        <SelectInput
          value={formValues.target_group}
          onChange={(ob) => onChangeForm("target_group", ob)}
          title="گروه مورد نظر"
          placeholder="همـــه"
          options={[
            {
              label: "گروه پزشکان",
              value: "گروه پزشکان",
            },
            {
              label: "گروه پرستاران",
              value: "گروه پرستاران",
            },
            {
              label: "گروه بهیاران",
              value: "گروه بهیاران",
            },
            {
              label: "گروه خدمات",
              value: "گروه خدمات",
            },
            {
              label: "گروه پاراکلینیکی",
              value: "گروه پاراکلینیکی",
            },
            {
              label: "گروه اداری و پشتیبانی",
              value: "گروه اداری و پشتیبانی",
            },
            {
              label: "سایرموارد",
              value: "سایرموارد",
            },
          ]}
          containerClassName="select_item"
        />
        <Input
          onChange={(person) => onChangeForm("target_person", person)}
          value={formValues.target_person}
          title={`فرد مورد ${type}`}
        />
        <SelectInput
          onChange={(ob) => onChangeForm("cause", ob)}
          title={`دسته بندی ${type}`}
          value={formValues.cause}
          placeholder="انتخاب دسته بندی"
          options={groupOptions.map((option) => ({
            label: option.title,
            value: option.title,
          }))}
        />
        <SelectInput
          title={`علل ${type}`}
          onChange={(ob) => onChangeForm("cause_detail", ob)}
          value={formValues.cause_detail}
          placeholder="علل را انتخاب کنید"
          options={groupDetailsOptions as IGSelectOption[]}
        />
      </div>
      <MultiSelectInput
        className="select_input"
        title="حوزه مربوطه"
        onChange={(arr) => onChangeForm("related_field", arr)}
        value={formValues.related_field}
        options={[
          {
            label: "معاونت درمان",
            value: "معاونت درمان",
          },
          {
            label: "معاونت اداری و پشتیبانی ",
            value: "معاونت اداری و پشتیبانی ",
          },
          {
            label: "معاونت پرستاری ",
            value: "معاونت پرستاری",
          },
        ]}
      />
      <Textarea
        title={`شرح ${type}`}
        onChange={(v) => onChangeForm("description", v)}
        value={formValues.description}
        required
        rows={5}
      />
      <FileUploader
        files={formValues.files}
        onChangeFiles={(files) => onChangeForm("files", files)}
        onRemoveFile={onRemoveFile}
        staticFiles={formValues.static_files}
        disabledRemoveStaticFiles
        title="پیوست فایل"
      />
    </ReportContainer>
  );
};

export default ReportAdditionalForm;
