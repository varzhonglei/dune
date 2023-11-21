import { TMibao } from "../typing"
import { EConstraint, EEffect, TConstraint, TEffect } from "../typing/effect"


export enum LocationIcon {
  triangle = 'triangle',
  pentagon = 'pentagon',
  circle = 'circle',

  fremen = 'fremen',
  sister = 'sister',
  union = 'union',
  empire = 'empire',
}

export type TLocationId = 'pao1' | 'pao2' | 'spice1' | 'spice2' | 'spice3' | 'circleDraw1' | 'circleYin' | 'circleDraw2' | 'circleWater' |
  'fremenGetWater' | 'fremenUseWater' | 'sisterYin' | 'sisterDraw' | 'unionGuild' | 'unionAllIn' | 'empireMoney' | 'empireMai'
  | 'hei' | 'high' | 'jian' | 'kejiSale' | 'unlock'

export type Location = {
  id: TLocationId,
  name: string,
  get: TEffect[],
  icon: LocationIcon,
  combat?: boolean
  require?: TConstraint[],
  pay?: TConstraint[],
  miBao?: TMibao[],
  spice?: number
}
export type TLocations = Location[]
export const locations: TLocations = [ {
    id: 'pao1',
    name: '跑单船',
    icon: LocationIcon.triangle,
    get: [{ key: EEffect.getMoney }, { key: EEffect.paoC }]
  },
  {
    id: 'pao2',
    name: '双跑',
    icon: LocationIcon.triangle,
    require: [{ key:EConstraint.union, number:2 }],
    get: [{ key: EEffect.paoC, number: 2}]
  },
  {
    id: 'spice1',
    name: '帝国盆地',
    icon: LocationIcon.triangle,
    combat: true,
    get: [{ key: EEffect.collectSpice1 }],
    spice: 0,
  },
  {
    id: 'spice2',
    name: '1水采香料',
    icon: LocationIcon.triangle,
    combat: true,
    pay: [{ key: EConstraint.payWater, number: 1 }],
    get: [{ key: EEffect.collectSpice2 }],
    spice: 0,
  },
  {
    id: 'spice3',
    name: '2水采香料',
    icon: LocationIcon.triangle,
    combat: true,
    pay: [{ key: EConstraint.payWater, number: 2 }],
    get: [{ key: EEffect.collectSpice3 }],
    spice: 0,
  },
  //圆点
  {
    id: 'circleDraw1',
    name: '厄拉其恩',
    icon: LocationIcon.circle,
    combat: true,
    get: [{ key: EEffect.drawCard }, { key: EEffect.getTroops } ]
  },
   {
    id: 'circleYin',
    name: '迦太格',
    icon: LocationIcon.circle,
    combat: true,
    get: [{ key: EEffect.drawYin }, { key: EEffect.getTroops } ]
  },
  {
    id: 'circleDraw2',
    name: '花水湾',
    icon: LocationIcon.circle,
    combat: true,
    pay: [{ key: EConstraint.payWater, number: 2 }],
    get: [{ key: EEffect.drawCard, number: 2 }, { key: EEffect.research }]
  },
   {
    id: 'circleWater',
    name: '得水得兵',
    icon: LocationIcon.circle,
    combat: true,
    require: [{ key:EConstraint.fremen, number: 2 }],
    get: [{ key: EEffect.getWater }, { key: EEffect.getTroops } ]
  },

   {
    id: 'fremenGetWater',
    name: '弗里曼拿水',
    icon: LocationIcon.fremen,
    combat: true,
    get: [{ key: EEffect.getWater }]
  },
   {
    id: 'fremenUseWater',
    name: '弗里曼AllIn',
    icon: LocationIcon.fremen,
    combat: true,
    pay: [{ key: EConstraint.payWater }],
    get: [{ key: EEffect.getTroops, number: 2 }]
  },
  {
    id: 'sisterYin',
    name: '姐妹会抽阴间牌',
    icon: LocationIcon.sister,
    get: [{ key: EEffect.drawYin }]
  },
  {
    id: 'sisterDraw',
    name: '四一摩尔',
    icon: LocationIcon.sister,
    pay: [{ key: EConstraint.paySpice, number: 2 }],
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.trashCard }],
      conBonus: [{ key: EEffect.drawCard, number: 2 }]
    }]
  },

   {
    id: 'unionGuild',
    name: '传送门',
    icon: LocationIcon.union,
    get: [{ key: EEffect.acquireSpacingGuid }]
  },
   {
    id: 'unionAllIn',
    name: '远航机',
    icon: LocationIcon.union,
    combat: true,
    pay: [{ key: EConstraint.paySpice, number: 6 }],
    get: [{ key: EEffect.getTroops, number: 5 }, { key: EEffect.getWater, number: 2 }]
  },
   {
    id: 'empireMoney',
    name: '拿 2 元',
    icon: LocationIcon.empire,
    get: [{ key: EEffect.getMoney, number: 2 }]
  },
   {
    id: 'empireMai',
    name: '买香料',
    icon: LocationIcon.empire,
    pay: [{ key: EConstraint.paySpice, number: 4 }],
    get: [{ key: EEffect.getTroops, number: 2 }, { key: EEffect.getMoney, number: 5 }, { key: EEffect.drawYin }]
  },

   {
    id: 'hei',
    name: '黑子',
    icon: LocationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 2 }],
    get: [{ key: EEffect.getHei }, { key: EEffect.drawCard }]
  },

   {
    id: 'high',
    name: '高等议会',
    icon: LocationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 5 }],
    get: [{ key: EEffect.height }]
  },

  {
    id: 'unlock',
    name: '解锁',
    icon: LocationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 8 }],
    get: [{ key: EEffect.unlock }]
  },
   {
    id: 'kejiSale',
    name: '买科技',
    icon: LocationIcon.pentagon,
    get: [{ key: EEffect.cardBuy }, 
      { key: EEffect.or, 
        options: [{ key: EEffect.buyTechSave }, 
                  { key: EEffect.buyTechCut }] }]
  },
 {
    id: 'jian',
    name: '开舰',
    icon: LocationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 3 }],
    get: [{ key: EEffect.buyTech }, { key: EEffect.getJian }]
  }
]

export const baiFoDi = [LocationIcon.fremen, LocationIcon.empire, LocationIcon.sister, LocationIcon.union]
export const baiFoBonus: {
  [key in TBaiFoDi]: TEffect
} = {
  [LocationIcon.fremen]: { key: EEffect.getWater },
  [LocationIcon.sister]: { key: EEffect.drawYin },
  [LocationIcon.union]: { key: EEffect.getMoney, number: 3 },
  [LocationIcon.empire]: { key: EEffect.getTroops, number: 2 },
}
export type TBaiFoDi = LocationIcon.fremen | LocationIcon.empire | LocationIcon.sister | LocationIcon.union
