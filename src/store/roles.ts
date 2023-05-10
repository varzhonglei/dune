import { deepFreeze } from '../tools/deep-freeze'

export enum Role {
  'polo' = 'polo',
  'hailena' = 'hailena',
  'queen' = 'queen',
  'miemie' = 'miemie',
  'paochuan' = 'paochuan'
}
const polo = { 
  name: 'Polo', 
  key: Role.polo,
  skill: ''
}
const hailena = { 
  name: 'Hailena', 
  key: Role.hailena, 
  skill: '' 
}
const queen = { 
  name: 'Queen', 
  key: Role.queen,
  skill: '' 
}
const miemie = { 
  name: 'Miemie', 
  key: Role.miemie,
  skill: ''  
}
const paochuan = { 
  name: 'Paochuan', 
  key: Role.paochuan,
  skill: ''   
}

export const roles = {
  polo,
  hailena,
  queen,
  miemie,
  paochuan,
}
deepFreeze(roles)
