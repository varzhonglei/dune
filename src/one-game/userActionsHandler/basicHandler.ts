import { shuffle } from "lodash"
import { TCard } from "../../../common/cards/cards"
import { Dashboard, Role } from "../../../common/typing"
import { EConstraint, EEffect } from "../../../common/typing/effect"
import { Game } from "../../../common/game"
import { LocationIcon, TBaiFoDi, baiFoBonus } from "../../../common/locations/locations"


type TNumberPayload = {
  number: number
}

type TIdPayload = {
  id: number
}


type PartialKey<T, K extends keyof T> = {
  [key in K]?: T[key]
};

type Handler<T> = (
  dashboard:Dashboard, 
  payload: T, 
  game: Game) => void

type THandlers = PartialKey<{
  [key in EConstraint | EEffect]: Handler<any>
}, EConstraint | EEffect>


const trashCard:Handler<TIdPayload> = (dashboard, payload) => {
  let trashedCard:TCard[] = []

  const ind1 = dashboard.qiCards.findIndex(c => c.id === payload.id)
  if (ind1 !== -1) trashedCard = dashboard.qiCards.splice(ind1,1)

  const ind2 = dashboard.playedCards.findIndex(c => c.id === payload.id)
  if (ind2 !== -1) trashedCard = dashboard.playedCards.splice(ind1,1)

  const ind3 = dashboard.handCards.findIndex(c => c.id === payload.id)
  if (ind3 !== -1) trashedCard = dashboard.handCards.splice(ind1,1)

  trashedCard[0] && dashboard.trashedCards.push(trashedCard[0])
}


const handlers: THandlers = {
  trashCardSelf: trashCard,
  trashCard,
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
  drawYin: (dashboard, payload:TNumberPayload, game) => {
    const theYin = game.yinCards.shift()
    if (theYin) {
      dashboard.yinCards.push(theYin)
    }
  },
  acquireSpacingGuid: (dashboard, payload:TNumberPayload, game) => {
    const theC = game.spacingGuidCards.shift()
    if (theC) {
      dashboard.qiCards.push(theC)
    }
  },
  drawCard: (dashboard, payload:TNumberPayload) => {
    const number = payload.number
    if (dashboard.moCards.length >= number) {
      const cards = dashboard.moCards.splice(0, number)
      dashboard.handCards.push(...cards)
    } else {
      const qiCards = shuffle(dashboard.qiCards)
      dashboard.moCards.push(...qiCards)
      dashboard.qiCards = []

      const cards = dashboard.moCards.splice(0, number)
      dashboard.handCards.push(...cards)
    }
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
  collectSpice1: (dashboard, payload:TNumberPayload, game) => {
    const location = game.locations?.find(l => l.id === 'spice1')
    if (location) {
      dashboard.spice = dashboard.spice + 1 + (location?.spice || 0)
      location.spice = 0
    }
  },
  collectSpice2: (dashboard, payload:TNumberPayload, game) => {
    const location = game.locations?.find(l => l.id === 'spice2')
    if (location) {
      dashboard.spice = dashboard.spice + 2 + (location?.spice || 0)
      location.spice = 0
    }
  },
  collectSpice3: (dashboard, payload:TNumberPayload, game) => {
    const location = game.locations?.find(l => l.id === 'spice3')
    if (location) {
      dashboard.spice = dashboard.spice + 3 + (location?.spice || 0)
      location.spice = 0
    }
  },
  infFremen: (dashboard, payload: TNumberPayload, game) => {
    handlers.inf && handlers.inf(dashboard, {
      ...payload,
      theBaifo: LocationIcon.fremen,
    }, game,
    )
  },
  infSister: (dashboard, payload: TNumberPayload, game) => {
    handlers.inf && handlers.inf(dashboard, {
      ...payload,
      theBaifo: LocationIcon.sister,
    }, game)
  },
  infUnion: (dashboard, payload: TNumberPayload, game) => {
    handlers.inf && handlers.inf(dashboard, {
      ...payload,
      theBaifo: LocationIcon.union,
    }, game)
  },
  infEmpire: (dashboard, payload: TNumberPayload, game) => {
    handlers.inf && handlers.inf(dashboard, {
      ...payload,
      theBaifo: LocationIcon.union,
    }, game)
  },
  inf: (dashboard, payload: {
    number: number,
    theBaifo: TBaiFoDi
  }, game) => {
    const theBaifo = payload.theBaifo
    const theAlliance = `${theBaifo}Alliance` as 'fremenAlliance'
    const myName = dashboard.user?.name 

    const old = dashboard[theBaifo] 

    // todo, 如果玩家选择 退一， 那么要防止他的影响扣为-1
    dashboard[theBaifo] = Math.min(dashboard[theBaifo] + payload.number, 5)

    // 同盟
    if (payload.number < 0 && dashboard[theAlliance]) {
      const theDs = game.dashboards.find(d => d.user?.name !== myName 
        && d[theBaifo] > dashboard[theBaifo])
      if (theDs) {
        // todo: 如果有过个 玩家持平，那么由退下去的玩家选择给谁 token
        theDs[theAlliance] = true
        dashboard[theAlliance] = false
      } else if (dashboard[theBaifo] < 3) {
        dashboard[theAlliance] = false
      }
    }

    if (dashboard[theBaifo] >= 3) {
      const theDs = game.dashboards.find(d => d.user?.name !== myName 
        && d[theBaifo] >= dashboard[theBaifo])
      if (!theDs) {
        dashboard[theAlliance] = true
      }
    }

    //奖励
    if (dashboard[theBaifo] === 4 && old === 3) {
      dashboard.effects.push(baiFoBonus[theBaifo])
    }
  },
  // 戒指效果
  roleSkill: (dashboard, payload: any, game) => {
    const role = dashboard.role
    if (role === Role.polo) {
      handlers.drawCard && handlers.drawCard(dashboard, {
        number: 1,
      }, game)
    }
    if (role === Role.dagong) {
      dashboard.currentEffect = { key: EEffect.acquireLess3 } 
    }
    if (role === Role.longbo) {
      dashboard.currentEffect = { 
        key: EEffect.or,
        options: [{
          key: EEffect.buyTechSave,
        }, {
          key: EEffect.buyTech,
        }]
      } 
    }
    if (role === Role.fanshu2) {
      const hasA = dashboard.fremenAlliance || dashboard.sisterAlliance || dashboard.unionAlliance || dashboard.empireAlliance
      handlers.getTroops && handlers.getTroops(dashboard, {
        number: hasA ? 2 : 1
      }, game)
    }
    if (role === Role.hailena) {
      // const hasA = dashboard.fremenAlliance || dashboard.sisterAlliance || dashboard.unionAlliance || dashboard.empireAlliance
      // handlers.getTroops && handlers.getTroops(dashboard, {
      //   number: hasA ? 2 : 1
      // }, game)
    }
  },

}


export const BasicHandler = ({ dashboard, typeKey, payload, game }: {
  dashboard: Dashboard, 
  typeKey: EConstraint | EEffect, 
  payload: any
  game: Game
}) => {
  const handler = handlers[typeKey]
  if (handler) {
    handler(dashboard, {
      number: payload.number ?? 1,
      id: payload.id ?? -1
    }, game)
  }
}


// //todo

  // 'roleSkill' = "roleSkill",
  // 'research' = 'research',
  // 'paoC' = 'paoC',

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

