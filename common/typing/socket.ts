import { Game } from "../game"

export enum MessageType {
  'token' = 'token',
  'data' = 'data',
  'reqData' = 'reqData',
}

export type TMessage<T extends MessageType>  = {
  type: MessageType
  data:  T extends MessageType.data
  ? Game
  : T extends MessageType.reqData
  ? { 
    tableId: number,
    token:string,
  }
  : T extends MessageType.token
  ? string 
  : undefined
}