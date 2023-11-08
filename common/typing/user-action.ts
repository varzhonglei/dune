import { TLocationId } from '../locations/locations'
import { TEffect } from './effect'
export enum EActionType {
  'playYin' = 'playYin',
  'miBao' = 'miBao',
  'endTurn' = 'endTurn',
  'todoEffect' = 'todoEffect',
  'deploy' = 'deploy',
}

export type TAction = {
  miBaoAction?: {
    cardId: number
    miBaoId: number
    locationId: TLocationId
  } 
  yinCard?: any
  todoEffect?: TEffect
  deploy?: {
    troops: number,
    jian: number
  }
}