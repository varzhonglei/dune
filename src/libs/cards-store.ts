import { EConstraint, EEffect } from "./effect"
import { StationIcon } from "./station"

const c1 = {
  name: '两面三刀',
  icons: [StationIcon.triangle, StationIcon.pentagon],
  playEffect: {
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.paySpice, number: 2 }],
      conBonus: [{
        key: EEffect.constraint,
        con: [{ key: EConstraint.loseInf }],
        conBonus: [{ key: EEffect.getInf2 }]
      }]
    }]
  },
  revealEffect: {
    get: [{ key: EEffect.cardBuy, number: 2 }]
  }
}


export const storeCards = [c1]