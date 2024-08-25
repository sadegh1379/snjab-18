interface AuthUserRequest {
  username: string;
  password: string;
  captcha: string;
}

interface AuthUserResponse {
  access_token: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  token_type: "Bearer";
  "not-before-policy": number;
  session_state: string;
  scope: string;
}

export type { AuthUserRequest, AuthUserResponse };
