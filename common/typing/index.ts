import { TCard } from "../cards/cards"
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
  'yellow' = '#CCC9A4',
  'blue' = '#519ABA',
  'red' = '#C56D52',
  'green' = '#2BA246',
  'black' = '#2E2E2E'
}

export type TMibao = {
  id: string,
  color: MiBaoColor,
  mentat?: boolean
}

export type Dashboard = {
  effects: any[]
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
  mibao: TMibao[]

  playedCards: TCard[]
  qiCards: TCard[]
  handCards: TCard[]
  moCards: TCard[]
  trashedCards: TCard[]

  yinCards: any[]

  role: Role
}

