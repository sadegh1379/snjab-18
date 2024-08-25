import { requestToServer } from "request-handler";
import { queryBuilder } from "utils";
import {
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
} from "./types";

export const GETSuggestions = async (request: ISuggestionsRequest) => {
  const params = queryBuilder(request);
  const result = await requestToServer<ISuggestionResponse>({
    method: "GET",
    url: `/crm/suggestions?${params}`,
  });
  return result;
};

export const POSTSuggestion = async (data: ICreateSuggestionRequest) => {
  const result = await requestToServer<{ tracking_code: string }>({
    method: "POST",
    url: `/crm/suggestions`,
    data,
  });
  return result;
};

export const GETSuggestionDetail = async (id: string) => {
  const result = await requestToServer<{
    suggestion: ISuggestionDetailResponse;
  }>({
    method: "GET",
    url: `/crm/suggestions/${id}/detail`,
  });
  return result;
};

export const PUTSuggestion = async (data: IEditSuggestionRequest) => {
  const result = await requestToServer<void>({
    method: "PUT",
    url: `/crm/suggestions/${data.id}`,
    data,
  });
  return result;
};

export const POSTSuggestionResult = async (data: ISuggestionResultRequest) => {
  const result = await requestToServer<void>({
    method: "POST",
    url: `/crm/suggestions/${data.suggestionId}/result`,
    data,
  });
  return result;
};

export const GETSuggestionReferee = async (request: ISuggestionsRequest) => {
  const params = queryBuilder(request);
  const result = await requestToServer<IReferralsResponse>({
    method: "GET",
    url: `/crm/suggestions/as_referee?${params}`,
  });
  return result;
};

export const POSTSuggestionReferral = async (
  data: ISuggestionReferralRequest
) => {
  const result = await requestToServer<void>({
    method: "POST",
    url: `/crm/suggestions/${data.user_id}/refer`,
    data,
  });
  return result;
};

export const GETSuggestionReferrals = async ({
  id,
  year,
  page,
}: {
  id: string;
  year: string;
  page: number;
}) => {
  const params = queryBuilder({ year, page });
  const result = await requestToServer<ISuggestionReferralsResponse>({
    method: "GET",
    url: `/crm/suggestions/${id}/referrals?${params}`,
  });
  return result;
};

export const POSTSuggestionReferralMessage = async (
  data: ISuggestionReferralMessageRequest
) => {
  const result = await requestToServer<ISuggestionReferralMessageResponse>({
    method: "POST",
    url: `/crm/suggestions/referrals/${data.referral_id}/message`,
    data,
  });
  return result;
};
export const POSTSuggestionReferrer = async (
  data: ISuggestionReferrerMessageRequest
) => {
  const result = await requestToServer<void>({
    method: "POST",
    url: `/crm/suggestions/${data.suggestionId}/refer`,
    data,
  });
  return result;
};
export const GETTrackingCode = async (request: ITrackingCodeRequest) => {
  const params = queryBuilder(request);
  const result = await requestToServer<ITrackingCodeResponse>({
    method: "GET",
    url: `/crm/suggestions/track?${params}`,
  });
  return result;
};
export const GETGenderChart = async (request: ICrmDashboardChart) => {
  const result = await requestToServer<IGenderChartResponse>({
    method: "GET",
    url: `/crm/suggestions/report/gender_counts?year=${request.year}&is_criticism=${request.is_criticism ? "true" : "false"}`,
  });
  return result;
};

export const GETSubmittedByCharts = async (request: ICrmDashboardChart) => {
  const result = await requestToServer<ISubmittedByChartsResponse>({
    method: "GET",
    url: `/crm/suggestions/report/submitted_by_counts?year=${request.year}&is_criticism=${request.is_criticism ? "true" : "false"}`,
  });
  return result;
};

export const GETWardCharts = async (request: ICrmDashboardChart) => {
  const result = await requestToServer<IWardChartsResponse[]>({
    method: "GET",
    url: `/crm/suggestions/report/ward_counts?year=${request.year}&is_criticism=${request.is_criticism ? "true" : "false"}`,
  });
  return result;
};

export const GETPriorityCharts = async (request: ICrmDashboardChart) => {
  const result = await requestToServer<IPriorityChartsResponse>({
    method: "GET",
    url: `/crm/suggestions/report/priority_counts?year=${request.year}&is_criticism=${request.is_criticism ? "true" : "false"}`,
  });
  return result;
};

export const GETHospitalizationCharts = async (request: ICrmDashboardChart) => {
  const result = await requestToServer<IHospitalizationChartsResponse[]>({
    method: "GET",
    url: `/crm/suggestions/report/hospitalization_ward_counts?year=${request.year}&is_criticism=${request.is_criticism ? "true" : "false"}`,
  });
  return result;
};

export const GETTargetGroupCharts = async (
  request: ITargetGroupChartsRequest
) => {
  const result = await requestToServer<ITargetGroupChartsResponse[]>({
    method: "GET",
    url: `/crm/suggestions/report/target_group_counts?year=${request.year}&is_criticism=${request.is_criticism ? "true" : "false"}${request.ward ? `&ward=${request.ward}` : ""}`,
  });
  return result;
};

export const GETCauseCharts = async (request: ICauseChartsRequest) => {
  const result = await requestToServer<ICauseChartsResponse[]>({
    method: "GET",
    url: `/crm/suggestions/report/cause_counts?year=${request.year}&is_criticism=${request.is_criticism ? "true" : "false"}${request.ward ? `&ward=${request.ward}` : ""}${request.cause ? `&cause=${request.cause}` : ""}`,
  });
  return result;
};
