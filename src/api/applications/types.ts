interface IApplicationResponse {
  id: number;
  extId: string;
  link: string;
  logo: string;
  name: string;
  status: string;
  pathVariables: string;
  description: string;
  introVideo: string;
  subApplications: {
    extId: string;
    id: number;
    link: string;
    logo: string;
    name: string;
    pathVariables: string;
    status: string;
    subApplications: [];
  }[];
}

export type { IApplicationResponse };
