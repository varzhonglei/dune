

export enum EConstraint {
  'paySpice' = 'paySpice',
  'payWater' = 'payWater',
  'payMoney' = 'payMoney',
  'payTLL' = 'payTLL',
  'loseTroops' = 'loseTroops',
  'retreatTroops' = 'retreatTroops',
  'ifGrafted' = 'ifGrafted',

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
}

export enum EEffect {
  'trashCard' = 'trashCard',
  'getTroops' = 'getTroops',
  'getVP' = 'getVP',
  'getTroopsAndDeployThem' = 'getTroopsAndDeployThem',
  'getMoney' = 'getMoney',
  'getWater' = 'getWater',
  'getSpice' = 'getSpice',
  'cardBuy' = 'cardBuy',
  'TLLBuy' = 'TLLBuy',
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
  'buyTechCut' = 'buyTechCut',
  'getJian' = 'getJian',
  'inf' = 'inf',
  'inf2' = 'inf2',
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
  'opponentsLoseBTroops' = 'opponentsLoseBTroops',
  'anotherTurn' = 'anotherTurn',
  'wawaji' = 'wawaji',
  'spiceMustFlowCost3' = 'spiceMustFlowCost3',
  'jian3'= 'jian3',
  'shaMoTuXi' = 'shaMoTuXi',
}

export type TConstraint = {
  key: EConstraint, number?: number
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