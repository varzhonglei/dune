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

export type Dashboard = {
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
  role: Role.polo
}

