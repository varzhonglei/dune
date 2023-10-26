import { TCard, TCardPart } from "./cards"
import { EConstraint, EEffect } from "../typing/effect"
import { LocationIcon } from "../locations/locations"
import { addCardIds } from "../../src/utils"

enum ECardCamp {
  'fremen' = 'fremen',
  'sister' = 'sister',
  'union' = 'union',
  'empire' = 'empire',
}
export const storeCards: TCard[] = []
const add = (...args: TCardPart[]) => {
  storeCards.push(...addCardIds(args))
}

const c1 = {
  name: '进进出出',
  price: 3,
  icons: [LocationIcon.triangle, LocationIcon.pentagon],
  playEffect: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.paySpice, number: 2 }],
      conBonus: [{
        key: EEffect.constraint,
        con: [{ key: EConstraint.loseInf }],
        conBonus: [{ key: EEffect.inf2 }]
      }]
    }],
  revealEffect: [{ key: EEffect.cardBuy, number: 2 }],
  img: {
    name: 'c85.jpg'
  }
}
add(c1)

const c2 = {
  name: '金牙匕',
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.triangle, LocationIcon.fremen],
  playEffect: [{
      key: EEffect.getMoney,
    }],
  revealEffect: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.fremenBound}],
      conBonus: [{ key: EEffect.infFremen }]
    }, { key: EEffect.dao }],
    img: {
      name: 'c18.jpg'
    }
}
add(c2)

const c3 = {
  name: '6沙虫',
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.triangle, LocationIcon.circle],
  playEffect: [{
      key: EEffect.getSpice, number: 2
    },],
  revealEffect: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.fremen, number: 2}],
      conBonus: [{ key: EEffect.dao, number: 4 }]
    }, {
      key: EEffect.constraint,
      con: [{ key: EConstraint.fremenAlliance}],
      conBonus: [{ key: EEffect.dao, number: 2 }]
    },],
    img: {
      name: 'c33.jpg'
    }
}
add(c3, c3)

const c4 = {
  name: '弗里曼营地',
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.triangle],
  playEffect: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.paySpice, number: 2}],
      conBonus: [{ key: EEffect.getTroops, number: 3 }]
    }],
  revealEffect: [{key: EEffect.dao,}, 
    {key: EEffect.cardBuy, number: 2},],
    img: {
      name: 'c11.jpg'
    }
}
add(c4,c4)

const c5 = {
  name: '列特凯恩斯',
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.circle, LocationIcon.fremen],
  buyEffect: [{key: EEffect.infEmpire}],
  revealEffect: [{key: EEffect.liete,}, 
    { key: EEffect.cardBuy, number: 2},],
    img: {
      name: 'c84.jpg'
    }
}
add(c5)

const c6 = {
  name: '阴影之中',
  camp: [ECardCamp.sister],
  icons: [LocationIcon.circle, LocationIcon.triangle],
  playEffect: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.sister, number: 2 }],
      conBonus: [{
        key: EEffect.constraint,
        con: [{ key: EConstraint.dropCard }],
        conBonus: [{ key: EEffect.infExSister }]
      }]
    }],
  revealEffect: [{key: EEffect.infSister,}],
  dropEffect: [{key: EEffect.infSister,}],
  img: {
    name: 'c62.jpg'
  }
}
add(c6, c6)

const c7 = {
  name: '权利之网',
  camp: [ECardCamp.sister],
  qianRu: true,
  icons: [LocationIcon.sister],
  playEffect: [
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.fremen, number: 2 }],
        conBonus: [{ key: EEffect.getWater }]
      },
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.union, number: 2 }],
        conBonus: [{ key: EEffect.drawCard }]
      },
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.empire, number: 2 }],
        conBonus: [{ key: EEffect.getMoney, number: 2 }]
      },
    ],
  revealEffect: [{key: EEffect.cardBuy,}, {key: EEffect.inf,}],
  img: {
    name: 'c57.jpg'
  }
}
add(c7)

const c8 = {
  name: '其他记忆',
  camp: [ECardCamp.sister],
  icons: [LocationIcon.circle, LocationIcon.triangle],
  playEffect: [
      {
        key: EEffect.or,
        options: [{ key: EEffect.drawCard }, 
          { key: EEffect.findSister }] 
      },
    ],
  revealEffect: [{key: EEffect.cardBuy, number: 2}],
  img: {
    name: 'c94.jpg'
  }
}
add(c8)

const c9 = {
  name: '姐妹会新人',
  camp: [ECardCamp.sister],
  icons: [LocationIcon.circle, LocationIcon.triangle, LocationIcon.pentagon],
  playEffect: [
      { key: EEffect.drawCard }
    ],
  revealEffect: [{key: EEffect.cardBuy }],
  img: {
    name: 'c93.jpg'
  }
}
add(c9)

const c10 = {
  name: '姐妹会大哥',
  camp: [ECardCamp.sister],
  qianRu: true,
  icons: [LocationIcon.pentagon],
  playEffect: [
      { key: EEffect.constraint,
        con: [{ key: EConstraint.sisterInPlay }],
        conBonus: [{ key: EEffect.paoC, number: 2 }]
      }
    ],
  revealEffect: [{key: EEffect.cardBuy }, {key: EEffect.drawYin }],
  img: {
    name: 'c74.jpg'
  }
}
add(c10)

const c11 = {
  name: '普翼机 抽牌',
  icons: [LocationIcon.triangle],
  playEffect: [
      { key: EEffect.constraint,
        con: [{ key: EConstraint.union, number: 2 }],
        conBonus: [{ key: EEffect.drawCard, number: 2 }]
      }
    ],
  revealEffect: [{key: EEffect.cardBuy }, {key: EEffect.getSpice }],
  img: {
    name: '.jpg'
  }
}
add(c11, c11)

const c12 = {
  name: '普翼机 上兵',
  icons: [LocationIcon.triangle, LocationIcon.circle],
  playEffect: [
      { key: EEffect.killTroopCamp}
    ],
  revealEffect: [{key: EEffect.dao, number: 3 }, {key: EEffect.deployTroop }],
  img: {
    name: 'c12.jpg'
  }
}
add(c12, c12)

const c13 = {
  name: 'power play',
  icons: [LocationIcon.fremen, LocationIcon.sister, LocationIcon.union, LocationIcon.empire],
  playEffect: [
      { key: EEffect.powerPlay}
    ],
    img: {
      name: 'c87.jpg'
    }
}
add(c13, c13)