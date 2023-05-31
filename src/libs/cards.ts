import { EConstraint, EEffect } from "./effect"
import { StationIcon } from "./station"

export type TCard = {
  name: string
  playEffect: any
  revealEffect: any
  icons: StationIcon[]
  img?: any
}

const c1: TCard = {
  name: '香料控制',
  icons: [StationIcon.triangle],
  playEffect: {
    get: [{
      key: EEffect.constraint,
      con: [{ key: EConstraint.paySpice }],
      conBonus: [{ key: EEffect.trashCard },{ key: EEffect.getTroops }]
    }]
  },
  revealEffect: {
    get: [{ key: EEffect.cardBuy }]
  }
}

const c2 = {
  name: '外交',
  icons: [StationIcon.fremen, StationIcon.sister, StationIcon.union, StationIcon.empire],
  playEffect: {},
  revealEffect: {
    get: [{ key: EEffect.cardBuy }]
  }
}

const c3 = {
  name: '寻求盟友',
  icons: [StationIcon.fremen, StationIcon.sister, StationIcon.union, StationIcon.empire],
  playEffect: { get: [{ key: EEffect.trashCardSelf }] },
  revealEffect: {
    get: [{ key: EEffect.cardBuy }]
  }
}

const c4 = {
  name: 'todo 三角',
  icons: [StationIcon.triangle],
  playEffect: { get: [{ key: EEffect.research }] },
  revealEffect: {
    get: [{ key: EEffect.cardBuy }, { key: EEffect.TLLBuy }]
  }
}

const c5 = {
  name: '土地测量',
  icons: [StationIcon.circle],
  playEffect: {},
  revealEffect: {
    get: [{ key: EEffect.cardBuy }]
  }
}

const c6 = {
  name: '说服',
  icons: [],
  playEffect: {},
  revealEffect: {
    get: [{ key: EEffect.cardBuy, number: 2 }]
  }
}

const c7 = {
  name: '匕首',
  icons: [StationIcon.pentagon],
  playEffect: {},
  revealEffect: {
    get: [{ key: EEffect.dao }]
  }
}

const c8 = {
  name: '印章戒指',
  icons: [StationIcon.pentagon, StationIcon.triangle, StationIcon.circle],
  playEffect: { get: [{ key: EEffect.roleSkill }] },
  revealEffect: {
    get: [{ key: EEffect.cardBuy }]
  }
}


export const basicCards = [c1,c2,c3,c4,c4, c5,c6,c6,c7,c7, c8]

const spiceMustFlow = {
  name: '香料永流传',
  price: 9,
  icons: [],
  playEffect: {},
  revealEffect: {
    get: [{ key: EEffect.getSpice }]
  }
}
export const spiceMustFlowCards = Array.from({length: 10}).map(_ => spiceMustFlow)

const fremen = {
  name: 'fremen bro',
  price: 2,
  icons: [StationIcon.pentagon, StationIcon.circle],
  playEffect: {},
  revealEffect: {
    get: [{ key: EEffect.getSpice }]
  }
}

export const fremenCards = Array.from({length: 9}).map(_ => fremen)

const spacingGuid = {
  name: 'Spacing Guid',
  icons: Object.values(StationIcon),
  playEffect: {
    get: [{ key: EEffect.drawCard }]
  },
  revealEffect: {}
}

export const spacingGuidCards = Array.from({length: 6}).map(_ => spacingGuid)
