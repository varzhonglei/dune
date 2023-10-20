import { Game, initialGame } from "../../common/game"
import { DataStore } from "../store/momento"
import { isSupperAdmin } from '../../common/is-super-admin'

const tableNumber = 3

export interface Table {
  id: number
  admin: string
  store: DataStore<Game>
  getState: () => Game
  saveState: () => void
  getStoreIndex: () => string
  setState: (state: Game | ((prevState: Game) => any)) => void; 
}

const createTable = (id: number, admin?: string):Table => {
  const store = new DataStore<Game>(initialGame);
  return {
    id,
    admin: admin || 'unset',
    store: store,
    setState: store.setState,
    getState: store.getState,
    saveState: store.saveState,
    getStoreIndex: store.getCurrentIndex
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
  
