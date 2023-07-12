import { Table } from "../../round-table/tables"
import { TAction } from "../userActions"


type P = {
  table: Table
  token: string,
  payload: TAction
}
export const miBaoHandler = ({
  table,
  token,
  payload,
}: P) => {
  if (payload.miBaoAction) {
    table.store.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.token === token)
      if (dashboard) {
        const miBao = dashboard.mibao.find(m => m.id === payload.miBaoAction?.miBaoId)
        if (miBao && payload.miBaoAction?.location) {
          miBao.location = payload.miBaoAction.location
        }
      }
  })}
}

