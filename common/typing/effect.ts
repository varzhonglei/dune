import { ECardCamp } from "./card"


export enum EConstraint {
  'paySpice' = 'paySpice',
  'payWater' = 'payWater',
  'payMoney' = 'payMoney',
  'payTLL' = 'payTLL',
  'loseTroops' = 'loseTroops',
  'retreatTroops' = 'retreatTroops',
  'ifGrafted' = 'ifGrafted',

  'trashYin' = 'trashYin',
  'trashCard' = 'trashCard',
  'trashSelf' = 'trashSelf',
  'loseInf' = 'loseInf',
  'fremenBound' = 'fremenBound',
  'fremen' = 'fremen',
  'fremenAlliance' = 'fremenAlliance',
  'sister' = 'sister',
  'sisterInPlay' = 'sisterInPlay',
  'sisterAlliance' = 'sisterAlliance',
  'union' = 'union',
  'unionAlliance' = 'unionAlliance',
  'empire' = 'empire',
  'empireAlliance' = 'empireAlliance',
  'dropCard' = 'dropCard',
  'gene1' = 'gene1',
  'gene2' = 'gene2',
  'techNumber' = 'techNumber',
  'mostTroops' = 'mostTroops',
  'agentOnEmpire' = 'agentOnEmpire',
  //贴贴
  'tieTie' = 'tieTie',
  'higherCouncil' = 'higherCouncil',
  'cardBuy' = 'cardBuy'
}

export enum EEffect {
  'combatIcon' = 'combatIcon',
  'trashCard' = 'trashCard',
  'getTroops' = 'getTroops',
  'getVP' = 'getVP',
  'getTroopsAndDeployThem' = 'getTroopsAndDeployThem',
  'getMoney' = 'getMoney',
  'getWater' = 'getWater',
  'getSpice' = 'getSpice',
  'cardBuy' = 'cardBuy',
  'TLLBuy' = 'TLLBuy',
  // 刀
  'dao' = 'dao', 
  'trashCardSelf' = 'trashCardSelf',
  'roleSkill' = "roleSkill",
  'research' = 'research',
  'paoC' = 'paoC',
  'collectSpice1' = 'collectSpice1',
  'collectSpice2' = 'collectSpice2',
  'collectSpice3' = 'collectSpice3',
  'drawCard' = 'drawCard',
  'drawYin' = 'drawYin',
  'acquireSpacingGuid' = 'acquireSpacingGuid',
  'constraint' = 'constraint',
  'getHei' = 'getHei',
  'height' = 'height',
  'unlock' = 'unlock',
  'or' = 'or',
  'buyTechSave' = 'buyTechSave',
  'buyTech' = 'buyTech',
  'buyTechMayUseSola' = 'buyTechMayUseSola',
  'buyTechCut' = 'buyTechCut',
  //舰
  'getJian' = 'getJian',
  'inf' = 'inf',
  'inf2' = 'inf2',
  'infChoseTwo' = 'infChoseTwo',
  'infFremen' = 'infFremen',
  'infSister' = 'infSister',
  'infUnion' = 'infUnion',
  'infEmpire' = 'infEmpire',
  'infMoreOne' = 'infMoreOne',
  'liete' = 'liete',
  'findSister' = 'findSister',
  'killTroopCamp' = 'killTroopCamp',
  'deployTroop' = 'deployTroop',
  'powerPlay' = 'powerPlay',
  'lookAtTop' = 'lookAtTop',
  'workflow' = 'workflow',
  'shuffle' = 'shuffle',
  'passTurn' = 'passTurn',
  'noop' = 'noop',
  'retreat' = 'retreat',
  'acquireLess3' = 'acquireLess3',
  'acquireLess5' = 'acquireLess5',
  'goldBug'= 'goldBug',
  'anotherTurn' = 'anotherTurn',
  //挖挖机
  'wawaji' = 'wawaji',
  'spiceMustFlowCost3' = 'spiceMustFlowCost3',

  'jian3dao'= 'jian3dao',
  'getGoldBug' = 'getGoldBug',
  'shaMoTuXi' = 'shaMoTuXi',
  'huoPaoCard' = "huoPaoCard",
  'opponentsLoseBTroops' = 'opponentsLoseBTroops',
  'opponentsDiscardCard' = 'opponentsDiscardCard',
  'otherKillDTroopsOrDiscardCard' = 'otherKillDTroopsOrDiscardCard',
  'allInSpiceLess2' = 'allInSpiceLess2',
  'secretChangeYin' = 'secretChangeYin',
  'yinYan' = 'yinYan',
}



export type TConstraint = {
  key: EConstraint, number?: number, target?: ECardCamp[]
}

export type TEffect = {
  key: EEffect, 
  mayAbandon?: boolean
  number?: number
  maxNumber?: number
  con?: TConstraint[]
  conBonus?: TEffect[]
  options?: TEffect[]
}