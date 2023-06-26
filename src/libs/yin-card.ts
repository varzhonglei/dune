import { EConstraint, EEffect } from "./effect"

export type TYinCard = {
  cardName: string,
  playEffect?: any[],
  battleEffect?: any[],
  endEffect?: any[],
}

export const yinCards: TYinCard[] = []
const add = (...args: TYinCard[]) => {
  yinCards.push(...args)
}

const c1 = {
  cardName: '毒物检测',
  playEffect: [{
      key: EEffect.workflow,
      flow: [{
        key: EEffect.lookAtTop,
      },{
        key: EEffect.or,
        options: [{ key: EEffect.drawCard }, 
          { key: EEffect.trashCard, card: { position: 'topOfDraw' } }]
      }]
    }]
}
add(c1)

const c2 = {
  cardName: 'shuffleThenDraw',
  playEffect:[{
      key: EEffect.workflow,
      flow: [{
        key: EEffect.shuffle,
      },{
        key: EEffect.drawCard,
      }]
    }]
}
add(c2)

const c3 = {
  cardName: 'drawMayPass',
  playEffect:[{
      key: EEffect.workflow,
      flow: [{
        key: EEffect.drawCard,
      },{
        key: EEffect.or,
        options: [{ key: EEffect.passTurn }, 
          { key: EEffect.noop}]
      }]
    }]
}
add(c3)

const c4 = {
  cardName: 'dao4',
  battleEffect:[{
      key: EEffect.dao,
      number: 4
    }]
}
add(c4, c4)

const c5 = {
  cardName: 'dao3',
  battleEffect:[{
      key: EEffect.or,
      options: [
        { key: EEffect.dao, number: 3 }, 
        { key: EEffect.retreat, numbers: [0,1,2,3]}
      ]
    }]
}
add(c5, c5)

const c6 = {
  cardName: 'time breaker',
  battleEffect:[{
      key: EEffect.dao, number: 2
    }],
  endEffect: [{
      key: EEffect.getSpice, number: 10
    }]
}
add(c6)

const c7 = {
  cardName: '要求尊重',
  battleEndEffect: [{
      key: EEffect.or,
      options: [
        { key: EEffect.inf }, 
        {
          key: EEffect.constraint,
          con: [{ key: EConstraint.paySpice, number: 2 }],
          conBonus: [{
            key: EEffect.inf2,
          }]
        }
      ]
    }]
}
add(c7)