export type Pagination = {
  PageSize: number;
  PageNumber: number;
};

export type PaginationParams = {
  page: number;
  perPage: number;
};

export type SortOrder = 'asc' | 'desc';
export type SortParams<T = string> = {
  sort?: T;
  order?: SortOrder;
};

export type ListParams<T = never> = Partial<PaginationParams & SortParams & T>;

export type PaginationResponse<T = never> = {
  current_page: number;
  pages: number;
  total: number;
} & T;
