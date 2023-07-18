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

export const tableListStore: Table[] = [0,1,2].map(i => createTable(i))
