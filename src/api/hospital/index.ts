import { requestToServer } from "request-handler";
import { IHospital } from "./types";

export const GETOrganizations = async () => {
  const result = await requestToServer<IHospital[]>({
    method: "GET",
    url: "/core/organisations",
  });
  return result;
};

export const GETHospitalWardList = async () => {
  const result = await requestToServer<IGHospitalWard[]>({
    method: "GET",
    url: "/core/wards",
  });
  return result;
};

export const GETHospitalWardListWithOrganization = async (
  organizationId: string
) => {
  const result = await requestToServer<IGHospitalWard[]>({
    method: "GET",
    url: `/core/organisations/${organizationId}/wards`,
  });
  return result;
};

export const GETOrganizationUsers = async () => {
  const result = await requestToServer<IGUser[]>({
    method: "GET",
    url: "/core/users/list",
  });
  return result;
};
