import { Table, tableListStore } from "../../round-table/tables"
import { miBaoHandler } from "./miBaoHandler"
import { EActionType, TAction } from '../../../common/typing/user-action'
import { BasicHandler } from "./basicHandler"

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
        if (dashboard && payload.todoEffect?.key) {
          BasicHandler(dashboard, payload.todoEffect?.key, payload.todoEffect)
        }
      })
    }
}