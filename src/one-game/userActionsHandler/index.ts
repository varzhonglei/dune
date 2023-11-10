import { Table } from "../../round-table/tables"
import { miBaoHandler } from "./miBaoHandler"
import { EActionType, TAction } from '../../../common/typing/user-action'
import { BasicHandler } from "./basicHandler"
import { jdb } from "../../store/json-db"

type P = {
  table: Table
  name: string,
  actionType: EActionType,
  payload: TAction
}
export const userActionsHandler = ({
  table,
  name,
  actionType,
  payload,
}: P) => {
    if (actionType === EActionType.playYin) {
      //todo
      return 
    }
    if (actionType === EActionType.miBao) {
      miBaoHandler({
        table,
        name,
        payload
      })
    }
    if (actionType === EActionType.todoEffect) {
      table.setState(s => {
        const dashboard = s.dashboards.find(d => d.user?.name === name)
        const theKey = payload.todoEffect?.key
        if (dashboard && theKey) {
          const theEInd = dashboard?.effects.findIndex(e => e.key === theKey)
          dashboard?.effects.splice(theEInd, 1)
          BasicHandler(
            {
              dashboard,
              typeKey:  theKey,
              payload: payload.todoEffect,
              game: s
            } 
          )
        }
      })
    }
    //saveGame
    jdb.saveGame(table.id, table.getState())
}
