import { TCard, fremenCards, spacingGuidCards, spiceMustFlowCards } from "../libs/cards"
import { storeCards } from "../libs/cards-store"
import { yinCards } from "../libs/yin-card"
import { DataStore } from "../store/momento"
import { Dashboard, MiBaoColor, initDashBoard } from "../typing"
import { User } from "../typing/user"

export interface Game {
  firstPlayer?: User
  dashboards: Dashboard[]
  users: User[]
  storeCards: TCard[]
  spiceMustFlowCards: TCard[]
  fremenCards: TCard[]
  spacingGuidCards: TCard[]
  yinCards: any[]
  mentat: number
}
const initialGame: Game = {
  dashboards: [{
    ...initDashBoard,
    miBaoColor: MiBaoColor.blue,
  }, {
    ...initDashBoard,
    miBaoColor: MiBaoColor.green,
  }, {
    ...initDashBoard,
    miBaoColor: MiBaoColor.red,
  }, {
    ...initDashBoard,
    miBaoColor: MiBaoColor.yellow,
  }],
  users: [],
  storeCards: storeCards,
  spiceMustFlowCards: spiceMustFlowCards,
  fremenCards: fremenCards,
  spacingGuidCards: spacingGuidCards,

  yinCards: yinCards,

  mentat: 1,

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

export const tableListStore: Table[] = [0,1,2].map(i => createTable(i))
