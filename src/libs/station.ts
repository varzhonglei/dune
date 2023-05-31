import { EConstraint, EEffect } from "./effect"


export enum StationIcon {
  triangle = 'triangle',
  pentagon = 'pentagon',
  circle = 'circle',

  fremen = 'fremen',
  sister = 'sister',
  union = 'union',
  empire = 'empire',
}

export const station = {
  //三角
  paoCLower: {
    icon: StationIcon.triangle,
    get: [{ key: EEffect.getMoney }, { key: EEffect.paoC }]
  },
  paoCPower: {
    icon: StationIcon.triangle,
    require: EConstraint.union2,
    get: [{ key: EEffect.paoC, number: 2}]
  },
  spice1: {
    icon: StationIcon.triangle,
    combat: true,
    get: [{ key: EEffect.collectSpice1 }]
  },
  spice2: {
    icon: StationIcon.triangle,
    combat: true,
    get: [{ key: EEffect.collectSpice2 }]
  },
  spice3: {
    icon: StationIcon.triangle,
    combat: true,
    get: [{ key: EEffect.collectSpice3 }]
  },
  //圆点
  circleDraw: {
    icon: StationIcon.circle,
    combat: true,
    get: [{ key: EEffect.drawCard }, { key: EEffect.getTroops } ]
  },
  circleYin: {
    icon: StationIcon.circle,
    combat: true,
    get: [{ key: EEffect.drawYin }, { key: EEffect.getTroops } ]
  },
  circleDrawPower: {
    icon: StationIcon.circle,
    combat: true,
    pay: [{ key: EConstraint.payWater, number: 2 }],
    get: [{ key: EEffect.drawCard, number: 2 }, { key: EEffect.research }]
  },
  circleWater: {
    icon: StationIcon.circle,
    combat: true,
    require: EConstraint.fremen2,
    get: [{ key: EEffect.getWater }, { key: EEffect.getTroops } ]
  },

  fremenWater: {
    icon: StationIcon.fremen,
    combat: true,
    get: [{ key: EEffect.getWater }]
  },
  fremenTroops: {
    icon: StationIcon.fremen,
    combat: true,
    pay: [{ key: EConstraint.payWater }],
    get: [{ key: EEffect.getTroops, number: 2 }]
  },
  sisterYin: {
    icon: StationIcon.sister,
    get: [{ key: EEffect.drawYin }]
  },
  sisterSi: {
    icon: StationIcon.sister,
    pay: [{ key: EConstraint.paySpice, number: 2 }],
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.trashCard }],
      conBonus: [{ key: EEffect.drawCard, number: 2 }]
    }]
  },

  unionSpace: {
    icon: StationIcon.union,
    get: [{ key: EEffect.acquireSpacingGuid }]
  },
  unionAllIn: {
    icon: StationIcon.union,
    combat: true,
    pay: [{ key: EConstraint.paySpice, number: 6 }],
    get: [{ key: EEffect.getTroops, number: 5 }, { key: EEffect.getWater, number: 2 }]
  },
  empire2k: {
    icon: StationIcon.empire,
    get: [{ key: EEffect.getMoney, number: 2 }]
  },
  empireSellSpice: {
    icon: StationIcon.empire,
    pay: [{ key: EConstraint.paySpice, number: 4 }],
    get: [{ key: EEffect.getTroops, number: 2 }, { key: EEffect.getMoney, number: 5 }, { key: EEffect.drawYin }]
  },

  pentagonHei: {
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 2 }],
    get: [{ key: EEffect.getHei }, { key: EEffect.drawCard }]
  },

  pentagonHight: {
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 5 }],
    get: [{ key: EEffect.height }]
  },

  pentagonUnlock: {
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 8 }],
    get: [{ key: EEffect.unlock }]
  },
  pentagonTech: {
    icon: StationIcon.pentagon,
    get: [{ key: EEffect.cardBuy }, 
      { key: EEffect.or, 
        options: [{ key: EEffect.saveTechBuy }, 
                  { key: EEffect.byTechLess1 }] }]
  },
  pentagonJian: {
    icon: StationIcon.pentagon,
    pay: [{ key: EConstraint.payMoney, number: 3 }],
    get: [{ key: EEffect.byTech }, { key: EEffect.getJian }]
  }

}