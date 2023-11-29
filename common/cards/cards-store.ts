import { ECardCamp, TCard, TCardPart } from "./cards"
import { EConstraint, EEffect } from "../typing/effect"
import { LocationIcon } from "../locations/locations"
import { addCardIds } from "../../src/utils"

export const storeCards: TCard[] = []
const add = (...args: TCardPart[]) => {
  storeCards.push(...addCardIds(args))
}



export const c1: TCardPart = {
  name: '王权政治',
  price: 4,
  camp: [ECardCamp.sister, ECardCamp.empire],
  icons: [LocationIcon.empire],
  playEffect: [{
      key: EEffect.getTroops
    }, {
      key: EEffect.trashCard
    }],
  revealEffect: [{ key: EEffect.cardBuy }, { key: EEffect.infSister }],
  img: {
    name: 'c1.jpg'
  }
}


export const c2: TCardPart = {
  name: '无限的野心',
  price: 5,
  icons: [LocationIcon.empire, LocationIcon.union, LocationIcon.fremen, LocationIcon.sister],
  playEffect: [{
    key: EEffect.roleSkill
  }],
  revealEffect: [{ key: EEffect.acquireLess5 }],
  dropEffect: [{ key: EEffect.acquireLess5 }],
  trashEffect: [{ key: EEffect.acquireLess5 }],
  img: {
    name: 'c2.jpg'
  }
}

export const c3:TCardPart = {
  name: '研究',
  icons: [LocationIcon.triangle],
  playEffect: [{ key: EEffect.research }],
  revealEffect:  [{ key: EEffect.cardBuy }, { key: EEffect.TLLBuy }],
  img: {
    name: 'c3.jpg'
  }
}

export const c4:TCardPart = {
  name: '死灵大军',
  icons: [],
  TTLPrice: 3,
  buyEffect: [
    {
      key: EEffect.or,
      options: [{ key: EEffect.getTroops, number: 2 }, { key: EEffect.goldBug }]
    }
  ],
  img: {
    name: 'c4.jpg'
  }
}

export const c5:TCardPart = {
  name: '贝尼•特菜拉实验室',
  icons: [LocationIcon.triangle, LocationIcon.circle],
  price: 2,
  playEffect: [{ key: EEffect.TLLBuy }],
  revealEffect: [{
    key: EEffect.TLLBuy
  }, {
    key: EEffect.constraint,
    con: [{ key: EConstraint.gene1 }],
    conBonus: [{ key: EEffect.getSpice }]
  }],
  img: {
    name: 'c5.jpg'
  }
}

export const c6:TCardPart = {
  name: '特菜拉军医',
  icons: [LocationIcon.empire, LocationIcon.circle],
  price: 3,
  playEffect: [{ 
    key: EEffect.constraint,
    con: [{ key: EConstraint.payTLL, number: 2 }],
    conBonus: [{ key: EEffect.goldBug, number: 2 }]
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
    number: 2,
  }, {
    key: EEffect.constraint,
    con: [{ key: EConstraint.loseTroops, number: 2 }],
    conBonus: [{ key: EEffect.TLLBuy, number: 2 }]
  }],
  img: {
    name: 'c6.jpg'
  }
}

export const c7:TCardPart = {
  name: '极乐药剂',
  icons: [LocationIcon.triangle],
  price: 3,
  revealEffect: [{
    key: EEffect.cardBuy,
  }, {
    key: EEffect.TLLBuy,
  }],
  img: {
    name: 'c7.jpg'
  }
}

export const c8:TCardPart = {
  name: '工业间谍',
  icons: [LocationIcon.pentagon],
  TTLPrice: 1,
  playEffect: [{
    key: EEffect.drawCard
  }, {
    key: EEffect.constraint,
    con: [{ key: EConstraint.ifGrafted }],
    conBonus: [{ key: EEffect.TLLBuy }, { key: EEffect.research }]
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
  }],
  img: {
    name: 'c8.jpg'
  }
}

export const c9:TCardPart = {
  name: '岳医生',
  icons: [LocationIcon.circle],
  price: 1,
  playEffect: [{
    key: EEffect.drawCard
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
  }],
  img: {
    name: 'c9.jpg'
  }
}

export const c10:TCardPart = {
  name: '厄拉科斯征兵官',
  icons: [LocationIcon.circle],
  price: 2,
  playEffect: [{
    key: EEffect.getTroops
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
  },{
    key: EEffect.dao,
  }],
  img: {
    name: 'c10.jpg'
  }
}

export const c11:TCardPart = {
  name: '弗雷曼人营地',
  icons: [LocationIcon.triangle],
  camp: [ECardCamp.fremen],
  price: 4,
  playEffect: [{
    key: EEffect.constraint,
    con: [{ key: EConstraint.paySpice, number: 2 }],
    conBonus: [{ key: EEffect.getTroops, number: 3 }]
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
    number: 2,
  },{
    key: EEffect.dao,
  }],
  img: {
    name: 'c11.jpg'
  }
}

export const c12:TCardPart = {
  name: '武装扑翼机',
  icons: [LocationIcon.triangle, LocationIcon.circle],
  price: 4,
  playEffect: [{
    key: EEffect.opponentsLoseBTroops,
  }],
  revealEffect: [
    {
      key: EEffect.dao,
      number: 3,
    },
    {
      key: EEffect.deployTroop,
      maxNumber: 1
    }
  ],
  img: {
    name: 'c12.jpg'
  }
}

export const c13:TCardPart = {
  name: '卫星禁令',
  icons: [LocationIcon.fremen, LocationIcon.union],
  camp: [ECardCamp.empire, ECardCamp.union],
  price: 5,
  playEffect: [{
    key: EEffect.constraint,
    con: [{key: EConstraint.dropCard}],
    conBonus: [{key: EEffect.getSpice}, { key: EEffect.getWater }]
  }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
    },
    {
      key: EEffect.retreat,
      maxNumber: 2
    }
  ],
  img: {
    name: 'c13.jpg'
  }
}

export const c14:TCardPart = {
  name: '公会首席行政长官',
  icons: [LocationIcon.triangle, LocationIcon.union, LocationIcon.circle],
  camp: [ECardCamp.union],
  price: 4,
  playEffect: [{
    key: EEffect.constraint,
    con: [{key: EConstraint.dropCard}],
    conBonus: [{key: EEffect.trashCard}]
  }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
    },
    {
      key: EEffect.paoC
    }
  ],
  img: {
    name: 'c14.jpg'
  }
}

export const c15:TCardPart = {
  name: '詹米',
  icons: [LocationIcon.fremen],
  camp: [ECardCamp.fremen],
  qianRu: [LocationIcon.fremen],
  price: 2,
  playEffect: [{
    key: EEffect.trashCard
  }],
  revealEffect: [
    {
      key: EEffect.dao,
      number: 2
    },
    {
      key: EEffect.cardBuy
    }
  ],
  img: {
    name: 'c15.jpg'
  }
}

export const c16:TCardPart = {
  name: '伊克斯公会小型船',
  icons: [LocationIcon.union],
  camp: [ECardCamp.union],
  price: 3,
  playEffect: [{
    key: EEffect.constraint,
    con: [{key: EConstraint.dropCard, number: 2}],
    conBonus: [{key: EEffect.getJian}]
  }],
  revealEffect: [{
      key: EEffect.buyTechSave,
      number: 2
    },],
  trashEffect:[{
      key: EEffect.buyTechSave,
      number: 2
    },],
  dropEffect:[{
      key: EEffect.buyTechSave,
      number: 2
    },],
  img: {
    name: 'c16.jpg'
  }
}

export const c17:TCardPart = {
  name: '神奇格斗术',
  icons: [LocationIcon.triangle, LocationIcon.circle],
  camp: [ECardCamp.sister],
  price: 3,
  playEffect: [{
    key: EEffect.anotherTurn,
    mayAbandon: true
  }],
  revealEffect: [{
      key: EEffect.cardBuy,
      number: 1
    },
  {
    key: EEffect.dao,
    number: 2
  }],
  img: {
    name: 'c17.jpg'
  }
}

export const c18:TCardPart = {
  name: '晶牙匕',
  icons: [LocationIcon.triangle, LocationIcon.fremen],
  camp: [ECardCamp.fremen],
  price: 3,
  playEffect: [{
    key: EEffect.getMoney
  }],
  revealEffect: [{
      key: EEffect.constraint,
      con: [{key: EConstraint.fremenBound}],
      conBonus: [{key: EEffect.infFremen}]
    },
    {
      key: EEffect.dao,
    }],
  img: {
    name: 'c18.jpg'
  }
}

export const c19:TCardPart = {
  name: '香料走私贩子',
  icons: [LocationIcon.circle],
  camp: [ECardCamp.union],
  price: 2,
  playEffect: [{
    key: EEffect.constraint,
    con: [{key: EConstraint.paySpice, number: 2}],
    conBonus: [{key: EEffect.getMoney, number: 3}, { key: EEffect.infUnion }]
  }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
    },
    {
      key: EEffect.dao,
    }],
  img: {
    name: 'c19.jpg'
  }
}

export const c20:TCardPart = {
  name: '杜菲•哈瓦特',
  icons: [LocationIcon.circle, LocationIcon.triangle, LocationIcon.empire, LocationIcon.union, LocationIcon.sister, LocationIcon.fremen],
  price: 5,
  playEffect: [{
    key: EEffect.drawCard,
  }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
    },
    {
      key: EEffect.drawYin,
    }],
  img: {
    name: 'c20.jpg'
  }
}

export const c21:TCardPart = {
  name: '太空旅行',
  icons: [LocationIcon.union],
  camp: [ECardCamp.union],
  price: 3,
  playEffect: [{
    key: EEffect.drawCard,
  }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
      number: 2
    }
  ],
  img: {
    name: 'c21.jpg'
  }
}

export const c22:TCardPart = {
  name: '搬运机',
  icons: [LocationIcon.triangle],
  price: 5,
  playEffect: [{
    key: EEffect.wawaji,
  }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
    },
    {
      key: EEffect.getSpice,
    }
  ],
  img: {
    name: 'c22.jpg'
  }
}

export const c23:TCardPart = {
  name: '公会银行家',
  icons: [LocationIcon.empire, LocationIcon.union, LocationIcon.pentagon],
  price: 5,
  revealEffect: [
    {
      key: EEffect.spiceMustFlowCost3,
    },
  ],
  img: {
    name: 'c23.jpg'
  }
}

export const c24:TCardPart = {
  name: '彼得•德伏来',
  icons: [LocationIcon.pentagon, LocationIcon.circle],
  price: 5,
  playEffect: [{
    key: EEffect.drawYin
  }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
      number: 3
    },
    {
      key: EEffect.dao
    }
  ],
  img: {
    name: 'c24.jpg'
  }
}

export const c25:TCardPart = {
  name: '贝尼•杰瑟里特姐妹',
  icons: [LocationIcon.pentagon, LocationIcon.sister],
  camp: [ECardCamp.sister],
  price: 3,
  revealEffect: [
   {
    key: EEffect.or,
    options: [ {
      key: EEffect.cardBuy,
      number: 2
    },
    {
      key: EEffect.dao,
      number: 2
    }]
   }
  ],
  img: {
    name: 'c25.jpg'
  }
}

export const c26:TCardPart = {
  name: '香料商人',
  icons: [LocationIcon.triangle, LocationIcon.circle],
  camp: [ECardCamp.fremen],
  price: 4,
  playEffect: [{
    key: EEffect.constraint,
    con: [{ key: EConstraint.fremen, number: 2 }],
    conBonus: [{
      key:EEffect.constraint,
      con: [ {key: EConstraint.dropCard} ],
      conBonus: [{
        key: EEffect.getSpice,
        number: 2
      }]
    }]
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
    number: 2
  },
  {
    key: EEffect.dao,
  }],
  img: {
    name: 'c26.jpg'
  }
}


export const c27:TCardPart = {
  name: '埃斯马•图克',
  icons: [LocationIcon.triangle, LocationIcon.circle],
  camp: [ECardCamp.union],
  price: 5,
  playEffect: [{
    key:EEffect.constraint,
    con: [ {key: EConstraint.paySpice} ],
    conBonus: [{
      key: EEffect.getSpice,
      number: 2
    }]
  }],
  revealEffect: [{
    key: EEffect.getSpice,
    number: 2
  },
  {
    key: EEffect.getMoney,
    number: 2
  }],
  trashEffect: [{
    key: EEffect.getSpice,
    number: 2
  },
  {
    key: EEffect.getMoney,
    number: 2
  }],
  dropEffect: [{
    key: EEffect.getSpice,
    number: 2
  },
  {
    key: EEffect.getMoney,
    number: 2
  }],
  img: {
    name: 'c27.jpg'
  }
}

export const c28:TCardPart = {
  name: '宇联商会代表',
  icons: [LocationIcon.triangle],
  qianRu: [LocationIcon.triangle],
  price: 1,
  revealEffect: [
  {
    key: EEffect.getMoney,
    number: 3
  }],
  trashEffect: [{
    key: EEffect.getMoney,
    number: 3
  }],
  dropEffect: [
  {
    key: EEffect.getMoney,
    number: 3
  }],
  img: {
    name: 'c28.jpg'
  }
}
export const c29:TCardPart = {
  name: '本地贩子',
  icons: [LocationIcon.circle],
  price: 1,
  playEffect: [
    {
      key: EEffect.or,
      options: [{key: EEffect.constraint,
        con: [{key: EConstraint.paySpice, number:2}],
        conBonus: [{key: EEffect.getMoney, number: 5}]
      }, {key: EEffect.constraint,
        con: [{key: EConstraint.payMoney, number:5}],
        conBonus: [{key: EEffect.getSpice, number: 4}]
      }]
    }],
  revealEffect: [
  {
    key: EEffect.cardBuy,
    number: 2
  }],
  img: {
    name: 'c29.jpg'
  }
}

export const c30:TCardPart = {
  name: '杰西卡夫人',
  icons: [LocationIcon.circle, LocationIcon.pentagon, LocationIcon.triangle, LocationIcon.sister],
  camp: [ECardCamp.sister],
  price: 7,
  buyEffect: [{
    key: EEffect.inf
  }],
  playEffect: [
    {
      key: EEffect.drawCard,
      number: 2,
    }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
      number: 3
    },
    {
      key: EEffect.dao,
    }
  ],
  img: {
    name: 'c30.jpg'
  }
}

export const c31:TCardPart = {
  name: '背叛',
  icons: [LocationIcon.empire, LocationIcon.union, LocationIcon.fremen, LocationIcon.sister],
  price: 6,
  playEffect: [
    {
      key: EEffect.infMoreOne,
    },
    {
      key: EEffect.trashCardSelf
    }
  ],
  revealEffect: [
    {
      key: EEffect.getTroopsAndDeployThem,
      number: 2
    }],
    trashEffect: [{
      key: EEffect.getTroopsAndDeployThem,
      number: 2
    }],
    dropEffect: [
    {
      key: EEffect.getTroopsAndDeployThem,
      number: 2
    }],
  img: {
    name: 'c31.jpg'
  }
}

export const c32:TCardPart = {
  name: '全面进攻',
  icons: [LocationIcon.empire, LocationIcon.circle],
  camp: [ECardCamp.empire],
  price: 8,
  playEffect: [
    {
      key: EEffect.getTroops,
      number: 2,
    }],
  revealEffect: [
    {
      key: EEffect.cardBuy,
      number: 2
    },
    {
      key: EEffect.jian3,
    },
  ],
  buyEffect: [{
    key: EEffect.getJian
  }],
  img: {
    name: 'c32.jpg'
  }
}


export const c33:TCardPart = {
  name: '沙虫骑士',
  icons: [LocationIcon.triangle, LocationIcon.circle],
  camp: [ECardCamp.fremen],
  price: 6,
  playEffect: [
    {
      key: EEffect.getSpice,
      number: 2,
    }],
  revealEffect: [
    {
      key: EEffect.constraint,
      con: [ {key: EConstraint.fremen, number: 2} ],
      conBonus: [ {key: EEffect.dao, number: 4} ]
    },
    {
      key: EEffect.constraint,
      con: [ {key: EConstraint.fremenAlliance} ],
      conBonus: [ {key: EEffect.dao, number: 2} ]
    },
  ],
  img: {
    name: 'c33.jpg'
  }
}

export const c34:TCardPart = {
  name: '萨多卡军团',
  icons: [LocationIcon.pentagon, LocationIcon.empire],
  camp: [ECardCamp.empire],
  price: 5,
  playEffect: [
    {
      key: EEffect.getTroops,
      number: 2,
    }],
  revealEffect: [
    {
      key: EEffect.cardBuy
    },
    {
      key: EEffect.deployTroop,
      maxNumber: 3,
    },
  ],
  img: {
    name: 'c34.jpg'
  }
}

export const c35:TCardPart = {
  name: '大权在握',
  icons: [LocationIcon.pentagon, LocationIcon.empire],
  camp: [ECardCamp.empire],
  price: 4,
  playEffect: [
    {
      key: EEffect.constraint,
      con: [{key:EConstraint.payMoney, number:2}],
      conBonus: [{ key:EEffect.or,
        options: [{key: EEffect.infFremen},{key: EEffect.infSister}, {key: EEffect.infUnion} ]
      }]
    }],
  revealEffect: [
    {
      key: EEffect.constraint,
      con: [{key:EConstraint.empireAlliance}],
      conBonus: [{ 
        key:EEffect.cardBuy,
        number: 4
      }]
    }
  ],
  img: {
    name: 'c35.jpg'
  }
}

export const c36:TCardPart = {
  name: '香料猎人',
  icons: [LocationIcon.fremen, LocationIcon.triangle],
  camp: [ECardCamp.fremen],
  price: 2,
  revealEffect: [
    {
      key: EEffect.constraint,
      con: [{key:EConstraint.fremenBound}],
      conBonus: [{ 
        key:EEffect.getSpice,
      }]
    },
    { 
      key:EEffect.cardBuy,
    },
    { 
      key:EEffect.dao,
    }
  ],
  img: {
    name: 'c36.jpg'
  }
}

export const c37:TCardPart = {
  name: '帝国间谍',
  icons: [LocationIcon.empire],
  camp: [ECardCamp.empire],
  price: 2,
  playEffect: [{
    key: EEffect.constraint,
    con: [{ key: EConstraint.trashSelf }],
    conBonus: [{ key: EEffect.drawYin }]
  }],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    },
    { 
      key:EEffect.dao,
    }
  ],
  img: {
    name: 'c37.jpg'
  }
}

export const c38:TCardPart = {
  name: '邓肯-忠诚之刃',
  icons: [LocationIcon.fremen, LocationIcon.circle],
  price: 5,
  playEffect: [{
    key: EEffect.getTroops,
  }],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    },
    { 
      key:EEffect.dao,
      number: 2,
    },
    {
      key: EEffect.constraint,
      con: [{ key: EConstraint.trashSelf }],
      conBonus: [{
        key: EEffect.or,
        options: [{ 
            key: EEffect.deployTroop,
            maxNumber: 24
          },
          { 
            key: EEffect.retreat,
            maxNumber: 24
          }
        ]
      }]
    }
  ],
  img: {
    name: 'c38.jpg'
  }
}

export const c39:TCardPart = {
  name: '刺杀任务',
  price: 1,
  revealEffect: [
    { 
      key:EEffect.getMoney,
    },
    { 
      key:EEffect.dao,
    },
  ],
  trashEffect: [{
    key: EEffect.getMoney,
    number: 4
  }],
  img: {
    name: 'c39.jpg'
  }
}

export const c40:TCardPart = {
  name: '萨多卡部队',
  price: 1,
  camp: [ECardCamp.empire],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    },
    { 
      key:EEffect.dao,
      number: 2,
    },
  ],
  img: {
    name: 'c40.jpg'
  }
}



// const c1: TCardPart = {
//   name: '进进出出',
//   price: 3,
//   icons: [LocationIcon.triangle, LocationIcon.pentagon],
//   playEffect: [{
//       key: EEffect.constraint,
//       con: [{ key: EConstraint.paySpice, number: 2 }],
//       conBonus: [{
//         key: EEffect.constraint,
//         con: [{ key: EConstraint.loseInf }],
//         conBonus: [{ key: EEffect.inf2 }]
//       }]
//     }],
//   revealEffect: [{ key: EEffect.cardBuy, number: 2 }],
//   img: {
//     name: 'c85.jpg'
//   }
// }
// add(c1)

// const c2: TCardPart = {
//   name: '金牙匕',
//   camp: [ECardCamp.fremen],
//   icons: [LocationIcon.triangle, LocationIcon.fremen],
//   playEffect: [{
//       key: EEffect.getMoney,
//     }],
//   revealEffect: [{
//       key: EEffect.constraint,
//       con: [{ key: EConstraint.fremenBound}],
//       conBonus: [{ key: EEffect.infFremen }]
//     }, { key: EEffect.dao }],
//     img: {
//       name: 'c18.jpg'
//     }
// }
// add(c2)

// const c3: TCardPart = {
//   name: '6沙虫',
//   camp: [ECardCamp.fremen],
//   icons: [LocationIcon.triangle, LocationIcon.circle],
//   playEffect: [{
//       key: EEffect.getSpice, number: 2
//     },],
//   revealEffect: [{
//       key: EEffect.constraint,
//       con: [{ key: EConstraint.fremen, number: 2}],
//       conBonus: [{ key: EEffect.dao, number: 4 }]
//     }, {
//       key: EEffect.constraint,
//       con: [{ key: EConstraint.fremenAlliance}],
//       conBonus: [{ key: EEffect.dao, number: 2 }]
//     },],
//     img: {
//       name: 'c33.jpg'
//     }
// }
// add(c3, c3)

// const c4: TCardPart = {
//   name: '弗里曼营地',
//   camp: [ECardCamp.fremen],
//   icons: [LocationIcon.triangle],
//   playEffect: [{
//       key: EEffect.constraint,
//       con: [{ key: EConstraint.paySpice, number: 2}],
//       conBonus: [{ key: EEffect.getTroops, number: 3 }]
//     }],
//   revealEffect: [{key: EEffect.dao,}, 
//     {key: EEffect.cardBuy, number: 2},],
//     img: {
//       name: 'c11.jpg'
//     }
// }
// add(c4,c4)

// const c5: TCardPart = {
//   name: '列特凯恩斯',
//   camp: [ECardCamp.fremen],
//   icons: [LocationIcon.circle, LocationIcon.fremen],
//   buyEffect: [{key: EEffect.infEmpire}],
//   revealEffect: [{key: EEffect.liete,}, 
//     { key: EEffect.cardBuy, number: 2},],
//     img: {
//       name: 'c84.jpg'
//     }
// }
// add(c5)

// const c6: TCardPart = {
//   name: '阴影之中',
//   camp: [ECardCamp.sister],
//   icons: [LocationIcon.circle, LocationIcon.triangle],
//   playEffect: [{
//       key: EEffect.constraint,
//       con: [{ key: EConstraint.sister, number: 2 }],
//       conBonus: [{
//         key: EEffect.constraint,
//         con: [{ key: EConstraint.dropCard }],
//         conBonus: [
//           {
//             key: EEffect.or,
//             options: [{ key: EEffect.infFremen }, { key: EEffect.infEmpire }, { key: EEffect.infUnion }]
//           }
//         ]
//       }]
//     }],
//   revealEffect: [{key: EEffect.infSister,}],
//   dropEffect: [{key: EEffect.infSister,}],
//   img: {
//     name: 'c62.jpg'
//   }
// }
// add(c6, c6)

// const c7: TCardPart = {
//   name: '权利之网',
//   camp: [ECardCamp.sister],
//   qianRu: [LocationIcon.sister],
//   icons: [LocationIcon.sister],
//   playEffect: [
//       {
//         key: EEffect.constraint,
//         con: [{ key: EConstraint.fremen, number: 2 }],
//         conBonus: [{ key: EEffect.getWater }]
//       },
//       {
//         key: EEffect.constraint,
//         con: [{ key: EConstraint.union, number: 2 }],
//         conBonus: [{ key: EEffect.drawCard }]
//       },
//       {
//         key: EEffect.constraint,
//         con: [{ key: EConstraint.empire, number: 2 }],
//         conBonus: [{ key: EEffect.getMoney, number: 2 }]
//       },
//     ],
//   revealEffect: [{key: EEffect.cardBuy,}, {key: EEffect.inf,}],
//   img: {
//     name: 'c57.jpg'
//   }
// }
// add(c7)

// const c8: TCardPart = {
//   name: '其他记忆',
//   camp: [ECardCamp.sister],
//   icons: [LocationIcon.circle, LocationIcon.triangle],
//   playEffect: [
//       {
//         key: EEffect.or,
//         options: [{ key: EEffect.drawCard }, 
//           { key: EEffect.findSister }] 
//       },
//     ],
//   revealEffect: [{key: EEffect.cardBuy, number: 2}],
//   img: {
//     name: 'c94.jpg'
//   }
// }
// add(c8)

// const c9: TCardPart = {
//   name: '姐妹会新人',
//   camp: [ECardCamp.sister],
//   icons: [LocationIcon.circle, LocationIcon.triangle, LocationIcon.pentagon],
//   playEffect: [
//       { key: EEffect.drawCard }
//     ],
//   revealEffect: [{key: EEffect.cardBuy }],
//   img: {
//     name: 'c93.jpg'
//   }
// }
// add(c9)

// const c10: TCardPart = {
//   name: '姐妹会大哥',
//   camp: [ECardCamp.sister],
//   qianRu: [LocationIcon.pentagon],
//   icons: [LocationIcon.pentagon],
//   playEffect: [
//       { key: EEffect.constraint,
//         con: [{ key: EConstraint.sisterInPlay }],
//         conBonus: [{ key: EEffect.paoC, number: 2 }]
//       }
//     ],
//   revealEffect: [{key: EEffect.cardBuy }, {key: EEffect.drawYin }],
//   img: {
//     name: 'c74.jpg'
//   }
// }
// add(c10)

// const c11: TCardPart = {
//   name: '普翼机 抽牌',
//   icons: [LocationIcon.triangle],
//   playEffect: [
//       { key: EEffect.constraint,
//         con: [{ key: EConstraint.union, number: 2 }],
//         conBonus: [{ key: EEffect.drawCard, number: 2 }]
//       }
//     ],
//   revealEffect: [{key: EEffect.cardBuy }, {key: EEffect.getSpice }],
//   img: {
//     name: '.jpg'
//   }
// }
// add(c11, c11)

// const c12: TCardPart = {
//   name: '普翼机 上兵',
//   icons: [LocationIcon.triangle, LocationIcon.circle],
//   playEffect: [
//       { key: EEffect.killTroopCamp}
//     ],
//   revealEffect: [{key: EEffect.dao, number: 3 }, {key: EEffect.deployTroop }],
//   img: {
//     name: 'c12.jpg'
//   }
// }
// add(c12, c12)

// const c13: TCardPart = {
//   name: 'power play',
//   icons: [LocationIcon.fremen, LocationIcon.sister, LocationIcon.union, LocationIcon.empire],
//   playEffect: [
//       { key: EEffect.powerPlay}
//     ],
//     img: {
//       name: 'c87.jpg'
//     }
// }
// add(c13, c13)