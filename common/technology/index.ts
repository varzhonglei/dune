import { EConstraint, EEffect, TEffect } from "../typing/effect"


export type TTech = {
  id: string,
  name: string,
  price: number,
  buyEffect?: TEffect[],
  roundBegin?: TEffect[],
  endGameEffect?: TEffect[],
  action?: TEffect[],
  revealEffect?: TEffect[],
  winConflict?: TEffect[],
}

export const Technology: TTech[] = [
  {
    id: 'k1',
    name: '火炮',
    price: 1,
    revealEffect: [
      // todo
    ],
  },
  {
    id: 'k2',
    name: '限制性军事设备',
    price: 4,
    revealEffect: [{
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
    endGameEffect: [{
      //todo End game
      key: EEffect.constraint
    }],
    roundBegin: [{
      key: EEffect.drawCard
    }]
  },
  {
    id: 'k4',
    name: '垃圾处理设施',
    price: 3,
    buyEffect: [{
      key: EEffect.trashCard
    }],
    revealEffect: [{
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
  {
    id: 'k5',
    name: '引爆设备',
    price: 3,
    winConflict: []
    // todo 
  },
  {
    id: 'k6',
    name: '运兵船',
    price: 2,
  },
  {
    id: 'k7',
    name: '旗舰',
    price: 8,
    buyEffect: [{
      key: EEffect.getVP
    }],
    action: []
    // todo 
  },
  {
    id: 'k8',
    name: '麝香毒',
    price: 4,
    buyEffect: [{
      key: EEffect.drawYin, number: 2
    }],
    endGameEffect: [{
      key:EEffect.getVP, number: 0.5
    }]
  },

 ]