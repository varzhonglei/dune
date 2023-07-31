import { Game, initialGame } from "../one-game/game"
import { DataStore } from "../store/momento"

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

export let tableListStore: Table[] = [1,2,3].map(i => createTable(i))
export const setTableList = (t: Table[]) => {
  tableListStore = t
}
