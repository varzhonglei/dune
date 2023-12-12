import { EConstraint, EEffect } from "../typing/effect"
import { LocationIcon } from "../locations/locations"
import { ECardCamp, TCardPart } from '../typing/card'




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
    mayAbandon: true,
    con: [{ key: EConstraint.payTLL, number: 2 }],
    conBonus: [{ key: EEffect.goldBug, number: 2 }]
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
    number: 2,
  }, {
    key: EEffect.constraint,
    mayAbandon: true,
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
    mayAbandon: true,
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
    mayAbandon: true,
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
    mayAbandon: true,
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
    mayAbandon: true,
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
      mayAbandon: true,
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
    mayAbandon: true,
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
        mayAbandon: true,
        con: [{key: EConstraint.paySpice, number:2}],
        conBonus: [{key: EEffect.getMoney, number: 5}]
      }, {key: EEffect.constraint,
        mayAbandon: true,
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
      key: EEffect.jian3dao,
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
      mayAbandon: true,
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
    mayAbandon: true,
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
      mayAbandon: true,
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

export const c41:TCardPart = {
  name: '印章戒指',
  icons: [LocationIcon.pentagon, LocationIcon.circle, LocationIcon.triangle],
  playEffect: [{
    key: EEffect.roleSkill
  }],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    },
  ],
  img: {
    name: 'c41.jpg'
  }
}

export const c42:TCardPart = {
  name: '土地测量',
  icons: [LocationIcon.circle],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    },
  ],
  img: {
    name: 'c42.jpg'
  }
}

export const c43:TCardPart = {
  name: '沙漠突袭',
  price: 3,
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.triangle],
  playEffect: [
    {
      key: EEffect.shaMoTuXi
    }
  ],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    },
    {
      key: EEffect.dao
    }
  ],
  img: {
    name: 'c43.jpg'
  }
}

export const c44:TCardPart = {
  name: '协议撤退',
  price: 4,
  buyEffect: [{
    key: EEffect.getTroops
  }],
  icons: [LocationIcon.triangle],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
      number: 2,
    },
    {
      key: EEffect.constraint,
      mayAbandon: true,
      con: [{ key:EConstraint.retreatTroops, number: 3 }],
      conBonus: [{ key: EEffect.inf }]
    }
  ],
  img: {
    name: 'c44.jpg'
  }
}

export const c45:TCardPart = {
  name: '沙道特•普菜斯',
  price: 2,
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.triangle, LocationIcon.fremen],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    },
    {
      key: EEffect.or,
      options: [{ key:EEffect.deployTroop }, { key:EEffect.retreat }],
    }, 
    {
      key:EEffect.dao,
    }    
  ],
  img: {
    name: 'c45.jpg'
  }
}

export const c46:TCardPart = {
  name: '计划中的伴侣',
  price: 3,
  camp: [ECardCamp.sister],
  icons: [LocationIcon.sister],
  playEffect: [{ key: EEffect.drawCard }],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    }, 
  ],
  graft: true,
  img: {
    name: 'c46.jpg'
  }
}

export const c47:TCardPart = {
  name: '腐败的走私者',
  price: 3,
  camp: [ECardCamp.union, ECardCamp.fremen],
  icons: [LocationIcon.union, LocationIcon.triangle],
  playEffect: [{ key: EEffect.constraint,
    con: [{ key: EConstraint.ifGrafted }],
    conBonus: [{ key: EEffect.getSpice, number: 2 }]
  }],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    }, 
    { 
      key:EEffect.dao,
    }, 
  ],
  img: {
    name: 'c47.jpg'
  }
}

export const c48:TCardPart = {
  name: '器官商人',
  price: 3,
  icons: [LocationIcon.circle, LocationIcon.triangle],
  playEffect: [
    { key: EEffect.constraint,
      mayAbandon: true,
      con: [{ key: EConstraint.payTLL }],
      conBonus: [{ key: EEffect.getMoney, number: 4 }]
  }],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    }, 
    { 
      key:EEffect.getMoney,
    }, 
  ],
  img: {
    name: 'c48.jpg'
  }
}

export const c49:TCardPart = {
  name: '秘密会议',
  price: 4,
  camp: [ECardCamp.sister],
  playEffect: [
    { key: EEffect.infSister,},
    { key: EEffect.drawYin,}
  ],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
      number: 2,
    }, 
  ],
  img: {
    name: 'c49.jpg'
  }
}

export const c50:TCardPart = {
  name: '贝尼特菜拉研究员',
  price: 4,
  playEffect: [
    { key: EEffect.research},
  ],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
      number: 1,
    }, 
    {
      key: EEffect.constraint,
      con: [{ key: EConstraint.gene1 }],
      conBonus: [{ key: EEffect.cardBuy }],
    },
    {
      key: EEffect.constraint,
      con: [{ key: EConstraint.gene2 }],
      conBonus: [{ key: EEffect.cardBuy }],
    }
  ],
  img: {
    name: 'c50.jpg'
  }
}

export const c51:TCardPart = {
  name: '厄拉科斯联络官',
  price: 2,
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.pentagon, LocationIcon.circle],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
      number: 2,
    }, 
  ],
  img: {
    name: 'c51.jpg'
  }
}

export const c52:TCardPart = {
  name: '沙丘,沙漠行星',
  icons: [LocationIcon.triangle],
  revealEffect: [
    { 
      key:EEffect.cardBuy,
    }, 
  ],
  img: {
    name: 'c52.jpg'
  }
}

export const c53:TCardPart = {
  name: '伊克斯人工程师',
  price: 5,
  icons: [LocationIcon.triangle],
  playEffect: [
    { key: EEffect.buyTech }
  ],
  revealEffect: [
    { 
      key:EEffect.constraint,
      con: [{ key: EConstraint.techNumber, number: 3 }],
      conBonus: [{
        key:EEffect.constraint,
        mayAbandon: true,
        con: [{ key: EConstraint.trashSelf }],
        conBonus: [{ key: EEffect.getVP }]
      }]
    }, 
  ],
  img: {
    name: 'c53.jpg'
  }
}

export const c54:TCardPart = {
  name: '哥尼•哈菜克',
  price: 6,
  icons: [LocationIcon.circle],
  playEffect: [
    { key: EEffect.getTroops, number: 2 },
    { key: EEffect.drawCard },
  ],
  revealEffect: [
    { 
      key:EEffect.constraint,
      mayAbandon: true,
      con: [{ key: EConstraint.payMoney, number: 3 }],
      conBonus: [{ 
        key: EEffect.getTroops, number: 2,
      }, 
      { 
        mayAbandon: true,
        key: EEffect.deployTroop, number: 2,
      }
    ]
    }, 
  ],
  img: {
    name: 'c54.jpg'
  }
}

export const c55:TCardPart = {
  name: '香料永流传',
  price: 9,
  buyEffect: [{ key: EEffect.getVP }],
  revealEffect: [
    { 
      key: EEffect.getSpice,
    }, 
  ],
  img: {
    name: 'c55.jpg'
  }
}

export const c56:TCardPart = {
  name: '亮剑 ！',
  price: 3,
  camp: [ECardCamp.fremen, ECardCamp.empire],
  constraintIcons: [{
    key: LocationIcon.pentagon,
    con: [{ key: EConstraint.mostTroops }]
  }, {
    key: LocationIcon.triangle,
    con: [{ key: EConstraint.mostTroops }]
  }],
  revealEffect: [
    { 
      key: EEffect.cardBuy,
    }, 
    { 
      key: EEffect.dao,
      number: 2
    }, 
  ],
  img: {
    name: 'c56.jpg'
  }
}

export const c57: TCardPart = {
  name: '权力之网',
  price: 4,
  camp: [ECardCamp.sister],
  qianRu: [LocationIcon.sister],
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

export const c58: TCardPart = {
  name: '上级寻访',
  price: 1,
  camp: [ECardCamp.union],
  icons: [LocationIcon.pentagon, LocationIcon.triangle],
  playEffect: [
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.union, number: 2 }],
        conBonus: [{ key: EEffect.or,
          options: [{ key: EEffect.drawCard }, { key: EEffect.combatIcon}]
        }]
      },
    ],
  revealEffect: [{key: EEffect.cardBuy,}, {key: EEffect.getMoney,}],
  img: {
    name: 'c58.jpg'
  }
}

export const c59: TCardPart = {
  name: '解剖工具包',
  price: 2,
  icons: [LocationIcon.pentagon, LocationIcon.circle],
  graft: true,
  playEffect: [
      {
        key: EEffect.constraint,
        con: [{ key: EConstraint.ifGrafted}],
        conBonus: [{ key: EEffect.TLLBuy }]
      },
    ],
  revealEffect: [{key: EEffect.cardBuy }, 
    { key: EEffect.constraint,
      con: [{key:EConstraint.gene1}],
      conBonus: [{key: EEffect.getGoldBug}]
    }],
  img: {
    name: 'c59.jpg'
  }
}

export const c60: TCardPart = {
  name: '匕首',
  icons: [LocationIcon.pentagon],
  revealEffect: [{key: EEffect.dao }, ],
  img: {
    name: 'c60.jpg'
  }
}

export const c61: TCardPart = {
  name: '外交',
  icons: [LocationIcon.union, LocationIcon.empire, LocationIcon.sister, LocationIcon.fremen],
  revealEffect: [{key: EEffect.cardBuy }, ],
  img: {
    name: 'c61.jpg'
  }
}

export const c62: TCardPart = {
  name: '阴影之中',
  price: 2,
  camp: [ECardCamp.sister],
  icons: [LocationIcon.circle, LocationIcon.triangle],
  playEffect: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.sister, number: 2 }],
      conBonus: [{
        key: EEffect.constraint,
        mayAbandon: true,
        con: [{ key: EConstraint.dropCard }],
        conBonus: [
          {
            key: EEffect.or,
            options: [{ key: EEffect.infFremen }, { key: EEffect.infEmpire }, { key: EEffect.infUnion }]
          }
        ]
      }]
    }],
  revealEffect: [{key: EEffect.infSister,}],
  dropEffect: [{key: EEffect.infSister,}],
  trashEffect: [{key: EEffect.infSister,}],
  img: {
    name: 'c62.jpg'
  }
}


export const c63: TCardPart = {
  name: '夏胡魯沙虫',
  price: 7,
  camp: [ECardCamp.fremen],
  icons: [ LocationIcon.triangle],
  playEffect: [{
    key: EEffect.constraint,
    mayAbandon: true,
    con: [{ key: EConstraint.trashCard }],
    conBonus: [
      {
        key: EEffect.getTroops,
        number: 2,
      }
    ]
  }],
  revealEffect: [{key: EEffect.constraint,
    con: [{ key: EConstraint.fremenBound}],
    conBonus: [{key: EEffect.dao, number: 5}]
  }],
  img: {
    name: 'c63.jpg'
  }
}

export const c64: TCardPart = {
  name: '敢死队队员',
  price: 3,
  camp: [ECardCamp.fremen],
  icons: [ LocationIcon.triangle, LocationIcon.circle],
  playEffect: [{
    key: EEffect.trashCard,
  }],
  revealEffect: [{key: 
    EEffect.constraint,
    con: [{ key: EConstraint.fremenBound}],
    conBonus: [{key: EEffect.dao, number: 3}]
  }, 
    {
      key: EEffect.cardBuy,
    }],
  img: {
    name: 'c64.jpg'
  }
}

export const c65: TCardPart = {
  name: '真言师',
  price: 3,
  camp: [ECardCamp.sister, ECardCamp.empire],
  icons: [ LocationIcon.pentagon, LocationIcon.sister, LocationIcon.empire],
  playEffect: [{
    key: EEffect.constraint,
    con: [{ key: EConstraint.dropCard }],
    conBonus: [{ key: EEffect.drawCard }]
  }],
  revealEffect: [{
    key: EEffect.dao, 
  },
    {
      key: EEffect.cardBuy,
    }],
  img: {
    name: 'c65.jpg'
  }
}

export const c66: TCardPart = {
  name: '帝国霸撒统领',
  price: 4,
  camp: [ECardCamp.empire],
  icons: [LocationIcon.circle],
  playEffect: [{
    key: EEffect.or,
    options: [{ key: EEffect.getTroops, }, { key: EEffect.trashCard }]
  }],
  revealEffect: [
    {
      key: EEffect.dao, 
      number: 2,
    },
    {
      key: EEffect.cardBuy,
    },
    {
      key: EEffect.huoPaoCard
    }
  ],
  img: {
    name: 'c66.jpg'
  }
}

export const c67: TCardPart = {
  name: '水贩子',
  price: 1,
  revealEffect: [{key: EEffect.getWater,}],
  dropEffect: [{key: EEffect.getWater,}],
  trashEffect: [{key: EEffect.getWater,}],
  buyEffect: [{key: EEffect.getWater,}],
  img: {
    name: 'c67.jpg'
  }
}

export const c68: TCardPart = {
  name: '萨多卡军需官',
  price: 2,
  camp: [ECardCamp.empire],
  icons: [LocationIcon.pentagon, LocationIcon.circle],
  playEffect: [{
    key: EEffect.constraint,
    con: [{key: EConstraint.ifGrafted}],
    conBonus: [{ key: EEffect.getTroops }, { key: EEffect.drawCard }]
  }],
  revealEffect: [{key: EEffect.cardBuy}, { key: EEffect.dao, number: 2 }],
  img: {
    name: 'c68.jpg'
  }
}

export const c69: TCardPart = {
  name: '星际阴谋',
  price: 4,
  icons: [LocationIcon.circle],
  graft: true,
  playEffect: [{
    key: EEffect.constraint,
    con: [{key: EConstraint.ifGrafted, target: [ECardCamp.empire, ECardCamp.union]}],
    conBonus: [{ key: EEffect.inf }]
  }, { key: EEffect.getSpice}],
  revealEffect: [{key: EEffect.cardBuy}, { key: EEffect.dao, number: 2 }],
  img: {
    name: 'c69.jpg'
  }
}

export const c70: TCardPart = {
  name: '寻求盟友',
  icons: [LocationIcon.empire, LocationIcon.union, LocationIcon.sister, LocationIcon.fremen],
  playEffect: [{
    key: EEffect.trashCardSelf,
}],
  img: {
    name: 'c70.jpg'
  }
}

export const c71: TCardPart = {
  name: '姐妹会护使团',
  price: 1,
  camp: [ECardCamp.sister],
  icons: [LocationIcon.circle],
  playEffect: [{
    key: EEffect.constraint,
    con: [{ key: EConstraint.sisterInPlay }],
    conBonus: [{ key: EEffect.inf }]
  }],
  revealEffect: [{ key:EEffect.cardBuy }],
  img: {
    name: 'c71.jpg'
  }
}

export const c72: TCardPart = {
  name: '穴地圣母',
  price: 4,
  camp: [ECardCamp.sister, ECardCamp.fremen],
  icons: [LocationIcon.sister, LocationIcon.fremen],
  playEffect: [{
    key: EEffect.trashCard
  }],
  revealEffect: [{ key:EEffect.constraint,
    con: [{key: EConstraint.fremenBound}],
    conBonus: [{ key: EEffect.cardBuy, number: 3 }, { key: EEffect.getSpice }]
  }],
  img: {
    name: 'c72.jpg'
  }
}

export const c73: TCardPart = {
  name: '斯第尔格',
  price: 5,
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.triangle, LocationIcon.fremen, LocationIcon.circle],
  playEffect: [{
    key: EEffect.getWater
  }],
  revealEffect: [{ key:EEffect.cardBuy, number: 2}, {key: EEffect.dao, number: 3}],
  img: {
    name: 'c73.jpg'
  }
}

export const c74: TCardPart = {
  name: '被安插的特使',
  price: 5,
  camp: [ECardCamp.sister],
  qianRu: [LocationIcon.pentagon],
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

export const c75: TCardPart = {
  name: '戈姆刺测试',
  price: 3,
  camp: [ECardCamp.sister],
  icons: [LocationIcon.pentagon, LocationIcon.circle, LocationIcon.sister],
  playEffect: [
      { key: EEffect.otherKillDTroopsOrDiscardCard, }
    ],
  revealEffect: [{key: EEffect.cardBuy, number: 2 }],
  img: {
    name: 'c75.jpg'
  }
}

export const c76: TCardPart = {
  name: '折叠空间',
  icons: [LocationIcon.pentagon, LocationIcon.circle, LocationIcon.triangle, LocationIcon.empire, LocationIcon.union, LocationIcon.sister, LocationIcon.fremen],
  playEffect: [
    { key: EEffect.drawCard },
    { key: EEffect.trashCardSelf }
  ],
  img: {
    name: 'c76.jpg'
  }
}

export const c77: TCardPart = {
  name: '宇联商会董事',
  price: 8,
  revealEffect: [{key: EEffect.getMoney, number: 3 }],
  buyEffect: [{key: EEffect.infEmpire }, { key:EEffect.infSister }, { key: EEffect.infUnion }, { key:EEffect.infFremen }],
  img: {
    name: 'c77.jpg'
  }
}

export const c78: TCardPart = {
  name: '基因操控',
  price: 3,
  camp: [ECardCamp.sister],
  icons: [LocationIcon.circle, LocationIcon.triangle],
  revealEffect: [{key: EEffect.cardBuy, number: 2 }],
  playEffect: [{
    key: EEffect.trashCard }, 
    { 
      key:EEffect.constraint,
      con: [{ key: EConstraint.sisterInPlay}],
      conBonus: [{ key: EEffect.getSpice, number: 2 }] 
    }],
  img: {
    name: 'c78.jpg'
  }
}

export const c79: TCardPart = {
  name: '厄拉科斯的杰西卡',
  price: 3,
  camp: [ECardCamp.sister],
  icons: [LocationIcon.triangle],
  revealEffect: [{key: EEffect.cardBuy }, { key: EEffect.dao, number: 2 }],
  playEffect: [
    { 
      key:EEffect.constraint,
      con: [{ key: EConstraint.sisterInPlay}],
      conBonus: [{ key: EEffect.drawCard, number: 2 }] 
    }],
  img: {
    name: 'c79.jpg'
  }
}

export const c80: TCardPart = {
  name: '探子',
  price: 1,
  icons: [LocationIcon.triangle, LocationIcon.circle],
  revealEffect: [{key: EEffect.cardBuy }, { key: EEffect.dao }, {
    key: EEffect.retreat, maxNumber: 2,
  }],
  img: {
    name: 'c80.jpg'
  }
}

export const c81: TCardPart = {
  name: '公会协议',
  price: 6,
  camp: [ECardCamp.union],
  icons: [LocationIcon.union],
  qianRu: [LocationIcon.union],
  playEffect: [{ key: EEffect.allInSpiceLess2 }],
  revealEffect: [
    { key: EEffect.getWater }, 
    { key: EEffect.constraint,
      con: [{ key: EConstraint.unionAlliance }],
      conBonus: [{ key: EEffect.getSpice, number: 3 }]
    }, 
  ],
  trashEffect: [
    { key: EEffect.getWater }, 
    { key: EEffect.constraint,
      con: [{ key: EConstraint.unionAlliance }],
      conBonus: [{ key: EEffect.getSpice, number: 3 }]
    }, 
  ],
  dropEffect: [
    { key: EEffect.getWater }, 
    { key: EEffect.constraint,
      con: [{ key: EConstraint.unionAlliance }],
      conBonus: [{ key: EEffect.getSpice, number: 3 }]
    }, 
  ],
  img: {
    name: 'c81.jpg'
  }
}


export const c82: TCardPart = {
  name: '帝国突击部队',
  price: 3,
  camp: [ECardCamp.empire],
  revealEffect: [
    { key: EEffect.cardBuy }, 
    { key: EEffect.dao, number: 2 }, 
    { key: EEffect.constraint,
      con: [{ key: EConstraint.agentOnEmpire }],
      conBonus: [{ key: EEffect.dao, number: 3 }]
    }, 
  ],
  img: {
    name: 'c82.jpg'
  }
}

export const c83: TCardPart = {
  name: '奢靡',
  price: 6,
  camp: [ECardCamp.empire],
  playEffect: [{ key: EEffect.getMoney, number: 3 }],
  revealEffect: [
    { key: EEffect.cardBuy }, 
    { key: EEffect.constraint,
      mayAbandon: true,
      con: [{ key: EConstraint.payMoney, number: 6 }],
      conBonus: [{ key: EEffect.getVP }]
    }, 
  ],
  img: {
    name: 'c83.jpg'
  }
}

export const c84: TCardPart = {
  name: '列特凯恩斯',
  camp: [ECardCamp.fremen, ECardCamp.empire],
  price: 5,
  icons: [LocationIcon.circle, LocationIcon.fremen],
  buyEffect: [{key: EEffect.infEmpire}],
  revealEffect: [{key: EEffect.liete,}],
  img: {
    name: 'c84.jpg'
  }
}


export const c85: TCardPart = {
  name: '两面三刀',
  price: 3,
  icons: [LocationIcon.triangle, LocationIcon.pentagon],
  playEffect: [{
    key: EEffect.constraint,
    mayAbandon: true,
    con: [{ key: EConstraint.paySpice, number: 2 }, { key: EConstraint.loseInf }],
    conBonus: [{ key: EEffect.inf2 }]
  }],
  revealEffect: [{ key: EEffect.cardBuy, number: 2 }],
  img: {
    name: 'c85.jpg'
  }
}

export const c86: TCardPart = {
  name: '资金划拨',
  price: 5,
  camp: [ECardCamp.union],
  icons: [LocationIcon.triangle, LocationIcon.pentagon],
  playEffect: [{
    key: EEffect.constraint,
    mayAbandon: true,
    con: [{ key: EConstraint.empire, number: 2 }],
    conBonus: [{ key: EEffect.buyTechMayUseSola }]
  }],
  revealEffect: [{ key: EEffect.cardBuy, number: 2 }],
  buyEffect: [{ key: EEffect.paoC }],
  img: {
    name: 'c86.jpg'
  }
}


export const c87: TCardPart = {
  name: '压制力',
  price: 5,
  icons: [LocationIcon.fremen, LocationIcon.sister, LocationIcon.union, LocationIcon.empire],
  playEffect: [
      { key: EEffect.powerPlay}
    ],
  img: {
    name: 'c87.jpg'
  }
}

export const c88: TCardPart = {
  name: '萨亚迪娜',
  price: 3,
  camp: [ECardCamp.sister, ECardCamp.fremen],
  icons: [LocationIcon.fremen, LocationIcon.sister],
  playEffect: [
    { key: EEffect.constraint,
      mayAbandon: true,
      con: [{ key: EConstraint.payWater, number: 3 }],
      conBonus: [{ key: EEffect.getVP }],
    }
  ],
  revealEffect: [
    {
      key: EEffect.constraint,
      con: [{ key: EConstraint.fremenBound }],
      conBonus: [{key: EEffect.cardBuy, number: 3}]
    }
  ],
  img: {
    name: 'c88.jpg'
  }
}

export const c89: TCardPart = {
  name: '圣母莫希阿姆',
  price: 6,
  camp: [ECardCamp.sister],
  icons: [LocationIcon.empire, LocationIcon.sister],
  playEffect: [
    { key: EEffect.constraint,
      con: [{ key: EConstraint.sisterInPlay }],
      conBonus: [{ key: EEffect.opponentsDiscardCard, number: 2 }],
    }
  ],
  revealEffect: [
    {
      key: EEffect.cardBuy,
      number: 2,
    },
    {
      key: EEffect.getSpice,
      number: 2,
    }
  ],
  img: {
    name: 'c89.jpg'
  }
}

export const c90: TCardPart = {
  name: '公会大使',
  price: 4,
  camp: [ECardCamp.union],
  icons: [LocationIcon.pentagon],
  playEffect: [
    { key: EEffect.or,
      options: [{ key: EEffect.infUnion }, { key: EEffect.getSpice, number: 2 }]
    }
  ],
  revealEffect: [
    {
      key: EEffect.constraint,
      con: [{ key: EConstraint.unionAlliance }],
      conBonus: [{ 
        key: EEffect.constraint,
        mayAbandon: true,
        con: [{ key: EConstraint.paySpice, number: 3 }],
        conBonus: [{ key: EEffect.getVP }]
      }]
    }
  ],
  img: {
    name: 'c90.jpg'
  }
}

export const c91: TCardPart = {
  name: '邓肯•艾达荷',
  price: 4,
  icons: [LocationIcon.circle],
  playEffect: [
    { 
      key: EEffect.constraint,
      mayAbandon: true,
      con: [{key: EConstraint.payWater}],
      conBonus: [{key: EEffect.getTroops}, {key:EEffect.drawCard}]
    }
  ],
  revealEffect: [
    {
      key: EEffect.getWater,
    },
    {
      key: EEffect.dao,
    }
  ],
  img: {
    name: 'c91.jpg'
  }
}

// export const c92: TCardPart = {
//   name: '敢死队队员',
//   price: 3,
//   camp: [ECardCamp.fremen],
//   icons: [LocationIcon.circle, LocationIcon.triangle],
//   playEffect: [
//     { 
//       key: EEffect.trashCard
//     }
//   ],
//   revealEffect: [
//     {
//       key: EEffect.cardBuy,
//     },
//     {
//       key: EEffect.constraint,
//       con: [ {key: EConstraint.fremenBound}],
//       conBonus: [{ key: EEffect.dao }]
//     }
//   ],
//   img: {
//     name: 'c92.jpg'
//   }
// }

export const c93: TCardPart = {
  name: '贝尼•杰瑟里特新人',
  price: 3,
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

export const c94: TCardPart = {
  name: '其他的记忆',
  price: 4,
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

export const c95: TCardPart = {
  name: '契尼',
  price: 5,
  camp: [ECardCamp.fremen],
  icons: [LocationIcon.circle, LocationIcon.triangle, LocationIcon.fremen],
  buyEffect: [{ key:EEffect.getWater }],
  revealEffect: [{key: EEffect.cardBuy, number: 2}, {
    key: EEffect.retreat,
    maxNumber: 24,
  }],
  img: {
    name: 'c95.jpg'
  }
}

export const c96: TCardPart = {
  name: '着陆权',
  price: 4,
  camp: [ECardCamp.union],
  icons: [LocationIcon.circle],
  playEffect: [{
    key: EEffect.paoC
  }],
  revealEffect: [{key: EEffect.cardBuy, number: 2}],
  img: {
    name: 'c96.jpg'
  }
}

export const c97: TCardPart = {
  name: '朝中密事',
  price: 2,
  camp: [ECardCamp.empire],
  icons: [LocationIcon.empire],
  qianRu: [LocationIcon.empire],
  playEffect: [{
    key: EEffect.secretChangeYin,
  }],
  revealEffect: [{key: EEffect.cardBuy}, { key: EEffect.dao }],
  img: {
    name: 'c97.jpg'
  }
}

export const c98: TCardPart = {
  name: '公会行政长官',
  price: 2,
  camp: [ECardCamp.union],
  icons: [LocationIcon.triangle, LocationIcon.union],
  playEffect: [{
    key: EEffect.trashCard,
  }],
  revealEffect: [{key: EEffect.cardBuy}],
  img: {
    name: 'c98.jpg'
  }
}


export const c99: TCardPart = {
  name: '赏金猎人',
  price: 1,
  icons: [LocationIcon.circle],
  qianRu: [LocationIcon.circle],
  playEffect: [{
    key: EEffect.constraint,
    con: [{key: EConstraint.tieTie}],
    conBonus: [ { key: EEffect.getMoney, number: 2 } ]
  }],
  revealEffect: [{key: EEffect.cardBuy}, { key:EEffect.dao }],
  img: {
    name: 'c99.jpg'
  }
}

export const c100: TCardPart = {
  name: '魁萨茨•哈德拉克',
  price: 8,
  playEffect: [{
    key: EEffect.drawCard,
  }],
  img: {
    name: 'c100.jpg'
  }
}

export const c101: TCardPart = {
  name: '走私扑翼机',
  price: 4,
  camp: [ECardCamp.union],
  playEffect: [{
    key: EEffect.constraint,
    con: [{ key: EConstraint.union, number: 2 }],
    conBonus: [ { key: EEffect.drawCard, number: 2 } ]
  }],
  revealEffect: [{
    key: EEffect.cardBuy,
  }, { key: EEffect.getSpice }],
  img: {
    name: 'c101.jpg'
  }
}

export const c102: TCardPart = {
  name: '运输飞船大队',
  price: 2,
  revealEffect: [{
    key: EEffect.paoC,
  }],
  trashEffect: [{
    key: EEffect.paoC,
  }],
  dropEffect: [{
    key: EEffect.paoC,
  }],
  img: {
    name: 'c102.jpg'
  }
}

export const c103: TCardPart = {
  name: '说服',
  revealEffect: [{
    key: EEffect.cardBuy, number: 2
  }],
  img: {
    name: 'c103.jpg'
  }
}

export const c104: TCardPart = {
  name: '音言',
  camp: [ECardCamp.sister],
  playEffect: [{ key: EEffect.yinYan }],
  revealEffect: [{
    key: EEffect.cardBuy, number: 2
  }],
  img: {
    name: 'c104.jpg'
  }
}


