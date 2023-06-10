import { roles } from "../libs/roles"
import { Game, Table, tableListStore } from "../round-table/tables"
import { DataStore } from "../store/momento"
import { Role, initDashBoard } from "../typing"
import { random, shuffle, slice } from "lodash"



const setRole = ( {
  store,
  token,
  role,
}:{
  store: DataStore<Game>,
  token: string
  role: Role
}) => {
  const ex = { ...initDashBoard }
  if (role === Role.queen) {
    ex.water = 0
  }
  if (role === Role.fanshu2) {
    ex.money = 1
    ex.spice = 1
  }
  
  store.setState(draft => {
    const d  = draft.dashboards.find(d => d.user?.token === token)
    d && (d.role = role)
  })
}

const setRoles = (table: Table) => {
  const users = table.store.getState().users
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
  const users = table.store.getState().users
  table.store.setState({
    firstPlayer: users[random(0,3)]
  } as any)
}

const firstDrawCard = (table: Table) => {
  table.store.setState((draft) => {
    [0,1,2,3].forEach(k => {
      const d = draft.dashboards[k]
      const operationCards = shuffle(d.moCards)
      d.handCards = slice(operationCards, 0, 5)
      d.moCards = slice(operationCards, 5)
    })
  })
}

const firstDrawYin = (table: Table) => {
  table.store.setState((draft) => {
    const operationCards = shuffle(draft.yinCards);
    [0,1,2,3].forEach(k => {
      const d = draft.dashboards[k]
      d.yinCards = [operationCards[k]]
    })
    draft.yinCards = slice(operationCards, 4)
  })
}


export const setup = (tableId: number) => {
  const table = tableListStore.find(t => t.id === tableId)
  if (!table) return
  
  setRoles(table)
  setFirstPlayer(table)
  firstDrawCard(table)
  firstDrawYin(table)
}