import { deepFreeze } from '../../src/utils/deep-freeze'
import { Role } from '../typing'

const yeye = {
  name: '厄尔•曼侬•索瓦尔德', 
  key: Role.yeye,
  skill: '',
  srcName: 'r1.jpg'
}

const longbo = {
  name: '龙伯•韦尔尼厄斯王子', 
  key: Role.longbo,
  skill: '',
  srcName: 'r2.jpg'
}

const paochuan = { 
  name: '亨卓•莫里泰尼子爵', 
  key: Role.paochuan,
  skill: '',
  srcName: 'r3.jpg'   
}

const leto = { 
  name: '雷托•厄崔迪公爵', 
  key: Role.leto,
  skill: '',
  srcName: 'r4.jpg'   
}

const polo = { 
  name: '保罗•厄崔迪', 
  key: Role.polo,
  skill: '',
  srcName: 'r5.jpg'   
}

const fanshu2 = { 
  name: '“野曾”格罗苏•拉班', 
  key: Role.fanshu2,
  skill: '',
  srcName: 'r6.jpg'   
}

const qiange = { 
  name: '“伊尔班•里奇塞伯爵', 
  key: Role.qiange,
  skill: '',
  srcName: 'r7.jpg'   
}

const dagong = { 
  name: '大公爵阿曼德•埃卡兹', 
  key: Role.dagong,
  skill: '',
  srcName: 'r8.jpg'   
}

const wanguijie = { 
  name: '特西娅•韦尔尼厄斯', 
  key: Role.wanguijie,
  skill: '',
  srcName: 'r9.jpg'   
}


const hailena = { 
  name: '海伦娜•里奇寨', 
  key: Role.hailena, 
  skill: '',
  srcName: 'r10.jpg'   
}

const miemie = { 
  name: '弗拉基米尔 •哈克南男爵', 
  key: Role.miemie,
  skill: '',
  srcName: 'r11.jpg'  
}

const queen = { 
  name: '云娜。莫里泰尼“公主”', 
  key: Role.queen,
  skill: '',
  srcName: 'r12.jpg'  
}

const yilaisha = { 
  name: '伊菜莎•埃卡兹', 
  key: Role.yilaisha,
  skill: '',
  srcName: 'r13.jpg'  
}

const shui = { 
  name: '艾莉安娜 •托瓦尔德伯爵夫人', 
  key: Role.shui,
  skill: '',
  srcName: 'r14.jpg'  
} 

export const roles = {
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
