import { Table } from "../../round-table/tables"
import { Dashboard } from "../../typing"

type TCreateHandlerP<T> = {
  table: Table
  token: string,
  fn: (dashboard:Dashboard ) => void
}
export const CreateHandler = <T>({
  table,
  token,
  fn
}: TCreateHandlerP<T>) => {
  table.store.setState(s => {
    const dashboard = s.dashboards.find(d => d.user?.token === token)
    if (dashboard) {
      return fn(dashboard)
    } 
  }) 
}

type THandler<T> = {
  table: Table
  token: string,
  payload: T
}

type TTrashCard = THandler<{
  from: 'playedCards' | 'qiCards' | 'handCards',
  cardName: string
}>
export const trashCard = ({
  table,
  token,
  payload,
}: TTrashCard) => {
  return CreateHandler({
    table,
    token,
    fn: (dashboard) => {
      const ind = dashboard[payload.from].findIndex(c => c.name === payload.cardName)
      const trashedCard = dashboard[payload.from].splice(ind,1)
      trashedCard[0] && dashboard.trashedCards.push(trashedCard[0])
    }
  })
}


type TNumberHandler = THandler<{
  number: number
}>
export const getTroops = ({
  table,
  token,
  payload,
}: TNumberHandler) => {
  return CreateHandler({
    table,
    token,
    fn: (dashboard) => {
      for(let i = 0; i < payload.number; i++) {
        let bin = dashboard.troops.troopsSupply.pop()
        if (!bin) bin = dashboard.troops.troopsTLL.pop()
        bin && dashboard.troops.troopsCamp.push(bin)
      }
    }
  })
}

export const getMoney = ({
  table,
  token,
  payload,
}: TNumberHandler) => {
  return CreateHandler({
    table,
    token,
    fn: (dashboard) => {
      dashboard.money = dashboard.money + payload.number
    }
  })
}

export const getWater = ({
  table,
  token,
  payload,
}: TNumberHandler) => {
  return CreateHandler({
    table,
    token,
    fn: (dashboard) => {
      dashboard.water = dashboard.water + payload.number
    }
  })
}

export const getSpice = ({
  table,
  token,
  payload,
}: TNumberHandler) => {
  return CreateHandler({
    table,
    token,
    fn: (dashboard) => {
      dashboard.spice = dashboard.spice + payload.number
    }
  })
}

export const cardBuy = ({
  table,
  token,
  payload,
}: TNumberHandler) => {
  return CreateHandler({
    table,
    token,
    fn: (dashboard) => {
      dashboard.cardBuy = dashboard.cardBuy + payload.number
    }
  })
}


export const TLLBuy = ({
  table,
  token,
  payload,
}: TNumberHandler) => {
  return CreateHandler({
    table,
    token,
    fn: (dashboard) => {
      for(let i = 0; i < payload.number; i++) {
        const bin = dashboard.troops.troopsSupply.pop()
        bin && dashboard.troops.troopsCamp.push(bin)
      }
    }
  })
}




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

