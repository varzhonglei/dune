import { deepFreeze } from '../tools/deep-freeze'
import { Role } from '../typing'

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
