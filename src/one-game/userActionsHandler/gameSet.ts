import { MessageType } from "../../../common/typing/socket"
import { sendTableMessage } from "../../libs/socket/socket"
import { Table } from "../../round-table/tables"
import { setupDune } from "../setup"

export const someoneReady = (table: Table, name: string) => {
  table.store.setState(s => {
    const d = s.dashboards.find(d => d.user?.name === name)
    const user = d?.user
    if (user) {
      user.readyStatus = user.readyStatus === 'ready' ? 'unready' : 'ready'
    }
  }) 
}

export const checkAllReady = (table: Table) => {
  const ds = table.getState().dashboards
  return  ds.every(d => d.user?.readyStatus === 'ready')
}

export const checkAllReadyAndSetup = (table: Table) => {
  if (checkAllReady(table)) {
    setupDune(table)
    sendTableMessage({
      tableId: table.id,
      body: {
        type: MessageType.data,
        data: {
          game: table.getState(),
          storeIndex: table.getStoreIndex()
        }
      }
    })
  }
}