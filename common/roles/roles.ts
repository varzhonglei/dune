import { deepFreeze } from '../../src/utils/deep-freeze'
import { Role } from '../typing'
import { TSprite } from '../typing/ui'

const Sprite = (x: number,y:number) => ({
  position: {
      x,
      y,
  }, 
  size: {
      width: 1730,
      height: 1210
  },
  clip: {
    width: 700,
    height: 700
  }
})

const yeye = {
  name: '厄尔•曼侬•索瓦尔德', 
  key: Role.yeye,
  skill: '',
  srcName: 'r1.jpg',
  sprite: Sprite(360, 200)
}


const longbo = {
  name: '龙伯•韦尔尼厄斯王子', 
  key: Role.longbo,
  skill: '',
  srcName: 'r2.jpg',
  sprite: Sprite(620, 150)
}

const paochuan = { 
  name: '亨卓•莫里泰尼子爵', 
  key: Role.paochuan,
  skill: '',
  srcName: 'r3.jpg',
  sprite: Sprite(620, 150)
}

const leto = { 
  name: '雷托•厄崔迪公爵', 
  key: Role.leto,
  skill: '',
  srcName: 'r4.jpg',
  sprite: Sprite(380, 180) 
}

const polo = { 
  name: '保罗•厄崔迪', 
  key: Role.polo,
  skill: '',
  srcName: 'r5.jpg',
  sprite: Sprite(400, 180) 
}

const fanshu2 = { 
  name: '“野曾”格罗苏•拉班', 
  key: Role.fanshu2,
  skill: '',
  srcName: 'r6.jpg',
  sprite: Sprite(380, 180)
}

const qiange = { 
  name: '“伊尔班•里奇塞伯爵', 
  key: Role.qiange,
  skill: '',
  srcName: 'r7.jpg',
  sprite: Sprite(600, 180)   
}

const dagong = { 
  name: '大公爵阿曼德•埃卡兹', 
  key: Role.dagong,
  skill: '',
  srcName: 'r8.jpg',
  sprite: Sprite(750, 100)  
}

const wanguijie = { 
  name: '特西娅•韦尔尼厄斯', 
  key: Role.wanguijie,
  skill: '',
  srcName: 'r9.jpg',
  sprite: Sprite(850, 120)   
}


const hailena = { 
  name: '海伦娜•里奇寨', 
  key: Role.hailena, 
  skill: '',
  srcName: 'r10.jpg',
  sprite: Sprite(500, 180)   
}

const miemie = { 
  name: '弗拉基米尔 •哈克南男爵', 
  key: Role.miemie,
  skill: '',
  srcName: 'r11.jpg',
  sprite: Sprite(500, 180)   
}

const queen = { 
  name: '云娜。莫里泰尼“公主”', 
  key: Role.queen,
  skill: '',
  srcName: 'r12.jpg',
  sprite:Sprite(700, 120)   
}

const yilaisha = { 
  name: '伊菜莎•埃卡兹', 
  key: Role.yilaisha,
  skill: '',
  srcName: 'r13.jpg',
  sprite: Sprite(900, 220)   
}

const shui = { 
  name: '艾莉安娜 •托瓦尔德伯爵夫人', 
  key: Role.shui,
  skill: '',
  srcName: 'r14.jpg',
  sprite:Sprite(360, 180)   
} 

type TRole = {
  name: string 
  key: Role
  skill: string
  srcName: string
  sprite: TSprite
}

export const roles: {
  [key in Role]: TRole
} = {
  yeye,
  longbo,
  paochuan,
  leto,
  polo,
  fanshu2,
  qiange,
  dagong,
  wanguijie,
  hailena,
  miemie,
  queen,
  yilaisha,
  shui,
}

export const getRoleByKey = (key: Role) => {
  return roles[key]
}

deepFreeze(roles)
