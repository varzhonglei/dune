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

enum MiBaoColor {
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
}

