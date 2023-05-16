import { DataStore } from "../store/momento"
import { Dashboard } from "../typing"
import { User } from "../typing/user"

export interface Game {
  firstPlayer?: User
  dashboards?: {
    [key in string] : Dashboard
  }
}
const initialGame = {

}


export interface Table {
  id: number,
  users: User[];
  store: DataStore<Game>;
}


const createTable = (id: number) => {
  const store = new DataStore<Game>(initialGame);
  return {
    id,
    users: [],
    store: store,
  }
}

export const tableListStore: Table[] = [1,2,3,4,5].map(i => createTable(i))
