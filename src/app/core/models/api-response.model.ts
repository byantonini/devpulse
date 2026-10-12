export interface ApiResponse<T> {
  data: T;
  message?: string;
  total?: number;
  page?: number;
  pageSize?: number;
}
