import { TCard } from "../libs/cards"
import { StationIcon } from "../libs/station"
import { tableListStore } from "../round-table"

export enum EActionType {
  'playYin' = 'playYin',
  'miBao' = 'miBao',
  'endTurn' = 'endTurn',
  'effect' = 'effect',
  'deploy' = 'deploy',
}

export type TAction = {
  card?: TCard
  location?: StationIcon
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

type P = {
  tableId: number
  token: string,
  ActionType: EActionType,
  payload: TAction
}
export const userAction = ({
  tableId,
  token,
  ActionType,
  payload,
}: P) => {
    const table = tableListStore.find(t => t.id === tableId)
    if (ActionType === EActionType.playYin) {
      
    }
}