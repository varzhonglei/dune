import { TCard } from "../cards/cards"
import { TYinCard } from "../yin-card/yin-card"
import { TEffect } from "./effect"
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
  'yeye' = 'yeye',
  'leto' = 'leto',
  'dagong' = 'dagong',
}

export enum MiBaoColor {
  'yellow' = '#CCC9A4',
  'blue' = '#519ABA',
  'red' = '#C56D52',
  'green' = '#2BA246',
  'black' = '#2E2E2E'
}

export type TMibao = {
  id: number,
  color: MiBaoColor,
  mentat?: boolean
}

export type TDreadnought = {
  color: MiBaoColor,
}
 

export type TTurn = 'inturn' | 'pass'

export type Dashboard = {
  turn: TTurn
  mibaoActioned: boolean
  revealed: boolean
  exTurn: TTurn
  
  effects: TEffect[]
  currentEffect: TEffect | null
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
  fremenAlliance: boolean
  sisterAlliance: boolean
  unionAlliance: boolean
  empireAlliance: boolean
  //

  troops: {
    troopsCamp: number[]
    troopsBattle: number[]
    troopsSupply: number[]
    troopsKeji: number[]
    troopsTLL: number[]
    dreadnoughtCamp: TDreadnought[]
    dreadnoughtBattle: TDreadnought[]
  }

  boat: 0 | 1 | 2 | 3
  
  cardBuy: number
  revealDao: number
  mibao: TMibao[]

  playedCards: TCard[]
  qiCards: TCard[]
  handCards: TCard[]
  moCards: TCard[]
  trashedCards: TCard[]

  yinCards: TYinCard[]

  role: Role
}


