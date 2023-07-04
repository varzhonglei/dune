import { Table } from "../../round-table/tables"
import { Dashboard } from "../../typing"

type TCreateHandlerP<T> = (dashboard:Dashboard, payload: T ) => void
type Handler<T> = {
  table: Table
  token: string,
  payload: T
}
export const CreateHandler = <T>(fn: TCreateHandlerP<T>) => ({
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

type trashCardP = {
  from: 'playedCards' | 'qiCards' | 'handCards',
  cardName: string
}
export const trashCard = CreateHandler<trashCardP>((dashboard, payload) => {
    const ind = dashboard[payload.from].findIndex(c => c.name === payload.cardName)
    const trashedCard = dashboard[payload.from].splice(ind,1)
    trashedCard[0] && dashboard.trashedCards.push(trashedCard[0])
  })

type numberP = {
  number: number
}
export const getTroops = CreateHandler<numberP>((dashboard, payload) => {
  for(let i = 0; i < payload.number; i++) {
    let bin = dashboard.troops.troopsSupply.pop()
    if (!bin) bin = dashboard.troops.troopsTLL.pop()
    bin && dashboard.troops.troopsCamp.push(bin)
  }
})


export const getMoney = CreateHandler<numberP>((dashboard, payload) => {
    dashboard.money = dashboard.money + payload.number
})


export const getWater = CreateHandler<numberP>((dashboard, payload) => {
  dashboard.water = dashboard.water + payload.number
})

export const getSpice = CreateHandler<numberP>((dashboard, payload) => {
  dashboard.spice = dashboard.spice + payload.number
})

export const cardBuy = CreateHandler<numberP>((dashboard, payload) => {
  dashboard.cardBuy = dashboard.cardBuy + payload.number
})

export const TLLBuy = CreateHandler<numberP>((dashboard, payload) => {
  for(let i = 0; i < payload.number; i++) {
    const bin = dashboard.troops.troopsSupply.pop()
    bin && dashboard.troops.troopsCamp.push(bin)
  }
})

export const dao = CreateHandler<numberP>((dashboard, payload) => {
  dashboard.revealDao = dashboard.revealDao + payload.number
})

  // 'trashCardSelf' = 'trashCardSelf',
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

