interface IFilterValues {
  query: string;
  is_criticism: {
    label: string;
    value: string;
  } | null;
  status: {
    label: string;
    value: string;
  } | null;
  target_ward: string | null;
  target_group: {
    label: string;
    value: string;
  } | null;
}

export type { IFilterValues };
