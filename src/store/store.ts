import { DataStore } from "./momento"

interface AllStore {
  firstPlayer: null | string
}

const initialStore: AllStore = {
  firstPlayer: null
}

export const store = new DataStore<AllStore>(initialStore);
