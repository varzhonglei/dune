import { Table } from "../../round-table/tables"
import { Dashboard } from "../../typing"
import { TAction } from "../userActions"


type TCreateHandler<T> = (dashboard:Dashboard, payload: T ) => void
type Handler<T> = {
  table: Table
  token: string,
  payload: T
}

type P = {
  table: Table
  token: string,
  payload: TAction
}

export const CreateLocationHandler = <T>(fn: TCreateHandler<T>) => ({
  table,
  token,
  payload }: Handler<T>
) => {
  table.store.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.token === token)
      if (dashboard) {
        fn(dashboard, payload) 
      }
  }) 
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
        // todo
        // const miBao = dashboard.mibao.find(m => m.id === payload.miBaoAction?.miBaoId)
        // if (miBao && payload.miBaoAction?.location) {
        //   miBao.location = payload.miBaoAction.location
        // }
      }
  })}
}

