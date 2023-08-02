import { Game, initialGame } from "../one-game/game"
import { DataStore } from "../store/momento"

const tableNumber = 3

export interface Table {
  id: number,
  store: DataStore<Game>;
}

const createTable = (id: number) => {
  const store = new DataStore<Game>(initialGame);
  return {
    id,
    store: store,
  }
}

export let tableListStore: Table[] = Array.from({length: tableNumber}).map((i, ind) => createTable(ind + 1))
export const setTableList = (t: Table[]) => {
  if (t && Array.isArray(t)) {
    tableListStore = t
  }
}
  
