import { Game } from "../game"
import { User } from "./user"

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

  //common
}

export type TMessage<T extends MessageType>  = {
  type: MessageType
  data:  T extends MessageType.data
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
  
  : undefined
}