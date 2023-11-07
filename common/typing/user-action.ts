import { TLocationId } from '../locations/locations'
import { GetEffect } from './get-effect'

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
  todoEffect?: GetEffect
  deploy?: {
    troops: number,
    jian: number
  }
}