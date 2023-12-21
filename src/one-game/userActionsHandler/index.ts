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
    if (actionType === EActionType.endTurn) {
      table.setState(s => {
        const ind = s.dashboards.findIndex(d => d.user?.name === name)
        const dashboard = s.dashboards[ind]
        if (dashboard) {
          dashboard.exTurn = 'pass'
          dashboard.turn = 'pass'
          const next = s.dashboards[ind + 1] || s.dashboards[0]
          next.turn = 'inturn'
        }
      })
    }
    //saveGame
    jdb.saveGame(table.id, table.getState())
}
