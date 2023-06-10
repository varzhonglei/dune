import { TCard, basicCards, c1_spice_control } from "../libs/cards"
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
  troopsCamp: number
  troopsBattle: number
  troopsSupply: number
  troopsKeji: number

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
  troopsCamp: 5,
  troopsBattle: 0,
  troopsSupply: 7,
  troopsKeji: 0,

  mibao: [{
    location: 'free',
  }, {
    location: 'free',
  }],

  playedCards: [],
  qiCards: [c1_spice_control],
  handCards: [],
  moCards: [...basicCards],
  trashedCards: [],

  yinCards: [],

}

