import { requestToServer } from "request-handler";
import { AuthUserRequest, AuthUserResponse } from "./types";

export const POSTLoginWithPassword = async (data: AuthUserRequest) => {
  const result = await requestToServer<AuthUserResponse>({
    method: "POST",
    url: `/core/authentication/token`,
    data,
  });
  return result;
};

export const POSTSmsOtp = async ({
  username,
  captcha,
}: {
  username: string;
  captcha: string;
}) => {
  const result = await requestToServer<void>({
    method: "POST",
    url: `/core/authentication/otp`,
    data: {
      username,
      captcha,
    },
  });
  return result;
};

export const POSTVerifySmsOtp = async (username: string, otp: string) => {
  const result = await requestToServer<AuthUserResponse>({
    method: "POST",
    url: `/core/authentication/verify`,
    data: {
      username,
      otp,
    },
  });
  return result;
};

export const GETLoginCaptcha = async () => {
  const result = await requestToServer<{ captcha: string }>({
    method: "GET",
    url: `/core/authentication/captcha`,
  });
  return result;
};
