import { TLocationId } from '../station/station'

export enum EActionType {
  'playYin' = 'playYin',
  'miBao' = 'miBao',
  'endTurn' = 'endTurn',
  'effect' = 'effect',
  'deploy' = 'deploy',
}

export type TAction = {
  miBaoAction?: {
    cardId: number
    miBaoId: number
    locationId: TLocationId
  } 
  yinCard?: any
  todoEffects?: {
    index: number
    result: any
  }
  deploy?: {
    troops: number,
    jian: number
  }
}