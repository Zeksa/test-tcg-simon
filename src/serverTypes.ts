import { CallableRequest } from 'firebase-functions/https'
import { HttpsCallable } from 'firebase/functions'

declare type Response = {
  error?: string
}

export declare type CloudFunction<TRequestData, TResponseData> = (data: {
  data: Partial<TRequestData>
  request: CallableRequest<TRequestData>
  userId: string
}) => Promise<TResponseData & Response>

export declare type CallableCloudFunction<TRequestData, TResponseData> = HttpsCallable<
  TRequestData,
  TResponseData & Response
>
