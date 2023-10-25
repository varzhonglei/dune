import { EConstraint, EEffect } from "../typing/effect"
import { addYinCardIds } from "../../src/utils"

export type TYinCardPart = {
  cardName: string,
  playEffect?: any[],
  battleEffect?: any[],
  endEffect?: any[],
  img: {
    name: string
  }
}
export type TYinCard = TYinCardPart & {
  id: number
}

export const yinCards: TYinCard[] = []

const add = (...args: TYinCardPart[]) => {
  yinCards.push(...addYinCardIds(args))
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
    }],
  img: {
    name: 'y34.jpg',
  }
    
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
    }],
    img: {
      name: 'y38.jpg',
    }
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
    }],
    img: {
      name: 'y10.jpg',
    }
}
add(c3)

const c4 = {
  cardName: 'dao4',
  battleEffect:[{
      key: EEffect.dao,
      number: 4
    }],
    img: {
      name: 'y44.jpg',
    }
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
    }],
    img: {
      name: 'y30.jpg',
    }
}
add(c5, c5)

const c6 = {
  cardName: 'time breaker',
  battleEffect:[{
      key: EEffect.dao, number: 2
    }],
  endEffect: [{
      key: EEffect.getSpice, number: 10
    }],
    img: {
      name: 'y35.jpg',
    }
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
    }],
    img: {
      name: 'y14.jpg',
    }
}
add(c7)