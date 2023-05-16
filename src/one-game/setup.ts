import { roles } from "../store/roles"
import { Game, Table, tableListStore } from "../round-table/tables"
import { DataStore } from "../store/momento"
import { Role, initDashBoard } from "../typing"
import { random } from "lodash"



const setRole = ( {
  store,
  token,
  role,
}:{
  store: DataStore<Game>,
  token: string
  role: Role
}) => {
  const w = { water: 1 }
  if (role === Role.queen) {
    w.water = 0
  }
  store.setState({
    dashboards: {
      [token]: {
        ...initDashBoard,
        ...w,
        role,
      }
    }
  })
}
const setRoles = (table: Table) => {
  const users = table.users
  const rs = Object.values(roles)
  rs.sort((a,b) => random(-1.1, 1.1))
  rs.slice(0, 4).forEach((role, ind) => {
    setRole({
      store: table.store,
      token: users[ind].token,
      role: role.key,
    })
  })
}
const setFirstPlayer = (table: Table) => {
  const users = table.users
  table.store.setState({
    firstPlayer: users[random(0,3)]
  })
}

export const setup = (tableId: number) => {
  const table = tableListStore.find(t => t.id === tableId)
  if (!table) return
  if (table.users.length < 4) return 
  setRoles(table)
  setFirstPlayer(table)
}