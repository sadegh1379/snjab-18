interface IUserProfileResponse {
  id: string;
  username: string;
  firstName: string;
  lastName: string;
  organisation: {
    id: string;
    name: string;
    logo: string;
    extId: string;
  };
}

export type { IUserProfileResponse };
