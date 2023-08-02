import { Game, initialGame } from "../one-game/game"
import { DataStore } from "../store/momento"
import { isSupperAdmin } from '../../common/is-super-admin'

const tableNumber = 3

export interface Table {
  id: number,
  admin: string,
  store: DataStore<Game>;
}

const createTable = (id: number, admin?: string) => {
  const store = new DataStore<Game>(initialGame);
  return {
    id,
    admin: admin || 'unset',
    store: store,
  }
}

export let tableListStore: Table[] = Array.from({length: tableNumber}).map((i, ind) => createTable(ind + 1))
export const setTableList = (t: Table[]) => {
  if (t && Array.isArray(t)) {
    tableListStore = t
  }
}
export const addTable = (name: string) => {
  const lastId = tableListStore[tableListStore.length - 1]?.id || 0
  tableListStore.push(createTable(lastId + 1, name))
}

export const deleteTable = (name: string, tId: number) => {
  let ind: number
  if (isSupperAdmin(name)) {
    ind = tableListStore.findIndex(t => t.id === tId)
  } else {
    ind = tableListStore.findIndex(t => t.id === tId && t.admin === name)
  }
  if (ind !== -1) {
    tableListStore.splice(ind, 1)
  }
}
  
