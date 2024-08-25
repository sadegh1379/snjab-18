import { DateObject } from "react-multi-date-picker";

interface ISuggestionReportFormValues {
  organisation_id: string;
  subject: string;
  first_name: string;
  last_name: string;
  phone: string;
  birth_date: string;
  gender: string;
  submitted_by: string;
  description: string;
  target_person: string;
  hospitalization_ward: string | null;
  target_ward: {
    label: string;
    value: string;
  } | null;
  hospitalization_date: DateObject | null;
  occurrence_date: DateObject | null;
  occurrence_time: string;
  priority: string;
  is_criticism: boolean;
  target_group: {
    label: string;
    value: string;
  } | null;
  patient_relation: string;
  cause: string;
  cause_detail: string;
  files: File[] | [];
}
interface IFileUpload {
  files: File[] | [];
}

export type { IFileUpload, ISuggestionReportFormValues };
