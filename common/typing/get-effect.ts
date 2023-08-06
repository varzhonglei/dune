import { EConstraint, EEffect } from "./effect"

// [{ key: EEffect.paoC, number: 2}]
// get: [{
//   key: EEffect.constraint,
//   con: [{ key: EConstraint.trashCard }],
//   conBonus: [{ key: EEffect.drawCard, number: 2 }]
// }]

// pay: [{ key: EConstraint.paySpice, number: 4 }],
export type GetEffect = {
  key: EEffect
  number?: number
  con?: { key: EConstraint.trashCard, number: number }[]
  conBonus?: GetEffect[]
}