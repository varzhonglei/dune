import { EConstraint, EEffect } from "../typing/effect"
import { StationIcon } from "../station/station"
import { TSprite } from '../typing/ui'
import { addCardId, addCardIds } from "../../src/utils"

const Sprite = (x: number,y:number) => ({
  position: {
      x,
      y,
  }, 
  size: {
      width: 1730,
      height: 1210
  },
  clip: {
    width: 700,
    height: 700
  }
})

export type TCardPart = {
  name: string
  playEffect?: any
  revealEffect?: any
  icons?: StationIcon[]
  img?: {
    name: string,
    sprite?: TSprite,
  }
}
export type TCard = TCardPart & {
  id: number
}

export const c1: TCard = addCardId({
  name: '香料控制',
  icons: [StationIcon.triangle],
  playEffect:  [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.paySpice }],
      conBonus: [{ key: EEffect.trashCard },{ key: EEffect.getTroops }]
    }],
  revealEffect:  [{ key: EEffect.cardBuy }],
  img: {
    name: 'c52.jpg'
  }
})

const c2:TCardPart = {
  name: '外交',
  icons: [StationIcon.fremen, StationIcon.sister, StationIcon.union, StationIcon.empire],
  revealEffect:  [{ key: EEffect.cardBuy }],
  img: {
    name: 'c61.jpg'
  }
}

const c3:TCardPart = {
  name: '寻求盟友',
  icons: [StationIcon.fremen, StationIcon.sister, StationIcon.union, StationIcon.empire],
  playEffect:[{ key: EEffect.trashCardSelf }],
  revealEffect:  [{ key: EEffect.cardBuy }],
  img: {
    name: 'c70.jpg'
  }
}

const c4:TCardPart = {
  name: '研究 三角',
  icons: [StationIcon.triangle],
  playEffect: [{ key: EEffect.research }],
  revealEffect:  [{ key: EEffect.cardBuy }, { key: EEffect.TLLBuy }],
  img: {
    name: 'c3.jpg'
  }
}

const c5:TCardPart = {
  name: '土地测量',
  icons: [StationIcon.circle],
  revealEffect:  [{ key: EEffect.cardBuy }],
  img: {
    name: 'c42.jpg'
  }
}

const c6:TCardPart = {
  name: '说服',
  icons: [],
  revealEffect:  [{ key: EEffect.cardBuy, number: 2 }],
  img: {
    name: 'c103.jpg'
  }
}

const c7:TCardPart = {
  name: '匕首',
  icons: [StationIcon.pentagon],
  revealEffect:  [{ key: EEffect.dao }],
  img: {
    name: 'c60.jpg'
  }
}

const c8:TCardPart = {
  name: '印章戒指',
  icons: [StationIcon.pentagon, StationIcon.triangle, StationIcon.circle],
  playEffect:[{ key: EEffect.roleSkill }],
  revealEffect:  [{ key: EEffect.cardBuy }],
  img: {
    name: 'c41.jpg'
  }
}


export const basicCards: TCard[] = addCardIds([c1, c2,c3,c4,c4, c5,c6,c6,c7,c7, c8])

const spiceMustFlow = {
  name: '香料永流传',
  price: 9,
  icons: [],
  revealEffect:  [{ key: EEffect.getSpice }],
  img: {
    name: 'c55.jpg'
  }
}
export const spiceMustFlowCards: TCard[] = addCardIds(Array.from({length: 10}).map(_ => spiceMustFlow))

const fremen = {
  name: 'fremen bro',
  price: 2,
  icons: [StationIcon.pentagon, StationIcon.circle],
  revealEffect:  [{ key: EEffect.getSpice }],
  img: {
    name: 'c51.jpg'
  }
}

export const fremenCards: TCard[] = addCardIds(Array.from({length: 9}).map(_ => fremen))

const spacingGuid = {
  name: 'Spacing Guid',
  icons: Object.values(StationIcon),
  playEffect:  [{ key: EEffect.drawCard }],
  img: {
    name: 'c76.jpg'
  }
}

export const spacingGuidCards: TCard[] = addCardIds(Array.from({length: 6}).map(_ => spacingGuid))
