import { User } from "../typing/user"

interface TableListStore {
  id: number,
  users: User[];
  store: Game;
}

interface Game {

}

const createTable = (id: number) => {
  return {
    id,
    users: [],
    store: {},
  }
}

export const tableListStore: TableListStore[] = [1,2,3,4,5].map(i => createTable(i))
