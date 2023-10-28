import { Game } from "../game"
import { User } from "./user"
import { EActionType, TAction } from "./user-action"

export enum MessageType {
  //server post to user
  'data' = 'data',
  'tableChange' = 'tableChange',
  'unauthorized' = 'unauthorized',
  'someoneReady' = 'someoneReady',

  //user post to server
  'tokenBack' = 'tokenBack',
  'reqData' = 'reqData',
  'iAmReady' = 'iAmReady',
  'userAction' = 'userAction'

  //common
}

export type TMessage<T extends MessageType>  = {
  type: T
  data:  TMessageData<T>
}

export type TMessageData<T extends MessageType> = 
  T extends MessageType.data
  ? {
    game: Game
    storeIndex: string
  }

  : T extends MessageType.reqData
  ? { 
    tableId: number,
    token:string,
  }

  : T extends MessageType.tokenBack
  ? {
    token:string,
  } 

  : T extends MessageType.tableChange
  ?  { 
    tableId: number,
  } | null

  : T extends MessageType.iAmReady
  ? { 
    tableId: number,
    token: string
  }

  : T extends MessageType.someoneReady
  ? { 
    user: User | undefined 
  } 

  : T extends MessageType.userAction
  ? { 
    token:string,
    tableId: number,
    storeIndex: string,
    name: string,
    actionType: EActionType,
    payload: TAction
  } 
  
  : undefined