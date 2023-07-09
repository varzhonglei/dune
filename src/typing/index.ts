import { TCard, basicCards, c1 } from "../libs/cards"
import { StationIcon } from "../libs/station"
import { User } from "./user"

export enum Role {
  'polo' = 'polo',
  'hailena' = 'hailena',
  'queen' = 'queen',
  'miemie' = 'miemie',
  'paochuan' = 'paochuan',
  'fanshu2' = 'fanshu2',
  'qiange' = 'qiange',
  'yilaisha' = 'yilaisha',
  'wanguijie' = 'wanguijie',
  'longbo' = 'longbo',
  'shui' = 'shui',
  'yeye' = 'yeye'
}

export enum MiBaoColor {
  'yellow' = 'yellow',
  'blue' = 'blue',
  'red' = 'red',
  'green' = 'green',
}

export type Dashboard = {
  user?: User
  miBaoColor?: MiBaoColor
  point: number
  //source
  money: number
  water: number
  spice: number
  //influence
  fremen: number
  sister: number
  union: number
  empire: number
  //

  troops: {
    troopsCamp: number[]
    troopsBattle: number[]
    troopsSupply: number[]
    troopsKeji: number[]
    troopsTLL: number[]
  }

  cardBuy: number
  revealDao: number

  mibao: {
    location: 'free' | StationIcon,
  } []

  playedCards: TCard[]
  qiCards: TCard[]
  handCards: TCard[]
  moCards: TCard[]
  trashedCards: TCard[]

  yinCards: any[]

  role: Role
}

export const initDashBoard: Dashboard = {
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

  mibao: [{
    location: 'free',
  }, {
    location: 'free',
  }],

  playedCards: [],
  qiCards: [c1],
  handCards: [],
  moCards: [...basicCards],
  trashedCards: [],

  yinCards: [],

}

