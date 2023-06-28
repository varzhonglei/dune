import { EEffect } from "../../libs/effect"
import { Table } from "../../round-table/tables"
import { TAction } from "../userActions"


type P = {
  table: Table
  token: string,
  effect: EEffect
}
// export const basicHandler = ({
//   table,
//   token,
//   effect,
// }: P) => {
  
// }


// trashedCards: TCard[]

type PCC = {
  table: Table
  token: string,
  payload: {
    from: 'playedCards' | 'qiCards' | 'handCards',
    cardName: string
  }
}

const CreateHandler = ({
  table,
  token,
}: PCC) => {
  table.store.setState(s => {
    const dashboard = s.dashboards.find(d => d.user?.token === token)
  }) 
}

type PTrashCard = {
  table: Table
  token: string,
  payload: {
    from: 'playedCards' | 'qiCards' | 'handCards',
    cardName: string
  }
}
const trashCard = ({
  table,
  token,
  payload,
}: PTrashCard) => {
  table.store.setState(s => {
    const dashboard = s.dashboards.find(d => d.user?.token === token)
    if (dashboard) {
      const ind = dashboard[payload.from].findIndex(c => c.name === payload.cardName)
      const trashedCard = dashboard[payload.from].splice(ind,1)
      trashedCard[0] && dashboard.trashedCards.push(trashedCard[0])
    }
  })
}


type PGetTroops = {
  table: Table
  token: string,
  payload: {
    number: number
  }
}
const getTroops = ({
  table,
  token,
  payload,
}: PGetTroops) => {
  table.store.setState(s => {
    const dashboard = s.dashboards.find(d => d.user?.token === token)
    if (dashboard) {
      for(let i = 0; i < payload.number; i++) {
        let bin = dashboard.troops.troopsSupply.pop()
        if (!bin) bin = dashboard.troops.troopsKeji.pop()
        bin && dashboard.troops.troopsCamp.push(bin)
      }
    }
  })
}




export enum EEffect {
  'trashCard' = 'trashCard',
  'getTroops' = 'getTroops',

  // 'getMoney' = 'getMoney',
  // 'getWater' = 'getWater',
  // 'getSpice' = 'getSpice',
  // 'cardBuy' = 'cardBuy',
  // 'TLLBuy' = 'TLLBuy',
  // 'dao' = 'dao', 
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
}
