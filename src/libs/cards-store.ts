import { EConstraint, EEffect } from "./effect"
import { StationIcon } from "./station"

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

const c2 = {
  name: '金牙匕',
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

const c3 = {
  name: '6沙虫',
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

const c4 = {
  name: '弗里曼营地',
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

const c5 = {
  name: '列特凯恩斯',
}


export const storeCards = [c1]