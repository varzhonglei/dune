import { Request, Response } from "express"

export type TypedRequestBody<T> = Request<any, any, T>

export enum RES_TYPE {
  'success' = 'success',
  'error' = 'error',
}
export interface Res {
  type: RES_TYPE
  data?: any
  message?: string
  totalCount?: number
  error?: {
    message: string
  }
}
export type TypedResponse = Response<Res, any>