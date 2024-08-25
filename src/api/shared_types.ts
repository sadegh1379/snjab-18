interface IResponse<T> {
  data: T;
  error?: string;
}

interface IPaginationResponse {
  meta: {
    current_page: number;
    total_page: number;
  };
}

export type { IPaginationResponse, IResponse };
