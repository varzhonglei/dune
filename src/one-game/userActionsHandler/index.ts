import { Table, tableListStore } from "../../round-table/tables"
import { miBaoHandler } from "./miBaoHandler"
import { EActionType, TAction } from '../../../common/typing/user-action'

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

}