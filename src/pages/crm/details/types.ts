import { IStaticFile } from "components/file-uploader/types";
import { DateObject } from "react-multi-date-picker";

interface IDetailFormValues {
  id: number | null;
  priority: string | null;
  referral_capability: boolean | null;
  patient_relation: string;
  submitted_by: string;
  first_name: string;
  last_name: string;
  phone: string;
  is_criticism: boolean | null;
  created_at: DateObject | null;
  target_ward: IGSelectOption | null;
  hospitalization_ward: string;
  target_group: IGSelectOption | null;
  cause: IGSelectOption | null;
  cause_detail: IGSelectOption | null;
  hospitalization_date: DateObject | null;
  target_person: string;
  description: string;
  related_field: IGSelectOption[];
  static_files: IStaticFile[];
  files: File[];
}
interface IUpdateDetailFormValues {
  id: string | undefined;
  priority: string | null;
  patient_relation: string;
  submitted_by: string;
  is_criticism: boolean | null;
  referral_capability: boolean | null;
  target_ward: IGSelectOption | null;
  hospitalization_ward: IGSelectOption | null;
  target_group: IGSelectOption | null;
  cause: IGSelectOption | null;
  cause_detail: IGSelectOption | null;
  hospitalization_date: DateObject | null;
  target_person: string;
  description: string;
}

export type { IDetailFormValues, IUpdateDetailFormValues };
