import { TCard } from "../../../common/cards/cards"
import { Dashboard } from "../../../common/typing"
import { EConstraint, EEffect } from "../../../common/typing/effect"


type TNumberPayload = {
  number: number
}

type TIdPayload = {
  id: number
}

type PartialKey<T, K extends keyof T> = {
  [key in K]?: T[key]
};

type Handler<T> = (dashboard:Dashboard, payload: T ) => void

type THandlers = PartialKey<{
  [key in EConstraint | EEffect]: Handler<any>
}, EConstraint | EEffect>;



const handlers: THandlers = {
  trashCard: (dashboard, payload:TIdPayload) => {
    let trashedCard:TCard[] = []

    const ind1 = dashboard.qiCards.findIndex(c => c.id === payload.id)
    if (ind1 !== -1) trashedCard = dashboard.qiCards.splice(ind1,1)

    const ind2 = dashboard.playedCards.findIndex(c => c.id === payload.id)
    if (ind2 !== -1) trashedCard = dashboard.playedCards.splice(ind1,1)

    const ind3 = dashboard.handCards.findIndex(c => c.id === payload.id)
    if (ind3 !== -1) trashedCard = dashboard.handCards.splice(ind1,1)

    trashedCard[0] && dashboard.trashedCards.push(trashedCard[0])
  },
  getTroops: (dashboard, payload:TNumberPayload) => {
    for(let i = 0; i < payload.number; i++) {
      let bin = dashboard.troops.troopsSupply.pop()
      if (!bin) bin = dashboard.troops.troopsTLL.pop()
      bin && dashboard.troops.troopsCamp.push(bin)
    }
  },
  getSpice: (dashboard, payload:TNumberPayload) => {
    dashboard.spice = dashboard.spice + payload.number
  },
  paySpice: (dashboard, payload:TNumberPayload) => {
    dashboard.spice = Math.max(dashboard.spice - payload.number, 0)
  },
  getMoney:  (dashboard, payload:TNumberPayload) => {
    dashboard.money = dashboard.money + payload.number
  },
  payMoney: (dashboard, payload:TNumberPayload) => {
    dashboard.money = Math.max(dashboard.money - payload.number, 0)
  },

  getWater: (dashboard, payload:TNumberPayload) => {
    dashboard.water = dashboard.water + payload.number
  },
  payWater: (dashboard, payload:TNumberPayload) => {
    dashboard.water = Math.max(dashboard.water - payload.number, 0)
  },

  cardBuy: (dashboard, payload:TNumberPayload) => {
    dashboard.cardBuy = dashboard.cardBuy + payload.number
  },
  TLLBuy: (dashboard, payload:TNumberPayload) => {
    for(let i = 0; i < payload.number; i++) {
      const bin = dashboard.troops.troopsSupply.pop()
      bin && dashboard.troops.troopsCamp.push(bin)
    }
  },
  dao: (dashboard, payload:TNumberPayload) => {
    dashboard.revealDao = dashboard.revealDao + payload.number
  },
}


export const BasicHandler = (dashboard: Dashboard, type: EConstraint | EEffect, payload: any) => {
  const handler = handlers[type]
  if (handler) {
    handler(dashboard, {
      number: payload.number ?? 1
    })
  }
}

// //todo
// export const trashCardSelf = trashCard

  // 'roleSkill' = "roleSkill",
  // 'research' = 'research',
  // 'paoC' = 'paoC',
  // 'collectSpice1' = 'collectSpice1',
  // 'collectSpice2' = 'collectSpice2',
  // 'collectSpice3' = 'collectSpice3',
  // 'drawCard' = 'drawCard',
  // 'drawYin' = 'drawYin',
  // 'acquireSpacingGuid' = 'acquireSpacingGuid',
  // 'constraint' = 'constraint',
  // 'getHei' = 'getHei',
  // 'height' = 'height',
  // 'unlock' = 'unlock',
  // 'or' = 'or',
  // 'saveTechBuy' = 'saveTechBuy',
  // 'byTechLess1' = 'byTechLess1',
  // 'byTech' = 'byTech',
  // 'getJian' = 'getJian',
  // 'inf' = 'inf',
  // 'inf2' = 'inf2',
  // 'infFremen' = 'infFremen',
  // 'infSister' = 'infSister',
  // 'infUnion' = 'infUnion',
  // 'infEmpire' = 'infEmpire',
  // 'liete' = 'liete',
  // 'infExSister' = 'infExSister',
  // 'findSister' = 'findSister',
  // 'killTroopCamp' = 'killTroopCamp',
  // 'deployTroop' = 'deployTroop',
  // 'powerPlay' = 'powerPlay',
  // 'lookAtTop' = 'lookAtTop',
  // 'workflow' = 'workflow',
  // 'shuffle' = 'shuffle',
  // 'passTurn' = 'passTurn',
  // 'noop' = 'noop',
  // 'retreat' = 'retreat',

