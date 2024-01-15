import { EConstraint, EEffect, TEffect } from "../typing/effect"


export type TTech = {
  id: string,
  name: string,
  price: number,
  buyEffect?: TEffect[],
  buff?: TEffect[],
  action?: TEffect[],
}

export const Technology: TTech[] = [
  {
    id: 'k1',
    name: '火炮',
    price: 1,
    buff: [{
      key: EEffect.dao
    }],
  },
  {
    id: 'k2',
    name: '限制性军事设备',
    price: 4,
    buff: [{
      key: EEffect.constraint,
      con: [{
        key: EConstraint.higherCouncil
      }],
      conBonus: [{
        key: EEffect.dao, number: 4
      }]
    }],
  },
  {
    id: 'k3',
    name: '霍尔茨曼引擎',
    price: 6,
    buff: [{
      //todo End game
      key: EEffect.constraint
    }],
  },
  {
    id: 'k4',
    name: '垃圾处理设施',
    price: 3,
    buyEffect: [{
      key: EEffect.trashCard
    }],
    buff: [{
      // todo every reveal turn
      key: EEffect.constraint,
      con: [{
        key: EConstraint.cardBuy,
        number: 6
      }],
      conBonus: [{
        // todo trash a played card
        key: EEffect.trashCard
      }]
    }],
  },

 ]