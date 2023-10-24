import { TMibao } from "../typing"
import { EConstraint, EEffect, TConstraint, TEffect } from "../typing/effect"


export enum StationIcon {
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
  get: TEffect[],
  icon: StationIcon,
  combat?: boolean
  require?: TConstraint[],
  pay?: TConstraint[],
  miBao?: TMibao[]
}
export type TStation = Location[]
export const station: TStation = [ {
    id: 'pao1',
    icon: StationIcon.triangle,
    get: [{ key: EEffect.getMoney }, { key: EEffect.paoC }]
  },
  {
    id: 'pao2',
    icon: StationIcon.triangle,
    require: [{ key:EConstraint.union, number:2 }],
    get: [{ key: EEffect.paoC, number: 2}]
  },
  {
    id: 'spice1',
    icon: StationIcon.triangle,
    combat: true,
    get: [{ key: EEffect.collectSpice1 }]
  },
  {
    id: 'spice2',
    icon: StationIcon.triangle,
    combat: true,
    get: [{ key: EEffect.collectSpice2 }]
  },
  {
    id: 'spice3',
    icon: StationIcon.triangle,
    combat: true,
    get: [{ key: EEffect.collectSpice3 }]
  },
  //圆点
  {
    id: 'circleDraw1',
    icon: StationIcon.circle,
    combat: true,
    get: [{ key: EEffect.drawCard }, { key: EEffect.getTroops } ]
  },
   {
    id: 'circleYin',
    icon: StationIcon.circle,
    combat: true,
    get: [{ key: EEffect.drawYin }, { key: EEffect.getTroops } ]
  },
  {
    id: 'circleDraw2',
    icon: StationIcon.circle,
    combat: true,
    pay: [{ key: EConstraint.payWater, number: 2 }],
    get: [{ key: EEffect.drawCard, number: 2 }, { key: EEffect.research }]
  },
   {
    id: 'circleWater',
    icon: StationIcon.circle,
    combat: true,
    require: [{ key:EConstraint.fremen, number: 2 }],
    get: [{ key: EEffect.getWater }, { key: EEffect.getTroops } ]
  },

   {
    id: 'fremenGetWater',
    icon: StationIcon.fremen,
    combat: true,
    get: [{ key: EEffect.getWater }]
  },
   {
    id: 'fremenUseWater',
    icon: StationIcon.fremen,
    combat: true,
    pay: [{ key: EConstraint.payWater }],
    get: [{ key: EEffect.getTroops, number: 2 }]
  },
  {
    id: 'sisterYin',
    icon: StationIcon.sister,
    get: [{ key: EEffect.drawYin }]
  },
  {
    id: 'sisterDraw',
    icon: StationIcon.sister,
    pay: [{ key: EConstraint.paySpice, number: 2 }],
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.trashCard }],
      conBonus: [{ key: EEffect.drawCard, number: 2 }]
    }]
  },

   {
    id: 'unionGuild',
    icon: StationIcon.union,
    get: [{ key: EEffect.acquireSpacingGuid }]
  },
   {
    id: 'unionAllIn',
    icon: StationIcon.union,
    combat: true,
    pay: [{ key: EConstraint.paySpice, number: 6 }],
    get: [{ key: EEffect.getTroops, number: 5 }, { key: EEffect.getWater, number: 2 }]
  },
   {
    id: 'empireMoney',
    icon: StationIcon.empire,
    get: [{ key: EEffect.getMoney, number: 2 }]
  },
   {
    id: 'empireMai',
    icon: StationIcon.empire,
    pay: [{ key: EConstraint.paySpice, number: 4 }],
    get: [{ key: EEffect.getTroops, number: 2 }, { key: EEffect.getMoney, number: 5 }, { key: EEffect.drawYin }]
  },

   {
    id: 'hei',
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 2 }],
    get: [{ key: EEffect.getHei }, { key: EEffect.drawCard }]
  },

   {
    id: 'high',
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 5 }],
    get: [{ key: EEffect.height }]
  },

  {
    id: 'unlock',
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 8 }],
    get: [{ key: EEffect.unlock }]
  },
   {
    id: 'kejiSale',
    icon: StationIcon.pentagon,
    get: [{ key: EEffect.cardBuy }, 
      { key: EEffect.or, 
        options: [{ key: EEffect.saveTechBuy }, 
                  { key: EEffect.byTechLess1 }] }]
  },
 {
    id: 'jian',
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 3 }],
    get: [{ key: EEffect.byTech }, { key: EEffect.getJian }]
  }
]