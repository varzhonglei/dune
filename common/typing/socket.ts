import { Game } from "../game"

export enum MessageType {
  //to client
  'data' = 'data',
  'tableChange' = 'tableChange',

  //to server
  'token' = 'token',
  'reqData' = 'reqData',

  //common
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

  : T extends MessageType.tableChange
  ?  { 
    tableId: number,
  } | null
  
  : undefined
}