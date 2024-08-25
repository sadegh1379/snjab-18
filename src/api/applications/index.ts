import { requestToServer } from "request-handler";
import { IApplicationResponse } from "./types";

export const GETApplications = async () => {
  const result = await requestToServer<IApplicationResponse[]>({
    method: "GET",
    url: `/core/applications/home`,
  });
  return result;
};
