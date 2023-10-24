

export enum EConstraint {
  'paySpice' = 'paySpice',
  'payWater' = 'payWater',
  'payMoney' = 'payMoney',

  'trashCard' = 'trashCard',
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
}

export enum EEffect {
  'trashCard' = 'trashCard',
  'getTroops' = 'getTroops',
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
  'saveTechBuy' = 'saveTechBuy',
  'byTechLess1' = 'byTechLess1',
  'byTech' = 'byTech',
  'getJian' = 'getJian',
  'inf' = 'inf',
  'inf2' = 'inf2',
  'infFremen' = 'infFremen',
  'infSister' = 'infSister',
  'infUnion' = 'infUnion',
  'infEmpire' = 'infEmpire',
  'liete' = 'liete',
  'infExSister' = 'infExSister',
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
}

export type TConstraint = {
  key: EConstraint, number?: number
}

export type TEffect = {
  key: EEffect, number?: number
  con?: TConstraint[]
  conBonus?: TEffect[]
  options?: TEffect[]
}