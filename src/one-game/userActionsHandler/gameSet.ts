import { Table } from "../../round-table/tables"


export const someoneReady = (table: Table, token: string) => {
  table.store.setState(s => {
    const d = s.dashboards.find(d => d.user?.token === token)
    const user = d?.user
    if (user) {
      user.readyStatus = user.readyStatus === 'ready' ? 'unready' : 'ready'
    }
  }) 
}