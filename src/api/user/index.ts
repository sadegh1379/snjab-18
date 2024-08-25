import { requestToServer } from "request-handler";
import { IUserProfileResponse } from "./types";

export const GETUserInfo = async () => {
  const result = await requestToServer<IUserProfileResponse>({
    method: "GET",
    url: `/core/users/me`,
  });
  return result;
};
