import { IPaginationResponse } from "api/shared_types";

interface ISuggestionsRequest {
  year: string;
  status?: string;
  is_criticism?: boolean;
  target_ward?: string;
  target_group?: string;
  query?: string;
  page?: number;
}

interface IFile {
  id: number;
  suggestion_id: number;
  file: {
    url: string;
  };
  uploaded_by: string;
  created_at: string;
  updated_at: string;
  name: string;
}

interface ISuggestionResponse extends IPaginationResponse {
  suggestions: {
    id: string;
    organisation_id: string;
    subject: string;
    first_name: string;
    last_name: string;
    phone: string;
    birth_date: string;
    gender: string;
    submitted_by: string;
    file_number: string;
    description: string;
    target_person: string;
    hospitalization_ward: string;
    target_ward: string;
    target_group: string;
    hospitalization_date: string;
    occurrence_date: string;
    occurrence_time: string;
    priority: string;
    tracking_code: string;
    evaluable: string | null;
    is_new: boolean;
    has_updated: boolean;
    has_eop: boolean;
    sent_to: string | null;
    sent_to_at: string | null;
    is_criticism: true;
    created_at: string;
    updated_at: string;
    referral_capability: boolean;
    status: string;
    year: string | null;
    patient_relation: string;
    cause: string;
    cause_detail: string;
    submitted_at: string | null;
  }[];
}

interface IReferralsResponse extends IPaginationResponse {
  referrals: {
    id: string;
    organisation_id: string;
    subject: string;
    first_name: string;
    last_name: string;
    phone: string;
    birth_date: string;
    gender: string;
    submitted_by: string;
    file_number: string;
    description: string;
    target_person: string;
    hospitalization_ward: string;
    target_ward: string;
    target_group: string;
    hospitalization_date: string;
    occurrence_date: string;
    occurrence_time: string;
    priority: string;
    tracking_code: string;
    evaluable: string | null;
    is_new: boolean;
    has_updated: boolean;
    has_eop: boolean;
    sent_to: string | null;
    sent_to_at: string | null;
    is_criticism: true;
    created_at: string;
    updated_at: string;
    referral_capability: boolean;
    status: string;
    year: string | null;
    patient_relation: string;
    cause: string;
    cause_detail: string;
    submitted_at: string | null;
  }[];
}

interface ICreateSuggestionRequest {
  organisation_id: string;
  subject: string;
  first_name: string;
  last_name: string;
  phone: string;
  birth_date: string;
  gender: string;
  submitted_by?: string;
  file_number?: string;
  description?: string;
  target_person?: string;
  hospitalization_ward?: string;
  target_ward?: string;
  hospitalization_date?: string;
  occurrence_date?: string;
  occurrence_time?: string;
  priority?: string;
  tracking_code?: string;
  evaluable?: boolean;
  is_criticism?: boolean;
  target_group?: string;
  referral_capability?: boolean;
  patient_relation?: string;
  cause?: string;
  cause_detail?: string;
  submitted_at?: string;
  files: { name: string; data: string }[];
}

interface IEditSuggestionRequest {
  id: string | undefined;
  priority: string | null;
  patient_relation: string;
  submitted_by: string;
  is_criticism: boolean | null;
  referral_capability: boolean | null;
  target_ward: string | null;
  hospitalization_ward: string | null;
  target_group: string | null;
  cause: string;
  cause_detail: string | null;
  hospitalization_date?: string;
  target_person: string;
  description: string;
  related_field: string[];
}

interface ISuggestionResultRequest {
  suggestionId: string;
  comment: string;
  result_files?: { name: string; data: string }[];
}

interface ISuggestionRefereeRequest {
  year: string;
  status?: string;
  is_criticism?: boolean;
  target_ward?: string;
  target_group?: string;
  query?: string;
  page?: number;
}

interface ISuggestionReferralRequest {
  user_id: string;
  subject: string;
  description: string;
  files: {
    name: string;
    data: string;
  }[];
}

interface ISuggestionReferralMessageRequest {
  referral_id: string;
  message: string;
  file?: string;
}
interface ISuggestionDetailResponse {
  is_new: boolean;
  id: number;
  organisation_id: string;
  subject: string;
  first_name: string;
  last_name: string;
  phone: string;
  birth_date: string;
  gender: string;
  submitted_by: string;
  file_number: string | null;
  description: string;
  target_person: string;
  hospitalization_ward: string;
  target_ward: string;
  target_group: string;
  hospitalization_date: string;
  occurrence_date: string;
  occurrence_time: string;
  priority: string;
  tracking_code: string;
  evaluable: string | null;
  has_updated: boolean;
  has_eop: boolean;
  sent_to: string | null;
  sent_to_at: string | null;
  is_criticism: boolean;
  created_at: string;
  updated_at: string;
  referral_capability: boolean;
  status: string;
  year: string | null;
  patient_relation: string;
  cause: string;
  cause_detail: string;
  submitted_at: string | null;
  related_field: string[];
  files: {
    name: string;
    id: number;
    file: {
      url: string;
    };
  }[];
}

interface ISuggestionReferrerMessageRequest {
  suggestionId: string;
  user_id: string | null;
  subject?: string;
  description: string;
  files: {
    name: string;
    data: string;
  }[];
}
interface ISuggestionReferralsResponse extends IPaginationResponse {
  referrals: {
    id: number;
    suggestion_id: number;
    user_id: string;
    subject: string | null;
    description: string;
    created_at: string;
    updated_at: string;
    seen: boolean;
    user: {
      id: string;
      username: string;
      firstName: string;
      lastName: string;
    };
    messages: [
      {
        id: number;
        suggestion_referral_id: string;
        user_id: string;
        body: string;
        created_at: string;
        updated_at: string;
        file: {
          file: {
            url: string;
          };
        } | null;
        user: {
          firstName: string;
          id: string;
          lastName: string;
          username: string;
        };
      },
    ];
  }[];
}

interface ISuggestionReferralMessageResponse {
  referral: ISuggestionReferralsResponse["referrals"][0]["messages"][0];
}

interface ITrackingCodeRequest {
  code: string;
}

interface ITrackingCodeResponse {
  status: string;
  result: {
    id: number;
    suggestion_id: number;
    comment: string;
    created_at: string;
    updated_at: string;
    files?: {
      created_at: string;
      file: { url: string };
      id: number;
      suggestion_result_id: 20;
      updated_at: string;
    }[];
  } | null;
}
interface ICrmDashboardChart {
  year: string;
  is_criticism: boolean;
}
interface IGenderChartResponse {
  [key: string]: number;
}
interface ISubmittedByChartsResponse {
  [key: string]: number;
}
interface IWardChartsResponse {
  ward: string;
  count: number;
}
interface IPriorityChartsResponse {
  [key: string]: number;
}
interface IHospitalizationChartsResponse {
  ward: string;
  count: number;
}
interface ITargetGroupChartsResponse {
  group: string;
  count: number;
}
interface ITargetGroupChartsRequest {
  year: string;
  is_criticism: boolean;
  ward?: string;
}
interface ICauseChartsResponse {
  cause: string;
  count: number;
}

interface ICauseChartsRequest {
  year: string;
  is_criticism: boolean;
  ward?: string;
  cause?: string;
}
export type {
  ICauseChartsRequest,
  ICauseChartsResponse,
  ICreateSuggestionRequest,
  ICrmDashboardChart,
  IEditSuggestionRequest,
  IGenderChartResponse,
  IHospitalizationChartsResponse,
  IPriorityChartsResponse,
  IReferralsResponse,
  ISubmittedByChartsResponse,
  ISuggestionDetailResponse,
  ISuggestionRefereeRequest,
  ISuggestionReferralMessageRequest,
  ISuggestionReferralMessageResponse,
  ISuggestionReferralRequest,
  ISuggestionReferralsResponse,
  ISuggestionReferrerMessageRequest,
  ISuggestionResponse,
  ISuggestionResultRequest,
  ISuggestionsRequest,
  ITargetGroupChartsRequest,
  ITargetGroupChartsResponse,
  ITrackingCodeRequest,
  ITrackingCodeResponse,
  IWardChartsResponse,
};
