import { EEffect } from "./effect"


export const yinCards: any[] = []
const add = (...args: any[]) => {
  yinCards.push(...args)
}

const c1 = {
  cardName: '毒物检测',
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
}
add(c1)
