interface ITrackingCodeValues {
  code: string;
  status: string;
  result: {
    id: number;
    suggestion_id: number;
    comment: string;
    created_at: string;
    updated_at: string;
  };
}

export type { ITrackingCodeValues };
