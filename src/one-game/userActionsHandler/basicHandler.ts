import { TCard } from "../../libs/cards"
import { Table } from "../../round-table/tables"
import { Dashboard } from "../../typing"

type TCreateHandler<T> = (dashboard:Dashboard, payload: T ) => void
type Handler<T> = {
  table: Table
  token: string,
  payload: T
}

type numberPayload = {
  number: number
}

type idPayload = {
  id: string
}

export const CreateHandler = <T>(fn: TCreateHandler<T>) => ({
    table,
    token,
    payload }: Handler<T>
  ) => {
    table.store.setState(s => {
      const dashboard = s.dashboards.find(d => d.user?.token === token)
      if (dashboard) {
        fn(dashboard, payload) 
      }
  }) 
}

export const trashCard = CreateHandler<idPayload>((dashboard, payload) => {
    let trashedCard:TCard[] = []

    const ind1 = dashboard.qiCards.findIndex(c => c.id === payload.id)
    if (ind1 !== -1) trashedCard = dashboard.qiCards.splice(ind1,1)

    const ind2 = dashboard.playedCards.findIndex(c => c.id === payload.id)
    if (ind2 !== -1) trashedCard = dashboard.playedCards.splice(ind1,1)

    const ind3 = dashboard.playedCards.findIndex(c => c.id === payload.id)
    if (ind3 !== -1) trashedCard = dashboard.playedCards.splice(ind1,1)

    trashedCard[0] && dashboard.trashedCards.push(trashedCard[0])

  })


export const getTroops = CreateHandler<numberPayload>((dashboard, payload) => {
  for(let i = 0; i < payload.number; i++) {
    let bin = dashboard.troops.troopsSupply.pop()
    if (!bin) bin = dashboard.troops.troopsTLL.pop()
    bin && dashboard.troops.troopsCamp.push(bin)
  }
})


export const getMoney = CreateHandler<numberPayload>((dashboard, payload) => {
    dashboard.money = dashboard.money + payload.number
})


export const getWater = CreateHandler<numberPayload>((dashboard, payload) => {
  dashboard.water = dashboard.water + payload.number
})

export const getSpice = CreateHandler<numberPayload>((dashboard, payload) => {
  dashboard.spice = dashboard.spice + payload.number
})

export const cardBuy = CreateHandler<numberPayload>((dashboard, payload) => {
  dashboard.cardBuy = dashboard.cardBuy + payload.number
})

export const TLLBuy = CreateHandler<numberPayload>((dashboard, payload) => {
  for(let i = 0; i < payload.number; i++) {
    const bin = dashboard.troops.troopsSupply.pop()
    bin && dashboard.troops.troopsCamp.push(bin)
  }
})

export const dao = CreateHandler<numberPayload>((dashboard, payload) => {
  dashboard.revealDao = dashboard.revealDao + payload.number
})

//todo
export const trashCardSelf = trashCard

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

