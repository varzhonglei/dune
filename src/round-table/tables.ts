import { DataStore } from "../store/momento"
import { Dashboard, initDashBoard } from "../typing"
import { User } from "../typing/user"

export interface Game {
  firstPlayer?: User
  dashboards: Dashboard[]
  users: User[]
}
const initialGame = {
  dashboards: [initDashBoard, initDashBoard, initDashBoard, initDashBoard],
  users: []
}


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

export const tableListStore: Table[] = [1,2,3,4,5].map(i => createTable(i))
