import { EConstraint, EEffect } from "./effect"
import { StationIcon } from "./station"

enum ECardCamp {
  'fremen' = 'fremen',
  'sister' = 'sister',
  'union' = 'union',
  'empire' = 'empire',
}
export const storeCards: any[] = []
const add = (...args: any[]) => {
  storeCards.push(...args)
}

const c1 = {
  name: '两面三刀',
  price: 3,
  icons: [StationIcon.triangle, StationIcon.pentagon],
  playEffect: {
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.paySpice, number: 2 }],
      conBonus: [{
        key: EEffect.constraint,
        con: [{ key: EConstraint.loseInf }],
        conBonus: [{ key: EEffect.inf2 }]
      }]
    }]
  },
  revealEffect: {
    get: [{ key: EEffect.cardBuy, number: 2 }]
  }
}
add(c1)

const c2 = {
  name: '金牙匕',
  camp: [ECardCamp.fremen],
  icons: [StationIcon.triangle, StationIcon.fremen],
  playEffect: {
    get: [{
      key: EEffect.getMoney,
    }]
  },
  revealEffect: {
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.fremenBound}],
      conBonus: [{ key: EEffect.infFremen }]
    }, { key: EEffect.dao }]
  }
}
add(c2)

const c3 = {
  name: '6沙虫',
  camp: [ECardCamp.fremen],
  icons: [StationIcon.triangle, StationIcon.circle],
  playEffect: {
    get: [{
      key: EEffect.getSpice, number: 2
    },]
  },
  revealEffect: {
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.fremen2}],
      conBonus: [{ key: EEffect.dao, number: 4 }]
    }, {
      key: EEffect.constraint,
      con: [{ key: EConstraint.fremenAlliance}],
      conBonus: [{ key: EEffect.dao, number: 2 }]
    },]
  }
}
add(c3, c3)

const c4 = {
  name: '弗里曼营地',
  camp: [ECardCamp.fremen],
  icons: [StationIcon.triangle],
  playEffect: {
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.paySpice, number: 2}],
      conBonus: [{ key: EEffect.getTroops, number: 3 }]
    }]
  },
  revealEffect: {
    get: [{key: EEffect.dao,}, 
    {key: EEffect.cardBuy, number: 2},]
  }
}
add(c4,c4)

const c5 = {
  name: '列特凯恩斯',
  camp: [ECardCamp.fremen],
  icons: [StationIcon.circle, StationIcon.fremen],
  playEffect: {},
  buyEffect: {
    get: [{key: EEffect.infEmpire}]
  },
  revealEffect: {
    get: [{key: EEffect.liete,}, 
    { key: EEffect.cardBuy, number: 2},]
  }
}
add(c5)

const c6 = {
  name: '阴影之中',
  camp: [ECardCamp.sister],
  icons: [StationIcon.circle, StationIcon.triangle],
  playEffect: {
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.sister2 }],
      conBonus: [{
        key: EEffect.constraint,
        con: [{ key: EConstraint.dropCard }],
        conBonus: [{ key: EEffect.infExSister }]
      }]
    }]
  },
  revealEffect: {
    get: [{key: EEffect.infSister,}]
  },
  dropEffect: {
    get: [{key: EEffect.infSister,}]
  }
}
add(c6, c6)


const c7 = {
  name: '权利之网',
  camp: [ECardCamp.sister],
  qianRu: true,
  icons: [StationIcon.sister],
  playEffect: {
    get: [
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.fremen2 }],
        conBonus: [{ key: EEffect.getWater }]
      },
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.union2 }],
        conBonus: [{ key: EEffect.drawCard }]
      },
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.empire2 }],
        conBonus: [{ key: EEffect.getMoney, number: 2 }]
      },
    ]
  },
  revealEffect: {
    get: [{key: EEffect.cardBuy,}, {key: EEffect.inf,}]
  },
}
add(c7)

const c8 = {
  name: '其他记忆',
  camp: [ECardCamp.sister],
  icons: [StationIcon.circle, StationIcon.triangle],
  playEffect: {
    get: [
      {
        key: EEffect.or,
        options: [{ key: EEffect.drawCard }, 
          { key: EEffect.findSister }] 
      },
    ]
  },
  revealEffect: {
    get: [{key: EEffect.cardBuy, number: 2}]
  },
}
add(c8)

const c9 = {
  name: '3费的抽一卡',
  camp: [ECardCamp.sister],
  icons: [StationIcon.circle, StationIcon.triangle, StationIcon.pentagon],
  playEffect: {
    get: [
      { key: EEffect.drawCard }
    ]
  },
  revealEffect: {
    get: [{key: EEffect.cardBuy }]
  },
}
add(c9)

const c10 = {
  name: '姐妹会大哥',
  camp: [ECardCamp.sister],
  qianRu: true,
  icons: [StationIcon.pentagon],
  playEffect: {
    get: [
      { key: EEffect.constraint,
        con: [{ key: EConstraint.sisterInPlay }],
        conBonus: [{ key: EEffect.paoC, number: 2 }]
      }
    ]
  },
  revealEffect: {
    get: [{key: EEffect.cardBuy }, {key: EEffect.drawYin }]
  },
}
add(c10)

const c11 = {
  name: '普翼机 抽牌',
  icons: [StationIcon.triangle],
  playEffect: {
    get: [
      { key: EEffect.constraint,
        con: [{ key: EConstraint.union2 }],
        conBonus: [{ key: EEffect.drawCard, number: 2 }]
      }
    ]
  },
  revealEffect: {
    get: [{key: EEffect.cardBuy }, {key: EEffect.getSpice }]
  },
}
add(c11, c11)

const c12 = {
  name: '普翼机 上兵',
  icons: [StationIcon.triangle, StationIcon.circle],
  playEffect: {
    get: [
      { key: EEffect.killTroopCamp}
    ]
  },
  revealEffect: {
    get: [{key: EEffect.dao, number: 3 }, {key: EEffect.deployTroop }]
  },
}
add(c12, c12)

const c13 = {
  name: 'power play',
  icons: [StationIcon.fremen, StationIcon.sister, StationIcon.union, StationIcon.empire],
  playEffect: {
    get: [
      { key: EEffect.powerPlay}
    ]
  },
  revealEffect: {},
}
add(c13, c13)