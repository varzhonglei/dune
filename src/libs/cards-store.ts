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


