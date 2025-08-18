export type { Children, Params, GlobalErrorProps } from "./next.type";
export type { MetaProps, Routes } from "./seo.type";

export interface ApiResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
