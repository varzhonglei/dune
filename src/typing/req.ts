import { Request, Response } from "express"
import { RES_TYPE } from '../../common/typing/rest-req'

export type TypedRequestBody<T> = Request<any, any, T>

export interface Res {
  type: RES_TYPE
  data?: any
  message?: string
  totalCount?: number
  error?: {
    message: string
  }
}

export type TypedRequestAny = Request<any, any, any>

export type TypedResponse = Response<Res, any>