import { TCard, basicCards, c1, fremenCards, spacingGuidCards, spiceMustFlowCards } from "./cards/cards"
import { storeCards } from "./cards/cards-store"
import { TStation, station } from "./station/station"
import { numberId } from "../src/utils"
import { TYinCard, yinCards } from "./yin-card/yin-card"
import { Dashboard, MiBaoColor, Role, TMibao } from "./typing"

export interface Game {
  firstPlayer: number
  stage: number
  dashboards: Dashboard[]
  storeCards: TCard[]
  spiceMustFlowCards: TCard[]
  fremenCards: TCard[]
  spacingGuidCards: TCard[]
  allCard: TCard[]
  yinCards: TYinCard[]
  yinCardsPlayed: TYinCard[]
  mentat: TMibao
  station: TStation
}

export const initDashBoard: Dashboard = {
  turn: 'wait',
  effects: [],
  point: 0,
  money: 0,
  water: 1,
  spice: 0,
  fremen: 0,
  sister: 0,
  union: 0,
  empire: 0,
  role: Role.polo,
  
  troops: {
    troopsCamp: Array.from({length: 5}).map(_ => 1),
    troopsBattle: [],
    troopsSupply: Array.from({length: 7}).map(_ => 1),
    troopsKeji: [],
    troopsTLL: [],
  },

  cardBuy: 0,
  revealDao: 0,

  mibao: [],

  playedCards: [],
  qiCards: [c1],
  handCards: [],
  moCards: [...basicCards],
  trashedCards: [],

  yinCards: [],

}

export const initialGame: Game = {
  firstPlayer: 0,
  stage: 0,
  dashboards: [{
    ...initDashBoard,
    miBaoColor: MiBaoColor.blue,
    mibao: Array.from({length:2}).map(_ => ({
      id: numberId('miBao'),
      color: MiBaoColor.blue
    }))
  }, {
    ...initDashBoard,
    miBaoColor: MiBaoColor.green,
    mibao: Array.from({length:2}).map(_ => ({
      id: numberId('miBao'),
      color: MiBaoColor.green
    }))
  }, {
    ...initDashBoard,
    miBaoColor: MiBaoColor.red,
    mibao: Array.from({length:2}).map(_ => ({
      id: numberId('miBao'),
      color: MiBaoColor.red
    }))
  }, {
    ...initDashBoard,
    miBaoColor: MiBaoColor.yellow,
    mibao: Array.from({length:2}).map(_ => ({
      id: numberId('miBao'),
      color: MiBaoColor.yellow
    }))
  }],
  storeCards: storeCards,
  spiceMustFlowCards: spiceMustFlowCards,
  fremenCards: fremenCards,
  spacingGuidCards: spacingGuidCards,
  allCard:[...storeCards, ...spiceMustFlowCards, ...fremenCards, ...spacingGuidCards, ...basicCards],

  yinCards: yinCards,
  yinCardsPlayed: [],

  mentat: {
    id: -1,
    color: MiBaoColor.black,
    mentat: true
  },
  
  station: station

}



