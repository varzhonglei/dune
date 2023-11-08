import { Game, initialGame } from "../../common/game"
import { DataStore } from "../store/momento"
import { isSupperAdmin } from '../../common/is-super-admin'

const tableNumber = 3

export interface Table {
  id: number
  store: DataStore<Game>
  getState: () => Game
  saveState: () => void
  getStoreIndex: () => string
  setState: (state: Game | ((prevState: Game) => any)) => void; 
}

const createTable = (id: number, data?: Game):Table => {
  const store = new DataStore<Game>(data || initialGame);
  return {
    id,
    store: store,
    setState: (params) => store.setState(params),
    getState: () => store.getState(),
    saveState: () => store.saveState(),
    getStoreIndex: () => store.getCurrentIndex()
  }
}

export let tableListStore: Table[] = Array.from({length: tableNumber}).map((i, ind) => createTable(ind + 1))

export const restoreTables = (args: {
  id: number,
  data: Game
}[]) => {
  args.forEach(d => {
    const ind = tableListStore.findIndex(t => t.id === d.id)
    if (ind !== -1) {
      tableListStore.splice(ind, 1, createTable(d.id, d.data))
    } else {
      tableListStore.push(createTable(d.id, d.data))
    }
  })
}

export const addTable = (name: string) => {
  const lastId = tableListStore[tableListStore.length - 1]?.id || 0
  tableListStore.push(createTable(lastId + 1))
}

export const deleteTable = (name: string, tId: number) => {
  let ind: number
  if (isSupperAdmin(name)) {
    ind = tableListStore.findIndex(t => t.id === tId)
    if (ind !== -1) {
      tableListStore.splice(ind, 1)
    }
  }
}
  
